import { Activity } from "lucide-react";

export default function DashboardWelcome() {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-red-600 to-yellow-500 p-8 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="mb-2 text-3xl font-bold text-white">
            ยินดีต้อนรับสู่ระบบจัดการทะเบียนรถยนต์
          </h2>
          <p className="text-lg text-white">
            ระบบที่ใช้ Object-Oriented Programming และ Component-Based Design
          </p>
        </div>
        <div className="hidden md:block">
          <div className="bg-opacity-20 flex h-24 w-24 items-center justify-center rounded-full bg-red-600">
            <Activity className="h-12 w-12 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
