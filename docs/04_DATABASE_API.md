# 04_DATABASE_API.md

# HYUNGNIM LAOS
## DATABASE & API SPECIFICATION

Version: 1.0

---

# PURPOSE

이 문서는 HYUNGNIM LAOS 프로젝트의
데이터 구조와 API 구조를 정의한다.

현재 단계에서는 Database를 구현하지 않는다.

Claude Code는 이 문서를 기준으로
확장 가능한 구조만 준비한다.

실제 DB 연결은 후속 단계에서 진행한다.

---

# DATABASE

현재

Database 연결 없음

Dummy Data 사용 가능

Database는 추후 연결한다.

추천 구조

PostgreSQL

또는

Supabase

---

# PROJECT STRUCTURE

app/

components/

lib/

types/

hooks/

public/

docs/

---

# LIB STRUCTURE

lib/

config/

constants/

data/

utils/

services/

---

# TYPES

types/

service.ts

review.ts

contact.ts

common.ts

---

# DATA

현재는

lib/data/

안에

Dummy Data를 사용한다.

예)

services.ts

reviews.ts

site.ts

---

# CORE DATA

플랫폼 서비스

ECO

KTV

GOLF

POOL VILLA

---

# SERVICE TYPE

Service

id

slug

title

description

coverImage

gallery

category

active

createdAt

updatedAt

---

# REVIEW TYPE

Review

id

service

name

rating

content

images

createdAt

---

현재

실제 리뷰 대신

빈 배열을 사용한다.

가짜 리뷰를 생성하지 않는다.

---

# CONTACT TYPE

Contact

name

phone

service

message

createdAt

---

현재는

Client Side만 사용한다.

Database 저장은 하지 않는다.

---

# SITE CONFIG

SiteConfig

siteName

description

logo

contact

navigation

footer

social

---

하드코딩을 최소화한다.

---

# IMAGE

public/

images/

hero/

services/

review/

logo/

icons/

---

파일명은

소문자

kebab-case

사용

예)

pool-villa.jpg

golf-cover.webp

hero-main.webp

---

# API

현재

API 없음

Mock Data 사용

---

향후 API

GET /services

GET /services/:slug

GET /reviews

POST /contact

---

예약 API는

후속 개발에서 추가한다.

---

# ROUTES

/

/eco

/ktv

/golf

/pool-villa

/review

/contact

/admin

---

새로운 Route는

PM 승인 없이 추가하지 않는다.

---

# STATE

React 기본 기능 사용

불필요한 전역 상태 관리 라이브러리는 추가하지 않는다.

복잡한 상태가 필요한 경우에만

별도 도입을 검토한다.

---

# ENVIRONMENT

환경변수는

.env.local

사용

API Key

Secret

Token

Git 저장소에 업로드하지 않는다.

---

# ASSET

이미지

WebP 우선

AVIF 가능

SVG 아이콘

사용

---

# FILE NAMING

컴포넌트

PascalCase

예)

Header.tsx

Hero.tsx

ServiceCard.tsx

---

Hook

camelCase

예)

useMenu.ts

useScroll.ts

---

Utility

camelCase

예)

formatDate.ts

formatPhone.ts

---

Type

PascalCase

예)

Service.ts

Review.ts

---

# IMPORT

Alias

@

사용

예)

@/components

@/lib

@/types

---

상대경로 남용 금지

---

# ERROR

404

500

Image Error

Network Error

공통 처리 구조 유지

---

# SEO

metadata 사용

robots 설정

sitemap 지원

Open Graph 준비

---

# PERFORMANCE

이미지 최적화

Lazy Loading

Code Split

Dynamic Import

Next Image

사용

---

# FUTURE DATABASE

향후 추가 예정

Reservation

Admin

User

Partner

Gallery

Notice

Banner

Statistics

---

# CLAUDE CODE

현재 단계에서는

Database를 구현하지 않는다.

Database 연결을 가정하여

확장 가능한 구조만 유지한다.

Dummy Data를 사용하되

실제 Database처럼 구조를 설계한다.

기존 폴더 구조를 변경하지 않는다.

ESLint

PASS

TypeScript

PASS

Production Build

PASS

를 항상 유지한다.

---

END OF DOCUMENT
