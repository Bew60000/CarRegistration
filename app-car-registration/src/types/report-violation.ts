export type TypeReportViolations = {
  report_violation_id: number;
  vehicle_id: string;
  emp_id: string;
  full_name: string;
  position_id: string;
  department_id: string;
  division_id: string;
  violation_id: string;
  description: string;
  report_date: string;
  punishment_id: string;
};

export type TypePostReportViolation = {
  vehicle_id: string;
  emp_id: string;
  full_name: string;
  position_id: string;
  department_id: string;
  division_id: string;
  violation_id: string;
  description: string;
  report_date: string;
  punishment_id: string;
};
