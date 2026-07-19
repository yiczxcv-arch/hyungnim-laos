"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { mainNav, siteConfig } from "@/lib/site-config";
import { Container } from "@/components/container";
import { ChatIcon } from "@/components/icons";

const navCta =
  "flex h-10 items-center gap-1.5 rounded-full border border-amber-500 bg-white px-5 text-sm font-semibold text-amber-600 transition-colors hover:bg-amber-50 active:bg-amber-100";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" onClick={onClick}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-amber-500 text-sm font-bold text-amber-600">
        형
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-base font-bold tracking-tight text-neutral-900">{siteConfig.nameKo}</span>
        <span className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-amber-600">{siteConfig.name}</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo onClick={() => setOpen(false)} />

        <nav className="hidden items-center gap-6 md:flex">
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                  active ? "text-amber-600" : "text-neutral-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className={navCta}>
            <ChatIcon className="h-4 w-4" />
            상담하기
          </Link>

          <button
            type="button"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full md:hidden"
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-6 bg-neutral-900 transition-transform duration-300 ease-out ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-0.5 w-6 bg-neutral-900 transition-opacity duration-200 ease-out ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-[14px] block h-0.5 w-6 bg-neutral-900 transition-transform duration-300 ease-out ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </Container>

      <nav
        className={`grid overflow-hidden border-t border-neutral-200 bg-white transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <div className="min-h-0">
          <Container className="flex flex-col py-2">
            {mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-2 py-3 text-base font-medium ${
                    active ? "text-amber-600" : "text-neutral-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </Container>
        </div>
      </nav>
    </header>
  );
}
