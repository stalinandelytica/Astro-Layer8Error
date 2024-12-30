import { cn } from "@utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

const badgeVariants = cva(
  'h-5 w-max max-w-20 px-2.5 border text-xs inline-flex items-center font-semibold rounded-md',
  {
    variants: {
      variant: {
        default: 
          'bg-woodsmoke-900 text-woodsmoke-50 border-woodsmoke-800',
        secondary: 
          'bg-woodsmoke-100 text-woodsmoke-950 border-woodsmoke-50',
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export interface BadgeProps 
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { };

const Badge: React.FC<BadgeProps> = ({ className, variant, ...props }) =>
(
  <div
    className={cn(badgeVariants({ variant, className }))}
    {...props}
  />
);

export { Badge, badgeVariants };