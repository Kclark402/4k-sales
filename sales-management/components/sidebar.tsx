"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Calendar,
  CreditCard,
  Home,
  Leaf,
  MessageSquare,
  Package,
  Settings,
  Target,
  Users,
} from "lucide-react"

const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Goals", href: "/goals", icon: Target },
  { name: "Products", href: "/products", icon: Package },
  { name: "Marketing", href: "/marketing", icon: MessageSquare },
  { name: "Performance", href: "/performance", icon: BarChart3 },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Billing", href: "/billing", icon: CreditCard },
  { name: "Settings", href: "/settings", icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex flex-col w-64 border-r bg-background h-screen sticky top-0">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Leaf className="h-6 w-6 text-primary" />
          <span>AgriSales</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2 group">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-2 font-normal",
                    pathname === item.href && "bg-muted font-medium",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="border-t p-4">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-1">
            <Leaf className="h-4 w-4 text-primary" />
          </div>
          <div className="text-sm">
            <p className="font-medium">AgriSales Pro</p>
            <p className="text-muted-foreground">Your plan expires in 30 days</p>
          </div>
        </div>
      </div>
    </div>
  )
}

