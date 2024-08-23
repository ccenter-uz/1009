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
import { patchEditOrg, postCreateOrg } from '@/@core/shared/api'
import { createOrgValues, editOrgValues } from '../model/helper'

const AddOrg: FC = () => {
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
  const { phones, photos, coordinates, setPhotos, pictures_create, pictures_delete, setPhones, GET, GET_FOR_EDIT } =
    useAddorgSlicer()

  // POST
  const POST = async (values: any) => {
    if (photos.length === 0) return Swal.fire({ text: t('warning-need-photo'), icon: 'warning' })
    const editId = searchParams.get('id')
    if (editId) {
      const formData = editOrgValues(values, phones, coordinates, pictures_delete, pictures_create)
      // EDIT
      const res = await patchEditOrg(editId, formData)

      res?.status === 201 &&
        (Swal.fire({ text: t('success-edit-organization'), icon: 'success' }), router.push('/myorg'))
    } else {
      const formData = createOrgValues(values, phones, coordinates, photos)
      // CREATE
      const res = await postCreateOrg(formData)

      res?.status === 201 &&
        (Swal.fire({ text: t('success-create-organization'), icon: 'success' }), router.push('/myorg'))
    }
  }

  // GET-FOR-EDIT
  const GET_EDIT = async () => {
    const editId = searchParams.get('id')
    if (editId) {
      const res = await GET_FOR_EDIT(editId)

      res?.map((item: any) => {
        reset({
          worktime_from: item?.scheduler?.worktime_from,
          worktime_to: item?.scheduler?.worktime_to,
          breakfast_from: item?.scheduler?.breakfast_from,
          breakfast_to: item?.scheduler?.breakfast_to,
          dayoffs: item?.scheduler?.dayoffs,
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
          autobus: item?.transport?.bus,
          marshrut: item?.transport?.gazelle,
          metro_station: item?.transport?.metro_station,
          'micro-autobus': item?.transport?.micro_bus
        })
      })
    }
  }

  // GET
  useEffect(() => {
    Promise.allSettled([GET(), GET_EDIT()])

    // CLEAN UP
    return () => {
      setPhones([])
      setPhotos([])
      reset()
    }
  }, [searchParams])

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
