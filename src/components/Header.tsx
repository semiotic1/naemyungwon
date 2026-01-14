'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      label: '내명원소개',
      href: '/about',
      submenu: [
        { label: '소개', href: '/about' },
        { label: '패컬티 소개', href: '/about/faculty' },
        { label: '오시는 길', href: '/about/location' },
      ],
    },
    { label: '기초과정', href: '/basic-course' },
    { label: '심화과정', href: '/advanced-course' },
    {
      label: '프로그램',
      href: '/programs',
      submenu: [
        { label: '리트릿', href: '/programs/retreat' },
        { label: '워크샵', href: '/programs/workshop' },
        { label: '특강', href: '/programs/lecture' },
        { label: '주환2 운동', href: '/programs/juhwan2' },
        { label: '기업/단체 교육', href: '/programs/corporate' },
      ],
    },
    { label: '커뮤니티', href: '/community' },
    { label: '자료실', href: '/resources' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-nm-cream/95 backdrop-blur-md border-b border-nm-blue-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nm-blue-300 to-nm-navy flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">내</span>
            </div>
            <span className="font-display font-semibold text-lg text-nm-navy group-hover:text-nm-blue-600 transition-colors">
              내명원
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="nav-link px-4 py-2 text-sm"
                >
                  {item.label}
                </Link>
                {item.submenu && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-xl shadow-lg border border-nm-blue-100/50 py-2 min-w-[160px] animate-fade-in">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-nm-navy/80 hover:text-nm-navy hover:bg-nm-blue-50 transition-colors"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/login" className="text-sm text-nm-navy/70 hover:text-nm-navy transition-colors">
              로그인
            </Link>
            <Link href="/signup" className="btn-primary text-sm py-2 px-4">
              회원가입
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-nm-blue-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기"
          >
            <svg
              className="w-6 h-6 text-nm-navy"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-nm-blue-100/50 animate-fade-in">
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-nm-navy/80 hover:text-nm-navy hover:bg-nm-blue-50 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="pl-6 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-nm-navy/60 hover:text-nm-navy hover:bg-nm-blue-50 rounded-lg transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-nm-blue-100/50 flex items-center space-x-3 px-4">
              <Link
                href="/login"
                className="flex-1 text-center py-2 text-nm-navy/70 hover:text-nm-navy transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                로그인
              </Link>
              <Link
                href="/signup"
                className="flex-1 btn-primary text-sm py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                회원가입
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
