// StyledBox.js
'use client'
import styled from '@emotion/styled'
import { Text, useColorModeValue } from '@chakra-ui/react'

const TextGen = styled(Text)`
  color: ${() => useColorModeValue('gray', '#fff')};
`

export default TextGen
