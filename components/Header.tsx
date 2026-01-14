'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const navigation = [
  {
    name: '내명원소개',
    href: '/about',
    submenu: [
      { name: '소개', href: '/about' },
      { name: '패컬티 소개', href: '/about/faculty' },
      { name: '오시는 길', href: '/about/location' },
    ],
  },
  { name: '기초과정', href: '/basic' },
  { name: '심화과정', href: '/advanced' },
  {
    name: '프로그램',
    href: '/programs',
    submenu: [
      { name: '리트릿', href: '/programs/retreat' },
      { name: '워크샵', href: '/programs/workshop' },
      { name: '특강', href: '/programs/lecture' },
      { name: '주환2 운동', href: '/programs/juhwan2' },
      { name: '기업/단체 교육', href: '/programs/corporate' },
    ],
  },
  { name: '커뮤니티', href: '/community' },
  { name: '자료실', href: '/resources' },
  { name: 'FAQ', href: '/faq' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-nm-sky-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nm-sky-600 to-nm-sky-800 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-display font-bold text-lg">내</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-lg font-semibold text-nm-sky-800">내명원</span>
              <span className="hidden md:inline text-sm text-nm-sky-500 ml-2">내면소통명상교육원</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-nm-sky-700 hover:text-nm-sky-900 hover:bg-nm-sky-50 rounded-lg transition-colors"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-nm-sky-100 py-2 animate-fade-in">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2.5 text-sm text-nm-sky-700 hover:bg-nm-sky-50 hover:text-nm-sky-900 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-nm-sky-700 hover:text-nm-sky-900 transition-colors"
            >
              로그인
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 text-sm font-medium text-white bg-nm-sky-700 hover:bg-nm-sky-800 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              회원가입
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-nm-sky-700 hover:bg-nm-sky-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-nm-sky-100 animate-fade-in">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => !item.submenu && setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-nm-sky-700 hover:bg-nm-sky-50 rounded-lg"
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-6 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-nm-sky-600 hover:bg-nm-sky-50 rounded-lg"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-nm-sky-100 flex gap-3 px-4">
              <Link
                href="/login"
                className="flex-1 text-center py-2.5 text-sm font-medium text-nm-sky-700 border border-nm-sky-300 rounded-lg hover:bg-nm-sky-50"
              >
                로그인
              </Link>
              <Link
                href="/register"
                className="flex-1 text-center py-2.5 text-sm font-medium text-white bg-nm-sky-700 rounded-lg hover:bg-nm-sky-800"
              >
                회원가입
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
