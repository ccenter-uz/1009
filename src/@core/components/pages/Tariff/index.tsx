'use client'
import { FC } from 'react'
import { Box, Heading, Text, SimpleGrid, Img, useColorMode } from '@chakra-ui/react'
import ButtonGen from '../../reusable/Button'

type Props = {}

const TariffPage: FC<Props> = () => {
  const { colorMode } = useColorMode()

  return (
    <Box className='wrapper'>
      <Box
        display={'flex'}
        boxShadow='0px 20px 50px 0px rgba(0, 0, 0, 0.10)'
        borderRadius='16px'
        background={colorMode === 'dark' ? '#1B1D1C' : '#fff'}
      >
        <Box
          width={'25%'}
          background={colorMode === 'dark' ? '#fff' : '#C2E5E5'}
          color={'#009393'}
          borderRadius={'10px 0 0 10px'}
          textAlign={'center'}
          display={'flex'}
          flexDirection='column'
          justifyContent='center'
        >
          <Heading fontSize={'2xl'} fontWeight={'600'}>
            Подписка на Месяц
          </Heading>
          <Text fontSize={'sm'} fontWeight={'500'} marginTop={'30px'}>
            Оплата за одну информацию
          </Text>
          <Heading fontSize='4xl' marginTop={'8px'}>
            10.2$
          </Heading>
        </Box>
        <Box width={'75%'}>
          <SimpleGrid columns={2} spacingX='40px' spacingY='40px' padding={'45px'}>
            <Box display={'flex'}>
              <Img src='/check.svg' alt='Check icon' width={21} height={21} marginRight={'16px'} />
              <Text>Оплата за одну информацию</Text>
            </Box>
            <Box display={'flex'}>
              <Img src='/check.svg' alt='Check icon' width={21} height={21} marginRight={'16px'} />
              <Text>Оплата за одну информацию</Text>
            </Box>
            <Box display={'flex'}>
              <Img src='/check.svg' alt='Check icon' width={21} height={21} marginRight={'16px'} />
              <Text>Оплата за одну информацию</Text>
            </Box>
            <Box display={'flex'}>
              <Img src='/check.svg' alt='Check icon' width={21} height={21} marginRight={'16px'} />
              <Text>Оплата за одну информацию</Text>
            </Box>
            <Box display={'flex'}>
              <Img src='/check.svg' alt='Check icon' width={21} height={21} marginRight={'16px'} />
              <Text>Оплата за одну информацию</Text>
            </Box>
          </SimpleGrid>
          <hr style={{ border: '1px solid #C7C3C3' }} />

          <ButtonGen radius='8px' width='238px' height='40px' float={'right'} margin={'13px 42px'}>
            Купить
          </ButtonGen>
        </Box>
      </Box>
    </Box>
  )
}

export default TariffPage;
