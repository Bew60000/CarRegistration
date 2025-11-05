import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import {
  CreateReportViolationDto,
  ReportViolation,
} from '../../types/report_Violation';
import { ReportViolationData } from '../../types/report_Violation';
@Injectable()
export class ReportVilolationService {
  constructor(private readonly dataSource: DataSource) {}

  async findAll(): Promise<ReportViolation[]> {
    const reportViolation: ReportViolationData[] = await this.dataSource.query(
      `SELECT
        r.report_id,
        r.vehicle_plate,
        r.vehicle_plate_province,
        r.emp_id,
        r.full_name,
        r.position,
        r.department,
        r.division,
        vlt.violation_name,
        r.description,
        r.report_date,
        p.punishment_name
      FROM report_violation r
      left join vehicle v on r.vehicle_id = v.vehicle_id
      LEFT JOIN employee e ON r.emp_id = e.emp_id
      LEFT JOIN violations vlt ON r.violation_id = vlt.violation_id
      LEFT JOIN punishments p ON r.punishment_id = p.punishment_id;`,
    );

    return reportViolation.map((row) => ({
      report_id: row.report_id,
      vehicle_plate: row.vehicle_plate,
      vehicle_plate_province: row.vehicle_plate_province,
      emp_id: row.emp_id,
      full_name: row.full_name,
      position: row.position,
      department: row.department,
      division: row.division,
      violation_name: row.violation_name,
      description: row.description,
      report_date: row.report_date,
      punishment_name: row.punishment_name,
    }));
  }

  async findOne(id: number): Promise<ReportViolation> {
    const rows: ReportViolationData[] = await this.dataSource.query(
      `SELECT
        r.report_id,
        v.vehicle_plate,
        v.vehicle_plate_province,
        r.emp_id,
        r.full_name,
        e.position,
        e.department,
        e.division,
        vlt.violation_name,
        r.description,
        r.report_date,
        p.punishment_name
      FROM report_violation r
      left join vehicle v on r.vehicle_id = v.vehicle_id
      LEFT JOIN employee e ON r.emp_id = e.emp_id
      LEFT JOIN violations vlt ON r.violation_id = vlt.violation_id
      LEFT JOIN punishments p ON r.punishment_id = p.punishment_id
      WHERE r.report_id = @0;`,
      [id],
    );

    if (rows.length === 0) return null;

    const row = rows[0];
    return {
      vehicle_plate: row.vehicle_plate,
      vehicle_plate_province: row.vehicle_plate_province,
      emp_id: row.emp_id,
      full_name: row.full_name,
      position: row.position,
      department: row.department,
      division: row.division,
      violation_name: row.violation_name,
      description: row.description,
      report_date: row.report_date,
      punishment_name: row.punishment_name,
    };
  }

  async create(dto: CreateReportViolationDto): Promise<void> {
    if (
      !dto.emp_id ||
      !dto.full_name ||
      !dto.violation_id ||
      !dto.description
    ) {
      throw new Error('Missing required fields');
    }

    const query = `
      INSERT INTO report_violation (
        emp_id,
        full_name,
        vehicle_plate,
        vehicle_plate_province,
        position,
        department,
        division,
        violation_id,
        punishment_id,
        description,
        report_date
      )
      VALUES (@0, @1, @2, @3, @4, @5, @6, @7, @8, @9, GETDATE())
    `;

    await this.dataSource.query(query, [
      dto.emp_id,
      dto.full_name,
      dto.vehicle_plate,
      dto.vehicle_plate_province,
      dto.position,
      dto.department,
      dto.division,
      dto.violation_id,
      dto.punishment_id,
      dto.description,
    ]);
  }

  async remove(id: number): Promise<void> {
    await this.dataSource.query(
      `DELETE FROM report_violation WHERE report_id = @0;`,
      [id],
    );
  }
}
