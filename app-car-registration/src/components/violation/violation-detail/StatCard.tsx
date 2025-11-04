import React from "react";

type StatCardProps = {
  label: string;
  value: string | number;
  color: string;
  icon: React.ReactNode | string;
};

export default function StatCard({ label, value, color, icon }: StatCardProps) {
  return (
    <div
      className={`rounded-xl border border-${color}-200 bg-${color}-50 p-4 transition hover:shadow-md`}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className={`text-2xl font-bold text-${color}-700`}>{value}</div>
          <div className={`text-sm text-${color}-600`}>{label}</div>
        </div>
        <div
          className={`rounded-lg p-3 bg-${color}-200 text-${color}-700 text-lg`}
        >
          {typeof icon === "string" ? icon : icon}
        </div>
      </div>
    </div>
  );
}
