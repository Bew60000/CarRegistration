import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';

import { VehicleService } from './vehicle.service';
import { Vehicles } from '../../types/vehicleType';
import { CreateVehicleDto } from './dto/create-vehicle.dto';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  async create(@Body() createVehicleDto: CreateVehicleDto) {
    await this.vehicleService.create(createVehicleDto);
    return { message: 'Vehicle inserted successfully' };
  }
  @Get()
  findAllPromise(): Promise<Vehicles[]> {
    return this.vehicleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Vehicles> {
    return this.vehicleService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
  //   return this.vehicleService.update(+id, updateVehicleDto);
  // }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.vehicleService.remove(+id);
    return { message: `ลบข้อมูล report_id = ${id} สำเร็จ` };
  }
}
