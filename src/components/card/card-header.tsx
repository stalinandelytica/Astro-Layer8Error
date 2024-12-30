import { cva } from "class-variance-authority";
import type React from "react";

const cardHeaderProps = cva();

export interface CardHeaderProps 
  extends React.HTMLAttributes<HTMLDivElement> { };

const CardHeader: React.FC<CardHeaderProps> = ({ className, ...props }) => (
  <div
    className="flex flex-col space-y-1.5 p-5"
    {...props}
  />
)

export { CardHeader }