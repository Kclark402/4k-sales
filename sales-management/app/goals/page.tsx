import type { Metadata } from "next"
import GoalsList from "@/components/goals-list"
import GoalProgress from "@/components/goal-progress"

export const metadata: Metadata = {
  title: "Goals | AgriSales",
  description: "Manage and track your sales goals",
}

export default function GoalsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Goals Management</h1>
        <div>
          <GoalProgress />
        </div>
      </div>
      <GoalsList />
    </div>
  )
}

