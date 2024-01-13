import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { MainContext } from '@/@core/service/context/main'
import { ToastContainer } from 'react-toastify'
import { ChakraProviders } from '@/lib/chakraProvider'
import Footer from '@/@core/components/footer'
import Header from '@/@core/components/header'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Contact-center',
  description: 'This is basic web app for Contact center'
}

const RootLayout = ({ children, params: { locale } }: { children: React.ReactNode; params: any }) => {
  const messages = useMessages()

  return (
    <html lang={locale} className={inter.className}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ChakraProviders>
            <MainContext>
              <main>
                <Header />
                {children}
                <Footer />
              </main>
            </MainContext>
          </ChakraProviders>
        </NextIntlClientProvider>
        <ToastContainer />
      </body>
    </html>
  )
}

export default RootLayout
