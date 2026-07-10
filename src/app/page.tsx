import Link from "next/link";
import { Container } from "@/components/container";
import { ServiceCard } from "@/components/ServiceCard";
import { EmptyState } from "@/components/EmptyState";
import { services } from "@/lib/site-config";

const trustPoints = ["현지 직접 운영", "실제 정보", "빠른 상담", "예약 편의성"];

export default function Home() {
  return (
    <>
      <section className="relative">
        <Container className="flex flex-col gap-6 py-10 sm:py-16">
          <div className="flex flex-wrap gap-2">
            {trustPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600"
              >
                {point}
              </span>
            ))}
          </div>

          <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl">
            라오스 현지, 형님이 직접 안내합니다
          </h1>
          <p className="max-w-xl text-base text-neutral-500 sm:text-lg">
            국제교류, 노래방, 골프, 풀빌라까지 — 라오스 여행에 필요한 모든 정보를 한 곳에서
            확인하고 바로 상담하세요.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="flex h-12 items-center justify-center rounded-full bg-amber-500 px-6 text-base font-semibold text-white transition-colors hover:bg-amber-600"
            >
              문의하기
            </Link>
            <Link
              href="#services"
              className="flex h-12 items-center justify-center rounded-full border border-neutral-300 bg-white px-6 text-base font-semibold text-neutral-900 transition-colors hover:border-neutral-900"
            >
              서비스 보기
            </Link>
          </div>

          <div
            aria-hidden
            className="mt-2 flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 text-sm text-neutral-400 sm:aspect-[21/9]"
          >
            Hero Image / Video 영역 (준비 중)
          </div>

          <Link
            href="#services"
            className="mt-1 flex flex-col items-center gap-1 self-center text-xs text-neutral-400 transition-colors hover:text-amber-600"
          >
            <span>SCROLL</span>
            <span className="animate-bounce">↓</span>
          </Link>
        </Container>
      </section>

      <section id="services" className="border-t border-neutral-200 py-12 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">서비스</h2>
          <p className="mt-2 text-neutral-500">아래 서비스를 확인하고 원하는 항목을 상담받으세요.</p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section id="youtube" className="border-t border-neutral-200 py-12 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">YouTube</h2>
          <p className="mt-2 text-neutral-500">현지 영상 콘텐츠를 준비하고 있습니다.</p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            <EmptyState message="대표 영상 준비 중" className="aspect-video sm:col-span-2" />
            <EmptyState message="영상 준비 중" className="aspect-video" />
            <EmptyState message="영상 준비 중" className="aspect-video" />
          </div>

          <button
            type="button"
            disabled
            aria-disabled="true"
            title="유튜브 채널 URL이 등록되면 활성화됩니다."
            className="mt-6 flex h-12 w-fit cursor-not-allowed items-center rounded-full border border-neutral-300 bg-white px-6 text-sm font-semibold text-neutral-400"
          >
            유튜브 채널 바로가기 (준비 중)
          </button>
        </Container>
      </section>

      <section id="review" className="border-t border-neutral-200 bg-neutral-50 py-12 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">이용 후기</h2>
          <p className="mt-2 text-neutral-500">실제 이용 후기를 준비하고 있습니다.</p>

          <EmptyState message="등록된 후기가 없습니다." className="mt-8 h-40" />

          <Link
            href="/review"
            className="mt-6 flex h-12 w-fit items-center rounded-full border border-neutral-300 bg-white px-6 text-sm font-semibold text-neutral-900 transition-colors hover:border-neutral-900"
          >
            목록 보기
          </Link>
        </Container>
      </section>

      <section className="border-t border-neutral-200 py-14 sm:py-20">
        <Container className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">지금 바로 상담을 시작하세요</h2>
          <p className="max-w-md text-neutral-500">궁금한 점을 남겨주시면 빠르게 답변 드립니다.</p>
          <Link
            href="/contact"
            className="mt-2 flex h-12 items-center justify-center rounded-full bg-amber-500 px-8 text-base font-semibold text-white transition-colors hover:bg-amber-600"
          >
            문의하기
          </Link>
        </Container>
      </section>
    </>
  );
}
