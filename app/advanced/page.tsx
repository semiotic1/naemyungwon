'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp, Clock, MapPin, Calendar, Award, Users, BookOpen, Target, Sparkles } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: '내면소통명상 지도자 자격증은 취득 후 어떻게 활용할 수 있을까요?',
    answer: '자격증은 단순한 \'수료증\'이 아니라, 내면소통명상을 공식적으로 지도할 수 있음을 보증하는 전문 자격증입니다. 기존 전문 영역(요가, 필라테스, PT, 소매틱 등)에 통합하시거나 자신만의 명상 프로그램을 직접 만들어서 운영하실 수 있습니다. 자격증 취득 이후에는 내면소통명상의 이름으로 개인 명상 클래스, 워크숍, 소그룹 프로그램 등을 개설하실 수 있습니다.',
  },
  {
    question: '각 패키지의 차이점은 무엇인가요?',
    answer: '풀패키지는 파크로쉬 리조트에서 진행되는 두 번의 연수교육에 모두 참여하는 것으로 기본 옵션입니다. 에센셜 패키지는 두번의 연수교육 중 한 번만 직접 참여하는 것이고, 라이트 패키지는 두번의 연수교육을 모두 동영상 수업으로 대체하는 것입니다. 온라인 패키지는 연수교육과 정규과정 전체를 동영상으로 참여하는 것입니다.',
  },
  {
    question: '혼자서 명상하는 것과 명상 지도자가 되는 것의 차이는 무엇일까요?',
    answer: '반드시 명상 지도자가 될 필요는 없습니다. 다만, 배움의 가장 깊은 방식은 \'가르치는 것\'입니다. 혼자서 하는 명상은 자신의 경험에만 집중하면 되지만, 지도를 하기 위해서는 명상의 원리나 구조까지 훨씬 더 깊이 연구해야 합니다. 따라서 자신의 명상도 더 깊어지고 명상이 삶에 스며드는 방식이 훨씬 입체적으로 변합니다.',
  },
  {
    question: '김주환 교수님과 패컬티 선생님들의 강의 비중은 어느 정도인가요?',
    answer: '정규과정 전체 교육 시간 대비 김주환 교수님의 직접 강의와 지도 비중은 대략 70%, 패컬티 선생님들의 교육이 대략 30% 정도 비율로 구성됩니다. 진행 과정에서 세부 비율이 약간 조정될 수는 있으나, 전 과정의 중심은 김주환 교수님의 직접 교육과 피드백입니다.',
  },
  {
    question: '주변에 몸과 마음이 아픈 사람이 많습니다. 내면소통명상을 안내하면 도움을 줄 수 있을까요?',
    answer: '몸이나 마음이 아픈 분들께는 꼭 의사의 진단을 우선 받도록 권유해 주시기 바랍니다. 명상은 결코 질환에 대한 치료의 목적으로 사용되어서는 안됩니다. 본 과정은 치료나 상담의 자격을 부여하지 않습니다. 내면소통명상지도자는 타인의 삶에 개입하거나 관여하지 않습니다. 사랑과 존중의 마음으로 명상을 안내하고 도움을 주는 태도를 처음부터 끝까지 유지합니다.',
  },
]

export default function AdvancedPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState('overview')

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="grain-overlay">
      {/* Hero Section */}
      <section className="hero-mountain bg-gradient-to-b from-nm-sky-100 via-nm-mist to-nm-mountain relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <p className="text-nm-sky-600 font-medium mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
            내면소통명상 지도자 양성 과정
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-nm-sky-900 mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            심화과정 1기
          </h1>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 text-nm-sky-700">
              <Calendar className="w-5 h-5" />
              <span>2026년 3월 11일 개강</span>
            </div>
            <div className="flex items-center gap-2 text-nm-sky-700">
              <Clock className="w-5 h-5" />
              <span>10개월 / 200시간</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky top-16 lg:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-nm-sky-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-hide">
            {[
              { id: 'overview', label: '개요' },
              { id: 'features', label: '목표와 특징' },
              { id: 'structure', label: '구성 안내' },
              { id: 'faq', label: 'FAQ' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                  activeSection === item.id
                    ? 'bg-nm-sky-700 text-white'
                    : 'text-nm-sky-600 hover:bg-nm-sky-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Section 1: 개요 */}
      <section id="overview" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">과정 개요</h2>
          
          <div className="mt-8 max-w-4xl">
            <p className="text-lg text-nm-sky-700 leading-relaxed mb-8">
              내면소통명상 심화과정은 뇌과학 기반의 내면소통명상을 지도할 수 있는 공식적인 
              명상 지도자를 양성해내는 교육과정으로, 2026년 12월까지 10개월 동안 총 200시간으로 
              구성되는 집중 교육과정입니다.
            </p>

            {/* Key Numbers */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mb-12">
              <div className="bg-nm-sky-50 rounded-2xl p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-nm-sky-700 mb-1">10개월</p>
                <p className="text-sm text-nm-sky-500">교육 기간</p>
              </div>
              <div className="bg-nm-sky-50 rounded-2xl p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-nm-sky-700 mb-1">200시간</p>
                <p className="text-sm text-nm-sky-500">총 교육시간</p>
              </div>
              <div className="bg-nm-sky-50 rounded-2xl p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-nm-sky-700 mb-1">자격증</p>
                <p className="text-sm text-nm-sky-500">수료 시 취득</p>
              </div>
            </div>

            {/* Certificate Info */}
            <div className="bg-gradient-to-br from-nm-sky-700 to-nm-sky-800 rounded-2xl p-8 text-white mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">내면소통명상 지도자 &lt;티처&gt; 자격증</h3>
                  <p className="text-nm-sky-200 text-sm leading-relaxed">
                    성공적으로 수료했을 경우 내면소통연구소가 발급하는 공식 민간 자격으로, 
                    "뇌과학기반의 내면소통명상"을 제대로 교육할 수 있는 전문가임을 공식적으로 보증합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* What you can do */}
            <h3 className="font-semibold text-nm-sky-800 mb-4">자격증 취득 후 할 수 있는 것</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-nm-sky-50 rounded-xl">
                <span className="w-6 h-6 rounded-full bg-nm-sky-200 text-nm-sky-700 flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
                <p className="text-nm-sky-700">독자적으로 내면소통명상을 지도하실 수 있습니다.</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-nm-sky-50 rounded-xl">
                <span className="w-6 h-6 rounded-full bg-nm-sky-200 text-nm-sky-700 flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
                <p className="text-nm-sky-700">내면소통명상 워크샵이나 교육과정을 개설할 수 있습니다.</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-nm-sky-50 rounded-xl">
                <span className="w-6 h-6 rounded-full bg-nm-sky-200 text-nm-sky-700 flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
                <div>
                  <p className="text-nm-sky-700 mb-2">기존에 이미 하고 계시는 여러가지 교육 프로그램에 내면소통명상의 요소를 접목하여 자신만의 고유한 명상 교육 프로그램을 개발하여 운영하실 수 있습니다.</p>
                  <p className="text-sm text-nm-sky-500">요가, 필라테스, 명상, 피트니스, 소매틱스, 타이치, 달리기, 수영, 음악, 댄스, 퍼포먼스, 각급 학교 및 기업 교육 등</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 목표와 특징 */}
      <section id="features" className="py-16 md:py-24 bg-nm-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">목표와 특징</h2>
          
          <div className="mt-8 space-y-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  01
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-nm-sky-800 mb-3">
                    내면소통명상을 지도할 수 있는 명상 전문가 양성
                  </h3>
                  <p className="text-nm-sky-600 leading-relaxed mb-4">
                    진정한 명상 지도자는 타인에게 명상을 안내하기 전에, 먼저 스스로 텅 빈 고요함 속에서 
                    머물 수 있는 존재가 되어야 합니다. 본 과정은 <strong>"편안전활의 체화"</strong>라는 
                    근본적인 변화에 초점을 맞춘 명상 지도자를 양성합니다.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-nm-sky-600">
                      <Sparkles className="w-4 h-4 text-nm-sky-500" />
                      <span>내면 깊이 알아차리기</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-nm-sky-600">
                      <Sparkles className="w-4 h-4 text-nm-sky-500" />
                      <span>고요한 행복의 체화</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  02
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-nm-sky-800 mb-3">
                    김주환 교수님으로부터 내면소통명상을 직접 배우는 기회
                  </h3>
                  <p className="text-nm-sky-600 leading-relaxed mb-4">
                    김주환 교수님이 10개월 교육 전 과정에 참여합니다. 본 과정은 내면소통명상을 정확하게 
                    안내하고 지도할 수 있는 법을 김주환 교수님께 직접 배울 수 있는 유일한 지도자 교육 과정입니다.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm text-nm-sky-600">
                      <BookOpen className="w-4 h-4 text-nm-sky-500" />
                      <span>핵심 이론 및 심화 강의</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-nm-sky-600">
                      <Target className="w-4 h-4 text-nm-sky-500" />
                      <span>단계별 실습 지도 및 피드백</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-nm-sky-600">
                      <Users className="w-4 h-4 text-nm-sky-500" />
                      <span>소규모 면담을 통한 심층 코칭</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-nm-sky-600">
                      <Sparkles className="w-4 h-4 text-nm-sky-500" />
                      <span>Q&A 세션 운영</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  03
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-nm-sky-800 mb-3">
                    '체화 → 스크립트 → 시연 → 피드백' 으로 이어지는 실습형 커리큘럼
                  </h3>
                  <p className="text-nm-sky-600 leading-relaxed mb-4">
                    이론 강의만으로는 다른 사람들에게 명상을 안내하고 지도할 만한 능력이 충분히 생기기 어렵습니다. 
                    본 과정에서는 실습을 강조합니다.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-nm-sky-600">• 내부감각과 고유 감각 기반의 다양한 움직임 명상 실습</p>
                    <p className="text-sm text-nm-sky-600">• 배경자아를 알아차리는 강력한 자기참조과정 훈련</p>
                    <p className="text-sm text-nm-sky-600">• 내면소통 명상 가이드를 위한 적절한 언어, 발성, 호흡 등의 실습 훈련</p>
                    <p className="text-sm text-nm-sky-600">• 스크립트 작성 및 시연, 세밀한 피드백</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  04
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-nm-sky-800 mb-3">
                    세계 어디에도 없는 '전문가 융합형 명상 지도자 교육'
                  </h3>
                  <p className="text-nm-sky-600 leading-relaxed mb-4">
                    본 과정은 김주환 교수님의 강의와 명상지도 뿐만아니라, 
                    <strong> 각 분야의 전문 패컬티의 실습 지도를 충분히 받으실 수 있도록 설계된 융합형 커리큘럼</strong>입니다.
                  </p>
                  <p className="text-sm text-nm-sky-500">
                    타이치, 페르시안 밀, 고대운동, 자이로키네시스, 매트운동, 움직임 해부학, 호흡법, 연기기반 알아차림, 발성법 등
                  </p>
                  <div className="mt-4">
                    <Link 
                      href="/about/faculty"
                      className="inline-flex items-center text-nm-sky-700 font-medium hover:text-nm-sky-900 transition-colors"
                    >
                      패컬티 소개 보기 →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 구성 안내 */}
      <section id="structure" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">구성 안내</h2>
          <p className="mt-4 text-nm-sky-600 max-w-2xl">
            본 과정은 두 차례의 5박 6일 연수 교육과 두 개 학기의 정규 과정으로 구성됩니다.
          </p>
          
          <div className="mt-12 space-y-8">
            {/* 연수 교육 */}
            <div className="bg-gradient-to-br from-nm-sky-50 to-nm-sky-100 rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-nm-sky-700 flex items-center justify-center text-white">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-nm-sky-800">연수 교육</h3>
                  <p className="text-nm-sky-600">50시간 × 2회 = 100시간</p>
                </div>
              </div>

              <p className="text-nm-sky-700 mb-6 leading-relaxed">
                강원도 정선 파크로쉬 리조트에서의 5박 6일 연수 교육이 두 차례 포함되어 있습니다.
                연수는 일상생활을 벗어나서 스스로의 내면으로 깊이 침잠해볼 수 있는 매우 드문 기회를 제공합니다.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-nm-sky-200 text-nm-sky-700 text-xs font-medium rounded-full">1차</span>
                    <span className="font-semibold text-nm-sky-800">3월 11일 - 16일</span>
                  </div>
                  <p className="text-sm text-nm-sky-600">
                    입학식, 오리엔테이션, 패컬티 소개 후 본격적인 교육 시작
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-nm-sky-200 text-nm-sky-700 text-xs font-medium rounded-full">2차</span>
                    <span className="font-semibold text-nm-sky-800">8월 26일 - 31일</span>
                  </div>
                  <p className="text-sm text-nm-sky-600">
                    집중적인 명상 지도 실습, 교수님과 패컬티의 지도와 피드백
                  </p>
                </div>
              </div>
            </div>

            {/* 정규 과정 */}
            <div className="bg-white border border-nm-sky-200 rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-nm-sky-100 flex items-center justify-center text-nm-sky-700">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-nm-sky-800">정규 과정</h3>
                  <p className="text-nm-sky-600">1학기 60시간 + 2학기 40시간 = 100시간</p>
                </div>
              </div>

              <p className="text-nm-sky-700 mb-6 leading-relaxed">
                정규 과정에서는 적어도 한달에 한번 (주로 4번째 토요일) 전체 클래스가 모이는 정규 수업이 진행되고, 
                정규 수업 사이 (2주 간격)에 분반 실습이나 복습 클래스가 필요에 따라 수시로 운영됩니다.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-nm-sky-50 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-nm-sky-200 text-nm-sky-700 text-xs font-medium rounded-full">1학기</span>
                    <span className="font-semibold text-nm-sky-800">3월 - 8월 (60시간)</span>
                  </div>
                  <p className="text-sm text-nm-sky-600 mb-3">
                    내면소통명상의 이론적 기반이 되는 뇌과학을 깊이 이해하고, 
                    다양한 실습을 통해 움직임 명상의 전문가가 되는 것을 목표로 합니다.
                  </p>
                  <div className="space-y-1 text-xs text-nm-sky-500">
                    <p>• 집중 수행을 통한 마음근력 강화</p>
                    <p>• 격관 명상의 체화</p>
                    <p>• 다양한 움직임 명상 실습</p>
                  </div>
                </div>
                <div className="bg-nm-sky-50 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-nm-sky-200 text-nm-sky-700 text-xs font-medium rounded-full">2학기</span>
                    <span className="font-semibold text-nm-sky-800">9월 - 12월 (40시간)</span>
                  </div>
                  <p className="text-sm text-nm-sky-600 mb-3">
                    명상 지도자로 거듭나기 위한 전문적인 명상 지도법을 
                    실습을 통해 본격적으로 익히게 됩니다.
                  </p>
                  <div className="space-y-1 text-xs text-nm-sky-500">
                    <p>• 명상 스크립트 구성, 가이드 언어, 톤</p>
                    <p>• 명상 시연 및 세밀한 피드백</p>
                    <p>• 독립적 지도 역량 완성</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: FAQ */}
      <section id="faq" className="py-16 md:py-24 bg-nm-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">자주 묻는 질문</h2>
          
          <div className="mt-8 max-w-3xl space-y-3">
            {faqItems.map((item, index) => (
              <div key={index} className="accordion-item bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="accordion-header w-full text-left"
                >
                  <span className="pr-4">{item.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-nm-sky-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-nm-sky-500 flex-shrink-0" />
                  )}
                </button>
                <div className={`accordion-content ${openFaq === index ? 'open' : ''}`}>
                  <p className="text-nm-sky-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/faq" 
              className="inline-flex items-center text-nm-sky-700 font-medium hover:text-nm-sky-900 transition-colors"
            >
              더 많은 FAQ 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* What You'll Gain */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-nm-sky-700 to-nm-sky-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            심화과정을 통해 얻게 되는 것
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-semibold mb-2">지도 능력</h3>
              <p className="text-nm-sky-200 text-sm">
                타인에게 명상을 안전하고 정확하게 안내할 수 있는 지도 능력
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-semibold mb-2">마음근력</h3>
              <p className="text-nm-sky-200 text-sm">
                깊고 단단한 마음근력과 내적 안정성, 그리고 텅 빈 고요함의 행복
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-semibold mb-2">인간관계</h3>
              <p className="text-nm-sky-200 text-sm">
                내면소통 기반의 소통능력과 이에 기반한 원만하고 행복한 인간관계
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-semibold mb-2">프로그램 설계</h3>
              <p className="text-nm-sky-200 text-sm">
                자신의 직업·전문 영역에 내면소통명상을 접목한 새로운 프로그램 설계 역량
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-semibold mb-2">공식 자격</h3>
              <p className="text-nm-sky-200 text-sm">
                내면소통명상교육원 소속 내면소통명상지도자 &lt;티처&gt;로 명단 등록
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-semibold mb-2">수행 공동체</h3>
              <p className="text-nm-sky-200 text-sm">
                내면소통명상 클럽 평생 회원 자격 부여 (별도의 가입비나 연회비 없음)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
