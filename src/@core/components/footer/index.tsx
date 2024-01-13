'use client'

import { FC } from 'react'
import { useLang } from '@/@core/service/hooks/useLang'
import './style.scss'
import { Box, Image, Link, Text, useColorMode } from '@chakra-ui/react'
import InputGen from '../reusable/Input'
import { scssVariables } from '@/@core/utils/scss-variables'

const Footer: FC = () => {
  const { t } = useLang()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <footer className='footer'>
      <Box className='footer-body' display={'flex'} justifyContent={'space-between'} paddingBottom={'130px'}>
        <Box className='footer-body__column'>
          <Link className='footer-link'>+1 (7635) 547-12-97</Link>
          <Link className='footer-link'>support@lift.tghdhy</Link>
        </Box>
        <Box className='footer-body__column'>
          <Link className='footer-link'>Возможности</Link>
          <Link className='footer-link'>Тарифы</Link>
        </Box>
        <Box className='footer-body__column'>
          <Link className='footer-link'>Добавить Организацию</Link>
          <Link className='footer-link'>Помощь</Link>
        </Box>
        <Box>
          <Link color={'#0A142F'} fontSize={'18px'} fontWeight={'400'}>
            Подпишитесь на обновления
          </Link>
        </Box>
      </Box>
      <Box className='footer-footer' display='flex' alignItems={'center'} justifyContent={'space-between'}>
        <Box display={'flex'} alignItems={'center'} gap={'25px'}>
          <Link href='/'>
            {colorMode === 'light' ? (
              <Image src='/facebook.svg' alt='facebook img' />
            ) : (
              <Image src='/facebook-white.svg' alt='facebook img' />
            )}
          </Link>
          <Link href='/'>
            {colorMode === 'light' ? (
              <Image src='/instagram.svg' alt='facebook img' />
            ) : (
              <Image src='/instagram-white.svg' alt='facebook img' />
            )}
          </Link>
          <Link href='/'>
            {colorMode === 'light' ? (
              <Image src='/telegram.svg' alt='facebook img' />
            ) : (
              <Image src='/telegram-white.svg' alt='facebook img' />
            )}
          </Link>
        </Box>
        <Box>
          <Text fontSize={'14px'} fontWeight={400} color={scssVariables.textBlackColor}>
            © 2024 • All Rights Reserved
          </Text>
        </Box>
        <Box display={'flex'} alignItems={'center'} gap={'30px'}>
          {colorMode === 'light' ? (
            <Image src='/qms.svg' alt='certified qms img' />
          ) : (
            <Image src='/qms-white.svg' alt='certified qms img' />
          )}

          {colorMode === 'light' ? (
            <Image src='/iso.svg' alt='iso img' />
          ) : (
            <Image src='/iso-white.svg' alt='iso img' />
          )}
        </Box>
      </Box>
    </footer>
  )
}

export default Footer
