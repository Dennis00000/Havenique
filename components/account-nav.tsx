"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, HelpCircle, LayoutDashboard, LogOut, Package, Settings, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const accountNavItems = [
  {
    title: "Account",
    href: "/account",
    icon: <User className="mr-2 h-4 w-4" />,
  },
  {
    title: "Orders",
    href: "/orders",
    icon: <Package className="mr-2 h-4 w-4" />,
  },
  {
    title: "Wishlist",
    href: "/wishlist",
    icon: <Heart className="mr-2 h-4 w-4" />,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <Settings className="mr-2 h-4 w-4" />,
  },
  {
    title: "Help",
    href: "/help",
    icon: <HelpCircle className="mr-2 h-4 w-4" />,
  },
]

export function AccountNav() {
  const pathname = usePathname()

  return (
    <nav className="grid gap-2">
      <div className="flex items-center gap-2 px-2 py-1.5">
        <LayoutDashboard className="h-4 w-4" />
        <span className="text-sm font-medium">Dashboard</span>
      </div>
      <div className="grid gap-1">
        {accountNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm",
              pathname === item.href
                ? "bg-gray-100 font-medium text-teal-600 dark:bg-gray-800"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50",
            )}
          >
            {item.icon}
            {item.title}
          </Link>
        ))}
      </div>
      <div className="mt-4">
        <Button variant="outline" className="w-full justify-start text-red-500">
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </div>
    </nav>
  )
}

