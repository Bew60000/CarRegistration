import { useState } from "react";
import { postVehicle } from "../../services/routes/vehicle.service";
import { TypePostVehicle } from "../../types/vehicle";

type Props = {
  fetchVehicles: () => Promise<void>;
};

export default function usePostVehicle({ fetchVehicles }: Props) {
  const [formData, setFormData] = useState<TypePostVehicle>({
    vehicle_type_id: "",
    vehicle_brand_id: "",
    vehicle_model_id: "",
    vehicle_color_id: "",
    vehicle_fuel_id: "",
    emp_id: "",
    vehicle_plate: "",
    vehicle_plate_province: "",
    usage_id: "",
    vehicle_register_date: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitVehicleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const payload: TypePostVehicle = {
        vehicle_type_id: formData.vehicle_type_id,
        vehicle_brand_id: formData.vehicle_brand_id,
        vehicle_model_id: formData.vehicle_model_id,
        vehicle_color_id: formData.vehicle_color_id,
        vehicle_fuel_id: formData.vehicle_fuel_id,
        emp_id: formData.emp_id,
        vehicle_plate: formData.vehicle_plate,
        vehicle_plate_province: formData.vehicle_plate_province,
        usage_id: formData.usage_id,
      };

      await postVehicle(payload);
      fetchVehicles();
      setSuccess(true);
      console.log("✅ Vehicle added successfully");
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("ไม่สามารถบันทึกข้อมูลได้");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    setFormData,
    loading,
    handleChange,
    handleSubmitVehicleForm,
    error,
    success,
  };
}
