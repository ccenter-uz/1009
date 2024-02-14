import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import { Box, Heading } from '@chakra-ui/react'
import { FC } from 'react'

const MyOrganizations: FC = () => {
  const breadcrumblinks = [
    {
      id: 1,
      title: 'Мои организации'
    },
    {
      id: 2,
      title: 'Общие'
    }
  ]

  return (
    <Box id='myorg' className='wrapper' aria-label='section'>
      <BreadCrumb item={breadcrumblinks} />
      <Heading style={{ textAlign: 'center' }}>MY ORGANIZATION</Heading>
    </Box>
  )
}

export default MyOrganizations
