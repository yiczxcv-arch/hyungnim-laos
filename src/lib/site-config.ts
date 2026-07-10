export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "HYUNGNIM LAOS",
  description: "라오스 현지 직접 운영 여행·라이프스타일 플랫폼",
};

export const mainNav: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ECO", href: "/eco" },
  { label: "KTV", href: "/ktv" },
  { label: "GOLF", href: "/golf" },
  { label: "POOL VILLA", href: "/pool-villa" },
  { label: "REVIEW", href: "/review" },
  { label: "CONTACT", href: "/contact" },
];

export type Service = {
  slug: string;
  label: string;
  href: string;
  tagline: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "eco",
    label: "ECO",
    href: "/eco",
    tagline: "국제교류 · 국제연애 · 국제결혼",
    description:
      "현지 성인 간의 건전한 국제교류와 만남을 위한 정보 및 상담 서비스입니다.",
  },
  {
    slug: "ktv",
    label: "KTV",
    href: "/ktv",
    tagline: "정식 사업자 노래방 안내",
    description: "라오스 현지 정식 사업자로 운영되는 노래방 정보와 예약 문의.",
  },
  {
    slug: "golf",
    label: "GOLF",
    href: "/golf",
    tagline: "골프장 안내 · 패키지",
    description: "라오스 골프장 정보와 예약 문의, 골프 패키지 안내.",
  },
  {
    slug: "pool-villa",
    label: "POOL VILLA",
    href: "/pool-villa",
    tagline: "풀빌라 · 숙소 · 리조트",
    description: "풀빌라와 숙소, 리조트 예약 문의 서비스.",
  },
];
