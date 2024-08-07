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
  const { phones, photos, coordinates, setPhotos, setPhones, razdel, setRazdel, podrazdel, setPodrazdel } =
    useAddorgSlicer()

  // POST
  const POST = async (values: any) => {
    if (photos.length === 0) return Swal.fire({ text: t('warning-need-photo'), icon: 'warning' })
    const formData = new FormData()
    const body = {
      sub_category_id: values.sub_category_id,
      main_organization: values.main_organization,
      manager: values.manager,
      section: values.section,
      organization_name: values.organization_name,
      email: values.email,
      address: `${
        (values.index, values.region, values.city, values.area, values.house, values.block, values.apartment)
      }`,
      segment: values.segment,
      account: values.account,
      inn: values.inn,
      bank_account: values.bank_account,
      comment: values.comment,
      payment_types: {
        cash: values.cash,
        terminal: values.terminal,
        transfer: values.transfer
      },
      scheduler: {
        worktime_from: values.worktime_from,
        worktime_to: values.worktime_to,
        breakfast_from: values.breakfast_from,
        breakfast_to: values.breakfast_to,
        dayoffs: values.dayoffs
      },
      transport: {
        bus: values.autobus,
        gazelle: values.marshrut,
        metro_station: values.metro_station,
        micro_bus: values['micro-autobus']
      },
      location: { coordinates: { lon: coordinates[0], lat: coordinates[1] } },
      added_by: 'admin',
      phones: {
        numbers: phones.map((phone: { id: number; value: string; type: string }) => ({
          number: phone.value,
          type_number: phone.type
        }))
      },
      pictures: photos
    }
    formData.append('data', JSON.stringify(body))
    console.log(JSON.parse(formData.get('data') as string), 'values')
    const res = await postCreateOrg(JSON.parse(formData.get('data') as string))

    if (res?.status === 200) {
      Swal.fire({ text: t('success-create-organization'), icon: 'success' })
      router.push('/')
    }
  }

  // GET VALUES FOR EDIT
  useEffect(() => {
    // razdel.length === 0 && getRazdel().then(res => setRazdel(res))
    searchParams.get('id') && console.log('edit', searchParams.get('id'))
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
