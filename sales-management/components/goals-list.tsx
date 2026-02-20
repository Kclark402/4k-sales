"use client"

import { useState } from "react"
import { Edit, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function GoalsList() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Q3 Sales Target",
      description: "Reach $500,000 in sales for Q3",
      target: 500000,
      current: 325000,
      period: "Q3 2024",
      category: "Revenue",
    },
    {
      id: 2,
      title: "New Customer Acquisition",
      description: "Acquire 50 new farm customers",
      target: 50,
      current: 32,
      period: "2024",
      category: "Customers",
    },
    {
      id: 3,
      title: "Organic Fertilizer Sales",
      description: "Sell 1000 units of organic fertilizer",
      target: 1000,
      current: 580,
      period: "Q3 2024",
      category: "Product",
    },
    {
      id: 4,
      title: "Customer Retention",
      description: "Maintain 90% customer retention rate",
      target: 90,
      current: 87,
      period: "2024",
      category: "Customers",
    },
  ])

  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    target: "",
    current: "",
    period: "",
    category: "",
  })

  const handleAddGoal = () => {
    const newGoal = {
      id: goals.length + 1,
      title: formData.title,
      description: formData.description,
      target: Number.parseInt(formData.target),
      current: Number.parseInt(formData.current) || 0,
      period: formData.period,
      category: formData.category,
    }

    setGoals([...goals, newGoal])
    setFormData({
      title: "",
      description: "",
      target: "",
      current: "",
      period: "",
      category: "",
    })
    setOpen(false)
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {goals.map((goal) => {
          const progress = Math.round((goal.current / goal.target) * 100)

          return (
            <Card key={goal.id}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{goal.title}</CardTitle>
                    <CardDescription className="mt-1">{goal.description}</CardDescription>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit goal</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete goal</span>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2 text-sm">
                  <span className="text-muted-foreground">{goal.period}</span>
                  <span className="font-medium">{goal.category}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <div className="flex items-center justify-between text-sm pt-2">
                    <span className="text-muted-foreground">Current: {goal.current.toLocaleString()}</span>
                    <span className="text-muted-foreground">Target: {goal.target.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Card className="flex h-full flex-col items-center justify-center p-6 text-center cursor-pointer border-dashed">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <Plus className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-medium">Add New Goal</h3>
              <p className="mt-2 text-sm text-muted-foreground">Create a new sales target or objective</p>
            </Card>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Goal</DialogTitle>
              <DialogDescription>Create a new goal to track your sales performance.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Goal Title</Label>
                <Input
                  id="title"
                  placeholder="Enter goal title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="Enter goal description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="target">Target Value</Label>
                  <Input
                    id="target"
                    type="number"
                    placeholder="Enter target"
                    value={formData.target}
                    onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="current">Current Value</Label>
                  <Input
                    id="current"
                    type="number"
                    placeholder="Enter current value"
                    value={formData.current}
                    onChange={(e) => setFormData({ ...formData, current: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="period">Time Period</Label>
                  <Select
                    value={formData.period}
                    onValueChange={(value) => setFormData({ ...formData, period: value })}
                  >
                    <SelectTrigger id="period">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Q1 2024">Q1 2024</SelectItem>
                      <SelectItem value="Q2 2024">Q2 2024</SelectItem>
                      <SelectItem value="Q3 2024">Q3 2024</SelectItem>
                      <SelectItem value="Q4 2024">Q4 2024</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Revenue">Revenue</SelectItem>
                      <SelectItem value="Customers">Customers</SelectItem>
                      <SelectItem value="Product">Product</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddGoal}>Create Goal</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}

