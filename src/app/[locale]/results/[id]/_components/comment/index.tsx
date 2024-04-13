import Rate from '@/@core/shared/UI/Rate'
import Loading from '@/app/[locale]/loading'
import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { FC } from 'react'

const AliceCarousel = dynamic(() => import('react-alice-carousel'), { ssr: false, loading: () => <Loading /> })

const responsive = {
  0: { items: 1 },
  545: { items: 1 },
  768: { items: 3 },
  1024: { items: 4 }
}

const items = [
  {
    id: 1,
    full_name: 'Азизов Азиз',
    rate: 4,
    comment: 'Вчера со мной случился самый вкусный бургер. Именно в Punkraft. Бургер от Бати — это ну очень вкусно .',
    date: '02.02.2024'
  },
  {
    id: 2,
    full_name: 'Азизов Азиз',
    rate: 4,
    comment: 'Вчера со мной случился самый вкусный бургер. Именно в Punkraft. Бургер от Бати — это ну очень вкусно .',
    date: '02.02.2024'
  },
  {
    id: 3,
    full_name: 'Азизов Азиз',
    rate: 4,
    comment: 'Вчера со мной случился самый вкусный бургер. Именно в Punkraft. Бургер от Бати — это ну очень вкусно .',
    date: '02.02.2024'
  },
  {
    id: 4,
    full_name: 'Азизов Азиз',
    rate: 4,
    comment: 'Вчера со мной случился самый вкусный бургер. Именно в Punkraft. Бургер от Бати — это ну очень вкусно .',
    date: '02.02.2024'
  },
  {
    id: 5,
    full_name: 'Азизов Азиз',
    rate: 4,
    comment: 'Вчера со мной случился самый вкусный бургер. Именно в Punkraft. Бургер от Бати — это ну очень вкусно .',
    date: '02.02.2024'
  }
]

const Comment: FC = () => {
  return (
    <Box aria-label='section'>
      <Text
        fontSize={{ base: '14px', sm: '14px', md: '16px', xl: '20px' }}
        color={'grey'}
        mb={{ base: '8px', sm: '8px', md: '16px', xl: '16px' }}
      >
        Отзывы
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
        items={items.map(item => (
          <Box
            my={'24px'}
            aria-label='card'
            key={item.id}
            w={'98%'}
            h={{ base: '200px', sm: '200px', md: '247px', xl: '247px' }}
            p={'13px'}
            boxShadow={'0px 15px 20px 0px rgba(0, 0, 0, 0.05)'}
            borderRadius={'8px'}
          >
            <Flex aria-label='card-header' gap={'16px'} alignItems={'center'} fontWeight={500}>
              <Avatar name='Azizov Aziz' src='/Avatar.svg' w={'70px'} h={'70px'} />
              <Flex flexDirection={'column'} gap={'5px'} justifyContent={'center'}>
                <Text fontSize={{ base: '14px', sm: '14px', md: '18px', xl: '18px' }}>{item.full_name}</Text>
                <Rate
                  starColor='yellow'
                  disabled
                  maxStars={5}
                  initialValue={4}
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
                {item.comment}
              </Text>
            </Box>
            <Flex
              aria-label='card-footer'
              justifyContent={'flex-end'}
              pt={{ base: '5px', sm: '5px', md: '32px', xl: '32px' }}
            >
              <Text color={'grey'} fontSize={{ base: '12px', sm: '12px', md: '14px', xl: '14px' }}>
                {item.date}
              </Text>
            </Flex>
          </Box>
        ))}
      />
      <Flex justifyContent={'flex-end'} mb={{ base: '80px', sm: '80px', md: '100px', xl: '167px' }}>
        <Text fontSize={{ base: '14px', sm: '14px', md: '17px', xl: '18px' }} color={'blue'}>
          Оставить отзыв
        </Text>
      </Flex>
    </Box>
  )
}

export default Comment
