import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'quantifAI - AI-Powered Portfolio Optimization',
  description: 'AI-powered portfolio insights for financial advisors. Deliver smarter, more transparent investment decisions with alternative asset analysis.',
  keywords: 'AI, portfolio optimization, financial advisors, investment analysis, alternative assets, cryptocurrency, quantitative finance',
  authors: [{ name: 'quantifAI Team' }],
  openGraph: {
    title: 'quantifAI - AI-Powered Portfolio Optimization',
    description: 'Transform your financial advisory practice with AI-powered portfolio insights.',
    url: 'https://quantifai.co',
    siteName: 'quantifAI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'quantifAI - AI-Powered Portfolio Optimization',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'quantifAI - AI-Powered Portfolio Optimization',
    description: 'Transform your financial advisory practice with AI-powered portfolio insights.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-token',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fbbf24" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="relative min-h-screen bg-gradient-to-br from-white via-yellow-50/30 to-amber-100/20">
          {children}
        </div>
      </body>
    </html>
  )
}
