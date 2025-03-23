"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AccountNav } from "@/components/account-nav"
import { useStore } from "@/lib/store"

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart } = useStore()
  const [isRemoving, setIsRemoving] = useState<number | null>(null)
  const [isAddingToCart, setIsAddingToCart] = useState<number | null>(null)

  const handleRemoveFromWishlist = (productId: number) => {
    setIsRemoving(productId)
    setTimeout(() => {
      removeFromWishlist(productId)
      setIsRemoving(null)
    }, 300)
  }

  const handleAddToCart = (product: any) => {
    setIsAddingToCart(product.id)
    setTimeout(() => {
      addToCart(product)
      setIsAddingToCart(null)
    }, 300)
  }

  return (
    <div className="flex flex-col">
      <main className="flex-1 py-12">
        <div className="container grid gap-12 px-4 md:grid-cols-[240px_1fr] md:px-6 lg:grid-cols-[240px_1fr]">
          <AccountNav />
          <div className="space-y-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div className="space-y-1">
                <h1 className="text-2xl font-bold tracking-tight">My Wishlist</h1>
                <p className="text-gray-500 dark:text-gray-400">
                  {wishlist.length} {wishlist.length === 1 ? "item" : "items"} saved for later
                </p>
              </div>
              {wishlist.length > 0 && (
                <Button variant="outline" onClick={() => wishlist.forEach((item) => addToCart(item))}>
                  Add all to cart
                </Button>
              )}
            </div>

            {wishlist.length === 0 ? (
              <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-10 text-center">
                <Heart className="h-12 w-12 text-gray-300" />
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Your wishlist is empty</h3>
                  <p className="text-gray-500 dark:text-gray-400">Items added to your wishlist will appear here</p>
                </div>
                <Button asChild className="mt-4 bg-teal-600 hover:bg-teal-700">
                  <Link href="/shop">Continue shopping</Link>
                </Button>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {wishlist.map((product) => (
                  <div
                    key={product.id}
                    className="group relative overflow-hidden rounded-lg border transition-all hover:shadow-md"
                  >
                    <Link href={`/products/${product.id}`} className="block">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg?height=400&width=400"}
                          alt={product.name}
                          className="object-cover transition-transform group-hover:scale-105"
                          fill
                        />
                      </div>
                    </Link>
                    <div className="p-4">
                      <Link href={`/products/${product.id}`} className="block">
                        <h3 className="font-medium">{product.name}</h3>
                      </Link>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="font-medium">${product.price.toFixed(2)}</p>
                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-500"
                            onClick={() => handleRemoveFromWishlist(product.id)}
                            disabled={isRemoving === product.id}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove from wishlist</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-teal-600"
                            onClick={() => handleAddToCart(product)}
                            disabled={isAddingToCart === product.id}
                          >
                            <ShoppingCart className="h-4 w-4" />
                            <span className="sr-only">Add to cart</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

