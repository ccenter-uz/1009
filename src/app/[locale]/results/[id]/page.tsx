import { Box, Heading } from '@chakra-ui/react'
import { FC } from 'react'
import './style.scss'
import BreadCrumb from '@/@core/components/reusable/Breadcrumb'

const ResultItem: FC = () => {
  const breadcrumblink = [
    {
      id: 1,
      title: 'Организации'
    },
    {
      id: 2,
      title: 'ИД'
    }
  ]

  return (
    <Box id='result-item' className='wrapper'>
      <BreadCrumb item={breadcrumblink} />
      <Heading>RESULT-ITEM</Heading>
    </Box>
  )
}

export default ResultItem
