import { Box, Heading } from '@chakra-ui/react'
import { FC } from 'react'
import BreadCrumb from '@/@core/components/reusable/Breadcrumb'

const Results: FC = () => {
  const breadcrumblink = [
    {
      id: 1,
      title: 'Организации'
    }
  ]

  return (
    <Box id='results' className='wrapper fade-in'>
      <BreadCrumb item={breadcrumblink} />
      <Heading>RESULTS</Heading>
    </Box>
  )
}

export default Results
