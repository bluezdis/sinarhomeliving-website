import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
}: CardProps) {
  const baseStyles =
    "bg-white border border-border rounded-lg p-4 md:p-6 shadow-sm";
  const hoverStyles = hover
    ? "transition-all duration-300 hover:shadow-md hover:border-primary-light"
    : "";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
