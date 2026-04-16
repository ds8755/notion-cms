# Notion CMS 블로그 프로젝트 설정

## 📚 Project Context

주요 프로젝트 문서들입니다. Claude Code에서 참고할 때 다음 파일들을 확인하세요:

- **PRD 문서**: @docs/PRD.md - 프로젝트 요구사항 및 기능 명세
- **개발 로드맵**: @docs/ROADMAP.md - 단계별 개발 계획 및 체크리스트

## 🎯 프로젝트 개요

- **프로젝트명**: 개인 개발 블로그
- **목적**: Notion을 CMS로 활용한 자동 블로그 시스템
- **현재 상태**: 개발 준비 완료

## 🛠️ 개발 환경

### 기술 스택
- **Frontend**: Next.js 15, TypeScript
- **CMS**: Notion API (@notionhq/client)
- **Styling**: Tailwind CSS v4, shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

### 환경 변수 (.env.local)
```
NOTION_API_KEY=your_api_key
NOTION_DATABASE_ID=your_database_id
```

### 시작 명령어
```bash
npm install
npm run dev          # 개발 서버 (http://localhost:3000)
npm run build        # 프로덕션 빌드
npm start            # 빌드된 앱 실행
```

## 📋 Phase 현황

현재 **Phase 1: 프로젝트 초기 설정** 진행 중

다른 Phase들은 [ROADMAP.md](./docs/ROADMAP.md)를 참고하세요.

## 🏗️ 프로젝트 구조

```
notion-cms-project/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # 루트 레이아웃
│   ├── page.tsx                  # 홈 페이지
│   ├── blog/[slug]/page.tsx       # 글 상세 페이지
│   ├── category/[category]/page.tsx # 카테고리 페이지
│   └── globals.css               # 전역 스타일
├── components/
│   ├── ui/                       # shadcn/ui 컴포넌트
│   ├── Header.tsx                # 헤더
│   ├── Footer.tsx                # 푸터
│   └── PostCard.tsx              # 글 카드
├── lib/
│   ├── notion.ts                 # Notion API 클라이언트
│   └── utils.ts                  # 유틸리티 함수
├── types/
│   └── index.ts                  # TypeScript 타입 정의
├── docs/
│   ├── PRD.md                    # 프로젝트 요구사항
│   └── ROADMAP.md                # 개발 로드맵
└── CLAUDE.md                     # 이 파일
```

## 📝 기타 참고사항

- 한국어로 주석 및 커밋 메시지 작성
- 들여쓰기: 4칸
- 변수명/함수명: 영어 사용
- Tailwind CSS와 TypeScript 필수

---

**Last Updated**: 2026-04-16
