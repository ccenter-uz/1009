'use client'
import { defaultLinks } from '@/@core/service/helpers/links'
import { useLang } from '@/@core/service/hooks/useLang'
import { scssVariables } from '@/@core/utils/scss-variables'
import { usePathname } from '@/navigation'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Img,
  List,
  ListItem,
  MenuItem,
  useColorMode
} from '@chakra-ui/react'
import Link from 'next/link'
import { FC } from 'react'

type IMenuDrawer = {
  isOpen: boolean
  onClose: () => void
}

const MenuDrawer: FC<IMenuDrawer> = ({ isOpen, onClose }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { locale } = useLang()
  const pathname = usePathname()

  return (
    <Drawer size={'xs'} isOpen={isOpen} placement='left' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent
        minHeight={'60dvh'}
        borderRadius={'0 15px  15px 0'}
        bg={colorMode === 'dark' ? scssVariables.darkBg : '#F5FEFD'}
      >
        <DrawerCloseButton
          border={`2px solid ${scssVariables.mainColor}`}
          borderRadius={'50%'}
          color={scssVariables.mainColor}
        />
        <DrawerHeader textAlign={'center'}>
          <Link href={'/'}>
            <Heading fontWeight={600}>Logo</Heading>
          </Link>
        </DrawerHeader>

        <DrawerBody>
          <List fontWeight={500} textAlign={'center'}>
            {/* default-links */}
            {defaultLinks.map(link => (
              <Accordion key={link.id} allowMultiple>
                <AccordionItem>
                  <Link href={link?.href} className={`${pathname == `/${locale}${link.href}` ? 'active' : ''}`}>
                    <AccordionButton>{link.title}</AccordionButton>
                  </Link>
                  {link.subMenu && (
                    <AccordionPanel bg={colorMode === 'dark' ? scssVariables.darkBg : scssVariables.blockBgColor}>
                      {link.subMenu.map(menu => (
                        <List key={menu.id}>
                          <Link href={menu.href} className={`${pathname == `/${locale}${menu.href}` ? 'active' : ''}`}>
                            <ListItem p={'0.3rem 0'} textAlign={'left'} borderBottom={'1px solid grey'}>
                              {menu.title}
                            </ListItem>
                          </Link>
                        </List>
                      ))}
                    </AccordionPanel>
                  )}
                </AccordionItem>
              </Accordion>
            ))}
          </List>
          <Heading fontSize={'20px'} fontWeight={400} textAlign={'center'} mt={'3em'} mb={'20px'}>
            +1 (7635) 547-12-97
          </Heading>
          {colorMode === 'light' ? (
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'11px'}>
              <Img
                cursor={'pointer'}
                _hover={{ opacity: '0.8' }}
                transition={'all 0.3s ease'}
                src='/header/dark-mode.svg'
                alt='moon'
                onClick={toggleColorMode}
              />
              <Box color={scssVariables.mainColor}>Uz</Box>
            </Box>
          ) : (
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'11px'}>
              <Img
                cursor={'pointer'}
                _hover={{ opacity: '0.8' }}
                transition={'all 0.3s ease'}
                src='/header/light-mode.svg'
                alt='moon'
                onClick={toggleColorMode}
              />
              <Box color={scssVariables.mainColor}>Uz</Box>
            </Box>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default MenuDrawer
