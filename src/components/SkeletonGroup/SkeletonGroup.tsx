import type { CSSProperties } from "react";

import { SkeletonContext } from "../../context/SkeletonContext";
import { useSkeleton } from "../../hooks/useSkeleton";

import type { SkeletonGroupProps } from "./SkeletonGroup.types";

export function SkeletonGroup({
  children,

  gap = 16,
  padding = 0,

  direction = "column",

  align = "stretch",

  justify = "flex-start",

  className,

  style,

  ...themeOverrides
}: SkeletonGroupProps) {
  const parentTheme = useSkeleton();

  const theme = {
    ...parentTheme,
    ...themeOverrides,
  };

  const groupStyle: CSSProperties = {
    display: "flex",
    flexDirection: direction,
    gap,
    padding,
    alignItems: align,
    justifyContent: justify,
    ...style,
  };

  return (
    <SkeletonContext.Provider value={theme}>
      <div
        className={className}
        style={groupStyle}
      >
        {children}
      </div>
    </SkeletonContext.Provider>
  );
}