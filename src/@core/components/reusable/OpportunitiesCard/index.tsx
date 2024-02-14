'use client'
import { scssVariables } from '@/@core/utils/scss-variables'
import { Box, Heading, Img, Text, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'

export type IOpportunityCard = {
  id: number
  title: string
  options: string
  image?: string,
}

const OpportunityCard: FC<IOpportunityCard> = ({ title, options, image }) => {
  const { colorMode } = useColorMode()

  return (
    <Box
      borderRadius={'9px'}
      w={'100%'}
      maxWidth={scssVariables.cardOpportunities.w}
      height={scssVariables.cardOpportunities.h}
      boxShadow={scssVariables.boxShadowPartnerBox}
      border={'1px solid #eeecec'}
      margin={'0 auto'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-evenly'}
      bg={colorMode === 'dark' ? scssVariables.darkBg : '#fff'}
      transition={'transform 0.3s ease'}
      _hover={{
        background: scssVariables.gradientColor,
        color: ' #fff',
        cursor: 'pointer',
        transform: 'scale(1.02)'
      }}
    >
      <Box>
        <Heading mb={'5px'} fontSize={{ base: '14px', sm: '14px', md: '23px', xl: '23px' }}>
          {title}
        </Heading>
        <Text fontSize={{ base: '10px', sm: '10px', md: '16px', xl: '16px' }}>{options}</Text>
      </Box>
      <Img
        src={image}
        alt='cards'
        w={{ base: '47px', sm: '47px', md: '76px', xl: '76px' }}
        h={{ base: '47px', sm: '47px', md: '76px', xl: '76px' }}
      />
    </Box>
  )
}

export default OpportunityCard
