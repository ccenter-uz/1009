import { FormControl, FormLabel, Image } from '@chakra-ui/react'
import { FC } from 'react'
import InputGen from '../../reusable/Input'
import { useLang } from '@/@core/service/hooks/useLang'
import ButtonGen from '../../reusable/Button'
import { Login } from '@/@core/service/helpers/actions'
import { scssVariables } from '@/@core/utils/scss-variables'

const SignIn: FC = () => {
  const { t } = useLang()

  return (
    <form action={Login} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <FormControl>
        <FormLabel fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>{t('auth-phone')}</FormLabel>
        <InputGen
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
        <FormLabel fontSize={{ base: '13px', sm: '13px', md: '14px', xl: '14px' }}>{t('auth-password')}</FormLabel>
        <InputGen
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
