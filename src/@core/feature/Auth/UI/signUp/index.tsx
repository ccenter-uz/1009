import { useLang } from '@/@core/shared/hooks/useLang'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Img, Text } from '@chakra-ui/react'
import { FC, useState } from 'react'
import InputGen from '@/@core/shared/UI/Input'
import ButtonGen from '@/@core/shared/UI/Button'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'
import { Regis } from '../../api'

const SignUp: FC = () => {
  const { t } = useLang()
  const [pending, setPending] = useState<boolean>(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()

  // FINISH
  const handleFinish = async (e: any) => {
    setPending(true)
    const res = await Regis(e)
    if (!res) return setPending(false)

    res?.status === 201 &&
      (setPending(false),
      sessionStorage.setItem('checkNumber', JSON.stringify(res?.data)),
      router.replace('/checknumber'))

    return setPending(false)
  }

  return (
    <>
      <form
        id={'form-regis'}
        onSubmit={handleSubmit(handleFinish)}
        style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
      >
        <FormControl isRequired isInvalid={!!errors.full_name}>
          <FormLabel htmlFor='full_name' fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>
            {t('auth-regis-fio')}
          </FormLabel>
          <InputGen
            aria-label='full_name'
            aria-invalid={errors.full_name ? 'true' : 'false'}
            {...register('full_name', {
              required: true,
              minLength: 3
            })}
            id='full_name'
            isDisabled={pending}
            height={'35px'}
            bg={'#fff'}
            width={'264px'}
            rightWidth={'43px'}
            borderRadius={'2px'}
            button={<Img width={'15px'} src='/user-fill.svg' alt='user-icon' />}
            name='full_name'
            placeholder='Eshmatov Toshmat'
          />
          <FormErrorMessage color={'red'} fontSize={'12px'}>
            {t('auth-regis-fio-error')}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.number}>
          <FormLabel htmlFor='number' fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>
            {t('auth-phone')}
          </FormLabel>

          <InputGen
            as={ReactInputMask}
            mask='+(998)99 999-99-99'
            autoComplete='off'
            aria-label='number'
            aria-invalid={errors.number ? 'true' : 'false'}
            {...register('number', {
              required: true,
              minLength: 12
            })}
            id='number'
            isDisabled={pending}
            height={'35px'}
            bg={'#fff'}
            width={'264px'}
            rightWidth={'43px'}
            borderRadius={'2px'}
            button={<Img width={'15px'} src='/phone-fill.svg' alt='phone-icon' />}
            name='number'
          />
          <FormErrorMessage color={'red'} fontSize={'12px'}>
            {t('auth-phone-error')}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.password}>
          <FormLabel htmlFor='password' fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>
            {t('auth-create-password')}
          </FormLabel>
          <InputGen
            autoComplete='off'
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
            button={<Img width={'15px'} src='/lock-fill.svg' alt='lock-icon' />}
            name='password'
            placeholder='******'
          />
          <FormErrorMessage color={'red'} fontSize={'12px'}>
            {t('auth-password-error')}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.confirm_password}>
          <FormLabel htmlFor='confirm_password' fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>
            {t('auth-password-confirm')}
          </FormLabel>
          <InputGen
            autoComplete='off'
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
            button={<Img width={'15px'} src='/lock-fill.svg' alt='lock-icon' />}
            name='confirm_password'
            placeholder='******'
          />
          <FormErrorMessage color={'red'} fontSize={'12px'}>
            {t('auth-password-confirm-error')}
          </FormErrorMessage>
        </FormControl>

        <ButtonGen
          aria-label='submit'
          isLoading={pending}
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
          leftIcon={<Img src='/google.svg' alt='google-auth' />}
        >
          {t('auth-google')}
        </Button>
        <Button
          aria-label='sign via telegram'
          h={'32px'}
          w={'100%'}
          fontWeight={400}
          fontSize={'14px'}
          leftIcon={<Img src='/telegram-fill.svg' alt='telegram-auth' />}
        >
          {t('auth-telegram')}
        </Button>
      </Box>
    </>
  )
}

export { SignUp }
