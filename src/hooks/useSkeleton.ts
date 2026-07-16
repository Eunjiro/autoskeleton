import { useContext } from "react";

import { SkeletonContext } from "../context/SkeletonContext";

export function useSkeleton() {
  return useContext(SkeletonContext);
}