import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";

/**
 * 상단 네비게이션 헤더
 * 로고, 네비게이션 링크, 다크모드 토글을 포함합니다.
 */
export function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold">Claude Starter Kit</h1>
          </div>

          <nav className="hidden gap-6 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              기능
            </a>
            <a
              href="#tech-stack"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              기술 스택
            </a>
            <a
              href="https://github.com"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </nav>

          <ThemeToggle />
        </div>
      </header>
      <Separator />
    </>
  );
}
