import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import './style.scss'
import { FC } from 'react'
import { useLang } from '@/@core/service/hooks/useLang'

const Hero: FC = () => {
  const { t } = useLang()

  return (
    <section className='wrapper'>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} my={{ base: '67px', sm: '', md: '', xl: '67px' }} gap={'23px'}>
        <Box w={'100%'}>
          <Heading
            fontWeight={'600'}
            fontSize={{ base: '48px', sm: '', md: '', xl: '48px' }}
            color={'#009393'}
            mb={{ base: '18px', sm: '', md: '', xl: '18px' }}
          >
            {t('hero-left-title')}
          </Heading>
          <Text fontSize={{ base: '20px', sm: '', md: '', xl: '20px' }} fontWeight={'400'} w={'403px'}>
            {t('hero-left-p')}
          </Text>
        </Box>
        <SimpleGrid w={'100%'} columns={{ sm: 2, md: 2, xl: 3 }} gap={'23px'} justifyContent={'center'}>
          <Box
            w={'190px'}
            h={'137px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            border={'1px solid red'}
            boxShadow={'0px 6.914663791656494px 27.658655166625977px 0px #A08ED733'}
          >
            1
          </Box>
          <Box
            w={'190px'}
            h={'137px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            border={'1px solid red'}
            boxShadow={'0px 6.914663791656494px 27.658655166625977px 0px #A08ED733'}
          >
            2
          </Box>
          <Box
            w={'190px'}
            h={'137px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            border={'1px solid red'}
            boxShadow={'0px 6.914663791656494px 27.658655166625977px 0px #A08ED733'}
          >
            3
          </Box>
          <Box
            w={'190px'}
            h={'137px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            border={'1px solid red'}
            boxShadow={'0px 6.914663791656494px 27.658655166625977px 0px #A08ED733'}
          >
            4
          </Box>
          <Box
            w={'190px'}
            h={'137px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            border={'1px solid red'}
            boxShadow={'0px 6.914663791656494px 27.658655166625977px 0px #A08ED733'}
          >
            5
          </Box>
          <Box
            w={'190px'}
            h={'137px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            border={'1px solid red'}
            boxShadow={'0px 6.914663791656494px 27.658655166625977px 0px #A08ED733'}
          >
            6
          </Box>
        </SimpleGrid>
      </SimpleGrid>
    </section>
  )
}

export default Hero
