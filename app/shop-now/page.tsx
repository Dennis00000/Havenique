import type { Metadata } from "next"
import Image from "next/image"
import { Filter, Grid3X3, List } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCard } from "@/components/product-card"

export const metadata: Metadata = {
  title: "Shop Now - Havenique",
  description: "Explore our latest collection of modern furniture for your home.",
}

export default function ShopNowPage() {
  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative">
          <div className="relative h-[300px] md:h-[400px] overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Modern furniture collection"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">New Collection 2023</h1>
                <p className="text-lg md:text-xl max-w-[600px] mx-auto mb-6">
                  Discover our latest furniture pieces designed for modern living
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="rounded-full">
                All Products
              </Button>
              <Button variant="outline" className="rounded-full">
                Living Room
              </Button>
              <Button variant="outline" className="rounded-full">
                Bedroom
              </Button>
              <Button variant="outline" className="rounded-full">
                Dining Room
              </Button>
              <Button variant="outline" className="rounded-full">
                Office
              </Button>
              <Button variant="outline" className="rounded-full">
                Outdoor
              </Button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">All Products</h2>
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Grid3X3 className="h-4 w-4" />
                    <span className="sr-only">Grid view</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <List className="h-4 w-4" />
                    <span className="sr-only">List view</span>
                  </Button>
                </div>
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 20 }).map((_, i) => (
                <ProductCard
                  key={i}
                  id={i + 1}
                  name={`${i % 4 === 0 ? "Modern Sofa" : i % 4 === 1 ? "Elegant Chair" : i % 4 === 2 ? "Coffee Table" : "Floor Lamp"} ${i + 1}`}
                  price={99.99 + i * 20}
                  image={`/placeholder.svg?height=300&width=300`}
                  category={i % 4 === 0 ? "Sofa" : i % 4 === 1 ? "Chair" : i % 4 === 2 ? "Table" : "Lighting"}
                  isNew={i < 4}
                  discount={i % 7 === 0 ? 15 : undefined}
                />
              ))}
            </div>

            <div className="flex items-center justify-center mt-12">
              <Button variant="outline" className="mx-1">
                1
              </Button>
              <Button variant="outline" className="mx-1">
                2
              </Button>
              <Button variant="outline" className="mx-1">
                3
              </Button>
              <Button variant="outline" className="mx-1">
                ...
              </Button>
              <Button variant="outline" className="mx-1">
                10
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Join Our Newsletter</h2>
              <p className="max-w-[600px] text-muted-foreground">
                Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
              </p>
              <div className="w-full max-w-md flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Your email address" className="flex-1" />
                <Button className="bg-teal-600 hover:bg-teal-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

