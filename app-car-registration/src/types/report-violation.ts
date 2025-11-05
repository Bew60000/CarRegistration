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
  emp_id: string;
  full_name: string;
  vehicle_plate: string;
  vehicle_plate_province: string;
  position: string;
  department: string;
  division: string;
  description: string;
  violation_id: string;
  punishment_id: string;
};
