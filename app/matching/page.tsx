'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { dalins, reviews } from '@/lib/mock-data';
import { Wrench, Star, CheckCircle, MessageCircle, Shield } from 'lucide-react';

function MatchingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isMatching, setIsMatching] = useState(true);
  const [matchedDalin, setMatchedDalin] = useState<typeof dalins[0] | null>(null);

  useEffect(() => {
    // Mock: 3초 후 매칭 완료
    const timer = setTimeout(() => {
      setIsMatching(false);
      setMatchedDalin(dalins[0]); // 첫 번째 달인과 매칭
      console.log('[v0] 매칭 완료:', dalins[0].name);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const dalinReviews = matchedDalin ? reviews.filter(r => r.dalinId === matchedDalin.id) : [];

  if (isMatching) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center gap-4 py-8 sm:gap-6 sm:py-12">
            <div className="relative">
              <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent sm:h-20 sm:w-20" />
              <Wrench className="absolute inset-0 m-auto h-6 w-6 text-primary sm:h-8 sm:w-8" />
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-xl font-bold sm:text-2xl">달인을 찾고 있습니다...</h3>
              <p className="text-sm text-muted-foreground sm:text-base">
                가까운 곳에 있는 최고의 달인을 매칭 중입니다
              </p>
            </div>
            <div className="w-full space-y-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                <span>신원 검증 완료된 달인만 매칭</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                <span>평점 4.5 이상 우선 매칭</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                <span>가까운 거리 우선 배정</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!matchedDalin) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-3 lg:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Wrench className="h-6 w-6 text-primary sm:h-8 sm:w-8" />
              <h1 className="text-xl font-bold sm:text-2xl">달인 부킹</h1>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mx-auto max-w-3xl">
          {/* 매칭 완료 메시지 */}
          <div className="mb-6 rounded-lg bg-green-50 p-4 text-center dark:bg-green-950/20 sm:mb-8 sm:p-6">
            <CheckCircle className="mx-auto mb-3 h-12 w-12 text-green-500 sm:mb-4 sm:h-16 sm:w-16" />
            <h2 className="mb-2 text-xl font-bold text-green-900 dark:text-green-100 sm:text-2xl">
              매칭이 완료되었습니다!
            </h2>
            <p className="text-sm text-green-700 dark:text-green-300 sm:text-base">
              {matchedDalin.name} 달인이 요청을 수락했습니다
            </p>
          </div>

          {/* 달인 프로필 */}
          <Card className="mb-4 sm:mb-6">
            <CardHeader>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <Avatar className="h-16 w-16 self-center sm:h-20 sm:w-20">
                  <AvatarImage src={matchedDalin.profileImage || "/placeholder.svg"} alt={matchedDalin.name} />
                  <AvatarFallback>{matchedDalin.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center sm:text-left">
                  <div className="mb-2 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                    <CardTitle className="text-xl sm:text-2xl">{matchedDalin.name}</CardTitle>
                    {matchedDalin.verified && (
                      <Badge variant="secondary" className="gap-1 text-xs">
                        <Shield className="h-3 w-3" />
                        검증완료
                      </Badge>
                    )}
                    <Badge variant="outline" className="text-xs">
                      {matchedDalin.grade === 'master' && '마스터 달인'}
                      {matchedDalin.grade === 'gold' && '골드 달인'}
                      {matchedDalin.grade === 'silver' && '실버 달인'}
                    </Badge>
                  </div>
                  <div className="mb-3 flex flex-wrap items-center justify-center gap-3 text-xs sm:justify-start sm:gap-4 sm:text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 sm:h-4 sm:w-4" />
                      <span className="font-semibold">{matchedDalin.rating}</span>
                      <span className="text-muted-foreground">
                        ({matchedDalin.reviewCount})
                      </span>
                    </div>
                    <div className="text-muted-foreground">
                      완료 {matchedDalin.completedJobs}건
                    </div>
                    <div className="text-muted-foreground">
                      응답률 {matchedDalin.responseRate}%
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                    {matchedDalin.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                <Button className="flex-1" size="lg">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  채팅하기
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  전화하기
                </Button>
              </div>
              <p className="text-center text-xs text-muted-foreground sm:text-sm">
                달인이 곧 연락드릴 예정입니다. 평균 응답 시간: 5분
              </p>
            </CardContent>
          </Card>

          {/* 서비스 정보 */}
          <Card className="mb-4 sm:mb-6">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">서비스 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-3">
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-muted-foreground">예상 비용</span>
                <span className="text-lg font-bold text-primary sm:text-xl">
                  {searchParams.get('price')?.toLocaleString()}원
                </span>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-muted-foreground">예약 상태</span>
                <Badge>매칭 완료</Badge>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-muted-foreground">예상 작업 시간</span>
                <span>1-2시간</span>
              </div>
              <div className="border-t pt-3 text-sm text-muted-foreground sm:space-y-2 sm:text-sm">
                결제는 서비스가 완료된 후에 진행됩니다. 안심하세요!
              </div>
            </CardContent>
          </Card>

          {/* 후기 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">달인 후기</CardTitle>
              <CardDescription className="text-sm">실제 고객들의 생생한 후기를 확인하세요</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                {dalinReviews.map((review) => (
                  <div key={review.id} className="border-b pb-3 last:border-0 sm:pb-4">
                    <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold sm:text-base">{review.customerName}</span>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground sm:text-sm">{review.date}</span>
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 안내사항 */}
          <Card className="mt-4 border-primary/20 bg-primary/5 sm:mt-6">
            <CardContent className="py-4 sm:py-6">
              <h4 className="mb-2 text-sm font-semibold sm:mb-3 sm:text-base">서비스 이용 안내</h4>
              <ul className="space-y-1 text-xs text-muted-foreground sm:space-y-2 sm:text-sm">
                <li>• 달인이 도착하면 신분증을 확인해주세요</li>
                <li>• 작업 전 최종 견적을 확인하고 동의해주세요</li>
                <li>• 서비스 중 문제가 발생하면 즉시 고객센터에 연락하세요</li>
                <li>• 서비스 완료 후 꼭 후기를 남겨주세요</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default function MatchingPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center gap-4 py-8 sm:gap-6 sm:py-12">
            <div className="relative">
              <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent sm:h-20 sm:w-20" />
              <Wrench className="absolute inset-0 m-auto h-6 w-6 text-primary sm:h-8 sm:w-8" />
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-xl font-bold sm:text-2xl">로딩 중...</h3>
              <p className="text-sm text-muted-foreground sm:text-base">
                잠시만 기다려주세요
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    }>
      <MatchingContent />
    </Suspense>
  );
}
