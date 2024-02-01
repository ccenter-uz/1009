import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import { FC, useMemo } from 'react'
import { useLang } from '@/@core/service/hooks/useLang'
import { scssVariables } from '@/@core/utils/scss-variables'
import { IOpportunityCard } from '@/@core/components/reusable/OpportunitiesCard'
import dynamic from 'next/dynamic'
// dynamic import
const OpportunityCard = dynamic(() => import('@/@core/components/reusable/OpportunitiesCard'))

const OtherOpportunities: FC = () => {
  const { t } = useLang()

  const OpportunitiesCard: IOpportunityCard[] = useMemo(
    () => [
      {
        id: 1,
        title: t('opportunity-card-title-1'),
        options: t('opportunity-card-text-1'),
        image: '/opportunities/card-1.svg'
      },
      {
        id: 2,
        title: t('opportunity-card-title-2'),
        options: t('opportunity-card-text-2'),
        image: '/opportunities/card-2.svg'
      },
      {
        id: 3,
        title: t('opportunity-card-title-3'),
        options: t('opportunity-card-text-3'),
        image: '/opportunities/card-3.svg'
      },
      {
        id: 4,
        title: t('opportunity-card-title-4'),
        options: t('opportunity-card-text-4'),
        image: '/opportunities/card-4.svg'
      },
      {
        id: 5,
        title: t('opportunity-card-title-5'),
        options: t('opportunity-card-text-5'),
        image: '/opportunities/card-5.svg'
      },
      {
        id: 6,
        title: t('opportunity-card-title-6'),
        options: t('opportunity-card-text-6'),
        image: '/opportunities/card-6.svg'
      }
    ],
    [t]
  )

  return (
    <Box
      className='wrapper'
      pt={{ base: '56px', sm: '56px', md: '72px', xl: '72px' }}
      mb={{ base: '48px', sm: '48px', md: '136px', xl: '136px' }}
    >
      <Heading
        textAlign={'center'}
        fontWeight={'600'}
        fontSize={scssVariables.fonts.titleSize}
        color={'#009393'}
        mb={{ base: '16px', sm: '16px', md: '72px', xl: '72px' }}
      >
        {t('opportunities-heading')}
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 1, xl: 2 }} gap={{ base: '16px', sm: '16px', md: '45px', xl: '45px' }}>
        {OpportunitiesCard?.map((card: IOpportunityCard) => {
          return (
            <OpportunityCard key={card.id} id={card.id} title={card.title} options={card.options} image={card.image} />
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

export default OtherOpportunities
