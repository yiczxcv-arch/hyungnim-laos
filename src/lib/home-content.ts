// TODO: Replace with real database/CMS content.
// HOME-only content, isolated from site-config.ts / dummy-data.ts so other pages are unaffected.

import { CarIcon, FlagIcon, HomeIcon, MicIcon, UsersIcon } from "@/components/icons";

export type LaosInsightItem = {
  id: string;
  image: string;
  isDummyImage: boolean;
  title: string;
  description: string;
  time: string;
};

// TODO: Replace with real database/CMS. (라오스 인사이트 콘텐츠 허브 — 여행·생활·KTV·골프·풀빌라·
// 환전·맛집·카페·유심·픽업·현지 소식·여행 팁·영상 등 다양한 콘텐츠를 자유롭게 등록하는 목록)
export const laosInsights: LaosInsightItem[] = [
  {
    id: "nightmarket",
    image: "/images/today/today-eco.png",
    isDummyImage: true,
    title: "비엔티안 에코 서비스",
    description: "현지 에코·미팅 예약 안내",
    time: "7시간 전",
  },
  {
    id: "thatluang",
    image: "/images/today/today-ktv.png",
    isDummyImage: true,
    title: "비엔티안 KTV 추천",
    description: "실시간 예약 가능한 추천 업소",
    time: "12시간 전",
  },
  {
    id: "poolvilla",
    image: "/images/banners/poolvilla-banner.png",
    isDummyImage: false,
    title: "풀빌라 성수기 시작",
    description: "지금 예약이 가장 많습니다. 예약은 서두르세요!",
    time: "1일 전",
  },
];

export type HomeServiceTile = {
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  // MASTER DESIGN: all five render as plain colored line icons with no circle background.
  iconStyle: "badge" | "plain";
  colorClassName: string;
  label: string;
  description: string;
  href: string;
};

export const homeServices: HomeServiceTile[] = [
  {
    slug: "eco",
    icon: UsersIcon,
    iconStyle: "plain",
    colorClassName: "text-amber-600",
    label: "에코 / 미팅",
    description: "현지 동행 서비스",
    href: "/eco",
  },
  {
    slug: "ktv",
    icon: MicIcon,
    iconStyle: "plain",
    colorClassName: "text-amber-600",
    label: "KTV / 가라오케",
    description: "현지 추천 KTV 예약",
    href: "/ktv",
  },
  {
    slug: "pool-villa",
    icon: HomeIcon,
    iconStyle: "plain",
    colorClassName: "text-amber-600",
    label: "풀빌라",
    description: "프라이빗 풀빌라 예약",
    href: "/pool-villa",
  },
  {
    slug: "golf",
    icon: FlagIcon,
    iconStyle: "plain",
    colorClassName: "text-amber-600",
    label: "골프",
    description: "골프장 예약",
    href: "/golf",
  },
  {
    // 실제 서비스 페이지가 생기기 전까지 상담 문의(/contact)로 연결됩니다.
    slug: "pickup",
    icon: CarIcon,
    iconStyle: "plain",
    colorClassName: "text-amber-600",
    label: "픽업 / 차량",
    description: "공항 픽업 & 차량 서비스",
    href: "/contact",
  },
];

export type MagazineArticle = {
  id: string;
  image: string;
  isDummyImage: boolean;
  tag: string;
  tagClassName: string;
  title: string;
  description: string;
  date: string;
};

// TODO: Replace with real database/CMS. (라오스 매거진 게시글 목록)
export const magazineArticles: MagazineArticle[] = [
  {
    id: "ktv-guide",
    image: "/images/banners/ktv-banner.png",
    isDummyImage: false,
    tag: "KTV",
    tagClassName: "border-amber-300 text-amber-600",
    title: "비엔티안 KTV 추천 총정리",
    description: "현지인이 추천하는 KTV BEST 5",
    date: "2026.07.09",
  },
  {
    id: "golf-guide",
    image: "/images/banners/golf-banner.png",
    isDummyImage: false,
    tag: "골프",
    tagClassName: "border-emerald-300 text-emerald-600",
    title: "라오스 골프장 가이드",
    description: "비엔티안 골프장 완벽 비교",
    date: "2026.07.08",
  },
  {
    id: "poolvilla-guide",
    image: "/images/banners/poolvilla-banner.png",
    isDummyImage: false,
    tag: "풀빌라",
    tagClassName: "border-sky-300 text-sky-600",
    title: "비엔티안 풀빌라 추천",
    description: "가성비 좋은 풀빌라 BEST 5",
    date: "2026.07.07",
  },
  {
    id: "currency-guide",
    image: "/images/magazine/magazine-currency.svg",
    isDummyImage: true,
    tag: "여행 팁",
    tagClassName: "border-orange-300 text-orange-600",
    title: "라오스 환전 & 물가",
    description: "여행 전 꼭 알아야 할 환전 꿀팁",
    date: "2026.07.06",
  },
];

export type HomeYoutubeVideo = {
  id: string;
  thumbnail: string;
  isDummyImage: boolean;
  title: string;
  subtitle: string;
  duration: string;
};

// TODO: Replace with real database. (YouTube Data API results)
export const homeYoutubeVideos: HomeYoutubeVideo[] = [
  {
    id: "ktv-vibe",
    thumbnail: "/images/videos/video-ktv.png",
    isDummyImage: false,
    title: "비엔티안 KTV 분위기",
    subtitle: "실제 분위기 영상",
    duration: "00:21",
  },
  {
    id: "poolvilla-tour",
    thumbnail: "/images/videos/video-poolvilla.png",
    isDummyImage: false,
    title: "비엔티안 풀빌라 투어",
    subtitle: "프라이빗 풀빌라 스케치",
    duration: "00:18",
  },
  {
    id: "golf-round",
    // golf-banner.png는 인물이 크게 부각된 구도라 MASTER DESIGN의 풍경형 썸네일과 맞지 않아 미사용.
    thumbnail: "/images/youtube/video-golf-landscape.svg",
    isDummyImage: true,
    title: "라오스 골프 1인 라운딩",
    subtitle: "실제 라운딩 영상",
    duration: "00:17",
  },
  {
    id: "nightmarket-food",
    thumbnail: "/images/youtube/video-nightmarket-food.svg",
    isDummyImage: true,
    title: "비엔티안 야시장 맛집",
    subtitle: "현지 맛집 탐방",
    duration: "00:15",
  },
];

export type HomeReview = {
  id: string;
  name: string;
  service: string;
  serviceClassName: string;
  date: string;
  rating: number;
  content: string;
  avatarClassName: string;
};

// TODO: Replace with real review database/API.
// Demo placeholder content only — one review per core service, masked names,
// no exaggerated claims, no fabricated contact/personal info.
export const homeReviews: HomeReview[] = [
  {
    id: "ktv",
    name: "김OO",
    service: "KTV",
    serviceClassName: "border-amber-300 text-amber-600",
    date: "2026.07.14",
    rating: 5,
    content:
      "처음 방문이라 걱정했는데 위치와 이용 방법을 미리 알려주셔서 편했습니다. 예약 확인도 빨라서 일정 진행이 수월했습니다.",
    avatarClassName: "bg-amber-100 text-amber-600",
  },
  {
    id: "eco",
    name: "이OO",
    service: "에코·미팅",
    serviceClassName: "border-rose-300 text-rose-600",
    date: "2026.07.11",
    rating: 5,
    content:
      "궁금한 내용을 카카오톡으로 물어봤는데 답변이 빠르고 설명이 이해하기 쉬웠습니다. 현지에서 연락이 잘돼 안심됐습니다.",
    avatarClassName: "bg-rose-100 text-rose-600",
  },
  {
    id: "pool-villa",
    name: "박OO",
    service: "풀빌라",
    serviceClassName: "border-sky-300 text-sky-600",
    date: "2026.07.08",
    rating: 5,
    content:
      "사진과 조건을 비교해서 안내받아 선택하기 편했습니다. 체크인 전 필요한 내용도 다시 알려주셔서 좋았습니다.",
    avatarClassName: "bg-sky-100 text-sky-600",
  },
  {
    id: "golf",
    name: "최OO",
    service: "골프",
    serviceClassName: "border-emerald-300 text-emerald-600",
    date: "2026.07.02",
    rating: 5,
    content:
      "티오프 시간과 이동 일정을 한 번에 정리해 주셔서 편했습니다. 처음 가는 골프장이었지만 어렵지 않게 이용했습니다.",
    avatarClassName: "bg-emerald-100 text-emerald-600",
  },
];
