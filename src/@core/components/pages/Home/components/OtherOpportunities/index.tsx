import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import './style.scss'
import { FC } from 'react'
import { useLang } from '@/@core/service/hooks/useLang'

const OtherOpportunities: FC = () => {
  const { t } = useLang()

  return (
    <Box className='wrapper' minH={'829px'} pt={{ base: '72px', sm: '', md: '', xl: '' }}>
      <Heading
        textAlign={'center'}
        fontWeight={'600'}
        fontSize={'32px'}
        color={'#009393'}
        mb={{ base: '72px', sm: '', md: '', xl: '' }}
      >
        {t('opportunities-heading')}
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 1, xl: 2 }} gap={{ base: '45px', sm: '', md: '', xl: '' }}>
        <Box
          borderRadius={'15px'}
          w={'100%'}
          maxWidth={'620px'}
          height={'140px'}
          border={'1px solid red'}
          margin={'0 auto'}
        >
          1
        </Box>
        <Box
          borderRadius={'15px'}
          w={'100%'}
          maxWidth={'620px'}
          height={'140px'}
          border={'1px solid red'}
          margin={'0 auto'}
        >
          2
        </Box>
        <Box
          borderRadius={'15px'}
          w={'100%'}
          maxWidth={'620px'}
          height={'140px'}
          border={'1px solid red'}
          margin={'0 auto'}
        >
          3
        </Box>
        <Box
          borderRadius={'15px'}
          w={'100%'}
          maxWidth={'620px'}
          height={'140px'}
          border={'1px solid red'}
          margin={'0 auto'}
        >
          4
        </Box>
        <Box
          borderRadius={'15px'}
          w={'100%'}
          maxWidth={'620px'}
          height={'140px'}
          border={'1px solid red'}
          margin={'0 auto'}
        >
          5
        </Box>
        <Box
          borderRadius={'15px'}
          w={'100%'}
          maxWidth={'620px'}
          height={'140px'}
          border={'1px solid red'}
          margin={'0 auto'}
        >
          6
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default OtherOpportunities
