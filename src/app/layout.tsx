import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: '내면소통명상교육원 | 내명원',
  description: '뇌과학 기반의 내면소통명상을 지도할 수 있는 전문 명상 지도자를 양성하는 교육기관',
  keywords: ['내면소통', '명상', '명상지도자', '김주환', '마음근력', '내명원'],
  openGraph: {
    title: '내면소통명상교육원 | 내명원',
    description: '뇌과학 기반의 내면소통명상을 지도할 수 있는 전문 명상 지도자를 양성하는 교육기관',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
