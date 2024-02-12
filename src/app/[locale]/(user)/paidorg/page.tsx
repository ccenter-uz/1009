import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import { Box, Heading } from '@chakra-ui/react'
import { FC } from 'react'

const PaidOrganizations: FC = () => {
  const breadcrumblinks = [
    {
      id: 1,
      title: 'Купленные организации'
    },
    {
      id: 2,
      title: 'Общие'
    }
  ]

  return (
    <Box id='paidorg' className='wrapper' aria-label='section'>
      <BreadCrumb item={breadcrumblinks} />
      <Heading style={{ textAlign: 'center' }}>PAID ORGANIZATIONS</Heading>
    </Box>
  )
}

export default PaidOrganizations
