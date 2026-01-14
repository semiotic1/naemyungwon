import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-nm-sky-800 text-nm-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">내</span>
              </div>
              <div>
                <span className="font-display text-lg font-semibold text-white">내명원</span>
                <span className="text-sm text-nm-sky-300 ml-2">내면소통명상교육원</span>
              </div>
            </div>
            <p className="text-nm-sky-300 text-sm leading-relaxed max-w-md">
              내면소통명상교육원은 뇌과학 기반의 내면소통명상을 지도할 수 있는 
              공식적인 명상 지도자를 양성하는 교육기관입니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-nm-sky-300 hover:text-white transition-colors text-sm">
                  내명원 소개
                </Link>
              </li>
              <li>
                <Link href="/basic" className="text-nm-sky-300 hover:text-white transition-colors text-sm">
                  기초과정
                </Link>
              </li>
              <li>
                <Link href="/advanced" className="text-nm-sky-300 hover:text-white transition-colors text-sm">
                  심화과정
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-nm-sky-300 hover:text-white transition-colors text-sm">
                  자주 묻는 질문
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">연락처</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-nm-sky-400 flex-shrink-0" />
                <span className="text-nm-sky-300">
                  서울 강남구 남부순환로 2645 4층
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-nm-sky-400 flex-shrink-0" />
                <a 
                  href="mailto:official@joohankim.org" 
                  className="text-nm-sky-300 hover:text-white transition-colors"
                >
                  official@joohankim.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-nm-sky-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-nm-sky-400">
              <span>(주)내면소통연구소</span>
              <span className="mx-2">|</span>
              <span>대표: 김주환</span>
              <span className="mx-2">|</span>
              <span>사업자등록번호: 202-86-03058</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/terms" className="text-nm-sky-400 hover:text-white transition-colors">
                이용약관
              </Link>
              <Link href="/privacy" className="text-nm-sky-400 hover:text-white transition-colors">
                개인정보처리방침
              </Link>
            </div>
          </div>
          <p className="text-center text-nm-sky-500 text-xs mt-4">
            © 2025. 내면소통연구소. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}
