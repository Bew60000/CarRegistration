"use client";

import React, { useState, useMemo } from "react";
import { FileText, Filter, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Violation() {
  const router = useRouter();

  // 🔹 ข้อมูล mock ตัวอย่าง
  const [violations] = useState([
    {
      id: "1",
      violationType: "ขับรถเกินความเร็วที่กำหนด",
      description:
        "ขับรถเกินความเร็วที่กำหนด 80 กม./ชม. ในเขตจำกัดความเร็ว 50 กม./ชม.",
      licensePlate: "กง-1234",
      vehicleId: "1",
      location: "ถนนสุขุมวิท กรุงเทพฯ",
      department: "IT",
      violationDate: new Date("2024-01-15"),
      fineAmount: 1000,
      status: "PENDING",
      officerId: "P001",
      officerName: "จ.ส.อ.สมชาย ใจดี",
    },
    {
      id: "2",
      violationType: "จอดรถในที่ห้ามจอด",
      description: "จอดรถขวางทางเข้า-ออก อาคารสำนักงาน",
      licensePlate: "ขข-5678",
      vehicleId: "2",
      location: "ถนนพระราม 9 กรุงเทพฯ",
      department: "CDM",
      violationDate: new Date("2024-02-10"),
      fineAmount: 500,
      status: "PAID",
      officerId: "P002",
      officerName: "ร.ต.อ.วุฒิชัย แก้วใส",
    },
  ]);

  const [loadingViolations, setLoadingViolations] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // 🔹 กรองข้อมูล
  const filteredViolations = useMemo(() => {
    return violations.filter((v) => {
      const matchSearch =
        v.licensePlate.includes(searchQuery) ||
        v.violationType.includes(searchQuery) ||
        v.location.includes(searchQuery) ||
        v.officerName.includes(searchQuery);

      const matchStatus =
        filterStatus === "all" || v.status.toLowerCase() === filterStatus;

      return matchSearch && matchStatus;
    });
  }, [violations, searchQuery, filterStatus]);

  const stats = useMemo(() => {
    return {
      total: violations.length,
      pending: violations.filter((v) => v.status === "PENDING").length,
      paid: violations.filter((v) => v.status === "PAID").length,
    };
  }, [violations]);

  return (
    <div className="space-y-6">
      {/* Loading State */}
      {loadingViolations && (
        <div className="py-20 text-center">
          <div className="mx-auto mb-4 animate-spin text-blue-500">
            <FileText className="h-10 w-10" />
          </div>
          <p className="text-gray-600">กำลังโหลดข้อมูล...</p>
        </div>
      )}

      {/* Statistics Cards */}
      {!loadingViolations && violations.length > 0 && (
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
      )}

      {/* Search and Filter */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative max-w-lg flex-1">
            <input
              type="text"
              placeholder="ค้นหาทะเบียน, ประเภท, สถานที่, เจ้าหน้าที่..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-3 pr-3 pl-10 focus:ring-2 focus:ring-blue-500"
            />
            <FileText className="absolute top-3.5 left-3 h-5 w-5 text-gray-400" />
          </div>

          {/* Filter */}
          <select
            value={filterStatus}
            aria-label="สถานะ"
            onChange={(e) => setFilterStatus(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-3 py-3 focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">ทุกสถานะ</option>
            <option value="pending">รอดำเนินการ</option>
            <option value="paid">ชำระแล้ว</option>
          </select>
        </div>

        {/* Summary */}
        <div className="mt-4 text-sm text-gray-600">
          ผลลัพธ์: {filteredViolations.length} / {violations.length} รายการ
        </div>
      </div>

      {/* Table / List */}
      {filteredViolations.length > 0 ? (
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
              {filteredViolations.map((v) => (
                <tr key={v.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{v.licensePlate}</td>
                  <td className="px-4 py-2">{v.violationType}</td>
                  <td className="px-4 py-2">{v.officerName}</td>
                  <td className="px-4 py-2 text-center font-medium text-red-600">
                    {v.department}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-600">
                    {v.violationDate.toLocaleDateString("th-TH")}
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
          <button
            onClick={() => router.push("/violations/new")}
            className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
          >
            <Plus className="mr-2 h-5 w-5" />
            สร้างใบสั่งใหม่
          </button>
        </div>
      )}
    </div>
  );
}

// ✅ Component ย่อย: Stat Card
function StatCard({
  label,
  value,
  color,
  icon,
}: {
  label: string;
  value: string | number;
  color: string;
  icon: React.ReactNode | string;
}) {
  return (
    <div
      className={`rounded-xl border border-${color}-200 bg-${color}-50 p-4 transition hover:shadow-md`}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className={`text-2xl font-bold text-${color}-700`}>{value}</div>
          <div className={`text-sm text-${color}-600`}>{label}</div>
        </div>
        <div
          className={`rounded-lg p-3 bg-${color}-200 text-${color}-700 text-lg`}
        >
          {typeof icon === "string" ? icon : icon}
        </div>
      </div>
    </div>
  );
}
