import React from "react";

export function Button({
  children,
  size = "md",
  variant = "solid",
  type = "button",
  className = "",
  ...props
}) {
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  };
  const variants = {
    solid: "primary-bg text-white hover:bg-brand-600",
    ghost: "lighter-primary-bg text-slate-700 hover:bg-slate-100",
  };
  return (
    <button
      type={type}
      className={`${sizes[size]} ${variants[variant]} rounded-lg font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
