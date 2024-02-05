import { scssVariables } from '@/@core/utils/scss-variables'
import { Box, Text } from '@chakra-ui/react'
import { FC } from 'react'

type IMentionText = {
  text: string
}

const MentionText: FC<IMentionText> = ({ text }) => {
  return (
    <Box
      position={'relative'}
      _before={{
        content: `""`,
        w: '8px',
        h: '100%',
        position: 'absolute',
        left: 'left',
        bg: '#45BFFF'
      }}
      display={'flex'}
      alignItems={'center'}
      background={`linear-gradient(0deg, #F3F8FF, #F3F8FF),
    linear-gradient(90.05deg, #45BFFF 27.8%, #00A7FF 98.65%);
    `}
    >
      <Text p={'1em'} fontSize={scssVariables.fonts.paragraph}>
        {text}
      </Text>
    </Box>
  )
}

export default MentionText
