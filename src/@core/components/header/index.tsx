'use client'
import { FC, startTransition, useState } from 'react'
import { Box, Divider, Flex, Heading, Image, List, ListItem, Text, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'
import { defaultLinks } from '@/@core/service/helpers/links'
import { scssVariables } from '@/@core/utils/scss-variables'
import MenuDrawer from './components/Drawer'
import Auth from '../Auth'
import { useAuth } from '@/@core/service/hooks/useAuth'
import { useLang } from '@/@core/service/hooks/useLang'

const Header: FC = () => {
  const { t } = useLang()
  const { colorMode, toggleColorMode } = useColorMode()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [openAuth, setOpenAuth] = useState<boolean>(false)
  const { isAuth } = useAuth()
  // close drawer on mobile size
  const onClose = (): void => {
    startTransition(() => {
      setIsOpen(false)
    })
  }

  // close auth modal
  const onCloseAuth = (): void => {
    startTransition(() => {
      setOpenAuth(false)
    })
  }

  return (
    <nav className='wrapper'>
      <Flex
        pt={{ base: ' 18px', sm: '18px', md: '39px', xl: '39px' }}
        justifyContent={'space-between'}
        alignItems={'center'}
        borderBottom={{
          base: `1px solid ${scssVariables.mainColor}`,
          sm: `1px solid ${scssVariables.mainColor}`,
          md: 'none',
          xl: 'none'
        }}
      >
        {/* hamburger-menu */}
        <Box display={{ base: 'block', sm: 'block', md: 'none', xl: 'none' }} flex={{ base: 1, sm: 1, md: 0, xl: 0 }}>
          <Image role='button' onClick={() => setIsOpen(true)} src='/header/hamburger-menu.svg' alt='hamburger-manu' />
        </Box>
        {/* logo */}
        <Box
          textAlign={{ base: 'center', sm: 'center', md: 'left', xl: 'left' }}
          flex={{ base: 1, sm: 1, md: 0.5, xl: 1 }}
        >
          <Heading fontWeight={600}>Logo</Heading>
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
          {isAuth ? (
            <Box cursor={'pointer'}>
              <Image src='/header/user.svg' alt='user' />
            </Box>
          ) : (
            <Box
              border={colorMode === 'dark' ? '1px solid #fff' : `1px solid ${scssVariables.mainColor}`}
              borderRadius={'20px'}
              onClick={() => setOpenAuth(true)}
              cursor={'pointer'}
              p={'5px 15px'}
              color={colorMode === 'dark' ? '#fff' : scssVariables.mainColor}
              transition={'all 0.3s ease'}
              _hover={{ bg: scssVariables.mainColor, color: '#fff' }}
            >
              <Text>{t('auth-login')}</Text>
            </Box>
          )}
        </Box>
      </Flex>
      {/* Menu Drawer */}
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
      <Auth isOpen={openAuth} onClose={onCloseAuth} />
    </nav>
  )
}

export default Header
