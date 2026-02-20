import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: {
        name: "John Doe",
        avatar: "/placeholder-user.jpg",
        initials: "JD",
      },
      action: "added a new product",
      item: "Organic Fertilizer Pro",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: {
        name: "Sarah Johnson",
        avatar: "/placeholder-user.jpg",
        initials: "SJ",
      },
      action: "closed a deal with",
      item: "Greenfield Farms",
      time: "5 hours ago",
    },
    {
      id: 3,
      user: {
        name: "Mike Wilson",
        avatar: "/placeholder-user.jpg",
        initials: "MW",
      },
      action: "created a new marketing campaign",
      item: "Summer Harvest Special",
      time: "Yesterday",
    },
    {
      id: 4,
      user: {
        name: "Emily Chen",
        avatar: "/placeholder-user.jpg",
        initials: "EC",
      },
      action: "updated sales goal for",
      item: "Q3 2024",
      time: "Yesterday",
    },
    {
      id: 5,
      user: {
        name: "Robert Taylor",
        avatar: "/placeholder-user.jpg",
        initials: "RT",
      },
      action: "added a new customer",
      item: "Valley Agricultural Co-op",
      time: "2 days ago",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions from your team</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback>{activity.user.initials}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-semibold">{activity.user.name}</span> {activity.action}{" "}
                  <span className="font-semibold">{activity.item}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

