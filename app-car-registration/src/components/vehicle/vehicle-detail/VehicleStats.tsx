type VehicleStatsProps = {
  stats: {
    total: number;
    active: number;
    expired: number;
    suspended: number;
    expiringSoon: number;
  };
};

export default function VehicleStats({ stats }: VehicleStatsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[
        { label: "ทั้งหมด", value: stats.total, color: "blue" },
        { label: "ใช้งานได้", value: stats.active, color: "green" },
        { label: "ระงับใช้งาน", value: stats.suspended, color: "red" },
        { label: "ใกล้หมดอายุ", value: stats.expiringSoon, color: "orange" },
      ].map((item, i) => (
        <div
          key={i}
          className={`rounded-xl border border-${item.color}-200 bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 p-6`}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className={`text-3xl font-bold text-${item.color}-700`}>
                {item.value}
              </div>
              <div
                className={`mt-1 text-sm font-medium text-${item.color}-600`}
              >
                {item.label}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
