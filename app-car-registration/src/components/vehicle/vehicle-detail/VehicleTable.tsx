import  { useEffect } from "react";
import { Car, Edit, Eye, Trash2 } from "lucide-react";
import { TypeVehicles } from "../../../types/vehicle";
import useVehicle from "../../../hooks/vehicle/useVehicle";

interface VehicleTableProps {
  vehicles: TypeVehicles[];
  onEdit?: (vehicle: TypeVehicles) => void;
  onView?: (vehicle: TypeVehicles) => void;
  onSuspend?: (vehicle: TypeVehicles) => void;
  onReactivate?: (vehicle: TypeVehicles) => void;
  onDelete?: (vehicle: TypeVehicles) => void;
  className?: string;
}

export default function VehicleTable({
  vehicles,
  onEdit,
  onView,
  onSuspend,
  onReactivate,
  onDelete,
  className = "",
}: VehicleTableProps) {
  const { handleDelete, fetchVehicles } = useVehicle();

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        {/* Table Header */}
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
              ทะเบียนรถ
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
              ยี่ห้อ
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">
              รุ่น
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">
              ประเภทการใช้งาน
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">
              เชื้อเพลิง
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">
              การจัดการ
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-gray-100 bg-white">
          {vehicles.map((v) => (
            <tr
              key={v.id}
              className="transition-colors duration-150 hover:bg-blue-50"
            >
              <td className="px-4 py-3 font-medium text-gray-800">
                <div className="flex items-center gap-2">
                  <Car className="h-4 w-4 text-blue-500" />
                  {v.vehicle_plate}
                </div>
              </td>

              <td className="px-4 py-3 text-gray-700">{v.vehicle_brand}</td>

              <td className="px-4 py-3 text-center text-gray-700">
                {v.vehicle_model}
              </td>

              <td className="px-4 py-3 text-center text-gray-700">{v.usage}</td>

              <td className="px-4 py-3 text-center text-gray-700">
                {v.vehicle_fuel}
              </td>

              {/* Action Buttons */}
              <td className="px-4 py-3 text-center">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => onView?.(v)}
                    className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-blue-600"
                    title="ดูรายละเอียด"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => onEdit?.(v)}
                    className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-green-600"
                    title="แก้ไข"
                  >
                    <Edit className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => handleDelete(v.id)}
                    className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-red-700"
                    title="ลบข้อมูล"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {vehicles.length === 0 && (
            <tr>
              <td colSpan={6} className="px-4 py-6 text-center text-gray-500">
                ไม่มีข้อมูลรถในระบบ
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
