import Link from "next/link";
import type { HomeServiceTile } from "@/lib/home-content";

export function ServiceCard({ service }: { service: HomeServiceTile }) {
  const Icon = service.icon;

  return (
    <Link
      href={service.href}
      className="group flex w-full flex-col items-center justify-center gap-1 rounded-2xl border border-neutral-200 px-2 py-3 text-center transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-50/50 hover:shadow-md sm:gap-1.5 sm:px-2.5 sm:py-3.5"
    >
      {service.iconStyle === "badge" ? (
        <span
          className={`mb-0.5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white ${service.colorClassName}`}
        >
          <Icon className="h-7 w-7" />
        </span>
      ) : (
        <span
          className={`mb-0.5 flex h-14 w-14 shrink-0 items-center justify-center ${service.colorClassName}`}
        >
          <Icon className="h-9 w-9" />
        </span>
      )}
      <span className="text-xs leading-tight font-extrabold tracking-tight break-keep text-neutral-900 sm:text-sm">
        {service.label}
      </span>
      <span className="line-clamp-1 text-[11px] leading-tight text-neutral-500">{service.description}</span>
    </Link>
  );
}
