import { StarIcon } from "@/components/icons";

export type Review = {
  id: string;
  name: string;
  createdAt: string;
  rating: number;
  content: string;
  tag: string;
};

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex w-64 shrink-0 flex-col gap-3 rounded-2xl border border-neutral-200 p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-sm font-bold text-neutral-500">
          {review.name.slice(0, 1)}
        </span>
        <div>
          <p className="text-sm font-semibold text-neutral-900">{review.name}</p>
          <p className="text-xs text-neutral-400">{review.createdAt}</p>
        </div>
      </div>

      <div className="flex gap-0.5 text-amber-500">
        {Array.from({ length: review.rating }).map((_, index) => (
          <StarIcon key={index} className="h-3.5 w-3.5" />
        ))}
      </div>

      <p className="text-sm text-neutral-600">{review.content}</p>

      <span className="w-fit rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500">
        {review.tag}
      </span>
    </div>
  );
}
