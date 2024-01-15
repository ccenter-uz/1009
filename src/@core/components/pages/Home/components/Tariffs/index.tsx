import TariffCard from '@/@core/components/reusable/TariffCard'
import { useLang } from '@/@core/service/hooks/useLang'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import { FC } from 'react'

const optionsCard = [
  {
    id: 1,
    value: 'Оплата за одну информацию'
  },
  {
    id: 2,
    value: 'Оплата за одну информацию'
  },
  {
    id: 3,
    value: 'Оплата за одну информацию'
  }
]

const Tariffs: FC = () => {
  const { t } = useLang()

  return (
    <Box
      className='wrapper'
      mt={{ base: '42px', sm: '42px', md: '72px', xl: '72px' }}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <Heading fontSize={scssVariables.fonts.titleSize} fontWeight={600} color={scssVariables.mainColor}>
        {t('tariffs')}
      </Heading>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, xl: 3 }}
        mt={{ base: '16px', sm: '16px', md: '72px', xl: '72px' }}
        gap={{ base: '32px', sm: '32px', md: '82px', xl: '82px' }}
      >
        <TariffCard title='Один Раз' options={optionsCard} price={'1.02'} />
        <TariffCard title='Подписка на Месяц' active={true} options={optionsCard} price={'1.02'} />
        <TariffCard title='Подписка за Год' options={optionsCard} price={'1.02'} />
      </SimpleGrid>
    </Box>
  )
}

export default Tariffs
