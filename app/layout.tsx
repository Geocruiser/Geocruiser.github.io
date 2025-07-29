import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Morgan Jones - AI-First Engineer Portfolio',
  description: 'Portfolio showcasing AI-first engineering projects and expertise',
  keywords: ['AI Engineer', 'Portfolio', 'Projects', 'Artificial Intelligence', 'Machine Learning'],
  authors: [{ name: 'Morgan Jones' }],
  openGraph: {
    title: 'Morgan Jones - AI-First Engineer Portfolio',
    description: 'Portfolio showcasing AI-first engineering projects and expertise',
    type: 'website',
  },
}

/**
 * Root layout component that wraps all pages
 * Provides theme context and global styling
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 