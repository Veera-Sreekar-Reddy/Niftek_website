import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import LoadingScreen from '@/components/LoadingScreen'
import ScrollProgress from '@/components/ScrollProgress'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Niftek',
  description: 'Niftek Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white flex flex-col min-h-screen`}>
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}

