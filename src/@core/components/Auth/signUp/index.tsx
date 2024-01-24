import { useLang } from '@/@core/service/hooks/useLang'
import { Box, Button, FormControl, FormLabel, Image, Text } from '@chakra-ui/react'
import { FC } from 'react'
import InputGen from '../../reusable/Input'
import { Regis } from '@/@core/service/helpers/actions'
import ButtonGen from '../../reusable/Button'
import { useFormStatus } from 'react-dom'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

const SignUp: FC = () => {
  const { t } = useLang()
  const { pending } = useFormStatus()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()

  const handleFinish = async (e: any) => {
    sessionStorage.setItem('user', JSON.stringify(e))
    const res = await Regis(e)
    if (!res) return
    if (res.status === 200) {
      console.log(res.message, 'res')
      router.replace('/checknumber')
    }
  }

  return (
    <>
      <form
        id={'form-regis'}
        onSubmit={handleSubmit(handleFinish)}
        style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
      >
        <FormControl isRequired>
          <FormLabel htmlFor='fio' fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>
            {t('auth-regis-fio')}
          </FormLabel>
          <InputGen
            aria-label='fio'
            aria-invalid={errors.fio ? 'true' : 'false'}
            {...register('fio', {
              required: true,
              minLength: 3
            })}
            id='fio'
            isDisabled={pending}
            height={'35px'}
            bg={'#fff'}
            width={'264px'}
            rightWidth={'43px'}
            borderRadius={'2px'}
            button={<Image width={'15px'} src='/user-fill.svg' alt='user-icon' />}
            name='fio'
            placeholder='Eshmatov Toshmat'
          />
          {errors.fio && (
            <Text color={'red'} fontSize={'12px'}>
              This field must be minimum 3 letters
            </Text>
          )}
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='phone' fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>
            {t('auth-phone')}
          </FormLabel>
          <InputGen
            aria-label='phone'
            aria-invalid={errors.phone ? 'true' : 'false'}
            {...register('phone', {
              required: true,
              minLength: 12
            })}
            id='phone'
            isDisabled={pending}
            height={'35px'}
            bg={'#fff'}
            width={'264px'}
            rightWidth={'43px'}
            borderRadius={'2px'}
            button={<Image width={'15px'} src='/phone-fill.svg' alt='phone-icon' />}
            name='phone'
            placeholder='+99890 123 45 78'
          />
          {errors.phone && (
            <Text color={'red'} fontSize={'12px'}>
              This field must be 12 letters
            </Text>
          )}
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='password' fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>
            {t('auth-create-password')}
          </FormLabel>
          <InputGen
            aria-label='password'
            aria-invalid={errors.password ? 'true' : 'false'}
            {...register('password', {
              required: true,
              minLength: 3
            })}
            id='password'
            isDisabled={pending}
            height={'35px'}
            bg={'#fff'}
            type='password'
            width={'264px'}
            rightWidth={'43px'}
            borderRadius={'2px'}
            button={<Image width={'15px'} src='/lock-fill.svg' alt='lock-icon' />}
            name='password'
            placeholder='***'
          />
          {errors.password && (
            <Text color={'red'} fontSize={'12px'}>
              Password must contain minimum 3 letters
            </Text>
          )}
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='confirm_password' fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>
            {t('auth-password-confirm')}
          </FormLabel>
          <InputGen
            aria-label='confirm-password'
            aria-invalid={errors.confirm_password ? 'true' : 'false'}
            {...register('confirm_password', {
              required: true,
              validate: (val: string) => {
                if (watch('password') != val) {
                  return 'Your passwords do no match'
                }
              }
            })}
            id='confirm_password'
            isDisabled={pending}
            height={'35px'}
            bg={'#fff'}
            type='password'
            width={'264px'}
            rightWidth={'43px'}
            borderRadius={'2px'}
            button={<Image width={'15px'} src='/lock-fill.svg' alt='lock-icon' />}
            name='confirm_password'
            placeholder='***'
          />
          {errors.confirm_password && (
            <Text color={'red'} fontSize={'12px'}>
              {errors.confirm_password.message?.toString()}
            </Text>
          )}
        </FormControl>

        <ButtonGen
          aria-label='submit'
          isDisabled={pending}
          form='form-regis'
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
      <Box my={'18px'} display={'flex'} alignItems={'center'}>
        <Text>{t('auth-or')}</Text>
      </Box>
      <Box display={'flex'} flexDirection={'column'} gap={'5px'} justifyContent={'center'}>
        <Button
          aria-label='sign via google'
          h={'32px'}
          w={'100%'}
          fontWeight={400}
          fontSize={'14px'}
          leftIcon={<Image src='/google.svg' alt='google-auth' />}
        >
          {t('auth-google')}
        </Button>
        <Button
          aria-label='sign via telegram'
          h={'32px'}
          w={'100%'}
          fontWeight={400}
          fontSize={'14px'}
          leftIcon={<Image src='/telegram-fill.svg' alt='telegram-auth' />}
        >
          {t('auth-telegram')}
        </Button>
      </Box>
    </>
  )
}

export default SignUp
