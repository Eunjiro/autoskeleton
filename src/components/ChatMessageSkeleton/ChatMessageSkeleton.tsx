import { memo } from "react";

import { AvatarSkeleton } from "../AvatarSkeleton";
import { Skeleton } from "../Skeleton";
import { SkeletonGroup } from "../SkeletonGroup";

import type { ChatMessageSkeletonProps } from "./ChatMessageSkeleton.types";

// Alternating bubble widths to look like a natural conversation.
const BUBBLE_WIDTHS = ["70%", "55%", "80%", "45%", "65%", "75%", "50%", "60%"];

/**
 * A skeleton placeholder for chat / messaging interfaces.
 *
 * Messages alternate between left-aligned (received) and right-aligned (sent)
 * bubbles to simulate a real conversation.
 *
 * ```tsx
 * <ChatMessageSkeleton messages={6} />
 * ```
 */
export const ChatMessageSkeleton = memo(function ChatMessageSkeleton({
  messages = 4,
  showInput = true,
  gap = 16,
  ...groupProps
}: ChatMessageSkeletonProps) {
  return (
    <SkeletonGroup gap={gap} {...groupProps}>
      {Array.from({ length: messages }).map((_, i) => {
        const isSent = i % 2 === 1;
        const width = BUBBLE_WIDTHS[i % BUBBLE_WIDTHS.length];

        return (
          <SkeletonGroup
            key={i}
            direction="row"
            gap={8}
            align="flex-end"
            justify={isSent ? "flex-end" : "flex-start"}
          >
            {!isSent && <AvatarSkeleton size={32} />}

            <Skeleton
              width={width}
              height={isSent ? 38 : 44}
              radius="lg"
            />

            {isSent && <AvatarSkeleton size={32} />}
          </SkeletonGroup>
        );
      })}

      {/* Message input bar */}
      {showInput && (
        <SkeletonGroup direction="row" gap={10} align="center">
          <Skeleton width="100%" height={44} radius="full" style={{ flex: 1 }} />
          <Skeleton width={44} height={44} variant="circle" />
        </SkeletonGroup>
      )}
    </SkeletonGroup>
  );
});
