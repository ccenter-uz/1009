import FirstColumn from '@/@core/components/pages/AddOrganization/components/FirstColumn'
import Form from '@/@core/components/pages/AddOrganization/components/Form'
import BreadCrumb from '@/@core/components/reusable/Breadcrumb'
import { Box, FormControl } from '@chakra-ui/react'
import { FC } from 'react'

const Addorganization: FC = () => {
  const breadcrumblink = [
    {
      id: 1,
      title: 'Добавить организации'
    }
  ]

  return (
    <Box className='wrapper fade-in' id='addorg' minH={'100dvh'} aria-label='section'>
      {/* <BreadCrumb item={breadcrumblink} /> */}
      <Form />
    </Box>
  )
}

export default Addorganization;
