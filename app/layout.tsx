import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Mannsverk Consulting — Building tools that matter',
  description:
    'Indie builder and consulting by Kasper Mannsverk. Products include MyLivescore, Chatmans, and Bookmans. Have an idea? Let\'s build it together.',
  generator: 'v0.app',
  keywords: ['consulting', 'indie hacker', 'SaaS', 'tournament management', 'AI chat', 'booking software', 'Norway'],
  authors: [{ name: 'Kasper Mannsverk' }],
  openGraph: {
    title: 'Mannsverk Consulting',
    description: 'Building tools that matter — indie projects, SaaS products, and custom solutions.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
