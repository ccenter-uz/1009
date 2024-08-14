'use client'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { useLang } from '@/@core/shared/hooks/useLang'
import { Badge } from '@/@core/shared/UI/Badge'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  SimpleGrid,
  Text,
  Textarea,
  useColorMode
} from '@chakra-ui/react'
import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AddOrgMainInfo } from './Main'
import { AddOrgContacts } from './Contacts'
import { AddOrgAdditional } from './Additional'
import { useRouter, useSearchParams } from 'next/navigation'
import BreadCrumb from '@/@core/shared/UI/Breadcrumb'
import Swal from 'sweetalert2'
import { useAddorgSlicer } from '../model/Slicer'
import { getRazdel, postCreateOrg } from '@/@core/shared/api'
import { getOneOrganization, getPodrazdel, getServiceType } from '@/@core/shared/api'

export const AddOrg: FC = () => {
  const { t } = useLang()
  const searchParams = useSearchParams()
  const router = useRouter()
  const breadcrumbs = [
    {
      id: 1,
      title: searchParams.get('id') ? (
        <Text as={'span'} cursor={'pointer'} _hover={{ opacity: '0.8' }} onClick={() => router.back()}>
          {'< ' + t('back')}
        </Text>
      ) : null
    },
    {
      id: 2,
      title: searchParams.get('id') ? (
        <Text as={'span'}>{t('edit-organization')}</Text>
      ) : (
        <Text as={'span'}>{t('add-organization')}</Text>
      )
    }
  ]
  const { colorMode } = useColorMode()
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors }
  } = useForm()
  const {
    phones,
    photos,
    coordinates,
    setPhotos,
    setPhones,
    razdel,
    setRazdel,
    podrazdel,
    setPodrazdel,
    serviceType,
    setServiceType,
    setCoordinates
  } = useAddorgSlicer()

  // POST
  const POST = async (values: any) => {
    if (photos.length === 0) return Swal.fire({ text: t('warning-need-photo'), icon: 'warning' })
    const formData = new FormData()
    // PAYMENT TYPES
    formData.append(
      'payment_types',
      JSON.stringify({ cash: values.cash, terminal: values.terminal, transfer: values.transfer })
    )
    // PHONES
    formData.append(
      'phones',
      JSON.stringify({
        numbers: phones.map((phone: { id: number; value: string; type: string }) => ({
          number: phone.value,
          type_number: phone.type
        }))
      })
    )
    // TRANSPORT
    formData.append(
      'transport',
      JSON.stringify({
        bus: values.autobus,
        gazelle: values.marshrut,
        metro_station: values.metro_station,
        micro_bus: values['micro-autobus']
      })
    )
    // LOCATION
    formData.append('location', JSON.stringify({ coordinates: { lon: coordinates[0], lat: coordinates[1] } }))
    // SCHEDULER
    formData.append(
      'scheduler',
      JSON.stringify({
        worktime_from: values.worktime_from,
        worktime_to: values.worktime_to,
        breakfast_from: values.breakfast_from,
        breakfast_to: values.breakfast_to,
        dayoffs: values.dayoffs
      })
    )
    // SEGMENT
    formData.append('segment', values.segment)
    // ADDRESS
    formData.append(
      'address',
      `${values.index}, ${values.region}, ${values.city}, ${values.area}, ${values.house}, ${values.block}, ${values.apartment}`
    )
    // ORGANIZATION_NAME
    formData.append('organization_name', values.organization_name)
    // EMAIL
    formData.append('email', values.email)
    // INN
    formData.append('inn', values.inn)
    // BANK_ACCOUNT
    formData.append('bank_account', values.bank_account)
    // COMMENT
    formData.append('comment', values.comment)
    // MAIN_ORGANIZATION
    formData.append('main_organization', values.main_organization)
    // MANAGER
    formData.append('manager', values.manager)
    // SECTION
    formData.append('section', values.section)
    // SUB_CATEGORY
    formData.append('sub_category_id', values.sub_category_id)
    // ACCOUNT
    formData.append('account', values.account)
    // ADDED_BY
    formData.append('added_by', 'admin')
    // PICTURES
    for (let i = 0; i < photos.length; i++) {
      formData.append(`pictures${[i]}`, photos[i]?.file)
    }

    // POST
    const res = await postCreateOrg(formData)

    if (res?.status === 201) {
      Swal.fire({ text: t('success-create-organization'), icon: 'success' })
      router.push('/myorg')
    }
  }

  // GET
  const GET = async () => {
    const res = await Promise.all([getRazdel(), getPodrazdel(), getServiceType()])
    const razdel = res[0]?.data
    const podrazdelData = res[1]?.data
    const serviceTypeData = res[2]?.data

    if (podrazdelData) setPodrazdel(podrazdelData)
    if (serviceTypeData) setServiceType(serviceTypeData)
    if (razdel) setRazdel(razdel)
  }

  // GET-FOR-EDIT
  const GET_FOR_EDIT = async () => {
    if (searchParams.get('id')) {
      const res = await getOneOrganization(searchParams.get('id') as string)
      if (res?.status === 200) {
        setPhones(
          res?.data[0]?.phones?.map((item: any) => ({
            id: item?.id,
            value: item?.number,
            type: item?.type_number
          }))
        )
        setPhotos(res?.data[0]?.pictures)
        setCoordinates([
          parseFloat(JSON.parse(res?.data[0]?.location).coordinates?.lat),
          parseFloat(JSON.parse(res?.data[0]?.location).coordinates?.lon)
        ])
        res?.data?.map((item: any) => {
          reset({
            worktime_from: JSON.parse(item?.scheduler)?.worktime_from,
            worktime_to: JSON.parse(item?.scheduler)?.worktime_to,
            breakfast_from: JSON.parse(item?.scheduler)?.breakfast_from,
            breakfast_to: JSON.parse(item?.scheduler)?.breakfast_to,
            dayoffs: JSON.parse(item?.scheduler)?.dayoffs,
            sub_category_id: item?.sub_category_org?.id,
            category_id: item?.sub_category_org?.category_org?.id,
            main_organization: item?.main_organization,
            manager: item?.manager,
            section: item?.sectionId?.id,
            organization_name: item?.organization_name,
            email: item?.email,
            address: item?.address,
            segment: item?.segment,
            account: item?.account,
            inn: item?.inn,
            bank_account: item?.bank_account,
            comment: item?.comment,
            cash: item?.payment_types?.cash,
            terminal: item?.payment_types?.terminal,
            transfer: item?.payment_types?.transfer,
            autobus: JSON.parse(item?.transport)?.bus,
            marshrut: JSON.parse(item?.transport)?.gazelle,
            metro_station: JSON.parse(item?.transport)?.metro_station,
            'micro-autobus': JSON.parse(item?.transport)?.micro_bus
          })
        })
      }
    }
  }

  // GET VALUES FOR EDIT
  useEffect(() => {
    GET()
    GET_FOR_EDIT()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  // RESET VALUES WHEN UNMOUNT
  useEffect(() => {
    return () => {
      setPhones([])
      setPhotos([])
      reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box>
      <BreadCrumb item={breadcrumbs} />
      <Badge title={searchParams.get('id') ? t('edit-organization') : t('add-organization')} />

      <form onSubmit={handleSubmit(POST)} id='add-org'>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 2, xl: 3 }}
          w={'100%'}
          gap={{ base: '8px', sm: '8px', md: '44px', xl: '54px' }}
        >
          <AddOrgMainInfo register={register} errors={errors} />
          <AddOrgContacts register={register} errors={errors} />
          <AddOrgAdditional register={register} errors={errors} />
        </SimpleGrid>
        <Box
          w={'100%'}
          display={'flex'}
          justifyContent={'flex-end'}
          mt={{ base: '16px', sm: '16px', md: '20px', xl: '24px' }}
        >
          <FormControl isInvalid={!!errors.comment} w={'967px'}>
            <FormLabel fontWeight={500} mb={'5px'} htmlFor='comment' fontSize={scssVariables.fonts.paragraph}>
              {t('comment-area')}
            </FormLabel>
            <Textarea
              {...register('comment', { required: true })}
              rows={10}
              border={'1px solid rgba(0,0,0,0.10)'}
              _focus={{ boxShadow: 'none', border: '1px solid teal' }}
              fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}
              p={{ base: '5px 10px', sm: '5px 10px', md: '10px 16px', xl: '10px 16px' }}
              id='comment'
              placeholder={t('textarea-placeholder')}
              _placeholder={{ color: 'rgba(0,0,0,0.5)' }}
              bg={'#fff'}
              boxShadow={scssVariables.boxShadow}
            />
            <FormErrorMessage fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}>
              {t('required-field')}
            </FormErrorMessage>
          </FormControl>
        </Box>
        <Box
          w={'100%'}
          display={'flex'}
          justifyContent={'flex-end'}
          mt={{ base: '16px', sm: '16px', md: '20px', xl: '24px' }}
        >
          <Button
            w={{ base: '100%', sm: '240px', md: '240px', xl: '240px' }}
            h={{ base: '30px', sm: '30px', md: '40px', xl: '40px' }}
            fontSize={scssVariables.fonts.paragraph}
            bg={colorMode === 'dark' ? scssVariables.primary : scssVariables.gradientColor}
            variant={'unstyled'}
            color={'#fff'}
            type='submit'
            form='add-org'
            _hover={{ opacity: '0.8' }}
          >
            {searchParams.get('id') ? t('edit-organization') : t('add-organization')}
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default AddOrg
