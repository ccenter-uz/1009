'use client'
import { FC } from 'react'
import { useLang } from '@/@core/service/hooks/useLang'
import { Box, Button, Heading, Img, SimpleGrid, Text, useColorMode } from '@chakra-ui/react'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Link } from '@/navigation'
import InputGen from '../reusable/Input'

const Footer: FC = () => {
  const { t } = useLang()
  const { colorMode } = useColorMode()

  return (
    <footer className='wrapper'>
      <SimpleGrid
        columns={{ sm: 1, md: 3, xl: 4 }}
        gap={{ base: '15px', sm: '15px', md: '20px', xl: '24px' }}
        pt={{ base: '48px', sm: '48px', md: '62px', xl: '62px' }}
        marginBottom={{ base: '40px', sm: '40px', md: '80px', xl: '130px' }}
      >
        <Box
          display={'flex'}
          alignItems={{ base: 'center', sm: 'center', md: 'flex-start', xl: 'flex-start' }}
          flexDirection={'column'}
          gap={{ base: '15px', sm: '15px', md: '20px', xl: '24px' }}
        >
          <Link href={'#'}>
            <Heading>Logo</Heading>
          </Link>
          <Link href={'#'}>
            <Text
              fontSize={{ base: '14px', sm: '14px', md: '18px', xl: '18px' }}
              color={colorMode === 'dark' ? 'white' : scssVariables.textGreyColor}
            >
              {t('footer-phone')}
            </Text>
          </Link>
          <Link href={'#'}>
            <Text
              fontSize={{ base: '14px', sm: '14px', md: '18px', xl: '18px' }}
              color={colorMode === 'dark' ? 'white' : scssVariables.textGreyColor}
            >
              {t('footer-email')}
            </Text>
          </Link>
        </Box>
        <Box
          display={'flex'}
          alignItems={{ base: 'center', sm: 'center', md: 'center', xl: 'flex-start' }}
          flexDirection={'column'}
          gap={{ base: '15px', sm: '15px', md: '20px', xl: '24px' }}
        >
          <Link href={'#opportunities'}>
            <Text
              fontSize={{ base: '14px', sm: '14px', md: '18px', xl: '18px' }}
              color={colorMode === 'dark' ? 'white' : scssVariables.textGreyColor}
            >
              {t('footer-opportunity')}
            </Text>
          </Link>
          <Link href={'#tariffs'}>
            <Text
              fontSize={{ base: '14px', sm: '14px', md: '18px', xl: '18px' }}
              color={colorMode === 'dark' ? 'white' : scssVariables.textGreyColor}
            >
              {t('footer-tarif')}
            </Text>
          </Link>
        </Box>
        <Box
          display={'flex'}
          alignItems={{ base: 'center', sm: 'center', md: 'flex-end', xl: 'flex-start' }}
          flexDirection={'column'}
          gap={{ base: '15px', sm: '15px', md: '20px', xl: '24px' }}
        >
          <Link href={'#addOrganization'}>
            <Text
              fontSize={{ base: '14px', sm: '14px', md: '18px', xl: '18px' }}
              color={colorMode === 'dark' ? 'white' : scssVariables.textGreyColor}
            >
              {t('footer-add-organization')}
            </Text>
          </Link>
          <Link href={'#help'}>
            <Text
              fontSize={{ base: '14px', sm: '14px', md: '18px', xl: '18px' }}
              color={colorMode === 'dark' ? 'white' : scssVariables.textGreyColor}
            >
              {t('footer-help')}
            </Text>
          </Link>
        </Box>
        <Box
          display={'flex'}
          alignItems={{ base: 'center', sm: 'center', md: 'flex-start', xl: 'flex-end' }}
          flexDirection={'column'}
          gap={{ base: '24px', sm: '24px', md: '24px', xl: '24px' }}
        >
          <Link href={'#'}>
            <Text
              fontSize={{ base: '14px', sm: '14px', md: '18px', xl: '18px' }}
              color={colorMode === 'dark' ? 'white' : scssVariables.textGreyColor}
            >
              {t('footer-follow')}
            </Text>
          </Link>
          <InputGen
            width={'248px'}
            bg={'#fff'}
            borderRadius={'6px'}
            height={'50px'}
            rightWidth='50px'
            fontSize={{ base: '14px', sm: '14px', md: '14px', xl: '16px' }}
            button={
              <Button
                _hover={{ opacity: '0.8' }}
                _active={{ transform: 'scale(0.95)' }}
                width={'100%'}
                borderRadius='6px'
                height={'100%'}
                bg={'teal'}
                color={'white'}
              >
                {'->'}
              </Button>
            }
            placeholder={t('footer-your-email')}
          />
        </Box>
      </SimpleGrid>
      <SimpleGrid
        columns={{ sm: 1, md: 3, xl: 3 }}
        alignItems={'center'}
        mb={{ base: '39px', sm: '', md: '', xl: '' }}
        gap={'24px 0'}
      >
        <Box
          display={'flex'}
          justifyContent={{ base: 'center', sm: 'center', md: 'flex-start', xl: 'flex-start' }}
          alignItems={'center'}
          gap={'25px'}
        >
          <Link href='/'>
            {colorMode === 'light' ? (
              <Img src='/footer/facebook.svg' alt='facebook img' />
            ) : (
              <Img src='/footer/facebook-white.svg' alt='facebook img' />
            )}
          </Link>
          <Link href='/'>
            {colorMode === 'light' ? (
              <Img src='/footer/instagram.svg' alt='facebook img' />
            ) : (
              <Img src='/footer/instagram-white.svg' alt='facebook img' />
            )}
          </Link>
          <Link href='/'>
            {colorMode === 'light' ? (
              <Img src='/footer/telegram.svg' alt='facebook img' />
            ) : (
              <Img src='/footer/telegram-white.svg' alt='facebook img' />
            )}
          </Link>
        </Box>
        <Box display={'flex'} justifyContent={'center'}>
          <Text fontSize={'14px'} fontWeight={400}>
            {t('footer-license')}
          </Text>
        </Box>
        <Box
          display={'flex'}
          justifyContent={{ base: 'center', sm: 'center', md: 'flex-end', xl: 'flex-end' }}
          alignItems={'center'}
          gap={'30px'}
        >
          {colorMode === 'light' ? (
            <Img src='/footer/qms.svg' alt='certified qms img' />
          ) : (
            <Img src='/footer/qms-white.svg' alt='certified qms img' />
          )}

          {colorMode === 'light' ? (
            <Img src='/footer/iso.svg' alt='iso img' />
          ) : (
            <Img src='/footer/iso-white.svg' alt='iso img' />
          )}
        </Box>
      </SimpleGrid>
    </footer>
  )
}

export default Footer
