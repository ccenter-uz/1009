'use client'
import { Box, Text } from '@chakra-ui/react'
import { FC } from 'react'
import BreadCrumb from '@/@core/shared/UI/Breadcrumb'
import { useParams, useRouter } from 'next/navigation'
import Banner from './banner'
import MainDataPart from './mainDataPart'
import GallaryPart from './galleryPart'
import Info from './info'
import Comment from './comment'
import { useLang } from '@/@core/shared/hooks/useLang'

const ResultItem: FC = () => {
  const { t } = useLang()
  const router = useRouter()
  const params = useParams()
  const breadcrumblink = [
    {
      id: 1,
      title: (
        <Text as={'span'} cursor={'pointer'} _hover={{ opacity: '0.8' }} onClick={() => router.back()}>
          {'<- ' + t('back')}
        </Text>
      )
    },
    {
      id: 2,
      title: params.id
    }
  ]

  return (
    <Box id='result-item' className='wrapper fade-in' minH={'100dvh'}>
      <BreadCrumb item={breadcrumblink} />
      <Banner />
      <MainDataPart />
      <GallaryPart />
      <Info />
      <Comment />
    </Box>
  )
}

export default ResultItem
