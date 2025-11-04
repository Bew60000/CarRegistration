import { TypePostVehicle, TypeVehicles } from "../../types/vehicle";
import api from "../api";

export const getAllVehicles = async (): Promise<TypeVehicles[]> => {
  try {
    const response = await api.get<TypeVehicles[]>("/vehicles");
    return response.data;
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    throw error;
  }
};

export const getOneVehicles = async (id: number): Promise<TypeVehicles> => {
  try {
    const response = await api.get<TypeVehicles[]>("/vehicles", {
      headers: {
        vehicle_id: id,
      },
    });
    return response.data[0];
  } catch (error) {
    console.error("Error fetching vehicle:", error);
    throw error;
  }
};

export const postVehicle = async (
  vehicle: TypePostVehicle,
): Promise<TypePostVehicle> => {
  try {
    const response = await api.post<TypePostVehicle>("/vehicle", vehicle);
    return response.data;
  } catch (error) {
    console.error("Error post vehicle:", error);
    throw error;
  }
};

export const deleteVehicle = async (id: number) => {
  try {
    await api.delete("/vehicle", {
      headers: { vehicle_id: id },
    });
  } catch (error) {
    console.error("Error deleted vehicle:", error);
    throw error;
  }
};
