import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ConfirmationPage() {
  const orderNumber = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0")

  return (
    <div className="flex flex-col">
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-md space-y-6 text-center">
            <div className="flex justify-center">
              <div className="rounded-full bg-green-100 p-3">
                <Check className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Order Confirmed!</h1>
              <p className="text-muted-foreground">
                Thank you for your purchase. Your order has been confirmed and will be shipped soon.
              </p>
            </div>
            <div className="rounded-lg border p-6 text-left">
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-medium">Order Details</h2>
                  <p className="text-sm text-muted-foreground">Order #{orderNumber}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Date</span>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Payment Method</span>
                    <span>Credit Card</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping Method</span>
                    <span>Standard Shipping</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="rounded-lg border p-6 text-left">
              <h2 className="text-lg font-medium mb-4">Order Items</h2>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    name: "Modern Leather Sofa",
                    price: 899.99,
                    quantity: 1,
                    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
                  },
                  {
                    id: 2,
                    name: "Accent Coffee Table",
                    price: 349.98,
                    quantity: 1,
                    image:
                      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1969&auto=format&fit=crop",
                  },
                ].map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-md">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">€{item.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button asChild className="bg-teal-600 hover:bg-teal-700">
                <Link href="/shop">Continue Shopping</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

