"use client";

import { useEffect, useState } from "react";
import AdminPageLayout from "../../layout/AdminPageLayout";
import Dashboard from "../../components/dashboard/Dashboard";
import Vehicle from "../../components/vehicle/Vehicle";
import Violation from "../../components/violation/Violation";
import FormAddVehicle from "../../components/vehicle/form-add-vehicle/FormAddVehicle";
import FormTrafficViolation from "../../components/violation/form-add-violation/FormTrafficViolation";
import { useAuthStore } from "../../stores/auth-store";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [toggle, setToggle] = useState("1");
  const [header, setHeader] = useState("แดชบอร์ด");
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     router.replace("/login");
  //     return;
  //   }
  // }, [isAuthenticated, router]);

  // if (!isAuthenticated) {
  //   return (
  //     <div className="flex h-screen w-full items-center justify-center bg-gray-50 text-gray-700">
  //       <div className="animate-pulse bg-white p-6">Loading...</div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white to-gray-50 text-black">
      <AdminPageLayout
        setToggle={setToggle}
        setHeader={setHeader}
        title={header}
      >
        {toggle === "1" && <Dashboard />}
        {toggle === "2" && <Vehicle />}
        {toggle === "3" && <Violation />}
        {toggle === "4" && <FormAddVehicle />}
        {toggle === "5" && <FormTrafficViolation />}
      </AdminPageLayout>
    </div>
  );
}
