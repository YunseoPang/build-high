import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, FolderKanban, TrendingUp, ArrowRight } from "lucide-react"

export default function Home() {
  // TODO: 실제 데이터는 Supabase에서 가져올 예정
  const stats = {
    activeMembers: 1250,
    activeProjects: 342,
    matchRate: 87.5,
  }

  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          엔지니어를 위한
          <br />
          <span className="text-primary">스터디 및 프로젝트 팀 빌딩</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          대학생 개발자, 취준생, 사이드 프로젝트 희망자를 위한 전문적인 매칭 플랫폼
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button asChild size="lg">
            <Link href="/posts/new">
              팀원 모집하기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/studies">
              모집글 보기
            </Link>
          </Button>
        </div>
      </section>

      {/* Statistics Dashboard */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">통계 대시보드</h2>
          <Button asChild variant="ghost" size="sm">
            <Link href="/dashboard">
              전체 보기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium">
                활성 멤버 수
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeMembers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-1">
                현재 활동 중인 멤버
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium">
                진행 중인 프로젝트
              </CardTitle>
              <FolderKanban className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeProjects.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-1">
                현재 진행 중인 프로젝트
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium">
                매칭 성공률
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.matchRate}%</div>
              <p className="text-xs text-muted-foreground mt-1">
                성공적으로 매칭된 팀
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">카테고리별 모집글</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <Link href="/studies?category=Development">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-base">
                  개발
                  <Badge variant="secondary">Development</Badge>
                </CardTitle>
                <CardDescription className="text-sm">
                  개발 프로젝트 팀원을 모집합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between text-sm">
                  모집글 보기
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <Link href="/studies?category=Study">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-base">
                  스터디
                  <Badge variant="secondary">Study</Badge>
                </CardTitle>
                <CardDescription className="text-sm">
                  함께 공부할 스터디 멤버를 모집합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between text-sm">
                  모집글 보기
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <Link href="/studies?category=Project">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-base">
                  사이드 프로젝트
                  <Badge variant="secondary">Project</Badge>
                </CardTitle>
                <CardDescription className="text-sm">
                  사이드 프로젝트 팀원을 모집합니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between text-sm">
                  모집글 보기
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Link>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-3 py-8">
        <h2 className="text-xl font-semibold">첫 번째 프로젝트의 주인공이 되어보세요!</h2>
        <p className="text-sm text-muted-foreground">
          지금 바로 팀원을 모집하고 프로젝트를 시작해보세요
        </p>
        <Button asChild size="lg">
          <Link href="/posts/new">
            팀원 모집하기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  )
}
