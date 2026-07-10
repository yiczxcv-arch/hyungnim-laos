import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "GOLF",
  description: "라오스 골프장 정보, 예약 문의, 골프 패키지 안내.",
};

export default function GolfPage() {
  return (
    <ServicePage
      eyebrow="GOLF"
      title="라오스 골프장 안내"
      intro="라오스 현지 골프장 정보와 예약 문의, 골프 패키지를 안내해 드립니다."
      highlights={["골프장 정보", "예약 문의", "패키지 안내"]}
    />
  );
}
