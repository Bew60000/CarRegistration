"use client";

import usePostVehicle from "../../../hooks/vehicle/usePostVehicle";
import useVehicle from "../../../hooks/vehicle/useVehicle";

export default function FormAddVehicle() {
  const { fetchVehicles } = useVehicle();
  const { formData, handleChange, handleSubmitVehicleForm } = usePostVehicle({
    fetchVehicles,
  });

  const vehicleBrands = [
    { id: "B1", name: "Toyota" },
    { id: "B2", name: "Honda" },
    { id: "B3", name: "Nissan" },
    { id: "B4", name: "Mazda" },
    { id: "B5", name: "Mitsubishi" },
    { id: "B6", name: "Other" },
  ];

  const vehicleColors = [
    { id: "C1", name: "ขาว" },
    { id: "C2", name: "ดำ" },
    { id: "C3", name: "เงิน" },
    { id: "C4", name: "เทา" },
    { id: "C5", name: "แดง" },
    { id: "C6", name: "น้ำเงิน" },
    { id: "C7", name: "เขียว" },
    { id: "C8", name: "ทอง" },
    { id: "C9", name: "อื่นๆ" },
  ];

  const vehicleFuels = [
    { id: "F1", name: "GASOLINE" },
    { id: "F2", name: "DIESEL" },
    { id: "F3", name: "HYBRID" },
    { id: "F4", name: "ELECTRIC" },
  ];

  const vehicle_model = [
    { id: "CR1", name: "Toyota Corolla Altis" },
    { id: "CR2", name: "Honda Civic" },
    { id: "CR3", name: "Honda City" },
    { id: "CR4", name: "Isuzu D-Max" },
    { id: "CR5", name: "Toyota Hilux Revo" },
    { id: "CR6", name: "Honda CR-V" },
    { id: "CR7", name: "Toyota Fortuner" },
    { id: "M1", name: "Honda Wave 110i" },
    { id: "M2", name: "Honda Click 125i" },
    { id: "M3", name: "Honda PCX 160" },
    { id: "M4", name: "Yamaha Grand Filano" },
    { id: "M5", name: "Yamaha Aerox 155" },
    { id: "M6", name: "TYamaha NMAX" },
    { id: "M7", name: "Suzuki Smash 115" },
  ];

  const usage = [
    { id: "U1", name: "รถส่วนบุคคล" },
    { id: "U2", name: "รถขนส่งบริษัท" },
  ];

  const vehicleType = [
    { id: "VT1", name: "รถยนต์" },
    { id: "VT2", name: "รถจักรยานยนต์" },
  ];

  return (
    <div className="mx-auto mt-8 max-w-11/12 rounded-xl bg-white p-6 shadow-lg">
      <h2 className="-mb-1 text-2xl font-semibold text-gray-800">
        ลงทะเบียนรถใหม่
      </h2>
      <p className="text-md mb-6 font-medium text-gray-700">ข้อมูลรถยนต์</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // ส่ง JSON ตามตัวอย่าง
          const payload = { ...formData };
          console.log("Payload to send:", JSON.stringify(payload));
          handleSubmitVehicleForm(e); // ถ้ามี hook handleSubmit อยู่แล้ว
        }}
        className="space-y-5"
      >
        {/* ข้อมูลรถ */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                ทะเบียนรถ*
              </label>
              <input
                type="text"
                name="vehicle_plate"
                value={formData.vehicle_plate}
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
                name="vehicle_plate_province"
                value={formData.vehicle_plate_province}
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
                name="vehicle_brand_id"
                aria-label="ยี่ห้อรถ"
                value={formData.vehicle_brand_id}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-green-500"
                required
              >
                <option value="">เลือกยี่ห้อ</option>
                {vehicleBrands.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">รุ่นรถ*</label>
              <select
                name="vehicle_model_id"
                aria-label="รุ่นรถ"
                value={formData.vehicle_model_id}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-green-500"
              >
                <option value="">เลือกรุ่นรถ</option>
                {vehicle_model.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                ประเภทของรถ
              </label>
              <select
                name="vehicle_type_id"
                aria-label="ประเภทของรถ"
                value={formData.vehicle_type_id}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-green-500"
              >
                <option value="">เลือกประเภทรถ</option>
                {vehicleType.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">สีรถ</label>
              <select
                name="vehicle_color_id"
                aria-label="สีรถ"
                value={formData.vehicle_color_id}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-green-500"
              >
                <option value="">เลือกสี</option>
                {vehicleColors.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                ประเภทเชื้อเพลิง
              </label>
              <select
                name="vehicle_fuel_id"
                aria-label="เลือกประเภทเชื้อเพลิง"
                value={formData.vehicle_fuel_id}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-green-500"
              >
                <option value="">เลือกประเภทเชื้อเพลิง</option>
                {vehicleFuels.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* ข้อมูลเจ้าของ */}
        <div className="space-y-3">
          <h3 className="text-lg font-medium text-gray-700">ข้อมูลเจ้าของ</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                รหัสพนักงาน*
              </label>
              <input
                type="text"
                name="emp_id"
                value={formData.emp_id}
                onChange={handleChange}
                placeholder="รหัสพนักงาน"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                ประเภทการใช้งาน
              </label>
              <select
                name="usage_id"
                aria-label="ประเภทการใช้งาน"
                value={formData.usage_id}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-green-500"
              >
                <option value="">เลือกประเภทการใช้งาน</option>
                {usage.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* ปุ่ม */}
        <div className="flex justify-between pt-6">
          <button
            type="button"
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
