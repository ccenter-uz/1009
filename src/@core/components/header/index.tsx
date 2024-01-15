'use client'
import { FC } from 'react'
import { Box, Divider, Flex, Heading, Image, List, ListItem, useColorMode } from '@chakra-ui/react'
import './style.scss'
import Link from 'next/link'
import { defaultLinks } from '@/@core/service/helpers/links'
import { scssVariables } from '@/@core/utils/scss-variables'

const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <nav className='header wrapper'>
      <Flex
        pt={'39px'}
        justifyContent={'space-between'}
        alignItems={'center'}
        borderBottom={{
          base: `2px solid ${scssVariables.mainColor}`,
          sm: `2px solid ${scssVariables.mainColor}`,
          md: 'none',
          xl: 'none'
        }}
      >
        {/* hamburger-menu */}
        <Box display={{ base: 'block', sm: 'block', md: 'none', xl: 'none' }} flex={{ base: 1, sm: 1, md: 0, xl: 0 }}>
          <Heading>=</Heading>
        </Box>
        {/* logo */}
        <Box
          textAlign={{ base: 'center', sm: 'center', md: 'left', xl: 'left' }}
          flex={{ base: 1, sm: 1, md: 0.5, xl: 1 }}
        >
          <Heading>Logo</Heading>
        </Box>
        {/* links */}
        <Box flex={{ base: 0, sm: 0, md: 2, xl: 1.3 }}>
          <List
            display={{ base: 'none', sm: 'none', md: 'flex', xl: 'flex' }}
            fontWeight={500}
            justifyContent={'space-between'}
          >
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
        {/* other-utilities */}
        <Box
          flex={{ base: 1, sm: 1, md: 0.6, xl: 1 }}
          h={'32px'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'flex-end'}
          gap={'4'}
        >
          <Box display={{ base: 'none', sm: 'none', md: 'block', xl: 'block' }}>
            {colorMode === 'light' ? (
              <Image
                cursor={'pointer'}
                _hover={{ opacity: '0.8' }}
                transition={'all 0.3s ease'}
                src='/header/dark-mode.svg'
                alt='moon'
                onClick={toggleColorMode}
              />
            ) : (
              <Image
                cursor={'pointer'}
                _hover={{ opacity: '0.8' }}
                transition={'all 0.3s ease'}
                src='/header/light-mode.svg'
                alt='moon'
                onClick={toggleColorMode}
              />
            )}
          </Box>
          <Divider display={{ base: 'none', sm: 'none', md: 'block', xl: 'block' }} orientation='vertical' />
          <Box display={{ base: 'none', sm: 'none', md: 'block', xl: 'block' }}>Uz</Box>
          <Divider display={{ base: 'none', sm: 'none', md: 'block', xl: 'block' }} orientation='vertical' />
          <Box>
            <Image src='/header/user.svg' alt='user' />
          </Box>
        </Box>
      </Flex>
    </nav>
  )
}

export default Header
