# 달인 부킹 - 작업 내역 (TODOs)

## 완료된 작업

### 2025-01-17 - 프로젝트 초기화 및 MVP 개발
- [x] PRD 문서 작성 완료
- [x] TODOs.md 파일 생성
- [x] 메인 랜딩 페이지 구현
- [x] 서비스 요청 페이지 (고객) 구현
- [x] 매칭 페이지 구현
- [x] 달인 대시보드 페이지 구현
- [x] 달인 등록 페이지 구현
- [x] 가격 계산기 페이지 구현
- [x] 서비스 소개 페이지 구현

#### 완료된 컴포넌트
- [x] 서비스 카테고리 카드
- [x] 부킹 옵션 선택 UI
- [x] 달인 프로필 카드
- [x] 평점 및 리뷰 컴포넌트
- [x] AI 가격 계산기

#### Mock 데이터 구현
- [x] 서비스 카테고리 목록
- [x] 달인 프로필 데이터
- [x] 리뷰/평점 데이터
- [x] 예약 요청 데이터
- [x] 달인 통계 데이터

## 향후 구현 예정 (지금은 보류)

### 백엔드 및 데이터베이스

#### 데이터베이스 스키마 설계
- [ ] users 테이블 (고객 + 달인 통합)
  - id, email, name, phone, user_type, created_at
- [ ] profiles 테이블 (달인 상세 정보)
  - user_id, skills, certifications, background_check, insurance_verified
- [ ] services 테이블 (서비스 카테고리)
  - id, name, description, base_price, icon
- [ ] bookings 테이블 (예약/거래)
  - id, customer_id, dalin_id, service_id, status, booking_type, price
- [ ] reviews 테이블 (후기)
  - id, booking_id, rating, comment, created_at
- [ ] transactions 테이블 (정산)
  - id, booking_id, amount, fee, dalin_amount, status

#### API 엔드포인트 구현
- [ ] POST /api/bookings - 서비스 요청 생성
- [ ] GET /api/bookings/:id - 예약 상세 조회
- [ ] PATCH /api/bookings/:id - 예약 상태 업데이트
- [ ] GET /api/dalins - 달인 목록 조회 (거리 기반)
- [ ] GET /api/dalins/:id - 달인 프로필 조회
- [ ] POST /api/reviews - 리뷰 작성
- [ ] GET /api/pricing - AI 추천 가격 계산

### AI 가격 추천 시스템

#### Gemini API 연동
- [ ] 환경 변수 설정 (GEMINI_API_KEY)
- [ ] 가격 계산 프롬프트 설계
- [ ] 입력 데이터 구조화
  - service_type: 서비스 종류
  - location: 지역 (서울/경기/지방)
  - time_slot: 시간대 (평일낮/평일밤/주말)
  - urgency: 부킹 옵션 (일반/우선/긴급)
  - dalin_grade: 달인 등급
- [ ] API 호출 함수 구현
\`\`\`typescript
// 예시 코드 (향후 구현)
async function calculateAIPrice(params: PricingParams) {
  const prompt = `
    다음 조건으로 서비스 가격을 추천해주세요:
    - 서비스: ${params.service_type}
    - 지역: ${params.location}
    - 시간대: ${params.time_slot}
    - 긴급도: ${params.urgency}
    - 달인 등급: ${params.dalin_grade}
    
    기본 가격표를 참고하여 적정 가격을 계산하세요.
  `;
  
  // Gemini API 호출
  const response = await gemini.generateText(prompt);
  return parsePrice(response);
}
\`\`\`

### 인증 및 보안

#### Supabase Auth 연동
- [ ] 이메일/비밀번호 회원가입
- [ ] 소셜 로그인 (카카오, 네이버)
- [ ] 휴대폰 본인 인증 연동
- [ ] 역할 기반 접근 제어 (RBAC)

#### 달인 검증 시스템
- [ ] 신분증 인증 API 연동
- [ ] 범죄 경력 조회 동의서 수집
- [ ] 보험 가입 증명서 업로드 기능
- [ ] 관리자 승인 워크플로우

### 결제 시스템

#### Stripe 연동
- [ ] Stripe 계정 생성 및 API 키 설정
- [ ] 결제 의도(Payment Intent) 생성
- [ ] 카드 결제 UI 구현
- [ ] 간편결제 (Apple Pay, Google Pay) 연동
- [ ] 결제 완료 webhook 처리
- [ ] 환불 로직 구현

#### 정산 시스템
- [ ] 달인 계좌 등록 기능
- [ ] 주간/월간 정산 배치 작업
- [ ] 수수료 계산 로직
- [ ] 정산 내역 PDF 생성
- [ ] 세금계산서 발행 (향후)

### 실시간 기능

#### 채팅 시스템
- [ ] Supabase Realtime 채팅 구현
- [ ] 1:1 채팅방 생성
- [ ] 메시지 전송/수신
- [ ] 이미지/파일 전송
- [ ] 읽음 표시

#### 푸시 알림
- [ ] Web Push API 설정
- [ ] 알림 권한 요청 UI
- [ ] 새 요청 알림 (달인)
- [ ] 매칭 완료 알림 (고객)
- [ ] 작업 시작/완료 알림

#### 위치 기반 매칭
- [ ] Geolocation API 권한 요청
- [ ] 달인 위치 추적 (동의 시)
- [ ] 거리 계산 알고리즘
- [ ] 지도 UI (Kakao Map 또는 Naver Map)

### 추가 UI 페이지
- [ ] 마이페이지 (고객/달인 공통)
- [ ] 거래 내역 페이지
- [ ] 정산 내역 페이지
- [ ] 후기 관리 페이지
- [ ] 알림 센터
- [ ] 설정 페이지

### 테스트

#### 단위 테스트
- [ ] Jest + React Testing Library 설정
- [ ] 컴포넌트 테스트 작성
- [ ] 유틸리티 함수 테스트
- [ ] API 라우트 테스트

#### E2E 테스트
- [ ] Playwright 설정
- [ ] 고객 서비스 요청 플로우 테스트
- [ ] 달인 예약 수락 플로우 테스트
- [ ] 결제 플로우 테스트

### 배포 및 모니터링

#### CI/CD
- [ ] Vercel 배포 설정
- [ ] 환경 변수 관리 (dev/prod)
- [ ] GitHub Actions 워크플로우

#### 모니터링
- [ ] Vercel Analytics 설정
- [ ] 에러 트래킹 (Sentry)
- [ ] 성능 모니터링
- [ ] 사용자 행동 분석 (Mixpanel 또는 GA4)

## 메모 및 결정 사항

### 기술 선택 이유
- **Next.js 16**: 최신 기능 활용, SSR/SSG 지원, API Routes
- **Supabase**: 빠른 개발, Auth + DB + Realtime 통합
- **Stripe**: 한국 결제 지원, 안정적인 결제 인프라
- **Gemini API**: 가격 추천 AI 구현

### 현재 구현된 기능
- 고객용 메인 페이지, 서비스 요청, 매칭 완료
- 달인용 대시보드 및 등록 페이지
- AI 가격 계산기
- 서비스 소개 페이지
- 모든 데이터는 Mock으로 처리
- API 호출은 console.log로 대체

### 보류된 기능
- 영상 통화 기능 (복잡도 높음)
- 다국어 지원 (초기 한국만)
- 기업 고객 (B2B) 기능

### 참고 링크
- [Supabase 문서](https://supabase.com/docs)
- [Stripe 한국 가이드](https://stripe.com/docs/korea)
- [Gemini API 문서](https://ai.google.dev/docs)
- [Next.js 16 릴리스](https://nextjs.org/blog/next-16)
