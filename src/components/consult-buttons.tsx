import { ChatIcon, TelegramIcon } from "@/components/icons";

const kakaoButton =
  "flex h-12 cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 text-base font-semibold text-neutral-900 transition-colors hover:bg-yellow-300";
const telegramButton =
  "flex h-12 cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 text-base font-semibold text-white transition-colors hover:bg-sky-600";

export function ConsultButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <button
        type="button"
        disabled
        aria-disabled="true"
        title="카카오톡 상담 링크가 연결되면 활성화됩니다."
        className={kakaoButton}
      >
        <ChatIcon className="h-4 w-4" />
        카카오톡 상담
      </button>
      <button
        type="button"
        disabled
        aria-disabled="true"
        title="텔레그램 상담 링크가 연결되면 활성화됩니다."
        className={telegramButton}
      >
        <TelegramIcon className="h-4 w-4" />
        텔레그램 상담
      </button>
    </div>
  );
}
