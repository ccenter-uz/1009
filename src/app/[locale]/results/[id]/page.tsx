'use client'
import { Box, Text } from '@chakra-ui/react'
import { FC } from 'react'
import BreadCrumb from '@/@core/shared/UI/Breadcrumb'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import Banner from './_components/banner'
import MainDataPart from './_components/mainDataPart'
import GallaryPart from './_components/galleryPart'
import Info from './_components/info'
import Comment from './_components/comment'

const ResultItem: FC = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const params = useParams()
  const breadcrumblink = [
    {
      id: 1,
      title: (
        <Text as={'span'} cursor={'pointer'} _hover={{ opacity: '0.8' }} onClick={() => router.back()}>
          {'<- Назад'}
        </Text>
      )
    },
    {
      id: 2,
      title: searchParams.has('razdel') ? (searchParams.get('razdel') as string) : ''
    },
    {
      id: 3,
      title: searchParams.has('podrazdel') ? (searchParams.get('podrazdel') as string) : ''
    },
    {
      id: 4,
      title: searchParams.has('region')
        ? (`${searchParams.get('region')?.toString()[0].toUpperCase()}${searchParams
            .get('region')
            ?.toString()
            .slice(1)}` as string)
        : ''
    },
    {
      id: 5,
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
