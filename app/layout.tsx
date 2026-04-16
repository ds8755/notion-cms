import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude Next.js Starter Kit",
  description:
    "Next.js v15, TypeScript, TailwindCSS v4, shadcn/ui, lucide-react로 구성된 모던 웹 개발 스타터킷",
  keywords: [
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "shadcn/ui",
    "lucide-react",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
