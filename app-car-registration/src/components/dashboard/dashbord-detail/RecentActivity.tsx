import { AlertTriangle, Bell, Car, Users } from "lucide-react";

export default function RecentActivity() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">กิจกรรมล่าสุด</h3>
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
  );
}
