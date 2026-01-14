import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-nm-navy text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nm-blue-300 to-nm-blue-500 flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">내</span>
              </div>
              <span className="font-display font-semibold text-xl text-white">
                내면소통명상교육원
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              내면소통명상교육원(내명원)은 뇌과학 기반의 내면소통명상을 
              지도할 수 있는 전문 명상 지도자를 양성하는 교육기관입니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">바로가기</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">
                  내명원 소개
                </Link>
              </li>
              <li>
                <Link href="/basic-course" className="text-sm hover:text-white transition-colors">
                  기초과정
                </Link>
              </li>
              <li>
                <Link href="/advanced-course" className="text-sm hover:text-white transition-colors">
                  심화과정
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">연락처</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <svg className="w-4 h-4 mt-0.5 text-nm-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>official@joohankim.org</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-4 h-4 mt-0.5 text-nm-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>서울 강남구 남부순환로 2645 4층</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/50">
              <p>(주)내면소통연구소 | 대표: 김주환 | 사업자등록번호: 202-86-03058</p>
              <p className="mt-1">통신판매업허가: 제2025-서울강남-00802호</p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/terms" className="text-white/50 hover:text-white transition-colors">
                이용약관
              </Link>
              <Link href="/privacy" className="text-white/50 hover:text-white transition-colors">
                개인정보처리방침
              </Link>
            </div>
          </div>
          <p className="text-center text-xs text-white/40 mt-6">
            © 2025 내면소통연구소. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
