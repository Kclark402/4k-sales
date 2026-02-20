import { Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function GoalProgress() {
  return (
    <Card>
      <CardContent className="p-4 flex items-center gap-4">
        <div className="rounded-full bg-primary/10 p-2">
          <Target className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="text-sm font-medium">Overall Goal Progress</p>
          <p className="text-2xl font-bold">78.5%</p>
        </div>
      </CardContent>
    </Card>
  )
}

