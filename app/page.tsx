import Link from 'next/link'
import { ArrowRight, Clock, Users, Award, BookOpen } from 'lucide-react'

export default function Home() {
  return (
    <div className="grain-overlay">
      {/* Hero Section */}
      <section className="hero-mountain relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <p className="text-slate-700 font-medium mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
            명상하는 나라를 위해서
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            내면소통명상교육원 (내명원)
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
            뇌과학 기반의 내면소통명상 전문가 양성 교육기관
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
            <Link href="/advanced" className="btn-primary">
              심화과정 안내
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/about" className="btn-secondary">
              내명원 소개
            </Link>
          </div>
        </div>
      </section>

      {/* Course Cards Section */}
      <section className="py-16 md:py-24 bg-nm-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* 기초과정 Card */}
            <div className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-nm-sky-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-nm-sky-100 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-nm-sky-600" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-nm-sky-800">기초과정</h2>
              </div>
              <p className="text-nm-sky-600 mb-6 leading-relaxed">
                내면소통명상의 기본 원리와 실습을 배우는 입문 과정입니다. 
                뇌과학에 기반한 명상의 이론과 실제를 체계적으로 학습합니다.
              </p>
              <div className="flex items-center gap-4 text-sm text-nm-sky-500 mb-6">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  온라인 수강
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  수시 모집
                </span>
              </div>
              <Link 
                href="/basic" 
                className="inline-flex items-center text-nm-sky-700 font-medium hover:text-nm-sky-900 transition-colors group"
              >
                자세히 보기
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 심화과정 Card */}
            <div className="card-hover bg-gradient-to-br from-nm-sky-700 to-nm-sky-800 rounded-2xl p-8 shadow-xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-display text-2xl font-semibold">심화과정</h2>
              </div>
              <p className="text-nm-sky-100 mb-6 leading-relaxed">
                내면소통명상 지도자를 양성하는 전문 교육과정입니다. 
                10개월 200시간의 집중 교육을 통해 공식 자격증을 취득할 수 있습니다.
              </p>
              <div className="flex items-center gap-4 text-sm text-nm-sky-200 mb-6">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  10개월 / 200시간
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  1기 진행중
                </span>
              </div>
              <Link 
                href="/advanced" 
                className="inline-flex items-center text-white font-medium hover:text-nm-sky-100 transition-colors group"
              >
                자세히 보기
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 심화과정 1기 안내 Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mx-auto text-center after:left-1/2 after:-translate-x-1/2">
              심화과정 1기 안내
            </h2>
            <div className="mt-8 p-8 md:p-12 bg-gradient-to-br from-nm-sky-50 to-nm-sky-100 rounded-3xl">
              <p className="text-2xl md:text-3xl font-display font-semibold text-nm-sky-800 mb-4">
                심화과정 1기가<br className="sm:hidden" /> 2026년 3월 11일에 시작합니다
              </p>
              <p className="text-nm-sky-600 mb-8">
                뇌과학 기반의 내면소통명상을 지도할 수 있는 공식적인 명상 지도자 양성 과정
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-nm-sky-700">10개월</p>
                  <p className="text-sm text-nm-sky-500">교육 기간</p>
                </div>
                <div className="w-px h-12 bg-nm-sky-300 hidden sm:block"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-nm-sky-700">200시간</p>
                  <p className="text-sm text-nm-sky-500">총 교육시간</p>
                </div>
                <div className="w-px h-12 bg-nm-sky-300 hidden sm:block"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-nm-sky-700">자격증</p>
                  <p className="text-sm text-nm-sky-500">수료 시 취득</p>
                </div>
              </div>
              <Link href="/advanced" className="btn-primary">
                심화과정 상세 보기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 김주환 교수님 인사말 Section */}
      <section className="py-16 md:py-24 bg-nm-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">인사말</h2>
            <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-nm-sky-200 to-nm-mist flex-shrink-0 overflow-hidden shadow-lg">
                {/* 프로필 이미지 placeholder */}
                <div className="w-full h-full flex items-center justify-center text-nm-sky-500">
                  <span className="text-5xl font-display font-bold">김</span>
                </div>
              </div>
              <div>
                <blockquote className="text-lg md:text-xl text-nm-sky-700 leading-relaxed mb-6">
                  "진정한 명상 지도자는 타인에게 명상을 안내하기 전에, 
                  먼저 스스로 텅 빈 고요함 속에서 머물 수 있는 존재가 되어야 합니다. 
                  명상 지도자는 누군가에게 행복을 전달하기 전에, 
                  먼저 자신의 내면에서 고요함과 행복을 갖추어야 합니다."
                </blockquote>
                <p className="text-nm-sky-800 font-semibold">김주환</p>
                <p className="text-nm-sky-500 text-sm">연세대학교 언론홍보영상학부 교수 · 내면소통연구소 대표</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 공지사항 Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title">공지사항</h2>
            <Link 
              href="/community/notice" 
              className="text-sm text-nm-sky-600 hover:text-nm-sky-800 font-medium flex items-center gap-1 transition-colors"
            >
              더보기
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            <Link 
              href="/advanced" 
              className="block p-5 bg-nm-sky-50 hover:bg-nm-sky-100 rounded-xl transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-nm-sky-200 text-nm-sky-700 text-xs font-medium rounded-full">
                    심화과정
                  </span>
                  <span className="text-nm-sky-800 font-medium group-hover:text-nm-sky-900">
                    심화과정 1기 안내
                  </span>
                </div>
                <span className="text-sm text-nm-sky-500">2025.12.08</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
