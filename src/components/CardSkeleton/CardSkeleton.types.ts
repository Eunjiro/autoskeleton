import type { SkeletonGroupProps } from "../SkeletonGroup";

export interface CardSkeletonProps
  extends Omit<SkeletonGroupProps, "children"> {
  direction?: "row" | "column";

  showImage?: boolean;

  showAvatar?: boolean;

  showButton?: boolean;

  imageHeight?: number;

  imageWidth?: number | string;

  avatarSize?: number;

  lines?: number;
}