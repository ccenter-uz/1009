import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { CommentDialog } from '@/@core/entities/CommentDialog'
import { postComment } from '@/@core/shared/api'
import { useDisclosure } from '@/@core/shared/hooks/useDisclosure'
import { useLang } from '@/@core/shared/hooks/useLang'
import Rate from '@/@core/shared/UI/Rate'
import { Box, Button, Flex, Text, Textarea, useColorMode } from '@chakra-ui/react'
import { useParams } from 'next/navigation'
import { FC } from 'react'
import { useCommentSlicer } from '../model/Slicer'
import { toast } from 'react-toastify'

type Props = {}

export const LeaveComment: FC<Props> = props => {
  const { t } = useLang()
  const { colorMode } = useColorMode()
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { commentData, setCommentData } = useCommentSlicer()
  const params = useParams()

  // POST
  const post = async () => {
    const res = await postComment({
      organization_id: params?.id as string,
      comment: commentData.comment,
      rate: commentData.rate
    })

    if (!res) return null
    if (res.status === 201) {
      toast.success(t(`success`), { position: 'bottom-right' })
      setCommentData({ comment: '', rate: 0 })
      onClose()
    }
  }

  return (
    <Box>
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
              onClick={post}
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
            onRatingChange={value => setCommentData({ ...commentData, rate: value })}
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
            onChange={e => setCommentData({ ...commentData, comment: e.target.value })}
            fontSize={{ base: '11px', sm: '11px', md: '13px', lg: '14px' }}
            placeholder='Вчера со мной случился самый вкусный бургер. Именно в Punkraft. Бургер от Бати — это ну очень вкусно .'
            _placeholder={{ color: 'rgba(100, 116, 139, 0.5)' }}
          />
        </Box>
      </CommentDialog>
    </Box>
  )
}
