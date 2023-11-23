import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'

import './globals.css'
import Navbar from '@/components/Navbar'
import { Footer } from '@/components';

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rohil Varma',
  description: "Rohil Varma's software engineering portfolio showcases his skills in Web Development and as a software engineer. His portfolio includes examples from his work on building web applications.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={hankenGrotesk.className}>
        <div className="mx-6 md:max-w-xl md:mx-auto">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  )
}
