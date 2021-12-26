import React from "react";
import "./badge.scss";

const Badge: React.FC = ({ children }) => {
  return (
    <div className="badge">
      <span>{children}</span>
    </div>
  );
};

export default Badge;
