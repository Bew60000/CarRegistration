import { Car, X } from "lucide-react";
import { Button } from "../../ui/button";

type HeaderNavbarProps = {
  onClose: () => void;
};

export default function HeaderNavbar({ onClose }: HeaderNavbarProps) {
  return (
    <div className="flex flex-shrink-0 items-center justify-between border-b bg-gradient-to-r from-blue-50/50 to-indigo-50/30 p-4 sm:p-6">
      <div className="flex min-w-0 items-center gap-3">
        <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
          <Car className="h-6 w-6 text-white" />
          <div className="absolute inset-0 rounded-xl bg-white/20"></div>
        </div>
        <div className="min-w-0">
          <h1 className="truncate bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-sm font-bold text-gray-900 sm:text-base">
            ระบบลงทะเบียนรถ
          </h1>
          <p className="mt-0.5 text-xs text-gray-500">จัดการข้อมูลยานพาหนะ</p>
        </div>
      </div>
      <Button
        onClick={onClose}
        className="group flex-shrink-0 rounded-xl p-2 transition-all duration-200 hover:bg-red-50 hover:text-red-500 lg:hidden"
      >
        <X className="h-5 w-5 text-gray-400 transition-colors group-hover:text-red-500" />
      </Button>
    </div>
  );
}
