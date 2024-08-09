import { FC } from 'react'
import { MODEL_FORM_INCOME } from '../../model/types'
import { Box, FormControl, FormErrorMessage, FormLabel, Img, Input, Select, Text, Tooltip } from '@chakra-ui/react'
import { useLang } from '@/@core/shared/hooks/useLang'
import { AddorgFormInput } from '@/@core/entities/AddorgFormInput'
import { AddorgAccordionInputs } from '@/@core/entities/AddorgAccordionInputs'
import Swal from 'sweetalert2'
import { useAddorgSlicer } from '../../model/Slicer'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { getPodrazdelByRazdel } from '@/@core/shared/api/getters'
// STYLE
const style = {
  formControl: {
    mt: { base: '0', sm: '10px', md: '10px', xl: '10px' },
    mb: { base: '1em', sm: '1em', md: '1em', xl: '1em' }
  },
  formLabel: {
    fontSize: { base: '13px', sm: '13px', md: '16px', xl: '16px' },
    mb: { base: '2px', sm: '2px', md: '8px', xl: '8px' },
    fontWeight: 500
  },
  input: {
    fontSize: { base: '13px', sm: '13px', md: '14px', xl: '14px' },
    bg: 'white',
    border: '1px solid rgba(0, 0, 0, 0.10)',
    _focus: { boxShadow: `0 0 2px ${scssVariables.blockBgColor}`, border: '1px solid teal' },
    boxShadow: scssVariables.boxShadow,
    h: { base: '30px', sm: '30px', md: '45px', xl: '45px' }
  },
  errorMessage: {
    fontSize: { base: '12px', sm: '12px', md: '14px', xl: '14px' },
    color: 'red.300'
  }
}

export const AddOrgMainInfo: FC<MODEL_FORM_INCOME> = props => {
  const { register, errors } = props
  const { photos, setPhotos, podrazdel, serviceType, razdel, setPodrazdel } = useAddorgSlicer()
  const { t } = useLang()

  //   UPLOAD
  const handleUpload = async ({ target: { files } }: { target: { files: any } }) => {
    const file = { id: Date.now(), file: files[0] }
    file && setPhotos([...photos, file])
  }

  //   DELETE
  const handleDelete = (id: number) => {
    setPhotos(photos.filter((file: any) => file.id !== id))
  }

  //   OPEN
  const handleOpen = async (id: number) => {
    const filter = photos.filter((file: any) => file.id === id)
    if (filter.length === 0) return

    Swal.fire({
      imageUrl: URL.createObjectURL(filter[0].file),
      imageHeight: 'auto',
      imageWidth: 'auto',
      imageAlt: 'Custom image',
      showConfirmButton: false
    })
  }

  const handleChangeRazdel = async ({ target: { value } }: { target: { value: string } }) => {
    if (value === '') return null
    const res = await getPodrazdelByRazdel(value)
    res?.status === 200 && setPodrazdel(res?.data?.sub_category_orgs)
  }

  return (
    <Box>
      <FormControl isInvalid={!!errors.razdel} sx={style.formControl}>
        <FormLabel sx={style.formLabel}>{t('razdel')}</FormLabel>
        <Select
          {...register('category_id', { required: true, minLength: 3, maxLength: 100 })}
          sx={style.input}
          defaultValue={''}
          onChange={handleChangeRazdel}
        >
          <option value='' disabled>
            {t('choose')}
          </option>
          {razdel?.map((item: any) => (
            <option key={item?.id} value={item?.id}>
              {item?.title}
            </option>
          ))}
        </Select>
        <FormErrorMessage sx={style.errorMessage}>{t('required-field')}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.podrazdel} sx={style.formControl}>
        <FormLabel sx={style.formLabel}>{t('podrazdel')}</FormLabel>
        <Select
          {...register('sub_category_id', { required: true, minLength: 3, maxLength: 100 })}
          sx={style.input}
          defaultValue={''}
        >
          <option value='' disabled>
            {t('choose')}
          </option>
          {podrazdel?.map((item: any) => (
            <option key={item?.id} value={item?.id}>
              {item?.title}
            </option>
          ))}
        </Select>
        <FormErrorMessage sx={style.errorMessage}>{t('required-field')}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.section} sx={style.formControl}>
        <FormLabel sx={style.formLabel}>{t('section')}</FormLabel>
        <Select
          {...register('section', { required: true, minLength: 3, maxLength: 100 })}
          sx={style.input}
          defaultValue={''}
        >
          <option value='' disabled>
            {t('choose')}
          </option>
          {serviceType?.map((item: any) => (
            <option key={item?.id} value={item?.id}>
              {item?.title}
            </option>
          ))}
        </Select>
        <FormErrorMessage sx={style.errorMessage}>{t('required-field')}</FormErrorMessage>
      </FormControl>
      <AddorgAccordionInputs
        register={register}
        errors={errors}
        label={t('detail')}
        inputs={[
          {
            id: 1,
            value: 'segment',
            placeholder: t('segment')
          },
          {
            id: 2,
            value: 'account',
            placeholder: t('account')
          },
          {
            id: 3,
            value: 'inn',
            placeholder: t('inn')
          },
          {
            id: 4,
            value: 'bank_account',
            placeholder: t('bank_account')
          }
        ]}
      />

      <AddorgFormInput
        register={register}
        errors={errors}
        value='organization_name'
        placeholder={'Бахор кафеси'}
        minLength={3}
        maxLength={100}
        required
        label={t('organization-name')}
        errortext={t('required-field')}
      />
      <AddorgFormInput
        register={register}
        errors={errors}
        value='main_organization'
        placeholder={'Ички ишлар вазирлиги'}
        label={t('main_organization')}
      />
      <AddorgFormInput
        register={register}
        errors={errors}
        value='manager'
        placeholder={'Азизов Азиз главный администратор'}
        label={t('manager')}
      />
      <Box mt={{ base: '2em', sm: '2em', md: '3em', xl: '3em' }}>
        <Text
          fontWeight={400}
          fontSize={{ base: '12px', sm: '12px', md: '16px', xl: '16px' }}
          color={'grey'}
          mb={{ base: '8px', sm: '8px', md: '10px', xl: '10px' }}
        >
          {t('add-image')}
        </Text>
        <Box display={'flex'} flexWrap={'wrap'} gap={{ base: '8px', sm: '8px', md: '15px', xl: '20px' }}>
          {photos.map((file: any, index: number) => {
            return (
              <Box key={index} position={'relative'}>
                <Img
                  src={URL.createObjectURL(file.file)}
                  w={{ base: '80px', sm: '80px', md: '99px', xl: '99px' }}
                  h={{ base: '80px', sm: '80px', md: '99px', xl: '99px' }}
                  alt={'image'}
                  borderRadius={'8px'}
                  objectFit={'cover'}
                />
                <Box
                  position={'absolute'}
                  top={0}
                  right={0}
                  bg={'rgba(0,0,0,0.5)'}
                  w={'100%'}
                  h={'100%'}
                  borderRadius={'8px'}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  gap={'8px'}
                >
                  <Tooltip label={t('show')}>
                    <Img
                      onClick={() => handleOpen(file.id)}
                      src='/eye-fill.svg'
                      alt='eye'
                      width={5}
                      height={5}
                      _hover={{ opacity: '0.8' }}
                      cursor={'pointer'}
                      style={{
                        filter:
                          ' invert(100%) sepia(100%) saturate(0%) hue-rotate(157deg) brightness(200%) contrast(200%)'
                      }}
                    />
                  </Tooltip>
                  <Tooltip label={t('delete')}>
                    <Img
                      onClick={() => handleDelete(file.id)}
                      src='/delete.svg'
                      alt='delete'
                      width={5}
                      height={5}
                      _hover={{ opacity: '0.8' }}
                      cursor={'pointer'}
                      style={{
                        filter:
                          ' invert(100%) sepia(100%) saturate(0%) hue-rotate(157deg) brightness(104%) contrast(104%)'
                      }}
                    />
                  </Tooltip>
                </Box>
              </Box>
            )
          })}
          <Box>
            <FormControl isInvalid={photos.length === 0}>
              <FormLabel
                htmlFor='image-1'
                w={{ base: '80px', sm: '80px', md: '99px', xl: '99px' }}
                h={{ base: '80px', sm: '80px', md: '99px', xl: '99px' }}
                boxShadow={'0px 15px 20px 0px rgba(0, 0, 0, 0.05)'}
                cursor={'pointer'}
                borderRadius={'8px'}
                border={'1px solid rgba(0,0,0,0.10)'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                fontSize={{ base: '22px', sm: '12px', md: '16px', xl: '56px' }}
                margin={0}
                fontWeight={400}
                color={'grey'}
                _hover={{ bg: 'whitesmoke' }}
              >
                <Img
                  src={'/addOrganization/plus.svg'}
                  alt={'plus'}
                  w={{ base: '28px', sm: '28px', md: '38px', xl: '38px' }}
                />
              </FormLabel>
              <FormErrorMessage fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}>
                {t('required-field')}
              </FormErrorMessage>
              <Input type='file' id='image-1' display={'none'} onChange={handleUpload} />
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
