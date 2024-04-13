import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { useLang } from '@/@core/shared/hooks/useLang'
import HeroCard from '@/@core/entities/HeroCard'

const heroCards = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
    image: '/hero/card-1.svg'
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
    image: '/hero/card-2.svg'
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
    image: '/hero/card-3.svg'
  },
  {
    id: 4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.',
    image: '/hero/card-1.svg'
  }
]

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
          {heroCards.map((card: { id: number; text: string; image: string }) => {
            return (
              <Box key={card.id}>
                <HeroCard text={card.text} image={card.image} />
              </Box>
            )
          })}
        </SimpleGrid>
      </SimpleGrid>
    </section>
  )
}

export default Hero
