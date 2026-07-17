import { memo, type CSSProperties } from "react";

import { Skeleton } from "../Skeleton";
import { SkeletonGroup } from "../SkeletonGroup";
import { TextSkeleton } from "../TextSkeleton";

import type { TimelineSkeletonProps } from "./TimelineSkeleton.types";

const DOT_SIZE = 14;
const LINE_WIDTH = 2;

/**
 * A skeleton placeholder for vertical timeline / activity-feed components.
 *
 * Each event renders a dot on a vertical rail alongside a content block.
 *
 * ```tsx
 * <TimelineSkeleton events={5} />
 * ```
 */
export const TimelineSkeleton = memo(function TimelineSkeleton({
  events = 4,
  lines = 2,
  showTimestamp = true,
  gap = 0,
  ...groupProps
}: TimelineSkeletonProps) {
  return (
    <SkeletonGroup gap={gap} {...groupProps}>
      {Array.from({ length: events }).map((_, i) => {
        const isLast = i === events - 1;

        return (
          <SkeletonGroup key={i} direction="row" gap={16} align="flex-start">
            {/* Rail column — dot + vertical line */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexShrink: 0,
                width: DOT_SIZE,
              }}
            >
              <Skeleton
                width={DOT_SIZE}
                height={DOT_SIZE}
                variant="circle"
                style={{ flexShrink: 0 }}
              />
              {!isLast && (
                <div
                  style={
                    {
                      width: LINE_WIDTH,
                      flex: 1,
                      minHeight: 40,
                      backgroundColor: "var(--skeleton-color)",
                      "--skeleton-color": undefined,
                    } as CSSProperties
                  }
                />
              )}
            </div>

            {/* Event content */}
            <SkeletonGroup gap={8} style={{ flex: 1, paddingBottom: isLast ? 0 : 24 }}>
              {/* Event title + optional timestamp */}
              <SkeletonGroup direction="row" gap={8} align="center" justify="space-between">
                <Skeleton width="55%" height={16} />
                {showTimestamp && <Skeleton width={80} height={13} />}
              </SkeletonGroup>

              <TextSkeleton
                lines={lines}
                lineHeight={13}
                gap={6}
                lastLineWidth="70%"
              />
            </SkeletonGroup>
          </SkeletonGroup>
        );
      })}
    </SkeletonGroup>
  );
});
