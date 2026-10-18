import { ReactNode } from "react";

interface BracketsProps {
  children: ReactNode;
  className?: string;
}

// Wraps content in four corner brackets, like a viewfinder.
export const Brackets = ({ children, className = "" }: BracketsProps) => (
  <div className={`brackets ${className}`}>
    <span className="brackets__corner brackets__corner--tl" />
    <span className="brackets__corner brackets__corner--tr" />
    <span className="brackets__corner brackets__corner--bl" />
    <span className="brackets__corner brackets__corner--br" />
    {children}
  </div>
);
