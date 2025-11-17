'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wrench, Shield, Zap, Clock, Award, Users, TrendingUp, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pb-nav">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-primary shadow-soft">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold">서비스 소개</h1>
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-primary-foreground">
                홈으로
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="mx-auto max-w-5xl">
          {/* Hero */}
          <div className="mb-6 text-center">
            <Badge className="mb-3 rounded-full" variant="secondary">
              생활 기술 서비스의 새로운 기준
            </Badge>
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              달인부킹이란? 🤔
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground sm:text-base">
              1인 가구와 MZ 세대를 위한 생활 기술 서비스 플랫폼입니다.
              배달의 민족이 음식 배달을 혁신했듯이, 우리는 개인 기술자와 고객을 안전하고 빠르게 연결합니다.
            </p>
          </div>

          {/* Mission */}
          <Card className="card-cozy mb-6 border-0 bg-gradient-to-br from-primary/10 to-background">
            <CardContent className="py-8 text-center">
              <h3 className="mb-3 text-xl font-bold sm:text-2xl">우리의 미션 🎯</h3>
              <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
                "모든 사람이 집에서 어려운 일을 겪을 때,
                믿을 수 있는 기술자를 빠르고 안전하게 찾을 수 있도록 만듭니다."
              </p>
            </CardContent>
          </Card>

          {/* Problem & Solution */}
          <div className="mb-6 grid gap-4 md:grid-cols-2">
            <Card className="card-cozy border-0">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">해결하고자 하는 문제</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="text-destructive">✗</div>
                  <div>
                    <h4 className="mb-1 font-semibold">느린 견적 과정</h4>
                    <p className="text-sm text-muted-foreground">
                      기존 플랫폼은 여러 업체에서 견적을 받아 비교하는 데 1-3일 소요
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-destructive">✗</div>
                  <div>
                    <h4 className="mb-1 font-semibold">안전 불안</h4>
                    <p className="text-sm text-muted-foreground">
                      집으로 들어오는 기술자의 신원이 제대로 검증되지 않아 불안함
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-destructive">✗</div>
                  <div>
                    <h4 className="mb-1 font-semibold">불투명한 가격</h4>
                    <p className="text-sm text-muted-foreground">
                      적정 가격을 알 수 없어 바가지 걱정이 있음
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-cozy border-2 border-primary bg-primary/5">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">달인부킹의 솔루션 ✨</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <h4 className="mb-1 font-semibold">즉시 매칭 (5분-1시간)</h4>
                    <p className="text-sm text-muted-foreground">
                      AI 추천 가격으로 견적 대기 없이 바로 예약
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <h4 className="mb-1 font-semibold">철저한 신원 검증</h4>
                    <p className="text-sm text-muted-foreground">
                      범죄 경력 조회, 보험 가입 의무화로 안심 보장
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <h4 className="mb-1 font-semibold">투명한 가격</h4>
                    <p className="text-sm text-muted-foreground">
                      데이터 기반 표준 가격으로 공정한 거래
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="mb-6">
            <h3 className="mb-4 text-center text-xl font-bold sm:text-2xl">핵심 가치</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="card-cozy border-0">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg">신뢰</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">
                    모든 달인은 엄격한 검증을 거칩니다. 범죄 경력 조회, 보험 가입, 안전 교육을 완료한 전문가만 활동합니다.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-cozy border-0">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                    <Zap className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-lg">속도</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">
                    AI 추천 가격과 실시간 매칭으로 견적 대기 시간을 없앴습니다. 긴급할 때는 5분 내 달인을 찾을 수 있습니다.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-cozy border-0">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                    <Award className="h-7 w-7 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-lg">공정</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">
                    저가 경쟁이 아닌 표준 가격으로 달인의 기술 가치를 보호하고, 고객에게는 투명한 가격을 제공합니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Differentiation */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">기존 서비스와의 차이점</CardTitle>
              <CardDescription>왜 달인 부킹을 선택해야 할까요?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="pb-3 text-left font-semibold">항목</th>
                      <th className="pb-3 text-center font-semibold">기존 플랫폼</th>
                      <th className="pb-3 text-center font-semibold text-primary">달인 부킹</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 font-medium">매칭 시간</td>
                      <td className="py-4 text-center text-muted-foreground">1-3일</td>
                      <td className="py-4 text-center font-semibold text-primary">5분-1시간</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 font-medium">가격 결정</td>
                      <td className="py-4 text-center text-muted-foreground">견적 비교 필요</td>
                      <td className="py-4 text-center font-semibold text-primary">AI 즉시 추천</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 font-medium">신원 검증</td>
                      <td className="py-4 text-center text-muted-foreground">후기 중심</td>
                      <td className="py-4 text-center font-semibold text-primary">범죄경력 조회 필수</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 font-medium">보험</td>
                      <td className="py-4 text-center text-muted-foreground">선택사항</td>
                      <td className="py-4 text-center font-semibold text-primary">의무 가입</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium">서비스 범위</td>
                      <td className="py-4 text-center text-muted-foreground">광범위 (1,000개+)</td>
                      <td className="py-4 text-center font-semibold text-primary">생활 밀착형 집중</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card className="mb-12 border-primary/20 bg-gradient-to-br from-primary/10 to-background">
            <CardHeader>
              <CardTitle className="text-center text-2xl">달인 부킹의 성장</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8 md:grid-cols-4">
                <div className="text-center">
                  <Users className="mx-auto mb-2 h-10 w-10 text-primary" />
                  <div className="mb-1 text-3xl font-bold">500+</div>
                  <div className="text-sm text-muted-foreground">등록 달인</div>
                </div>
                <div className="text-center">
                  <CheckCircle className="mx-auto mb-2 h-10 w-10 text-primary" />
                  <div className="mb-1 text-3xl font-bold">2,000+</div>
                  <div className="text-sm text-muted-foreground">완료된 작업</div>
                </div>
                <div className="text-center">
                  <Clock className="mx-auto mb-2 h-10 w-10 text-primary" />
                  <div className="mb-1 text-3xl font-bold">15분</div>
                  <div className="text-sm text-muted-foreground">평균 매칭 시간</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="mx-auto mb-2 h-10 w-10 text-primary" />
                  <div className="mb-1 text-3xl font-bold">4.9</div>
                  <div className="text-sm text-muted-foreground">평균 만족도</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">고객이신가요?</CardTitle>
                <CardDescription>
                  집에서 어려운 일, 달인에게 맡기세요
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  간단한 정보 입력만으로 검증된 달인이 찾아갑니다. 3분이면 예약 완료!
                </p>
                <Link href="/request">
                  <Button className="w-full" size="lg">
                    서비스 요청하기
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">달인이 되고 싶으신가요?</CardTitle>
                <CardDescription>
                  당신의 기술로 새로운 수입을 만드세요
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  자유로운 시간에 일하고 합리적인 수익을 얻으세요. 검증 후 즉시 활동 가능!
                </p>
                <Link href="/dalin/register">
                  <Button className="w-full" size="lg" variant="outline">
                    달인 등록하기
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
