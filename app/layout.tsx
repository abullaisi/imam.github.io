import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Impor stylesheet
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import type { ReactElement } from 'react'

import Navbar from '@/components/layouts/navbar'

config.autoAddCss = false // Mencegah Font Awesome menambahkan CSS secara otomatis
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

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
      <body className={`min-h-screen bg-gray-50 ${jakarta.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
