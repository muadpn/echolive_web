"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function RecentVisitors() {
  const visitors = [
    {
      id: 1,
      website: "example.com",
      page: "/products",
      country: "US",
      time: "2 mins ago"
    },
    {
      id: 2,
      website: "demo.com",
      page: "/about",
      country: "UK",
      time: "5 mins ago"
    },
    {
      id: 3,
      website: "test.com",
      page: "/contact",
      country: "DE",
      time: "8 mins ago"
    }
  ]

  return (
    <div className="space-y-8">
      {visitors.map((visitor) => (
        <div key={visitor.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{visitor.country}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{visitor.website}</p>
            <p className="text-sm text-muted-foreground">
              {visitor.page}
            </p>
          </div>
          <div className="ml-auto font-medium">
            {visitor.time}
          </div>
        </div>
      ))}
    </div>
  )
}