export type ReportViolationData = {
  report_id: number;
  vehicle_id: number;
  emp_id: string;
  full_name: string;
  position: string;
  department: string;
  division: string;
  violation_name: string;
  description: string;
  report_date: Date;
  punishment_name: string;
};

export type ReportViolation = {
  vehicle_id: number;
  emp_id: string;
  full_name: string;
  position: string;
  department: string;
  division: string;
  violation_name: string;
  description: string;
  report_date: Date;
  punishment_name: string;
};

export class CreateReportViolationDto {
  vehicle_id: number;
  emp_id: number;
  full_name: string;
  position: number;
  department: number;
  division: number;
  violation_id: string;
  description: string;
  report_date: string; // 'YYYY-MM-DD'
  punishment_id?: string;
}
