import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { CommentDialog } from '@/@core/entities/CommentDialog'
import { useDisclosure } from '@/@core/shared/hooks/useDisclosure'
import { useLang } from '@/@core/shared/hooks/useLang'
import BoxGen from '@/@core/shared/UI/Box'
import Rate from '@/@core/shared/UI/Rate'
import Loading from '@/app/[locale]/loading'
import { Avatar, Box, Button, Flex, Text, Textarea, useColorMode } from '@chakra-ui/react'
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
  const { t } = useLang()
  const { colorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

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
        items={items.map(item => (
          <BoxGen
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
          </BoxGen>
        ))}
      />
      <Flex justifyContent={'flex-end'} mb={{ base: '80px', sm: '80px', md: '100px', xl: '167px' }}>
        <Button
          h={{ base: '35px', sm: '35px', md: '40px', lg: '40px' }}
          onClick={onOpen}
          fontSize={{ base: '14px', sm: '14px', md: '16px', xl: '16px' }}
          color={colorMode === 'dark' ? 'lightblue' : 'steelblue'}
        >
          {t('view-all-reviews')}
        </Button>
      </Flex>

      {/* Comment Dialog */}
      <CommentDialog
        isOpen={isOpen}
        onClose={onClose}
        title={t('view-all-reviews')}
        footer={
          <Box w={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Button
              h={{ base: '35px', sm: '35px', md: '40px', lg: '40px' }}
              fontSize={scssVariables.fonts.paragraph}
              onClick={onClose}
            >
              {t('cancel')}
            </Button>
            <Button
              h={{ base: '35px', sm: '35px', md: '40px', lg: '40px' }}
              fontSize={scssVariables.fonts.paragraph}
              colorScheme='teal'
            >
              {t('publish')}
            </Button>
          </Box>
        }
      >
        <Box display={'flex'} alignItems={'center'} gap={'8px'}>
          <Text fontSize={scssVariables.fonts.paragraph}>{t('rating')}</Text>
          <Rate
            disabled={false}
            starColor='grey'
            maxStars={5}
            initialValue={4}
            onRatingChange={value => console.log(value, 'value')}
            gap={'5px'}
            width={{ base: '16px', sm: '16px', md: '20px', xl: '24px' }}
            height={{ base: '16px', sm: '16px', md: '20px', xl: '24px' }}
          />
        </Box>
        <Box mt={{ base: '10px', sm: '10px', md: '16px', lg: '16px' }}>
          <Text fontSize={scssVariables.fonts.paragraph} fontWeight={500}>
            {t('leave-comment')}
          </Text>
          <Textarea
            rows={6}
            _focus={{ border: '1px solid teal' }}
            mt={{ base: '5px', sm: '5px', md: '8px', lg: '8px' }}
            p={'8px'}
            fontSize={{ base: '11px', sm: '11px', md: '13px', lg: '14px' }}
            placeholder='Вчера со мной случился самый вкусный бургер. Именно в Punkraft. Бургер от Бати — это ну очень вкусно .'
            _placeholder={{ color: 'rgba(100, 116, 139, 0.5)' }}
          />
        </Box>
      </CommentDialog>
    </Box>
  )
}

export default Comment
