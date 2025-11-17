'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockBookingRequests, mockAcceptedJobs, mockDalinStats } from '@/lib/mock-data';
import { Wrench, DollarSign, Star, Clock, MapPin, Calendar, TrendingUp, Bell } from 'lucide-react';

export default function DalinDashboard() {
  const [requests] = useState(mockBookingRequests);
  const [acceptedJobs] = useState(mockAcceptedJobs);
  const stats = mockDalinStats;

  const handleAcceptRequest = (requestId: string) => {
    console.log('[v0] 요청 수락:', requestId);
    alert('요청을 수락했습니다! 고객에게 알림이 전송됩니다.');
  };

  const handleRejectRequest = (requestId: string) => {
    console.log('[v0] 요청 거절:', requestId);
    alert('요청을 거절했습니다.');
  };

  const handleStartJob = (jobId: string) => {
    console.log('[v0] 작업 시작:', jobId);
    alert('작업을 시작했습니다. 고객에게 알림이 전송됩니다.');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Wrench className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">달인 부킹</h1>
                <p className="text-xs text-muted-foreground">달인 전용</p>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {stats.pendingRequests > 0 && (
                  <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {stats.pendingRequests}
                  </span>
                )}
              </Button>
              <Link href="/">
                <Button variant="outline">고객 페이지</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="mb-8">
          <h2 className="mb-4 text-3xl font-bold">대시보드</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  오늘 작업
                </CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stats.todayJobs}건</div>
                <p className="text-xs text-muted-foreground">예정된 작업</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  이번 주 수익
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {stats.weekRevenue.toLocaleString()}원
                </div>
                <p className="text-xs text-green-600">
                  <TrendingUp className="mr-1 inline h-3 w-3" />
                  지난 주 대비 +12%
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  이번 달 수익
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {stats.monthRevenue.toLocaleString()}원
                </div>
                <p className="text-xs text-muted-foreground">
                  누적 수익
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  평균 평점
                </CardTitle>
                <Star className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stats.averageRating}</div>
                <p className="text-xs text-muted-foreground">
                  127개 후기 기준
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="requests" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="requests" className="relative">
              새 요청
              {requests.length > 0 && (
                <Badge variant="destructive" className="ml-2 h-5 w-5 rounded-full p-0">
                  {requests.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="accepted">
              수락한 작업 ({acceptedJobs.length})
            </TabsTrigger>
          </TabsList>

          {/* New Requests Tab */}
          <TabsContent value="requests" className="space-y-4">
            <div className="mb-4">
              <h3 className="text-xl font-bold">새로운 서비스 요청</h3>
              <p className="text-sm text-muted-foreground">
                가까운 고객의 요청을 확인하고 수락하세요
              </p>
            </div>

            {requests.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Clock className="mb-4 h-12 w-12 text-muted-foreground" />
                  <p className="text-center text-muted-foreground">
                    현재 새로운 요청이 없습니다.
                    <br />
                    요청이 들어오면 즉시 알려드립니다.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {requests.map((request) => (
                  <Card key={request.id} className="border-2 border-primary/20">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-2">
                            <CardTitle className="text-xl">{request.serviceName}</CardTitle>
                            {request.bookingType === 'urgent' && (
                              <Badge variant="destructive">긴급</Badge>
                            )}
                            {request.bookingType === 'priority' && (
                              <Badge variant="secondary">우선</Badge>
                            )}
                          </div>
                          <CardDescription>고객: {request.customerName}</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            {request.price.toLocaleString()}원
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {request.distance} 거리
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg bg-muted/50 p-4">
                        <p className="text-sm leading-relaxed">{request.description}</p>
                      </div>
                      
                      <div className="grid gap-3 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{request.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{request.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{request.timeSlot}</span>
                        </div>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button 
                          className="flex-1" 
                          size="lg"
                          onClick={() => handleAcceptRequest(request.id)}
                        >
                          수락하기
                        </Button>
                        <Button 
                          variant="outline" 
                          size="lg"
                          onClick={() => handleRejectRequest(request.id)}
                        >
                          거절
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Accepted Jobs Tab */}
          <TabsContent value="accepted" className="space-y-4">
            <div className="mb-4">
              <h3 className="text-xl font-bold">수락한 작업</h3>
              <p className="text-sm text-muted-foreground">
                예정된 작업을 관리하고 진행 상태를 업데이트하세요
              </p>
            </div>

            {acceptedJobs.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Wrench className="mb-4 h-12 w-12 text-muted-foreground" />
                  <p className="text-center text-muted-foreground">
                    수락한 작업이 없습니다.
                    <br />
                    새 요청을 확인하고 수락해보세요!
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {acceptedJobs.map((job) => (
                  <Card key={job.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-2">
                            <CardTitle className="text-xl">{job.serviceName}</CardTitle>
                            <Badge>수락됨</Badge>
                          </div>
                          <CardDescription>고객: {job.customerName}</CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            {job.price.toLocaleString()}원
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {job.distance} 거리
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg bg-muted/50 p-4">
                        <p className="text-sm leading-relaxed">{job.description}</p>
                      </div>
                      
                      <div className="grid gap-3 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{job.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{job.timeSlot}</span>
                        </div>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button 
                          className="flex-1" 
                          size="lg"
                          onClick={() => handleStartJob(job.id)}
                        >
                          작업 시작
                        </Button>
                        <Button variant="outline" size="lg">
                          고객에게 연락
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>빠른 실행</CardTitle>
            <CardDescription>자주 사용하는 기능에 빠르게 접근하세요</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                <Star className="h-6 w-6" />
                <span>내 후기 보기</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                <DollarSign className="h-6 w-6" />
                <span>정산 신청</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                <Calendar className="h-6 w-6" />
                <span>일정 관리</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                <TrendingUp className="h-6 w-6" />
                <span>통계 보기</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
