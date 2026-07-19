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
  PhoneIcon,
  StarIcon,
  UserIcon,
  UsersIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "ECO 동행 서비스",
  description: "비엔티안에서의 특별한 하루, 안전하고 편안하게 함께하는 라오스 에코 동행 서비스.",
};

const ecoFeatures = [
  { label: "한국인 운영", icon: UserIcon },
  { label: "예약제 운영", icon: CalendarIcon },
  { label: "검증된 파트너", icon: BadgeIcon },
  { label: "24시간 상담", icon: PhoneIcon },
];

const timelineItems = [
  { no: "01", image: "/images/eco/timeline/eco-time-01.png", title: "픽업 & 이동", desc: "편안한 시작" },
  { no: "02", image: "/images/eco/timeline/eco-time-02.png", title: "풀빌라", desc: "프라이빗" },
  { no: "03", image: "/images/eco/timeline/eco-time-03.png", title: "투어 & 산책", desc: "현지 분위기 체험" },
  { no: "04", image: "/images/eco/timeline/eco-time-04.png", title: "나이트 투어", desc: "특별한 마무리" },
];

const includedItems = ["차량 픽업 / 샌딩", "일정 동행", "추천 코스 안내", "현지 예약 대행", "24시간 상담 지원"];
const notIncludedItems = ["개인 경비", "추가 시간 초과 비용"];

// Intrinsic pixel dimensions of the source files — used so each photo renders
// at its own natural aspect ratio (no forced crop) inside the masonry grid.
const galleryImages = [
  { src: "/images/eco/gallery/eco-gallery-01.png", width: 1254, height: 1254 },
  { src: "/images/eco/gallery/eco-gallery-02.png", width: 1254, height: 1254 },
  { src: "/images/eco/gallery/eco-gallery-03.png", width: 1254, height: 1254 },
  { src: "/images/eco/gallery/eco-gallery-04.png", width: 1254, height: 1254 },
  { src: "/images/eco/gallery/eco-gallery-05.png", width: 1672, height: 941 },
  { src: "/images/eco/gallery/eco-gallery-06.png", width: 1672, height: 941 },
  { src: "/images/eco/gallery/eco-gallery-07.png", width: 1671, height: 941 },
  { src: "/images/eco/gallery/eco-gallery-08.png", width: 1671, height: 941 },
];

// Step captions follow the approved master plan (design/eco/eco-master-plan.png);
// they were not listed in the priority-3 copy doc, which only specified titles.
const steps = [
  { no: "01", title: "문의하기", caption: "카카오톡 또는 텔레그램 문의", icon: ChatIcon },
  { no: "02", title: "상담 & 일정 조율", caption: "원하는 스타일과 일정 상담", icon: PhoneIcon },
  { no: "03", title: "예약 확정", caption: "예약금 입금 후 일정 확정", icon: CheckIcon },
  { no: "04", title: "서비스 이용", caption: "편안하고 즐거운 시간 보내기", icon: UsersIcon },
];

// TODO: Replace with real review database. Demo placeholder content only.
const reviews = [
  { name: "김OO", content: "처음 라오스 오는 분들에게 정말 추천하고 싶은 서비스였어요." },
  { name: "박OO", content: "친절하게 설명해주셔서 편하게 이용했습니다." },
  { name: "이OO", content: "다음에도 다시 이용하고 싶습니다." },
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

export default function EcoPage() {
  return (
    <main className="bg-[#0B0B0B] pb-[env(safe-area-inset-bottom)]">
      {/* 01. Hero */}
      <section id="hero" className="relative overflow-hidden bg-[#0B0B0B] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/eco/hero/eco-hero-01.png"
            alt="라오스 에코 동행 서비스"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_32%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/55 to-[#0B0B0B]/15" />
        </div>

        <Container className="relative flex flex-col items-center gap-4 pt-10 pb-8 text-center sm:gap-6 sm:pt-28 sm:pb-16">
          <Reveal className="flex flex-col items-center">
            <h1 className="text-4xl leading-tight font-bold tracking-tight sm:text-6xl sm:leading-none">
              ECO
              <br />
              동행 서비스
            </h1>
            <p className="mt-2.5 max-w-md text-sm leading-snug text-white/80 sm:mt-4 sm:text-lg sm:leading-relaxed">
              비엔티안에서의 특별한 하루,
              <br />
              안전하고 편안하게 함께합니다.
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
              href="#service"
              className="flex h-11 items-center justify-center gap-2 rounded-full border border-white/25 px-7 text-sm font-semibold text-white transition-colors hover:border-[#F4C542] hover:text-[#F4C542] sm:h-12"
            >
              <EyeIcon className="h-4 w-4" />
              서비스 둘러보기
            </a>
          </Reveal>

          <Reveal delay={300} className="flex flex-wrap items-start justify-center gap-x-4 gap-y-3 sm:gap-x-5 sm:gap-y-4 sm:pt-2">
            {ecoFeatures.map((f) => (
              <FeatureItem key={f.label} label={f.label} icon={f.icon} />
            ))}
          </Reveal>
        </Container>
      </section>

      {/* 02. 에코 동행 서비스란? */}
      <section id="service" className="bg-[#0B0B0B] py-10 text-white sm:py-24">
        <Container>
          <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl sm:aspect-[16/9]">
            <Image
              src="/images/eco/service/eco-service-01.png"
              alt="에코 동행 서비스"
              fill
              sizes="100vw"
              className="object-cover object-[50%_30%]"
            />
          </Reveal>

          <Reveal delay={100} className="mt-5 sm:mt-10">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#F4C542] uppercase">About Eco</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:mt-3 sm:text-3xl">에코 동행 서비스란?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-normal text-[#B3B3B3] sm:mt-5 sm:text-base sm:leading-relaxed">
              비엔티안 현지의 매력적인 장소를 함께 둘러보고, 풀빌라, 식사, 카페, 나이트 투어까지 여유롭게
              즐기는 동행 서비스입니다.
            </p>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 sm:mt-8 sm:gap-x-6 sm:gap-y-4">
              {ecoFeatures.map((f) => (
                <FeatureItem key={f.label} label={f.label} icon={f.icon} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 03. 어떤 시간을 보내게 되나요? */}
      <section className="border-t border-white/10 bg-[#0B0B0B] py-16 text-white sm:py-24">
        <Container>
          <Reveal className="text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#F4C542] uppercase">Timeline</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">어떤 시간을 보내게 되나요?</h2>
          </Reveal>

          <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-10 sm:gap-6">
            {timelineItems.map((item, i) => (
              <Reveal
                key={item.no}
                delay={i * 80}
                className="group overflow-hidden rounded-xl border border-white/10 bg-[#141414] transition-transform duration-300 hover:-translate-y-1.5 sm:rounded-2xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-square">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-2 top-2 text-xl font-bold text-white/90 drop-shadow sm:left-4 sm:top-4 sm:text-3xl">
                    {item.no}
                  </span>
                </div>
                <div className="p-2.5 sm:p-5">
                  <p className="truncate text-sm font-bold text-white sm:text-lg">{item.title}</p>
                  <p className="mt-0.5 truncate text-xs text-[#B3B3B3] sm:mt-1 sm:text-sm">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 04. 포함 및 불포함 사항 */}
      <section className="border-t border-white/10 bg-[#0B0B0B] py-16 text-white sm:py-24">
        <Container>
          <Reveal className="text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">포함 및 불포함 사항</h2>
          </Reveal>

          <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-10 sm:gap-8">
            <Reveal className="rounded-xl border border-white/10 bg-[#141414] p-3 sm:rounded-2xl sm:p-8">
              <h3 className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 sm:text-lg">
                <CheckIcon className="h-3.5 w-3.5 shrink-0 sm:h-5 sm:w-5" />
                포함 사항
              </h3>
              <ul className="mt-2.5 flex flex-col gap-1.5 sm:mt-5 sm:gap-3">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-1.5 text-xs text-white/75 sm:text-sm">
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400 sm:h-4 sm:w-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100} className="rounded-xl border border-white/10 bg-[#141414] p-3 sm:rounded-2xl sm:p-8">
              <h3 className="flex items-center gap-1.5 text-xs font-bold text-red-400 sm:text-lg">
                <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-red-400 text-[8px] leading-none sm:h-5 sm:w-5 sm:text-xs">
                  ✕
                </span>
                불포함 사항
              </h3>
              <ul className="mt-2.5 flex flex-col gap-1.5 sm:mt-5 sm:gap-3">
                {notIncludedItems.map((item) => (
                  <li key={item} className="flex items-start gap-1.5 text-xs text-white/75 sm:text-sm">
                    <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center text-[8px] leading-none text-red-400 sm:h-4 sm:w-4 sm:text-[10px]">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 05. Gallery */}
      <section className="border-t border-white/10 bg-[#0B0B0B] py-10 text-white sm:py-24">
        <Container>
          <Reveal className="text-center">
            <h2 className="text-2xl font-bold tracking-[0.2em] text-white sm:text-3xl">GALLERY</h2>
            <p className="mt-1.5 text-sm text-[#F4C542] sm:mt-2 sm:text-base">서비스 분위기</p>
          </Reveal>

          <div className="mt-6 columns-2 gap-1.5 sm:mt-10 sm:gap-3 lg:columns-4">
            {galleryImages.map((img, i) => (
              <Reveal
                key={img.src}
                delay={(i % 4) * 60}
                className="group relative mb-1.5 block overflow-hidden rounded-lg break-inside-avoid sm:mb-3 sm:rounded-2xl"
              >
                <Image
                  src={img.src}
                  alt={`에코 동행 서비스 갤러리 ${i + 1}`}
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

      {/* 06. 이용 방법 */}
      <section className="border-t border-white/10 bg-[#0B0B0B] py-16 text-white sm:py-24">
        <Container>
          <Reveal className="text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#F4C542] uppercase">Process</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">이용 방법</h2>
          </Reveal>

          {/* Mobile: 2x2 grid, no arrows */}
          <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-6 sm:hidden">
            {steps.map((step, i) => {
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

          {/* Desktop: existing 4-across row with arrows */}
          <div className="mt-10 hidden sm:flex sm:items-start sm:justify-center sm:gap-2">
            {steps.flatMap((step, i) => {
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
                      <p className="mt-0.5 text-xs leading-tight break-keep text-[#B3B3B3]">
                        {step.caption}
                      </p>
                    </div>
                  </Reveal>
                </div>
              );

              if (i === steps.length - 1) return [node];
              return [
                node,
                <ChevronRightIcon
                  key={`chevron-${step.no}`}
                  className="mt-6 h-5 w-5 shrink-0 text-white/20"
                />,
              ];
            })}
          </div>
        </Container>
      </section>

      {/* 07. 고객 후기 */}
      <section className="border-t border-white/10 bg-[#0B0B0B] py-10 text-white sm:py-24">
        <Container>
          <Reveal className="text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#F4C542] uppercase">Review</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:mt-3 sm:text-3xl">고객 후기</h2>
          </Reveal>
        </Container>

        <div className="mt-6 sm:mt-10">
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:gap-4 sm:justify-center sm:px-6">
            {reviews.map((review, i) => (
              <Reveal
                key={review.name}
                delay={i * 100}
                className="flex w-[84%] shrink-0 snap-start flex-col gap-2 rounded-2xl border border-white/10 bg-[#141414] p-4 sm:w-72 sm:gap-3 sm:p-6"
              >
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5 text-[#F4C542]">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <StarIcon key={idx} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-white/70">5.0</span>
                </div>
                <p className="text-sm leading-snug text-white/80">{review.content}</p>
                <p className="text-sm font-semibold text-[#B3B3B3]">- {review.name} 님</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08. CTA */}
      <section className="relative overflow-hidden bg-[#0B0B0B] pt-12 pb-14 text-white sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/eco/cta/eco-cta-01.png"
            alt="에코 동행 서비스 예약 문의"
            fill
            sizes="100vw"
            className="object-cover object-[50%_35%]"
          />
          <div className="absolute inset-0 bg-[#0B0B0B]/80" />
        </div>

        <Container className="relative flex flex-col items-center gap-5 text-center sm:gap-6">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">지금 바로 예약 문의하세요!</h2>
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
