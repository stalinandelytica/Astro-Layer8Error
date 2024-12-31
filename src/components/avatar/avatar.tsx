import { Root } from "@radix-ui/react-avatar";
import { cn } from "@utils/cn";
import React from "react";

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof Root>,
    React.ComponentPropsWithRef<typeof Root> {}

const Avatar: React.FC<AvatarProps> = React.forwardRef(
  ({ className, ...props }, ref) => (
    <Root
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
);

export { Avatar };