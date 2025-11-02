import {
  Activity,
  AlertTriangle,
  Bell,
  Car,
  Clock,
  FileText,
  Search,
  Users,
} from "lucide-react";

interface IQuickAction {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
}

export default function Dashboard() {
  const quickActions: IQuickAction[] = [
    {
      title: "จัดการผู้ใช้",
      description: "เพิ่ม แก้ไข ลบผู้ใช้งาน",
      href: "/admin/users",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
    },
    {
      title: "ลงทะเบียนรถใหม่",
      description: "ลงทะเบียนรถยนต์เข้าระบบ",
      href: "/vehicles/new",
      icon: Car,
      color: "text-green-600",
      bgColor: "bg-green-50 hover:bg-green-100",
    },
    {
      title: "บันทึกใบสั่งจราจร",
      description: "สร้างใบสั่งจราจรใหม่",
      href: "/violations/new",
      icon: FileText,
      color: "text-orange-600",
      bgColor: "bg-orange-50 hover:bg-orange-100",
    },
    {
      title: "ค้นหาข้อมูล",
      description: "ค้นหาข้อมูลรถและใบสั่ง",
      href: "/search",
      icon: Search,
      color: "text-purple-600",
      bgColor: "bg-purple-50 hover:bg-purple-100",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="rounded-2xl bg-gradient-to-r from-red-600 to-yellow-500 p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-white">
              ยินดีต้อนรับสู่ระบบจัดการทะเบียนรถยนต์
            </h2>
            <p className="text-lg text-white">
              ระบบที่ใช้ Object-Oriented Programming และ Component-Based Design
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-opacity-20 flex h-24 w-24 items-center justify-center rounded-full bg-red-600">
              <Activity className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="rounded-lg bg-red-100 p-3">
              <Car className="h-6 w-6 text-red-600" />
            </div>
            <span className="text-sm text-gray-500">รถยนต์</span>
          </div>

          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">
              {/* {stats.vehicles.total} */}
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                {/* ใช้งาน: {stats.vehicles.active} */}
              </span>
              <span className="text-orange-600">
                {/* รอลงทะเบียน: {stats.vehicles.pendingRegistration} */}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="rounded-lg bg-red-100 p-3">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <span className="text-sm text-gray-500">ใบสั่งจราจร</span>
          </div>

          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">
              {/* {stats.violations.total} */}
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                {/* ชำระแล้ว: {stats.violations.paid} */}
              </span>
              <span className="text-red-600">
                {/* เกินกำหนด: {stats.violations.overdue} */}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="rounded-lg bg-red-100 p-3">
              <Activity className="h-6 w-6 text-red-600" />
            </div>
            <span className="text-sm text-gray-500">กิจกรรม</span>
          </div>

          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">
              {/* {stats.violations.pending} */}
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">รอดำเนินการ</span>
              <span className="text-blue-600">
                <Clock className="mr-1 inline h-3 w-3" />
                อัปเดต
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      {/* <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              การดำเนินการด่วน
            </h3>
            <p className="text-sm text-gray-500">
              เข้าถึงฟีเจอร์ที่ใช้บ่อยได้อย่างรวดเร็ว
            </p>
          </div>
          <button

            className="inline-flex items-center rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50"
          >
            <TrendingUp className="mr-2 h-4 w-4" />

          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action, index) => (
            <a
              key={index}
              href={action.href}
              className={`${action.bgColor} group rounded-xl p-6 transition-all duration-200 hover:shadow-md`}
            >
              <div className="mb-3 flex items-center space-x-3">
                <div className={`rounded-lg p-2 ${action.color}`}>
                  <action.icon className="h-5 w-5" />
                </div>
              </div>
              <h4 className="mb-1 font-semibold text-gray-900 group-hover:text-gray-800">
                {action.title}
              </h4>
              <p className="text-sm text-gray-600 group-hover:text-gray-700">
                {action.description}
              </p>
            </a>
          ))}
        </div>
      </div> */}

      {/* Recent Activity */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              กิจกรรมล่าสุด
            </h3>
            <p className="text-sm text-gray-500">
              รายการกิจกรรมที่เกิดขึ้นในระบบ
            </p>
          </div>
          <Bell className="h-5 w-5 text-gray-400" />
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4 rounded-lg bg-blue-50 p-4">
            <div className="rounded-lg bg-blue-100 p-2">
              <Users className="h-4 w-4 text-blue-600" />
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                มีผู้ใช้ใหม่ 2 คน ในเดือนนี้
              </p>
              <p className="text-xs text-gray-500">ระบบจัดการผู้ใช้</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 rounded-lg bg-orange-50 p-4">
            <div className="rounded-lg bg-orange-100 p-2">
              <AlertTriangle className="h-4 w-4 text-orange-600" />
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                มีใบสั่งจราจรรอดำเนินการ 2 ใบ
              </p>
              <p className="text-xs text-gray-500">ระบบจัดการใบสั่งจราจร</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 rounded-lg bg-green-50 p-4">
            <div className="rounded-lg bg-green-100 p-2">
              <Car className="h-4 w-4 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                รถยนต์ที่ลงทะเบียนใหม่ในระบบ
              </p>
              <p className="text-xs text-gray-500">ระบบจัดการทะเบียน</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
