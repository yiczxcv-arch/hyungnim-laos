import Link from "next/link";
import type { Service } from "@/lib/site-config";
import { BuildingIcon, FlagIcon, LeafIcon, MicIcon } from "@/components/icons";

const badgeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  eco: LeafIcon,
  ktv: MicIcon,
  golf: FlagIcon,
  "pool-villa": BuildingIcon,
};

export function ServiceCard({ service }: { service: Service }) {
  const BadgeIcon = badgeIcons[service.slug];

  return (
    <Link href={service.href} className="group flex flex-col items-center gap-2 text-center">
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-neutral-300 bg-neutral-50 text-[9px] text-neutral-400 transition-colors group-hover:border-amber-400 sm:h-20 sm:w-20 sm:text-[10px]">
        준비 중
        {BadgeIcon && (
          <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-amber-500 text-white shadow-sm sm:h-7 sm:w-7">
            <BadgeIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </span>
        )}
      </span>
      <span className="text-xs font-bold tracking-tight text-neutral-900 sm:text-base">{service.label}</span>
      <span className="text-[11px] text-neutral-500 sm:text-xs">{service.tagline}</span>
    </Link>
  );
}
