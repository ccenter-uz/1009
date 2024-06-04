import { AddOrg } from '@/@core/pages/AddOrg'
// import Form from '@/@core/pages/AddOrganization/UI/Form'
import { Box } from '@chakra-ui/react'
import { FC } from 'react'

const Addorganization: FC = () => {
  return (
    <Box className='wrapper fade-in' id='addorg' minH={'100dvh'} aria-label='section'>
      {/* <Form /> */}
      <AddOrg />
    </Box>
  )
}

export default Addorganization
