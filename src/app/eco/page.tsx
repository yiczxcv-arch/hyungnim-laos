import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "ECO",
  description: "라오스 현지 성인 간의 국제교류, 국제연애 및 국제결혼을 위한 정보와 상담 서비스.",
};

export default function EcoPage() {
  return (
    <ServicePage
      eyebrow="ECO"
      title="국제교류 · 국제연애 · 국제결혼"
      intro="현지 성인 간의 건전한 국제교류와 만남을 위한 정보 제공 및 상담 서비스입니다."
      highlights={["현지 정보 상담", "만남 진행 안내", "결혼 절차 안내"]}
      disclaimer="본 서비스는 성인 이용자를 대상으로 하며, 불법 행위나 성적 서비스의 알선·예약 기능은 포함하지 않습니다."
    />
  );
}
