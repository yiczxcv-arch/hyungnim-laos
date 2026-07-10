import type { Metadata } from "next";
import { Container } from "@/components/container";

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
        <p className="mt-4 max-w-xl text-neutral-500">
          준비 중입니다. 곧 실제 이용 후기를 만나보실 수 있습니다.
        </p>
      </Container>
    </section>
  );
}
