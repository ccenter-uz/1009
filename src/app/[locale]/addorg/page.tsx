import Form from '@/@core/pages/AddOrganization/UI/Form'
import BreadCrumb from '@/@core/shared/UI/Breadcrumb'
import { Box } from '@chakra-ui/react'
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

export default Addorganization
