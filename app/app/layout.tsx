
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Qaisar Majeed - Full Stack Developer',
  description: 'Full Stack Developer with 7+ years of experience specializing in .NET, React, JavaScript, and Azure cloud solutions. Currently working at Insurwave in London.',
  keywords: 'Full Stack Developer, .NET Developer, React, JavaScript, C#, SQL, Software Engineer, London',
  authors: [{ name: 'Qaisar Majeed' }],
  openGraph: {
    title: 'Qaisar Majeed - Full Stack Developer',
    description: 'Full Stack Developer with 7+ years of experience specializing in .NET, React, JavaScript, and Azure cloud solutions.',
    type: 'website',
  },
}

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
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
