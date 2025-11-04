import { useState } from "react";

export default function useVehicle() {
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

  return {
    stats,
    searchQuery,
    setSearchQuery,
    filterStatus,
    setFilterStatus,
    filteredVehicles,
    vehicles,
  };
}
