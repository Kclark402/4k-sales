"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SalesOverview() {
  const [activeTab, setActiveTab] = useState("weekly")

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Sales Overview</CardTitle>
        <CardDescription>View your sales performance over time</CardDescription>
        <Tabs defaultValue="weekly" className="mt-2" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="h-[240px] flex items-center justify-center">
          {activeTab === "weekly" && (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="w-full h-full bg-muted/40 rounded-md flex items-end p-2 gap-1">
                <div className="h-[30%] w-1/7 bg-primary rounded-t-sm"></div>
                <div className="h-[45%] w-1/7 bg-primary rounded-t-sm"></div>
                <div className="h-[60%] w-1/7 bg-primary rounded-t-sm"></div>
                <div className="h-[40%] w-1/7 bg-primary rounded-t-sm"></div>
                <div className="h-[75%] w-1/7 bg-primary rounded-t-sm"></div>
                <div className="h-[90%] w-1/7 bg-primary rounded-t-sm"></div>
                <div className="h-[50%] w-1/7 bg-primary rounded-t-sm"></div>
              </div>
              <div className="w-full flex justify-between text-xs text-muted-foreground mt-2">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          )}
          {activeTab === "monthly" && (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="w-full h-full bg-muted/40 rounded-md flex items-end p-2 gap-1">
                <div className="h-[40%] w-1/12 bg-primary rounded-t-sm"></div>
                <div className="h-[55%] w-1/12 bg-primary rounded-t-sm"></div>
                <div className="h-[70%] w-1/12 bg-primary rounded-t-sm"></div>
                <div className="h-[60%] w-1/12 bg-primary rounded-t-sm"></div>
                <div className="h-[80%] w-1/12 bg-primary rounded-t-sm"></div>
                <div className="h-[75%] w-1/12 bg-primary rounded-t-sm"></div>
                <div className="h-[65%] w-1/12 bg-primary rounded-t-sm"></div>
                <div className="h-[85%] w-1/12 bg-primary rounded-t-sm"></div>
                <div className="h-[90%] w-1/12 bg-primary rounded-t-sm"></div>
                <div className="h-[75%] w-1/12 bg-primary rounded-t-sm"></div>
                <div className="h-[60%] w-1/12 bg-primary rounded-t-sm"></div>
                <div className="h-[50%] w-1/12 bg-primary rounded-t-sm"></div>
              </div>
              <div className="w-full flex justify-between text-xs text-muted-foreground mt-2 px-1">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </div>
          )}
          {activeTab === "yearly" && (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="w-full h-full bg-muted/40 rounded-md flex items-end p-2 gap-2">
                <div className="h-[50%] w-1/5 bg-primary rounded-t-sm"></div>
                <div className="h-[65%] w-1/5 bg-primary rounded-t-sm"></div>
                <div className="h-[80%] w-1/5 bg-primary rounded-t-sm"></div>
                <div className="h-[90%] w-1/5 bg-primary rounded-t-sm"></div>
                <div className="h-[70%] w-1/5 bg-primary rounded-t-sm"></div>
              </div>
              <div className="w-full flex justify-between text-xs text-muted-foreground mt-2">
                <span>2020</span>
                <span>2021</span>
                <span>2022</span>
                <span>2023</span>
                <span>2024</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

