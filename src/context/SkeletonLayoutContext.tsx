"use client";

import { createContext } from "react";

/**
 * The flex direction of the nearest ancestor `SkeletonGroup`, or `"column"`
 * if there is none.
 *
 * Consumed internally by `Skeleton` and `TextSkeleton` to decide whether a
 * percentage-width element needs an explicit flex-basis to avoid collapsing
 * to 0 width as the main-axis flex item of a row. Not part of the public API.
 */
export const SkeletonLayoutContext = createContext<"row" | "column">("column");
