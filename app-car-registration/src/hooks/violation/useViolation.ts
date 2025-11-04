import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function useViolation() {
  const router = useRouter();

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

  return {
    loadingViolations,
    violations,
    stats,
    searchQuery,
    setSearchQuery,
    filterStatus,
    setFilterStatus,
    filteredViolations,
    router,
  };
}
