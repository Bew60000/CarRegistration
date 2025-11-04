"use client";

import { FileText, Filter, Plus } from "lucide-react";
import { Button } from "../ui/button";
// import StatCard from "./violation-detail/StatCard";
import useViolation from "../../hooks/violation/useViolation";

export default function Violation() {
  const { violations } = useViolation();

  return (
    <div className="space-y-6">
      {/* Loading State */}
      {/* {
        <div className="py-20 text-center">
          <div className="mx-auto mb-4 animate-spin text-blue-500">
            <FileText className="h-10 w-10" />
          </div>
          <p className="text-gray-600">กำลังโหลดข้อมูล...</p>
        </div>
      } */}

      {/* Statistics Cards */}
      {/* {violations.length > 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <StatCard
            label="ทั้งหมด"
            value={stats.total}
            color="gray"
            icon={<FileText />}
          />
          <StatCard
            label="รอดำเนินการ"
            value={stats.pending}
            color="yellow"
            icon={<Filter />}
          />
          <StatCard
            label="ชำระแล้ว"
            value={stats.paid}
            color="green"
            icon={<Plus />}
          />
        </div>
      )} */}

      {/* Search and Filter */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative max-w-lg flex-1">
            <input
              type="text"
              placeholder="ค้นหาทะเบียน, ประเภท, สถานที่, เจ้าหน้าที่..."
              // value={searchQuery}
              // onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-3 pr-3 pl-10 focus:ring-2 focus:ring-blue-500"
            />
            <FileText className="absolute top-3.5 left-3 h-5 w-5 text-gray-400" />
          </div>

          {/* Filter */}
          <select
            // value={filterStatus}
            aria-label="สถานะ"
            // onChange={(e) => setFilterStatus(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-3 py-3 focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">ทุกสถานะ</option>
            <option value="pending">รอดำเนินการ</option>
            <option value="paid">ชำระแล้ว</option>
          </select>
        </div>

        {/* Summary */}
        <div className="mt-4 text-sm text-gray-600">
          ผลลัพธ์: {violations.length} รายการ
        </div>
      </div>

      {/* Table / List */}
      {violations.length > 0 ? (
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            ประวัติการกระทำความผิด
          </h3>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                  ทะเบียนรถ
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                  จังหวัด
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                  ประเภทการกระทำความผิด
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                  ประเภทใบสั่ง
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                  ผู้กระทำ
                </th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600">
                  แผนก
                </th>
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-600">
                  วันที่รายงาน
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {violations.map((v) => (
                <tr key={v.report_id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{v.vehicle_plate}</td>
                  <td className="px-4 py-2">{v.vehicle_plate_province}</td>
                  <td className="px-4 py-2">{v.violation_name}</td>
                  <td className="px-4 py-2">{v.punishment_name}</td>
                  <td className="px-4 py-2">{v.full_name}</td>
                  <td className="px-4 py-2 text-center font-medium text-red-600">
                    {v.division}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-600">
                    {new Date(v.report_date).toLocaleDateString("th-TH")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-12 text-center">
          <FileText className="mx-auto mb-4 h-10 w-10 text-gray-400" />
          <p className="text-gray-600">ไม่พบใบสั่งจราจร</p>
          <Button
            // onClick={() => router.push("/violations/new")}
            className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
          >
            <Plus className="mr-2 h-5 w-5" />
            สร้างใบสั่งใหม่
          </Button>
        </div>
      )}
    </div>
  );
}
