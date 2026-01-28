sequenceDiagram
    participant User
    participant Browser
    participant NextJS as Next.js(App Router)
    participant Supabase
    participant DB as PostgreSQL(DB)

    User ->> Browser: 서비스 접속
    Browser ->> NextJS: GET /
    NextJS ->> Supabase: 통계 데이터 요청git
    Supabase ->> DB: SELECT count, projects
    DB -->> Supabase: 통계 결과
    Supabase -->> NextJS: 통계 데이터
    NextJS -->> Browser: 랜딩 페이지 렌더링

    User ->> Browser: 카테고리 선택
    Browser ->> NextJS: GET /studies?category=Project
    NextJS ->> Supabase: 게시글 목록 조회
    Supabase ->> DB: SELECT * FROM studies ORDER BY created_at DESC
    DB -->> Supabase: 게시글 목록
    Supabase -->> NextJS: JSON 응답
    NextJS -->> Browser: 리스트 페이지 렌더링

    User ->> Browser: 게시글 클릭
    Browser ->> NextJS: GET /studies/{id}
    NextJS ->> Supabase: 단일 게시글 조회
    Supabase ->> DB: SELECT * FROM studies WHERE id = uuid
    DB -->> Supabase: 게시글 데이터
    Supabase -->> NextJS: 게시글 응답
    NextJS -->> Browser: 상세 페이지 표시

    User ->> Browser: 새 글 작성 클릭
    Browser ->> NextJS: GET /studies/new
    NextJS -->> Browser: 로그인 체크

    User ->> Browser: 게시글 등록
    Browser ->> NextJS: POST /studies
    NextJS ->> Supabase: 인증 정보 확인
    Supabase ->> DB: INSERT INTO studies
    DB -->> Supabase: 성공
    Supabase -->> NextJS: OK
    NextJS -->> Browser: 등록 완료
flowchart TD
    User[사용자] --> Browser[Web Browser]

    Browser --> Landing[Landing Page]
    Landing --> Dashboard[통계 대시보드]
    Landing --> List[모집글 리스트]

    List -->|카테고리 필터| Filter[Category Tabs]
    List -->|클릭| Detail[게시글 상세]

    Detail --> Contact[외부 연락처 연결]

    List --> Create[새 글 작성]
    Create --> Auth[로그인 / 인증 체크]
    Auth --> Editor[작성 폼]
    Editor --> Submit[게시글 등록]

    subgraph Frontend
        Browser
        Landing
        List
        Detail
        Create
    end

    subgraph Backend
        NextJS[Next.js App Router]
        Supabase
        DB[(PostgreSQL)]
    end

    Browser --> NextJS
    NextJS --> Supabase
    Supabase --> DB
