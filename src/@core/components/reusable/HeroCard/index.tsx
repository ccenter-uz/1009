import { scssVariables } from '@/@core/utils/scss-variables'
import { Box, Image, Text } from '@chakra-ui/react'
import { FC } from 'react'

type IHeroCard = {
  text: string
  image: string
}

const HeroCard: FC<IHeroCard> = ({ text, image }) => {
  return (
    <Box
      bg={'#fff'}
      borderRadius={'8px'}
      boxShadow={scssVariables.boxShadow}
      position={'relative'}
      w={scssVariables.cardHeader.w}
      h={scssVariables.cardHeader.h}
      overflow={'hidden'}
    >
      <Text
        position={'relative'}
        zIndex={3}
        color={scssVariables.textBlackColor}
        p={{ base: '8px', sm: '10px ', md: '20px 15px', xl: '26px 18px' }}
        fontSize={{ base: '10px', sm: '10px', md: '12px', xl: '12px' }}
      >
        {text}
      </Text>
      <Box>
        <Box
          position={'absolute'}
          right={{ base: '40px', sm: '40px', md: '70px', xl: '81px' }}
          bottom={'-10px'}
          width={{ base: '25px', sm: '25px', md: '40px', xl: '46px' }}
          height={{ base: '25px', sm: '25px', md: '40px', xl: '46px' }}
          borderRadius={'50%'}
          bg={'#009393'}
          zIndex={2}
        />
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          position={'absolute'}
          right={'-5px'}
          bottom={'-15px'}
          width={{ base: '50px', sm: '50px', md: '90px', xl: '104px' }}
          height={{ base: '50px', sm: '50px', md: '90px', xl: '104px' }}
          borderRadius={'50%'}
          bg={'#C2E5E5'}
          zIndex={1}
        >
          <Image src={image} alt='card-images' w={'70%'} height={'70%'} />
        </Box>
      </Box>
    </Box>
  )
}

export default HeroCard
