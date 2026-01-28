import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, FolderKanban, TrendingUp, ArrowRight, Calendar, MapPin, Clock } from "lucide-react"
import type { Post } from "@/types"

export default function Home() {
  // TODO: 실제 데이터는 Supabase에서 가져올 예정
  const stats = {
    activeMembers: 1250,
    activeProjects: 342,
    matchRate: 87.5,
  }

  // 더미 게시글 데이터
  const dummyPosts: Post[] = [
    {
      id: "1",
      title: "Next.js와 TypeScript로 풀스택 프로젝트 함께할 팀원 모집",
      category: "Development",
      summary: "Next.js 14 App Router와 TypeScript를 활용한 웹 애플리케이션 개발 프로젝트입니다. 프론트엔드와 백엔드를 함께 다루며 실무 경험을 쌓을 수 있습니다.",
      content: "상세 내용...",
      tags: {
        technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
        days: ["월", "수", "금"],
        location: "온라인",
        duration: "3개월",
      },
      contact: "https://open.kakao.com/o/example1",
      status: "recruiting",
      user_id: "user-1",
      created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "2",
      title: "알고리즘 스터디 모집 - 백준/프로그래머스 함께 풀어요",
      category: "Study",
      summary: "코딩 테스트 준비를 위한 알고리즘 스터디입니다. 매주 정해진 문제를 풀고 함께 리뷰하며 실력을 향상시켜 나갑니다.",
      content: "상세 내용...",
      tags: {
        technologies: ["Python", "Java", "C++"],
        days: ["화", "목"],
        location: "서울 강남구",
        duration: "장기",
      },
      contact: "https://open.kakao.com/o/example2",
      status: "recruiting",
      user_id: "user-2",
      created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "3",
      title: "포트폴리오 웹사이트 제작 사이드 프로젝트",
      category: "Project",
      summary: "개인 포트폴리오 웹사이트를 제작하는 사이드 프로젝트입니다. 디자인부터 개발까지 전 과정을 함께 진행합니다.",
      content: "상세 내용...",
      tags: {
        technologies: ["React", "Framer Motion", "Three.js"],
        days: ["토", "일"],
        location: "온라인",
        duration: "2개월",
      },
      contact: "https://open.kakao.com/o/example3",
      status: "recruiting",
      user_id: "user-3",
      created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ]

  // 카테고리 한글 변환 함수
  const getCategoryLabel = (category: Post["category"]) => {
    const labels = {
      Development: "개발",
      Study: "스터디",
      Project: "사이드 프로젝트",
    }
    return labels[category]
  }

  // 날짜 포맷 함수
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return "오늘"
    if (diffDays === 1) return "어제"
    if (diffDays < 7) return `${diffDays}일 전`
    return date.toLocaleDateString("ko-KR", { month: "short", day: "numeric" })
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

      {/* Recent Posts Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">최근 모집글</h2>
          <Button asChild variant="ghost" size="sm">
            <Link href="/studies">
              전체 보기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dummyPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <Link href={`/studies/${post.id}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge
                      variant={
                        post.status === "recruiting" ? "default" : "secondary"
                      }
                      className="text-xs"
                    >
                      {post.status === "recruiting" ? "모집중" : "모집완료"}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {getCategoryLabel(post.category)}
                    </Badge>
                  </div>
                  <CardTitle className="text-base line-clamp-2 mb-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {post.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {/* 기술 스택 태그 */}
                  {post.tags.technologies && post.tags.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.technologies.slice(0, 3).map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {post.tags.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{post.tags.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  )}

                  {/* 상세 정보 */}
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    {post.tags.days && post.tags.days.length > 0 && (
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.tags.days.join(", ")}</span>
                      </div>
                    )}
                    {post.tags.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{post.tags.location}</span>
                      </div>
                    )}
                    {post.tags.duration && (
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.tags.duration}</span>
                      </div>
                    )}
                  </div>

                  {/* 작성일 */}
                  <div className="text-xs text-muted-foreground pt-1 border-t">
                    {formatDate(post.created_at)}
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
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
