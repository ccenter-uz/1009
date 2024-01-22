import { useLang } from '@/@core/service/hooks/useLang'
import { Box, Button, Divider, FormControl, FormLabel, Image, Text } from '@chakra-ui/react'
import { FC } from 'react'
import InputGen from '../../reusable/Input'
import { Regis } from '@/@core/service/helpers/actions'
import ButtonGen from '../../reusable/Button'
import { useFormStatus } from 'react-dom'

const SignUp: FC = () => {
  const { t } = useLang()
  const { pending } = useFormStatus()

  const handleFinish = async (e: any) => {
    const form = e.currentTarget
    const formData = new FormData(form)
    const body = {
      fio: formData.get('fio'),
      phone: formData.get('phone'),
      password: formData.get('password'),
      confirm_password: formData.get('confirm-password')
    }
    sessionStorage.setItem('user', JSON.stringify(body))
  }

  return (
    <>
      <form
        id={'form-regis'}
        action={Regis}
        onSubmit={handleFinish}
        style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
      >
        <FormControl>
          <FormLabel fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>{t('auth-regis-fio')}</FormLabel>
          <InputGen
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
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>{t('auth-phone')}</FormLabel>
          <InputGen
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
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>
            {t('auth-create-password')}
          </FormLabel>
          <InputGen
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
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>
            {t('auth-password-confirm')}
          </FormLabel>
          <InputGen
            isDisabled={pending}
            height={'35px'}
            bg={'#fff'}
            type='password'
            width={'264px'}
            rightWidth={'43px'}
            borderRadius={'2px'}
            button={<Image width={'15px'} src='/lock-fill.svg' alt='lock-icon' />}
            name='confirm-password'
            placeholder='***'
          />
        </FormControl>

        <ButtonGen
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
        <Divider colorScheme='gray' />
        <Text>{t('auth-or')}</Text>
        <Divider colorScheme='gray' />
      </Box>
      <Box display={'flex'} flexDirection={'column'} gap={'5px'} justifyContent={'center'}>
        <Button
          h={'32px'}
          w={'100%'}
          fontWeight={400}
          fontSize={'14px'}
          leftIcon={<Image src='/google.svg' alt='google-auth' />}
        >
          {t('auth-google')}
        </Button>
        <Button
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
