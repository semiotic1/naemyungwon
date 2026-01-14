import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-nm-blue-100 to-nm-cream overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-nm-blue-500 text-sm font-medium tracking-wider uppercase mb-4">
              About Naemyungwon
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-nm-navy mb-6">
              내면소통명상교육원
            </h1>
            <p className="text-lg md:text-xl text-nm-navy/70 leading-relaxed">
              뇌과학 기반의 내면소통명상을 지도할 수 있는 
              전문 명상 지도자를 양성하는 교육기관입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-16 md:top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-nm-blue-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            <Link href="/about" className="py-4 text-sm font-medium text-nm-navy border-b-2 border-nm-navy">
              소개
            </Link>
            <Link href="/about/faculty" className="py-4 text-sm font-medium text-nm-navy/60 hover:text-nm-navy transition-colors border-b-2 border-transparent">
              패컬티 소개
            </Link>
            <Link href="/about/location" className="py-4 text-sm font-medium text-nm-navy/60 hover:text-nm-navy transition-colors border-b-2 border-transparent">
              오시는 길
            </Link>
          </div>
        </div>
      </nav>

      {/* Vision */}
      <section className="py-16 md:py-24 bg-nm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-nm-blue-500 text-sm font-medium tracking-wider uppercase">
                Our Vision
              </span>
              <h2 className="section-title mt-2">명상하는 나라를 향해</h2>
              <div className="space-y-4 text-nm-navy/70 leading-relaxed">
                <p>
                  내면소통명상교육원(내명원)은 내면소통연구소 산하의 교육기관으로서, 
                  뇌과학에 기반한 내면소통명상을 체계적으로 교육하고 
                  전문 명상 지도자를 양성합니다.
                </p>
                <p>
                  우리의 비전은 '명상하는 나라'입니다. 
                  모든 사람이 자신의 내면과 소통하며 마음의 평화를 찾고, 
                  그 평화를 주변에 전달할 수 있는 사회를 꿈꿉니다.
                </p>
                <p>
                  내명원에서 양성된 명상 지도자들은 각자의 분야에서 
                  내면소통명상을 전파하며 이 비전을 함께 실현해 나갑니다.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-nm-blue-200 to-nm-blue-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-6xl md:text-7xl font-bold text-white/30">내명원</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-nm-blue-200/50 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-nm-blue-500 text-sm font-medium tracking-wider uppercase">
              Philosophy
            </span>
            <h2 className="section-title mt-2">교육 철학</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-nm-blue-50 to-nm-cream rounded-3xl p-8 md:p-12">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-nm-navy mb-6 text-center">
                "편안전활의 체화"
              </h3>
              <p className="text-nm-navy/70 leading-relaxed text-center max-w-2xl mx-auto">
                내면소통명상의 핵심은 '편안전활(便安全活)'의 체화입니다. 
                편안함 속에서 온전히 살아있음을 느끼는 것, 
                이것이 명상을 통해 도달하고자 하는 상태입니다.
              </p>
              <div className="grid sm:grid-cols-4 gap-6 mt-10">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-nm-navy/10 mx-auto flex items-center justify-center mb-3">
                    <span className="font-display text-2xl font-bold text-nm-navy">편</span>
                  </div>
                  <p className="text-sm text-nm-navy/60">편안함</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-nm-navy/10 mx-auto flex items-center justify-center mb-3">
                    <span className="font-display text-2xl font-bold text-nm-navy">안</span>
                  </div>
                  <p className="text-sm text-nm-navy/60">안정</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-nm-navy/10 mx-auto flex items-center justify-center mb-3">
                    <span className="font-display text-2xl font-bold text-nm-navy">전</span>
                  </div>
                  <p className="text-sm text-nm-navy/60">온전함</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-nm-navy/10 mx-auto flex items-center justify-center mb-3">
                    <span className="font-display text-2xl font-bold text-nm-navy">활</span>
                  </div>
                  <p className="text-sm text-nm-navy/60">살아있음</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-nm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-nm-blue-500 text-sm font-medium tracking-wider uppercase">
              Core Values
            </span>
            <h2 className="section-title mt-2">핵심 가치</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="w-16 h-16 rounded-2xl bg-nm-blue-100 mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-nm-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-nm-navy mb-2">뇌과학 기반</h3>
              <p className="text-sm text-nm-navy/60 leading-relaxed">
                과학적 근거에 기반한 체계적인 명상 교육을 제공합니다.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 rounded-2xl bg-nm-blue-100 mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-nm-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-nm-navy mb-2">체화 중심</h3>
              <p className="text-sm text-nm-navy/60 leading-relaxed">
                이론을 넘어 몸과 마음으로 체화하는 실습 중심 교육입니다.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 rounded-2xl bg-nm-blue-100 mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-nm-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-nm-navy mb-2">수행 공동체</h3>
              <p className="text-sm text-nm-navy/60 leading-relaxed">
                함께 성장하고 서로 지지하는 수행 공동체를 지향합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-nm-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
            내면소통명상의 여정을 시작하세요
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            기초과정부터 심화과정까지, 체계적인 교육 과정을 통해 
            명상 지도자로 성장할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/basic-course" className="btn-primary bg-white text-nm-navy hover:bg-nm-cream">
              기초과정 안내
            </Link>
            <Link href="/advanced-course" className="btn-secondary border-white/30 text-white hover:bg-white/10">
              심화과정 안내
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
