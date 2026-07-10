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
