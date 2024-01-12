import { Box, Heading, List, ListItem } from '@chakra-ui/react'
import './style.scss'

const Header = () => {
  return (
    <nav className='header'>
      <Box>
        <Box>
          <Heading>LOGO</Heading>
        </Box>
        <Box>
          <List>
            <ListItem>123</ListItem>
            <ListItem>123</ListItem>
            <ListItem>123</ListItem>
          </List>
        </Box>
        <Box></Box>
      </Box>
    </nav>
  )
}

export default Header
