import { scssVariables } from '@/@core/utils/scss-variables'
import { Box, Button, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { FC } from 'react'

const SearchFilter: FC = () => {
  return (
    <Box
      minH={{ base: '80px', sm: '80px', md: '152px', xl: '152px' }}
      bg={scssVariables.blockBgColor}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      p={'0.5em'}
      borderRadius={'6px'}
    >
      <InputGroup w={{ base: '100%', sm: '100%', md: '80%', xl: '80%' }}>
        <InputLeftElement h={{ base: '30px', sm: '30px', md: '45px', xl: '50px' }}>
          <img src='/search-line.svg' alt='search' width={'18px'} height={'18px'} />
        </InputLeftElement>
        <Input
          h={{ base: '30px', sm: '30px', md: '45px', xl: '50px' }}
          borderColor={'lightgrey'}
          type='text'
          placeholder='Поиск'
          bg={'#fff'}
          _focus={{ boxShadow: 'none', border: '1px solid teal' }}
          fontSize={scssVariables.fonts.paragraph}
          borderRadius={'6px'}
          box-shadow={' 0px 15px 20px 0px rgba(0, 0, 0, 0.05)'}
        />
        <InputRightElement
          w={'fit-content'}
          display={'flex'}
          alignItems={'center'}
          gap={'16px'}
          h={{ base: '30px', sm: '30px', md: '45px', xl: '50px' }}
        >
          <img src='/equalizer-fill.svg' alt='equalizer' width={'18px'} height={'18px'} />
          <Button
            w={{ base: '60px', sm: '60px', md: '200px', xl: '234px' }}
            h={{ base: '30px', sm: '30px', md: '45px', xl: '50px' }}
            borderRadius={'6px'}
            bg={scssVariables.gradientColor}
            color={'#fff'}
            fontSize={scssVariables.fonts.paragraph}
            _hover={{ bg: scssVariables.gradientColor, opacity: '0.8', transition: 'all 0.5s ease' }}
          >
            Поиск
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  )
}

export default SearchFilter
