import type { SkeletonTheme } from "../types/theme.types";

/**
 * Default light-mode theme.
 *
 * Used automatically when no `SkeletonProvider` is present.
 */
export const DEFAULT_THEME: SkeletonTheme = {
  animation: "wave",
  duration: 1.2,
  easing: "ease-in-out",
  animationDirection: "normal",
  radius: "md",
  color: "#E5E7EB",
  highlight: "#F9FAFB",
};

/**
 * Dark-mode theme preset.
 *
 * Pass to `SkeletonProvider` or `SkeletonGroup` when your app uses a dark
 * colour scheme:
 *
 * ```tsx
 * import { SkeletonProvider, DARK_THEME } from '@gyojiro/autoskeleton-react';
 *
 * <SkeletonProvider {...DARK_THEME}>
 *   <App />
 * </SkeletonProvider>
 * ```
 */
export const DARK_THEME: Partial<SkeletonTheme> = {
  color: "#374151",
  highlight: "#4B5563",
};