import { TypePostVehicle, TypeVehicles } from "../../types/vehicle";
import api from "../api";

export const getAllVehicles = async (): Promise<TypeVehicles[]> => {
  try {
    const response = await api.get<TypeVehicles[]>("/vehicle");
    return response.data;
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    throw error;
  }
};

export const getOneVehicle = async (id: number): Promise<TypeVehicles> => {
  try {
    const response = await api.get<TypeVehicles>(`/vehicle/${id}`);
    return response.data;
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
    console.error("Error posting vehicle:", error);
    throw error;
  }
};

export const deleteVehicle = async (id: number) => {
  try {
    await api.delete(`/vehicle/${id}`);
  } catch (error) {
    console.error("Error deleting vehicle:", error);
    throw error;
  }
};
