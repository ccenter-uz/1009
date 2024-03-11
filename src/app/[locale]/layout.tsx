import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { MainContext } from '@/@core/service/context/main'
import { ChakraProviders } from '@/lib/chakraProvider'
import Header from '@/@core/components/header'
import dynamic from 'next/dynamic'
import { ToastContainer } from 'react-toastify'
import Providers from '@/lib/nProgress'

const Footer = dynamic(() => import('@/@core/components/footer'))

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: '1009',
  description: 'Information center Republic of Uzbekistan'
}

const RootLayout = ({ children, params: { locale } }: { children: React.ReactNode; params: any }) => {
  const messages = useMessages()

  return (
    <html lang={locale} className={inter.className}>
      <body>
        <Providers>
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
        </Providers>
        <ToastContainer />
      </body>
    </html>
  )
}

export default RootLayout
