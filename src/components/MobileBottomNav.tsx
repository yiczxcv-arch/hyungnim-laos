"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BuildingIcon, ChatIcon, HomeIcon, LeafIcon, MicIcon } from "@/components/icons";

const items = [
  { label: "홈", href: "/", icon: HomeIcon },
  { label: "KTV", href: "/ktv", icon: MicIcon },
  { label: "풀빌라", href: "/pool-villa", icon: BuildingIcon },
  { label: "에코시스템", href: "/eco", icon: LeafIcon },
  { label: "문의", href: "/contact", icon: ChatIcon },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 backdrop-blur md:hidden">
      <div className="flex h-16">
        {items.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-1 flex-col items-center justify-center gap-1 text-[11px] font-medium ${
                active ? "text-amber-600" : "text-neutral-500"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
