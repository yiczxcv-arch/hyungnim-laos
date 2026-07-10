export function EmptyState({ message, className = "" }: { message: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 text-center text-sm text-neutral-400 ${className}`}
    >
      {message}
    </div>
  );
}
