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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
          <Header />
          
          <div className="min-h-screen">
            {children}
          </div>
          
          <Footer />
        
        </ThemeProvider>
      </body>
    </html>
  )
}
