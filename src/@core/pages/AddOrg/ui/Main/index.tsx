import { FC } from 'react'
import { MODEL_FORM_INCOME } from '../../model/types'
import { Box, FormControl, FormErrorMessage, FormLabel, Img, Input, Select, Text, Tooltip } from '@chakra-ui/react'
import { useLang } from '@/@core/shared/hooks/useLang'
import { AddorgFormInput } from '@/@core/entities/AddorgFormInput'
import { AddorgAccordionInputs } from '@/@core/entities/AddorgAccordionInputs'
import Swal from 'sweetalert2'
import { useAddorgSlicer } from '../../model/Slicer'

export const AddOrgMainInfo: FC<MODEL_FORM_INCOME> = props => {
  const { register, errors } = props
  const { photos, setPhotos } = useAddorgSlicer()
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

  return (
    <Box>
      {/* <AddorgFormInput
        register={register}
        errors={errors}
        value='razdel'
        placeholder={t('razdel')}
        minLength={3}
        maxLength={100}
        required
        label={t('razdel')}
        errortext={t('required-field')}
      /> */}
      <FormControl isInvalid={!!errors.razdel}>
        <FormLabel>{t('razdel')}</FormLabel>
        <Select {...register('category_id', { required: true, minLength: 3, maxLength: 100 })}>
          <option value='null'>yo'q</option>
          <option value='00c73b89-1499-42df-9ab9-1048762ab540'>apteka</option>
          <option value='159f5867-26eb-40ba-a608-08b3204f52ea'>iib</option>
          <option value='2282d789-398a-4745-a926-9c8773caea13'>fuqarolik sudi</option>
        </Select>
        <FormErrorMessage color={'red.300'} fontSize={'12px'}>
          {t('required-field')}
        </FormErrorMessage>
      </FormControl>
      {/* <AddorgFormInput
        register={register}
        errors={errors}
        value='podrazdel'
        placeholder={t('podrazdel')}
        minLength={3}
        maxLength={100}
        required
        label={t('podrazdel')}
        errortext={t('required-field')}
      /> */}
      <FormControl>
        <FormLabel>{t('podrazdel')}</FormLabel>
        <Select {...register('sub_category_id', { required: true, minLength: 3, maxLength: 100 })}>
          <option value='null'>yo'q</option>
          <option value='74ed1bc3-9672-4f05-8576-2dbac72d8d09'>777 apteka</option>
          <option value='311f9dc3-bde6-4d72-90e8-3cd3c5ac5484'>Arzon apteka</option>
        </Select>
        <FormErrorMessage color={'red.300'} fontSize={'12px'}>
          {t('required-field')}
        </FormErrorMessage>
      </FormControl>
      {/* <AddorgFormInput
        register={register}
        errors={errors}
        value='section'
        placeholder={t('section')}
        minLength={3}
        maxLength={100}
        required
        label={t('section')}
        errortext={t('required-field')}
      /> */}
      <FormControl>
        <FormLabel>{t('section')}</FormLabel>
        <Select {...register('section', { required: true, minLength: 3, maxLength: 100 })}>
          <option value='null'>yo'q</option>
          <option value='d48cbae9-9820-443a-b349-8e7fa4bce572'>ishlab chiqarish</option>
          <option value='dd14d79e-0020-4c85-b3a7-19b1a023899b'>xizmat ko'rsatish</option>
        </Select>
        <FormErrorMessage color={'red.300'} fontSize={'12px'}>
          {t('required-field')}
        </FormErrorMessage>
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
