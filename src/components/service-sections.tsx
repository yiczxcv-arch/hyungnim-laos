import Image from "next/image";
import { Container } from "@/components/container";
import { EmptyState } from "@/components/EmptyState";
import { ConsultButtons } from "@/components/consult-buttons";
import type { RecommendedItem } from "@/lib/dummy-data";

type ServiceHeroProps = {
  bannerSrc: string;
  bannerAlt: string;
  title: string;
  description: string;
};

export function ServiceHero({ bannerSrc, bannerAlt, title, description }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-900 text-white">
      <div className="absolute inset-0">
        <Image src={bannerSrc} alt={bannerAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15" />
      </div>

      <Container className="relative flex min-h-[360px] flex-col justify-center gap-4 py-14 sm:min-h-[420px] sm:py-20">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="max-w-md text-white/80">{description}</p>
        <ConsultButtons />
      </Container>
    </section>
  );
}

type ServiceIntroProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
};

export function ServiceIntro({ imageSrc, imageAlt, title, description }: ServiceIntroProps) {
  return (
    <section className="border-b border-neutral-200 py-12 sm:py-16">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
        <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full sm:h-48 sm:w-48">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 160px, 192px"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">{title}</h2>
          <p className="mt-2 text-neutral-500">{description}</p>
        </div>
      </Container>
    </section>
  );
}

type ServiceRecommendationProps = {
  title: string;
  emptyMessage: string;
  items?: RecommendedItem[];
};

export function ServiceRecommendation({ title, emptyMessage, items = [] }: ServiceRecommendationProps) {
  return (
    <section className="border-b border-neutral-200 py-12 sm:py-16">
      <Container>
        <h2 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">{title}</h2>

        {items.length > 0 ? (
          // TODO: Replace with real database. (operator/venue partner listings)
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {items.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-2xl border border-neutral-200">
                <div className="relative aspect-square w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-neutral-900">{item.name}</p>
                  <p className="mt-1 text-xs text-neutral-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState message={emptyMessage} className="mt-4 h-32" />
        )}

        <ConsultButtons className="mt-6" />
      </Container>
    </section>
  );
}

type ServiceCTAProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
};

export function ServiceCTA({ imageSrc, imageAlt, title, description }: ServiceCTAProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-900 py-14 text-white sm:py-20">
      <div className="absolute inset-0">
        <Image src={imageSrc} alt={imageAlt} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <Container className="relative flex flex-col gap-4">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        <p className="text-white/70">{description}</p>
        <ConsultButtons />
      </Container>
    </section>
  );
}
