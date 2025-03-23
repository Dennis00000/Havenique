"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useStore } from "@/lib/store"

interface CartItemProps {
  item: {
    id: number
    name: string
    price: number
    quantity: number
    image?: string
    color?: string
  }
}

export function CartItem({ item }: CartItemProps) {
  const { updateCartItemQuantity, removeFromCart } = useStore()
  const [isRemoving, setIsRemoving] = useState(false)

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      updateCartItemQuantity(item.id, newQuantity)
    }
  }

  const handleRemove = () => {
    setIsRemoving(true)
    setTimeout(() => {
      removeFromCart(item.id)
    }, 300)
  }

  return (
    <div
      className={`flex items-start space-x-4 py-4 transition-opacity duration-300 ${isRemoving ? "opacity-0" : "opacity-100"}`}
    >
      <div className="relative h-16 w-16 overflow-hidden rounded-md bg-gray-100">
        {item.image ? (
          <Image src={item.image || "/placeholder.svg"} alt={item.name} className="object-cover" fill />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200">
            <span className="text-xs text-gray-500">No image</span>
          </div>
        )}
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
            onClick={handleRemove}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
        {item.color && (
          <p className="text-sm text-gray-500">
            Color: <span className="capitalize">{item.color}</span>
          </p>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center rounded-md border">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none border-r p-0"
              onClick={() => handleQuantityChange(item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-3 w-3" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            <span className="flex h-8 w-8 items-center justify-center text-sm">{item.quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none border-l p-0"
              onClick={() => handleQuantityChange(item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>
          <p className="font-medium">€{(item.price * item.quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

