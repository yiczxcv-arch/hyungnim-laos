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

Sprint 2: HOME Design Implementation — design/home/KakaoTalk_20260710_221034102.png(승인 시안)을 기준으로 HOME 전면 재구성. Header 로고 락업, Hero 풀블리드 구성, "오늘 올라온 영상" 가로 스크롤(신규), Main Service 원형 카드, Community 섹션(신규, 이번 Sprint 승인), YouTube 2단 레이아웃, Review 헤더 개선, Final CTA 다크바, Mobile Bottom Nav 아이콘화(5탭). 실제 데이터가 없는 항목은 전부 Placeholder/비활성 처리(가짜 통계·후기·링크 미생성).

Playwright(스크래치패드에 임시 설치, 프로젝트 의존성 아님)로 390px 실제 스크린샷 확보 및 검증.

Build PASS

---

# MODIFIED FILES

src/app/page.tsx (전면 재작성)

src/app/globals.css

src/components/header.tsx (로고 락업 추가, 높이 h-20)

src/components/ServiceCard.tsx (텍스트 카드 → 원형 이미지 카드)

src/components/MobileBottomNav.tsx (아이콘화, 5탭, 마이페이지→문의 대체)

src/components/icons.tsx (신규 — 공용 인라인 SVG 아이콘 세트)

src/components/ReviewCard.tsx (신규 — 컴포넌트만 준비, 페이지에는 미사용)

src/lib/site-config.ts (nameKo 추가, 서비스 tagline 축약)

design/home/KakaoTalk_20260710_221034102.png (승인 시안, 신규)

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

- Header 로고는 실제 로고 파일이 없어 텍스트 락업("형님라오스" + "HYUNGNIM LAOS") + 단순 원형 이니셜("형") placeholder로 구현됨 — 실제 로고 파일 확보 시 교체 필요
- Hero 배경, 오늘 올라온 영상 3개, YouTube 대표/보조 영상 전부 placeholder — 실제 이미지/영상 자산 필요
- 카카오톡 형님방 CTA, 유튜브 채널 CTA는 실제 URL이 없어 비활성 버튼으로만 구현
- Community 섹션 통계(참여중/오늘 대화/오늘 후기/오늘 예약)는 실제 데이터가 없어 "-"로 표시 중 — 실시간 카운트 연동 필요(향후 API/DB 단계)
- Mobile Bottom Nav에서 시안의 "마이페이지" 탭은 실제 페이지가 없어 "문의(CONTACT)"로 대체함 — 실제 마이페이지/회원 기능이 필요하면 별도 승인 필요(FEATURE_SPEC 범위 밖, 새 기능)
- ECO/KTV/GOLF/POOL VILLA 서비스 상세 페이지는 이번 Sprint 범위 밖(HOME만 진행) — 여전히 최소 상태

---

# TODO

Header/Hero/오늘의 영상/YouTube 실제 이미지·영상·로고 자산 확보 후 교체

카카오톡 형님방·유튜브 채널 실제 URL 확보 후 CTA 활성화

실시간 통계(참여자 수 등) 연동 방식 결정(API/DB 단계에서)

ECO/KTV/GOLF/POOL VILLA 페이지에도 동일 디자인 시스템 적용(design/eco 등 시안 도착 시)

마이페이지 탭 관련 PM 의사결정 필요(신규 기능 여부)

---

# NEXT PRIORITY

Priority 1

design/eco, design/ktv, design/golf, design/pool-villa 시안 도착 시 동일 방식으로 구현

Priority 2

Header 로고, Hero, YouTube 실제 미디어 자산 연동

Priority 3

Community 실시간 통계 및 카카오톡 링크, REVIEW 데이터 구조 연동 설계(향후 API/DB 단계)

---

# DESIGN STATUS

Header

✅ (승인 시안 반영, 로고 자산만 대기)

Hero

✅ (승인 시안 반영, 이미지 자산만 대기)

오늘 올라온 영상

✅ (신규, 승인 시안 반영, 영상 자산만 대기)

Main Services

✅ (원형 카드로 전환, 승인 시안 반영)

Community

✅ (신규, 이번 Sprint 승인, 실시간 데이터만 대기)

YouTube

✅ (2단 레이아웃으로 전환, 승인 시안 반영)

Review

✅ (헤더 스타일 개선, 실제 후기 데이터 대기)

Final CTA

✅ (다크 바 스타일로 전환, 승인 시안 반영)

Footer

✅

Mobile Bottom Navigation

✅ (아이콘화, 5탭 — 마이페이지 항목은 문의로 대체)

---

# FEATURE STATUS

HOME

완료 (승인 시안 기준 디자인 구현 완료 — 실제 로고·이미지·영상·통계·후기 데이터만 대기)

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

- 04_DATABASE_API.md는 컴포넌트 파일명을 PascalCase(Header.tsx 등)로 규정하나, 06_CLAUDE_RULES_QA.md는 "기존 네이밍 규칙 유지"를 명시 — 두 문서 간 상충으로 기존 파일(header.tsx, footer.tsx 등)은 kebab-case를 유지하고, 신규 생성 컴포넌트(ServiceCard.tsx, MobileBottomNav.tsx, EmptyState.tsx, ReviewCard.tsx, icons.tsx)만 PascalCase/lowercase 유틸 규칙으로 작성함.
- "Mobile Bottom Navigation"은 02_UI_UX_BLUEPRINT.md 원문에 명시되지 않은 패턴이며, Sprint 1-1 작업 지시에 따라 추가됨.
- Sprint 2에서 전달받은 파일명은 실제로 `design/home/KakaoTalk_20260710_221034102.png`였음(지시문의 `home-mobile-final.png`와 불일치) — 해당 파일을 시안으로 사용함.
- "Community(카카오톡 형님방)" 섹션은 02_UI_UX_BLUEPRINT.md 원문 PAGE STRUCTURE에 없던 신규 섹션이나, Sprint 2에서 PM이 명시적으로 승인한 추가 사항으로 처리함.
- 시안 이미지의 실시간 통계(1,842명 등), 오늘 영상 제목/재생시간, YouTube 조회수, 후기 카드(이름/별점/내용)는 전부 디자이너의 예시 데이터였음 — DO NOT(가짜 데이터·가짜 후기·가짜 통계 생성 금지) 규칙에 따라 실제 값 대신 "-"/"준비 중"/빈 상태로 대체 구현함. 레이아웃과 스타일만 시안과 동일하게 유지.
- 시안의 Main Service 아이콘 배지 중 "에코 시스템 = 카페·마사지·스파"로 보이는 표기는 PROJECT_MASTER의 ECO 서비스 정의(국제교류·연애·결혼 상담, 성적 서비스 알선 제외)와 상충하여 반영하지 않음 — 기존 ECO 정의와 태그라인을 유지함(우선순위: PROJECT_MASTER > 시안 디테일).
- Mobile Bottom Nav의 시안 5번째 탭 "마이페이지"는 존재하지 않는 페이지라 "문의(CONTACT)"로 대체함(새 페이지 추가 금지 준수). GOLF는 시안과 동일하게 하단 네비에서 제외(상단/서비스 섹션에는 그대로 유지).
- Header 로고는 실제 로고 파일이 없어 텍스트 락업 + 단순 이니셜 원형 배지로 구현(IMAGE RULE: AI 느낌의 이미지 생성 금지, 실물 자산 도착 시 교체 필요).
- 카카오톡 형님방 CTA, 유튜브 채널 CTA는 실제 URL이 없어 비활성 버튼으로 구현(임의 링크 생성 금지 준수). Final CTA의 카카오톡 상담/전화 상담하기 버튼도 실제 채널/전화번호가 없어 둘 다 /contact로 연결함.
- Review 섹션은 실제 후기 데이터 대신 FEATURE_SPEC 명시 문구("등록된 후기가 없습니다.")로 빈 상태만 표시. ReviewCard.tsx 컴포넌트는 시안 디자인대로 준비해 두었으나 실제 데이터가 없어 페이지에는 사용하지 않음.
- 390px 스크린샷은 이번 Sprint부터 스크래치패드에 Playwright를 임시 설치(프로젝트 package.json에는 추가하지 않음)해 실제 렌더링 결과로 확보함.

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
- Sprint 2: design/home 승인 시안 기준 HOME 전면 재구성(Header/Hero/오늘의 영상/Main Service/Community/YouTube/Review/Final CTA/Mobile Bottom Nav), 실제 데이터 없는 항목은 전부 placeholder/비활성 처리
- Sprint 2: Playwright로 390px 실제 스크린샷 확보, Hero placeholder 텍스트가 체크리스트와 겹치는 문제 발견 후 즉시 수정

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

design/eco 등 나머지 서비스 페이지 시안 도착 시 동일 방식 적용, 실제 로고·이미지·영상 자산 연동

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
