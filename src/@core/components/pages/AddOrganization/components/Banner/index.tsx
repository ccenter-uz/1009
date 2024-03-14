import { scssVariables } from '@/@core/utils/scss-variables'
import { Text } from '@chakra-ui/react'
import React, { FC } from 'react'

const Banner: FC = () => {
  return (
    <Text
      fontSize='xl'
      padding='10px'
      mt={5}
      mb={5}
      textAlign='center'
      fontWeight='400'
      color='#fff'
      bgColor={scssVariables?.mainColor}
    >
      Добавить Организацию
    </Text>
  )
}

export default Banner
