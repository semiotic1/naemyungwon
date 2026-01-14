# 내명원 - 내면소통명상교육원 웹사이트

뇌과학 기반의 내면소통명상 전문가를 양성하는 내면소통명상교육원(내명원) 공식 웹사이트입니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel 권장

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

### 프로덕션 빌드

```bash
npm run build
npm run start
```

## 프로젝트 구조

```
naemyungwon/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (헤더, 푸터 포함)
│   ├── page.tsx            # 메인 페이지 (홈)
│   ├── globals.css         # 글로벌 스타일
│   ├── about/
│   │   ├── page.tsx        # 내명원 소개
│   │   └── faculty/
│   │       └── page.tsx    # 패컬티 소개
│   └── advanced/
│       └── page.tsx        # 심화과정 안내
├── components/
│   ├── Header.tsx          # 헤더 컴포넌트
│   └── Footer.tsx          # 푸터 컴포넌트
├── public/
│   └── images/             # 이미지 파일
├── tailwind.config.ts      # Tailwind 설정
├── next.config.js          # Next.js 설정
└── package.json
```

## 페이지 구성

| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | 메인 | 홈페이지, 과정 소개 카드, 공지사항 |
| `/about` | 내명원 소개 | 비전, 미션, 교육 철학 |
| `/about/faculty` | 패컬티 소개 | 김주환 교수님 및 전문 패컬티 |
| `/advanced` | 심화과정 | 과정 개요, 목표와 특징, 구성 안내, FAQ |

## Vercel 배포 방법

1. [Vercel](https://vercel.com)에 GitHub 계정으로 로그인
2. "New Project" 클릭
3. 이 저장소를 import
4. 기본 설정 그대로 "Deploy" 클릭
5. 배포 완료 후 제공되는 URL로 접속

## 컬러 팔레트

내명원 브랜드 컬러는 산과 하늘을 연상시키는 차분한 블루-그레이 계열입니다.

- `nm-sky-50` ~ `nm-sky-900`: 메인 컬러 팔레트
- `nm-mist`: #b8c5d0 (안개 색상)
- `nm-mountain`: #6b7d8a (산 색상)
- `nm-deep`: #1e3a5f (깊은 색상)

## 폰트

- **Display (제목)**: Noto Serif KR
- **Body (본문)**: Pretendard

## 추가 개발 예정

- [ ] 기초과정 페이지
- [ ] 프로그램 페이지 (리트릿, 워크샵, 특강, 주환2 운동)
- [ ] 커뮤니티 페이지
- [ ] 자료실 페이지
- [ ] 회원가입/로그인 기능
- [ ] FAQ 전체 페이지

## 라이선스

© 2025. 내면소통연구소. ALL RIGHTS RESERVED.
