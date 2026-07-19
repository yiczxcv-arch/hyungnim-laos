import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { ServiceCard } from "@/components/ServiceCard";
import { ConsultButtons } from "@/components/consult-buttons";
import { ReviewCard } from "@/components/ReviewCard";
import { siteConfig } from "@/lib/site-config";
import {
  homeReviews,
  homeServices,
  homeYoutubeVideos,
  laosInsights,
  magazineArticles,
} from "@/lib/home-content";
import {
  BadgeIcon,
  CameraIcon,
  CheckMiniIcon,
  ChevronRightIcon,
  NewspaperIcon,
  PhoneIcon,
  PlayIcon,
  StarIcon,
  YoutubeIcon,
} from "@/components/icons";

const heroChecklist = ["현지 직접 운영", "실제 방문 후기", "카카오톡 · 텔레그램 상담", "직접 예약 진행"];

function SectionMore({ href, label = "더보기" }: { href?: string; label?: string }) {
  if (href) {
    return (
      <Link
        href={href}
        className="flex items-center gap-0.5 text-sm font-medium text-neutral-500 transition-colors hover:text-amber-600"
      >
        {label}
        <ChevronRightIcon className="h-4 w-4" />
      </Link>
    );
  }

  return (
    <span
      className="flex cursor-not-allowed items-center gap-0.5 text-sm font-medium text-neutral-500"
      title="추후 연결 예정입니다."
    >
      {label}
      <ChevronRightIcon className="h-4 w-4" />
    </span>
  );
}

function CoverImage({
  src,
  alt,
  isDummyImage,
  sizes,
}: {
  src: string;
  alt: string;
  isDummyImage?: boolean;
  sizes?: string;
}) {
  // Locally-generated dummy graphics are SVG; Next's image optimizer blocks local SVG by
  // default, so they're rendered as plain <img>. Real photos use next/image as usual.
  if (isDummyImage) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />;
  }
  return <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />;
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/home-hero-01.png"
            alt="형님라오스 비엔티안 현장"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[58%_42%] sm:object-[50%_15%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.8)_45%,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.08)_72%,rgba(0,0,0,0)_85%)] sm:bg-[linear-gradient(to_right,rgba(0,0,0,0.995)_0%,rgba(0,0,0,0.99)_56%,rgba(0,0,0,0.5)_74%,rgba(0,0,0,0.1)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent sm:from-black/70" />
        </div>

        <Container className="relative aspect-[864/400]">
          <div className="absolute left-4 top-[16px] flex w-[235px] flex-col sm:left-0">
            <p className="text-[10px] font-semibold leading-none text-amber-400">현지에서 직접 운영합니다</p>
            <h1 className="mt-[6px] text-[32px] font-bold leading-none tracking-tight">{siteConfig.nameKo}</h1>
            <p className="mt-[5px] text-[12px] leading-none text-white/90">라오스 현지 예약 · 여행 파트너</p>

            <ul className="mt-[8px] flex flex-col gap-[6px]">
              {heroChecklist.map((item) => (
                <li key={item} className="flex items-center gap-[6px] text-[11px] leading-none font-medium text-white">
                  <span className="flex h-[12px] w-[12px] shrink-0 items-center justify-center rounded-full bg-amber-500">
                    <CheckMiniIcon className="h-[7px] w-[7px] text-white" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute right-2 top-2 flex w-[124px] items-center gap-2 rounded-[11px] bg-black/70 p-2 backdrop-blur sm:right-0 sm:top-[128px] sm:w-[188px] sm:gap-[10px] sm:p-[11px]">
            <div className="min-w-0">
              <p className="flex items-center gap-[3px] text-[9px] leading-none font-bold text-red-500">
                <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-red-500" />
                LIVE TODAY
              </p>
              <p className="mt-[3px] truncate text-[12px] leading-none font-bold text-white">라오스 인사이트</p>
              <p className="mt-[2px] text-[9px] leading-none text-white/60">20초 영상 보기</p>
            </div>
            <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border-2 border-white sm:h-[37px] sm:w-[37px]">
              <PlayIcon className="h-[11px] w-[11px] translate-x-0.5 text-white sm:h-[13px] sm:w-[13px]" />
            </span>
          </div>
        </Container>
      </section>

      {/* 라오스 인사이트 */}
      <section className="py-6 sm:py-14">
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-lg font-bold text-neutral-900 sm:text-xl">
              <CameraIcon className="h-5 w-5 text-amber-600" />
              라오스 인사이트
            </h2>
            <SectionMore />
          </div>

          <div className="-mx-4 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0">
            {laosInsights.map((item) => (
              <div
                key={item.id}
                className="w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-md shadow-neutral-200/60 sm:w-auto sm:shadow-sm"
              >
                <div className="relative aspect-[9/8] w-full bg-neutral-100">
                  <CoverImage
                    src={item.image}
                    alt={item.title}
                    isDummyImage={item.isDummyImage}
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 30vw, 352px"
                  />
                </div>
                <div className="px-4 py-2.5">
                  <p className="truncate text-sm font-bold text-neutral-900">{item.title}</p>
                  <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-neutral-500">
                    {item.description}
                  </p>
                  <p className="mt-1.5 text-[11px] text-neutral-400">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 서비스 바로가기 */}
      <section id="services" className="border-t border-neutral-200 py-6 sm:py-14">
        <Container>
          <h2 className="flex items-center gap-2 text-lg font-bold text-neutral-900 sm:text-xl">
            <BadgeIcon className="h-5 w-5 text-amber-600" />
            서비스 바로가기
          </h2>

          <div className="-mx-4 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-5 sm:gap-4 sm:overflow-visible sm:px-0">
            {homeServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* 라오스 매거진 */}
      <section className="border-t border-neutral-200 py-6 sm:py-14">
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-lg font-bold text-neutral-900 sm:text-xl">
              <NewspaperIcon className="h-5 w-5 text-amber-600" />
              라오스 매거진
            </h2>
            <SectionMore />
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-neutral-200">
            <div className="flex flex-col divide-y divide-neutral-100">
              {magazineArticles.map((article) => (
                <div key={article.id} className="flex items-stretch gap-3">
                  <div className="relative w-28 shrink-0 bg-neutral-100">
                    <CoverImage
                      src={article.image}
                      alt={article.title}
                      isDummyImage={article.isDummyImage}
                      sizes="112px"
                    />
                  </div>
                  <div className="min-w-0 flex-1 py-3 pr-4">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`shrink-0 rounded-full border px-1.5 py-0.5 text-[9px] font-semibold sm:text-[10px] ${article.tagClassName}`}
                      >
                        {article.tag}
                      </span>
                      <span className="ml-auto shrink-0 text-[10px] text-neutral-400 sm:text-xs">{article.date}</span>
                    </div>
                    <p className="mt-1.5 truncate text-sm font-bold text-neutral-900">{article.title}</p>
                    <p className="mt-0.5 truncate text-xs text-neutral-500">{article.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 유튜브 최신 영상 */}
      <section id="youtube" className="border-t border-neutral-200 py-6 sm:py-14">
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-lg font-bold text-neutral-900 sm:text-xl">
              <YoutubeIcon className="h-5 w-5 text-red-600" />
              유튜브 최신 영상
            </h2>
            <SectionMore label="채널 바로가기" />
          </div>

          <div className="-mx-4 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-4 sm:gap-4 sm:overflow-visible sm:px-0">
            {homeYoutubeVideos.map((video) => (
              <div key={video.id} className="w-[72%] shrink-0 snap-start sm:w-auto">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-md shadow-neutral-200/60 sm:shadow-sm">
                  <CoverImage
                    src={video.thumbnail}
                    alt={video.title}
                    isDummyImage={video.isDummyImage}
                    sizes="(max-width: 640px) 72vw, 200px"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-900">
                      <PlayIcon className="h-3.5 w-3.5 translate-x-0.5" />
                    </span>
                  </span>
                  <span className="absolute bottom-1.5 right-1.5 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-medium text-white">
                    {video.duration}
                  </span>
                </div>
                <div className="pt-2">
                  <p className="truncate text-sm leading-tight font-bold text-neutral-900">
                    {video.title}
                  </p>
                  <p className="mt-1 truncate text-xs leading-tight text-neutral-500">
                    {video.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 상담 CTA */}
      <section className="py-6 sm:py-14">
        <Container>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-5 text-center sm:px-10 sm:py-10">
            <p className="text-base font-bold text-amber-600 sm:text-xl">빠른 상담이 필요하신가요?</p>
            <p className="mt-1.5 text-xs text-neutral-600 sm:text-sm">
              24시간 현지 상담 가능! 카카오톡 또는 텔레그램으로 문의주세요.
            </p>

            <ConsultButtons className="mt-4 !flex-row items-center justify-center [&>button]:flex-1 [&>button]:max-w-56 [&>button]:gap-1 [&>button]:px-2 [&>button]:text-sm sm:[&>button]:px-6 sm:[&>button]:text-base" />

            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="mt-3 flex items-center justify-center gap-1.5 text-sm font-medium text-neutral-700 transition-colors hover:text-amber-600"
            >
              <PhoneIcon className="h-4 w-4" />
              전화 상담 {siteConfig.phone}
            </a>
          </div>
        </Container>
      </section>

      {/* 실시간 후기 */}
      <section id="review" className="border-t border-neutral-200 py-6 sm:py-14">
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-lg font-bold text-neutral-900 sm:text-xl">
              <StarIcon className="h-5 w-5 text-amber-500" />
              실시간 후기
            </h2>
            <SectionMore href="/review" />
          </div>

          <div className="-mx-4 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2">
            {homeReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
