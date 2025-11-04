import { IsString, IsNumberString, IsNotEmpty } from 'class-validator';

export class CreateVehicleDto {
  @IsNumberString()
  @IsNotEmpty()
  vehicle_type_id: string;

  @IsNumberString()
  @IsNotEmpty()
  vehicle_brand_id: string;

  @IsNumberString()
  @IsNotEmpty()
  vehicle_model_id: string;

  @IsNumberString()
  @IsNotEmpty()
  vehicle_color_id: string;

  @IsNumberString()
  @IsNotEmpty()
  vehicle_fuel_id: string;

  @IsNumberString()
  @IsNotEmpty()
  usage_id: string;

  @IsNumberString()
  @IsNotEmpty()
  emp_id: number;

  @IsString()
  @IsNotEmpty()
  vehicle_plate: string;

  @IsString()
  vehicle_plate_province: string;
}
