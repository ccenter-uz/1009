import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Metadata } from 'next'
import { MainContext } from '@/@core/service/context/main'
import { ToastContainer } from 'react-toastify'
import { ChakraProvider } from '@chakra-ui/react'

export const metadata: Metadata = {
  title: 'Contact-center',
  description: 'This is basic web app for Contact center'
}

const RootLayout = ({ children, params: { locale } }: { children: React.ReactNode; params: any }) => {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ChakraProvider>
            <MainContext>{children}</MainContext>
          </ChakraProvider>
        </NextIntlClientProvider>
        <ToastContainer />
      </body>
    </html>
  )
}

export default RootLayout
