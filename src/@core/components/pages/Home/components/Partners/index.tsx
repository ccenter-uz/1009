'use client'
import { useLang } from '@/@core/service/hooks/useLang'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Box, Heading, SimpleGrid, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'

const Partners: FC = () => {
  const { t } = useLang()
  const { colorMode } = useColorMode()

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      h={{ base: '200px', sm: '200px', md: '257px', xl: '357px' }}
      mt={{ base: '38px', sm: '38px', md: '60px', xl: '71px' }}
    >
      <Heading
        fontSize={scssVariables.fonts.titleSize}
        fontWeight={600}
        color={scssVariables.mainColor}
        textAlign={'center'}
      >
        {t('partner-title')}
      </Heading>
      <SimpleGrid
        bg={colorMode === 'dark' ? scssVariables.darkBg : '#fff'}
        overflow={'hidden'}
        alignItems={'center'}
        columns={6}
        w={'100%'}
        height={'246px'}
        gap={'0 48px'}
        px={'24px'}
      >
        <Box
          m={'auto'}
          w={{ base: '85px', sm: '85px', md: '150px', xl: '170px' }}
          h={{ base: '48px', sm: '48px', md: '86px', xl: '96px' }}
          borderRadius={'9px'}
          bg={'#fff'}
          color={'#000'}
          boxShadow={scssVariables.boxShadowPartnerBox}
        >
          1
        </Box>
        <Box
          m={'auto'}
          w={{ base: '85px', sm: '85px', md: '150px', xl: '170px' }}
          h={{ base: '48px', sm: '48px', md: '86px', xl: '96px' }}
          borderRadius={'9px'}
          bg={'#fff'}
          color={'#000'}
          boxShadow={scssVariables.boxShadowPartnerBox}
        >
          2
        </Box>
        <Box
          m={'auto'}
          w={{ base: '85px', sm: '85px', md: '150px', xl: '170px' }}
          h={{ base: '48px', sm: '48px', md: '86px', xl: '96px' }}
          borderRadius={'9px'}
          bg={'#fff'}
          color={'#000'}
          boxShadow={scssVariables.boxShadowPartnerBox}
        >
          3
        </Box>
        <Box
          m={'auto'}
          w={{ base: '85px', sm: '85px', md: '150px', xl: '170px' }}
          h={{ base: '48px', sm: '48px', md: '86px', xl: '96px' }}
          borderRadius={'9px'}
          bg={'#fff'}
          color={'#000'}
          boxShadow={scssVariables.boxShadowPartnerBox}
        >
          4
        </Box>
        <Box
          m={'auto'}
          w={{ base: '85px', sm: '85px', md: '150px', xl: '170px' }}
          h={{ base: '48px', sm: '48px', md: '86px', xl: '96px' }}
          borderRadius={'9px'}
          bg={'#fff'}
          color={'#000'}
          boxShadow={scssVariables.boxShadowPartnerBox}
        >
          5
        </Box>
        <Box
          m={'auto'}
          w={{ base: '85px', sm: '85px', md: '150px', xl: '170px' }}
          h={{ base: '48px', sm: '48px', md: '86px', xl: '96px' }}
          borderRadius={'9px'}
          bg={'#fff'}
          color={'#000'}
          boxShadow={scssVariables.boxShadowPartnerBox}
        >
          6
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default Partners
