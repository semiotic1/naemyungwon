import Link from 'next/link'

interface FacultyMember {
  name: string
  title: string
  role: string
  description: string[]
  isLead?: boolean
  isGuest?: boolean
}

const leadFaculty: FacultyMember = {
  name: '김주환',
  title: '연세대학교 언론홍보영상학부 교수',
  role: '과정 총괄',
  description: [
    '내면소통명상 핵심 이론 및 심화 강의',
    '단계별 실습 지도 및 피드백 (명상 언어, 보이스 톤, 스크립트 구조 직접 지도)',
    '소규모 면담을 통한 심층 코칭',
    'Q&A 세션 운영',
  ],
  isLead: true,
}

const facultyMembers: FacultyMember[] = [
  {
    name: '김주현',
    title: '소마앤바디, 힘의집 대표 / 주르카네 국가대표',
    role: '고대 운동과 소매틱 실습',
    description: [
      '어떤 움직임도 명상이 되는 애티튜드',
    ],
  },
  {
    name: '김지민',
    title: '오스모브 창립 대표',
    role: '체화된 해부학 Embodied Anatomy',
    description: [
      '움직임 명상을 위한 신체 구조와 기능의 체화',
      '메따와 위빠사나 명상',
    ],
  },
  {
    name: '김지훈',
    title: '23년차 배우 (SBS 귀궁, TVING 친애하는 X 등 출연)',
    role: '연기 기법 기반 훈련',
    description: [
      '연기 기법을 통한 배경 자아 알아차림 훈련',
      '명상 가이드를 위한 최적의 발성과 좋은 울림을 위한 공명 훈련',
    ],
  },
  {
    name: '이연',
    title: '바디올로지 필라테스 & 자이로토닉 대표',
    role: '자세와 호흡 기반 정렬',
    description: [
      '오래 앉을 수 있는 몸: 올바른 자세와 호흡 기반 정렬',
      '매트 위에서의 움직임 명상',
    ],
  },
  {
    name: '이유영',
    title: '바디올로지 필라테스 & 자이로토닉 대표',
    role: '움직임 명상과 감각 큐잉',
    description: [
      '몸 - 호흡 - 리듬을 연결하는 움직임',
      '명상과 감각 큐잉 소매틱 운동과 명상',
    ],
  },
  {
    name: '브랜든 최',
    title: '서울대학교 음악대학 강사 / 링컨센터 리사이틀, 조수미와 콘서트 투어',
    role: '리듬 기반 명상 훈련',
    description: [
      '음악가의 호흡을 활용한 리듬 기반 명상 훈련',
    ],
  },
]

const guestFaculty: FacultyMember = {
  name: '강수원',
  title: '밝은빛태극권협회 부원장',
  role: '타이치 기반 움직임 명상',
  description: [
    '타이치의 기본 원리와 기본 동작 실습',
    '타이치와 도인기공을 통해 경험해보는 전통적인 움직임 명상',
  ],
  isGuest: true,
}

export default function FacultyPage() {
  return (
    <div className="grain-overlay">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-nm-sky-100 to-nm-sky-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-nm-sky-500 mb-6">
            <Link href="/about" className="hover:text-nm-sky-700">내명원 소개</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-nm-sky-700">패컬티 소개</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-nm-sky-900 mb-6">
            패컬티 소개
          </h1>
          <p className="text-lg text-nm-sky-700 max-w-3xl leading-relaxed">
            본 심화과정은 김주환 교수님의 전 과정 리드 아래, 각자의 전문 분야에서 
            오랜 경험과 지도 역량을 가진 패컬티 선생님들의 실습 중심 교육도 포함됩니다.
          </p>
        </div>
      </section>

      {/* Lead Faculty - 김주환 교수님 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">과정 총괄</h2>
          
          <div className="mt-8 bg-gradient-to-br from-nm-sky-50 to-nm-sky-100 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl bg-gradient-to-br from-nm-sky-300 to-nm-mountain flex-shrink-0 overflow-hidden shadow-xl">
                {/* 김주환 교수님 이미지 placeholder */}
                <div className="w-full h-full flex items-center justify-center text-white">
                  <span className="text-6xl font-display font-bold">김</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="font-display text-3xl font-bold text-nm-sky-900">{leadFaculty.name}</h3>
                  <p className="text-nm-sky-600 mt-1">{leadFaculty.title}</p>
                </div>
                <div className="space-y-3">
                  {leadFaculty.description.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-nm-sky-200 text-nm-sky-700 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <p className="text-nm-sky-700">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-nm-sky-800 font-medium bg-white/60 rounded-xl px-4 py-3">
                  본 과정은 내면소통명상을 정확하게 안내하고 지도할 수 있는 법을 
                  김주환 교수님께 직접 배울 수 있는 유일한 지도자 교육 과정입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Faculty */}
      <section className="py-16 md:py-24 bg-nm-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">전문 패컬티</h2>
          
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyMembers.map((faculty, index) => (
              <div 
                key={faculty.name}
                className="faculty-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="image-container">
                  {/* 패컬티 이미지 placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-5xl font-display font-bold text-nm-sky-600/50">
                      {faculty.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-nm-sky-900 mb-1">
                    {faculty.name}
                  </h3>
                  <p className="text-sm text-nm-sky-500 mb-3">{faculty.title}</p>
                  <div className="pt-3 border-t border-nm-sky-100">
                    <p className="font-semibold text-nm-sky-700 mb-2">{faculty.role}</p>
                    <div className="space-y-1">
                      {faculty.description.map((desc, idx) => (
                        <p key={idx} className="text-sm text-nm-sky-600">{desc}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Faculty */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">특별 초빙 강사</h2>
          
          <div className="mt-8 max-w-2xl">
            <div className="bg-nm-sky-50 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-nm-sky-200 to-nm-mist flex-shrink-0 overflow-hidden">
                {/* 강수원 선생님 이미지 placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl font-display font-bold text-nm-sky-600/50">강</span>
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-nm-sky-900 mb-1">
                  {guestFaculty.name}
                </h3>
                <p className="text-sm text-nm-sky-500 mb-4">{guestFaculty.title}</p>
                <div className="pt-3 border-t border-nm-sky-200">
                  <p className="font-semibold text-nm-sky-700 mb-2">{guestFaculty.role}</p>
                  <div className="space-y-1">
                    {guestFaculty.description.map((desc, idx) => (
                      <p key={idx} className="text-nm-sky-600">{desc}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-nm-sky-700 to-nm-sky-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-nm-sky-200 mb-2">전문 패컬티와 함께하는</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
            내면소통명상 심화과정
          </h2>
          <Link 
            href="/advanced" 
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-nm-sky-800 font-medium rounded-lg hover:bg-nm-sky-50 transition-colors shadow-lg"
          >
            심화과정 안내 보기
          </Link>
        </div>
      </section>
    </div>
  )
}
