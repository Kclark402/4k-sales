import { CheckCircle2, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function UpcomingTasks() {
  const tasks = [
    {
      id: "task1",
      title: "Follow up with Greenfield Farms",
      dueDate: "Today, 2:00 PM",
      completed: false,
    },
    {
      id: "task2",
      title: "Prepare Q3 sales forecast",
      dueDate: "Tomorrow, 10:00 AM",
      completed: false,
    },
    {
      id: "task3",
      title: "Update product catalog",
      dueDate: "Jul 15, 2024",
      completed: true,
    },
    {
      id: "task4",
      title: "Schedule demo with Valley Ag",
      dueDate: "Jul 16, 2024",
      completed: false,
    },
    {
      id: "task5",
      title: "Review marketing campaign results",
      dueDate: "Jul 18, 2024",
      completed: false,
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div>
          <CardTitle>Upcoming Tasks</CardTitle>
          <CardDescription>Your scheduled tasks and follow-ups</CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-1 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-primary" />
          <span>1/5 completed</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className={`flex items-start gap-3 ${task.completed ? "text-muted-foreground" : ""}`}>
              <Checkbox id={task.id} checked={task.completed} />
              <div className="grid gap-1">
                <label htmlFor={task.id} className={`font-medium ${task.completed ? "line-through" : ""}`}>
                  {task.title}
                </label>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  {task.dueDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

