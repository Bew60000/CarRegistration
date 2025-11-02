"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth-store";
import { cn } from "@/lib/utils";
import {
  adminItems,
  navigationItems,
  quickActionItems,
} from "../../constants/NavbarItems";
import HeaderNavbar from "./navbar-detail/HeaderNavbar";
import Navigation from "./navbar-detail/Navigation";
import UserSection from "./navbar-detail/UserSection";

type SidebarProp = {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
  setToggle: React.Dispatch<React.SetStateAction<string>>;
  setHeader: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navbar({
  isOpen,
  onClose,
  currentPath,
  setToggle,
  setHeader,
}: SidebarProp) {
  const { user, logout } = useAuthStore();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-50 flex h-full w-64 transform flex-col border-r border-gray-200/80 bg-white/95 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-in-out sm:w-72",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:static lg:z-auto lg:w-64 lg:translate-x-0 lg:shadow-lg",
        )}
      >
        {/* Header */}
        <HeaderNavbar onClose={onClose} />

        {/* Navigation */}
        <Navigation
          navigationItems={navigationItems}
          quickActionItems={quickActionItems}
          adminItems={adminItems}
          currentPath={currentPath}
          setToggle={setToggle}
          setHeader={setHeader}
        />

        {/* User section */}
        <UserSection user={user} handleLogout={handleLogout} />
      </div>
    </>
  );
}
