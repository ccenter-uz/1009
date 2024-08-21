'use client'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  StyleFunctionProps
} from '@chakra-ui/react'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useFormStatus } from 'react-dom'
import { useLang } from '@/@core/shared/hooks/useLang'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { User } from 'react-feather'
import { patchChangeSettingData } from '@/@core/shared/api/patches'
import { useGlobalStore } from '@/@core/apps/store/global'
import { toast } from 'react-toastify'
import { api } from '@/@core/apps/utils/api'

const SettingChangeData: FC<Partial<StyleFunctionProps>> = ({ styles }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const { pending } = useFormStatus()
  const { t } = useLang()
  const [image, setImage] = useState<any>(null)
  const { userInfo, getUser } = useGlobalStore()

  // FINISH
  const handleFinish = async ({ full_name, old_password, new_password }: FieldValues) => {
    const body = new FormData()
    body.append('image', image ? image[0] : '')
    body.append('full_name', full_name)
    body.append('password', old_password)
    body.append('newpassword', new_password)
    const res = await patchChangeSettingData(userInfo?.id, body)

    res?.status === 200 && (toast.success(t(`success`), { position: 'bottom-right' }), getUser())
  }

  // LOAD
  useEffect(() => {
    if (userInfo) {
      setImage(userInfo?.image_link)
      reset({
        full_name: userInfo?.full_name
      })
    } else {
      getUser()
    }
  }, [userInfo])

  return (
    <form onSubmit={handleSubmit(handleFinish)} id='setting-form'>
      <FormControl w={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
        {image ? (
          <Image
            src={
              userInfo?.image_link
                ? `${api.defaults.baseURL}/${userInfo?.image_link}`
                : URL.createObjectURL(new Blob(image))
            }
            alt='image'
            w={{ base: '60px', sm: '60px', md: '80px', xl: '150px' }}
            h={{ base: '60px', sm: '60px', md: '80px', xl: '150px' }}
            border={'1px solid lightgrey'}
            borderRadius={'50%'}
            objectFit={'cover'}
          />
        ) : (
          <Box
            w={{ base: '60px', sm: '60px', md: '80px', xl: '150px' }}
            h={{ base: '60px', sm: '60px', md: '80px', xl: '150px' }}
            border={'1px solid lightgrey'}
            borderRadius={'50%'}
            bg={'teal'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <User width={'70%'} height={'70%'} color='#fff' />
          </Box>
        )}

        <FormLabel
          htmlFor='image'
          m={0}
          cursor={'pointer'}
          _hover={{ color: scssVariables.mainColor }}
          fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}
        >
          {t('change')}
          <Input
            type='file'
            onChange={(e: ChangeEvent<HTMLInputElement>) => e.target.files && setImage(e.target.files)}
            display={'none'}
            id='image'
            isDisabled={pending}
          />
        </FormLabel>
      </FormControl>
      <FormControl {...styles.formControlStyle} isInvalid={!!errors.full_name}>
        <FormLabel {...styles.labelStyle} htmlFor='fio-setting'>
          {t('auth-regis-fio')}
        </FormLabel>
        <Input
          {...styles.inputStyle}
          {...register('full_name', { required: true, minLength: 3 })}
          aria-label='full_name'
          aria-invalid={errors.full_name ? 'true' : 'false'}
          id='fio-setting'
          type='text'
          isDisabled={pending}
          autoComplete='off'
        />
        <FormErrorMessage color={'red'} fontSize={'12px'}>
          {t('auth-regis-fio-error')}
        </FormErrorMessage>
      </FormControl>
      <FormControl {...styles.formControlStyle} isInvalid={!!errors.old_password}>
        <FormLabel {...styles.labelStyle} htmlFor='oldPassword-setting'>
          {t('old-password')}
        </FormLabel>
        <Input
          {...styles.inputStyle}
          {...register('old_password', { required: true, minLength: 3 })}
          autoComplete='off'
          aria-label='old_password'
          aria-invalid={errors.old_password ? 'true' : 'false'}
          id='oldPassword-setting'
          type='password'
          isDisabled={pending}
        />
        <FormErrorMessage color={'red'} fontSize={'12px'}>
          {t('auth-password-error')}
        </FormErrorMessage>
      </FormControl>
      <FormControl {...styles.formControlStyle} isInvalid={!!errors.new_password}>
        <FormLabel {...styles.labelStyle} htmlFor='newPassword-setting'>
          {t('new-password')}
        </FormLabel>
        <Input
          {...styles.inputStyle}
          {...register('new_password', { required: true, minLength: 3 })}
          autoComplete='off'
          aria-label='new_password'
          aria-invalid={errors.new_password ? 'true' : 'false'}
          id='newPassword-setting'
          type='password'
          isDisabled={pending}
        />
        <FormErrorMessage color={'red'} fontSize={'12px'}>
          {t('auth-password-error')}
        </FormErrorMessage>
      </FormControl>
      <Box {...styles.buttonBoxStyle} aria-label='submit'>
        <Button {...styles.buttonStyle} isLoading={pending} type='submit' form='setting-form'>
          {t('save')}
        </Button>
      </Box>
    </form>
  )
}

export default SettingChangeData
