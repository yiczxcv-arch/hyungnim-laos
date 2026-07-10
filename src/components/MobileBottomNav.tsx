"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "HOME", href: "/" },
  { label: "ECO", href: "/eco" },
  { label: "KTV", href: "/ktv" },
  { label: "CONTACT", href: "/contact" },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 backdrop-blur md:hidden">
      <div className="flex h-16">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-1 flex-col items-center justify-center gap-1 text-xs font-medium ${
                active ? "text-amber-600" : "text-neutral-500"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
