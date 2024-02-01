'use client'
import SignUp from '@/@core/components/Auth/signUp'
import BoxGen from '@/@core/components/reusable/Box'
import { useLang } from '@/@core/service/hooks/useLang'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Link } from '@/navigation'
import { Heading, Text, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'

const Signup: FC = () => {
  const { t } = useLang()
  const { colorMode } = useColorMode()

  return (
    <BoxGen
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      w={{ base: '354px', sm: '354px', md: '768px', xl: '768px' }}
      m={' 2rem auto'}
      h={'fit-content'}
      minH={'637px'}
      borderRadius={'15px'}
      boxShadow={scssVariables.boxShadow}
      p={{ base: '16px', sm: '16px', md: '24px', xl: '24px' }}
    >
      <Heading
        mb={'32px'}
        textAlign={'center'}
        fontWeight={500}
        fontSize={{ base: '16px', sm: '16px', md: '22px', xl: '24px' }}
      >
        {t('auth-regis-title')}
      </Heading>
      <SignUp />
      <Text
        my={'24px'}
        color={colorMode === 'dark' ? '#fff' : '#446AEE'}
        fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}
      >
        {t('auth-already-exists')}
        <Link style={{ margin: '0 10px', fontWeight: '600' }} href={`/signin`}>
          {t('auth-login')}
        </Link>
      </Text>
    </BoxGen>
  )
}

export default Signup
