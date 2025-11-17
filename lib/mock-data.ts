// Mock 데이터 - 실제 구현 시 API로 대체
export interface Service {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  icon: string;
  category: 'repair' | 'digital' | 'diy';
}

export interface Dalin {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  skills: string[];
  verified: boolean;
  grade: 'silver' | 'gold' | 'master';
  profileImage: string;
  responseRate: number;
  completedJobs: number;
}

export interface Review {
  id: string;
  dalinId: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BookingOption {
  type: 'normal' | 'priority' | 'urgent';
  label: string;
  description: string;
  surcharge: number;
  matchingTime: string;
}

export interface BookingRequest {
  id: string;
  serviceId: string;
  serviceName: string;
  customerName: string;
  description: string;
  location: string;
  date: string;
  timeSlot: string;
  bookingType: 'normal' | 'priority' | 'urgent';
  price: number;
  distance: string;
  status: 'pending' | 'accepted' | 'in-progress' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface DalinStats {
  todayJobs: number;
  weekRevenue: number;
  monthRevenue: number;
  averageRating: number;
  pendingRequests: number;
}

export const services: Service[] = [
  {
    id: '1',
    name: '가구 조립/분해',
    description: '침대, 책상, 옷장 등 가구 조립 및 분해 서비스',
    basePrice: 35000,
    icon: '🔧',
    category: 'repair'
  },
  {
    id: '2',
    name: '조명/콘센트 교체',
    description: '전등, 스위치, 콘센트 교체 및 설치',
    basePrice: 28000,
    icon: '💡',
    category: 'repair'
  },
  {
    id: '3',
    name: '수도꼭지/배수구 수리',
    description: '수도꼭지 교체, 배수구 막힘 해결',
    basePrice: 32000,
    icon: '🚰',
    category: 'repair'
  },
  {
    id: '4',
    name: '문고리/경첩 수리',
    description: '문고리, 경첩, 도어락 수리 및 교체',
    basePrice: 25000,
    icon: '🚪',
    category: 'repair'
  },
  {
    id: '5',
    name: 'PC/노트북 설정',
    description: 'OS 재설치, 소프트웨어 설치, 바이러스 제거',
    basePrice: 40000,
    icon: '💻',
    category: 'digital'
  },
  {
    id: '6',
    name: '와이파이/네트워크 설정',
    description: '공유기 설치, 네트워크 설정, 속도 개선',
    basePrice: 30000,
    icon: '📡',
    category: 'digital'
  },
  {
    id: '7',
    name: '스마트홈 기기 설치',
    description: '스마트 플러그, 조명, CCTV 설치 및 연동',
    basePrice: 35000,
    icon: '🏠',
    category: 'digital'
  },
  {
    id: '8',
    name: '기본 목공 코칭',
    description: '선반 만들기, 간단한 목공 기술 지도',
    basePrice: 45000,
    icon: '🪚',
    category: 'diy'
  }
];

export const dalins: Dalin[] = [
  {
    id: '1',
    name: '김기술',
    rating: 4.9,
    reviewCount: 127,
    skills: ['가구 조립', '전기 수리', '배관 수리'],
    verified: true,
    grade: 'master',
    profileImage: '/professional-technician.jpg',
    responseRate: 98,
    completedJobs: 245
  },
  {
    id: '2',
    name: '이수리',
    rating: 4.8,
    reviewCount: 89,
    skills: ['PC 수리', '네트워크 설정', '스마트홈'],
    verified: true,
    grade: 'gold',
    profileImage: '/it-technician.jpg',
    responseRate: 95,
    completedJobs: 156
  },
  {
    id: '3',
    name: '박만능',
    rating: 4.7,
    reviewCount: 64,
    skills: ['가구 조립', '목공', 'DIY 코칭'],
    verified: true,
    grade: 'gold',
    profileImage: '/carpenter-working.png',
    responseRate: 92,
    completedJobs: 98
  },
  {
    id: '4',
    name: '최전문',
    rating: 4.9,
    reviewCount: 156,
    skills: ['전기 수리', '조명 설치', '배선 작업'],
    verified: true,
    grade: 'master',
    profileImage: '/electrician-working.png',
    responseRate: 99,
    completedJobs: 312
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    dalinId: '1',
    customerName: '홍**',
    rating: 5,
    comment: '침대 조립을 빠르고 깔끔하게 해주셨어요. 설명도 친절하시고 믿을 수 있었습니다!',
    date: '2025-01-10'
  },
  {
    id: '2',
    dalinId: '1',
    customerName: '김**',
    rating: 5,
    comment: '콘센트 교체 요청했는데 30분 만에 끝났어요. 전문가시네요.',
    date: '2025-01-08'
  },
  {
    id: '3',
    dalinId: '2',
    customerName: '이**',
    rating: 5,
    comment: '와이파이가 안 터져서 답답했는데 금방 해결해주셨어요. 감사합니다!',
    date: '2025-01-09'
  },
  {
    id: '4',
    dalinId: '3',
    customerName: '박**',
    rating: 4,
    comment: '책상 조립 잘 해주셨어요. 시간이 조금 걸렸지만 만족합니다.',
    date: '2025-01-07'
  }
];

export const bookingOptions: BookingOption[] = [
  {
    type: 'normal',
    label: '일반 부킹',
    description: '30분~1시간 내 매칭',
    surcharge: 0,
    matchingTime: '30분~1시간'
  },
  {
    type: 'priority',
    label: '우선 부킹',
    description: '15~30분 내 우선 매칭',
    surcharge: 0.10,
    matchingTime: '15~30분'
  },
  {
    type: 'urgent',
    label: '긴급 부킹',
    description: '즉시 매칭 (5~15분)',
    surcharge: 0.20,
    matchingTime: '5~15분'
  }
];

export const mockBookingRequests: BookingRequest[] = [
  {
    id: '1',
    serviceId: '1',
    serviceName: '가구 조립/분해',
    customerName: '홍길동',
    description: 'IKEA 침대 프레임 조립이 필요합니다. 설명서는 있습니다.',
    location: '서울 강남구 역삼동',
    date: '2025-01-18',
    timeSlot: '14:00-16:00',
    bookingType: 'urgent',
    price: 42000,
    distance: '1.2km',
    status: 'pending',
    createdAt: '2025-01-17T10:30:00'
  },
  {
    id: '2',
    serviceId: '2',
    serviceName: '조명/콘센트 교체',
    customerName: '김영희',
    description: '거실 조명 교체 부탁드립니다. LED 조명으로 교체하고 싶습니다.',
    location: '서울 강남구 삼성동',
    date: '2025-01-18',
    timeSlot: '16:00-18:00',
    bookingType: 'normal',
    price: 28000,
    distance: '2.5km',
    status: 'pending',
    createdAt: '2025-01-17T11:15:00'
  },
  {
    id: '3',
    serviceId: '5',
    serviceName: 'PC/노트북 설정',
    customerName: '이철수',
    description: '노트북 속도가 너무 느려서 OS 재설치 필요합니다.',
    location: '서울 서초구 서초동',
    date: '2025-01-19',
    timeSlot: '10:00-12:00',
    bookingType: 'priority',
    price: 44000,
    distance: '3.8km',
    status: 'pending',
    createdAt: '2025-01-17T09:45:00'
  }
];

export const mockAcceptedJobs: BookingRequest[] = [
  {
    id: '4',
    serviceId: '1',
    serviceName: '가구 조립/분해',
    customerName: '박민수',
    description: '책상 조립 부탁드립니다.',
    location: '서울 강남구 청담동',
    date: '2025-01-17',
    timeSlot: '15:00-17:00',
    bookingType: 'normal',
    price: 35000,
    distance: '1.8km',
    status: 'accepted',
    createdAt: '2025-01-16T14:20:00'
  }
];

export const mockDalinStats: DalinStats = {
  todayJobs: 2,
  weekRevenue: 385000,
  monthRevenue: 1520000,
  averageRating: 4.9,
  pendingRequests: 3
};

// AI 가격 계산 시뮬레이션 (실제로는 Gemini API 사용)
export function calculateAIPrice(
  basePrice: number,
  region: string,
  timeSlot: string,
  bookingType: 'normal' | 'priority' | 'urgent'
): number {
  let finalPrice = basePrice;
  
  // 지역 할증
  if (region === 'seoul') finalPrice *= 1.1;
  else if (region === 'gyeonggi') finalPrice *= 1.05;
  
  // 시간대 할증
  if (timeSlot === 'night') finalPrice *= 1.15;
  else if (timeSlot === 'weekend') finalPrice *= 1.2;
  
  // 부킹 옵션 할증
  const option = bookingOptions.find(opt => opt.type === bookingType);
  if (option) finalPrice *= (1 + option.surcharge);
  
  return Math.round(finalPrice / 1000) * 1000; // 천원 단위로 반올림
}
