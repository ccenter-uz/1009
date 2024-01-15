import { Box, Heading, SimpleGrid, Text, useColorMode } from '@chakra-ui/react'
import './style.scss'
import { FC } from 'react'
import { useLang } from '@/@core/service/hooks/useLang'
import { scssVariables } from '@/@core/utils/scss-variables'

const Hero: FC = () => {
  const { t } = useLang()

  return (
    <section className='wrapper'>
      <SimpleGrid
        columns={{ sm: 1, md: 1, xl: 2 }}
        my={{ base: '24px', sm: '24px', md: '57px', xl: '67px' }}
        gap={'23px'}
      >
        <Box w={'100%'} maxW={{ base: '318px', sm: '318px', md: '100%', xl: '100%' }}>
          <Heading
            fontWeight={'600'}
            fontSize={{ base: '24px', sm: '24px', md: '38px', xl: '48px' }}
            color={'#009393'}
            mb={{ base: '4px', sm: '4px', md: '16px', xl: '18px' }}
          >
            {t('hero-left-title')}
          </Heading>
          <Text
            fontSize={{ base: '12px', sm: '12px', md: '18px', xl: '20px' }}
            fontWeight={'400'}
            w={'100%'}
            maxW={{ base: '100%', sm: '100%', md: '100%', xl: '503px' }}
          >
            {t('hero-left-p')}
          </Text>
        </Box>
        <SimpleGrid w={'100%'} columns={{ base: 2, sm: 2, md: 2, xl: 2 }} gap={'25px'} justifyContent={'center'}>
          <Box
            w={scssVariables.cardHeader.w}
            h={scssVariables.cardHeader.h}
            borderRadius={'15px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            border={'1px solid red'}
            boxShadow={'0px 6.914663791656494px 27.658655166625977px 0px #A08ED733'}
          >
            1
          </Box>
          <Box
            w={scssVariables.cardHeader.w}
            h={scssVariables.cardHeader.h}
            borderRadius={'15px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            border={'1px solid red'}
            boxShadow={'0px 6.914663791656494px 27.658655166625977px 0px #A08ED733'}
          >
            2
          </Box>
          <Box
            w={scssVariables.cardHeader.w}
            h={scssVariables.cardHeader.h}
            borderRadius={'15px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            border={'1px solid red'}
            boxShadow={'0px 6.914663791656494px 27.658655166625977px 0px #A08ED733'}
          >
            3
          </Box>
          <Box
            w={scssVariables.cardHeader.w}
            h={scssVariables.cardHeader.h}
            display={'flex'}
            borderRadius={'15px'}
            justifyContent={'center'}
            alignItems={'center'}
            border={'1px solid red'}
            boxShadow={'0px 6.914663791656494px 27.658655166625977px 0px #A08ED733'}
          >
            4
          </Box>
        </SimpleGrid>
      </SimpleGrid>
    </section>
  )
}

export default Hero
