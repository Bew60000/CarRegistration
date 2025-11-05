import { useEffect, useState } from "react";
import { TypeReportViolations } from "../../types/report-violation";
import { getAllReportViolations } from "../../services/routes/report-violation.service";

export default function useViolation() {
  const [violations, setViolations] = useState<TypeReportViolations[]>([]);

  const fetchViolations = async () => {
    try {
      const data = await getAllReportViolations();
      setViolations(data);
    } catch (error) {
      console.error("Failed to fetch Report Violation:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchViolations();
    };
    fetchData();
  }, []);

  return {
    violations,
    fetchViolations,
  };
}
