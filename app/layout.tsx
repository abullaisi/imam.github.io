import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import type { ReactElement } from 'react'

import Navbar from '@/components/layouts/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Imam Abullaisi',
  description:
    'Coming from Indonesia, with a solid 4 years+ of multi-design experience in web design, mobile app design, graphic design, and content creation. (Design hobbyist since junior high school).'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>): ReactElement {
  return (
    <html lang="en">
      <body className={`min-h-screen ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
