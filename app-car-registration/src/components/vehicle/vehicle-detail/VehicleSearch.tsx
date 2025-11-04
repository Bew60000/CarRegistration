import { Car } from "lucide-react";
import React from "react";

type VehicleSearchProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  filterStatus: string;
  setFilterStatus: React.Dispatch<React.SetStateAction<string>>;
};

export default function VehicleSearch({
  searchQuery,
  setSearchQuery,
  filterStatus,
  setFilterStatus,
}: VehicleSearchProps) {
  return (
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
  );
}
