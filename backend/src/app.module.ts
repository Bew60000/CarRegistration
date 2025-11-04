import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { ReportVilolationModule } from './modules/report_vilolation/report_vilolation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      options: {
        encrypt: process.env.DB_ENCRYPTED === 'true',
        enableArithAbort: true,
      },
    }),
    VehicleModule,
    ReportVilolationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
