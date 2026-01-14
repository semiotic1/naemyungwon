import Link from 'next/link';

interface FacultyMember {
  name: string;
  title: string;
  affiliation: string;
  topics: string[];
  isLead?: boolean;
  isGuest?: boolean;
}

const leadFaculty: FacultyMember = {
  name: '김주환',
  title: '과정 총괄',
  affiliation: '연세대학교 언론홍보영상학부 교수',
  topics: [
    '내면소통명상 핵심 이론 및 심화 강의',
    '단계별 실습 지도 및 피드백',
    '소규모 면담을 통한 심층 코칭',
    'Q&A 세션 운영',
  ],
  isLead: true,
};

const facultyMembers: FacultyMember[] = [
  {
    name: '김주현',
    title: '전문 패컬티',
    affiliation: '소마앤바디, 힘의집 대표, 주르카네 국가대표',
    topics: [
      '고대 운동과 소매틱 실습',
      '어떤 움직임도 명상이 되는 애티튜드',
    ],
  },
  {
    name: '김지민',
    title: '전문 패컬티',
    affiliation: '오스모브 창립 대표',
    topics: [
      '체화된 해부학 Embodied Anatomy',
      '움직임 명상을 위한 신체 구조와 기능의 체화',
      '메따와 위빠사나 명상',
    ],
  },
  {
    name: '김지훈',
    title: '전문 패컬티',
    affiliation: '23년차 배우, SBS 귀궁, TVING 친애하는 X 등 출연',
    topics: [
      '연기 기법을 통한 배경 자아 알아차림 훈련',
      '명상 가이드를 위한 최적의 발성과 좋은 울림을 위한 공명 훈련',
    ],
  },
  {
    name: '이연',
    title: '전문 패컬티',
    affiliation: '바디올로지 필라테스 & 자이로토닉 대표',
    topics: [
      '오래 앉을 수 있는 몸',
      '올바른 자세와 호흡 기반 정렬',
      '매트 위에서의 움직임 명상',
    ],
  },
  {
    name: '이유영',
    title: '전문 패컬티',
    affiliation: '바디올로지 필라테스 & 자이로토닉 대표',
    topics: [
      '몸 - 호흡 - 리듬을 연결하는 움직임',
      '명상과 감각 큐잉',
      '소매틱 운동과 명상',
    ],
  },
  {
    name: '브랜든 최',
    title: '전문 패컬티',
    affiliation: '서울대학교 음악대학 강사, 링컨센터 리사이틀, 조수미와 콘서트 투어',
    topics: [
      '음악가의 호흡을 활용한 리듬 기반 명상 훈련',
    ],
  },
];

const guestFaculty: FacultyMember = {
  name: '강수원',
  title: '특별 초빙 강사',
  affiliation: '밝은빛태극권협회 부원장',
  topics: [
    '타이치의 기본 원리와 기본 동작 실습',
    '타이치와 도인기공을 통해 경험해보는 전통적인 움직임 명상',
  ],
  isGuest: true,
};

function FacultyCard({ faculty, index }: { faculty: FacultyMember; index?: number }) {
  return (
    <div 
      className={`card group ${faculty.isLead ? 'lg:col-span-2 bg-gradient-to-br from-nm-blue-50 to-white' : ''}`}
      style={{ animationDelay: `${(index || 0) * 100}ms` }}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Avatar */}
        <div className={`flex-shrink-0 ${faculty.isLead ? 'md:w-48' : ''}`}>
          <div className={`
            ${faculty.isLead ? 'w-32 h-32 md:w-48 md:h-48' : 'w-24 h-24'} 
            rounded-2xl bg-gradient-to-br from-nm-blue-200 to-nm-blue-300 
            flex items-center justify-center mx-auto md:mx-0
          `}>
            <span className={`
              font-display font-bold text-white/80
              ${faculty.isLead ? 'text-4xl md:text-5xl' : 'text-3xl'}
            `}>
              {faculty.name.charAt(0)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className={`
              text-xs px-3 py-1 rounded-full
              ${faculty.isLead ? 'bg-nm-navy text-white' : faculty.isGuest ? 'bg-nm-blue-500 text-white' : 'bg-nm-blue-100 text-nm-blue-600'}
            `}>
              {faculty.title}
            </span>
          </div>
          <h3 className={`
            font-display font-semibold text-nm-navy mb-1
            ${faculty.isLead ? 'text-2xl md:text-3xl' : 'text-xl'}
          `}>
            {faculty.name}
          </h3>
          <p className="text-sm text-nm-navy/60 mb-4">{faculty.affiliation}</p>
          
          <div className="space-y-2">
            {faculty.topics.map((topic, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <svg className="w-4 h-4 text-nm-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-sm text-nm-navy/70">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FacultyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-nm-blue-100 to-nm-cream overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-nm-blue-500 text-sm font-medium tracking-wider uppercase mb-4">
              Faculty
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-nm-navy mb-6">
              패컬티 소개
            </h1>
            <p className="text-lg md:text-xl text-nm-navy/70 leading-relaxed">
              본 심화과정은 김주환 교수님의 전 과정 리드 아래, 
              각자의 전문 분야에서 오랜 경험과 지도 역량을 가진 
              패컬티 선생님들의 실습 중심 교육도 포함됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-16 md:top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-nm-blue-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            <Link href="/about" className="py-4 text-sm font-medium text-nm-navy/60 hover:text-nm-navy transition-colors border-b-2 border-transparent">
              소개
            </Link>
            <Link href="/about/faculty" className="py-4 text-sm font-medium text-nm-navy border-b-2 border-nm-navy">
              패컬티 소개
            </Link>
            <Link href="/about/location" className="py-4 text-sm font-medium text-nm-navy/60 hover:text-nm-navy transition-colors border-b-2 border-transparent">
              오시는 길
            </Link>
          </div>
        </div>
      </nav>

      {/* Lead Faculty */}
      <section className="py-16 md:py-24 bg-nm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-nm-blue-500 text-sm font-medium tracking-wider uppercase">
              Course Director
            </span>
            <h2 className="section-title mt-2">과정 총괄</h2>
            <p className="text-nm-navy/60 max-w-2xl mx-auto">
              정규과정 전체 교육 시간 대비 김주환 교수님의 직접 강의와 지도 비중은 
              대략 70%이며, 전 과정의 중심은 김주환 교수님의 직접 교육과 피드백입니다.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <FacultyCard faculty={leadFaculty} />
          </div>
        </div>
      </section>

      {/* Faculty Members */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-nm-blue-500 text-sm font-medium tracking-wider uppercase">
              Expert Faculty
            </span>
            <h2 className="section-title mt-2">전문 패컬티</h2>
            <p className="text-nm-navy/60 max-w-2xl mx-auto">
              타이치, 자이로키네시스, 고대운동, 움직임 해부학, 호흡법, 연기기반 알아차림, 
              발성법 등 다양한 분야의 전문가들이 패컬티로 참여합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyMembers.map((faculty, index) => (
              <FacultyCard key={faculty.name} faculty={faculty} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Guest Faculty */}
      <section className="py-16 md:py-24 bg-nm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-nm-blue-500 text-sm font-medium tracking-wider uppercase">
              Guest Instructor
            </span>
            <h2 className="section-title mt-2">특별 초빙 강사</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <FacultyCard faculty={guestFaculty} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-nm-blue-100 to-nm-blue-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-nm-navy mb-4">
            세계 어디에도 없는<br className="md:hidden" /> 전문가 융합형 명상 지도자 교육
          </h2>
          <p className="text-nm-navy/60 max-w-2xl mx-auto mb-8">
            다양한 분야의 전문가들로부터 직접 배우며, 
            뇌과학 기반 움직임 명상 지도자로서 필요한 요소를 입체적으로 학습하세요.
          </p>
          <Link href="/advanced-course" className="btn-primary">
            심화과정 상세 안내
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
