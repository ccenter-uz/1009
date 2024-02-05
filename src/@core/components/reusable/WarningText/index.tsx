import { scssVariables } from '@/@core/utils/scss-variables'
import { Box, Text } from '@chakra-ui/react'
import { FC } from 'react'

type IWarningText = {
  text: string
}

const WarningText: FC<IWarningText> = ({ text }) => {
  return (
    <Box gap={'0.5em'} color={'#FF7C7C'} display={'flex'} alignItems={'flex-start'}>
      <img src='/alert-fill.svg' alt='warning' loading='lazy'/>
      <Text fontSize={scssVariables.fonts.paragraph}>{text}</Text>
    </Box>
  )
}

export default WarningText
