'use client'
import { defaultLinks } from '@/@core/service/helpers/links'
import { scssVariables } from '@/@core/utils/scss-variables'
import {
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

  return (
    <Drawer size={'xs'} isOpen={isOpen} placement='left' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent
        height={'60dvh'}
        borderRadius={'0 15px  15px 0'}
        bg={colorMode === 'dark' ? scssVariables.darkBg : '#F5FEFD'}
      >
        <DrawerCloseButton
          border={`2px solid ${scssVariables.mainColor}`}
          borderRadius={'50%'}
          color={scssVariables.mainColor}
        />
        <DrawerHeader textAlign={'center'}>
          <Heading fontWeight={600}>Logo</Heading>
        </DrawerHeader>

        <DrawerBody>
          <List fontWeight={500} textAlign={'center'}>
            {/* default-links */}
            {defaultLinks?.map(link => {
              return (
                <ListItem key={link.id} fontSize={'14px'} m={'20px 0'} fontWeight={400}>
                  <Link href={link.href}>{link.title}</Link>
                </ListItem>
              )
            })}
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
