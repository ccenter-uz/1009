'use client'
import PartnerCard from '@/@core/components/reusable/PartnerCard'
import { useLang } from '@/@core/service/hooks/useLang'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Box, Heading, SimpleGrid, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'

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
  const { colorMode } = useColorMode()

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
      <Box
        bg={colorMode === 'dark' ? scssVariables.darkBg : '#fff'}
        width={'100%'}
        minHeight={'246px'}
        display={'flex'}
        alignItems={'center'}
        flexWrap={'wrap'}
        justifyContent={'center'}
        gap={'20px 48px'}
        px={'24px'}
      >
        {PartnersItem.map(card => {
          return <PartnerCard key={card.id} image={card.image} />
        })}
      </Box>
    </Box>
  )
}

export default Partners
