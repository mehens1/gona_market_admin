import React from "react";
import { Link, useLocation } from "react-router-dom";

const nav = [
  { label: "Dashboard", icon: "pi pi-chart-line", path: "/" },
  { label: "Users", icon: "pi pi-user", path: "/users" },
  { label: "Products", icon: "pi pi-list", path: "/products" },
  { label: "Settings", icon: "pi pi-cog", path: "/settings" },
];

export default function Sidebar({ open = false, onClose = () => {} }) {
  return (
    <>
      {/* Desktop fixed */}
      <aside className="hidden md:flex md:flex-col fixed top-0 left-0 h-full w-72 bg-white p-6 border-r z-20">
        <SidebarContent />
      </aside>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div onClick={onClose} className="absolute inset-0 bg-black/30" />

        {/* Drawer */}
        <aside
          className={`absolute left-0 top-0 h-full w-64 bg-white p-4 transform transition-transform ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SidebarContent onClose={onClose} />
        </aside>
      </div>
    </>
  );
}

function SidebarContent({ onClose }) {
  const location = useLocation();

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img
            src="/assets/images/gona_market_main_logo.png"
            width={40}
            alt="logo"
          />
          <div className="text-lg font-semibold primary-text">GONA MARKET</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-slate-100 md:hidden"
          >
            <i className="pi pi-times" />
          </button>
        )}
      </div>

      <nav className="flex-1 space-y-5">
        {nav.map((i) => {
          const isActive = location.pathname === i.path;
          // console.log("check this meeeee: ", isActive);
          // console.log("check this meeeee: ", location.pathname);

          return (
            <Link
              key={i.label}
              to={i.path}
              onClick={onClose}
              className={`w-full primary-text flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                isActive
                  ? "primary-bg lighter-primary-text p-4"
                  : ""
              }`}
            >
              <i className={`${i.icon} text-lg`} />
              <span>{i.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
