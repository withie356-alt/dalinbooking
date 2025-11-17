'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { services, calculateAIPrice, bookingOptions } from '@/lib/mock-data';
import { Wrench, ArrowLeft, TrendingUp, MapPin, Clock, Zap } from 'lucide-react';

export default function PricingCalculatorPage() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [region, setRegion] = useState<'seoul' | 'gyeonggi' | 'other'>('seoul');
  const [timeSlot, setTimeSlot] = useState<'weekday' | 'night' | 'weekend'>('weekday');
  const [bookingType, setBookingType] = useState<'normal' | 'priority' | 'urgent'>('normal');
  
  const estimatedPrice = calculateAIPrice(selectedService.basePrice, region, timeSlot, bookingType);
  const basePrice = selectedService.basePrice;
  const regionSurcharge = region === 'seoul' ? basePrice * 0.1 : region === 'gyeonggi' ? basePrice * 0.05 : 0;
  const timeSurcharge = timeSlot === 'night' ? basePrice * 0.15 : timeSlot === 'weekend' ? basePrice * 0.2 : 0;
  const bookingSurcharge = bookingOptions.find(opt => opt.type === bookingType)?.surcharge || 0;
  const bookingAmount = (basePrice + regionSurcharge + timeSurcharge) * bookingSurcharge;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Wrench className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold">달인 부킹</h1>
            </Link>
            <Link href="/">
              <Button variant="ghost">
                <ArrowLeft className="mr-2 h-4 w-4" />
                돌아가기
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-6xl">
          {/* Hero */}
          <div className="mb-8 text-center">
            <Badge className="mb-4" variant="secondary">
              AI 추천 가격 계산기
            </Badge>
            <h2 className="mb-4 text-4xl font-bold text-balance">
              투명하고 공정한 가격<br />
              AI가 추천해드립니다
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              수천 건의 거래 데이터를 분석하여 서비스, 지역, 시간대에 맞는 적정 가격을 제시합니다.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Calculator */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>서비스 선택</CardTitle>
                  <CardDescription>어떤 서비스가 필요하신가요?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service)}
                        className={`flex items-center gap-3 rounded-lg border-2 p-3 text-left transition-colors ${
                          selectedService.id === service.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="text-2xl">{service.icon}</div>
                        <div className="flex-1">
                          <div className="font-semibold">{service.name}</div>
                          <div className="text-sm text-muted-foreground">
                            기본 {service.basePrice.toLocaleString()}원
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    지역
                  </CardTitle>
                  <CardDescription>서비스를 받을 지역을 선택하세요</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={region} onValueChange={(value: any) => setRegion(value)}>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="seoul" id="seoul" />
                        <Label htmlFor="seoul" className="flex flex-1 cursor-pointer justify-between">
                          <span>서울</span>
                          <Badge variant="secondary">+10%</Badge>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="gyeonggi" id="gyeonggi" />
                        <Label htmlFor="gyeonggi" className="flex flex-1 cursor-pointer justify-between">
                          <span>경기</span>
                          <Badge variant="secondary">+5%</Badge>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="flex flex-1 cursor-pointer justify-between">
                          <span>기타 지역</span>
                          <Badge variant="outline">할증 없음</Badge>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    시간대
                  </CardTitle>
                  <CardDescription>서비스를 받을 시간대를 선택하세요</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={timeSlot} onValueChange={(value: any) => setTimeSlot(value)}>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="weekday" id="weekday" />
                        <Label htmlFor="weekday" className="flex flex-1 cursor-pointer justify-between">
                          <span>평일 낮 (09:00-18:00)</span>
                          <Badge variant="outline">할증 없음</Badge>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="night" id="night" />
                        <Label htmlFor="night" className="flex flex-1 cursor-pointer justify-between">
                          <span>평일 저녁/야간 (18:00-21:00)</span>
                          <Badge variant="secondary">+15%</Badge>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="weekend" id="weekend" />
                        <Label htmlFor="weekend" className="flex flex-1 cursor-pointer justify-between">
                          <span>주말/공휴일</span>
                          <Badge variant="secondary">+20%</Badge>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    매칭 속도
                  </CardTitle>
                  <CardDescription>얼마나 빨리 달인을 찾으시겠어요?</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={bookingType} onValueChange={(value: any) => setBookingType(value)}>
                    <div className="space-y-3">
                      {bookingOptions.map((option) => (
                        <div key={option.type} className="flex items-center space-x-3">
                          <RadioGroupItem value={option.type} id={`booking-${option.type}`} />
                          <Label 
                            htmlFor={`booking-${option.type}`} 
                            className="flex flex-1 cursor-pointer justify-between"
                          >
                            <div>
                              <div className="font-semibold">{option.label}</div>
                              <div className="text-sm text-muted-foreground">{option.description}</div>
                            </div>
                            {option.surcharge > 0 && (
                              <Badge variant="secondary">
                                +{(option.surcharge * 100).toFixed(0)}%
                              </Badge>
                            )}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            {/* Price Summary */}
            <div className="space-y-6">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-2xl">예상 가격</CardTitle>
                  <CardDescription>
                    선택하신 옵션을 기반으로 계산된 AI 추천 가격입니다
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-6 text-center">
                    <div className="mb-2 text-sm text-muted-foreground">AI 추천 가격</div>
                    <div className="text-5xl font-bold text-primary">
                      {estimatedPrice.toLocaleString()}
                      <span className="text-2xl">원</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">가격 구성</h4>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">기본 서비스</span>
                        <span className="font-medium">{basePrice.toLocaleString()}원</span>
                      </div>
                      
                      {regionSurcharge > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">지역 할증</span>
                          <span className="font-medium text-primary">
                            +{regionSurcharge.toLocaleString()}원
                          </span>
                        </div>
                      )}
                      
                      {timeSurcharge > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">시간대 할증</span>
                          <span className="font-medium text-primary">
                            +{timeSurcharge.toLocaleString()}원
                          </span>
                        </div>
                      )}
                      
                      {bookingAmount > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            {bookingOptions.find(opt => opt.type === bookingType)?.label}
                          </span>
                          <span className="font-medium text-primary">
                            +{Math.round(bookingAmount).toLocaleString()}원
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="border-t pt-3">
                      <div className="flex justify-between">
                        <span className="font-semibold">총 예상 금액</span>
                        <span className="text-xl font-bold text-primary">
                          {estimatedPrice.toLocaleString()}원
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 rounded-lg bg-muted/50 p-4 text-sm">
                    <div className="flex items-center gap-2 font-semibold">
                      <TrendingUp className="h-4 w-4" />
                      <span>가격 정보</span>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 실제 가격은 작업의 난이도에 따라 달라질 수 있습니다</li>
                      <li>• 부품이나 재료비는 별도입니다</li>
                      <li>• 결제는 서비스 완료 후 진행됩니다</li>
                      <li>• 달인과 최종 가격을 협의할 수 있습니다</li>
                    </ul>
                  </div>

                  <Link href="/request">
                    <Button className="w-full" size="lg">
                      이 가격으로 요청하기
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Price Comparison */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>가격 비교표</CardTitle>
              <CardDescription>
                서비스별 평균 가격과 시간대별 할증을 한눈에 확인하세요
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="pb-3 text-left font-semibold">서비스</th>
                      <th className="pb-3 text-right font-semibold">기본 가격</th>
                      <th className="pb-3 text-right font-semibold">평일 저녁</th>
                      <th className="pb-3 text-right font-semibold">주말</th>
                      <th className="pb-3 text-right font-semibold">긴급 (서울)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((service) => (
                      <tr key={service.id} className="border-b last:border-0">
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <span>{service.icon}</span>
                            <span className="font-medium">{service.name}</span>
                          </div>
                        </td>
                        <td className="py-3 text-right">{service.basePrice.toLocaleString()}원</td>
                        <td className="py-3 text-right">
                          {calculateAIPrice(service.basePrice, 'other', 'night', 'normal').toLocaleString()}원
                        </td>
                        <td className="py-3 text-right">
                          {calculateAIPrice(service.basePrice, 'other', 'weekend', 'normal').toLocaleString()}원
                        </td>
                        <td className="py-3 text-right font-semibold text-primary">
                          {calculateAIPrice(service.basePrice, 'seoul', 'weekday', 'urgent').toLocaleString()}원
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
