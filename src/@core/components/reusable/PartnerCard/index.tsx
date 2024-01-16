import { scssVariables } from '@/@core/utils/scss-variables'
import { Box, Image } from '@chakra-ui/react'
import { FC } from 'react'

type IPartnerCard = {
  image: string
}

const PartnerCard: FC<IPartnerCard> = ({ image }) => {
  return (
    <Box
      role='card'
      width={'170px'}
      height={'96px'}
      m={'auto'}
      borderRadius={'9px'}
      bg={'#fff'}
      color={'#000'}
      boxShadow={scssVariables.boxShadowPartnerBox}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Image src={image} alt='image-partner' loading='lazy' objectFit={'contain'} />
    </Box>
  )
}

export default PartnerCard
