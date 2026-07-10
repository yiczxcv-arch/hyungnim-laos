import Link from "next/link";
import type { Service } from "@/lib/site-config";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className="group flex flex-col justify-between rounded-2xl border border-neutral-200 p-4 transition-colors hover:border-amber-500 sm:p-6"
    >
      <div>
        <h3 className="text-lg font-bold tracking-tight text-neutral-900 sm:text-xl">{service.label}</h3>
        <p className="mt-1 text-xs font-medium text-amber-600 sm:text-sm">{service.tagline}</p>
      </div>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-neutral-500 group-hover:text-amber-600 sm:text-sm">
        서비스 보기 →
      </span>
    </Link>
  );
}
