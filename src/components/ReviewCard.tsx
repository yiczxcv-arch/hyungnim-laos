import { StarIcon, UserIcon } from "@/components/icons";
import type { HomeReview } from "@/lib/home-content";

export function ReviewCard({ review }: { review: HomeReview }) {
  return (
    <div className="flex w-56 shrink-0 snap-start flex-col rounded-2xl border border-neutral-100 bg-white p-4 shadow-md shadow-neutral-200/60 sm:w-56 sm:shadow-sm">
      <span
        className={`inline-flex w-fit shrink-0 items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold ${review.serviceClassName}`}
      >
        {review.service}
      </span>

      <div className="mt-2.5 flex items-center gap-2">
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${review.avatarClassName}`}>
          <UserIcon className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm leading-tight font-bold text-neutral-900">{review.name}</p>
          <p className="mt-0.5 truncate text-xs leading-tight text-neutral-400">{review.date}</p>
        </div>
      </div>

      <div className="mt-2 flex gap-0.5 text-amber-500">
        {Array.from({ length: review.rating }).map((_, index) => (
          <StarIcon key={index} className="h-3.5 w-3.5" />
        ))}
      </div>

      <p className="mt-1.5 line-clamp-3 text-sm leading-snug text-neutral-600">{review.content}</p>
    </div>
  );
}
