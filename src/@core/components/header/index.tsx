'use client'
import { FC, startTransition, useState } from 'react'
import {
  Box,
  Divider,
  Flex,
  Heading,
  Img,
  List,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode
} from '@chakra-ui/react'
import { defaultLinks } from '@/@core/service/helpers/links'
import { scssVariables } from '@/@core/utils/scss-variables'
import MenuDrawer from './components/Drawer'
import { useLang } from '@/@core/service/hooks/useLang'
import { Link } from '@/navigation'
import { usePathname } from 'next/navigation'
import SwitchLang from './components/SwitchLang'
import { useAuth } from '@/@core/service/hooks/useAuth'

const Header: FC = () => {
  const { t, locale } = useLang()
  const { colorMode, toggleColorMode } = useColorMode()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { isAuth } = useAuth()
  const pathname = usePathname()

  // close drawer on mobile size
  const onClose = (): void => {
    startTransition(() => {
      setIsOpen(false)
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
          <Img role='button' onClick={() => setIsOpen(true)} src='/header/hamburger-menu.svg' alt='hamburger-manu' />
        </Box>
        {/* logo */}
        <Box
          textAlign={{ base: 'center', sm: 'center', md: 'left', xl: 'left' }}
          flex={{ base: 1, sm: 1, md: 0.5, xl: 1 }}
        >
          <Heading fontWeight={600}>
            <Link aria-current='page' href={'/'}>
              Logo
            </Link>
          </Heading>
        </Box>
        {/* links */}
        <Box flex={{ base: 0, sm: 0, md: 2, xl: 1.3 }}>
          <List
            role='menu'
            aria-current='page'
            display={{ base: 'none', sm: 'none', md: 'flex', xl: 'flex' }}
            fontWeight={500}
            justifyContent={'space-between'}
          >
            {/* default Links */}
            {defaultLinks.map(link => (
              <Menu key={link.id}>
                <Link
                  role='menuItem'
                  aria-current='page'
                  href={link?.href}
                  className={`${pathname == `/${locale}${link.href}` ? 'active' : ''}`}
                >
                  <MenuButton>{link.title}</MenuButton>
                </Link>
                {link.subMenu && (
                  <MenuList>
                    {link.subMenu.map(menu => (
                      <Link
                        role='menuItem-inside'
                        aria-current='page'
                        key={menu.id}
                        href={menu.href}
                        className={`${pathname == `/${locale}${menu.href}` ? 'active' : ''}`}
                      >
                        <MenuItem>{menu.title}</MenuItem>
                      </Link>
                    ))}
                  </MenuList>
                )}
              </Menu>
            ))}
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
              <Img
                cursor={'pointer'}
                _hover={{ opacity: '0.8' }}
                transition={'all 0.3s ease'}
                src='/header/dark-mode.svg'
                alt='moon'
                onClick={toggleColorMode}
              />
            ) : (
              <Img
                cursor={'pointer'}
                _hover={{ opacity: '0.8' }}
                transition={'all 0.3s ease'}
                src='/header/light-mode.svg'
                alt='moon'
                onClick={toggleColorMode}
              />
            )}
          </Box>
          <Divider
            display={{ base: 'none', sm: 'none', md: 'block', xl: 'block' }}
            orientation='vertical'
            sx={{ color: 'lightgrey' }}
          />
          <Box display={{ base: 'none', sm: 'none', md: 'block', xl: 'block' }}>
            <SwitchLang />
          </Box>
          <Divider
            display={{ base: 'none', sm: 'none', md: 'block', xl: 'block' }}
            orientation='vertical'
            sx={{ color: 'lightgrey' }}
          />
          {isAuth ? (
            <Box cursor={'pointer'}>
              <Img src='/header/user.svg' alt='user' />
            </Box>
          ) : (
            <Link href={'/signup'} aria-current='page'>
              <Box
                border={colorMode === 'dark' ? '1px solid #fff' : `1px solid ${scssVariables.mainColor}`}
                borderRadius={'20px'}
                cursor={'pointer'}
                p={'5px 15px'}
                color={colorMode === 'dark' ? '#fff' : scssVariables.mainColor}
                transition={'all 0.3s ease'}
                _hover={{ bg: scssVariables.mainColor, color: '#fff' }}
              >
                <Text>{t('auth-login')}</Text>
              </Box>
            </Link>
          )}
        </Box>
      </Flex>
      {/* Menu Drawer */}
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </nav>
  )
}

export default Header
