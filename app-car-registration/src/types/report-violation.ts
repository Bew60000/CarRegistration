export type TypeReportViolations = {
  report_id: number;
  vehicle_plate: string;
  vehicle_plate_province: string;
  emp_id: string;
  full_name: string;
  position: string;
  department: string;
  division: string;
  violation_name: string;
  description: string;
  report_date: string;
  punishment_name: string;
};

export type TypePostReportViolation = {
  vehicle_plate: string;
  vehicle_plate_province: string;
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
