import { NavigationItem } from "../../../constants/NavbarItems";
import { cn } from "../../../lib/utils";

type NavigationProps = {
  navigationItems: NavigationItem[];
  quickActionItems: NavigationItem[];
  adminItems: NavigationItem[];
  currentPath: string;
  setToggle: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navigation({
  navigationItems,
  quickActionItems,
  adminItems,
  currentPath,
  setToggle,
}: NavigationProps) {
  return (
    <nav className="flex-1 space-y-1 overflow-y-auto p-3 sm:p-4">
      {/* Main Navigation Items */}
      {navigationItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentPath === item.toggleNumber;

        return (
          <a
            key={item.toggleNumber}
            onClick={() => setToggle(item.toggleNumber)}
            className={cn(
              "group flex items-center gap-3 rounded-xl p-3 text-sm font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-md sm:text-base",
              isActive
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-blue-500/25"
                : "text-gray-700 hover:border-red-200 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-50 hover:text-red-700",
            )}
          >
            <div
              className={cn(
                "rounded-lg p-2 transition-all duration-200",
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-gray-100 text-gray-600 group-hover:bg-red-100 group-hover:text-red-600",
              )}
            >
              <Icon className="h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5" />
            </div>
            <span className="truncate font-medium">{item.label}</span>
            {isActive && (
              <div className="ml-auto h-2 w-2 animate-pulse rounded-full bg-white"></div>
            )}
          </a>
        );
      })}

      {/* Quick Actions Section */}
      <div className="mt-4 border-t border-gray-200/60 pt-4">
        <div className="mb-3 px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">
          เพิ่มข้อมูลใหม่
        </div>
        {quickActionItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPath === item.toggleNumber;

          return (
            <a
              // key={item.href}
              // href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-xl p-3 text-sm font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-md sm:text-base",
                isActive
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25"
                  : "text-gray-700 hover:border-green-200 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-700",
              )}
            >
              <div
                className={cn(
                  "rounded-lg p-2 transition-all duration-200",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600 group-hover:bg-green-100 group-hover:text-green-600",
                )}
              >
                <Icon className="h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5" />
              </div>
              <span className="truncate font-medium">{item.label}</span>
              {isActive && (
                <div className="ml-auto h-2 w-2 animate-pulse rounded-full bg-white"></div>
              )}
            </a>
          );
        })}
      </div>

      {/* Admin Section */}
      <div className="mt-4 border-t border-gray-200/60 pt-4">
        <div className="mb-3 px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">
          จัดการระบบ
        </div>
        {adminItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPath === item.toggleNumber;

          return (
            <a
              // key={item.href}
              // href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-xl p-3 text-sm font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-md sm:text-base",
                isActive
                  ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25"
                  : "text-gray-700 hover:border-orange-200 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-orange-700",
              )}
            >
              <div
                className={cn(
                  "rounded-lg p-2 transition-all duration-200",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600",
                )}
              >
                <Icon className="h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5" />
              </div>
              <span className="truncate font-medium">{item.label}</span>
              {isActive && (
                <div className="ml-auto h-2 w-2 animate-pulse rounded-full bg-white"></div>
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
