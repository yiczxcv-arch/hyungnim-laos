type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function HomeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v9a1 1 0 0 0 1 1H9v-5.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V20h2.5a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

export function MicIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3" />
      <path d="M9 21h6" />
    </svg>
  );
}

export function BuildingIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="4" y="3" width="10" height="18" rx="1" />
      <path d="M14 8h6v13h-6" />
      <path d="M7.5 7h1M7.5 11h1M7.5 15h1M10.5 7h1M10.5 11h1M10.5 15h1" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M20 4c.6 7-2.4 13-9 15-4-1-6.5-4-6-8.5C5.7 5.3 12 3.3 20 4Z" />
      <path d="M5 20c3-4 6-7 12-13" />
    </svg>
  );
}

export function FlagIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 3v18" />
      <path d="M6 4h11l-2.5 3.5L17 11H6" />
    </svg>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 5h16v11H9l-4 4V5Z" />
    </svg>
  );
}

export function TelegramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2 .01 7Z" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 3.5l2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L12 16.8l-5.3 2.8 1.1-5.9-4.3-4.1 5.9-.7L12 3.5Z" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 8.2s-.2-1.6-.9-2.3c-.8-.9-1.8-.9-2.2-1C15.9 4.6 12 4.6 12 4.6h0s-3.9 0-6.9.3c-.4 0-1.4.1-2.2 1C2.2 6.6 2 8.2 2 8.2S1.8 10 1.8 11.9v1.7c0 1.9.2 3.7.2 3.7s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.2.3 7.2.3s3.9 0 6.9-.3c.4-.1 1.4-.1 2.2-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.7v-1.7c0-1.9-.2-3.7-.2-3.7ZM9.9 15.3v-6l5.6 3-5.6 3Z" />
    </svg>
  );
}

export function CameraIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.3 2.3 4.7-5.1" />
    </svg>
  );
}

export function CheckMiniIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 3h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2C10.5 19 5 13.5 4 6a2 2 0 0 1 2-3Z" />
    </svg>
  );
}

export function CarIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 16v-3.2a1.5 1.5 0 0 1 .18-.71L6.3 8.9A2 2 0 0 1 8.06 8h7.88a2 2 0 0 1 1.76.9l1.62 3.19a1.5 1.5 0 0 1 .18.71V16" />
      <path d="M3.5 16h17v2.5a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1V17H8v1.5a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1V16Z" />
      <circle cx="7.5" cy="16" r="1.3" />
      <circle cx="16.5" cy="16" r="1.3" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M15.5 6a3 3 0 0 1 0 5.8" />
      <path d="M15 13.2c2.5.4 4.5 2.3 4.5 5.8" />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M4.5 19.5a7.5 7.5 0 0 1 15 0" />
    </svg>
  );
}

export function NewspaperIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="5" width="13" height="14" rx="1" />
      <path d="M16.5 8.5h3a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-3" />
      <path d="M6.5 8.5h7M6.5 11.5h7M6.5 14.5h4" />
    </svg>
  );
}

export function BadgeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5l2 1.7 2.6-.3.9 2.5 2.3 1.3-.9 2.5.9 2.5-2.3 1.3-.9 2.5-2.6-.3-2 1.7-2-1.7-2.6.3-.9-2.5L4.2 13l.9-2.5-.9-2.5 2.3-1.3.9-2.5 2.6.3 2-1.7Z" />
      <path d="m9.3 12.2 1.8 1.8 3.6-3.6" />
    </svg>
  );
}

export function EyeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="5" width="17" height="15" rx="1.5" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v3.5M16 3v3.5" />
    </svg>
  );
}

export function WavesIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M2 8c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
      <path d="M2 13c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
      <path d="M2 18c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
    </svg>
  );
}

export function FlameIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3s-5 4.5-5 9.5a5 5 0 0 0 10 0c0-1.8-1-3-1.8-4 0 2-1.2 2.8-1.7 2 .8-2.5-.5-5-1.5-7.5Z" />
    </svg>
  );
}

export function UtensilsIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 3v7a2 2 0 0 0 2 2v9M6 3v7M6 3v7M9 3v7" />
      <path d="M17 3c-1.5 0-2.5 1.5-2.5 4v4a2 2 0 0 0 2 2V3Z" />
    </svg>
  );
}

export function WifiIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 8.5a14 14 0 0 1 18 0" />
      <path d="M6.2 12.2a9.5 9.5 0 0 1 11.6 0" />
      <path d="M9.5 15.8a5 5 0 0 1 5 0" />
      <circle cx="12" cy="19.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SnowflakeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2.5v19M4 7l16 10M20 7 4 17" />
      <path d="M12 2.5 9.5 5M12 2.5 14.5 5M12 21.5 9.5 19M12 21.5 14.5 19" />
      <path d="M4 7l3 .3M4 7l1-2.8M20 7l-3 .3M20 7l-1-2.8M4 17l3-.3M4 17l1 2.8M20 17l-3-.3M20 17l-1 2.8" />
    </svg>
  );
}

export function ShoppingBagIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5.5 8h13l-1 12.5a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5L5.5 8Z" />
      <path d="M8.5 8V6a3.5 3.5 0 0 1 7 0v2" />
    </svg>
  );
}

export function CoffeeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 9h12v6.5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9Z" />
      <path d="M16.5 10.5H18a2.5 2.5 0 0 1 0 5h-1.5" />
      <path d="M8 5.5c0-.8.7-1.1.7-2M11.5 5.5c0-.8.7-1.1.7-2" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21.5s7-6.5 7-12A7 7 0 0 0 5 9.5c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}
