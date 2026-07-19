import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { ConsultButtons } from "@/components/consult-buttons";
import { Reveal } from "@/components/Reveal";
import {
  BadgeIcon,
  CalendarIcon,
  ChatIcon,
  CheckIcon,
  ChevronRightIcon,
  EyeIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
  UsersIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "KTV 예약",
  description: "비엔티안 프리미엄 KTV를 한국어로 편하게 예약하세요.",
};

const ktvFeatures = [
  { label: "한국인 여행객 대상", icon: UserIcon },
  { label: "편리한 예약", icon: CalendarIcon },
  { label: "다양한 KTV 선택", icon: BadgeIcon },
  { label: "편안한 상담", icon: PhoneIcon },
];

// Only 4 dedicated KTV photos exist in the project; reused across
// Hero / Intro / 추천 KTV / Gallery / CTA rather than adding new images.
const heroImage = "/images/banners/ktv-banner.png";
const ctaImage = "/images/videos/video-ktv.png";

const recommendedKtv = [
  {
    name: "K1",
    desc: "현지에서 인기 있는 프리미엄 KTV",
    tags: ["프라이빗 룸", "최신 음향 시설", "편안한 좌석"],
    image: "/images/banners/ktv-banner.png",
  },
  {
    name: "골든",
    desc: "고급스러운 인테리어의 프라이빗 KTV",
    tags: ["넓은 공간", "프라이빗 룸", "쾌적한 시설"],
    image: "/images/services/service-ktv.png",
  },
  {
    name: "오아시스",
    desc: "편안한 분위기로 꾸준히 인기 있는 KTV",
    tags: ["최신 음향 시설", "편안한 좌석", "쾌적한 시설"],
    image: "/images/videos/video-ktv.png",
  },
  {
    name: "보스",
    desc: "넓은 룸과 쾌적한 시설을 갖춘 KTV",
    tags: ["단체 가능", "넓은 공간", "프라이빗 룸"],
    image: "/images/today/today-ktv.png",
  },
  {
    name: "팡팡",
    desc: "단체 모임에도 좋은 대형 KTV",
    tags: ["단체 가능", "넓은 공간", "최신 음향 시설"],
    image: "/images/banners/ktv-banner.png",
  },
];

const galleryImages = [
  { src: "/images/banners/ktv-banner.png", width: 1672, height: 941, alt: "룸 분위기" },
  { src: "/images/services/service-ktv.png", width: 1254, height: 1254, alt: "인테리어" },
  { src: "/images/videos/video-ktv.png", width: 1672, height: 941, alt: "프라이빗 룸" },
  { src: "/images/today/today-ktv.png", width: 1330, height: 1182, alt: "단체 이용" },
];

const usageInfo = [
  { label: "예약 가능", icon: CalendarIcon },
  { label: "단체 가능", icon: UsersIcon },
  { label: "한국어 상담", icon: ChatIcon },
  { label: "편리한 위치", icon: MapPinIcon },
  { label: "빠른 예약", icon: CheckIcon },
];

const bookingSteps = [
  { no: "01", title: "문의", caption: "카카오톡 또는 텔레그램 문의", icon: ChatIcon },
  { no: "02", title: "KTV 선택", caption: "원하는 KTV와 일정 안내", icon: EyeIcon },
  { no: "03", title: "예약 확인", caption: "예약 내용 최종 확인", icon: CheckIcon },
  { no: "04", title: "방문", caption: "예약 시간에 편하게 방문", icon: MapPinIcon },
];

const faqItems = [
  { q: "당일 예약 가능한가요?", a: "가능한 경우가 많지만, 시간대와 룸 상황에 따라 다를 수 있어 먼저 문의해주시면 빠르게 확인해드립니다." },
  { q: "단체 예약 가능한가요?", a: "인원과 일정을 알려주시면 단체에 맞는 룸으로 안내해드립니다." },
  { q: "한국어 상담 가능한가요?", a: "네, 한국어로 편하게 상담 및 예약 진행이 가능합니다." },
  { q: "예약은 어떻게 하나요?", a: "카카오톡 또는 텔레그램으로 문의주시면 원하시는 KTV와 일정을 확인 후 안내해드립니다." },
  { q: "운영시간은?", a: "운영시간은 KTV마다 다를 수 있어 문의 시 정확히 안내해드립니다." },
];

function FeatureItem({ label, icon: Icon }: { label: string; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="flex w-14 flex-col items-center gap-1.5 sm:w-20 sm:gap-2">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-white/5 sm:h-14 sm:w-14">
        <Icon className="h-4 w-4 text-[#D4AF37] sm:h-6 sm:w-6" />
      </span>
      <span className="text-center text-[10px] leading-tight font-medium break-keep text-[#B3B3B3] sm:text-xs">{label}</span>
    </div>
  );
}

function AmenityCard({ label, icon: Icon }: { label: string; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="flex flex-col items-center gap-2.5 rounded-xl border border-white/10 bg-[#141414] px-3 py-5 text-center transition-transform duration-300 hover:-translate-y-1 sm:rounded-2xl sm:py-6">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-white/5 sm:h-12 sm:w-12">
        <Icon className="h-5 w-5 text-[#D4AF37] sm:h-6 sm:w-6" />
      </span>
      <span className="text-xs font-semibold break-keep text-white sm:text-sm">{label}</span>
    </div>
  );
}

export default function KtvPage() {
  return (
    <main className="bg-[#0B0B0B] pb-[env(safe-area-inset-bottom)]">
      {/* 01. Hero */}
      <section id="hero" className="relative overflow-hidden bg-[#0B0B0B] text-white">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="비엔티안 프리미엄 KTV 룸"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[45%_50%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/55 to-[#0B0B0B]/15" />
        </div>

        <Container className="relative flex flex-col items-center gap-4 pt-10 pb-8 text-center sm:gap-6 sm:pt-28 sm:pb-16">
          <Reveal className="flex flex-col items-center">
            <h1 className="text-4xl leading-tight font-bold tracking-tight sm:text-6xl sm:leading-none">
              비엔티안 프리미엄
              <br />
              KTV 예약
            </h1>
            <p className="mt-2.5 max-w-md text-sm leading-snug text-white/80 sm:mt-4 sm:text-lg sm:leading-relaxed">
              원하는 분위기의 KTV를 한국어로 편하게 예약해드립니다.
            </p>
          </Reveal>

          <Reveal delay={150} className="flex w-full max-w-xs flex-col gap-2 sm:gap-3">
            <Link
              href="/contact"
              className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#F4C542] px-7 text-sm font-semibold text-[#0B0B0B] transition-colors hover:brightness-95 sm:h-12"
            >
              <ChatIcon className="h-4 w-4" />
              예약 문의하기
            </Link>
            <a
              href="#gallery"
              className="flex h-11 items-center justify-center gap-2 rounded-full border border-white/25 px-7 text-sm font-semibold text-white transition-colors hover:border-[#F4C542] hover:text-[#F4C542] sm:h-12"
            >
              <EyeIcon className="h-4 w-4" />
              갤러리 보기
            </a>
          </Reveal>
        </Container>
      </section>

      {/* 02. 서비스 소개 */}
      <section className="bg-[#0B0B0B] py-10 text-white sm:py-24">
        <Container>
          <Reveal className="text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#F4C542] uppercase">About KTV</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:mt-3 sm:text-3xl">KTV 서비스란?</h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-normal text-[#B3B3B3] sm:mt-4 sm:text-base">
              비엔티안 현지 프리미엄 KTV를 한국어로 편하게 예약하고 상담받으세요.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-3 sm:mt-8 sm:gap-x-6 sm:gap-y-4">
            {ktvFeatures.map((f) => (
              <FeatureItem key={f.label} label={f.label} icon={f.icon} />
            ))}
          </Reveal>
        </Container>
      </section>

      {/* 03. 추천 KTV */}
      <section className="border-t border-white/10 bg-[#0B0B0B] py-10 text-white sm:py-24">
        <Container>
          <Reveal className="text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#F4C542] uppercase">Recommended</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:mt-3 sm:text-3xl">추천 KTV</h2>
          </Reveal>
        </Container>

        <div className="mt-6 sm:mt-10">
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:gap-4 sm:justify-center sm:px-6">
            {recommendedKtv.map((venue, i) => (
              <Reveal
                key={venue.name}
                delay={i * 80}
                className="flex w-[70%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#141414] sm:w-64"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    sizes="(max-width: 640px) 70vw, 256px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <p className="text-base font-bold text-white">{venue.name}</p>
                  <p className="text-xs leading-snug text-[#B3B3B3]">{venue.desc}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                    {venue.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#D4AF37]/30 px-2 py-0.5 text-[10px] font-medium text-[#D4AF37]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04. Gallery */}
      <section id="gallery" className="border-t border-white/10 bg-[#0B0B0B] py-10 text-white sm:py-24">
        <Container>
          <Reveal className="text-center">
            <h2 className="text-2xl font-bold tracking-[0.2em] text-white sm:text-3xl">GALLERY</h2>
            <p className="mt-1.5 text-sm text-[#F4C542] sm:mt-2 sm:text-base">KTV 분위기</p>
          </Reveal>

          <div className="mt-6 columns-2 gap-1.5 sm:mt-10 sm:gap-3 lg:columns-4">
            {galleryImages.map((img, i) => (
              <Reveal
                key={img.src + img.alt}
                delay={i * 60}
                className="group relative mb-1.5 block overflow-hidden rounded-lg break-inside-avoid sm:mb-3 sm:rounded-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 05. 이용 안내 */}
      <section className="border-t border-white/10 bg-[#0B0B0B] py-10 text-white sm:py-24">
        <Container>
          <Reveal className="text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">이용 안내</h2>
          </Reveal>

          <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-10 sm:grid-cols-5 sm:gap-4">
            {usageInfo.map((item, i) => (
              <Reveal key={item.label} delay={i * 60}>
                <AmenityCard label={item.label} icon={item.icon} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 06. 예약 절차 */}
      <section className="border-t border-white/10 bg-[#0B0B0B] py-10 text-white sm:py-24">
        <Container>
          <Reveal className="text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#F4C542] uppercase">Process</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:mt-3 sm:text-3xl">예약 절차</h2>
          </Reveal>

          {/* Mobile: 2x2 grid, no arrows */}
          <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-6 sm:hidden">
            {bookingSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.no} delay={i * 80} className="flex flex-col items-center gap-2 text-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-white/5">
                    <Icon className="h-5 w-5 text-[#D4AF37]" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest text-white/40">STEP {step.no}</p>
                    <p className="mt-0.5 text-sm font-bold break-keep text-white">{step.title}</p>
                    <p className="mt-1 text-[11px] leading-snug break-keep text-[#B3B3B3]">{step.caption}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Desktop: 4-across row with arrows */}
          <div className="mt-10 hidden sm:flex sm:items-start sm:justify-center sm:gap-2">
            {bookingSteps.flatMap((step, i) => {
              const Icon = step.icon;
              const node = (
                <div key={step.no} className="flex flex-none flex-col items-center gap-3 text-center sm:w-36">
                  <Reveal delay={i * 100} className="flex flex-col items-center gap-3">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-white/5">
                      <Icon className="h-6 w-6 text-[#D4AF37]" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-widest text-white/40">STEP {step.no}</p>
                      <p className="mt-0.5 text-base font-bold break-keep text-white">{step.title}</p>
                      <p className="mt-0.5 text-xs leading-tight break-keep text-[#B3B3B3]">{step.caption}</p>
                    </div>
                  </Reveal>
                </div>
              );

              if (i === bookingSteps.length - 1) return [node];
              return [
                node,
                <ChevronRightIcon key={`chevron-${step.no}`} className="mt-6 h-5 w-5 shrink-0 text-white/20" />,
              ];
            })}
          </div>
        </Container>
      </section>

      {/* 07. FAQ */}
      <section className="border-t border-white/10 bg-[#0B0B0B] py-10 text-white sm:py-24">
        <Container>
          <Reveal className="text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#F4C542] uppercase">FAQ</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:mt-3 sm:text-3xl">자주 묻는 질문</h2>
          </Reveal>

          <div className="mx-auto mt-6 flex max-w-2xl flex-col gap-2.5 sm:mt-10 sm:gap-3">
            {faqItems.map((item, i) => (
              <Reveal key={item.q} delay={i * 60}>
                <details className="group rounded-xl border border-white/10 bg-[#141414] px-4 py-3 sm:rounded-2xl sm:px-6 sm:py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-white sm:text-base">
                    {item.q}
                    <ChevronRightIcon className="h-4 w-4 shrink-0 text-[#D4AF37] transition-transform duration-300 group-open:rotate-90" />
                  </summary>
                  <p className="mt-2.5 text-xs leading-snug text-[#B3B3B3] sm:text-sm">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 08. CTA */}
      <section className="relative overflow-hidden bg-[#0B0B0B] pt-12 pb-14 text-white sm:py-24">
        <div className="absolute inset-0">
          <Image
            src={ctaImage}
            alt="KTV 예약 문의"
            fill
            sizes="100vw"
            className="object-cover object-[50%_40%]"
          />
          <div className="absolute inset-0 bg-[#0B0B0B]/80" />
        </div>

        <Container className="relative flex flex-col items-center gap-5 text-center sm:gap-6">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">지금 예약하기</h2>
            <p className="mt-2.5 text-sm text-white/70 sm:mt-3 sm:text-base">빠른 답변 드리겠습니다.</p>
          </Reveal>
          <Reveal delay={150} className="w-full max-w-sm">
            <ConsultButtons className="!flex-row gap-3 [&>button]:flex-1 [&>button]:px-3 [&>button]:text-sm sm:[&>button]:px-6 sm:[&>button]:text-base" />
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
