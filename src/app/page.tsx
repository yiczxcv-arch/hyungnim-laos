import Link from "next/link";
import { Container } from "@/components/container";
import { ServiceCard } from "@/components/ServiceCard";
import { EmptyState } from "@/components/EmptyState";
import { services, siteConfig } from "@/lib/site-config";
import {
  CameraIcon,
  ChatIcon,
  CheckIcon,
  ChevronRightIcon,
  PhoneIcon,
  PlayIcon,
  StarIcon,
  YoutubeIcon,
} from "@/components/icons";

const primaryButton =
  "flex h-12 items-center justify-center rounded-full bg-amber-500 px-6 text-base font-semibold text-white transition-colors hover:bg-amber-600 active:bg-amber-700";
const outlineButton =
  "flex h-12 items-center justify-center rounded-full border border-neutral-300 bg-white px-6 text-base font-semibold text-neutral-900 transition-colors hover:border-neutral-900 active:bg-neutral-50";
const outlineButtonDark =
  "flex h-12 items-center justify-center rounded-full border border-white/40 px-6 text-base font-semibold text-white transition-colors hover:bg-white/10 active:bg-white/20";
const disabledPill =
  "flex h-12 w-fit cursor-not-allowed items-center gap-1 rounded-full bg-neutral-200 px-6 text-base font-semibold text-neutral-400";

const heroChecklist = ["5년 이상 현지 운영", "카카오톡 형님방 운영", "직접 촬영한 영상 제공", "직접 상담 & 예약 진행"];

const todayVideos = [
  { id: "ktv", title: "KTV", subtitle: "영상 준비 중" },
  { id: "pool-villa", title: "POOL VILLA", subtitle: "영상 준비 중" },
  { id: "golf", title: "GOLF", subtitle: "영상 준비 중" },
];

const communityStats = ["참여중", "오늘 대화", "오늘 후기", "오늘 예약"];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-900 text-white">
        <div aria-hidden className="pointer-events-none absolute right-4 top-3 text-[11px] text-neutral-600">
          Hero Image / Video 영역 (준비 중)
        </div>

        <Container className="relative flex min-h-[560px] flex-col justify-between py-8 sm:min-h-[620px] sm:py-12">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-white/80">현지에서 직접 운영합니다</p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{siteConfig.nameKo}</h1>
            <p className="text-lg text-white/70">비엔티안 프리미엄 컨시어지</p>

            <ul className="mt-2 flex flex-col gap-2">
              {heroChecklist.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckIcon className="h-4 w-4 shrink-0 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className={primaryButton}>
                문의하기
              </Link>
              <Link href="#services" className={outlineButtonDark}>
                서비스 보기
              </Link>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-black/50 p-4 backdrop-blur">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15">
                <PlayIcon className="h-5 w-5 translate-x-0.5 text-white" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-wide text-amber-400">VIDEO</p>
                <p className="truncate text-sm font-semibold text-white">현지 영상 (준비 중)</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 오늘 올라온 영상 */}
      <section className="py-10 sm:py-14">
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-lg font-bold text-neutral-900 sm:text-xl">
              <CameraIcon className="h-5 w-5 text-amber-600" />
              오늘 올라온 영상
            </h2>
            <Link href="#youtube" className="text-sm font-medium text-neutral-400 transition-colors hover:text-amber-600">
              더보기
            </Link>
          </div>

          <div className="-mx-4 mt-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:gap-4">
            {todayVideos.map((video) => (
              <div key={video.id} className="w-36 shrink-0 sm:w-48">
                <div className="relative">
                  <EmptyState message="" className="aspect-video w-full" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-900 sm:h-10 sm:w-10">
                      <PlayIcon className="h-3.5 w-3.5 translate-x-0.5" />
                    </span>
                  </span>
                  <span className="absolute bottom-2 right-2 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-medium text-white">
                    --:--
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold text-neutral-900">{video.title}</p>
                <p className="text-xs text-neutral-400">{video.subtitle}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Services */}
      <section id="services" className="border-t border-neutral-200 py-14 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">서비스</h2>
          <p className="mt-2 text-neutral-500">아래 서비스를 확인하고 원하는 항목을 상담받으세요.</p>

          <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Community */}
      <section className="py-10 sm:py-14">
        <Container>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-2.5 py-1 text-xs font-bold text-white">
              <ChatIcon className="h-3 w-3" />
              TALK
            </span>
            <p className="mt-3 text-sm font-semibold text-amber-700">공식 카카오톡 형님방</p>
            <h2 className="mt-2 text-xl font-bold leading-snug tracking-tight text-neutral-900 sm:text-2xl">
              형님들과 함께하는
              <br />
              실시간 정보 공유방
            </h2>
            <p className="mt-2 text-sm text-neutral-600">비엔티안 현지 정보와 예약, 생생한 후기까지 실시간 공유!</p>

            <button
              type="button"
              disabled
              aria-disabled="true"
              title="카카오톡 오픈채팅 링크가 등록되면 활성화됩니다."
              className={`mt-5 ${disabledPill}`}
            >
              형님방 입장하기
              <ChevronRightIcon className="h-4 w-4" />
            </button>

            <div className="mt-6 grid grid-cols-4 gap-3 border-t border-amber-200 pt-6">
              {communityStats.map((label) => (
                <div key={label} className="text-center">
                  <p className="text-lg font-bold text-neutral-400">-</p>
                  <p className="text-[11px] text-neutral-500 sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* YouTube */}
      <section id="youtube" className="border-t border-neutral-200 py-14 sm:py-20">
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              <YoutubeIcon className="h-6 w-6 text-red-600" />
              {siteConfig.nameKo} YOUTUBE
            </h2>
            <button
              type="button"
              disabled
              aria-disabled="true"
              title="유튜브 채널 URL이 등록되면 활성화됩니다."
              className="cursor-not-allowed text-sm font-medium text-neutral-300"
            >
              채널 바로가기
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
            <div className="lg:col-span-2">
              <EmptyState message="대표 영상 (준비 중)" className="aspect-video w-full" />
            </div>

            <div className="-mx-4 flex gap-3 overflow-x-auto px-4 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex w-40 shrink-0 items-center gap-2 lg:w-auto">
                  <EmptyState message="" className="aspect-video w-24 shrink-0 sm:w-28" />
                  <p className="truncate text-sm font-medium text-neutral-600">영상 준비 중</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Review */}
      <section id="review" className="border-t border-neutral-200 bg-neutral-50 py-14 sm:py-20">
        <Container>
          <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            <StarIcon className="h-5 w-5 text-amber-500" />
            실시간 후기
          </h2>
          <p className="mt-2 text-neutral-500">실제 이용 후기를 준비하고 있습니다.</p>

          <EmptyState message="등록된 후기가 없습니다." className="mt-8 h-40" />

          <Link href="/review" className={`mt-6 ${outlineButton} w-fit`}>
            목록 보기
          </Link>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-neutral-900 py-10 sm:py-14">
        <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-bold text-white">빠른 상담이 필요하신가요?</p>
            <p className="mt-1 text-sm text-white/60">24시간 현지 상담 가능! 카카오톡 또는 전화로 문의주세요.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className={`${primaryButton} gap-2`}>
              <ChatIcon className="h-4 w-4" />
              카카오톡 상담
            </Link>
            <Link
              href="/contact"
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 text-base font-semibold text-white transition-colors hover:bg-emerald-700 active:bg-emerald-800"
            >
              <PhoneIcon className="h-4 w-4" />
              전화 상담하기
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
