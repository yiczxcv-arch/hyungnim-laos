import Link from "next/link";
import { Container } from "@/components/container";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  highlights: string[];
  disclaimer?: string;
};

export function ServicePage({ eyebrow, title, intro, highlights, disclaimer }: ServicePageProps) {
  return (
    <>
      <section className="border-b border-neutral-200 py-14 sm:py-20">
        <Container>
          <p className="text-sm font-medium tracking-widest text-amber-600 uppercase">{eyebrow}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
          <p className="mt-4 max-w-xl text-neutral-500">{intro}</p>
          <Link
            href="/contact"
            className="mt-6 flex h-12 w-fit items-center rounded-full bg-amber-500 px-6 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
          >
            상담 문의하기
          </Link>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="rounded-2xl border border-neutral-200 p-5 text-sm font-medium">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {disclaimer && (
        <section className="border-t border-neutral-200 bg-neutral-50 py-8">
          <Container>
            <p className="text-xs leading-relaxed text-neutral-500">{disclaimer}</p>
          </Container>
        </section>
      )}
    </>
  );
}
