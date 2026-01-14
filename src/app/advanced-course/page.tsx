'use client';

import Link from 'next/link';
import { useState } from 'react';

const features = [
  {
    number: '01',
    title: '내면소통명상을 지도할 수 있는 명상 전문가 양성',
    description: '진정한 명상 지도자는 타인에게 명상을 안내하기 전에, 먼저 스스로 텅 빈 고요함 속에서 머물 수 있는 존재가 되어야 합니다. 본 과정은 "편안전활의 체화"라는 근본적인 변화에 초점을 맞춘 명상 지도자를 양성합니다.',
    details: [
      '내면 깊이 알아차리기',
      '고요한 행복의 체화',
      '두 번의 집중 연수 교육과 10개월에 거친 체계적인 실습',
    ],
  },
  {
    number: '02',
    title: '김주환 교수님으로부터 내면소통명상을 직접 배우는 기회',
    description: '김주환 교수님이 10개월 교육 전 과정에 참여합니다. 본 과정은 내면소통명상을 정확하게 안내하고 지도할 수 있는 법을 김주환 교수님께 직접 배울 수 있는 유일한 지도자 교육 과정입니다.',
    details: [
      '내면소통명상 핵심 이론 및 심화 강의',
      '단계별 실습 지도 및 피드백',
      '소규모 면담을 통한 심층 코칭',
      'Q&A 세션 운영',
    ],
  },
  {
    number: '03',
    title: "'체화 → 스크립트 → 시연 → 피드백' 으로 이어지는 실습형 커리큘럼",
    description: '이론 강의만으로는 다른 사람들에게 명상을 안내하고 지도할 만한 능력이 충분히 생기기 어렵습니다. 본 과정에서는 실습을 강조합니다.',
    details: [
      '내부감각과 고유감각 기반의 다양한 움직임 명상 실습',
      '배경자아를 알아차리는 강력한 자기참조과정 훈련',
      '내면소통 명상 가이드를 위한 적절한 언어, 발성, 호흡 등의 실습 훈련',
      '스크립트 작성 및 시연',
      '교수님과 각 분야 전문가 패컬티 선생님들의 철저한 지도와 세밀한 피드백',
    ],
  },
  {
    number: '04',
    title: "세계 어디에도 없는 '전문가 융합형 명상 지도자 교육'",
    description: '본 과정은 내면소통명상 지도에 필요한 핵심 역량 강화를 위해 김주환 교수님의 강의와 명상지도 뿐만아니라, 각 분야의 전문 패컬티의 실습 지도를 충분히 받으실 수 있도록 설계된 융합형 커리큘럼입니다.',
    details: [
      '타이치, 페르시안 밀, 고대운동, 자이로키네시스, 매트운동',
      '움직임 해부학, 호흡법, 연기기반 알아차림, 발성법',
      '다양한 분야의 전문가들이 패컬티로 참여하여 실습 훈련 지도',
    ],
  },
];

const faqItems = [
  {
    question: '자격증 취득 후 어떻게 활용할 수 있나요?',
    answer: '자격증은 단순한 수료증이 아니라, 내면소통명상을 공식적으로 지도할 수 있음을 보증하는 전문 자격증입니다. 기존 전문 영역(요가, 필라테스, PT, 소매틱 등)에 통합하시거나 자신만의 명상 프로그램을 직접 만들어서 운영하실 수도 있습니다.',
  },
  {
    question: '각 패키지의 차이점은 무엇인가요?',
    answer: '풀패키지는 파크로쉬 리조트에서 진행되는 두 번의 연수교육에 모두 참여하는 기본 옵션입니다. 에센셜 패키지는 연수교육 중 한 번만 직접 참여하고, 라이트 패키지는 연수교육을 모두 동영상으로 대체합니다. 온라인 패키지는 전체를 동영상으로 참여합니다.',
  },
  {
    question: '혼자서 명상하는 것과 명상 지도자가 되는 것의 차이는 무엇일까요?',
    answer: '반드시 명상 지도자가 될 필요는 없습니다. 다만, 배움의 가장 깊은 방식은 가르치는 것입니다. 지도를 하기 위해서는 명상의 원리나 구조까지 훨씬 더 깊이 연구해야 하므로, 자신의 명상도 더 깊어지고 명상이 삶에 스며드는 방식이 훨씬 입체적으로 변합니다.',
  },
  {
    question: '김주환 교수님과 패컬티 선생님들의 강의 비중은 어느 정도인가요?',
    answer: '정규과정 전체 교육 시간 대비 김주환 교수님의 직접 강의와 지도 비중은 대략 70%, 패컬티 선생님들의 교육이 대략 30% 정도 비율로 구성됩니다. 전 과정의 중심은 김주환 교수님의 직접 교육과 피드백입니다.',
  },
  {
    question: '스케줄상 5박 6일 연수 교육에 참여하기 어려운데 신청할 수 있나요?',
    answer: '네, 가능합니다. 연수 교육은 지도 역량을 깊이 체화하는 데 중요한 구성 요소이므로 현장 참여를 권장드립니다. 다만 부득이하게 참석이 어려운 경우 온라인 참여와 별도의 보완 과제를 통해 대체가 가능합니다.',
  },
];

const benefits = [
  '타인에게 명상을 안전하고 정확하게 안내할 수 있는 지도 능력',
  '깊고 단단한 마음근력과 내적 안정성, 그리고 텅 빈 고요함의 행복',
  '내면소통 기반의 소통능력과 이에 기반한 원만하고 행복한 인간관계',
  '자신의 직업 · 전문 영역에 내면소통명상을 접목한 새로운 프로그램 설계 역량',
  '자신의 목소리 · 언어 · 움직임을 기반으로 고유한 자신만의 명상 스타일 구축',
  '내면소통명상교육원(내명원) 소속 내면소통명상지도자(티처)로 명단 등록',
  '수료자에게 내면소통명상 클럽 평생 회원 자격 부여',
];

export default function AdvancedCoursePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 mountain-bg noise-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-nm-blue-800/60 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-nm-cream/80 text-sm font-medium tracking-wider uppercase mb-4">
              Advanced Course
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              내면소통명상 심화과정
            </h1>
            <p className="text-xl md:text-2xl text-nm-cream/90 font-display mb-4">
              2026년 3월 11일 개강
            </p>
            <p className="text-nm-cream/70 mb-8">
              10개월 / 총 200시간
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 text-center">
                <p className="text-3xl font-display font-bold text-white">10</p>
                <p className="text-sm text-nm-cream/70">개월</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 text-center">
                <p className="text-3xl font-display font-bold text-white">200</p>
                <p className="text-sm text-nm-cream/70">시간</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 text-center">
                <p className="text-3xl font-display font-bold text-white">자격증</p>
                <p className="text-sm text-nm-cream/70">취득</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky top-16 md:top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-nm-blue-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-6 md:space-x-8 overflow-x-auto py-4 text-sm">
            <a href="#overview" className="text-nm-navy font-medium whitespace-nowrap hover:text-nm-blue-600 transition-colors">
              개요
            </a>
            <a href="#features" className="text-nm-navy/60 whitespace-nowrap hover:text-nm-navy transition-colors">
              목표와 특징
            </a>
            <a href="#curriculum" className="text-nm-navy/60 whitespace-nowrap hover:text-nm-navy transition-colors">
              구성 안내
            </a>
            <a href="#benefits" className="text-nm-navy/60 whitespace-nowrap hover:text-nm-navy transition-colors">
              얻게 되는 것
            </a>
            <a href="#faq" className="text-nm-navy/60 whitespace-nowrap hover:text-nm-navy transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </nav>

      {/* Section 1: Overview */}
      <section id="overview" className="py-16 md:py-24 bg-nm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-nm-blue-500 text-sm font-medium tracking-wider uppercase">
              Overview
            </span>
            <h2 className="section-title mt-2">과정 개요</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
              <p className="text-lg text-nm-navy/80 leading-relaxed mb-8">
                내면소통명상 심화과정은 <strong className="text-nm-navy">뇌과학 기반의 내면소통명상을 지도할 수 있는 
                공식적인 명상 지도자를 양성</strong>해내는 교육과정으로, 2026년 12월까지 10개월 동안 
                총 200시간으로 구성되는 집중 교육과정입니다.
              </p>

              <div className="bg-nm-blue-50 rounded-2xl p-6 mb-8">
                <h3 className="font-display font-semibold text-nm-navy mb-4">
                  내면소통명상 지도자(티처) 자격증
                </h3>
                <p className="text-nm-navy/70 text-sm leading-relaxed">
                  성공적으로 수료했을 경우 내면소통명상 지도자(티처) 자격증이 수여됩니다. 
                  이는 내면소통연구소가 발급하는 공식 민간 자격으로, 
                  "뇌과학기반의 내면소통명상"을 제대로 교육할 수 있는 
                  전문가임을 공식적으로 보증한다는 의미입니다.
                </p>
              </div>

              <h4 className="font-display font-semibold text-nm-navy mb-4">
                자격증 취득 후 할 수 있는 것
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-nm-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-nm-blue-600 text-xs font-bold">1</span>
                  </div>
                  <p className="text-nm-navy/70">독자적으로 내면소통명상을 지도하실 수 있습니다.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-nm-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-nm-blue-600 text-xs font-bold">2</span>
                  </div>
                  <p className="text-nm-navy/70">내면소통명상 워크샵이나 교육과정을 개설할 수 있습니다.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-nm-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-nm-blue-600 text-xs font-bold">3</span>
                  </div>
                  <p className="text-nm-navy/70">
                    기존에 하고 계시는 여러가지 교육 프로그램(요가, 필라테스, 명상, 피트니스, 소매틱스, 
                    타이치, 달리기, 수영, 음악, 댄스, 퍼포먼스, 각급 학교 및 기업 교육 등)에 
                    내면소통명상의 요소를 접목하여 자신만의 고유한 명상 교육 프로그램을 개발하여 운영하실 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Features */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-nm-blue-500 text-sm font-medium tracking-wider uppercase">
              Goals & Features
            </span>
            <h2 className="section-title mt-2">목표와 특징</h2>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={feature.number} className="card">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-20 flex-shrink-0">
                    <span className="inline-block text-4xl md:text-5xl font-display font-bold text-nm-blue-200">
                      {feature.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-nm-navy mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-nm-navy/70 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-nm-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-nm-navy/60">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Curriculum */}
      <section id="curriculum" className="py-16 md:py-24 bg-nm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-nm-blue-500 text-sm font-medium tracking-wider uppercase">
              Curriculum
            </span>
            <h2 className="section-title mt-2">구성 안내</h2>
            <p className="text-nm-navy/60">
              본 과정은 두 차례의 5박 6일 연수 교육과 두 개 학기의 정규 과정으로 구성됩니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* 연수 교육 */}
            <div className="card bg-gradient-to-br from-nm-navy to-nm-navy-light text-white">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-xl font-semibold">연수 교육</h3>
                <span className="text-nm-blue-200 text-sm">50시간 × 2회 = 100시간</span>
              </div>
              
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                심화과정에는 강원도 정선 파크로쉬 리조트에서의 5박 6일 연수 교육이 두 차례 포함되어 있습니다.
              </p>

              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">1차 연수 교육</span>
                    <span className="text-nm-blue-200 text-sm">3월 11일 - 16일</span>
                  </div>
                  <p className="text-white/60 text-sm">
                    입학식, 오리엔테이션, 본격적인 교육 시작
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">2차 연수 교육</span>
                    <span className="text-nm-blue-200 text-sm">8월 26일 - 31일</span>
                  </div>
                  <p className="text-white/60 text-sm">
                    집중적인 명상 지도 실습, 교수님과 패컬티의 지도와 피드백
                  </p>
                </div>
              </div>

              <p className="text-white/50 text-xs mt-6">
                * 연수교육에 참여가 사정상 곤란하신 분은 온라인 동영상을 통해서도 참석이 가능합니다.
              </p>
            </div>

            {/* 정규 과정 */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-xl font-semibold text-nm-navy">정규 과정</h3>
                <span className="text-nm-blue-500 text-sm">1학기 60시간 + 2학기 40시간 = 100시간</span>
              </div>
              
              <p className="text-nm-navy/70 text-sm leading-relaxed mb-6">
                정규과정에서는 적어도 한달에 한번 전체 클래스가 모이는 정규 수업이 진행되고, 
                정규 수업 사이에 분반 실습이나 복습 클래스가 필요에 따라 수시로 운영됩니다.
              </p>

              <div className="space-y-4">
                <div className="bg-nm-blue-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-nm-navy">1학기 과정</span>
                    <span className="text-nm-blue-500 text-sm">3월 - 8월 (60시간)</span>
                  </div>
                  <p className="text-nm-navy/60 text-sm">
                    내면소통명상의 이론적 기반이 되는 뇌과학 이해, 
                    다양한 실습을 통해 움직임 명상의 전문가가 되는 것을 목표
                  </p>
                </div>

                <div className="bg-nm-blue-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-nm-navy">2학기 과정</span>
                    <span className="text-nm-blue-500 text-sm">9월 - 12월 (40시간)</span>
                  </div>
                  <p className="text-nm-navy/60 text-sm">
                    명상 지도자로 거듭나기 위한 전문적인 명상 지도법을 실습을 통해 본격적으로 학습
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline visual */}
          <div className="mt-12 bg-white rounded-3xl p-8 md:p-12">
            <h4 className="font-display font-semibold text-nm-navy mb-8 text-center">교육 일정 타임라인</h4>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-nm-blue-100 -translate-x-1/2 hidden md:block" />
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="md:w-1/2 md:text-right md:pr-8">
                    <span className="text-nm-blue-500 text-sm font-medium">2026년 3월 11일 - 16일</span>
                    <h5 className="font-display font-semibold text-nm-navy">1차 연수 교육</h5>
                    <p className="text-sm text-nm-navy/60">파크로쉬 리조트 5박 6일</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-nm-navy border-4 border-nm-blue-100 z-10" />
                  <div className="md:w-1/2 md:pl-8" />
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="md:w-1/2 md:text-right md:pr-8 order-2 md:order-1" />
                  <div className="w-4 h-4 rounded-full bg-nm-blue-400 border-4 border-nm-blue-100 z-10 order-1 md:order-2" />
                  <div className="md:w-1/2 md:pl-8 order-3">
                    <span className="text-nm-blue-500 text-sm font-medium">2026년 3월 - 8월</span>
                    <h5 className="font-display font-semibold text-nm-navy">1학기 정규 과정</h5>
                    <p className="text-sm text-nm-navy/60">이론 및 실습 교육 60시간</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="md:w-1/2 md:text-right md:pr-8">
                    <span className="text-nm-blue-500 text-sm font-medium">2026년 8월 26일 - 31일</span>
                    <h5 className="font-display font-semibold text-nm-navy">2차 연수 교육</h5>
                    <p className="text-sm text-nm-navy/60">파크로쉬 리조트 5박 6일</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-nm-navy border-4 border-nm-blue-100 z-10" />
                  <div className="md:w-1/2 md:pl-8" />
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="md:w-1/2 md:text-right md:pr-8 order-2 md:order-1" />
                  <div className="w-4 h-4 rounded-full bg-nm-blue-400 border-4 border-nm-blue-100 z-10 order-1 md:order-2" />
                  <div className="md:w-1/2 md:pl-8 order-3">
                    <span className="text-nm-blue-500 text-sm font-medium">2026년 9월 - 12월</span>
                    <h5 className="font-display font-semibold text-nm-navy">2학기 정규 과정</h5>
                    <p className="text-sm text-nm-navy/60">명상 지도법 실습 40시간</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="md:w-1/2 md:text-right md:pr-8">
                    <span className="text-nm-blue-500 text-sm font-medium">2026년 12월</span>
                    <h5 className="font-display font-semibold text-nm-navy">수료 및 자격증 수여</h5>
                    <p className="text-sm text-nm-navy/60">내면소통명상 지도자(티처) 자격증</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-green-500 border-4 border-green-100 z-10" />
                  <div className="md:w-1/2 md:pl-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Benefits */}
      <section id="benefits" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-nm-blue-500 text-sm font-medium tracking-wider uppercase">
              Benefits
            </span>
            <h2 className="section-title mt-2">심화과정을 통해 얻게 되는 것</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="card flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-nm-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-nm-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-nm-navy/80">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-br from-nm-blue-100 to-nm-blue-200/50 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="font-display text-xl md:text-2xl font-semibold text-nm-navy mb-4">
                함께 성장하는 수행공동체의 일원이 되다
              </h3>
              <p className="text-nm-navy/70 leading-relaxed">
                10개월 200시간 동안 서로의 수행을 지켜보며 신뢰를 쌓아가게 되는 수강생들은 
                자연스럽게 서로 믿고 의지하며 수행해나가는 네트워크를 형성하게 될 것입니다. 
                심화과정 수료 후에도 다양한 온/오프라인 정기 모임을 통해 네트워킹을 이뤄나갈 것이며, 
                후속 기수들과의 폭넓은 네트워크도 만들어나갈 것입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: FAQ */}
      <section id="faq" className="py-16 md:py-24 bg-nm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-nm-blue-500 text-sm font-medium tracking-wider uppercase">
              FAQ
            </span>
            <h2 className="section-title mt-2">자주 묻는 질문</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden border border-nm-blue-100/50">
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-nm-blue-50/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-nm-navy pr-4">{item.question}</span>
                  <svg 
                    className={`w-5 h-5 text-nm-blue-400 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-nm-navy/70 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/faq" className="text-nm-navy/60 hover:text-nm-navy transition-colors text-sm">
              더 많은 FAQ 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-nm-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
            내면소통명상 지도자의 여정을 시작하세요
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            심화과정 1기가 2026년 3월 11일에 시작합니다.<br />
            10개월간의 집중 교육을 통해 전문 명상 지도자로 성장하세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/about/faculty" className="btn-secondary border-white/30 text-white hover:bg-white/10">
              패컬티 소개
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
