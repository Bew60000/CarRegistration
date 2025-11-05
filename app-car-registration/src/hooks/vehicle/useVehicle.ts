import { useEffect, useState } from "react";
import { TypeVehicles } from "../../types/vehicle";
import {
  deleteVehicle,
  getAllVehicles,
} from "../../services/routes/vehicle.service";

export default function useVehicle() {
  const [vehicles, setVehicles] = useState<TypeVehicles[]>([]);

  const fetchVehicles = async () => {
    try {
      const data = await getAllVehicles();
      setVehicles(data);
    } catch (error) {
      console.error("Failed to fetch vehicles:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteVehicle(id);
      fetchVehicles();
      console.log(`Vehicle with id ${id} deleted successfully`);
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchVehicles();
    };
    fetchData();
  }, []);

  return {
    vehicles,
    fetchVehicles,
    handleDelete,
  };
}
