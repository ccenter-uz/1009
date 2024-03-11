'use client'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Link } from '@/navigation'
import { Box, Text, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'

type ICards = {
  img: string
  title: string
  text: string
  onclick: () => void
  href: string
}

const Cards: FC<ICards> = ({ img, title, text, onclick, href }) => {
  const { colorMode } = useColorMode()

  return (
    <Box
      as={Link}
      href={href}
      onClick={onclick}
      display={'flex'}
      alignItems={'center'}
      bg={colorMode === 'dark' ? scssVariables.darkBg : '#fff'}
      aria-label='card'
      w={{ base: '100%', sm: '100%', md: '440px', xl: '472px' }}
      minH={{ base: 'fit-content', sm: 'fit-content', md: '128px', xl: '128px' }}
      p={'16px'}
      boxShadow={'0px 15px 20px 0px rgba(0, 0, 0, 0.05)'}
      borderRadius={'8px'}
      _hover={{ cursor: 'pointer', bg: scssVariables.blockBgColor, transition: 'all 0.5s ease' }}
    >
      <Box display={'flex'} alignItems={'center'} gap={'16px'}>
        <Box
          aria-label='logo'
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          width={{ base: '80px', sm: '80px', md: '96px', xl: '96px' }}
          height={{ base: '60px', sm: '60px', md: '96px', xl: '96px' }}
          borderRadius={'16px'}
          bg={'rgba(9, 205, 205, 1)'}
        >
          <img src={img} alt='logo' width={'40px'} height={'40px'} />
        </Box>
        <Box
          w={{ base: '200px', sm: '', md: '280px', xl: '280px' }}
          aria-label='content-side'
          display={'flex'}
          flexDirection={'column'}
          gap={{ base: '0', sm: '0', md: '8px', xl: '8px' }}
        >
          <Text userSelect={'none'} fontSize={{ base: '15px', sm: '15px', md: '20px', xl: '20px' }}>
            {title}
          </Text>
          <Text userSelect={'none'} fontSize={scssVariables.fonts.paragraph} color={'gray'}>
            {text}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Cards
