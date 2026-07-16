import React from "react";

type BrandWordmarkProps = {
  className?: string;
};

const BrandWordmark: React.FC<BrandWordmarkProps> = ({ className = "" }) => (
  <span
    aria-label="ARTEL CODE"
    className={`artel-wordmark ${className}`.trim()}
  >
    <span>ARTEL</span>
    <span>CODE</span>
  </span>
);

export default BrandWordmark;
