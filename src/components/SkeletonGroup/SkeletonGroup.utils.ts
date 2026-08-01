import type {
  ResponsiveValue,
  SkeletonBreakpoint,
} from "./SkeletonGroup.types";

/**
 * Container-width (not viewport-width) breakpoints, in pixels, for
 * responsive `columns`/`direction` values.
 */
export const RESPONSIVE_BREAKPOINTS: Record<SkeletonBreakpoint, number> = {
  sm: 480,
  md: 640,
  lg: 800,
  xl: 1024,
};

const BREAKPOINT_ORDER: SkeletonBreakpoint[] = ["sm", "md", "lg", "xl"];

type Primitive = number | string;

function isResponsiveObject<T extends Primitive>(
  value: ResponsiveValue<T> | undefined,
): value is { base?: T } & Partial<Record<SkeletonBreakpoint, T>> {
  return typeof value === "object" && value !== null;
}

function baseValue<T extends Primitive>(
  value: ResponsiveValue<T> | undefined,
): T | undefined {
  if (value === undefined) return undefined;
  return isResponsiveObject(value) ? value.base : value;
}

/** Resolves the always-applied (below the smallest breakpoint) values. */
export function resolveBaseLayout(
  columns: ResponsiveValue<Primitive> | undefined,
  direction: ResponsiveValue<"row" | "column"> | undefined,
) {
  return {
    columns: baseValue(columns),
    direction: baseValue(direction) ?? "column",
  };
}

export function isResponsive(
  columns: ResponsiveValue<Primitive> | undefined,
  direction: ResponsiveValue<"row" | "column"> | undefined,
): boolean {
  return isResponsiveObject(columns) || isResponsiveObject(direction);
}

function gridTemplateColumnsValue(columns: Primitive): string {
  return typeof columns === "number" ? `repeat(${columns}, 1fr)` : columns;
}

/**
 * Builds the CSS for a responsive group: an unconditional base rule plus an
 * `@container` rule for every breakpoint at which `columns`/`direction` is
 * set, all scoped to `className`.
 *
 * The base value is emitted as a plain stylesheet rule — not left to inline
 * style — specifically so the `@container` rules can win over it. An inline
 * `style` attribute always beats stylesheet rules regardless of specificity
 * or media/container conditions, so if the base value lived in `style` (as
 * it does in the non-responsive case), no `@container` override could ever
 * take effect. Only call this when `isResponsive()` is true.
 */
export function buildResponsiveCss(
  className: string,
  isGrid: boolean,
  columns: ResponsiveValue<Primitive> | undefined,
  direction: ResponsiveValue<"row" | "column"> | undefined,
): string {
  const base = resolveBaseLayout(columns, direction);
  const rules: string[] = [];

  const baseDecls: string[] = [];
  if (isGrid && base.columns !== undefined) {
    baseDecls.push(`grid-template-columns: ${gridTemplateColumnsValue(base.columns)};`);
  }
  if (!isGrid) {
    baseDecls.push(`flex-direction: ${base.direction};`);
  }
  if (baseDecls.length > 0) {
    rules.push(`.${className} { ${baseDecls.join(" ")} }`);
  }

  const columnsByBreakpoint = isResponsiveObject(columns) ? columns : undefined;
  const directionByBreakpoint = isResponsiveObject(direction) ? direction : undefined;

  for (const bp of BREAKPOINT_ORDER) {
    const decls: string[] = [];
    const columnsAtBp = columnsByBreakpoint?.[bp];
    const directionAtBp = directionByBreakpoint?.[bp];

    if (isGrid && columnsAtBp !== undefined) {
      decls.push(`grid-template-columns: ${gridTemplateColumnsValue(columnsAtBp)};`);
    }
    if (!isGrid && directionAtBp !== undefined) {
      decls.push(`flex-direction: ${directionAtBp};`);
    }

    if (decls.length > 0) {
      rules.push(
        `@container (min-width: ${RESPONSIVE_BREAKPOINTS[bp]}px) { .${className} { ${decls.join(" ")} } }`,
      );
    }
  }

  return rules.join("\n");
}
