import { LogOut } from "lucide-react";
import { User } from "../../../types/authStore";
import { Button } from "../../ui/button";
import { cn } from "../../../lib/utils";

type UserSectionProps = {
  user: User | null;
  handleLogout: () => void;
};

export default function UserSection({ user, handleLogout }: UserSectionProps) {
  return (
    <div className="flex-shrink-0 border-t border-gray-200/60 p-4">
      <div className="mb-3 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 p-4">
        <div className="mb-3 flex items-center gap-3">
          <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
            <span className="text-lg font-bold text-white">
              {user?.username?.charAt(0).toUpperCase() || "U"}
            </span>
            <div className="absolute -right-1 -bottom-1 h-4 w-4 rounded-full border-2 border-white bg-green-500"></div>
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold text-gray-900">
              {user?.username || "ผู้ใช้"}
            </p>
            <p className="flex items-center gap-1 truncate text-xs text-gray-600">
              <span
                className={cn(
                  "inline-block h-2 w-2 rounded-full",
                  user?.role === "admin" ? "bg-orange-500" : "bg-blue-500",
                )}
              ></span>
              {user?.role === "admin" ? "ผู้ดูแลระบบ" : "เจ้าหน้าที่"}
            </p>
          </div>
        </div>
      </div>
      <Button
        onClick={handleLogout}
        className="group flex w-full items-center gap-3 rounded-xl p-3 font-medium text-gray-700 transition-all duration-200 hover:bg-red-50 hover:text-red-600 hover:shadow-md"
      >
        <div className="rounded-lg bg-gray-100 p-2 transition-all duration-200 group-hover:bg-red-100">
          <LogOut className="h-4 w-4 flex-shrink-0 group-hover:text-red-600" />
        </div>
        <span className="truncate">ออกจากระบบ</span>
      </Button>
    </div>
  );
}
