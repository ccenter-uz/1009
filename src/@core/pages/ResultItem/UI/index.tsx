'use client'
import { Box, Text } from '@chakra-ui/react'
import { FC, useEffect } from 'react'
import BreadCrumb from '@/@core/shared/UI/Breadcrumb'
import { useParams, useRouter } from 'next/navigation'
import Banner from './banner'
import MainDataPart from './mainDataPart'
import GallaryPart from './galleryPart'
import Info from './info'
import Comment from './comment'
import { useLang } from '@/@core/shared/hooks/useLang'
import { getOneOrganization } from '@/@core/shared/api'
import { useResultItemSlicer } from '../model/Slicer'
import { Details } from './details'

const ResultItem: FC = () => {
  const { t } = useLang()
  const router = useRouter()
  const params = useParams()
  const { resultItemData, setResultItemData } = useResultItemSlicer()
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
      title: resultItemData[0]?.organization_name
    }
  ]

  // GET
  const get = async () => {
    const res = await getOneOrganization(params?.id as string)
    if (!res) return null

    res?.status === 200 && setResultItemData(res.data)
  }

  // EFFECT
  useEffect(() => {
    get()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.id])

  return (
    <Box id='result-item' className='wrapper fade-in' minH={'100dvh'}>
      <BreadCrumb item={breadcrumblink} />
      <Banner />
      <MainDataPart />
      <Details />
      <GallaryPart />
      <Info />
      <Comment />
    </Box>
  )
}

export default ResultItem
