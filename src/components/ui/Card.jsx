import React from "react";

export default function Card({ title, actions, children, className = "" }) {
  return (
    <div className={`card p-4 ${className}`}>
      {title && (
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
          <div>{actions}</div>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}
