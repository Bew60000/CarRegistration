import {
  TypePostReportViolation,
  TypeReportViolations,
} from "../../types/report-violation";
import api from "../api";

export const getAllReportViolations = async (): Promise<
  TypeReportViolations[]
> => {
  try {
    const response = await api.get<TypeReportViolations[]>("/report-violation");
    return response.data;
  } catch (error) {
    console.error("Error fetching report violations:", error);
    throw error;
  }
};

export const getOneReportViolation = async (
  id: number,
): Promise<TypeReportViolations> => {
  try {
    const response = await api.get<TypeReportViolations[]>(
      "/report-violation",
      {
        headers: {
          report_violation_id: id,
        },
      },
    );
    return response.data[0];
  } catch (error) {
    console.error("Error fetching report violation:", error);
    throw error;
  }
};

export const postReportViolation = async (
  report_violation: TypePostReportViolation,
): Promise<TypePostReportViolation> => {
  try {
    const response = await api.post<TypePostReportViolation>(
      "/report-violation",
      report_violation,
    );
    return response.data;
  } catch (error) {
    console.error("Error post report violation:", error);
    throw error;
  }
};

export const deleteReportViolation = async (id: number) => {
  try {
    await api.delete("/report-violation", {
      headers: { vehicle_id: id },
    });
  } catch (error) {
    console.error("Error deleted vehicle:", error);
    throw error;
  }
};
