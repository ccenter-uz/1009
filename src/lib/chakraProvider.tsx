'use client'
import theme from '@/@core/service/helpers/theme'
import colorTheme from '@/@core/service/helpers/colorTheme'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export function ChakraProviders({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <ChakraProvider theme={colorTheme}>
        {mounted && <ColorModeScript initialColorMode={theme.config.initialColorMode} />}
        {children}
      </ChakraProvider>
    </>
  )
}
