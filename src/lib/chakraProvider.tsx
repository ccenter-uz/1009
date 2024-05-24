'use client'
import colorTheme from '@/@core/apps/helpers/colorTheme'
import { ChakraProvider } from '@chakra-ui/react'

export function ChakraProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ChakraProvider theme={colorTheme}>{children}</ChakraProvider>
    </>
  )
}
