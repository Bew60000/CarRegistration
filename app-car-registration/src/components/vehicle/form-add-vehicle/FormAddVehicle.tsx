"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormAddVehicle() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    licensePlate: "",
    province: "",
    brand: "",
    model: "",
    year: new Date().getFullYear(),
    color: "",
    fuelType: "",
    ownerName: "",
    ownerType: "INDIVIDUAL",
    usageType: "PERSONAL",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.licensePlate ||
      !formData.brand ||
      !formData.model ||
      !formData.ownerName
    ) {
      alert("กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน");
      return;
    }
    console.log("🚗 Vehicle Registered:", formData);
    alert(`ลงทะเบียนรถ ${formData.licensePlate} สำเร็จ!`);
    router.push("/vehicles");
  };

  const handleCancel = () => {
    if (confirm("ต้องการยกเลิกการลงทะเบียนหรือไม่?")) router.push("/vehicles");
  };

  return (
    <div className="mx-auto mt-8 max-w-11/12 rounded-xl bg-white p-6 shadow-lg">
      <h2 className="-mb-1 text-2xl font-semibold text-gray-800">
        ลงทะเบียนรถใหม่
      </h2>
      <p className="text-md mb-6 font-medium text-gray-700">ข้อมูลรถยนต์</p>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* ข้อมูลรถ */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                ทะเบียนรถ*
              </label>
              <input
                type="text"
                name="licensePlate"
                value={formData.licensePlate}
                onChange={handleChange}
                placeholder="เช่น กข-1234"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">จังหวัด</label>
              <input
                type="text"
                name="province"
                value={formData.province}
                onChange={handleChange}
                placeholder="เช่น สงขลา"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                ยี่ห้อรถ*
              </label>
              <select
                name="brand"
                aria-label="ยี่ห้อรถ"
                value={formData.brand}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-green-500"
                required
              >
                <option value="">เลือกยี่ห้อ</option>
                {[
                  "Toyota",
                  "Honda",
                  "Nissan",
                  "Mazda",
                  "Mitsubishi",
                  "Other",
                ].map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">รุ่นรถ*</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                placeholder="เช่น Camry"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                ประเภทของรถ
              </label>
              <select
                name="ownerType"
                aria-label="ประเภทของรถ"
                value={formData.ownerType}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-green-500"
              >
                <option value="INDIVIDUAL">รถยนต์</option>
                <option value="CORPORATE">รถมอไซต์</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                ปีที่ผลิต
              </label>
              <input
                title="ปีที่ผลิต"
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">สีรถ</label>
              <select
                name="color"
                aria-label="สีรถ"
                value={formData.color}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-green-500"
              >
                <option value="">เลือกสี</option>
                {[
                  "ขาว",
                  "ดำ",
                  "เงิน",
                  "เทา",
                  "แดง",
                  "น้ำเงิน",
                  "เขียว",
                  "ทอง",
                  "อื่นๆ",
                ].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              ประเภทเชื้อเพลิง
            </label>
            <select
              name="fuelType"
              aria-label="เลือกประเภทเชื้อเพลิง"
              value={formData.fuelType}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-green-500"
            >
              {["", "GASOLINE", "DIESEL", "HYBRID", "ELECTRIC"].map((f) => (
                <option key={f} value={f}>
                  {f || "เลือกประเภทเชื้อเพลิง"}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ข้อมูลเจ้าของ */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-gray-700">ข้อมูลเจ้าของ</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                ชื่อเจ้าของรถ*
              </label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                placeholder="ชื่อเจ้าของรถ"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                ประเภทการใช้งาน
              </label>
              <select
                name="usageType"
                aria-label="ประเภทการใช้งาน"
                value={formData.usageType}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-green-500"
              >
                <option value="PERSONAL">รถส่วนบุคคล</option>
                <option value="COMPANY">รถขนส่งของบริษัท</option>
              </select>
            </div>
          </div>
        </div>

        {/* ปุ่ม */}
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={handleCancel}
            className="rounded-lg border bg-gray-100 px-5 py-2 font-medium text-gray-700 transition hover:bg-gray-200"
          >
            ยกเลิก
          </button>
          <button
            type="submit"
            className="rounded-lg bg-green-600 px-5 py-2 font-medium text-white transition hover:bg-green-700"
          >
            บันทึก
          </button>
        </div>
      </form>
    </div>
  );
}
