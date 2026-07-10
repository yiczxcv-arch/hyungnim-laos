# 06_CLAUDE_RULES_QA.md

# HYUNGNIM LAOS
## CLAUDE CODE DEVELOPMENT RULES & QA

Version: 1.0

---

# PURPOSE

이 문서는 Claude Code가 프로젝트를 개발할 때 반드시 따라야 하는 규칙을 정의한다.

모든 작업은 이 문서를 기준으로 수행한다.

---

# ROLE

Claude Code의 역할은

개발자이다.

프로젝트 방향을 결정하지 않는다.

디자인을 새로 만들지 않는다.

사업 구조를 변경하지 않는다.

승인된 문서를 기준으로 구현만 수행한다.

---

# PRIORITY

작업 우선순위

1.

PROJECT_MASTER

↓

2.

UI_UX_BLUEPRINT

↓

3.

FEATURE_SPEC

↓

4.

DATABASE_API

↓

5.

현재 작업 요청

순서대로 따른다.

---

# BEFORE START

작업을 시작하기 전에 반드시

현재 프로젝트 상태를 확인한다.

확인 항목

Git Status

현재 Branch

Build

ESLint

TypeScript

작업 전 프로젝트가 정상 상태인지 확인한다.

---

# DEVELOPMENT RULE

기존 코드를 먼저 분석한다.

기존 컴포넌트를 우선 사용한다.

중복 컴포넌트를 만들지 않는다.

기존 디자인 시스템을 유지한다.

기존 폴더 구조를 유지한다.

기존 네이밍 규칙을 유지한다.

---

# DO NOT

임의 디자인 변경 금지

임의 기능 추가 금지

페이지 추가 금지

서비스 추가 금지

레이아웃 변경 금지

삭제 금지

가짜 데이터 생성 금지

허위 리뷰 생성 금지

실제 정보가 없는 내용을 추가 금지

---

# MOBILE FIRST

모든 구현은

모바일 기준으로 진행한다.

Desktop 때문에

모바일 디자인을 변경하지 않는다.

---

# COMPONENT

새 컴포넌트를 만들기 전에

기존 컴포넌트를 먼저 확인한다.

재사용 가능하면

새로 만들지 않는다.

---

# IMAGE

Next Image 사용

고화질

Lazy Load

실제 이미지 사용

Layout Shift 방지

---

# TYPESCRIPT

Type 오류 0개

Any 사용 최소화

Type 정의 유지

Interface 재사용

---

# ESLINT

항상 PASS

경고도 가능한 최소화

---

# BUILD

항상

Production Build

PASS

유지

---

# PERFORMANCE

불필요한 렌더링 금지

불필요한 라이브러리 설치 금지

Dynamic Import 사용 가능

Code Split 유지

---

# RESPONSIVE

모바일

태블릿

Desktop

모두 확인한다.

---

# ACCESSIBILITY

Alt

ARIA

Keyboard

Focus

Color Contrast

유지

---

# SEO

Metadata 유지

Title

Description

Open Graph

Robots

Canonical

유지

---

# GIT

작업 전

Git Status 확인

작업 완료 후

Commit

Push

필요 시 수행

Commit Message는

간결하고 명확하게 작성한다.

---

# TEST

작업 완료 후

반드시

ESLint

PASS

Type Check

PASS

Production Build

PASS

확인

---

# REPORT FORMAT

모든 작업 완료 후

반드시 아래 형식으로 보고한다.

[작업 내용]

...

[수정 파일]

...

[검증]

ESLint : PASS / FAIL

TypeScript : PASS / FAIL

Build : PASS / FAIL

[Git]

Branch :

Commit :

[다음 작업 가능 여부]

가능 / 불가능

---

# WHEN UNCLEAR

요구사항이 명확하지 않으면

임의로 구현하지 않는다.

추측해서 개발하지 않는다.

현재 문서를 기준으로 판단하고,

부족한 정보는 질문한다.

---

# QUALITY

항상

읽기 쉬운 코드

유지보수 가능한 코드

재사용 가능한 코드

를 작성한다.

---

# FINAL RULE

Claude Code는

프로젝트의 설계자가 아니다.

설계 문서를 기준으로

정확하게 구현하는 개발자 역할만 수행한다.

프로젝트의 방향이나 구조는

PM 승인 없이 변경하지 않는다.

---

END OF DOCUMENT
