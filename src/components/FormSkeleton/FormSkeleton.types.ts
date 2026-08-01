import type { ReactNode } from "react";

import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `FormSkeleton`.
 */
export interface FormSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction"> {
  /**
   * Extra content appended after the submit button, for a near-miss layout
   * without reimplementing the form from primitives.
   */
  children?: ReactNode;

  /**
   * Number of form fields to render.
   * @default 4
   */
  fields?: number;

  /**
   * Show label placeholders above each input.
   * @default true
   */
  showLabels?: boolean;

  /**
   * Height of each input placeholder in pixels.
   * @default 40
   */
  inputHeight?: number;

  /**
   * Show a submit button placeholder at the bottom.
   * @default true
   */
  showSubmitButton?: boolean;
}
