import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { resVehicles, Vehicles } from '../../types/vehicleType';
import { CreateVehicleDto } from './dto/create-vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(private readonly dataSource: DataSource) {}

  // GET Vehicle All
  async findAll(): Promise<Vehicles[]> {
    const vehicles: resVehicles[] = await this.dataSource.query(
      `SELECT
      v.vehicle_id,
      t.vehicle_type_name,
      b.vehicle_brand_name,
      m.vehicle_model_name,
      c.vehicle_color_name,
      f.vehicle_fuel_name,
      v.vehicle_plate,
      v.vehicle_plate_province,
      v.vehicle_register_date,
      u.usage_name
    FROM vehicle v 
    left join vehicle_model m on v.vehicle_model_id = m.vehicle_model_id
    LEFT JOIN vehicle_brands b ON v.vehicle_brand_id = b.vehicle_brand_id
    LEFT JOIN vehicle_types t ON v.vehicle_type_id = t.vehicle_type_id
    LEFT JOIN vehicle_colors c ON v.vehicle_color_id = c.vehicle_color_id
    LEFT JOIN vehicle_fuels f ON v.vehicle_fuel_id = f.vehicle_fuel_id
    LEFT JOIN [vehicle_usage] u ON v.usage_id = u.usage_id`,
    );

    return vehicles.map((vehicle) => ({
      id: vehicle.vehicle_id,
      vehicle_type: vehicle.vehicle_type_name,
      vehicle_brand: vehicle.vehicle_brand_name,
      vehicle_model: vehicle.vehicle_model_name,
      vehicle_color: vehicle.vehicle_color_name,
      vehicle_fuel: vehicle.vehicle_fuel_name,
      vehicle_plate: vehicle.vehicle_plate,
      province: vehicle.vehicle_plate_province,
      register_date: vehicle.vehicle_register_date,
      usage: vehicle.usage_name,
    }));
  }

  // GET Vehicle by ID
  async findOne(id: number): Promise<Vehicles> {
    const vehicle: resVehicles[] = await this.dataSource.query(
      `SELECT
      v.vehicle_id,
      t.vehicle_type_name,
      b.vehicle_brand_name,
      m.vehicle_model_name,
      c.vehicle_color_name,
      f.vehicle_fuel_name,
      v.vehicle_plate,
      v.vehicle_plate_province,
      v.vehicle_register_date,
      u.usage_name
    FROM vehicle v 
    left join vehicle_model m on v.vehicle_model_id = m.vehicle_model_id
    LEFT JOIN vehicle_brands b ON v.vehicle_brand_id = b.vehicle_brand_id
    LEFT JOIN vehicle_types t ON v.vehicle_type_id = t.vehicle_type_id
    LEFT JOIN vehicle_colors c ON v.vehicle_color_id = c.vehicle_color_id
    LEFT JOIN vehicle_fuels f ON v.vehicle_fuel_id = f.vehicle_fuel_id
    LEFT JOIN [vehicle_usage] u ON v.usage_id = u.usage_id
    WHERE v.vehicle_id = @0`,
      [id],
    );

    if (!vehicle || vehicle.length === 0) {
      throw new Error('Vehicle not found');
    }

    const res = vehicle[0];

    return {
      id: res.vehicle_id,
      vehicle_type: res.vehicle_type_name,
      vehicle_brand: res.vehicle_brand_name,
      vehicle_model: res.vehicle_model_name,
      vehicle_color: res.vehicle_color_name,
      vehicle_fuel: res.vehicle_fuel_name,
      vehicle_plate: res.vehicle_plate,
      province: res.vehicle_plate_province,
      register_date: res.vehicle_register_date,
      usage: res.usage_name,
    };
  }

  //POST Create Vehicle
  async create(dto: CreateVehicleDto): Promise<void> {
    // ตรวจสอบค่าก่อน insert
    if (
      !dto.vehicle_type_id ||
      !dto.vehicle_brand_id ||
      !dto.vehicle_model_id
    ) {
      throw new Error('Missing required fields');
    }

    const query = `
  INSERT INTO vehicle (
    vehicle_type_id,
    vehicle_brand_id,
    vehicle_model_id,
    vehicle_color_id,
    vehicle_fuel_id,
    emp_id,
    vehicle_plate,
    vehicle_plate_province,
    usage_id,
    vehicle_register_date
  )
  VALUES (@0, @1, @2, @3, @4, @5, @6, @7, @8, GETDATE() 
  )
`;

    await this.dataSource.query(query, [
      dto.vehicle_type_id, // @0
      dto.vehicle_brand_id, // @1
      dto.vehicle_model_id, // @2
      dto.vehicle_color_id, // @3
      dto.vehicle_fuel_id, // @4
      dto.emp_id, // @5
      dto.vehicle_plate, // @6
      dto.vehicle_plate_province, // @7
      dto.usage_id, // @8
    ]);
    console.log('🚗 Creating vehicle with data:', dto);
  }

  //Delete Vehicle
  async remove(id: number): Promise<void> {
    await this.dataSource.query(
      `DELETE FROM vehicle WHERE vehicle_id = @0;`,

      [id],
    );
  }
}
