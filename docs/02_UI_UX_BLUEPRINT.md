# 02_UI_UX_BLUEPRINT.md

# HYUNGNIM LAOS
## UI / UX BLUEPRINT

Version: 1.0

---

# PURPOSE

이 문서는 HYUNGNIM LAOS의 UI/UX 기준을 정의한다.

Claude Code는 이 문서를 디자인 가이드로 사용하며,
구현은 이후 FEATURE_SPEC 문서를 기준으로 진행한다.

현재 단계에서는 기존 프로젝트 구조를 변경하지 않는다.

---

# DESIGN GOAL

홈페이지는 화려한 사이트가 아니라

신뢰

현지성

프리미엄

직관성

빠른 예약

을 전달하는 것이 목적이다.

---

# DESIGN KEYWORDS

Premium

Modern

Minimal

Luxury

Clean

Simple

Trust

Mobile First

Fast

Responsive

---

# MOBILE FIRST

모든 화면은 모바일을 기준으로 제작한다.

Desktop은 모바일 디자인을 확장하는 방식으로 구현한다.

우선 해상도

390px

기준

이후

768px

1024px

1440px

순으로 대응한다.

---

# PAGE STRUCTURE

HOME

↓

HEADER

↓

HERO

↓

MAIN SERVICES

↓

YOUTUBE

↓

REVIEW

↓

CONTACT CTA

↓

FOOTER

---

서비스 페이지

ECO

KTV

GOLF

POOL VILLA

모두 동일한 구조를 사용한다.

---

# HEADER

고정(Sticky)

좌측

로고

우측

상담하기

메뉴

모바일에서는 햄버거 메뉴를 사용한다.

---

# HERO

첫 화면에서

현지 운영

신뢰

상담 가능

을 바로 전달한다.

CTA는 항상

상담하기

가 우선이다.

---

# MAIN SERVICES

메인 서비스는

ECO

KTV

GOLF

POOL VILLA

총 4개만 사용한다.

추가 서비스는 만들지 않는다.

모바일은

2 x 2 Grid

를 기본으로 한다.

---

# SERVICE PAGE

모든 서비스 페이지는 동일한 구조를 사용한다.

Hero

↓

소개

↓

사진

↓

예약 안내

↓

문의하기

↓

Footer

---

# REVIEW

실제 후기만 사용한다.

가짜 리뷰를 만들지 않는다.

작성자 개인정보는 최소한으로 노출한다.

---

# CONTACT

문의는 가장 중요한 CTA이다.

모든 페이지에서

쉽게 찾을 수 있어야 한다.

---

# FOOTER

Footer에는

브랜드 소개

서비스

문의

Copyright

만 사용한다.

불필요한 메뉴를 추가하지 않는다.

---

# COMPONENT RULE

공통 컴포넌트를 우선 사용한다.

중복 컴포넌트를 만들지 않는다.

새 컴포넌트가 필요하면

재사용 가능한 형태로 만든다.

---

# DESIGN RULE

과한 애니메이션 금지

과한 그림자 금지

과한 Gradient 금지

여백을 충분히 사용한다.

텍스트보다

사진을 우선한다.

---

# IMAGE RULE

실제 사진을 우선 사용한다.

이미지는

고화질

밝은 느낌

현지 분위기

를 유지한다.

AI 느낌이 강한 이미지는 사용하지 않는다.

---

# BUTTON RULE

Primary Button

Gold

Secondary

Black

Outline

White

버튼 높이는

48px 이상

모바일 터치 영역은

44px 이상

---

# TYPOGRAPHY

폰트

Pretendard

제목

Bold

본문

Regular

가독성을 가장 우선한다.

---

# COLOR

Primary

Gold

Background

White

Text

Black

Border

Gray

Success

Green

Error

Red

---

# RESPONSIVE

Desktop 때문에

모바일 구조를 변경하지 않는다.

모바일이 항상 우선이다.

---

# PERFORMANCE

빠른 로딩

최적화된 이미지

Lazy Load

SEO

Accessibility

를 기본으로 한다.

---

# DO NOT

레이아웃 임의 변경 금지

디자인 임의 변경 금지

서비스 추가 금지

페이지 추가 금지

가짜 데이터 생성 금지

가짜 후기 생성 금지

가짜 통계 생성 금지

---

# CLAUDE CODE

현재 단계에서는

UI 기준만 이해한다.

기존 프로젝트를 유지한다.

코드를 수정하지 않는다.

다음 FEATURE_SPEC 문서를 받은 후

기능 구현을 시작한다.

---

END OF DOCUMENT
