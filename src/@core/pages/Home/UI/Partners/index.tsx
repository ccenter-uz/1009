import BoxGen from '@/@core/shared/UI/Box'
import { useLang } from '@/@core/shared/hooks/useLang'
import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { Box, Heading } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { FC } from 'react'

// dynamic import
const PartnerCard = dynamic(() => import('@/@core/entities/PartnerCard'))
const PartnersItem = [
  {
    id: 1,
    image: '/partners/airbnb.png'
  },
  {
    id: 2,
    image: '/partners/google.png'
  },
  {
    id: 3,
    image: '/partners/microsoft.png'
  },
  {
    id: 4,
    image: '/partners/oyo.png'
  },
  {
    id: 5,
    image: '/partners/fedex.png'
  },
  {
    id: 6,
    image: '/partners/amazon.png'
  },
  {
    id: 7,
    image: '/partners/ola.png'
  },
  {
    id: 8,
    image: '/partners/walmart.png'
  }
]

const Partners: FC = () => {
  const { t } = useLang()

  return (
    <Box
      className='wrapper'
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      minH={{ base: '200px', sm: '200px', md: '257px', xl: '357px' }}
      h={'100%'}
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
      <BoxGen
        width={'100%'}
        minHeight={'246px'}
        display={'flex'}
        alignItems={'center'}
        flexWrap={'wrap'}
        justifyContent={'center'}
        gap={'20px 24px'}
        px={'24px'}
      >
        {PartnersItem.map(card => {
          return <PartnerCard key={card.id} image={card.image} />
        })}
      </BoxGen>
    </Box>
  )
}

export default Partners
