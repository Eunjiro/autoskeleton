"use client";

import { useContext } from "react";

import { SkeletonLayoutContext } from "../context/SkeletonLayoutContext";

export function useSkeletonLayoutDirection() {
  return useContext(SkeletonLayoutContext);
}
