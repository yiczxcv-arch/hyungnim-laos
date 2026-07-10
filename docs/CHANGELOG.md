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

docs/02~06, CHANGELOG.md 저장 및 충돌 점검

ECO/KTV/GOLF/POOL VILLA/CONTACT/REVIEW/ADMIN 라우트 스캐폴드

Sprint 1-1: HOME Foundation (Header, Hero, Main Services, Footer, Mobile Bottom Navigation) 구현

Pretendard 폰트 적용, 고정 라이트 컬러 토큰 적용(다크모드 제거)

Build PASS

---

# MODIFIED FILES

src/app/layout.tsx

src/app/page.tsx

src/app/globals.css

src/app/fonts.ts

src/components/header.tsx

src/components/footer.tsx

src/components/ServiceCard.tsx

src/components/MobileBottomNav.tsx

src/components/container.tsx

src/components/service-page.tsx

src/components/contact-form.tsx

src/lib/site-config.ts

src/app/{eco,ktv,golf,pool-villa,contact,review,admin}/page.tsx

package.json / package-lock.json (pretendard 추가)

docs/02_UI_UX_BLUEPRINT.md ~ docs/06_CLAUDE_RULES_QA.md, docs/CHANGELOG.md

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

- CONTACT 폼의 "문의내용" 필드에 required 속성 누락 (FEATURE_SPEC FORM 요구사항과 불일치, CONTACT가 스코프에 포함되는 다음 Sprint에서 수정 필요)
- ECO/KTV/GOLF/POOL VILLA/CONTACT/REVIEW/ADMIN 페이지는 아직 다크모드 클래스(dark:) 및 구 버튼 색상 체계가 남아있음 (이번 Sprint 범위는 HOME만 해당, 해당 페이지들은 각자 Sprint에서 정리 예정)
- Hero Image/Video 영역은 실제 자산 없이 placeholder만 구현됨 (실제 이미지/영상 자산 필요)

---

# TODO

Main Services 카드 콘텐츠 보강(실제 자산 확보 후)

YouTube Section 제작

Review Section 제작

ECO/KTV/GOLF/POOL VILLA/CONTACT/REVIEW/ADMIN 페이지 UI_UX_BLUEPRINT 기준 정리(색상 고정, 버튼 라벨 표준화)

CONTACT 폼 필수값 버그 수정

---

# NEXT PRIORITY

Priority 1

HOME: YouTube Section, Review Section 추가

Priority 2

ECO 페이지 UI_UX_BLUEPRINT/FEATURE_SPEC 기준 재정비

Priority 3

CONTACT 폼 필수값 버그 수정

---

# DESIGN STATUS

Header

✅

Hero

✅

Main Services

✅

YouTube

⬜

Review

⬜

Footer

✅

Mobile Bottom Navigation

✅

---

# FEATURE STATUS

HOME

진행중 (Header/Hero/Main Services/Footer/Mobile Bottom Navigation 완료, YouTube/Review 섹션 대기)

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

- 04_DATABASE_API.md는 컴포넌트 파일명을 PascalCase(Header.tsx 등)로 규정하나, 06_CLAUDE_RULES_QA.md는 "기존 네이밍 규칙 유지"를 명시 — 두 문서 간 상충으로 기존 파일(header.tsx, footer.tsx 등)은 kebab-case를 유지하고, 이번 Sprint에서 신규 생성한 컴포넌트(ServiceCard.tsx, MobileBottomNav.tsx)만 PascalCase로 작성함.
- "Mobile Bottom Navigation"은 02_UI_UX_BLUEPRINT.md 원문에 명시되지 않은 패턴이며, Sprint 1-1 작업 지시에 따라 추가됨.
- Hero Image/Video 영역은 실제 이미지/영상 없이 레이아웃만 예약(placeholder)한 상태.

---

# DAILY LOG

## 2026-07-11

### 작업

- docs/02_UI_UX_BLUEPRINT.md ~ docs/06_CLAUDE_RULES_QA.md, docs/CHANGELOG.md 저장 및 단계별 충돌 점검
- ECO/KTV/GOLF/POOL VILLA/CONTACT/REVIEW/ADMIN 라우트 및 공용 컴포넌트 스캐폴드
- Sprint 1-1: HOME Foundation 구현 (Header, Hero, Main Services, Footer, Mobile Bottom Navigation)
- Pretendard 폰트 적용, 고정 라이트 컬러 토큰 적용

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

HOME YouTube / Review Section 구현

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
