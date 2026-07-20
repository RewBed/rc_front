import React from "react";

type BrandWordmarkProps = {
  className?: string;
};

const BrandWordmark: React.FC<BrandWordmarkProps> = ({ className = "" }) => (
  <span
    aria-label="ARTEL CODE"
    className={`artel-wordmark ${className}`.trim()}
    role="img"
  >
    <span aria-hidden="true" className="artel-wordmark__artel">
      ARTEL
    </span>
    <span aria-hidden="true" className="artel-wordmark__code">
      <span>C</span>
      <span>O</span>
      <span>D</span>
      <span>E</span>
    </span>
  </span>
);

export default BrandWordmark;
