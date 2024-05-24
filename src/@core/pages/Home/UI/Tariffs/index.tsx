import { useLang } from '@/@core/shared/hooks/useLang'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { FC } from 'react'

// dynamic import
const TariffCard = dynamic(() => import('@/@core/entities/TariffCard'))

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

// cards
const CardsList = [
  {
    id: 1,
    title: 'Один Раз',
    price: '1.02',
    options: optionsCard
  },
  {
    id: 2,
    title: 'Подписка на Месяц',
    price: '1.02',
    options: optionsCard,
    active: true
  },
  {
    id: 3,
    title: 'Подписка за Год',
    price: '1.02',
    options: optionsCard
  }
]

const Tariffs: FC = () => {
  const { t } = useLang()

  return (
    <Box
      scrollMarginTop={0}
      id='tariffs'
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
        {CardsList.map(card => (
          <TariffCard title={card.title} active={card.active} options={card.options} price={card.price} key={card.id} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Tariffs
