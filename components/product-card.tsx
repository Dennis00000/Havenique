import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  id: number | string
  name: string
  price: number
  image: string
  category: string
  isNew?: boolean
  discount?: number
}

export function ProductCard({ id, name, price, image, category, isNew, discount }: ProductCardProps) {
  // Ensure price is a number
  const priceValue = typeof price === "string" ? Number.parseFloat(price.toString().replace(/[^0-9.]/g, "")) : price
  const discountedPrice = discount ? priceValue - (priceValue * discount) / 100 : priceValue

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white">
      <Link href={`/products/${id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {isNew && <Badge className="absolute top-2 left-2 bg-teal-600">New</Badge>}
          {discount && <Badge className="absolute top-2 right-2 bg-red-600">{discount}% Off</Badge>}
          <div className="absolute bottom-2 right-2 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
            <Button size="icon" variant="secondary" className="rounded-full">
              <Heart className="h-4 w-4" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
            <Button size="icon" variant="secondary" className="rounded-full">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Add to cart</span>
            </Button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-gray-500">{category}</p>
          <div className="mt-2 flex items-center">
            {discount ? (
              <>
                <span className="font-bold">€{discountedPrice.toFixed(2)}</span>
                <span className="ml-2 text-sm text-gray-500 line-through">€{priceValue.toFixed(2)}</span>
              </>
            ) : (
              <span className="font-bold">€{priceValue.toFixed(2)}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard

