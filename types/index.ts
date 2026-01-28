/**
 * Build-High 프로젝트 TypeScript 타입 정의
 * @docs PRD.md 기반
 */

/**
 * 게시글 카테고리 타입
 */
export type PostCategory = "Development" | "Study" | "Project"

/**
 * 모집 상태 타입
 */
export type RecruitmentStatus = "recruiting" | "completed"

/**
 * 태그 타입
 * 기술 스택, 요일, 장소, 기간 등의 정보를 포함
 */
export interface PostTags {
  /** 기술 스택 배열 (예: ["React", "TypeScript", "Next.js"]) */
  technologies?: string[]
  /** 요일 배열 (예: ["월", "수", "금"]) */
  days?: string[]
  /** 장소 정보 (예: "온라인", "서울 강남구") */
  location?: string
  /** 기간 정보 (예: "3개월", "장기") */
  duration?: string
  /** 기타 태그 */
  [key: string]: unknown
}

/**
 * 게시글(Post) 인터페이스
 * @table studies
 */
export interface Post {
  /** 게시글 고유 식별자 (UUID) */
  id: string
  /** 게시글 제목 (필수, 최대 100자) */
  title: string
  /** 카테고리 (필수) */
  category: PostCategory
  /** AI 요약 - 리스트 카드 노출용 짧은 설명 (필수) */
  summary: string
  /** 상세 페이지용 본문 내용 */
  content?: string
  /** 기술 스택 및 환경 정보 태그 배열 (JSONB) */
  tags: PostTags
  /** 오픈카톡 등 외부 연락처 링크 (필수) */
  contact: string
  /** 모집 상태 */
  status: RecruitmentStatus
  /** 작성자 UUID (권한 검증용) */
  user_id: string
  /** 생성 일시 */
  created_at: string
  /** 수정 일시 */
  updated_at?: string
}

/**
 * 게시글 생성용 DTO (Data Transfer Object)
 * 필수 필드만 포함
 */
export interface CreatePostDto {
  /** 게시글 제목 (필수, 최소 5자 이상) */
  title: string
  /** 카테고리 (필수) */
  category: PostCategory
  /** AI 요약 (필수) */
  summary: string
  /** 상세 내용 */
  content?: string
  /** 태그 정보 */
  tags: PostTags
  /** 연락처 링크 (필수) */
  contact: string
  /** 모집 상태 (기본값: "recruiting") */
  status?: RecruitmentStatus
}

/**
 * 게시글 수정용 DTO
 */
export interface UpdatePostDto {
  title?: string
  category?: PostCategory
  summary?: string
  content?: string
  tags?: PostTags
  contact?: string
  status?: RecruitmentStatus
}

/**
 * 사용자(User) 인터페이스
 */
export interface User {
  /** 사용자 고유 식별자 (UUID) */
  id: string
  /** 이메일 */
  email?: string
  /** 사용자 이름 */
  name?: string
  /** 프로필 이미지 URL */
  avatar_url?: string
  /** 생성 일시 */
  created_at: string
  /** 수정 일시 */
  updated_at?: string
}

/**
 * 통계 대시보드 데이터 타입
 */
export interface DashboardStats {
  /** 활성 멤버 수 */
  activeMembers: number
  /** 진행 중인 프로젝트 수 */
  activeProjects: number
  /** 매칭 성공률 (%) */
  matchRate: number
}

/**
 * 게시글 목록 조회 쿼리 파라미터
 */
export interface PostListQuery {
  /** 카테고리 필터 */
  category?: PostCategory
  /** 모집 상태 필터 */
  status?: RecruitmentStatus
  /** 검색어 */
  search?: string
  /** 페이지 번호 (기본값: 1) */
  page?: number
  /** 페이지당 항목 수 (기본값: 10) */
  limit?: number
  /** 정렬 기준 (기본값: "created_at") */
  sortBy?: "created_at" | "title" | "category"
  /** 정렬 방향 (기본값: "desc") */
  sortOrder?: "asc" | "desc"
}

/**
 * 게시글 목록 응답 타입
 */
export interface PostListResponse {
  /** 게시글 목록 */
  posts: Post[]
  /** 전체 게시글 수 */
  total: number
  /** 현재 페이지 */
  page: number
  /** 페이지당 항목 수 */
  limit: number
  /** 전체 페이지 수 */
  totalPages: number
}

/**
 * API 응답 기본 타입
 */
export interface ApiResponse<T> {
  /** 성공 여부 */
  success: boolean
  /** 데이터 */
  data?: T
  /** 에러 메시지 */
  error?: string
  /** 에러 코드 */
  errorCode?: string
}
