"use client";

import { Image } from "@radix-ui/react-avatar";
import { cn } from "@utils/cn";
import React from "react";

export interface AvatarImageProps
  extends React.ComponentPropsWithoutRef<typeof Image>,
    React.ComponentPropsWithRef<typeof Image> {}

const AvatarImage: React.FC<AvatarImageProps> = React.forwardRef(
  ({ className, ...props }, ref) => (
    <Image
      ref={ref}
      className={cn("aspect-square h-full w-full", className)}
      {...props}
    />
  )
);

export { AvatarImage };
