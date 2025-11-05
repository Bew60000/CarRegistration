"use client";

import usePostViolation from "../../../hooks/violation/usePostViolation";
import useViolation from "../../../hooks/violation/useViolation";

export default function FormTrafficViolation() {
  const { fetchViolations } = useViolation();

  const { formData, handleChange, handleSubmitViolationForm } =
    usePostViolation({ fetchViolations });

  const violation = [
    { id: "VT1", name: "ขับรถเร็วกว่ากำหนด" },
    { id: "VT2", name: "จอดรถในที่ไม่ควรจอด" },
    { id: "VT3", name: "ไม่สวมหมวกนิรภัย" },
  ];

  const punishment = [
    { id: "PM1", name: "ตักเตือนด้วยวาจา" },
    { id: "PM2", name: "ตัักเตือนด้วยหนังสือ" },
    { id: "PM3", name: "ลดค่าจ้าง" },
    { id: "PM4", name: "พักงานโดยไม่จ่ายค่าจ้าง" },
    { id: "PM5", name: "งดขึ้นเงินเดือนหรือ งดจ่ายเงินโบนัสประจำปี" },
    { id: "PM6", name: "เลิกจ้างโดยไม่จ่ายค่าชดเชย" },
  ];

  return (
    <div className="mx-auto max-w-11/12 rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">
        บันทึกใบสั่งจราจร
      </h2>
      <form onSubmit={handleSubmitViolationForm} className="space-y-5">
        <div>
          <label className="mb-1 block text-sm font-medium">ทะเบียนรถ*</label>
          <input
            type="text"
            name="vehicle_plate"
            value={formData.vehicle_plate}
            onChange={handleChange}
            placeholder="เช่น กข-1234"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-red-500"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">จังหวัด*</label>
          <input
            type="text"
            name="vehicle_plate_province"
            value={formData.vehicle_plate_province}
            onChange={handleChange}
            placeholder="เช่น สงขลา"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-red-500"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">รหัสพนักงาน*</label>
          <input
            type="text"
            name="emp_id"
            value={formData.emp_id}
            onChange={handleChange}
            placeholder="เช่น 0001"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-red-500"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">ชื่อ-สกุล*</label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-red-500"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">ฝ่าย*</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-red-500"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">แผนก*</label>
          <input
            type="text"
            name="division"
            value={formData.division}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-red-500"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">ตำแหน่ง*</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-red-500"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            ประเภทการฝ่าฝืน*
          </label>
          <select
            name="violation_id"
            aria-label="ประเภทการฝ่าฝืน"
            value={formData.violation_id}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-green-500"
            required
          >
            <option value="">ประเภทการฝ่าฝืน</option>
            {violation.map((v) => (
              <option key={v.id} value={v.id}>
                {v.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">บทลงโทษ*</label>
          <select
            name="punishment_id"
            aria-label="บทลงโทษ"
            value={formData.punishment_id}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-green-500"
            required
          >
            <option value="">บทลงโทษ</option>
            {punishment.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        {/* <div>
          <label className="mb-1 block text-sm font-medium">
            ประเภทการฝ่าฝืน*
          </label>
          <select
            name="violation_name"
            aria-label="ประเภทการฝ่าฝืน"
            value={formData.violation_name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-red-500"
            required
          >
            <option value="">เลือกประเภทการฝ่าฝืน</option>
            {violationOptions.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div> */}

        <div>
          <label className="mb-1 block text-sm font-medium">
            รายละเอียดการฝ่าฝืน*
          </label>
          <textarea
            name="description"
            aria-label="รายละเอียดการฝ่าฝืน"
            value={formData.description}
            onChange={handleChange}
            placeholder="อธิบายรายละเอียดของการฝ่าฝืน..."
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-red-500"
            rows={3}
            required
          />
        </div>

        <div className="flex justify-between pt-6">
          <button
            type="button"
            className="rounded-lg border bg-gray-100 px-5 py-2 font-medium text-gray-700 transition hover:bg-gray-200"
          >
            ยกเลิก
          </button>
          <button
            type="submit"
            className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700"
          >
            บันทึก
          </button>
        </div>
      </form>
    </div>
  );
}
