import { FC } from 'react'
import ButtonGen from '../Button'
import { Box, Heading, Image, Text } from '@chakra-ui/react'
import { scssVariables } from '../../../utils/scss-variables'

const TariffCard: FC = () => {
  return (
    <Box width={'max-content'} borderRadius={'10px'} boxShadow={'0px 20px 50px 0px rgba(0, 0, 0, 0.1)'}>
      <Box borderRadius={'10px 10px 0 0'} bgColor={scssVariables.blockBgColor}>
        <Text fontSize='2xl' fontWeight={600} textAlign={'center'} padding={'24px'} color={scssVariables?.mainColor}>
          Подписка на Месяц
        </Text>
      </Box>
      <Box padding={'48px 84px 76px'}>
        <Text fontSize='xl' fontWeight={600} textAlign={'center'} padding={'24px'} color={'#64748b'}>
          Оплата за одну информацию
        </Text>

        <Heading fontSize='5xl' fontWeight={700} textAlign={'center'} color={'#009393'}>
          $1,02
        </Heading>
        <Box padding={'41px 0'} display={'flex'} flexDirection={'column'} gap={"2"}>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={"2"}>
            <Image src='/check.svg' alt='check icon' width={21} height={21}/>
            <Text fontSize='xl' textAlign={'center'}>
              Подписка на Месяц
            </Text>
          </Box>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={"2"}>
            <Image src='/check.svg' alt='check icon' width={21} height={21} />
            <Text fontSize='xl' textAlign={'center'}>
              Подписка на Месяц
            </Text>
          </Box>
        </Box>
        <ButtonGen display={'block'} margin={'0 auto'}>
          Купить
        </ButtonGen>
      </Box>
    </Box>
  )
}

export default TariffCard
