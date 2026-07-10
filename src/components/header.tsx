"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { mainNav, siteConfig } from "@/lib/site-config";
import { Container } from "@/components/container";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-neutral-900" onClick={() => setOpen(false)}>
          {siteConfig.name}
        </Link>

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

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="flex h-12 items-center rounded-full bg-amber-500 px-6 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
          >
            상담하기
          </Link>
        </div>

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
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex h-12 items-center justify-center rounded-full bg-amber-500 text-base font-semibold text-white transition-colors hover:bg-amber-600"
            >
              상담하기
            </Link>
          </Container>
        </div>
      </nav>
    </header>
  );
}
