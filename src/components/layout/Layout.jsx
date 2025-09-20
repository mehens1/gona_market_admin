import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full h-screen flex bg-slate-50">
      {/* Sidebar renders both desktop fixed and mobile drawer */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content: pushed right on desktop because of md:ml-72 */}
      <div className="flex-1 flex flex-col md:ml-72">
        {/* Topbar sticky at top */}
        <div className="sticky top-0 z-30 lighter-primary-bg">
          <Topbar onToggleSidebar={() => setSidebarOpen((v) => !v)} />
        </div>

        {/* Scrollable content area only */}
        <main className="flex-1 overflow-y-auto p-6 lighter-primary-bgm bg-red-500">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
