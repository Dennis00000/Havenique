import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Grid3X3, List, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"

export const metadata: Metadata = {
  title: "Products | Havenique",
  description: "Browse our collection of high-quality furniture for every room in your home.",
}

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop"
            alt="Modern furniture collection"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Furniture Collection</h1>
            <p className="mt-4 max-w-[700px] text-lg md:text-xl">
              Discover timeless pieces that blend style, comfort, and functionality
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="border-b py-4">
          <div className="container px-4 md:px-6">
            <nav className="text-sm text-muted-foreground">
              <ol className="flex items-center">
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li className="mx-2">/</li>
                <li className="font-medium text-foreground">Products</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
              {/* Sidebar Filters */}
              <aside className="hidden md:block space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Categories</h3>
                  <div className="space-y-2">
                    {[
                      { name: "Living Room", count: 24 },
                      { name: "Bedroom", count: 18 },
                      { name: "Dining Room", count: 12 },
                      { name: "Office", count: 15 },
                      { name: "Outdoor", count: 9 },
                    ].map((category, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox id={`category-${index}`} />
                          <label
                            htmlFor={`category-${index}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category.name}
                          </label>
                        </div>
                        <span className="text-xs text-muted-foreground">{category.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium">Price Range</h3>
                  <div className="space-y-2">
                    {[
                      { range: "Under €100", count: 8 },
                      { range: "€100 - €300", count: 15 },
                      { range: "€300 - €600", count: 22 },
                      { range: "€600 - €1000", count: 18 },
                      { range: "Over €1000", count: 12 },
                    ].map((price, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox id={`price-${index}`} />
                          <label
                            htmlFor={`price-${index}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {price.range}
                          </label>
                        </div>
                        <span className="text-xs text-muted-foreground">{price.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium">Materials</h3>
                  <div className="space-y-2">
                    {[
                      { name: "Wood", count: 35 },
                      { name: "Fabric", count: 28 },
                      { name: "Leather", count: 15 },
                      { name: "Metal", count: 22 },
                      { name: "Glass", count: 10 },
                    ].map((material, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox id={`material-${index}`} />
                          <label
                            htmlFor={`material-${index}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {material.name}
                          </label>
                        </div>
                        <span className="text-xs text-muted-foreground">{material.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium">Colors</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "Natural", color: "bg-amber-200" },
                      { name: "Black", color: "bg-black" },
                      { name: "White", color: "bg-white border" },
                      { name: "Gray", color: "bg-gray-400" },
                      { name: "Blue", color: "bg-blue-500" },
                      { name: "Green", color: "bg-green-500" },
                      { name: "Red", color: "bg-red-500" },
                      { name: "Brown", color: "bg-amber-800" },
                    ].map((colorOption, index) => (
                      <div
                        key={index}
                        className={`w-8 h-8 rounded-full cursor-pointer ${colorOption.color}`}
                        title={colorOption.name}
                      />
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">Apply Filters</Button>
              </aside>

              {/* Products */}
              <div className="space-y-6">
                {/* Mobile Filters */}
                <div className="flex md:hidden items-center justify-between mb-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                  </Button>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Sort and View Options */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-sm text-muted-foreground">Showing 1-15 of 78 products</p>
                  <div className="flex items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="flex items-center gap-1">
                          Sort by: Featured
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Featured</DropdownMenuItem>
                        <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                        <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                        <DropdownMenuItem>Newest</DropdownMenuItem>
                        <DropdownMenuItem>Best Selling</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="hidden md:flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Grid3X3 className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <List className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      id: 1,
                      name: "Modern Sofa",
                      price: 899.99,
                      image:
                        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
                      category: "Living Room",
                      isNew: true,
                    },
                    {
                      id: 2,
                      name: "Wooden Coffee Table",
                      price: 249.99,
                      image:
                        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1969&auto=format&fit=crop",
                      category: "Living Room",
                      discount: 15,
                    },
                    {
                      id: 3,
                      name: "Accent Chair",
                      price: 349.99,
                      image:
                        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop",
                      category: "Living Room",
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
                      name: "Queen Bed Frame",
                      price: 599.99,
                      image:
                        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
                      category: "Bedroom",
                      isNew: true,
                    },
                    {
                      id: 6,
                      name: "Dining Table",
                      price: 799.99,
                      image:
                        "https://images.unsplash.com/photo-1617104678098-de229db51175?q=80&w=2070&auto=format&fit=crop",
                      category: "Dining Room",
                    },
                    {
                      id: 7,
                      name: "Bookshelf",
                      price: 349.99,
                      image:
                        "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=2069&auto=format&fit=crop",
                      category: "Living Room",
                      discount: 10,
                    },
                    {
                      id: 8,
                      name: "Office Desk",
                      price: 449.99,
                      image:
                        "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=2070&auto=format&fit=crop",
                      category: "Office",
                    },
                    {
                      id: 9,
                      name: "Nightstand",
                      price: 149.99,
                      image:
                        "https://images.unsplash.com/photo-1551298370-9d3d53740c72?q=80&w=2013&auto=format&fit=crop",
                      category: "Bedroom",
                    },
                    {
                      id: 10,
                      name: "Dining Chairs (Set of 4)",
                      price: 599.99,
                      image:
                        "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=2073&auto=format&fit=crop",
                      category: "Dining Room",
                      isNew: true,
                    },
                    {
                      id: 11,
                      name: "TV Stand",
                      price: 299.99,
                      image:
                        "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=2070&auto=format&fit=crop",
                      category: "Living Room",
                    },
                    {
                      id: 12,
                      name: "Dresser",
                      price: 499.99,
                      image:
                        "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2070&auto=format&fit=crop",
                      category: "Bedroom",
                      discount: 20,
                    },
                    {
                      id: 13,
                      name: "Desk Chair",
                      price: 199.99,
                      image:
                        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2073&auto=format&fit=crop",
                      category: "Office",
                    },
                    {
                      id: 14,
                      name: "Side Table",
                      price: 129.99,
                      image:
                        "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=2035&auto=format&fit=crop",
                      category: "Living Room",
                    },
                    {
                      id: 15,
                      name: "Wardrobe",
                      price: 899.99,
                      image:
                        "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2070&auto=format&fit=crop",
                      category: "Bedroom",
                    },
                  ].map((product) => (
                    <Card key={product.id} className="overflow-hidden group">
                      <div className="relative">
                        <div className="aspect-square overflow-hidden">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={400}
                            height={400}
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        {product.isNew && (
                          <div className="absolute top-2 left-2 bg-teal-600 text-white text-xs font-medium px-2 py-1 rounded">
                            New
                          </div>
                        )}
                        {product.discount && (
                          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded">
                            {product.discount}% OFF
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button className="bg-white text-black hover:bg-white/90">Quick View</Button>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">{product.category}</p>
                          <h3 className="font-medium">{product.name}</h3>
                          <div className="flex items-center gap-2">
                            {product.discount ? (
                              <>
                                <p className="font-medium">
                                  €{((product.price * (100 - product.discount)) / 100).toFixed(2)}
                                </p>
                                <p className="text-sm text-muted-foreground line-through">
                                  €{product.price.toFixed(2)}
                                </p>
                              </>
                            ) : (
                              <p className="font-medium">€{product.price.toFixed(2)}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center space-x-2 mt-8">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="bg-teal-600 text-white hover:bg-teal-700">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

