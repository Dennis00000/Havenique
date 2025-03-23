"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Check, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CheckoutPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  // Mock cart items
  const cartItems = [
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
      image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1969&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Minimalist Desk Lamp",
      price: 79.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1974&auto=format&fit=crop",
    },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 10
  const tax = subtotal * 0.07
  const total = subtotal + shipping + tax

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      router.push("/checkout/confirmation")
    }, 1500)
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col">
        <main className="flex-1 py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">Your cart is empty</h1>
                <p className="text-muted-foreground">Add items to your cart to proceed to checkout</p>
              </div>
              <Button asChild className="mt-4 bg-teal-600 hover:bg-teal-700">
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold">Checkout</h1>
                  <p className="text-muted-foreground">
                    Complete your order by providing your shipping and payment details.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-8">
                    {/* Contact Information */}
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Contact Information</h2>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First name</Label>
                          <Input id="first-name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last name</Label>
                          <Input id="last-name" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" required />
                      </div>
                    </div>

                    {/* Shipping Address */}
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Shipping Address</h2>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                        <Input id="apartment" />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Select defaultValue="">
                            <SelectTrigger id="state">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="AL">Alabama</SelectItem>
                              <SelectItem value="AK">Alaska</SelectItem>
                              <SelectItem value="AZ">Arizona</SelectItem>
                              {/* Add more states */}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zip">ZIP code</Label>
                          <Input id="zip" required />
                        </div>
                      </div>
                    </div>

                    {/* Shipping Method */}
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Shipping Method</h2>
                      <RadioGroup defaultValue="standard">
                        <div className="flex items-center justify-between space-x-2 rounded-md border p-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="standard" id="standard" />
                            <Label htmlFor="standard" className="font-normal">
                              Standard Shipping (3-5 business days)
                            </Label>
                          </div>
                          <div>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</div>
                        </div>
                        <div className="flex items-center justify-between space-x-2 rounded-md border p-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="express" id="express" />
                            <Label htmlFor="express" className="font-normal">
                              Express Shipping (1-2 business days)
                            </Label>
                          </div>
                          <div>$15.00</div>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Payment */}
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Payment</h2>
                      <Tabs defaultValue="card">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="card">Credit Card</TabsTrigger>
                          <TabsTrigger value="paypal">PayPal</TabsTrigger>
                          <TabsTrigger value="apple">Apple Pay</TabsTrigger>
                        </TabsList>
                        <TabsContent value="card" className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="card-number">Card number</Label>
                            <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                          </div>
                          <div className="grid gap-4 sm:grid-cols-3">
                            <div className="space-y-2">
                              <Label htmlFor="expiration">Expiration</Label>
                              <Input id="expiration" placeholder="MM/YY" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvc">CVC</Label>
                              <Input id="cvc" placeholder="123" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="zip-code">ZIP code</Label>
                              <Input id="zip-code" placeholder="12345" required />
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="paypal" className="flex h-40 items-center justify-center">
                          <div className="text-center">
                            <p>You will be redirected to PayPal to complete your purchase.</p>
                          </div>
                        </TabsContent>
                        <TabsContent value="apple" className="flex h-40 items-center justify-center">
                          <div className="text-center">
                            <p>You will be redirected to Apple Pay to complete your purchase.</p>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>

                    <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700" disabled={loading}>
                      {loading ? "Processing..." : "Place Order"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            <div>
              <div className="sticky top-24 rounded-lg border p-6">
                <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <div className="relative h-12 w-12 overflow-hidden rounded-md">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="line-clamp-1 text-sm font-medium">{item.name}</div>
                            <div className="text-xs text-gray-500">Qty: {item.quantity}</div>
                          </div>
                        </div>
                        <span>€{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `€${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (7%)</span>
                    <span>€{tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>€{total.toFixed(2)}</span>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Free shipping on orders over $100</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>30-day returns on all orders</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CreditCard className="h-4 w-4 text-green-500" />
                      <span>Secure payment processing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

