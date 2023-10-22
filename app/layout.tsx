import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/Navbar'

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rohil Varma',
  description: "Rohil Varma's portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={hankenGrotesk.className}>
        <div className="max-w-3xl mx-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
