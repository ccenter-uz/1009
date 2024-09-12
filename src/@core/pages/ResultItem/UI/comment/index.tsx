import { LeaveCommentAsync } from '@/@core/feature/LeaveComment'
import { useLang } from '@/@core/shared/hooks/useLang'
import BoxGen from '@/@core/shared/UI/Box'
import Rate from '@/@core/shared/UI/Rate'
import Loading from '@/app/[locale]/loading'
import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import { useResultItemSlicer } from '../../model/Slicer'
import { api } from '@/@core/apps/utils/api'
import { IResultItem } from '../../model/type'

const AliceCarousel = dynamic(() => import('react-alice-carousel'), { ssr: false, loading: () => <Loading /> })

const responsive = {
  0: { items: 1 },
  545: { items: 1 },
  768: { items: 3 },
  1024: { items: 4 }
}

type Props = {
  get: () => void
}

const Comment: FC<Props> = props => {
  const { get } = props
  const { t } = useLang()
  const { resultItemData } = useResultItemSlicer()

  return (
    <Box aria-label='section'>
      <Text
        fontSize={{ base: '14px', sm: '14px', md: '16px', xl: '20px' }}
        color={'grey'}
        mb={{ base: '8px', sm: '8px', md: '16px', xl: '16px' }}
      >
        {t('comments')}
      </Text>
      <AliceCarousel
        infinite
        autoPlay
        autoPlayInterval={1000}
        mouseTracking
        disableDotsControls
        disableButtonsControls
        animationDuration={2500}
        key={'carousel'}
        responsive={responsive}
        items={resultItemData[0]?.comments?.map((item: IResultItem) => (
          <BoxGen
            my={'24px'}
            aria-label='card'
            key={item?.id}
            w={'98%'}
            h={{ base: '200px', sm: '200px', md: '247px', xl: '247px' }}
            p={'13px'}
            boxShadow={'0px 15px 20px 0px rgba(0, 0, 0, 0.05)'}
            borderRadius={'8px'}
          >
            <Flex aria-label='card-header' gap={'16px'} alignItems={'center'} fontWeight={500}>
              <Avatar
                name={item?.user_id?.full_name}
                src={api.defaults.baseURL + item.user_id?.image_link}
                w={'70px'}
                h={'70px'}
              />
              <Flex flexDirection={'column'} gap={'5px'} justifyContent={'center'}>
                <Text fontSize={{ base: '14px', sm: '14px', md: '18px', xl: '18px' }}>{item?.user_id?.full_name}</Text>
                <Rate
                  starColor='yellow'
                  disabled
                  maxStars={5}
                  initialValue={item?.rate}
                  onRatingChange={value => console.log(value, 'value')}
                  gap={'5px'}
                  width={'15px'}
                  height={'15px'}
                />
              </Flex>
            </Flex>
            <Box
              aria-label='card-body'
              wordBreak={'break-word'}
              my={{ base: '14px', sm: '14px', md: '16px', xl: '16px' }}
            >
              <Text color={'grey'} fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}>
                {item?.comment}
              </Text>
            </Box>
            <Flex
              aria-label='card-footer'
              justifyContent={'flex-end'}
              pt={{ base: '5px', sm: '5px', md: '32px', xl: '32px' }}
            >
              <Text color={'grey'} fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}>
                {item?.create_data && new Intl.DateTimeFormat('ru-RU').format(new Date(item?.create_data))}
              </Text>
            </Flex>
          </BoxGen>
        ))}
      />
      {/* Comment */}
      <LeaveCommentAsync get={get} />
    </Box>
  )
}

export default Comment
