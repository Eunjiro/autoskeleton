/**
 * Dark-mode theme preset for AutoSkeleton.
 *
 * @example
 * ```tsx
 * import { SkeletonProvider, DARK_THEME } from '@gyojiro/autoskeleton-react';
 *
 * <SkeletonProvider {...DARK_THEME}>
 *   <App />
 * </SkeletonProvider>
 * ```
 *
 * You can also spread it into a `SkeletonGroup` for section-level dark
 * overrides without wrapping your entire app:
 *
 * ```tsx
 * <SkeletonGroup {...DARK_THEME}>
 *   <CardSkeleton />
 * </SkeletonGroup>
 * ```
 */
export { DARK_THEME } from "../constants/defaultTheme";
