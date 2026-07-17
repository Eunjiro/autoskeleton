import { memo } from "react";

import { ButtonSkeleton } from "../ButtonSkeleton";
import { Skeleton } from "../Skeleton";
import { SkeletonGroup } from "../SkeletonGroup";

import type { FormSkeletonProps } from "./FormSkeleton.types";

/**
 * A skeleton placeholder for forms.
 *
 * Renders optional field labels followed by input field placeholders, and an
 * optional submit button.
 *
 * ```tsx
 * <FormSkeleton />
 *
 * // Without labels, 6 fields
 * <FormSkeleton fields={6} showLabels={false} />
 * ```
 */
export const FormSkeleton = memo(function FormSkeleton({
  fields = 4,
  showLabels = true,
  inputHeight = 40,
  showSubmitButton = true,
  gap = 20,
  ...groupProps
}: FormSkeletonProps) {
  return (
    <SkeletonGroup gap={gap} {...groupProps}>
      {Array.from({ length: fields }).map((_, i) => (
        <SkeletonGroup key={i} gap={6}>
          {showLabels && <Skeleton width="30%" height={14} />}
          <Skeleton width="100%" height={inputHeight} radius="md" />
        </SkeletonGroup>
      ))}

      {showSubmitButton && <ButtonSkeleton width={140} height={44} />}
    </SkeletonGroup>
  );
});
