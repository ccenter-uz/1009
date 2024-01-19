'use client'
import CheckNumber from '@/@core/components/Auth/signUp/checkNumber'
import { useLang } from '@/@core/service/hooks/useLang'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Link } from '@/navigation'
import { Box, Heading, Text, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'

const CheckNumbers: FC = () => {
  const { t } = useLang()
  const { colorMode } = useColorMode()

  return (
    <Box
      bg={colorMode === 'dark' ? scssVariables.darkBg : 'transparent'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      w={{ base: '354px', sm: '354px', md: '768px', xl: '768px' }}
      m={' 2rem auto'}
      h={{ base: '305px', sm: '305px', md: '465px', xl: '465px' }}
      borderRadius={'15px'}
      boxShadow={scssVariables.boxShadow}
      p={{ base: '16px', sm: '16px', md: '24px', xl: '24px' }}
    >
      <Link style={{ width: '100%' }} href={'/signup'}>
        <Box
          display={'flex'}
          alignItems={'center'}
          gap={'8px'}
          _hover={{ opacity: '0.7' }}
          position={'relative'}
          left={0}
          w={'100%'}
        >
          <Text>{'<-'}</Text>
          <Text display={{ base: 'none', sm: 'none', md: 'block', xl: 'block' }}>{t('back')}</Text>
        </Box>
      </Link>
      <Heading
        mb={'32px'}
        textAlign={'center'}
        fontWeight={500}
        fontSize={{ base: '16px', sm: '16px', md: '22px', xl: '24px' }}
      >
        {t('auth-check-number')}
      </Heading>
      <CheckNumber />
    </Box>
  )
}

export default CheckNumbers
