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
        r.vehicle_id,
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
      LEFT JOIN employee e ON r.emp_id = e.emp_id
      LEFT JOIN violations vlt ON r.violation_id = vlt.violation_id
      LEFT JOIN punishments p ON r.punishment_id = p.punishment_id;`,
    );

    return reportViolation.map((row) => ({
      report_id: row.report_id,
      vehicle_id: row.vehicle_id,
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
        r.vehicle_id,
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
      LEFT JOIN employee e ON r.emp_id = e.emp_id
      LEFT JOIN violations vlt ON r.violation_id = vlt.violation_id
      LEFT JOIN punishments p ON r.punishment_id = p.punishment_id
      WHERE r.report_id = @0;`,
      [id],
    );

    if (rows.length === 0) return null;

    const row = rows[0];
    return {
      vehicle_id: row.vehicle_id,
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
    // ตรวจสอบค่าที่จำเป็น
    if (
      !dto.vehicle_id ||
      !dto.emp_id ||
      !dto.full_name ||
      !dto.violation_id ||
      !dto.description ||
      !dto.report_date
    ) {
      throw new Error('Missing required fields');
    }

    const query = `
      INSERT INTO report_violation (
        report_id,
        vehicle_id,
        emp_id,
        full_name,
        position,
        department,
        division,
        violation_id,
        description,
        report_date,
        punishment_id
      )
      VALUES (@0, @1, @2, @3, @4, @5, @6, @7, @8, @9)
    `;

    await this.dataSource.query(query, [
      dto.vehicle_id, // @0
      dto.emp_id, // @1
      dto.full_name, // @2
      dto.position, // @3
      dto.department, // @4
      dto.division, // @5
      dto.violation_id, // @6
      dto.description, // @7
      dto.report_date, // @8
      dto.punishment_id || null, // @9
    ]);
  }

  async remove(id: number): Promise<void> {
    await this.dataSource.query(
      `DELETE FROM report_violation WHERE report_id = @0;`,
      [id],
    );
  }
}
