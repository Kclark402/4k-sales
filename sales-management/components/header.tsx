"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, ChevronDown, Leaf, Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 sm:max-w-xs">
          <div className="flex h-14 items-center px-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Leaf className="h-6 w-6 text-primary" />
              <span>AgriSales</span>
            </Link>
          </div>
          <nav className="grid gap-2 px-2 py-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2">
                Dashboard
              </Button>
            </Link>
            <Link href="/goals">
              <Button variant="ghost" className="w-full justify-start gap-2">
                Goals
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="ghost" className="w-full justify-start gap-2">
                Products
              </Button>
            </Link>
            <Link href="/marketing">
              <Button variant="ghost" className="w-full justify-start gap-2">
                Marketing
              </Button>
            </Link>
            <Link href="/performance">
              <Button variant="ghost" className="w-full justify-start gap-2">
                Performance
              </Button>
            </Link>
            <Link href="/customers">
              <Button variant="ghost" className="w-full justify-start gap-2">
                Customers
              </Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex-1 flex items-center">
        {isSearchOpen ? (
          <div className="relative w-full sm:max-w-[400px] flex items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="w-full pl-8 pr-10" autoFocus />
            <Button variant="ghost" size="icon" className="absolute right-0" onClick={() => setIsSearchOpen(false)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close search</span>
            </Button>
          </div>
        ) : (
          <Button variant="outline" size="icon" className="hidden sm:flex" onClick={() => setIsSearchOpen(true)}>
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="hidden sm:inline-block">John Doe</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

