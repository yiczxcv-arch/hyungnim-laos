# 03_FEATURE_SPEC.md

# HYUNGNIM LAOS
## FEATURE SPECIFICATION

Version: 1.0

---

# PURPOSE

이 문서는 HYUNGNIM LAOS의 기능 명세서이다.

Claude Code는 UI를 임의로 변경하지 않고,
아래 기능만 구현한다.

새로운 기능은 PM 승인 없이 추가하지 않는다.

---

# CORE SERVICES

플랫폼은 아래 4개의 서비스만 제공한다.

1. ECO

2. KTV

3. GOLF

4. POOL VILLA

---

# HOME

HOME은 플랫폼의 중심 페이지이다.

구성

Header

↓

Hero

↓

Main Services

↓

YouTube

↓

Review

↓

Contact CTA

↓

Footer

---

# HERO

기능

브랜드 소개

상담 버튼

서비스 이동

스크롤 유도

---

CTA

문의하기

서비스 보기

---

# MAIN SERVICES

서비스 카드

ECO

KTV

GOLF

POOL VILLA

카드를 누르면

해당 서비스 페이지로 이동한다.

---

# ECO PAGE

기능

서비스 소개

이미지

안내

문의하기

예약 문의

Footer

---

# KTV PAGE

기능

서비스 소개

이미지

안내

문의하기

예약 문의

Footer

---

# GOLF PAGE

기능

서비스 소개

이미지

안내

문의하기

예약 문의

Footer

---

# POOL VILLA PAGE

기능

서비스 소개

이미지

안내

문의하기

예약 문의

Footer

---

# REVIEW

후기 목록

후기 상세

사진

별점

작성일

---

후기가 없을 경우

등록된 후기가 없습니다.

를 표시한다.

---

# CONTACT

문의 페이지

이름

연락처

서비스 선택

문의 내용

문의하기 버튼

---

현재 단계에서는

Client Side만 구현한다.

Database 연결은 하지 않는다.

---

# FORM

필수 입력

이름

연락처

서비스

문의내용

필수값이 없으면

전송되지 않는다.

---

# BUTTON

Primary

문의하기

예약 문의

상담하기

---

Secondary

서비스 보기

목록 보기

뒤로가기

---

# HEADER

로고 클릭

HOME 이동

상담하기

CONTACT 이동

메뉴

페이지 이동

---

# FOOTER

서비스 이동

문의하기

Copyright

---

# NAVIGATION

현재 페이지 활성화

모바일 메뉴 지원

Sticky Header

---

# RESPONSIVE

Mobile First

Tablet

Desktop

반응형 지원

---

# IMAGE

Next Image 사용

Lazy Load

고화질

실제 이미지 사용

---

# LOADING

페이지 로딩

버튼 로딩

이미지 로딩

---

Skeleton UI 사용 가능

---

# EMPTY STATE

후기 없음

이미지 없음

문의 없음

서비스 없음

적절한 안내 문구 표시

---

# ERROR

404

500

Network Error

Image Error

적절한 메시지 표시

---

# SEO

Title

Description

Open Graph

Canonical

Sitemap

Robots

적용

---

# PERFORMANCE

빠른 로딩

이미지 최적화

Code Split

Dynamic Import

Lazy Loading

---

# ACCESSIBILITY

Alt

Keyboard

Focus

ARIA

Color Contrast

적용

---

# ADMIN

현재 단계에서는

Placeholder만 유지한다.

로그인

권한

Database

구현하지 않는다.

---

# FUTURE

예약 시스템

관리자

DB

API

Authentication

결제

후속 단계에서 구현한다.

---

# CLAUDE CODE

현재 문서 기준으로

기능만 구현한다.

새로운 페이지를 만들지 않는다.

새로운 기능을 추가하지 않는다.

기존 구조를 유지한다.

기존 컴포넌트를 우선 사용한다.

ESLint PASS

TypeScript PASS

Production Build PASS

를 항상 유지한다.

---

END OF DOCUMENT
