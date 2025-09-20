import React, { useState, useRef, useEffect } from "react";
import Input from "../ui/Input";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function Topbar({ onToggleSidebar }) {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const profileRef = useRef(null);
  const notifRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="flex justify-between items-center gap-2 px-2 md:px-6 py-2">
        {/* Mobile Sidebar Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-md hover:bg-slate-100"
          >
            <i className="pi pi-bars text-xl primary-text" />
          </button>

          <div className="flex items-center gap-1">
            <img
              src="/assets/images/gona_market_main_logo.png"
              width={20}
              alt="logo"
            />
            <div className="text-lg primary-text font-semibold">
              GONA MARKET
            </div>
          </div>
        </div>

        {/* Search + Actions */}
        <div className="flex flex-1 justify-between items-center">
          <Input
            className="hidden md:block w-80"
            placeholder="Tap here to search"
          />

          <div className="flex items-center gap-4">
            {/* Notifications */}
            <div className="relative" ref={notifRef}>
              <button
                className="p-2 rounded-full bg-white hover:bg-slate-100 relative"
                onClick={() => setNotifOpen((prev) => !prev)}
              >
                <i className="pi pi-bell primary-text text-xl" />
                {/* Red dot indicator */}
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>

              {notifOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border z-50">
                  <div className="p-3 font-medium border-b">Notifications</div>
                  <ul className="max-h-60 overflow-y-auto text-sm">
                    <li className="p-3 hover:bg-slate-50 cursor-pointer">
                      📦 Your order has been shipped
                    </li>
                    <li className="p-3 hover:bg-slate-50 cursor-pointer">
                      🔔 New user registered
                    </li>
                    <li className="p-3 hover:bg-slate-50 cursor-pointer">
                      💬 You have a new message
                    </li>
                  </ul>
                  <div className="p-2 text-center text-brand-500 text-sm cursor-pointer hover:underline">
                    View all
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                className="flex items-center gap-2 p-1 rounded-full hover:bg-slate-100"
                onClick={() => setProfileOpen((prev) => !prev)}
              >
                <img
                  src={user?.avatar || "/assets/images/user_green.png"}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border shadow-sm"
                />
                <span className="hidden md:block font-medium text-slate-700">
                  {user?.first_name || user?.last_name || user?.email}
                </span>
                <i className="pi pi-chevron-down text-sm text-slate-500" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border z-50">
                  <ul className="text-sm">
                    <div className="py-2 px-4 border-b">
                      {user?.first_name || user?.last_name ? (
                        <p className="text-sm primary-text font-bold">{`${user?.first_name} ${user?.last_name}`}</p>
                      ) : null}
                      <p className="text-sm secondary-text">{user?.email}</p>
                    </div>

                    <li className="px-4 py-2 hover:bg-slate-50 cursor-pointer">
                      Settings
                    </li>
                    <li
                      className="px-4 py-2 text-red-500 hover:bg-red-50 cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
