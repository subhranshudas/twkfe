import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tekwerke | Home',
  description: 'Tekwerke - Hire Experts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
          <Header />
          
          {children}

          <Footer />
        
        </ThemeProvider>
      </body>
    </html>
  )
}
