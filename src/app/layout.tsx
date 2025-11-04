import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { NavigationProvider } from './context/NavigationContext'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Codessy - Divine Digital Solutions',
  description: 'A digital marketing agency inspired by Lord Krishna, building exceptional websites and applications with divine precision.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="krishna-theme">
        <NavigationProvider>
          {children}
        </NavigationProvider>
      </body>
    </html>
  )
}