import { Activity, AlertTriangle, Car, Clock } from "lucide-react";
import React from "react";

export default function StatisticsOverview() {
  return (
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
  );
}
