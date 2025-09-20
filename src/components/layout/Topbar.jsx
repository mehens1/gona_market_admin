import React from "react";
import Input from "../ui/Input";

export default function Topbar({ onToggleSidebar }) {
  return (
    <header className="">
      <div className="flex justify-between items-center gap-2 px-2 md:px-6 py-2">
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-md hover:bg-slate-100"
          >
            <i className="pi pi-bars text-xl primary-text" />
          </button>

          <div className="flex items-center gap-1">
            <img src="/assets/images/gona_market_main_logo.png" width={20} alt="logo" />
            <div className="text-lg primary-text font-semibold">
              GONA MARKET
            </div>
          </div>
        </div>

        <div className="flex flex-1 justify-between items-center">
          <Input className="hidden md:block" placeholder="Tap here to search" />

          <div className="flex justify-between items-center gap-4">
            <button className="p-2 rounded-full bg-white">
              <i className="pi pi-bell primary-text" />
            </button>

            <div className="w-12 h-12">
              <img
                src="https://i.pravatar.cc/40?img=5"
                alt="avatar"
                className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
