import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Filter, Grid3X3, List } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCard } from "@/components/product-card"

export const metadata: Metadata = {
  title: "Shop - Furnish",
  description: "Browse our collection of modern furniture for your home.",
}

export default function ShopPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative h-[300px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop"
          alt="Modern furniture collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Shop Our Collection</h1>
            <p className="text-lg md:text-xl max-w-[600px] mx-auto">
              Discover quality furniture designed for modern living
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4 lg:w-1/5">
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="font-medium mb-2">Categories</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="/shop/living-room" className="text-sm hover:underline">
                      Living Room
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop/bedroom" className="text-sm hover:underline">
                      Bedroom
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop/dining-room" className="text-sm hover:underline">
                      Dining Room
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop/office" className="text-sm hover:underline">
                      Office
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop" className="text-sm hover:underline">
                      All Categories
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <div className="flex items-center gap-2">
                  <Input type="number" placeholder="Min" className="w-20" />
                  <span>-</span>
                  <Input type="number" placeholder="Max" className="w-20" />
                  <Button size="sm" variant="outline">
                    Go
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "bg-black",
                    "bg-white border",
                    "bg-gray-500",
                    "bg-red-500",
                    "bg-blue-500",
                    "bg-green-500",
                    "bg-yellow-500",
                    "bg-teal-500",
                  ].map((color, index) => (
                    <div key={index} className={`w-6 h-6 rounded-full cursor-pointer ${color}`} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Material</h3>
                <ul className="space-y-1">
                  <li>
                    <Link href="#" className="text-sm hover:underline">
                      Wood
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline">
                      Metal
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline">
                      Fabric
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline">
                      Leather
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:underline">
                      Glass
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="md:w-3/4 lg:w-4/5">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Shop</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                {
                  id: 1,
                  name: "Modern Sofa",
                  price: 899.99,
                  image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
                  category: "Sofa",
                },
                {
                  id: 2,
                  name: "Accent Chair",
                  price: 349.99,
                  image:
                    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop",
                  category: "Chair",
                },
                {
                  id: 3,
                  name: "Coffee Table",
                  price: 249.99,
                  image:
                    "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1969&auto=format&fit=crop",
                  category: "Table",
                },
                {
                  id: 4,
                  name: "Floor Lamp",
                  price: 129.99,
                  image:
                    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1974&auto=format&fit=crop",
                  category: "Lighting",
                },
                {
                  id: 5,
                  name: "Dining Table",
                  price: 599.99,
                  image:
                    "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1964&auto=format&fit=crop",
                  category: "Table",
                },
                {
                  id: 6,
                  name: "Bookshelf",
                  price: 299.99,
                  image:
                    "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1970&auto=format&fit=crop",
                  category: "Storage",
                },
                {
                  id: 7,
                  name: "Bed Frame",
                  price: 799.99,
                  image:
                    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
                  category: "Bedroom",
                },
                {
                  id: 8,
                  name: "Office Desk",
                  price: 449.99,
                  image:
                    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
                  category: "Office",
                },
                {
                  id: 9,
                  name: "Sideboard",
                  price: 549.99,
                  image:
                    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop",
                  category: "Storage",
                },
                {
                  id: 10,
                  name: "Armchair",
                  price: 399.99,
                  image:
                    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop",
                  category: "Chair",
                },
                {
                  id: 11,
                  name: "Nightstand",
                  price: 149.99,
                  image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?q=80&w=1915&auto=format&fit=crop",
                  category: "Bedroom",
                },
                {
                  id: 12,
                  name: "Dining Chair",
                  price: 129.99,
                  image:
                    "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop",
                  category: "Chair",
                },
              ].map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  isNew={product.id < 3}
                  discount={product.id % 5 === 0 ? 15 : undefined}
                />
              ))}
            </div>

            <div className="flex items-center justify-center mt-8">
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
        </div>
      </div>
    </div>
  )
}

