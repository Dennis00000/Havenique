"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function CartPage() {
  // Mock cart items for display
  const [cartItems, setCartItems] = useState([
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
  ])

  const [promoCode, setPromoCode] = useState("")
  const [promoApplied, setPromoApplied] = useState(false)

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const discount = promoApplied ? subtotal * 0.1 : 0
  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal - discount + shipping

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === "discount10") {
      setPromoApplied(true)
    }
  }

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  return (
    <div className="flex flex-col">
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Shopping Cart</h1>
                <Button variant="ghost" size="sm" onClick={() => setCartItems([])} disabled={cartItems.length === 0}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear Cart
                </Button>
              </div>

              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-10 text-center">
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium">Your cart is empty</h3>
                    <p className="text-muted-foreground">Add items to your cart to see them here</p>
                  </div>
                  <Button asChild className="mt-4 bg-teal-600 hover:bg-teal-700">
                    <Link href="/shop">Continue Shopping</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-start space-x-4 py-4 border-b">
                      <div className="relative h-24 w-24 overflow-hidden rounded-md bg-gray-100">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} className="object-cover" fill />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-start justify-between">
                          <Link href={`/products/${item.id}`} className="font-medium hover:underline">
                            {item.name}
                          </Link>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-gray-400 hover:text-gray-500"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center rounded-md border">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-none border-r p-0"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <span className="h-3 w-3">-</span>
                              <span className="sr-only">Decrease quantity</span>
                            </Button>
                            <span className="flex h-8 w-8 items-center justify-center text-sm">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-none border-l p-0"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                              <span className="h-3 w-3">+</span>
                              <span className="sr-only">Increase quantity</span>
                            </Button>
                          </div>
                          <p className="font-medium">€{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="md:w-1/3">
              <div className="sticky top-24 rounded-lg border p-6">
                <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                  {promoApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (10%)</span>
                      <span>-€{discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `€${shipping.toFixed(2)}`}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>€{total.toFixed(2)}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button onClick={handleApplyPromo} disabled={promoApplied}>
                        Apply
                      </Button>
                    </div>
                    {promoApplied && <p className="text-xs text-green-600">Promo code applied successfully!</p>}
                  </div>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700" disabled={cartItems.length === 0} asChild>
                    <Link href="/checkout">Proceed to Checkout</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/shop">Continue Shopping</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

