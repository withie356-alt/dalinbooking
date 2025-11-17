'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Wrench, ArrowLeft, Shield, Award, DollarSign, Upload } from 'lucide-react';

export default function DalinRegisterPage() {
  const [step, setStep] = useState(1);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    console.log('[v0] 달인 등록 신청 제출');
    alert('달인 등록 신청이 완료되었습니다! 검증 후 승인 결과를 알려드립니다.');
  };

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
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <div className="mb-8 text-center">
            <Badge className="mb-4" variant="secondary">
              달인 모집 중
            </Badge>
            <h2 className="mb-4 text-4xl font-bold text-balance">
              당신의 기술로<br />새로운 수입을 만드세요
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              검증된 달인으로 등록하고, 자유로운 시간에 일하며 합리적인 수익을 얻으세요.
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-8 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <DollarSign className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>높은 수익</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  시간당 평균 3만원 이상의 수익. 긴급 요청은 할증으로 더 높은 수익 가능합니다.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>안전 보장</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  플랫폼 제공 보험으로 작업 중 발생할 수 있는 문제를 보장합니다.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>전문가 인정</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  달인 등급 시스템으로 경력과 실력을 인정받고, 더 많은 기회를 얻으세요.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <Card>
            <CardHeader>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">달인 등록 신청</CardTitle>
                  <CardDescription className="mt-2">
                    검증 절차를 위해 정확한 정보를 입력해주세요
                  </CardDescription>
                </div>
                <Badge variant="outline">단계 {step}/3</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-semibold">1. 기본 정보</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="name">이름 (실명)</Label>
                    <Input id="name" placeholder="홍길동" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">휴대폰 번호</Label>
                    <div className="flex gap-2">
                      <Input id="phone" placeholder="010-1234-5678" />
                      <Button variant="outline">인증</Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input id="email" type="email" placeholder="dalin@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">주소</Label>
                    <Input id="address" placeholder="서울시 강남구..." />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="id-card">신분증 사진</Label>
                    <Button variant="outline" className="w-full">
                      <Upload className="mr-2 h-4 w-4" />
                      신분증 앞면 업로드
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      주민등록번호 뒷자리는 가려서 업로드해주세요
                    </p>
                  </div>

                  <Button className="w-full" onClick={() => setStep(2)}>
                    다음 단계
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-semibold">2. 기술 및 경력</h3>
                  
                  <div className="space-y-2">
                    <Label>보유 기술 (중복 선택 가능)</Label>
                    <div className="grid gap-2">
                      {['가구 조립', '전기 수리', '배관 수리', 'PC 수리', '네트워크 설정', '목공', '기타'].map((skill) => (
                        <div key={skill} className="flex items-center space-x-2">
                          <Checkbox id={skill} />
                          <label htmlFor={skill} className="text-sm">
                            {skill}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">경력 설명</Label>
                    <Textarea 
                      id="experience" 
                      placeholder="어떤 일을 얼마나 해오셨는지 자유롭게 작성해주세요."
                      rows={5}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="certificates">자격증 (선택사항)</Label>
                    <Input id="certificates" placeholder="예: 전기기능사, 정보처리기사 등" />
                  </div>

                  <div className="space-y-2">
                    <Label>포트폴리오 사진 (선택사항)</Label>
                    <Button variant="outline" className="w-full">
                      <Upload className="mr-2 h-4 w-4" />
                      작업 사진 업로드 (최대 5장)
                    </Button>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>
                      이전
                    </Button>
                    <Button className="flex-1" onClick={() => setStep(3)}>
                      다음 단계
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="font-semibold">3. 안전 및 약관 동의</h3>
                  
                  <Card className="border-primary/20 bg-primary/5">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Shield className="h-5 w-5" />
                        필수 검증 및 보험
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <Checkbox id="background-check" />
                        <label htmlFor="background-check" className="leading-relaxed">
                          <strong>범죄 경력 조회 동의</strong>
                          <br />
                          <span className="text-muted-foreground">
                            고객의 안전을 위해 성범죄, 강력범죄 등의 경력을 조회합니다.
                          </span>
                        </label>
                      </div>

                      <div className="flex items-start gap-2">
                        <Checkbox id="insurance" />
                        <label htmlFor="insurance" className="leading-relaxed">
                          <strong>영업 배상 책임 보험 가입</strong>
                          <br />
                          <span className="text-muted-foreground">
                            작업 중 발생할 수 있는 피해를 보장하는 보험에 가입합니다. (월 1만원 내외, 플랫폼 지원)
                          </span>
                        </label>
                      </div>

                      <div className="flex items-start gap-2">
                        <Checkbox id="education" />
                        <label htmlFor="education" className="leading-relaxed">
                          <strong>안전 교육 이수</strong>
                          <br />
                          <span className="text-muted-foreground">
                            온라인 안전 교육(약 30분)을 이수하고 테스트를 통과합니다.
                          </span>
                        </label>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-3 rounded-lg border p-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="terms" 
                        checked={agreed}
                        onCheckedChange={(checked) => setAgreed(checked === true)}
                      />
                      <label htmlFor="terms" className="text-sm leading-relaxed">
                        <strong>이용 약관 및 개인정보 처리방침에 동의합니다</strong>
                        <br />
                        <span className="text-muted-foreground">
                          서비스 이용 약관, 개인정보 처리방침, 수수료 정책을 확인하고 동의합니다.
                        </span>
                        <div className="mt-2 flex gap-2">
                          <Link href="#" className="text-primary hover:underline">
                            이용약관
                          </Link>
                          <Link href="#" className="text-primary hover:underline">
                            개인정보처리방침
                          </Link>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" onClick={() => setStep(2)}>
                      이전
                    </Button>
                    <Button 
                      className="flex-1" 
                      onClick={handleSubmit}
                      disabled={!agreed}
                    >
                      등록 신청 완료
                    </Button>
                  </div>

                  <p className="text-center text-sm text-muted-foreground">
                    신청 후 영업일 기준 3-5일 내 검증 결과를 알려드립니다
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>자주 묻는 질문</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-1 font-semibold">수수료는 얼마인가요?</h4>
                <p className="text-sm text-muted-foreground">
                  기본 거래 금액의 15-25%입니다. 초기 3개월은 5-10%로 할인되며, 우수 달인에게는 더 낮은 수수료가 적용됩니다.
                </p>
              </div>
              <div>
                <h4 className="mb-1 font-semibold">정산은 언제 받나요?</h4>
                <p className="text-sm text-muted-foreground">
                  서비스 완료 후 고객 확인이 완료되면 자동으로 정산됩니다. 매주 목요일에 일괄 입금됩니다.
                </p>
              </div>
              <div>
                <h4 className="mb-1 font-semibold">거절할 수 있나요?</h4>
                <p className="text-sm text-muted-foreground">
                  네, 모든 요청을 자유롭게 수락하거나 거절할 수 있습니다. 다만 응답률이 너무 낮으면 노출이 제한될 수 있습니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
