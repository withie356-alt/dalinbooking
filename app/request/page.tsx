'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { services, bookingOptions, calculateAIPrice } from '@/lib/mock-data';
import { Wrench, ArrowLeft, Upload, MapPin, Calendar, Clock } from 'lucide-react';

export default function RequestPage() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<string>('');
  const [description, setDescription] = useState('');
  const [bookingType, setBookingType] = useState<'normal' | 'priority' | 'urgent'>('normal');
  const [region] = useState('seoul'); // 실제로는 위치 API 사용
  const [timeSlot] = useState('weekday'); // 실제로는 선택된 시간대 사용

  const selectedServiceData = services.find(s => s.id === selectedService);
  const estimatedPrice = selectedServiceData 
    ? calculateAIPrice(selectedServiceData.basePrice, region, timeSlot, bookingType)
    : 0;

  const handleSubmit = () => {
    // 실제로는 API 호출
    console.log('[v0] 서비스 요청 제출:', {
      serviceId: selectedService,
      description,
      bookingType,
      estimatedPrice
    });
    
    // Mock: 매칭 페이지로 이동
    router.push(`/matching?service=${selectedService}&price=${estimatedPrice}`);
  };

  return (
    <div className="min-h-screen bg-background pb-nav">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur-sm shadow-soft">
        <div className="container mx-auto px-4 py-3 lg:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Wrench className="h-5 w-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold sm:text-2xl">달인 부킹</h1>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm" className="rounded-full sm:size-default">
                <ArrowLeft className="mr-0 h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">돌아가기</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 sm:mb-8">
            <h2 className="mb-2 text-2xl font-bold sm:text-3xl">서비스 요청하기 ✨</h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              필요한 서비스를 선택하고 간단히 설명해주세요.<br className="sm:hidden" /> AI가 적정 가격을 추천해드립니다.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* 서비스 선택 */}
            <Card className="card-cozy border-0">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">1. 서비스 선택 🛠️</CardTitle>
                <CardDescription className="text-sm">필요한 서비스 종류를 선택해주세요</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`flex items-start gap-3 rounded-2xl border-2 p-3 text-left transition-all active:scale-95 sm:gap-4 sm:p-4 ${
                        selectedService === service.id
                          ? 'border-primary bg-primary/10 shadow-soft'
                          : 'border-border hover:border-primary/50 hover:shadow-soft'
                      }`}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl sm:h-14 sm:w-14 sm:text-3xl">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <div className="mb-1 text-sm font-semibold sm:text-base">{service.name}</div>
                        <div className="line-clamp-2 text-xs text-muted-foreground sm:text-sm">
                          {service.description}
                        </div>
                        <div className="mt-1 text-xs font-semibold text-primary sm:mt-2 sm:text-sm">
                          {service.basePrice.toLocaleString()}원~
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 상세 설명 */}
            <Card className="card-cozy border-0">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">2. 상세 설명 ✍️</CardTitle>
                <CardDescription className="text-sm">
                  어떤 도움이 필요하신가요? 사진을 첨부하시면 더 정확한 매칭이 가능합니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="description" className="text-sm font-medium">상세 내용</Label>
                  <Textarea
                    id="description"
                    placeholder="예: 침대 조립이 필요합니다. IKEA 말름 침대 프레임이고, 설명서는 있습니다."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    className="mt-2 rounded-xl"
                  />
                </div>
                <div>
                  <Button variant="outline" className="w-full btn-touch rounded-full">
                    <Upload className="mr-2 h-4 w-4" />
                    사진 첨부하기
                  </Button>
                  <p className="mt-2 text-center text-xs text-muted-foreground sm:text-sm">
                    최대 5장까지 첨부 가능 (선택사항)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 일정 및 위치 */}
            <Card className="card-cozy border-0">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">3. 일정 및 위치 📍</CardTitle>
                <CardDescription className="text-sm">서비스를 받을 시간과 장소를 알려주세요</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div>
                  <Label className="text-sm font-medium">희망 날짜</Label>
                  <Button variant="outline" className="mt-2 w-full justify-start btn-touch rounded-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    날짜 선택하기
                  </Button>
                </div>
                <div>
                  <Label className="text-sm font-medium">희망 시간대</Label>
                  <Button variant="outline" className="mt-2 w-full justify-start btn-touch rounded-full">
                    <Clock className="mr-2 h-4 w-4" />
                    시간대 선택하기
                  </Button>
                </div>
                <div>
                  <Label className="text-sm font-medium">서비스 위치</Label>
                  <Button variant="outline" className="mt-2 w-full justify-start btn-touch rounded-full">
                    <MapPin className="mr-2 h-4 w-4" />
                    주소 입력하기
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 부킹 옵션 */}
            <Card className="card-cozy border-0">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">4. 매칭 속도 선택 ⚡</CardTitle>
                <CardDescription className="text-sm">
                  빠른 매칭이 필요하신가요? 긴급 옵션으로 5분 내 달인을 찾을 수 있습니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={bookingType} onValueChange={(value: any) => setBookingType(value)}>
                  <div className="space-y-2 sm:space-y-3">
                    {bookingOptions.map((option) => (
                      <div
                        key={option.type}
                        className={`flex items-center space-x-2 rounded-2xl border-2 p-3 transition-all sm:space-x-3 sm:p-4 ${
                          bookingType === option.type
                            ? 'border-primary bg-primary/10 shadow-soft'
                            : 'border-border hover:border-primary/30'
                        }`}
                      >
                        <RadioGroupItem value={option.type} id={option.type} />
                        <Label htmlFor={option.type} className="flex-1 cursor-pointer">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <div className="text-sm font-semibold sm:text-base">{option.label}</div>
                              <div className="text-xs text-muted-foreground sm:text-sm">
                                {option.description}
                              </div>
                            </div>
                            {option.surcharge > 0 && (
                              <Badge variant="secondary" className="w-fit rounded-full text-xs">
                                +{(option.surcharge * 100).toFixed(0)}%
                              </Badge>
                            )}
                          </div>
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* 가격 요약 */}
            {selectedServiceData && (
              <Card className="card-cozy border-2 border-primary bg-gradient-to-br from-primary/5 to-background">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">AI 추천 가격 💰</CardTitle>
                  <CardDescription className="text-sm">
                    선택하신 서비스와 옵션을 기반으로 계산된 예상 가격입니다
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">기본 서비스</span>
                      <span className="font-medium">{selectedServiceData.basePrice.toLocaleString()}원</span>
                    </div>
                    {bookingType !== 'normal' && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {bookingOptions.find(opt => opt.type === bookingType)?.label} 할증
                        </span>
                        <span className="font-medium text-primary">
                          +{((estimatedPrice - selectedServiceData.basePrice)).toLocaleString()}원
                        </span>
                      </div>
                    )}
                    <div className="border-t pt-3">
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg font-semibold sm:text-xl">예상 총액</span>
                        <span className="text-2xl font-bold text-primary sm:text-3xl">
                          {estimatedPrice.toLocaleString()}원
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="mt-6 w-full btn-touch shadow-soft-lg hover:shadow-xl transition-shadow"
                    size="lg"
                    onClick={handleSubmit}
                    disabled={!selectedService || !description}
                  >
                    달인 찾기 →
                  </Button>
                  <p className="mt-3 text-center text-xs text-muted-foreground sm:text-sm">
                    💳 결제는 서비스 완료 후 진행됩니다
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
