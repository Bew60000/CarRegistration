import { AlertTriangle, Bell, Car, Users } from "lucide-react";
import DashboardWelcome from "./dashbord-detail/DashboardWelcome";
import StatisticsOverview from "./dashbord-detail/StatisticsOverview";
import RecentActivity from "./dashbord-detail/RecentActivity";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <DashboardWelcome />
      <StatisticsOverview />
      <RecentActivity />
    </div>
  );
}
