// TODO: Replace with real database.
// Everything in this file is placeholder content for UI/UX design review only.
// Do not ship to production without swapping each export below for real data.

export type CommunityStat = { label: string; value: string };

// TODO: Replace with real database. (KakaoTalk open-chat participant/activity stats)
export const communityStats: CommunityStat[] = [
  { label: "참여중", value: "1,842명" },
  { label: "오늘 대화", value: "387개" },
  { label: "오늘 후기", value: "8개" },
  { label: "오늘 예약", value: "14건" },
];

export type CommunityMessage = { id: string; name: string; preview: string; time: string };

// TODO: Replace with real database. (recent KakaoTalk open-chat messages)
export const communityRecentMessages: CommunityMessage[] = [
  { id: "1", name: "김형님", preview: "어제 KTV 다녀왔는데 시설 최고였어요!", time: "5분 전" },
  { id: "2", name: "이형님", preview: "풀빌라 뷰 진짜 좋네요 추천합니다", time: "12분 전" },
  { id: "3", name: "박형님", preview: "공항 픽업 기사님 친절하셨어요", time: "20분 전" },
];

export type RelatedVideo = { id: string; title: string; thumbnail: string; duration: string };

// TODO: Replace with real database. (YouTube Data API results)
export const relatedVideos: RelatedVideo[] = [
  { id: "1", title: "풀빌라 추천 TOP 3", thumbnail: "/images/videos/video-poolvilla.png", duration: "08:12" },
  { id: "2", title: "골프장 솔직 리뷰", thumbnail: "/images/services/service-golf.png", duration: "11:05" },
  { id: "3", title: "공항 픽업 서비스 안내", thumbnail: "/images/videos/video-ktv.png", duration: "04:30" },
  { id: "4", title: "에코 동행 후기 모음", thumbnail: "/images/videos/video-eco.png", duration: "06:47" },
  { id: "5", title: "비엔티안 야경 투어", thumbnail: "/images/hero/home-hero-01.png", duration: "09:58" },
];

export type DummyReview = {
  id: string;
  name: string;
  createdAt: string;
  rating: number;
  content: string;
  tag: string;
};

// TODO: Replace with real database. (reviews table)
export const dummyReviews: DummyReview[] = [
  { id: "1", name: "박형님", createdAt: "10분 전", rating: 5, content: "KTV 다녀왔어요! 룸 컨디션 최고였습니다 👍", tag: "KTV 이용" },
  { id: "2", name: "이형님", createdAt: "25분 전", rating: 5, content: "풀빌라 정말 좋네요. 프라이빗하고 깨끗합니다!", tag: "풀빌라 이용" },
  { id: "3", name: "최형님", createdAt: "1시간 전", rating: 5, content: "공항 픽업 서비스 이용했는데 기사님 친절하고 좋았어요", tag: "픽업 서비스" },
  { id: "4", name: "정형님", createdAt: "2시간 전", rating: 5, content: "마사지샵 추천받아서 갔는데 너무 시원하고 만족!", tag: "에코 시스템" },
  { id: "5", name: "김형님", createdAt: "3시간 전", rating: 4, content: "골프장 예약 빠르게 도와주셔서 감사합니다.", tag: "골프" },
  { id: "6", name: "장형님", createdAt: "5시간 전", rating: 5, content: "현지 사정을 잘 알려주셔서 편하게 다녀왔습니다.", tag: "상담" },
  { id: "7", name: "윤형님", createdAt: "어제", rating: 5, content: "형님방에서 정보 얻고 바로 예약했는데 실수 없었어요.", tag: "예약 문의" },
  { id: "8", name: "한형님", createdAt: "2일 전", rating: 4, content: "가격도 합리적이고 응대도 빨라서 좋았습니다.", tag: "상담" },
];

export type RecommendedItem = { id: string; name: string; description: string; image: string };

// TODO: Replace with real database. (operator/venue partner listings)
export const recommendedKtv: RecommendedItem[] = [
  { id: "1", name: "VIP 라운지 KTV", description: "넓은 룸과 최신 음향 시설을 갖춘 프리미엄 KTV", image: "/images/services/service-ktv.png" },
  { id: "2", name: "골든 나이트 KTV", description: "비엔티안 중심가에 위치한 인기 KTV", image: "/images/videos/video-ktv.png" },
  { id: "3", name: "문라이트 KTV", description: "단체 모임에 적합한 대형 룸 보유", image: "/images/banners/ktv-banner.png" },
];

// TODO: Replace with real database. (operator/venue partner listings)
export const recommendedPoolVilla: RecommendedItem[] = [
  { id: "1", name: "리버뷰 풀빌라", description: "메콩강 전망을 갖춘 프라이빗 풀빌라", image: "/images/services/service-poolvilla.png" },
  { id: "2", name: "선셋 풀빌라", description: "노을이 아름다운 프리미엄 풀빌라", image: "/images/videos/video-poolvilla.png" },
  { id: "3", name: "가든 풀빌라", description: "넓은 정원이 있는 가족형 풀빌라", image: "/images/banners/poolvilla-banner.png" },
];

// TODO: Replace with real database. (operator/venue partner listings)
export const recommendedEco: RecommendedItem[] = [
  { id: "1", name: "힐링 동행 코스", description: "여유로운 일정의 현지 동행 서비스", image: "/images/services/service-eco.png" },
  { id: "2", name: "프리미엄 동행 케어", description: "1:1 맞춤형 동행 & 힐링 서비스", image: "/images/videos/video-eco.png" },
  { id: "3", name: "시내 힐링 코스", description: "비엔티안 시내 중심 반나절 동행 코스", image: "/images/banners/eco-banner.png" },
];

// TODO: Replace with real database. (operator/venue partner listings)
export const recommendedGolf: RecommendedItem[] = [
  { id: "1", name: "라오스 컨트리클럽", description: "18홀 챔피언십 골프 코스", image: "/images/services/service-golf.png" },
  { id: "2", name: "메콩 리버 골프장", description: "강변 전망의 인기 골프장", image: "/images/banners/golf-banner.png" },
];
