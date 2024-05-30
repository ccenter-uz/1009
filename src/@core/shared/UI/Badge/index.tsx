import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { Box, Text, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'

type Props = {
  title: string
}

export const Badge: FC<Props> = props => {
  const { title } = props
  const { colorMode } = useColorMode()

  return (
    <Box
      w={'100%'}
      h={{ base: '40px', sm: '40px', md: '60px', xl: '70px' }}
      bg={colorMode === 'dark' ? scssVariables.primary : scssVariables.gradientColor}
      borderRadius={'4px'}
      display={'flex'}
      alignItems={'center'}
      // justifyContent={'center'}
      p={{ base: '0 16px', sm: '0 16px', md: '0 24px', xl: '0 24px' }}
      mb={{ base: '1em', sm: '1em', md: '2em', xl: '2em' }}
    >
      <Text fontSize={{ base: '16px', sm: '16px', md: '24px', xl: '24px' }} fontWeight={500} color={'#fff'}>
        {title}
      </Text>
    </Box>
  )
}
