import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "ADMIN",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight">관리자</h1>
        <p className="mt-4 max-w-xl text-neutral-500 dark:text-neutral-400">
          관리자 대시보드는 준비 중입니다. 로그인 및 문의 관리 기능이 이곳에 추가될 예정입니다.
        </p>
      </Container>
    </section>
  );
}
