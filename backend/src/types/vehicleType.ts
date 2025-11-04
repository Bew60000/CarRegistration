export type createVehicle = {
  vehicle_type_id: string;
  vehicle_brand_id: string;
  vehicle_model_id: string;
  vehicle_color_id: string;
  vehicle_fuel_id: string;
  emp_id: number;
  vehicle_plate: string;
  vehicle_plate_province: string;
  usage_id: string;
  vehicle_register_date: Date;
};
export type Vehicles = {
  id: number;
  vehicle_type: string;
  vehicle_brand: string;
  vehicle_model: string;
  vehicle_color: string;
  vehicle_fuel: string;
  vehicle_plate: string;
  province: string;
  register_date: Date;
  usage: string;
};

export type resVehicles = {
  vehicle_id: number;
  vehicle_type_name: string;
  vehicle_brand_name: string;
  vehicle_model_name: string;
  vehicle_color_name: string;
  vehicle_fuel_name: string;
  vehicle_plate: string;
  vehicle_plate_province: string;
  vehicle_register_date: Date;
  usage_name: string;
};
