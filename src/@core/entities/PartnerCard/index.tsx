import { scssVariables } from '@/@core/apps/utils/scss-variables'
import { Box, Img } from '@chakra-ui/react'
import { FC } from 'react'

type IPartnerCard = {
  image: string
}

const PartnerCard: FC<IPartnerCard> = ({ image }) => {
  return (
    <Box
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
      <Img src={image} alt='image-partner' loading='lazy' objectFit={'contain'} />
    </Box>
  )
}

export default PartnerCard
