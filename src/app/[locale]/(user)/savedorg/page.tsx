import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import { Box, Heading } from '@chakra-ui/react'
import { FC } from 'react'

const SavedOrganizations: FC = () => {
  const breadcrumblinks = [
    {
      id: 1,
      title: 'Сохраненные организации'
    },
    {
      id: 2,
      title: 'Общие'
    }
  ]

  return (
    <Box aria-label='section' id='savedorg' className='wrapper'>
      <BreadCrumb item={breadcrumblinks} />
      <Heading style={{ textAlign: 'center' }}>Saved Organizations</Heading>
    </Box>
  )
}

export default SavedOrganizations
