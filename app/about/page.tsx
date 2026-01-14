import Link from 'next/link'
import { ArrowRight, Target, Heart, Brain, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="grain-overlay">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-nm-sky-100 to-nm-sky-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-nm-sky-600 font-medium mb-2">About Us</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-nm-sky-900 mb-6">
              내면소통명상교육원
            </h1>
            <p className="text-lg text-nm-sky-700 leading-relaxed">
              내명원은 뇌과학 기반의 내면소통명상을 지도할 수 있는 
              공식적인 명상 전문가를 양성하는 교육기관입니다. 
              내면소통연구소 산하 기관으로서, '명상하는 나라'를 향한 
              첫 걸음을 함께 합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">비전과 미션</h2>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-nm-sky-100 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-nm-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nm-sky-800 mb-2">비전</h3>
                    <p className="text-nm-sky-600 leading-relaxed">
                      모든 사람이 내면의 고요함과 행복을 경험하고, 
                      이를 타인에게 전달할 수 있는 '명상하는 나라'를 만들어 갑니다.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-nm-sky-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-nm-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nm-sky-800 mb-2">미션</h3>
                    <p className="text-nm-sky-600 leading-relaxed">
                      뇌과학에 기반한 체계적인 명상 교육을 통해, 
                      진정한 명상 지도자를 양성하고 명상 문화를 확산합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-nm-sky-100 via-nm-mist to-nm-mountain rounded-3xl aspect-square flex items-center justify-center">
              <div className="text-center text-white p-8">
                <p className="font-display text-3xl md:text-4xl font-bold mb-2">명상하는</p>
                <p className="font-display text-3xl md:text-4xl font-bold">나라</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 교육 철학 */}
      <section className="py-16 md:py-24 bg-nm-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">교육 철학</h2>
            <p className="mt-8 text-nm-sky-600">
              내명원의 모든 교육은 '편안전활의 체화'라는 핵심 원리를 바탕으로 합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4 text-white font-display font-bold text-xl">
                편
              </div>
              <h3 className="font-semibold text-nm-sky-800 mb-2">편안함</h3>
              <p className="text-sm text-nm-sky-600 leading-relaxed">
                몸과 마음이 이완된 상태에서 진정한 알아차림이 시작됩니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4 text-white font-display font-bold text-xl">
                안
              </div>
              <h3 className="font-semibold text-nm-sky-800 mb-2">안정감</h3>
              <p className="text-sm text-nm-sky-600 leading-relaxed">
                내적 안정성을 바탕으로 흔들리지 않는 마음 근력을 기릅니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4 text-white font-display font-bold text-xl">
                전
              </div>
              <h3 className="font-semibold text-nm-sky-800 mb-2">전환</h3>
              <p className="text-sm text-nm-sky-600 leading-relaxed">
                부정적 감정과 생각의 패턴을 인식하고 전환하는 힘을 기릅니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-4 text-white font-display font-bold text-xl">
                활
              </div>
              <h3 className="font-semibold text-nm-sky-800 mb-2">활력</h3>
              <p className="text-sm text-nm-sky-600 leading-relaxed">
                고요함 속에서 삶의 에너지와 활력을 회복합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 특징 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">내명원의 특징</h2>
          
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-nm-sky-100 flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5 text-nm-sky-600" />
              </div>
              <div>
                <h3 className="font-semibold text-nm-sky-800 mb-2">뇌과학 기반 교육</h3>
                <p className="text-nm-sky-600 text-sm leading-relaxed">
                  명상의 효과를 과학적으로 이해하고, 체계적인 방법론을 통해 
                  누구나 명상을 효과적으로 수행하고 지도할 수 있도록 합니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-nm-sky-100 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-nm-sky-600" />
              </div>
              <div>
                <h3 className="font-semibold text-nm-sky-800 mb-2">전문가 융합형 교육</h3>
                <p className="text-nm-sky-600 text-sm leading-relaxed">
                  타이치, 자이로키네시스, 움직임 해부학 등 다양한 분야의 
                  전문가들이 참여하는 융합형 커리큘럼을 제공합니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-nm-sky-100 flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-nm-sky-600" />
              </div>
              <div>
                <h3 className="font-semibold text-nm-sky-800 mb-2">실습 중심 커리큘럼</h3>
                <p className="text-nm-sky-600 text-sm leading-relaxed">
                  이론만이 아닌 실제 명상 지도 역량을 기를 수 있도록 
                  체화, 스크립트, 시연, 피드백의 순환 과정을 거칩니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-nm-sky-100 flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-nm-sky-600" />
              </div>
              <div>
                <h3 className="font-semibold text-nm-sky-800 mb-2">수행 공동체</h3>
                <p className="text-nm-sky-600 text-sm leading-relaxed">
                  교육 과정을 통해 형성된 수행 공동체는 수료 후에도 
                  서로의 명상 지도 활동을 돕고 지지하는 든든한 기반이 됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-nm-sky-700 to-nm-sky-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            내명원과 함께 시작하세요
          </h2>
          <p className="text-nm-sky-200 mb-8 max-w-2xl mx-auto">
            기초과정부터 심화과정까지, 체계적인 교육을 통해 
            진정한 명상 지도자로 성장하는 여정을 시작하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about/faculty" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-nm-sky-800 font-medium rounded-lg hover:bg-nm-sky-50 transition-colors"
            >
              패컬티 소개
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link 
              href="/advanced" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              심화과정 안내
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
