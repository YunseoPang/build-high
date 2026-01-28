import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-base font-bold">Build-High</h3>
            <p className="text-sm text-muted-foreground">
              엔지니어를 위한 스터디 및 프로젝트 팀 빌딩 매칭 플랫폼
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">빠른 링크</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  홈
                </Link>
              </li>
              <li>
                <Link
                  href="/studies"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  모집글
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  대시보드
                </Link>
              </li>
              <li>
                <Link
                  href="/studies/new"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  새 글 작성
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">카테고리</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/studies?category=Development"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  개발
                </Link>
              </li>
              <li>
                <Link
                  href="/studies?category=Study"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  스터디
                </Link>
              </li>
              <li>
                <Link
                  href="/studies?category=Project"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  사이드 프로젝트
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">정보</h4>
            <p className="text-sm text-muted-foreground">
              대학생 개발자, 취준생, 사이드 프로젝트 희망자를 위한
              <br />
              전문적인 팀 빌딩 플랫폼입니다.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Build-High. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
