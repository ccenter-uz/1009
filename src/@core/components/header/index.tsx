'use client'
import { FC } from 'react'
import { Box, Divider, Flex, Heading, Image, List, ListItem, useColorMode } from '@chakra-ui/react'
import './style.scss'
import Link from 'next/link'
import { defaultLinks } from '@/@core/service/helpers/links'

const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <nav className='header wrapper'>
      <Flex pt={'39px'} justifyContent={'space-between'} alignItems={'center'}>
        <Box w={'100%'}>
          <Heading>LOGO</Heading>
        </Box>
        <Box w={'100%'}>
          <List display={'flex'} justifyContent={'space-between'}>
            {/* default-links */}
            {defaultLinks?.map(link => {
              return (
                <ListItem key={link.id}>
                  <Link href={link.href}>{link.title}</Link>
                </ListItem>
              )
            })}
          </List>
        </Box>
        <Box w={'100%'} h={'32px'} display={'flex'} alignItems={'center'} justifyContent={'flex-end'} gap={'4'}>
          <Box>
            {colorMode === 'light' ? (
              <Image
                cursor={'pointer'}
                _hover={{ opacity: '0.8' }}
                transition={'all 0.3s ease'}
                src='/assets/header/dark-mode.svg'
                alt='moon'
                onClick={toggleColorMode}
              />
            ) : (
              <Image
                cursor={'pointer'}
                _hover={{ opacity: '0.8' }}
                transition={'all 0.3s ease'}
                src='/assets/header/light-mode.svg'
                alt='moon'
                onClick={toggleColorMode}
              />
            )}
          </Box>
          <Divider orientation='vertical' />
          <Box>Uz</Box>
          <Divider orientation='vertical' />
          <Box>
            <Image src='/assets/header/user.svg' alt='user' />
          </Box>
        </Box>
      </Flex>
    </nav>
  )
}

export default Header
