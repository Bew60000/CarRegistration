"use client";

import { useState } from "react";
import { Car, Plus } from "lucide-react";
import VehicleTable from "./vehicle-detail/VehicleTable";

export default function Vehicle() {
  const baseDate = new Date("2024-01-01");

  const vehicles = [
    {
      id: "1",
      licensePlate: "กง-1234",
      brand: "Toyota",
      model: "Camry",
      year: 2023,
      color: "ขาว",
      ownerName: "นายสมชาย ใจดี",
      status: "ACTIVE",
      registrationDate: new Date(baseDate.getTime() + 86400000),
      fuel: "Diesel",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");

  // Filter vehicles by query and status
  const filteredVehicles = vehicles.filter((v) => {
    const matchQuery =
      v.licensePlate.includes(searchQuery) ||
      v.brand.includes(searchQuery) ||
      v.model.includes(searchQuery) ||
      v.ownerName.includes(searchQuery);
    const matchStatus =
      filterStatus === "all" || v.status === filterStatus.toUpperCase();
    return matchQuery && matchStatus;
  });

  const stats = {
    total: vehicles.length,
    active: vehicles.filter((v) => v.status === "ACTIVE").length,
    expired: 0,
    suspended: 0,
    expiringSoon: 0,
  };

  return (
    <div className="space-y-6">
      {/* === Dashboard Stats === */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "ทั้งหมด", value: stats.total, color: "blue" },
          { label: "ใช้งานได้", value: stats.active, color: "green" },
          { label: "ระงับใช้งาน", value: stats.suspended, color: "red" },
          { label: "ใกล้หมดอายุ", value: stats.expiringSoon, color: "orange" },
        ].map((item, i) => (
          <div
            key={i}
            className={`rounded-xl border border-${item.color}-200 bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 p-6`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className={`text-3xl font-bold text-${item.color}-700`}>
                  {item.value}
                </div>
                <div
                  className={`mt-1 text-sm font-medium text-${item.color}-600`}
                >
                  {item.label}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* === Search & Filter === */}
      <div className="rounded-xl border bg-white p-6 shadow">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex-1">
            <label className="text-sm font-medium text-gray-700">
              ค้นหาข้อมูลรถยนต์
            </label>
            <div className="relative">
              <Car className="absolute top-3.5 left-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ทะเบียน, เจ้าของ, ยี่ห้อ, รุ่น..."
                className="w-full rounded-xl border bg-gray-50 py-2.5 pr-3 pl-10 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">สถานะ</label>
              <select
                value={filterStatus}
                aria-label="สถานะ"
                onChange={(e) => setFilterStatus(e.target.value)}
                className="block rounded-xl border bg-gray-50 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">ทุกสถานะ</option>
                <option value="active">ใช้งานได้</option>
                <option value="suspended">ระงับใช้งาน</option>
                <option value="expired">หมดอายุ</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* === Vehicles Display === */}
      <div className="rounded-xl border bg-white shadow">
        {filteredVehicles.length > 0 && (
          <VehicleTable vehicles={filteredVehicles} />
        )}
      </div>

      {/* === Add New Vehicle === */}
      {vehicles.length === 0 && (
        <div className="text-center">
          <button className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" />
            ลงทะเบียนรถใหม่
          </button>
        </div>
      )}
    </div>
  );
}
