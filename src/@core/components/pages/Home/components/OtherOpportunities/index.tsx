import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import './style.scss'
import { FC } from 'react'
import { useLang } from '@/@core/service/hooks/useLang'
import { scssVariables } from '@/@core/utils/scss-variables'

const OtherOpportunities: FC = () => {
  const { t } = useLang()

  return (
    <Box
      className='wrapper'
      pt={{ base: '56px', sm: '56px', md: '72px', xl: '72px' }}
      mb={{ base: '48px', sm: '48px', md: '136px', xl: '136px' }}
    >
      <Heading
        textAlign={'center'}
        fontWeight={'600'}
        fontSize={scssVariables.fonts.titleSize}
        color={'#009393'}
        mb={{ base: '16px', sm: '16px', md: '72px', xl: '72px' }}
      >
        {t('opportunities-heading')}
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 1, xl: 2 }} gap={{ base: '16px', sm: '16px', md: '45px', xl: '45px' }}>
        <Box
          borderRadius={'15px'}
          w={'100%'}
          maxWidth={scssVariables.cardOpportunities.w}
          height={scssVariables.cardOpportunities.h}
          border={'1px solid red'}
          margin={'0 auto'}
        >
          1
        </Box>
        <Box
          borderRadius={'15px'}
          w={'100%'}
          maxWidth={scssVariables.cardOpportunities.w}
          height={scssVariables.cardOpportunities.h}
          border={'1px solid red'}
          margin={'0 auto'}
        >
          2
        </Box>
        <Box
          borderRadius={'15px'}
          w={'100%'}
          maxWidth={scssVariables.cardOpportunities.w}
          height={scssVariables.cardOpportunities.h}
          border={'1px solid red'}
          margin={'0 auto'}
        >
          3
        </Box>
        <Box
          borderRadius={'15px'}
          w={'100%'}
          maxWidth={scssVariables.cardOpportunities.w}
          height={scssVariables.cardOpportunities.h}
          border={'1px solid red'}
          margin={'0 auto'}
        >
          4
        </Box>
        <Box
          borderRadius={'15px'}
          w={'100%'}
          maxWidth={scssVariables.cardOpportunities.w}
          height={scssVariables.cardOpportunities.h}
          border={'1px solid red'}
          margin={'0 auto'}
        >
          5
        </Box>
        <Box
          borderRadius={'15px'}
          w={'100%'}
          maxWidth={scssVariables.cardOpportunities.w}
          height={scssVariables.cardOpportunities.h}
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
