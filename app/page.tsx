import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { services } from '@/lib/mock-data';
import { Wrench, Zap, Shield, Clock, Search, Bell } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background pb-nav">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-primary shadow-soft">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold">달인부킹</h1>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground">
                <Bell className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* 검색 영역 */}
      <section className="bg-primary pb-6 pt-3">
        <div className="container mx-auto px-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="어떤 서비스가 필요하세요?"
              className="h-12 rounded-full border-0 bg-card pl-12 pr-4 shadow-soft-lg"
            />
          </div>
        </div>
      </section>

      {/* Services - 배민 스타일 */}
      <section className="bg-background py-4">
        <div className="container mx-auto px-4">
          <h3 className="mb-4 text-lg font-bold">서비스 선택</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {services.slice(0, 8).map((service) => (
              <Link key={service.id} href={`/request?service=${service.id}`}>
                <div className="flex flex-col items-center gap-3 rounded-2xl bg-card p-5 shadow-soft transition-all active:scale-95 hover:shadow-soft-lg">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-4xl">
                    {service.icon}
                  </div>
                  <div className="text-center">
                    <div className="mb-1 text-sm font-semibold">{service.name}</div>
                    <div className="text-xs text-primary font-medium">
                      {service.basePrice.toLocaleString()}원~
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 빠른 메뉴 */}
      <section className="bg-background py-4">
        <div className="container mx-auto px-4">
          <h3 className="mb-4 text-lg font-bold">빠른 메뉴</h3>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/about">
              <div className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-soft transition-all active:scale-95">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold">서비스 소개</div>
                  <div className="text-xs text-muted-foreground">안전한 서비스</div>
                </div>
              </div>
            </Link>
            <Link href="/dalin">
              <div className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-soft transition-all active:scale-95">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                  <Zap className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold">달인 등록</div>
                  <div className="text-xs text-muted-foreground">수익 창출하기</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 배너 */}
      <section className="bg-background py-4">
        <div className="container mx-auto px-4">
          <Link href="/about">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/80 p-6 shadow-soft-lg">
              <div className="relative z-10">
                <Badge className="mb-2 rounded-full bg-card/20 px-3 py-1 text-xs font-medium text-primary-foreground">
                  첫 이용 혜택
                </Badge>
                <h3 className="mb-1 text-lg font-bold text-primary-foreground">
                  첫 서비스 10% 할인
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  지금 가입하고 할인 혜택 받으세요 →
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-6">
        <div className="container mx-auto px-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <Wrench className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold">달인부킹</span>
            </div>
            <Link href="/about">
              <Button variant="ghost" size="sm" className="text-xs">
                서비스 소개
              </Button>
            </Link>
          </div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <p>고객센터: support@dalinbooking.kr</p>
            <p>운영시간: 평일 09:00 - 18:00</p>
          </div>
          <div className="mt-4 border-t pt-4 text-center text-xs text-muted-foreground">
            © 2025 달인부킹. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
