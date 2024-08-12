import { useLang } from '@/@core/shared/hooks/useLang'
import Loading from '@/app/[locale]/loading'
import { Box, Button, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import 'react-alice-carousel/lib/alice-carousel.css'
import { useResultItemSlicer } from '../../model/Slicer'
import { api } from '@/@core/apps/utils/api'

const AliceCarousel = dynamic(() => import('react-alice-carousel'), { ssr: false, loading: () => <Loading /> })

const responsive = {
  0: { items: 1 },
  545: { items: 1 },
  768: { items: 2 },
  1024: { items: 3 }
}
const GallaryPart: FC = () => {
  const { t } = useLang()
  const { resultItemData } = useResultItemSlicer()

  return (
    <Box mt={{ base: '2rem', sm: '2rem', md: '5rem', xl: '5rem' }}>
      <Text
        fontSize={{ base: '14px', sm: '14px', md: '16px', xl: '20px' }}
        color={'grey'}
        mb={{ base: '8px', sm: '8px', md: '16px', xl: '16px' }}
      >
        {t('gallery')}
      </Text>
      <AliceCarousel
        infinite
        disableDotsControls
        animationDuration={1500}
        key={'carousel'}
        items={resultItemData[0]?.pictures?.map(({ id, image_link }: { id: string; image_link: string }) => {
          return (
            <img
              key={id}
              width={'97%'}
              height={'393px'}
              src={api.defaults.baseURL + image_link}
              role='presentation'
              alt={id}
            />
          )
        })}
        responsive={responsive}
        renderPrevButton={() => {
          return (
            <Button
              position={'absolute'}
              top={'45%'}
              left={-4}
              borderRadius={'50%'}
              w={'45px'}
              h={'45px'}
              opacity={0.9}
            >
              {'<'}
            </Button>
          )
        }}
        renderNextButton={() => {
          return (
            <Button
              position={'absolute'}
              top={'45%'}
              right={0}
              borderRadius={'50%'}
              w={'45px'}
              h={'45px'}
              opacity={0.9}
            >
              {'>'}
            </Button>
          )
        }}
      />
    </Box>
  )
}

export default GallaryPart
