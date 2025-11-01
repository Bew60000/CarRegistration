"use client";

import { AlertTriangle, Menu } from "lucide-react";
import { useAuthStore } from "../../stores/auth-store";
import { Button } from "../ui/button";

type HeaderBarProps = {
  onMenuClick: () => void;
  title: string;
};

export default function HeaderBar({ onMenuClick, title }: HeaderBarProps) {
  const { user } = useAuthStore();
  return (
    <header className="flex-shrink-0 border-b border-gray-200/80 bg-white/95 px-4 py-2 shadow-sm backdrop-blur-xl sm:px-6 sm:py-3">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 flex-1 items-center gap-4">
          <Button
            onClick={onMenuClick}
            className="group flex-shrink-0 rounded-xl p-2 transition-all duration-200 hover:scale-105 hover:bg-gray-100 lg:hidden"
          >
            <Menu className="h-6 w-6 text-gray-700 group-hover:text-red-600" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="h-8 w-2 rounded-full bg-gradient-to-b from-red-500 to-red-600"></div>
            <h1 className="truncate bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
              {title}
            </h1>
          </div>
        </div>

        <div className="flex flex-shrink-0 items-center gap-3 sm:gap-4">
          {/* Notifications */}
          {/* <Button className="group relative rounded-xl p-2.5 text-gray-600 transition-all duration-200 hover:scale-105 hover:bg-orange-50 hover:text-orange-600">
            <AlertTriangle className="h-5 w-5 group-hover:animate-pulse" />
            <span className="absolute -top-1 -right-1 h-3 w-3 animate-pulse rounded-full bg-gradient-to-r from-red-500 to-orange-500">
              <span className="absolute inset-0 animate-ping rounded-full bg-red-500 opacity-75"></span>
            </span>
          </Button> */}

          {/* User menu */}
          <div className="flex items-center gap-3 rounded-full bg-gradient-to-r from-gray-50 to-blue-50 px-4 py-2 transition-all duration-200 hover:shadow-md">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
              <span className="text-sm font-bold text-white">
                {user?.username?.charAt(0).toUpperCase() || "U"}
              </span>
              <div className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
            </div>
            <div className="hidden md:block">
              <span className="block text-sm font-semibold text-gray-900">
                {user?.username || "ผู้ใช้"}
              </span>
              <span className="text-xs text-gray-500">
                {user?.role === "admin" ? "ผู้ดูแลระบบ" : "เจ้าหน้าที่"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
