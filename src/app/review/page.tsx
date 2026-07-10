import type { Metadata } from "next";
import { Container } from "@/components/container";
import { EmptyState } from "@/components/EmptyState";

export const metadata: Metadata = {
  title: "REVIEW",
  description: "HYUNGNIM LAOS 이용 후기.",
};

export default function ReviewPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <p className="text-sm font-medium tracking-widest text-amber-600 uppercase">Review</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">이용 후기</h1>
        <p className="mt-4 max-w-xl text-neutral-500">실제 이용자의 후기만 등록됩니다.</p>

        <EmptyState message="등록된 후기가 없습니다." className="mt-8 h-40" />
      </Container>
    </section>
  );
}
