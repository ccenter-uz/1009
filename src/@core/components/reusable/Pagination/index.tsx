import { IPagination } from '@/@core/service/types/types'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Box, Select } from '@chakra-ui/react'
import { FC } from 'react'

const Pagination: FC<IPagination> = ({ pageLimiter }) => {
  return (
    <Box w={'100%'} display={'flex'} alignItems={'center'} justifyContent={'flex-end'}>
      <Box
        p={{ base: '8px 10px', sm: '8px 10px', md: '14px 24px', xl: '14px 24px' }}
        display={'flex'}
        alignItems={'center'}
        gap={'0.5rem'}
      >
        <Box
          w={{ base: '30px', sm: '30px', md: '30px', xl: '35px' }}
          h={{ base: '30px', sm: '30px', md: '30px', xl: '35px' }}
          border={`1px solid ${scssVariables.blockBgColor}`}
          borderRadius={'8px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {'<'}
        </Box>
        <Box
          w={{ base: '30px', sm: '30px', md: '30px', xl: '35px' }}
          h={{ base: '30px', sm: '30px', md: '30px', xl: '35px' }}
          bg={scssVariables.mainColor}
          color={'#fff'}
          border={`1px solid ${scssVariables.blockBgColor}`}
          borderRadius={'8px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          1
        </Box>
        <Box
          w={{ base: '30px', sm: '30px', md: '30px', xl: '35px' }}
          h={{ base: '30px', sm: '30px', md: '30px', xl: '35px' }}
          border={`1px solid ${scssVariables.blockBgColor}`}
          borderRadius={'8px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          2
        </Box>
        <Box
          w={{ base: '30px', sm: '30px', md: '30px', xl: '35px' }}
          h={{ base: '30px', sm: '30px', md: '30px', xl: '35px' }}
          border={`1px solid ${scssVariables.blockBgColor}`}
          borderRadius={'8px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          3
        </Box>
        <Box
          w={{ base: '30px', sm: '30px', md: '30px', xl: '35px' }}
          h={{ base: '30px', sm: '30px', md: '30px', xl: '35px' }}
          border={`1px solid ${scssVariables.blockBgColor}`}
          borderRadius={'8px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          4
        </Box>
        <Box
          w={{ base: '30px', sm: '30px', md: '30px', xl: '35px' }}
          h={{ base: '30px', sm: '30px', md: '30px', xl: '35px' }}
          border={`1px solid ${scssVariables.blockBgColor}`}
          borderRadius={'8px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {'>'}
        </Box>
      </Box>
      {pageLimiter && <Select w={'100px'} h={'35px'} />}
    </Box>
  )
}

export default Pagination
