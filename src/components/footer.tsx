import Link from "next/link";
import { services, siteConfig } from "@/lib/site-config";
import { Container } from "@/components/container";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 pb-16 md:pb-0">
      <Container className="flex flex-col gap-3 py-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-base leading-tight font-bold tracking-tight text-neutral-900">{siteConfig.nameKo}</p>
          <p className="mt-0.5 text-xs font-semibold tracking-[0.15em] text-amber-600">{siteConfig.name}</p>
          <p className="mt-1.5 max-w-sm text-sm leading-snug text-neutral-500">{siteConfig.description}</p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
          <div>
            <p className="text-xs leading-tight font-semibold tracking-widest text-neutral-400 uppercase">서비스</p>
            <nav className="mt-1 flex flex-col gap-0">
              {services.map((service) => (
                <Link key={service.slug} href={service.href} className="text-sm leading-tight text-neutral-600 hover:text-amber-600">
                  {service.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs leading-tight font-semibold tracking-widest text-neutral-400 uppercase">문의</p>
            <nav className="mt-1 flex flex-col gap-0">
              <Link href="/contact" className="text-sm leading-tight text-neutral-600 hover:text-amber-600">
                문의하기
              </Link>
            </nav>
          </div>
        </div>
      </Container>

      <Container className="border-t border-neutral-200 py-1 text-xs leading-tight text-neutral-400">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </Container>
    </footer>
  );
}
