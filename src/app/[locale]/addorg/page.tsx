import { AddOrgAsync } from '@/@core/pages/AddOrg'
import { Box } from '@chakra-ui/react'
import { FC } from 'react'

const Addorganization: FC = () => {
  return (
    <Box className='wrapper fade-in' id='addorg' minH={'100dvh'} aria-label='section'>
      <AddOrgAsync />
    </Box>
  )
}

export default Addorganization
