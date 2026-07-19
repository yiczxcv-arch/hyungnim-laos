import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { ConsultButtons } from "@/components/consult-buttons";
import { Reveal } from "@/components/Reveal";
import {
  BadgeIcon,
  CalendarIcon,
  CarIcon,
  ChatIcon,
  CheckIcon,
  ChevronRightIcon,
  CoffeeIcon,
  EyeIcon,
  FlameIcon,
  HomeIcon,
  LeafIcon,
  MicIcon,
  PhoneIcon,
  ShoppingBagIcon,
  SnowflakeIcon,
  StarIcon,
  UserIcon,
  UsersIcon,
  UtensilsIcon,
  WavesIcon,
  WifiIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "풀빌라 예약",
  description: "라오스 비엔티안의 프라이빗 풀빌라를 안전하고 편안하게 예약하세요.",
};

const villaFeatures = [
  { label: "한국인 운영", icon: UserIcon },
  { label: "예약제 운영", icon: CalendarIcon },
  { label: "검증된 파트너", icon: BadgeIcon },
  { label: "24시간 상담", icon: PhoneIcon },
];

const facilities = [
  { label: "프라이빗 수영장", icon: WavesIcon },
  { label: "BBQ", icon: FlameIcon },
  { label: "주방", icon: UtensilsIcon },
  { label: "거실", icon: HomeIcon },
  { label: "와이파이", icon: WifiIcon },
  { label: "에어컨", icon: SnowflakeIcon },
];

const availableServices = [
  { label: "공항 픽업", icon: CarIcon },
  { label: "장보기", icon: ShoppingBagIcon },
  { label: "차량 예약", icon: CalendarIcon },
  { label: "마사지 예약", icon: LeafIcon },
  { label: "KTV 예약", icon: MicIcon },
  { label: "조식", icon: CoffeeIcon },
];

// Only 3 dedicated pool-villa photos exist in the project; reused across
// Hero / Intro / Gallery / CTA rather than adding new or placeholder images.
const galleryImages = [
  { src: "/images/banners/poolvilla-banner.png", width: 1672, height: 941, alt: "인피니티 풀에서 바라본 비엔티안 전경" },
  { src: "/images/services/service-poolvilla.png", width: 2048, height: 2048, alt: "정원과 수영장을 갖춘 풀빌라 외관" },
  { src: "/images/videos/video-poolvilla.png", width: 2752, height: 1536, alt: "노을 지는 풀빌라 테라스" },
];

const bookingSteps = [
  { no: "01", title: "문의", caption: "카카오톡 또는 텔레그램 문의", icon: ChatIcon },
  { no: "02", title: "상담", caption: "일정과 인원에 맞는 빌라 안내", icon: PhoneIcon },
  { no: "03", title: "예약금", caption: "예약금 입금 후 일정 확정", icon: CheckIcon },
  { no: "04", title: "체크인", caption: "현지 도착 후 편안한 체크인", icon: UsersIcon },
];

const noticeItems = [
  { title: "체크인", desc: "오후 3시 이후" },
  { title: "체크아웃", desc: "오전 11시까지" },
  { title: "주의사항", desc: "반려동물 동반 및 소음은 자제 부탁드립니다" },
  { title: "환불 규정 (임시)", desc: "예약 상담 시 자세한 환불 규정을 안내해드립니다" },
];

// TODO: Replace with real review database. Demo placeholder content only.
const reviews = [
  { name: "최OO", content: "사진으로 보던 것보다 실제로 더 넓고 깨끗했습니다. 체크인 안내도 친절했어요." },
  { name: "정OO", content: "수영장이 정말 프라이빗해서 가족끼리 편하게 쉬었습니다." },
  { name: "한OO", content: "예약부터 체크인까지 안내가 꼼꼼해서 믿고 이용했습니다." },
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

export default function PoolVillaPage() {
  return (
    <main className="bg-[#0B0B0B] pb-[env(safe-area-inset-bottom)]">
      {/* 01. Hero */}
      <section id="hero" className="relative overflow-hidden bg-[#0B0B0B] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/poolvilla-banner.png"
            alt="비엔티안 인피니티 풀빌라 전경"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_45%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/55 to-[#0B0B0B]/15" />
        </div>

        <Container className="relative flex flex-col items-center gap-4 pt-10 pb-8 text-center sm:gap-6 sm:pt-28 sm:pb-16">
          <Reveal className="flex flex-col items-center">
            <h1 className="text-4xl leading-tight font-bold tracking-tight sm:text-6xl sm:leading-none">
              프리미엄
              <br />
              풀빌라
            </h1>
            <p className="mt-2.5 max-w-md text-sm leading-snug text-white/80 sm:mt-4 sm:text-lg sm:leading-relaxed">
              비엔티안에서 만나는 프라이빗 풀빌라,
              <br />
              편안하고 안전하게 예약해드립니다.
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
              href="#facilities"
              className="flex h-11 items-center justify-center gap-2 rounded-full border border-white/25 px-7 text-sm font-semibold text-white transition-colors hover:border-[#F4C542] hover:text-[#F4C542] sm:h-12"
            >
              <EyeIcon className="h-4 w-4" />
              시설 둘러보기
            </a>
          </Reveal>

          <Reveal delay={300} className="flex flex-wrap items-start justify-center gap-x-4 gap-y-3 sm:gap-x-5 sm:gap-y-4 sm:pt-2">
            {villaFeatures.map((f) => (
              <FeatureItem key={f.label} label={f.label} icon={f.icon} />
            ))}
          </Reveal>
        </Container>
      </section>

      {/* 02. 풀빌라 소개 */}
      <section id="about" className="bg-[#0B0B0B] py-10 text-white sm:py-24">
        <Container>
          <Reveal className="relative aspect-square w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/services/service-poolvilla.png"
              alt="정원과 수영장을 갖춘 풀빌라"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={100} className="mt-5 sm:mt-10">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#F4C542] uppercase">About Villa</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:mt-3 sm:text-3xl">풀빌라 서비스란?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-normal text-[#B3B3B3] sm:mt-5 sm:text-base sm:leading-relaxed">
              비엔티안 현지의 프라이빗 풀빌라를 일정과 인원에 맞게 안내해드립니다. 독채로 사용하는 편안한
              공간에서 수영장과 정원을 여유롭게 즐기실 수 있습니다.
            </p>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 sm:mt-8 sm:gap-x-6 sm:gap-y-4">
              {villaFeatures.map((f) => (
                <FeatureItem key={f.label} label={f.label} icon={f.icon} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 03. 객실 및 시설 */}
      <section id="facilities" className="border-t border-white/10 bg-[#0B0B0B] py-10 text-white sm:py-24">
        <Container>
          <Reveal className="text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#F4C542] uppercase">Facilities</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:mt-3 sm:text-3xl">객실 및 시설</h2>
          </Reveal>

          <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-10 sm:gap-4">
            {facilities.map((item, i) => (
              <Reveal key={item.label} delay={i * 60}>
                <AmenityCard label={item.label} icon={item.icon} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 04. 이용 가능한 서비스 */}
      <section className="border-t border-white/10 bg-[#0B0B0B] py-10 text-white sm:py-24">
        <Container>
          <Reveal className="text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#F4C542] uppercase">Services</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:mt-3 sm:text-3xl">이용 가능한 서비스</h2>
          </Reveal>

          <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-10 sm:gap-4">
            {availableServices.map((item, i) => (
              <Reveal key={item.label} delay={i * 60}>
                <AmenityCard label={item.label} icon={item.icon} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 05. Gallery */}
      <section className="border-t border-white/10 bg-[#0B0B0B] py-10 text-white sm:py-24">
        <Container>
          <Reveal className="text-center">
            <h2 className="text-2xl font-bold tracking-[0.2em] text-white sm:text-3xl">GALLERY</h2>
            <p className="mt-1.5 text-sm text-[#F4C542] sm:mt-2 sm:text-base">풀빌라 분위기</p>
          </Reveal>

          <div className="mt-6 columns-2 gap-1.5 sm:mt-10 sm:gap-3 lg:columns-3">
            {galleryImages.map((img, i) => (
              <Reveal
                key={img.src}
                delay={i * 80}
                className="group relative mb-1.5 block overflow-hidden rounded-lg break-inside-avoid sm:mb-3 sm:rounded-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 06. 예약 진행 방법 */}
      <section className="border-t border-white/10 bg-[#0B0B0B] py-10 text-white sm:py-24">
        <Container>
          <Reveal className="text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#F4C542] uppercase">Process</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:mt-3 sm:text-3xl">예약 진행 방법</h2>
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

      {/* 07. 안내사항 */}
      <section className="border-t border-white/10 bg-[#0B0B0B] py-10 text-white sm:py-24">
        <Container>
          <Reveal className="text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">안내사항</h2>
          </Reveal>

          <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-10 sm:gap-4">
            {noticeItems.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 60}
                className="rounded-xl border border-white/10 bg-[#141414] p-3 sm:rounded-2xl sm:p-6"
              >
                <p className="text-xs font-bold text-[#F4C542] sm:text-sm">{item.title}</p>
                <p className="mt-1.5 text-xs leading-snug text-white/75 sm:mt-2 sm:text-sm">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 08. 고객 후기 */}
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

      {/* 09. CTA */}
      <section className="relative overflow-hidden bg-[#0B0B0B] pt-12 pb-14 text-white sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/videos/video-poolvilla.png"
            alt="풀빌라 예약 문의"
            fill
            sizes="100vw"
            className="object-cover object-[55%_45%]"
          />
          <div className="absolute inset-0 bg-[#0B0B0B]/80" />
        </div>

        <Container className="relative flex flex-col items-center gap-5 text-center sm:gap-6">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">지금 바로 풀빌라를 예약하세요!</h2>
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
