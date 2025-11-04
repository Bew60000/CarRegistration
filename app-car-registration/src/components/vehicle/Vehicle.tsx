"use client";

import { Plus } from "lucide-react";
import VehicleTable from "./vehicle-detail/VehicleTable";
import useVehicle from "../../hooks/vehicle/useVehicle";

export default function Vehicle() {
  const { vehicles } = useVehicle();

  return (
    <div className="space-y-6">
      {/* <VehicleStats stats={stats} /> */}

      {/* === Search & Filter === */}
      {/* <VehicleSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      /> */}

      {/* === Vehicles Display === */}
      <div className="rounded-xl border bg-white shadow">
        {vehicles.length > 0 && <VehicleTable vehicles={vehicles} />}
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
