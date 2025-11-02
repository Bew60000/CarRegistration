"use client";

import { ArrowRight, Car } from "lucide-react";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../stores/auth-store";

export default function Home() {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/");
      return;
    }

    const timer = setTimeout(() => {
      router.replace("/login");
    }, 1000);
    return () => clearTimeout(timer);
  }, [isAuthenticated, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 to-red-100 p-6">
      <div className="w-full max-w-md text-center">
        {/* Logo/Icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-600 shadow-lg">
          <Car className="h-10 w-10 text-white" />
        </div>

        {/* Title */}
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          ระบบจัดการทะเบียนรถยนต์
        </h1>

        {/* Subtitle */}
        <p className="mb-8 text-base text-gray-600">
          ระบบจัดการข้อมูลรถยนต์และการฝ่าฝืนกฎระเบียบอย่างมีประสิทธิภาพ
        </p>

        {/* Loading/Redirect Info */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-center space-x-3 text-red-600">
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-red-600"></div>
            <span className="text-base text-gray-600">
              {/* {isAuthenticated
                ? "กำลังเข้าสู่ระบบ..."
                : "กำลังเปลี่ยนเส้นทาง..."} */}
            </span>
          </div>

          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <span>ไปยังหน้า</span>
            {/* <span className="font-medium">
              {isAuthenticated ? "แดชบอร์ด" : "เข้าสู่ระบบ"}
            </span> */}
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-8 grid grid-cols-2 gap-4 text-xs text-gray-500">
          <div className="rounded-lg bg-white/50 p-3">
            <div className="mb-1 font-medium">ลงทะเบียนรถ</div>
            <div>จัดการข้อมูลรถยนต์</div>
          </div>
          <div className="rounded-lg bg-white/50 p-3">
            <div className="mb-1 font-medium">ติดตามการฝ่าฝืน</div>
            <div>บันทึกและรายงาน</div>
          </div>
        </div>
      </div>
    </div>
  );
}
