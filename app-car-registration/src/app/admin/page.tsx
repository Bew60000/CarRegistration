"use client";

import { useState } from "react";
import AdminPageLayout from "../../layout/AdminPageLayout";

export default function AdminPage() {
  const [toggle, setToggle] = useState("1");

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white to-gray-50 text-black">
      <AdminPageLayout setToggle={setToggle}>
        {/* <Dashboard /> */} test
      </AdminPageLayout>
    </div>
  );
}
