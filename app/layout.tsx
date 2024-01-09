import { AppProvider } from '@/context/AppContext'
import { Providers } from '@/context/Providers'
import { config } from '@/utils/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { headers } from "next/headers"
import { WagmiProvider, cookieToInitialState } from 'wagmi'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Ethereum App',
  description: 'Authentication App',
}


export default function RootLayout({
  children,
}: {

  children: React.ReactNode
}) {
  const initialState = cookieToInitialState(
    config,
    headers().get('cookie')
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider >
          <Providers initialState={initialState} >
            {children}
          </Providers>
        </AppProvider>
      </body>
    </html>
  )
}
