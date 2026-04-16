import {
  Code2,
  Palette,
  Zap,
  Package,
  GitBranch,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

/**
 * 메인 페이지
 * 스타터킷의 기능과 기술 스택을 소개합니다.
 */
export default function Home() {
  const techStack = [
    {
      name: "Next.js v15",
      description: "최신 App Router와 Turbopack 지원",
      icon: Zap,
    },
    {
      name: "TypeScript",
      description: "완전한 타입 안정성",
      icon: Code2,
    },
    {
      name: "TailwindCSS v4",
      description: "설정 파일 없이 CSS 기반 커스터마이징",
      icon: Palette,
    },
    {
      name: "shadcn/ui",
      description: "접근성 있는 컴포넌트 라이브러리",
      icon: Package,
    },
    {
      name: "lucide-react",
      description: "아름다운 SVG 아이콘",
      icon: Sparkles,
    },
    {
      name: "Dark Mode",
      description: "next-themes로 자동 테마 전환",
      icon: GitBranch,
    },
  ];

  return (
    <main className="container max-w-screen-2xl py-12 md:py-16">
      {/* Hero 섹션 */}
      <section className="space-y-6 py-12 text-center md:py-20">
        <div className="inline-block rounded-lg border border-border bg-background px-3 py-1">
          <Badge variant="secondary">🚀 모던 웹 개발 스타터킷</Badge>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Claude Next.js Starter Kit
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            빠르게 시작할 수 있는 완벽한 개발 환경.
            <br />
            Next.js v15, TypeScript, TailwindCSS v4로 구성되었습니다.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg">시작하기</Button>
          <Button variant="outline" size="lg">
            GitHub 보기
          </Button>
        </div>
      </section>

      <Separator className="my-12" />

      {/* 기술 스택 섹션 */}
      <section id="tech-stack" className="space-y-8 py-12">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight">기술 스택</h2>
          <p className="text-muted-foreground">
            최신 기술과 검증된 라이브러리로 구성
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card key={index} className="flex flex-col transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{tech.name}</CardTitle>
                      <CardDescription>{tech.description}</CardDescription>
                    </div>
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <Separator className="my-12" />

      {/* 컴포넌트 데모 섹션 */}
      <section id="features" className="space-y-8 py-12">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight">컴포넌트 데모</h2>
          <p className="text-muted-foreground">
            shadcn/ui와 lucide-react 활용 예시
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {/* Button 데모 */}
          <Card>
            <CardHeader>
              <CardTitle>Button 컴포넌트</CardTitle>
              <CardDescription>다양한 스타일과 크기 지원</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </CardContent>
          </Card>

          {/* Badge 데모 */}
          <Card>
            <CardHeader>
              <CardTitle>Badge 컴포넌트</CardTitle>
              <CardDescription>라벨과 태그 표시</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Card 데모 */}
          <Card className="sm:col-span-2">
            <CardHeader>
              <CardTitle>Card 컴포넌트</CardTitle>
              <CardDescription>
                콘텐츠를 감싸는 컨테이너 컴포넌트
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                이것이 Card 컴포넌트의 예시입니다. CardHeader, CardTitle,
                CardDescription, CardContent 등으로 구성됩니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      {/* CTA 섹션 */}
      <section className="space-y-6 py-12 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            지금 시작하세요
          </h2>
          <p className="text-lg text-muted-foreground">
            이 스타터킷으로 프로젝트를 빠르게 시작할 수 있습니다.
          </p>
        </div>
        <Button size="lg" className="mx-auto">
          Get Started
        </Button>
      </section>
    </main>
  );
}
