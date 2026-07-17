import "./index.css";

// ─── Context & Provider ──────────────────────────────────────────────────────
export * from "./context/SkeletonProvider";

// ─── Hook ────────────────────────────────────────────────────────────────────
export { useSkeleton } from "./hooks/useSkeleton";

// ─── Primitives ──────────────────────────────────────────────────────────────
export * from "./components/Skeleton";

// ─── Layout ──────────────────────────────────────────────────────────────────
export * from "./components/SkeletonGroup";

// ─── Atomic components ───────────────────────────────────────────────────────
export * from "./components/AvatarSkeleton";
export * from "./components/ButtonSkeleton";
export * from "./components/ImageSkeleton";
export * from "./components/TextSkeleton";

// ─── Composite components ────────────────────────────────────────────────────
export * from "./components/ArticleSkeleton";
export * from "./components/CardSkeleton";
export * from "./components/ChatMessageSkeleton";
export * from "./components/CommentSkeleton";
export * from "./components/DashboardSkeleton";
export * from "./components/FormSkeleton";
export * from "./components/GallerySkeleton";
export * from "./components/ListSkeleton";
export * from "./components/MediaObjectSkeleton";
export * from "./components/NavbarSkeleton";
export * from "./components/PricingCardSkeleton";
export * from "./components/ProductCardSkeleton";
export * from "./components/ProfileSkeleton";
export * from "./components/SidebarSkeleton";
export * from "./components/StatisticCardSkeleton";
export * from "./components/TableSkeleton";
export * from "./components/TimelineSkeleton";

// ─── Theme presets ───────────────────────────────────────────────────────────
export { DARK_THEME } from "./constants/defaultTheme";

// ─── Types ───────────────────────────────────────────────────────────────────
export type * from "./types/theme.types";