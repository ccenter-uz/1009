'use client'
import { SignIn } from '@/@core/feature/Auth'
import BoxGen from '@/@core/shared/UI/Box'
import { useLang } from '@/@core/shared/hooks/useLang'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { Link } from '@/navigation'
import { Box, Heading, Text, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'

const Signin: FC = () => {
  const { t } = useLang()
  const { colorMode } = useColorMode()

  return (
    <Box minH={'100dvh'}>
      <BoxGen
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        w={{ base: '354px', sm: '354px', md: '768px', xl: '768px' }}
        m={' 2rem auto'}
        h={{ base: '351px', sm: '351px', md: '549px', xl: '549px' }}
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
          {t('auth-sign-title')}
        </Heading>
        <SignIn />
        <Text
          my={'24px'}
          color={colorMode === 'dark' ? '#fff' : '#446AEE'}
          fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}
        >
          <Link href={`/signup`}>{t('auth-regis')}</Link>
        </Text>
      </BoxGen>
    </Box>
  )
}

export default Signin
