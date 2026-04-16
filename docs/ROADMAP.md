# 개인 개발 블로그 개발 로드맵

**프로젝트명**: Notion CMS 기반 개인 개발 블로그  
**버전**: 1.0  
**작성일**: 2026-04-16

---

## 📋 프로젝트 개요

본 로드맵은 [PRD.md](./PRD.md)에 정의된 MVP 기능을 단계별로 구현하기 위한 세부 계획입니다. 총 5개의 Phase로 나뉘며, 예상 총 소요 기간은 **11-17일**입니다.

---

## 🎯 Phase 1: 프로젝트 초기 설정

**예상 소요 시간**: 1-2일  
**목표**: 견고한 개발 기반 구축 및 Notion API 환경 구축

### 📌 이유
견고한 기반 없이는 기능 개발이 어려우며, 초기에 올바른 구조를 잡아야 유지보수가 용이합니다.

### 📝 상세 작업 항목

#### 1.1 Next.js 프로젝트 구조 설정
- [ ] 프로젝트 디렉토리 구조 확인 및 정리
  - `/app` - Next.js App Router
  - `/components` - UI 컴포넌트
  - `/lib` - 유틸리티, API 클라이언트
  - `/hooks` - Custom React hooks
  - `/types` - TypeScript 타입 정의
  - `/styles` - 스타일 시트
- [ ] Tailwind CSS 설정 확인
- [ ] tsconfig.json 검증

#### 1.2 Notion API 환경 구축
- [ ] Notion SDK 설치: `npm install @notionhq/client`
- [ ] Notion API 키 발급
  - Notion Developers 페이지 접속
  - 새 Integration 생성
  - API 키 복사
- [ ] 블로그 글 데이터베이스 생성
  - `Blog Posts` 데이터베이스 생성
  - 필드 구성 (Title, Slug, Category, Tags, Published, Status, Thumbnail, Summary)
- [ ] Database ID 확인
- [ ] `.env.local` 파일 생성 및 환경 변수 설정
  ```env
  NOTION_API_KEY=your_api_key
  NOTION_DATABASE_ID=your_database_id
  ```

#### 1.3 기본 레이아웃 구조 생성
- [ ] Root Layout 설정 (`/app/layout.tsx`)
  - HTML 기본 설정
  - 메타데이터 설정
  - 글로벌 스타일 임포트
- [ ] 기본 페이지 구조 (`/app/page.tsx`)
- [ ] CSS 초기화 및 전역 스타일 설정 (`/app/globals.css`)
- [ ] 다크 모드 지원 설정 (선택사항)

#### 1.4 개발 환경 구성
- [ ] 개발 서버 실행 테스트
  ```bash
  npm run dev
  ```
- [ ] TypeScript 설정 검증
- [ ] ESLint/Prettier 설정 (선택사항)

### ✅ 완료 기준

- [x] 모든 환경 변수가 `.env.local`에 설정되어 있음
- [x] `npm run dev` 명령어로 개발 서버가 정상 실행됨
- [x] TypeScript 컴파일 오류가 없음
- [x] Notion API 연결 테스트 성공 (Notion 데이터베이스에 접근 가능)
- [x] 프로젝트 디렉토리 구조가 명확하게 정리됨

### 📊 체크리스트

- [ ] Notion API 키 발급 완료
- [ ] Database ID 확인 완료
- [ ] 환경 변수 설정 완료
- [ ] 개발 서버 정상 작동 확인
- [ ] 기본 레이아웃 구조 완성

---

## 🎯 Phase 2: 공통 모듈 개발

**예상 소요 시간**: 2-3일  
**목표**: 모든 기능에서 재사용할 수 있는 공통 코드 작성

### 📌 이유
공통 기능을 먼저 만들어야 나머지 기능 개발 시 중복 코드를 방지하고, 유지보수성을 높일 수 있습니다.

### 📝 상세 작업 항목

#### 2.1 Notion API 공통 함수 개발 (`/lib/notion.ts`)
- [ ] Notion 클라이언트 초기화
  ```typescript
  import { Client } from "@notionhq/client";
  ```
- [ ] `getAllPosts()` 함수 구현
  - 모든 발행된 글 조회
  - 필터: Status = "Published"
  - 정렬: Published 날짜 내림차순
  - 캐싱 고려
- [ ] `getPostBySlug(slug: string)` 함수 구현
  - 특정 slug로 글 조회
  - 존재하지 않을 경우 에러 처리
- [ ] `getPostsByCategory(category: string)` 함수 구현
  - 카테고리별 글 조회
- [ ] `getCategories()` 함수 구현
  - 모든 카테고리 목록 조회
- [ ] `getPostContent(pageId: string)` 함수 구현
  - 페이지 블록 콘텐츠 조회
- [ ] 에러 처리 및 로깅

#### 2.2 공통 타입 정의 (`/types/index.ts`)
- [ ] `Post` 인터페이스 정의
  ```typescript
  interface Post {
    id: string;
    title: string;
    slug: string;
    category: string;
    tags: string[];
    publishedDate: Date;
    status: "Draft" | "Published";
    thumbnail?: string;
    summary?: string;
    content?: Block[];
  }
  ```
- [ ] `Category` 타입 정의
- [ ] `Block` 타입 정의 (Notion 블록)
- [ ] `NotionDatabaseItem` 타입 정의

#### 2.3 공통 컴포넌트 개발

##### 2.3.1 Header 컴포넌트 (`/components/Header.tsx`)
- [ ] 로고/사이트명 표시
- [ ] 네비게이션 메뉴
  - 홈
  - 블로그
  - 카테고리
  - 검색
- [ ] 반응형 디자인 (모바일 메뉴)
- [ ] 다크 모드 토글 (선택사항)

##### 2.3.2 Footer 컴포넌트 (`/components/Footer.tsx`)
- [ ] 저작권 정보
- [ ] 소셜 링크 (GitHub, Twitter, 이메일)
- [ ] 사이트맵 링크
- [ ] 반응형 디자인

##### 2.3.3 PostCard 컴포넌트 (`/components/PostCard.tsx`)
- [ ] 썸네일 이미지 표시
- [ ] 제목 표시
- [ ] 요약 텍스트 표시
- [ ] 메타데이터 (카테고리, 발행일, 태그)
- [ ] 링크 처리
- [ ] 반응형 디자인

##### 2.3.4 공통 UI 컴포넌트 활용
- [ ] shadcn/ui 컴포넌트 활용 (Button, Card, Badge 등)
- [ ] Lucide React 아이콘 통합

#### 2.4 유틸리티 함수 개발 (`/lib/utils.ts`)
- [ ] 날짜 포맷팅 함수
- [ ] 텍스트 요약 함수
- [ ] URL slug 생성/검증 함수
- [ ] 이미지 최적화 함수

### ✅ 완료 기준

- [x] Notion API 함수가 실제 데이터를 정상적으로 조회함
- [x] 모든 TypeScript 타입이 명확하게 정의됨
- [x] Header, Footer, PostCard 컴포넌트가 렌더링됨
- [x] Storybook 또는 컴포넌트 문서 (선택사항)
- [x] 단위 테스트 작성 (선택사항)

### 📊 체크리스트

- [ ] Notion API 함수 작성 완료
- [ ] 타입 정의 완료
- [ ] Header 컴포넌트 완성
- [ ] Footer 컴포넌트 완성
- [ ] PostCard 컴포넌트 완성
- [ ] 유틸리티 함수 작성 완료

---

## 🎯 Phase 3: 핵심 기능 개발

**예상 소요 시간**: 3-4일  
**목표**: 블로그의 가장 기본이 되는 기능 구현

### 📌 이유
블로그의 핵심 기능이 구현되어야만 사용 가능한 상태가 되므로, Phase 1, 2를 완료한 후 바로 진행합니다.

### 📝 상세 작업 항목

#### 3.1 블로그 글 목록 페이지 (`/app/page.tsx`)
- [ ] Notion 데이터 조회
  ```typescript
  const posts = await getAllPosts();
  ```
- [ ] 글 목록 렌더링
  - PostCard 컴포넌트 사용
  - 각 카드에 썸네일, 제목, 요약, 메타데이터 표시
- [ ] 페이지네이션 구현
  - 페이지당 글 개수 제한 (예: 10개)
  - 이전/다음 버튼
  - 또는 "더보기" 버튼
- [ ] 로딩 상태 처리
- [ ] 에러 처리 및 메시지 표시
- [ ] SEO 메타데이터 설정

#### 3.2 블로그 글 상세 페이지 (`/app/blog/[slug]/page.tsx`)
- [ ] 동적 라우팅 설정
  - `[slug]` 매개변수 처리
- [ ] 글 데이터 조회
  ```typescript
  const post = await getPostBySlug(slug);
  ```
- [ ] 메타데이터 표시
  - 제목
  - 작성자 (선택사항)
  - 발행일
  - 카테고리
  - 태그
- [ ] 썸네일 이미지 표시
- [ ] 글 본문 렌더링
- [ ] 이전/다음 글 네비게이션
- [ ] 관련 글 추천 (선택사항)
- [ ] SEO 메타데이터 설정
- [ ] 공유 버튼 (선택사항)

#### 3.3 Notion 컨텐츠 렌더링 (`/components/NotionBlock.tsx`)
- [ ] 블록 타입별 렌더러 구현
  - [ ] 텍스트 블록 (paragraph)
  - [ ] 제목 블록 (heading_1, heading_2, heading_3)
  - [ ] 이미지 블록
  - [ ] 코드 블록 (Syntax Highlighting)
  - [ ] 리스트 블록 (bulleted, numbered)
  - [ ] 인용 블록 (quote)
  - [ ] 구분선 (divider)
  - [ ] 테이블 (선택사항)
- [ ] 텍스트 포매팅 지원
  - 굵게, 기울임, 밑줄
  - 링크
  - 코드 인라인
- [ ] 이미지 최적화
  - Next.js Image 컴포넌트 사용
  - Lazy loading

#### 3.4 동적 페이지 생성 (선택사항)
- [ ] `generateStaticParams()` 함수 구현
  ```typescript
  export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  }
  ```
- [ ] ISR (Incremental Static Regeneration) 설정
  ```typescript
  export const revalidate = 3600; // 1시간마다 재검증
  ```

### ✅ 완료 기준

- [x] 홈 페이지에서 모든 발행된 글이 목록으로 표시됨
- [x] 각 글의 상세 페이지가 정상적으로 렌더링됨
- [x] Notion의 모든 기본 블록이 올바르게 표시됨
- [x] 이미지가 최적화되어 빠르게 로딩됨
- [x] 메타데이터가 올바르게 설정되어 SEO 최적화됨
- [x] 모바일에서 정상적으로 표시됨

### 📊 체크리스트

- [ ] 글 목록 페이지 완성
- [ ] 글 상세 페이지 완성
- [ ] NotionBlock 컴포넌트 작성 완료
- [ ] 텍스트 포매팅 지원 완료
- [ ] 이미지 최적화 완료
- [ ] 이전/다음 네비게이션 추가

---

## 🎯 Phase 4: 추가 기능 개발

**예상 소요 시간**: 2-3일  
**목표**: 블로그의 사용성을 높이는 부가 기능 구현

### 📌 이유
핵심 기능이 완성된 후 사용자 경험을 개선하는 추가 기능을 구현합니다.

### 📝 상세 작업 항목

#### 4.1 카테고리 필터링 (`/app/category/[category]/page.tsx`)
- [ ] 카테고리 페이지 생성
  - 동적 라우팅 설정
  - 카테고리별 글 조회
- [ ] 카테고리 목록 렌더링
  - 사이드바 또는 상단 탭
  - 활성화된 카테고리 강조
- [ ] 카테고리별 글 목록 표시
  - PostCard 컴포넌트 재사용
- [ ] 글 개수 표시
- [ ] SEO 메타데이터 설정

#### 4.2 검색 기능 (`/app/search/page.tsx`)
- [ ] 검색 입력창 구현
  - Header에 검색 바 추가
  - 또는 별도 검색 페이지
- [ ] 검색 로직 구현
  - 제목 검색
  - 태그 검색
  - 본문 검색 (선택사항)
- [ ] 검색 결과 페이지
  - 검색어 하이라이트
  - "검색 결과 없음" 메시지
  - 관련도순 정렬
- [ ] 클라이언트 사이드 검색 (간단) vs 서버 사이드 검색 (성능)

#### 4.3 SEO 최적화
- [ ] 동적 메타데이터 설정
  ```typescript
  export const metadata: Metadata = {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [post.thumbnail],
    },
  };
  ```
- [ ] Open Graph (og) 태그 설정
- [ ] Twitter Card 메타데이터
- [ ] Schema.org Structured Data (선택사항)
  - Article schema
  - BlogPosting schema
- [ ] Sitemap 생성 (선택사항)
- [ ] robots.txt 설정

#### 4.4 추가 UI 개선 (선택사항)
- [ ] 목차 (Table of Contents) 구현
  - 제목 기반 자동 생성
  - 사이드바 또는 우측 네비게이션
- [ ] 댓글 섹션 (선택사항)
- [ ] SNS 공유 버튼
  - Twitter
  - Facebook
  - LinkedIn
- [ ] 좋아요 기능 (선택사항)

### ✅ 완료 기준

- [x] 카테고리 페이지가 정상적으로 작동함
- [x] 검색 기능으로 글을 찾을 수 있음
- [x] SEO 메타데이터가 올바르게 설정됨
- [x] 목차가 있는 경우 정상적으로 표시됨
- [x] SNS 공유 기능이 작동함

### 📊 체크리스트

- [ ] 카테고리 페이지 완성
- [ ] 카테고리 필터링 완성
- [ ] 검색 기능 완성
- [ ] 메타데이터 최적화 완료
- [ ] Open Graph 설정 완료
- [ ] SNS 공유 버튼 추가 (선택사항)

---

## 🎯 Phase 5: 최적화 및 배포

**예상 소요 시간**: 1-2일  
**목표**: 성능 최적화 및 프로덕션 배포

### 📌 이유
기능이 완성된 후 성능 최적화와 배포를 진행하여 사용자가 빠르고 안정적으로 서비스를 이용할 수 있도록 합니다.

### 📝 상세 작업 항목

#### 5.1 성능 최적화
- [ ] 이미지 최적화
  - Next.js Image 컴포넌트 활용
  - WebP 포맷 지원
  - 캐싱 설정
- [ ] 코드 분할 (Code Splitting)
  - Dynamic imports 활용
  - 번들 크기 분석
- [ ] 캐싱 전략 구현
  - ISR (Incremental Static Regeneration)
  - 브라우저 캐싱 헤더 설정
  - CDN 캐싱
- [ ] 데이터베이스 쿼리 최적화
  - Notion API 호출 최소화
  - 배치 처리 고려

#### 5.2 반응형 디자인 개선
- [ ] 모바일 최적화
  - 터치 친화적 UI
  - 적절한 버튼 크기 (44px 이상)
  - 모바일 메뉴
- [ ] 태블릿 최적화
  - 레이아웃 조정
  - 가독성 확인
- [ ] 데스크톱 최적화
  - 사이드바 활용
  - 최적 라인 길이 (60-80 문자)
- [ ] 크로스 브라우저 테스트
  - Chrome, Firefox, Safari, Edge
  - 각 브라우저의 개발자 도구에서 검증

#### 5.3 테스트 및 QA
- [ ] 기능 테스트
  - 글 목록 페이지
  - 글 상세 페이지
  - 카테고리 필터링
  - 검색 기능
  - 네비게이션
- [ ] 성능 테스트
  - Google Lighthouse 점수 확인
  - Core Web Vitals 측정
  - 페이지 로드 시간 측정
- [ ] 접근성 테스트 (Accessibility)
  - WCAG 2.1 준수 확인
  - 스크린 리더 호환성

#### 5.4 Vercel 배포
- [ ] GitHub 저장소 연동
  ```
  1. Vercel에서 프로젝트 생성
  2. GitHub 저장소 선택
  3. 자동 배포 설정
  ```
- [ ] 환경 변수 설정
  - NOTION_API_KEY
  - NOTION_DATABASE_ID
- [ ] Build 설정 확인
  ```json
  {
    "buildCommand": "npm run build",
    "outputDirectory": ".next"
  }
  ```
- [ ] 프리뷰 URL 테스트
- [ ] 프로덕션 URL 설정
- [ ] 커스텀 도메인 연동 (선택사항)

#### 5.5 모니터링 및 분석 (선택사항)
- [ ] Google Analytics 연동
- [ ] 에러 트래킹 (Sentry 등)
- [ ] 성능 모니터링 (DataDog 등)

#### 5.6 배포 후 체크리스트
- [ ] 프로덕션 URL에서 모든 페이지 테스트
- [ ] SEO 메타데이터 검증
- [ ] 이미지 로딩 확인
- [ ] 링크 유효성 확인
- [ ] 404 페이지 설정 (선택사항)
- [ ] 500 에러 페이지 설정 (선택사항)

### ✅ 완료 기준

- [x] Google Lighthouse 점수: 90점 이상
- [x] Core Web Vitals 모두 "Good" 등급
- [x] 모바일, 태블릿, 데스크톱에서 정상 작동
- [x] Vercel에서 프로덕션 배포 성공
- [x] 커스텀 도메인에서 접속 가능
- [x] 배포 후 24시간 모니터링 완료

### 📊 체크리스트

- [ ] 이미지 최적화 완료
- [ ] 코드 분할 적용
- [ ] ISR 설정 완료
- [ ] 모바일 반응형 확인
- [ ] 크로스 브라우저 테스트 완료
- [ ] Lighthouse 점수 90점 이상
- [ ] Vercel 배포 완료
- [ ] 프로덕션 환경 테스트 완료

---

## 📊 전체 일정 요약

| Phase | 기간 | 예상 일정 |
|-------|------|---------|
| Phase 1 | 1-2일 | 2026-04-16 ~ 2026-04-17 |
| Phase 2 | 2-3일 | 2026-04-18 ~ 2026-04-20 |
| Phase 3 | 3-4일 | 2026-04-21 ~ 2026-04-24 |
| Phase 4 | 2-3일 | 2026-04-25 ~ 2026-04-27 |
| Phase 5 | 1-2일 | 2026-04-28 ~ 2026-04-29 |
| **총계** | **9-14일** | |

---

## 🎬 Phase별 진행 상황 추적

### Phase 1: 프로젝트 초기 설정
- **상태**: ⬜ 계획 중
- **완료도**: 0%
- **담당자**: 
- **시작일**: 
- **완료일 예정**: 

### Phase 2: 공통 모듈 개발
- **상태**: ⬜ 대기 중
- **완료도**: 0%
- **담당자**: 
- **시작일**: 
- **완료일 예정**: 

### Phase 3: 핵심 기능 개발
- **상태**: ⬜ 대기 중
- **완료도**: 0%
- **담당자**: 
- **시작일**: 
- **완료일 예정**: 

### Phase 4: 추가 기능 개발
- **상태**: ⬜ 대기 중
- **완료도**: 0%
- **담당자**: 
- **시작일**: 
- **완료일 예정**: 

### Phase 5: 최적화 및 배포
- **상태**: ⬜ 대기 중
- **완료도**: 0%
- **담당자**: 
- **시작일**: 
- **완료일 예정**: 

---

## 📝 주요 의존성 및 우선순위

```
Phase 1 (초기 설정)
    ↓
Phase 2 (공통 모듈)
    ↓
Phase 3 (핵심 기능) ← 이 단계에서 블로그 사용 가능
    ↓
Phase 4 (추가 기능)
    ↓
Phase 5 (최적화 및 배포)
```

**중요**: Phase 1-3은 순차적으로 진행해야 하며, Phase 4는 Phase 3이 완료된 후에 시작할 수 있습니다. Phase 5는 병렬로 진행 가능합니다.

---

## 🚨 위험 요소 및 대응 방안

| 위험 요소 | 영향도 | 발생 확률 | 대응 방안 |
|----------|--------|---------|---------|
| Notion API 응답 지연 | 높음 | 중간 | ISR 캐싱 적극 활용, 데이터 프리페칭 |
| 블록 렌더링 복잡도 | 중간 | 높음 | MVP에서는 기본 블록만 지원, 점진적 확장 |
| 이미지 최적화 미흡 | 중간 | 중간 | Next.js Image 컴포넌트 필수 사용 |
| 모바일 반응형 미충족 | 높음 | 낮음 | 초기부터 Mobile-first 접근 |
| SEO 메타데이터 누락 | 중간 | 낮음 | Phase 4에서 체계적으로 검증 |
| 배포 실패 | 높음 | 낮음 | 사전 테스트 환경 구성 |

---

## 💡 추가 고려사항

### 병렬 작업 가능 항목
- 문서 작성 (모든 Phase와 병렬 가능)
- 디자인 시스템 구축 (Phase 2와 병렬)
- 테스트 코드 작성 (Phase 2부터 병렬)

### 선택사항 (MVP 이후)
- 댓글 시스템
- 다크 모드
- 분석 및 통계
- RSS 피드
- 무한 스크롤
- Advanced search (Algolia 등)

### 기술 부채
- 타입 안정성 강화 (Strict Mode)
- 테스트 커버리지 확대
- 에러 바운더리 추가
- 로깅 시스템 개선

---

## 📞 문의 및 수정

이 로드맵은 프로젝트 진행에 따라 변경될 수 있습니다. 필요시 [PRD.md](./PRD.md)를 참고하여 수정하시기 바랍니다.

---

**마지막 업데이트**: 2026-04-16
