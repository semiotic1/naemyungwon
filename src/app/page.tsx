import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 mountain-bg noise-overlay" />
        
        {/* Mountain silhouette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-nm-blue-800/40 via-transparent to-transparent" />
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-nm-blue-300/10 rounded-full blur-2xl animate-float animate-delay-200" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-nm-cream/80 text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-in">
            Inner Communication Meditation Academy
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up leading-tight">
            명상하는 나라를 향해
          </h1>
          <p className="text-xl md:text-2xl text-nm-cream/90 font-display mb-8 animate-slide-up animate-delay-100">
            내면소통명상교육원
          </p>
          <p className="text-nm-cream/70 max-w-2xl mx-auto mb-10 animate-slide-up animate-delay-200 leading-relaxed">
            뇌과학 기반의 내면소통명상을 지도할 수 있는<br className="hidden md:block" />
            전문 명상 지도자를 양성합니다
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animate-delay-300">
            <Link href="/advanced-course" className="btn-primary bg-white text-nm-navy hover:bg-nm-cream">
              심화과정 안내
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/about" className="btn-secondary border-white/30 text-white hover:bg-white/10 hover:border-white/50">
              내명원 소개
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Course Cards Section */}
      <section className="py-16 md:py-24 bg-nm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">교육과정 안내</h2>
            <p className="text-nm-navy/60 max-w-2xl mx-auto">
              내면소통명상교육원에서는 기초과정과 심화과정을 통해
              체계적인 명상 교육을 제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* 기초과정 카드 */}
            <div className="card group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-nm-blue-100 flex items-center justify-center">
                  <span className="text-nm-blue-600 font-display font-bold text-xl">기</span>
                </div>
                <span className="text-xs text-nm-navy/50 bg-nm-blue-50 px-3 py-1 rounded-full">
                  입문자 환영
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-nm-navy mb-3">
                기초과정
              </h3>
              <p className="text-nm-navy/60 text-sm leading-relaxed mb-6">
                내면소통명상의 기본 원리와 실습을 배우는 과정입니다. 
                명상이 처음이신 분들도 쉽게 시작하실 수 있습니다.
              </p>
              <Link 
                href="/basic-course" 
                className="inline-flex items-center text-nm-navy font-medium text-sm group-hover:text-nm-blue-600 transition-colors"
              >
                자세히 보기
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* 심화과정 카드 */}
            <div className="card group border-nm-blue-300/50 bg-gradient-to-br from-white/90 to-nm-blue-50/50">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-nm-navy flex items-center justify-center">
                  <span className="text-white font-display font-bold text-xl">심</span>
                </div>
                <span className="text-xs text-white bg-nm-navy px-3 py-1 rounded-full">
                  지도자 양성
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-nm-navy mb-3">
                심화과정
              </h3>
              <p className="text-nm-navy/60 text-sm leading-relaxed mb-6">
                내면소통명상 지도자 자격증을 취득할 수 있는 10개월 200시간의 
                전문 교육과정입니다.
              </p>
              <Link 
                href="/advanced-course" 
                className="inline-flex items-center text-nm-navy font-medium text-sm group-hover:text-nm-blue-600 transition-colors"
              >
                자세히 보기
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 심화과정 1기 안내 Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-nm-blue-100 to-nm-blue-200/50 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-nm-navy/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div>
                  <span className="inline-block text-nm-navy/60 text-sm font-medium mb-2">
                    ADVANCED COURSE
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-nm-navy mb-4">
                    심화과정 1기가<br />
                    2026년 3월 11일에 시작합니다
                  </h2>
                  <p className="text-nm-navy/70 max-w-xl leading-relaxed">
                    10개월간 200시간의 집중 교육을 통해 뇌과학 기반의 
                    내면소통명상을 지도할 수 있는 전문 명상 지도자로 성장하세요.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center min-w-[140px]">
                    <p className="text-3xl md:text-4xl font-display font-bold text-nm-navy">10</p>
                    <p className="text-sm text-nm-navy/60 mt-1">개월</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center min-w-[140px]">
                    <p className="text-3xl md:text-4xl font-display font-bold text-nm-navy">200</p>
                    <p className="text-sm text-nm-navy/60 mt-1">시간</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-nm-navy/10">
                <Link href="/advanced-course" className="btn-primary">
                  심화과정 상세 안내
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professor Message Section */}
      <section className="py-16 md:py-24 bg-nm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-nm-blue-200 to-nm-blue-300 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-white/30 mx-auto mb-4 flex items-center justify-center">
                      <span className="font-display text-4xl text-white/80">김</span>
                    </div>
                    <p className="text-white/60 text-sm">김주환 교수님</p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-nm-navy/10 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div>
              <span className="text-nm-blue-500 text-sm font-medium tracking-wider uppercase">
                과정 총괄
              </span>
              <h2 className="section-title mt-2">김주환 교수님 인사말</h2>
              <blockquote className="relative">
                <svg className="absolute -top-4 -left-4 w-12 h-12 text-nm-blue-200/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg md:text-xl text-nm-navy/80 leading-relaxed font-display italic pl-8">
                  진정한 명상 지도자는 타인에게 명상을 안내하기 전에, 
                  먼저 스스로 텅 빈 고요함 속에서 머물 수 있는 존재가 되어야 합니다.
                  명상 지도자는 누군가에게 행복을 전달하기 전에, 
                  먼저 자신의 내면에서 고요함과 행복을 갖추어야 합니다.
                </p>
              </blockquote>
              <div className="mt-8">
                <p className="font-display font-semibold text-nm-navy">김주환</p>
                <p className="text-sm text-nm-navy/60">연세대학교 언론홍보영상학부 교수</p>
              </div>
              <Link href="/about/faculty" className="inline-flex items-center mt-6 text-nm-navy font-medium hover:text-nm-blue-600 transition-colors">
                패컬티 전체 보기
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 공지사항 Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title mb-0">공지사항</h2>
            <Link href="/community/notices" className="text-sm text-nm-navy/60 hover:text-nm-navy transition-colors flex items-center">
              더보기
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="space-y-4">
            <Link href="/advanced-course" className="card block group hover:border-nm-blue-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-white bg-nm-navy px-3 py-1 rounded-full">
                    중요
                  </span>
                  <h3 className="font-medium text-nm-navy group-hover:text-nm-blue-600 transition-colors">
                    심화과정 1기 안내
                  </h3>
                </div>
                <span className="text-sm text-nm-navy/40">2025.01.15</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
