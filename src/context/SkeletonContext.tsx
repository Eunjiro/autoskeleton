import { createContext } from "react";
import { DEFAULT_THEME } from "../constants/defaultTheme";
import type { SkeletonTheme } from "../types/theme.types";

export const SkeletonContext = createContext<SkeletonTheme>(DEFAULT_THEME);