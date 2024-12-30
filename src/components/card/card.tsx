import { cn } from "@utils/cn";
import type React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<CardProps> = ({ className, ...props }) => (
  <div 
    className={cn("rounded-lg border-2 border-woodsmoke-800 bg-gradient-to-tr from-woodsmoke-800/40 to-woodsmoke-800/60", className)} 
    {...props} 
  />
);

export { Card };
