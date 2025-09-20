import React from "react";

export default function Input({ className = "", placeholder = "", ...rest }) {
  return (
    <div>
      <input
        className={`w-full px-4 py-2 rounded-full border border-slate-200 bg-white text-sm focus:ring-0 focus:border-brand-300 ${className}`}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}
