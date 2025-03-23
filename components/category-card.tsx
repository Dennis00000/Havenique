import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface CategoryCardProps {
  title: string
  description: string
  image: string
  discount?: string
  discountBg?: string
}

export default function CategoryCard({
  title,
  description,
  image,
  discount,
  discountBg = "bg-amber-100",
}: CategoryCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white">
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <Button variant="link" className="mt-2 p-0 text-teal-600 hover:text-teal-700">
          Shop Now <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        {discount && (
          <div
            className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${discountBg} text-white`}
          >
            {discount}
          </div>
        )}
      </div>
    </div>
  )
}

