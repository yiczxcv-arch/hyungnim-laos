import Link from "next/link";
import { services, siteConfig } from "@/lib/site-config";
import { Container } from "@/components/container";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 pb-16 md:pb-0">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-base font-bold tracking-tight text-neutral-900">{siteConfig.name}</p>
          <p className="mt-2 max-w-sm text-sm text-neutral-500">{siteConfig.description}</p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
          <div>
            <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">서비스</p>
            <nav className="mt-3 flex flex-col gap-2">
              {services.map((service) => (
                <Link key={service.slug} href={service.href} className="text-sm text-neutral-600 hover:text-amber-600">
                  {service.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">문의</p>
            <nav className="mt-3 flex flex-col gap-2">
              <Link href="/contact" className="text-sm text-neutral-600 hover:text-amber-600">
                문의하기
              </Link>
            </nav>
          </div>
        </div>
      </Container>

      <Container className="border-t border-neutral-200 py-4 text-xs text-neutral-400">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </Container>
    </footer>
  );
}
