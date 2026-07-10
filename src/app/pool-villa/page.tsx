import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "POOL VILLA",
  description: "라오스 풀빌라, 숙소, 리조트 예약 문의 서비스.",
};

export default function PoolVillaPage() {
  return (
    <ServicePage
      eyebrow="POOL VILLA"
      title="풀빌라 · 숙소 · 리조트"
      intro="라오스 현지 풀빌라와 숙소, 리조트 예약 문의 서비스입니다."
      highlights={["풀빌라 안내", "숙소 정보", "예약 문의"]}
    />
  );
}
