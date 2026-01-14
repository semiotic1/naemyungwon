import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '내명원 - 내면소통명상교육원',
  description: '뇌과학 기반의 내면소통명상 전문가를 양성하는 내면소통명상교육원입니다.',
  keywords: ['내면소통', '명상', '교육원', '김주환', '뇌과학', '명상지도자'],
  openGraph: {
    title: '내명원 - 내면소통명상교육원',
    description: '뇌과학 기반의 내면소통명상 전문가를 양성하는 내면소통명상교육원입니다.',
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
