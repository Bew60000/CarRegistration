"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

import HeaderBar from "../components/navbar/HeaderBar";
// import Sidebar from "../toggle-admin-page/Navigation";
import Navbar from "../components/navbar/Navbar";

type AdminPageLayoutProps = {
  children: React.ReactNode;
  title?: string;
  setToggle: React.Dispatch<React.SetStateAction<string>>;
};

export default function AdminPageLayout({
  children,
  title = "หน้าหลัก",
  setToggle,
}: AdminPageLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const closeSidebar = () => setSidebarOpen(false);
  const openSidebar = () => setSidebarOpen(true);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Navbar
        isOpen={sidebarOpen}
        onClose={closeSidebar}
        currentPath={pathname}
        setToggle={setToggle}
      />

      {/* Main content */}
      <div className="flex min-w-0 flex-1 flex-col lg:justify-center">
        {/* Header */}
        <HeaderBar onMenuClick={openSidebar} title={title} />

        {/* Content */}
        <main className="flex-1 overflow-auto">
          <div className="content-container px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <div className="max-w-full">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
