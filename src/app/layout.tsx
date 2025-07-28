import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Name - Full Stack Developer',
  description: 'Portfolio of a passionate full stack developer specializing in modern web technologies.',
  keywords: 'developer, portfolio, react, typescript, nextjs, full stack',
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

/**
 * Root layout component that wraps all pages
 * Provides global styling and metadata configuration
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 