import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Star, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"

export const metadata: Metadata = {
  title: "Featured Products - Havenique",
  description: "Explore our curated selection of premium furniture pieces for your home.",
}

export default function FeaturedProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Our curated selection of premium furniture pieces designed to transform your space.
              </p>
            </div>
          </div>
        </section>

        {/* Spotlight Product */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Premium leather sofa"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                />
                <Badge className="absolute top-4 left-4 bg-teal-600">Featured</Badge>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Milano Leather Sofa</h2>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">(42 reviews)</span>
                </div>
                <div className="text-3xl font-bold">€1,299.99</div>
                <p className="text-muted-foreground">
                  The Milano Leather Sofa combines timeless design with exceptional comfort. Crafted with premium
                  Italian leather and a solid hardwood frame, this sofa is built to last for generations. Its clean
                  lines and minimalist aesthetic make it the perfect centerpiece for any modern living space.
                </p>
                <div className="space-y-2">
                  <h3 className="font-medium">Available Colors:</h3>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-amber-900 ring-2 ring-offset-2 ring-amber-900 cursor-pointer" />
                    <div className="w-8 h-8 rounded-full bg-gray-800 cursor-pointer" />
                    <div className="w-8 h-8 rounded-full bg-gray-400 cursor-pointer" />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="bg-teal-600 hover:bg-teal-700" size="lg">
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Sellers */}
        <section className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Best Sellers</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Our most popular furniture pieces loved by customers.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((id) => (
                <ProductCard
                  key={id}
                  id={id}
                  name={`Best Seller ${id}`}
                  price={"€" + (299.99 + id * 100)}
                  image={`/placeholder.svg?height=300&width=300`}
                  category={id % 2 === 0 ? "Chair" : "Table"}
                  isNew={id === 1}
                />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button className="bg-teal-600 hover:bg-teal-700">View All Best Sellers</Button>
            </div>
          </div>
        </section>

        {/* Customer Favorites */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Customer Favorites</h2>
              <p className="max-w-[700px] text-muted-foreground">Highly rated products our customers love.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
                <ProductCard
                  key={id}
                  id={id}
                  name={`Customer Favorite ${id}`}
                  price={"€" + (199.99 + id * 30)}
                  image={`/placeholder.svg?height=300&width=300`}
                  category={id % 3 === 0 ? "Sofa" : id % 3 === 1 ? "Chair" : "Lighting"}
                  discount={id % 5 === 0 ? 20 : undefined}
                />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/shop" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

