"use client";

import { useState } from "react";
import AdminPageLayout from "../../layout/AdminPageLayout";
import Dashboard from "../../components/dashboard/Dashboard";
import Vehicle from "../../components/vehicle/Vehicle";
import Violation from "../../components/violation/Violation";
import FormAddVehicle from "../../components/vehicle/form-add-vehicle/FormAddVehicle";
import FormTrafficViolation from "../../components/violation/form-add-violation/FormTrafficViolation";

export default function AdminPage() {
  const [toggle, setToggle] = useState("1");
  const [header, setHeader] = useState("แดชบอร์ด");

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
