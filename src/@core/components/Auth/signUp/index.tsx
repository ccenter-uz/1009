import { useLang } from '@/@core/service/hooks/useLang'
import { Box, Button, Divider, Fade, FormControl, FormLabel, Image, Text } from '@chakra-ui/react'
import { FC, useState } from 'react'
import InputGen from '../../reusable/Input'
import { Regis } from '@/@core/service/helpers/actions'
import ButtonGen from '../../reusable/Button'
import CheckNumber from './checkNumber'

const SignUp: FC = () => {
  const { t } = useLang()
  const [checkNumber, setCheckNumber] = useState<boolean>(false)

  const handleSubmit = async (values: FormData) => {
    const res = await Regis(values)
    res && setCheckNumber(true)
  }

  return (
    <>
      <form id={'form-regis'} action={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <FormControl>
          <FormLabel>{t('auth-regis-fio')}</FormLabel>
          <InputGen
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
        <FormControl>
          <FormLabel fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>{t('auth-phone')}</FormLabel>
          <InputGen
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
        <FormControl>
          <FormLabel fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>
            {t('auth-create-password')}
          </FormLabel>
          <InputGen
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
        <FormControl>
          <FormLabel fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>
            {t('auth-password-confirm')}
          </FormLabel>
          <InputGen
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

        <ButtonGen
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
      <Fade in={checkNumber}>
        <Box display={checkNumber ? 'block' : 'none'} mt={'18px'}>
          <CheckNumber />
        </Box>
      </Fade>
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
