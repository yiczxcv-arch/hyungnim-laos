import type { Metadata } from "next";
import { ServiceHero, ServiceIntro, ServiceRecommendation, ServiceCTA } from "@/components/service-sections";
import { recommendedGolf } from "@/lib/dummy-data";

export const metadata: Metadata = {
  title: "GOLF",
  description: "라오스 골프장 정보, 예약 문의, 골프 패키지 안내.",
};

export default function GolfPage() {
  return (
    <>
      <ServiceHero
        bannerSrc="/images/banners/golf-banner.png"
        bannerAlt="비엔티안 골프 예약"
        title="비엔티안 골프 예약"
        description="원하는 일정과 인원에 맞춰 골프장 예약을 안내해드립니다."
      />
      <ServiceIntro
        imageSrc="/images/services/service-golf.png"
        imageAlt="골프장 예약"
        title="골프장 예약"
        description="비엔티안 골프장 예약과 일정을 편하게 안내해드립니다."
      />
      <ServiceRecommendation
        title="추천 골프장"
        emptyMessage="원하는 날짜와 인원을 알려주시면 조건에 맞는 골프장을 추천해드립니다."
        items={recommendedGolf}
      />
      <ServiceCTA
        imageSrc="/images/banners/golf-banner.png"
        imageAlt="골프 예약 문의"
        title="골프 예약이 필요하신가요?"
        description="원하는 날짜와 인원을 알려주시면 빠르게 안내해드립니다."
      />
    </>
  );
}
