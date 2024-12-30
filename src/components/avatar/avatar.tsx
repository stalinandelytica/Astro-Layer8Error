import { cn } from "@utils/cn";
import type React from "react";

export interface AvatarProps 
  extends React.HTMLAttributes<HTMLSpanElement> { };

const Avatar: React.FC<AvatarProps> = ({ className, ...props }) => (
  <span
    className={cn(className)}
    {...props}
  />
);

export { Avatar };