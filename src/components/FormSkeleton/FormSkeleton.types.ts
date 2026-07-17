import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `FormSkeleton`.
 */
export interface FormSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction"> {
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
