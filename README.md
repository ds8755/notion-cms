# 개인 개발 블로그 (Notion CMS 기반)

Notion을 CMS로 활용하여 자동으로 블로그를 관리하는 개인 기술 블로그 프로젝트입니다. Notion에서 글을 작성하면 자동으로 웹사이트에 반영됩니다.

## 🚀 기술 스택

- **Frontend**: Next.js 15 (App Router, TypeScript)
- **CMS**: Notion API (@notionhq/client)
- **Styling**: Tailwind CSS v4, shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## ✨ 주요 기능

- 📝 Notion 데이터베이스 연동
- 📄 글 목록 및 상세 페이지
- 🏷️ 카테고리별 필터링
- 🔍 검색 기능 (향후 추가)
- 📱 완벽한 반응형 디자인
- ⚡ ISR(Incremental Static Regeneration)을 통한 성능 최적화

## 🎯 빠른 시작

### 필수 사항

- Node.js 18.17 이상
- Notion 계정 및 API 키

### 설치

```bash
npm install
```

### 환경 설정

`.env.local` 파일을 생성하고 다음 정보를 입력하세요:

```env
NOTION_API_KEY=your_notion_api_key_here
NOTION_DATABASE_ID=your_notion_database_id_here
```

**Notion API 키 및 Database ID 취득 방법**:
1. [Notion Developers](https://www.notion.so/my-integrations) 페이지에서 새 통합 생성
2. API 키 복사
3. Notion에서 Blog Posts 데이터베이스 공유 및 ID 확인

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하세요.

### 프로덕션 빌드

```bash
npm run build
npm start
```

## 📁 프로젝트 구조

```
notion-cms-project/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # 루트 레이아웃
│   ├── page.tsx                  # 홈 페이지 (글 목록)
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.tsx          # 글 상세 페이지
│   ├── category/
│   │   └── [category]/
│   │       └── page.tsx          # 카테고리 페이지
│   └── globals.css               # 전역 스타일
├── components/
│   ├── ui/                       # shadcn/ui 컴포넌트
│   ├── PostCard.tsx              # 글 카드 컴포넌트
│   ├── PostList.tsx              # 글 목록 컴포넌트
│   ├── Header.tsx                # 헤더
│   └── Footer.tsx                # 푸터
├── lib/
│   ├── notion.ts                 # Notion API 클라이언트
│   └── utils.ts                  # 유틸리티 함수
├── docs/
│   └── PRD.md                    # 프로젝트 요구사항 문서
├── .env.local                    # 환경 변수 (로컬)
├── tsconfig.json                 # TypeScript 설정
├── next.config.ts                # Next.js 설정
└── package.json                  # 프로젝트 의존성
```

## 📊 Notion 데이터베이스 구조

Blog Posts 데이터베이스는 다음 필드로 구성됩니다:

| 필드명 | 타입 | 설명 |
|--------|------|------|
| Title | Title | 블로그 글 제목 |
| Slug | Text | URL 슬러그 |
| Category | Select | 카테고리 |
| Tags | Multi-select | 태그 |
| Published | Date | 발행일 |
| Status | Select | 상태 (Draft, Published) |
| Thumbnail | Files & media | 썸네일 이미지 |
| Summary | Text | 글 요약 |
| Content | Database | 본문 (페이지 콘텐츠) |

## 🔧 사용 가능한 스크립트

| 스크립트 | 설명 |
|---------|------|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm start` | 빌드된 앱 실행 |
| `npm run lint` | ESLint 실행 |

## 📚 주요 라이브러리

- [Next.js 15](https://nextjs.org)
- [Notion JavaScript SDK](https://github.com/makenotion/notion-sdk-js)
- [TailwindCSS v4](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Lucide React](https://lucide.dev)

## 🚀 배포

### Vercel 배포

1. GitHub에 저장소 푸시
2. [Vercel](https://vercel.com)에서 프로젝트 생성
3. 환경 변수 설정 (NOTION_API_KEY, NOTION_DATABASE_ID)
4. 자동 배포 완료

## 📖 더 알아보기

- [프로젝트 PRD](./docs/PRD.md) - 상세한 프로젝트 요구사항
- [Notion API 문서](https://developers.notion.com)
- [Next.js 문서](https://nextjs.org/docs)

## 📝 라이선스

MIT 라이선스
