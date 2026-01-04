import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Suman Paudel | Software Engineer & Data Analyst',
  description: 'Software Engineer, Website Administrator, and Data Analyst specializing in web development, data analytics, and AI. Based in Australia.',
  keywords: ['Software Engineer', 'Data Analyst', 'Web Developer', 'AI', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <div className="relative">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

