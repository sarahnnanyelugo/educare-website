import React from "react";
import "./badge.scss";

export interface BadgeProps {
  btnBg: string;
  btnColor: string;
}
function Badge(props: BadgeProps) {
  const { btnBg, btnColor } = props;
  return (
    <button
      className="recommended-badge"
      style={{ backgroundColor: btnBg, color: btnColor }}
    >
      Recommended
    </button>
  );
}

export default Badge;
