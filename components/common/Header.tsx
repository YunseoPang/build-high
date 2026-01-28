"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">Build-High</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            홈
          </Link>
          <Link
            href="/studies"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            모집글
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            대시보드
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button asChild size="sm">
            <Link href="/studies/new">
              <Plus className="mr-2 h-4 w-4" />
              새 글 작성
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
