import type { Metadata } from "next"
import DashboardMetrics from "@/components/dashboard-metrics"
import RecentActivity from "@/components/recent-activity"
import UpcomingTasks from "@/components/upcoming-tasks"
import SalesOverview from "@/components/sales-overview"

export const metadata: Metadata = {
  title: "Dashboard | AgriSales",
  description: "Sales management dashboard for agriculture software",
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <DashboardMetrics />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SalesOverview />
        <UpcomingTasks />
      </div>
      <RecentActivity />
    </div>
  )
}

