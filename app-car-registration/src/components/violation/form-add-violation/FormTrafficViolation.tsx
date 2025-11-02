"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormTrafficViolation() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    licensePlate: "",
    violationType: "",
    description: "",
    location: "",
    violationDate: new Date().toISOString().split("T")[0],
    fineAmount: "",
    officerName: "",
    notes: "",
  });

  const violationOptions = [
    "ขับรถเร็วเกินกำหนด",
    "จอดรถในที่ห้ามจอด",
    "ฝ่าไฟแดง",
    "ไม่คาดเข็มขัดนิรภัย",
    "ใช้โทรศัพท์ขณะขับรถ",
    "ขับรถในขณะเมาสุรา",
    "ไม่หยุดรถให้คนเดินเท้า",
    "ขับรถย้อนศร",
    "ขับรถตัดหน้าอันตราย",
    "อื่นๆ",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.licensePlate ||
      !formData.violationType ||
      !formData.description ||
      !formData.location
    ) {
      alert("กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน");
      return;
    }

    alert(`บันทึกใบสั่งจราจรสำหรับรถ ${formData.licensePlate} สำเร็จ!`);
    router.push("/violations");
  };

  const handleCancel = () => {
    if (confirm("ต้องการยกเลิกการบันทึกใบสั่งจราจรหรือไม่?"))
      router.push("/violations");
  };

  return (
    <div className="mx-auto max-w-11/12 rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">
        บันทึกใบสั่งจราจร
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-1 block text-sm font-medium">ทะเบียนรถ*</label>
          <input
            type="text"
            name="licensePlate"
            value={formData.licensePlate}
            onChange={handleChange}
            placeholder="เช่น กข-1234"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-red-500"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            ประเภทการฝ่าฝืน*
          </label>
          <select
            name="violationType"
            aria-label="ประเภทการฝ่าฝืน"
            value={formData.violationType}
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
        </div>

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

        <div>
          <label className="mb-1 block text-sm font-medium">
            สถานที่เกิดเหตุ*
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="เช่น ถนนพระราม 4 ตัดกับถนนสีลม"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-red-500"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium">
              วันที่เกิดเหตุ*
            </label>
            <input
              type="date"
              name="violationDate"
              title="วันที่เกิดเหตุ"
              value={formData.violationDate}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              จำนวนเงินค่าปรับ (บาท)
            </label>
            <input
              type="number"
              name="fineAmount"
              value={formData.fineAmount}
              onChange={handleChange}
              placeholder="เช่น 500"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-red-500"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            ชื่อเจ้าหน้าที่ผู้จับกุม
          </label>
          <input
            type="text"
            name="officerName"
            value={formData.officerName}
            onChange={handleChange}
            placeholder="ชื่อเจ้าหน้าที่"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            หมายเหตุเพิ่มเติม
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="หมายเหตุหรือข้อมูลเพิ่มเติม"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-red-500"
            rows={2}
          />
        </div>

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
            className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700"
          >
            บันทึก
          </button>
        </div>
      </form>
    </div>
  );
}
