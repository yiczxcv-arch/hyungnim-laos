# CHANGELOG.md

# HYUNGNIM LAOS
## DEVELOPMENT CHANGELOG

Version: 1.0

---

# PURPOSE

이 문서는 HYUNGNIM LAOS 프로젝트의
모든 작업 기록과 인수인계 문서이다.

Claude Code는 새로운 작업을 시작하기 전에
반드시 이 문서를 먼저 확인한다.

이 문서는 프로젝트의 진행 상황을 기록하며,
다음 작업자가 바로 이어서 개발할 수 있도록 한다.

---

# PROJECT STATUS

현재 상태

Planning

Development

Testing

Deployment

운영 중인 단계만 표시한다.

✅ Development

---

# CURRENT VERSION

Version

0.1.0

---

# CURRENT BRANCH

master

(주의: 템플릿 기본값은 main이나 실제 저장소는 create-next-app 기본값인 master 사용 중 — 브랜치명 변경은 PM 확인 후 진행)

---

# LAST UPDATE

2026-07-11

---

# LAST COMPLETED WORK

Sprint 1-3: HOME Final Polish — 모바일 코드 레벨 점검, Section/Button 토큰 통일, Service Button 라벨 표준화, Review 빈 상태 정리, Hero/YouTube Placeholder 완성

Build PASS

---

# MODIFIED FILES

src/app/page.tsx

src/app/review/page.tsx

src/components/header.tsx

src/components/service-page.tsx

src/components/EmptyState.tsx

docs/CHANGELOG.md

---

# BUILD STATUS

ESLint

PASS

TypeScript

PASS

Production Build

PASS

---

# CURRENT ISSUES

- Hero Image/Video 영역, YouTube 대표/보조 영상 카드는 실제 자산 없이 placeholder만 구현됨 (실제 이미지/영상/채널 URL 확보 필요)
- 유튜브 채널 이동 CTA는 실제 채널 URL이 없어 비활성(disabled) 버튼으로만 구현됨 — URL 확보 시 실제 링크로 교체 필요
- 390/375/430px 모바일 검수는 브라우저/스크린샷 도구가 없는 환경 특성상 코드 레벨 감사(고정 폭/nowrap/grid 안전성 점검)로 대체함 — 실기기·브라우저 육안 확인 권장
- ECO/KTV/GOLF/POOL VILLA 서비스 페이지 자체 콘텐츠(소개 문구, 이미지)는 여전히 최소 상태

---

# TODO

Hero/YouTube 실제 이미지·영상·채널 URL 확보 후 교체

실제 후기 데이터 연동(등록되는 대로)

ECO/KTV/GOLF/POOL VILLA 등 서비스 페이지 콘텐츠 보강

390/375/430px 실기기 육안 검수(가능한 환경에서)

---

# NEXT PRIORITY

Priority 1

ECO 페이지 콘텐츠/이미지 보강 (FEATURE_SPEC ECO PAGE 요구사항 충족)

Priority 2

Hero/YouTube 실제 미디어 자산 연동

Priority 3

REVIEW 데이터 구조(타입) 준비 및 실제 후기 연동 설계

---

# DESIGN STATUS

Header

✅

Hero

✅

Main Services

✅

YouTube

✅ (실제 자산 대기, 구조만 완성)

Review

✅ (실제 자산 대기, 구조만 완성)

Contact CTA

✅

Footer

✅

Mobile Bottom Navigation

✅

Spacing/Typography/Button 통일

✅

---

# FEATURE STATUS

HOME

완료 (구조·스타일 통일 완료, 실제 미디어·후기 데이터만 대기 — 데이터 연동 전까지는 이 상태가 "완성")

ECO

대기

KTV

대기

GOLF

대기

POOL VILLA

대기

CONTACT

대기

ADMIN

대기

---

# DATABASE STATUS

Dummy Data

사용 중

Database

미구현

API

미구현

---

# DEPLOY STATUS

Local

✅

Production

미배포

---

# KNOWN ISSUES

CURRENT ISSUES 섹션 참조

---

# NOTES

- 04_DATABASE_API.md는 컴포넌트 파일명을 PascalCase(Header.tsx 등)로 규정하나, 06_CLAUDE_RULES_QA.md는 "기존 네이밍 규칙 유지"를 명시 — 두 문서 간 상충으로 기존 파일(header.tsx, footer.tsx 등)은 kebab-case를 유지하고, 신규 생성 컴포넌트(ServiceCard.tsx, MobileBottomNav.tsx, EmptyState.tsx)만 PascalCase로 작성함.
- "Mobile Bottom Navigation"은 02_UI_UX_BLUEPRINT.md 원문에 명시되지 않은 패턴이며, Sprint 1-1 작업 지시에 따라 추가됨.
- YouTube 채널 이동 CTA는 실제 URL이 없어 임의 링크를 생성하지 않고 비활성 버튼으로 구현(DO NOT: 가짜 데이터/허위 링크 금지 준수).
- Review 섹션은 실제 후기 데이터 대신 FEATURE_SPEC 명시 문구("등록된 후기가 없습니다.")로 빈 상태만 표시, 가짜 후기 생성하지 않음.
- Sprint 1-3에서 버튼 스케일을 h-12/px-6/rounded-full/text-base로 통일하고 hover+active 상태를 모든 인터랙티브 CTA에 추가. Header 상담하기 버튼만 nav-tier(text-sm)로 의도적으로 예외 유지(로고 text-lg, nav 링크 text-sm과 같은 눈높이 맞춤). ServiceCard 카드 내부 "서비스 보기 →" 마이크로링크도 컴팩트 카드 폭(2열 그리드) 유지를 위해 의도적으로 예외.
- Service 페이지(ECO/KTV/GOLF/POOL VILLA) 공용 CTA 라벨을 "상담 문의하기" → "문의하기"로 표준화(FEATURE_SPEC BUTTON Primary 어휘 준수).
- Hero/YouTube Placeholder를 공용 EmptyState 컴포넌트로 통일(중복 마크업 제거), overflow-hidden 추가로 추후 실제 이미지/영상 삽입 시 레이아웃 안정성 확보.
- 390/375/430px 실측 스크린샷은 브라우저 도구 부재로 제공 불가 — 코드 레벨(고정폭/nowrap/grid) 감사로 대체.

---

# DAILY LOG

## 2026-07-11

### 작업

- docs/02_UI_UX_BLUEPRINT.md ~ docs/06_CLAUDE_RULES_QA.md, docs/CHANGELOG.md 저장 및 단계별 충돌 점검
- ECO/KTV/GOLF/POOL VILLA/CONTACT/REVIEW/ADMIN 라우트 및 공용 컴포넌트 스캐폴드
- Sprint 1-1: HOME Foundation 구현 (Header, Hero, Main Services, Footer, Mobile Bottom Navigation)
- Pretendard 폰트 적용, 고정 라이트 컬러 토큰 적용
- Sprint 1-2: HOME YouTube/Review Section 추가, Contact CTA 재배치로 PAGE STRUCTURE 완성
- Sprint 1-2: CONTACT 폼 필수값 버그 수정, eco/ktv/golf/pool-villa/contact/review/admin 색상 정리
- Sprint 1-3: 모바일 코드 레벨 점검(375/390/430px), Section/Button 스타일 토큰 통일(spacing, size, padding, radius, hover, active)
- Sprint 1-3: Service Button 라벨 표준화("문의하기"), /review 페이지 FEATURE_SPEC 빈 상태 문구 적용, Hero/YouTube Placeholder를 EmptyState로 통일

### 수정 파일

- MODIFIED FILES 섹션 참조

### 검증

ESLint

PASS

TypeScript

PASS

Build

PASS

### 다음 작업

ECO 페이지 콘텐츠/이미지 보강, Hero/YouTube 실제 미디어 자산 연동

---

# HANDOVER

다음 작업자는

CHANGELOG를 먼저 확인한다.

↓

PROJECT_MASTER

↓

UI_UX_BLUEPRINT

↓

FEATURE_SPEC

↓

DATABASE_API

↓

현재 작업

순서로 진행한다.

---

# IMPORTANT

작업 중

문제가 발생하면

기존 설계를 임의 변경하지 않는다.

새로운 기능을 임의 추가하지 않는다.

항상 문서를 기준으로 개발한다.

---

END OF DOCUMENT
