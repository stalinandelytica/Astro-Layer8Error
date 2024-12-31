import { Fallback } from "@radix-ui/react-avatar";
import { cn } from "@utils/cn";
import React from "react";

export interface AvatarFallbackProps 
  extends React.ComponentPropsWithoutRef<typeof Fallback>,
    React.ComponentPropsWithRef<typeof Fallback> {};

const AvatarFallBack: React.FC<AvatarFallbackProps> = React.forwardRef(
  ({ className, ...props }) => (
    <Fallback
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-woodsmoke-700",
        className
      )}
      {...props}
    />
  )
);

export { AvatarFallBack };