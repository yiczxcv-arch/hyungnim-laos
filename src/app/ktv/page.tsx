import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "KTV",
  description: "라오스 현지 정식 사업자로 운영되는 일반 노래방(KTV) 정보 제공 및 예약 문의 서비스.",
};

export default function KtvPage() {
  return (
    <ServicePage
      eyebrow="KTV"
      title="정식 사업자 노래방 안내"
      intro="라오스 현지에서 정식 사업자로 운영되는 일반 노래방 정보와 예약 문의 서비스입니다."
      highlights={["업체 정보 안내", "룸 예약 문의", "이용 요금 안내"]}
      disclaimer="불법 서비스나 성적 서비스의 홍보·예약 기능은 포함하지 않습니다."
    />
  );
}
