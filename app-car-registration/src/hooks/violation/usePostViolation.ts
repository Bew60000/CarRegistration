import { useState } from "react";
import { postReportViolation } from "../../services/routes/report-violation.service";
import { TypePostReportViolation } from "../../types/report-violation";

type Props = {
  fetchViolations: () => Promise<void>;
};

export default function usePostViolation({ fetchViolations }: Props) {
  const [formData, setFormData] = useState({
    emp_id: "",
    full_name: "",
    vehicle_plate: "",
    vehicle_plate_province: "",
    position: "",
    department: "",
    division: "",
    description: "",
    violation_id: "",
    punishment_id: "",
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

  const handleSubmitViolationForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.vehicle_plate || !formData.violation_id) {
      alert("กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน");
      return;
    }

    try {
      const payload: TypePostReportViolation = {
        emp_id: formData.emp_id,
        full_name: formData.full_name,
        vehicle_plate: formData.vehicle_plate,
        vehicle_plate_province: formData.vehicle_plate_province,
        position: formData.position,
        department: formData.department,
        division: formData.division,
        violation_id: formData.violation_id,
        punishment_id: formData.punishment_id,
        description: formData.description,
      };

      await postReportViolation(payload);
      fetchViolations();
      console.log("✅ Vehicle added successfully");
    } catch (err) {
      console.error("Error submitting form:", err);
      console.log("ไม่สามารถบันทึกข้อมูลได้");
    }

    alert(`บันทึกใบสั่งจราจรสำหรับรถ ${formData.vehicle_plate} สำเร็จ!`);
  };

  return {
    formData,
    setFormData,
    violationOptions,
    handleChange,
    handleSubmitViolationForm,
  };
}
