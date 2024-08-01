import { FormControl, FormLabel, Img, Text } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { useLang } from '@/@core/shared/hooks/useLang'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import InputGen from '@/@core/shared/UI/Input'
import ButtonGen from '@/@core/shared/UI/Button'
import { Login } from '../../api/login'

const SignIn: FC = () => {
  const { t } = useLang()
  const [pending, setPending] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const router = useRouter()

  // FINISH
  const handleFinish = async (e: any) => {
    setPending(true)
    const res = await Login(e)
    if (!res) return setPending(false)
    if (res.status === 200) {
      setPending(false)
      toast.success(res.message, { position: 'bottom-right' })
      router.push('/', { replace: true })
    }

    return setPending(false)
  }

  return (
    <form onSubmit={handleSubmit(handleFinish)} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <FormControl isRequired>
        <FormLabel fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>{t('auth-phone')}</FormLabel>
        <InputGen
          isDisabled={pending}
          aria-label='number'
          aria-invalid={errors.number ? 'true' : 'false'}
          {...register('number', { required: true, minLength: 12 })}
          bg={'#fff'}
          width={'264px'}
          rightWidth={'43px'}
          borderRadius={'2px'}
          button={<Img width={'15px'} src='/phone-fill.svg' alt='phone-icon' />}
          name='number'
          placeholder='+99890 123 45 78'
        />
        {errors.phone && (
          <Text color={'red'} fontSize={'12px'}>
            {t('auth-phone-error')}
          </Text>
        )}
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>{t('auth-password')}</FormLabel>
        <InputGen
          autoComplete='off'
          isDisabled={pending}
          aria-label='password'
          aria-invalid={errors.password ? 'true' : 'false'}
          {...register('password', { required: true, minLength: 3 })}
          bg={'#fff'}
          type='password'
          width={'264px'}
          rightWidth={'43px'}
          borderRadius={'2px'}
          button={<Img width={'15px'} src='/lock-fill.svg' alt='lock-icon' />}
          name='password'
          placeholder='***'
        />
        {errors.password && (
          <Text color={'red'} fontSize={'12px'}>
            {t('auth-password-error')}
          </Text>
        )}
      </FormControl>
      <ButtonGen
        isLoading={pending}
        bg={scssVariables.mainColor}
        width={'264px'}
        radius={'5px'}
        height={'35px'}
        fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}
        fontWeight={500}
        type='submit'
      >
        {t('auth-submit')}
      </ButtonGen>
    </form>
  )
}

export { SignIn }
