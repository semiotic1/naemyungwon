import Link from 'next/link'
import { Video, Clock, Shield, Settings, Calendar, Phone, Mail, ExternalLink, AlertCircle } from 'lucide-react'

export default function ZoomGuidePage() {
  return (
    <div className="grain-overlay">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-nm-sky-100 to-nm-sky-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-nm-sky-500 mb-6">
            <Link href="/advanced" className="hover:text-nm-sky-700">심화과정</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-nm-sky-700">화상 면접 안내</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-nm-sky-700 flex items-center justify-center">
              <Video className="w-7 h-7 text-white" />
            </div>
            <div className="mb-4">
              <p className="text-nm-sky-600 text-lg mb-2">심화과정 1기 선발을 위한</p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-nm-sky-900">
                줌(Zoom) 화상 면접 접속 안내 가이드
              </h1>
            </div>
          </div>
          <p className="text-nm-sky-700 text-lg">
            귀하의 원활한 면접 진행을 위해 아래 안내사항을 반드시 숙지해 주시기 바랍니다.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 기본 안내 사항 */}
          <div className="space-y-6 mb-12">
            <div className="flex gap-4 p-6 bg-nm-sky-50 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-nm-sky-200 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-nm-sky-700" />
              </div>
              <div>
                <h3 className="font-semibold text-nm-sky-800 mb-2">1. 면접 일시</h3>
                <p className="text-nm-sky-700">
                  문자를 통해 개별 안내된 일시에 맞춰 <strong>배정 시간 10분 전</strong>에 모바일이나 노트북으로 접속해 주세요.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-nm-sky-50 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-nm-sky-200 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-nm-sky-700" />
              </div>
              <div>
                <h3 className="font-semibold text-nm-sky-800 mb-2">2. 화상면접 프로그램 줌(Zoom) 접속 아이디와 패스워드</h3>
                <p className="text-nm-sky-700">
                  개인별 면접 번호와 줌 접속을 위한 회의실 ID와 암호는 <strong>배정된 면접시간 1시간 전</strong>에 문자를 통해 전송해드립니다.
                </p>
              </div>
            </div>
          </div>

          {/* 접속 시 주의사항 */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-nm-sky-900 mb-6 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-nm-sky-600" />
              접속 시 주의사항
            </h2>

            <div className="space-y-6">
              {/* 주의사항 1 */}
              <div className="border border-nm-sky-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-nm-sky-700 text-white flex items-center justify-center font-bold text-sm">1</span>
                  <h3 className="font-semibold text-nm-sky-800 text-lg">이름 설정 규칙 (필수)</h3>
                </div>
                <p className="text-nm-sky-700 mb-4">
                  줌 회의실 입장 시 본인의 이름을 반드시 <strong>[합격 문자 내 포함된 면접번호_성함 일부]</strong>로 설정해 주세요.
                </p>
                <div className="bg-nm-sky-100 rounded-xl p-4">
                  <p className="text-nm-sky-800 font-medium">
                    예시: <span className="bg-white px-3 py-1 rounded-lg text-nm-sky-700">140_김*민</span>
                  </p>
                </div>
                <p className="text-sm text-nm-sky-600 mt-4">
                  이는 신원 확인 및 지원자 간 프라이버시 보호를 위한 필수 조치이오니 반드시 준수해주시기 바랍니다.
                </p>
              </div>

              {/* 주의사항 2 */}
              <div className="border border-nm-sky-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-nm-sky-700 text-white flex items-center justify-center font-bold text-sm">2</span>
                  <h3 className="font-semibold text-nm-sky-800 text-lg">대기실 및 메인룸 운영</h3>
                </div>
                <div className="space-y-4 text-nm-sky-700">
                  <p>
                    링크 접속 시 <strong>'대기실'</strong>에서 잠시 대기하시게 되며, 운영자가 순차적으로 '메인 대기실' 입장을 수락합니다.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-amber-800 font-medium">
                      메인 대기실에서는 반드시 <strong>카메라를 끄고(Off)</strong> 및 <strong>음소거</strong>를 해주시기 바랍니다.
                    </p>
                  </div>
                  <p>
                    운영자의 안내에 따라 대기하시다가, 본인 차례가 되어 <strong>'면접실'로 자동 이동된 후에</strong> 카메라와 마이크를 켜주시면 됩니다.
                  </p>
                </div>
              </div>

              {/* 주의사항 3 */}
              <div className="border border-nm-sky-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-nm-sky-700 text-white flex items-center justify-center font-bold text-sm">3</span>
                  <h3 className="font-semibold text-nm-sky-800 text-lg">줌 면접 시 주의 사항</h3>
                </div>
                <div className="space-y-3 text-nm-sky-700">
                  <p>소음이 없는 독립된 공간에서 접속해 주시고, 기기 배터리 문제를 방지하기 위해 <strong>전원 충전기 연결</strong>을 권장합니다.</p>
                  <p><strong>줌 사용법 숙지 및 마이크/카메라 사전 테스트는 지원자의 의무</strong>입니다.</p>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-red-700 text-sm">
                      기기 오작동으로 인해 면접 진행이 어려울 경우, 그로 인한 불이익은 본인에게 귀속됨을 양해 바랍니다.
                    </p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
                    <p className="text-amber-800">
                      면접하는 동안에는 반드시 <strong>카메라를 켜고 말씀만</strong> 하셔야 하며, 다른 자료 제시나 화면 공유는 하실 수 없습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 주의사항 4 */}
              <div className="border border-nm-sky-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-nm-sky-700 text-white flex items-center justify-center font-bold text-sm">4</span>
                  <h3 className="font-semibold text-nm-sky-800 text-lg">Zoom 앱 사전 설치</h3>
                </div>
                <p className="text-nm-sky-700 mb-4">
                  Zoom 앱이 없으신 분은 <strong>사전에 미리 설치하고 회원 가입</strong>을 해두어야 합니다.
                </p>
                <p className="text-nm-sky-600 mb-4">줌 사용이 처음이신 분은 다음 유튜브 영상을 참고하세요:</p>
                <a 
                  href="https://www.youtube.com/watch?v=8U925VTjOGs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  줌 사용법 유튜브 영상 보기
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* 일정 변경 신청 방법 */}
              <div className="border-2 border-nm-sky-300 rounded-2xl p-6 bg-nm-sky-50">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-nm-sky-700" />
                  <h3 className="font-semibold text-nm-sky-800 text-lg">일정 변경 신청 방법</h3>
                </div>
                <p className="text-nm-sky-700 mb-4">
                  개인 사정으로 인해 지정된 일시에 참여가 곤란하신 분에 한해 일정 변경 신청이 가능합니다.
                </p>
                <div className="bg-white rounded-xl p-5 space-y-4">
                  <div>
                    <p className="font-semibold text-nm-sky-800 mb-2">▷ 신청 방법</p>
                    <p className="text-nm-sky-700">
                      <strong>1월 19일 오후 5시까지</strong> 이메일(<a href="mailto:official@joohankim.org" className="text-nm-sky-600 underline">official@joohankim.org</a>)로 면접 가능한 일정으로 변경 신청
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-nm-sky-800 mb-2">▷ 면접 가능한 일정</p>
                    <p className="text-nm-sky-700">
                      1월 22일, 23일, 24일, 25일 중 <strong>14:00~17:00</strong> 또는 <strong>20:00~22:00</strong>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-nm-sky-800 mb-2">▷ 메일 제목 형식</p>
                    <p className="bg-nm-sky-100 px-4 py-2 rounded-lg text-nm-sky-700 inline-block">
                      [심화과정 면접 일정 변경 요청] 지원자 성함
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 비상 연락 */}
          <div className="bg-gradient-to-br from-nm-sky-700 to-nm-sky-800 rounded-2xl p-8 text-white">
            <h2 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              비상 연락
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-nm-sky-300" />
                <div>
                  <p className="text-nm-sky-200 text-sm mb-1">줌 이용 관련 및 일반 문의</p>
                  <a href="mailto:official@joohankim.org" className="text-white font-medium hover:text-nm-sky-200 transition-colors">
                    official@joohankim.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-nm-sky-300" />
                <div>
                  <p className="text-nm-sky-200 text-sm mb-1">면접 당일 긴급 연락</p>
                  <a href="tel:010-6650-0945" className="text-white font-medium hover:text-nm-sky-200 transition-colors">
                    010-6650-0945
                  </a>
                  <p className="text-nm-sky-300 text-xs mt-1">(내면소통 법인폰)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-10 text-center">
            <Link 
              href="/advanced" 
              className="inline-flex items-center text-nm-sky-700 font-medium hover:text-nm-sky-900 transition-colors"
            >
              ← 심화과정 안내로 돌아가기
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}
