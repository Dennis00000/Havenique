"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CartItem } from "@/components/cart-item"
import { useStore } from "@/lib/store"

export function CartDropdown() {
  const { cart } = useStore()
  const [isOpen, setIsOpen] = useState(false)

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingBag className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-xs font-medium text-white">
              {totalItems}
            </span>
          )}
          <span className="sr-only">Shopping cart</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Shopping Cart</span>
          <span className="text-sm font-normal text-gray-500">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {cart.length === 0 ? (
          <div className="p-4 text-center text-sm text-gray-500">Your cart is empty</div>
        ) : (
          <DropdownMenuGroup className="max-h-80 overflow-y-auto">
            {cart.map((item) => (
              <DropdownMenuItem key={`${item.id}-${item.color || "default"}`} className="p-0 focus:bg-transparent">
                <div className="w-full px-2">
                  <CartItem item={item} />
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        )}
        {cart.length > 0 && (
          <>
            <DropdownMenuSeparator />
            <div className="p-4">
              <div className="flex items-center justify-between pb-4">
                <span className="font-medium">Subtotal</span>
                <span className="font-medium">€{subtotal.toFixed(2)}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" asChild onClick={() => setIsOpen(false)}>
                  <Link href="/cart">View Cart</Link>
                </Button>
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700" asChild onClick={() => setIsOpen(false)}>
                  <Link href="/checkout">Checkout</Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

