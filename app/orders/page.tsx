import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { AccountNav } from "@/components/account-nav"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Orders",
  description: "View your order history and track current orders.",
}

export default function OrdersPage() {
  return (
    <main className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] px-4 md:px-6 py-12">
      <aside className="hidden md:block">
        <AccountNav />
      </aside>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Orders</h1>
          <p className="text-muted-foreground">View your order history and track current orders.</p>
        </div>
        <div className="space-y-8">
          {[
            {
              id: "ORD-12345",
              date: "May 15, 2023",
              status: "Delivered",
              total: "$1,249.97",
              items: [
                {
                  name: "Modern Sofa",
                  price: "$899.99",
                  quantity: 1,
                  image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
                },
                {
                  name: "Coffee Table",
                  price: "$349.98",
                  quantity: 1,
                  image:
                    "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1969&auto=format&fit=crop",
                },
              ],
            },
            {
              id: "ORD-12344",
              date: "April 2, 2023",
              status: "Delivered",
              total: "$259.98",
              items: [
                {
                  name: "Floor Lamp",
                  price: "$129.99",
                  quantity: 2,
                  image:
                    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1974&auto=format&fit=crop",
                },
              ],
            },
            {
              id: "ORD-12343",
              date: "March 10, 2023",
              status: "Delivered",
              total: "$649.99",
              items: [
                {
                  name: "Dining Table",
                  price: "$649.99",
                  quantity: 1,
                  image:
                    "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1964&auto=format&fit=crop",
                },
              ],
            },
          ].map((order, index) => (
            <div key={index} className="rounded-lg border overflow-hidden">
              <div className="bg-muted p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="font-medium">Order #{order.id}</div>
                    <div className="text-sm text-muted-foreground">Placed on {order.date}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm">
                      <span className="font-medium">Status: </span>
                      <span className={order.status === "Delivered" ? "text-green-600" : "text-amber-600"}>
                        {order.status}
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Total: </span>
                      {order.total}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  {order.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-4">
                      <div className="relative h-16 w-16 overflow-hidden rounded-md flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {item.price} × {item.quantity}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t p-4 flex justify-end">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/orders/${order.id}`}>View Details</Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    Track Order
                  </Button>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    Buy Again
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

