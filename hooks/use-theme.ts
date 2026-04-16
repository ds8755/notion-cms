"use client";

import { useTheme as useNextTheme } from "next-themes";

/**
 * next-themes 래퍼 훅
 * 컴포넌트에서 현재 테마와 테마 변경 함수에 접근할 수 있습니다.
 */
export function useTheme() {
  return useNextTheme();
}
