import type React from "react";

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement> { };

const CardFooter: React.FC<CardFooterProps> = ({ className, ...props }) => (
  <div
    className='flex items-center p-5 pt-0'
    {...props}
  />
);

export { CardFooter }