import type { ReactNode } from "react";

import { DEFAULT_THEME } from "../constants/defaultTheme";
import { SkeletonContext } from "./SkeletonContext";

import type { SkeletonTheme } from "../types/theme.types";

export interface SkeletonProviderProps extends Partial<SkeletonTheme> {
  children: ReactNode;
}

export function SkeletonProvider({
  children,
  ...themeOverrides
}: SkeletonProviderProps) {
  const theme: SkeletonTheme = {
    ...DEFAULT_THEME,
    ...themeOverrides,
  };

  return (
    <SkeletonContext.Provider value={theme}>
      {children}
    </SkeletonContext.Provider>
  );
}