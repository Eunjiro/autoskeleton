import type { CSSProperties, ReactNode } from "react";

import type { SkeletonTheme } from "../../types/theme.types";

export interface SkeletonGroupProps extends Partial<SkeletonTheme> {
  children: ReactNode;

  /**
   * Space between children.
   */
  gap?: number | string;

  /**
   * Inner spacing.
   */
  padding?: number | string;

  /**
   * Layout direction.
   */
  direction?: "row" | "column";

  /**
   * Cross-axis alignment.
   */
  align?: CSSProperties["alignItems"];

  /**
   * Main-axis alignment.
   */
  justify?: CSSProperties["justifyContent"];

  /**
   * Optional custom class.
   */
  className?: string;

  /**
   * Optional inline styles.
   */
  style?: CSSProperties;
}