import { FormControl, FormLabel, Img, Text } from '@chakra-ui/react'
import { FC } from 'react'
import InputGen from '../../reusable/Input'
import { useLang } from '@/@core/service/hooks/useLang'
import ButtonGen from '../../reusable/Button'
import { scssVariables } from '@/@core/utils/scss-variables'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useFormStatus } from 'react-dom'
import { toast } from 'react-toastify'
import { Login } from '@/@core/service/helpers/actions'

const SignIn: FC = () => {
  const { t } = useLang()
  const { pending } = useFormStatus()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const router = useRouter()

  // handleFinish
  const handleFinish = async (e: any) => {
    const res = await Login(e)
    if (!res) return
    if (res.status === 200) {
      toast.success(res.message, { position: 'bottom-center' })
      router.replace('/')
    }
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
            Phone must contain minimum 12 letters
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
            Password must contain minimum 3 letters
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

export default SignIn
