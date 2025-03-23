import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Filter, Grid3X3, List } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { ProductCard } from "@/components/product-card"

export const metadata: Metadata = {
  title: "Office Furniture | Havenique",
  description: "Discover our collection of stylish and comfortable office furniture.",
}

export default function OfficePage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      {/* Hero Banner */}
      <div className="relative h-[300px] overflow-hidden rounded-lg mb-8">
        <Image
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"
          alt="Office furniture collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Office Collection</h1>
            <p className="text-lg md:text-xl max-w-[600px] mx-auto">
              Create a productive workspace with our stylish office furniture
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/shop" className="hover:text-foreground">
          Shop
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="font-medium text-foreground">Office</span>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="space-y-6">
          <div>
            <h3 className="mb-4 text-lg font-medium">Categories</h3>
            <div className="space-y-2">
              <Link href="/shop" className="block text-muted-foreground hover:text-foreground">
                All Categories
              </Link>
              <Link href="/shop/living-room" className="block text-muted-foreground hover:text-foreground">
                Living Room
              </Link>
              <Link href="/shop/bedroom" className="block text-muted-foreground hover:text-foreground">
                Bedroom
              </Link>
              <Link href="/shop/dining-room" className="block text-muted-foreground hover:text-foreground">
                Dining Room
              </Link>
              <Link href="/shop/office" className="block font-medium text-foreground">
                Office
              </Link>
            </div>
          </div>
          <Separator />
          <div>
            <h3 className="mb-4 text-lg font-medium">Price Range</h3>
            <Slider defaultValue={[0, 1000]} max={2000} step={1} />
            <div className="mt-4 flex items-center space-x-2">
              <Input placeholder="Min" type="number" />
              <span>-</span>
              <Input placeholder="Max" type="number" />
            </div>
          </div>
          <Separator />
          <div>
            <h3 className="mb-4 text-lg font-medium">Filter by</h3>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-sm font-medium">Material</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="material-wood" />
                    <Label htmlFor="material-wood">Wood</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="material-fabric" />
                    <Label htmlFor="material-fabric">Fabric</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="material-leather" />
                    <Label htmlFor="material-leather">Leather</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="material-metal" />
                    <Label htmlFor="material-metal">Metal</Label>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-medium">Color</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="color-black" />
                    <Label htmlFor="color-black">Black</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="color-white" />
                    <Label htmlFor="color-white">White</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="color-gray" />
                    <Label htmlFor="color-gray">Gray</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="color-brown" />
                    <Label htmlFor="color-brown">Brown</Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Separator />
          <div>
            <h3 className="mb-4 text-lg font-medium">Sort by</h3>
            <RadioGroup defaultValue="recommended">
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="recommended" value="recommended" />
                <Label htmlFor="recommended">Recommended</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="price-low-high" value="price-low-high" />
                <Label htmlFor="price-low-high">Price: Low to High</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="price-high-low" value="price-high-low" />
                <Label htmlFor="price-high-low">Price: High to Low</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="newest" value="newest" />
                <Label htmlFor="newest">Newest</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Office Furniture</h1>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <Grid3X3 className="h-4 w-4" />
                <span className="sr-only">Grid view</span>
              </Button>
              <Button variant="outline" size="icon">
                <List className="h-4 w-4" />
                <span className="sr-only">List view</span>
              </Button>
              <Button variant="outline" size="sm" className="md:hidden">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              id="19"
              name="Office Desk"
              price={499.99}
              category="office"
              image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"
            />
            <ProductCard
              id="20"
              name="Office Chair"
              price={299.99}
              category="office"
              image="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1974&auto=format&fit=crop"
            />
            <ProductCard
              id="21"
              name="Bookshelf"
              price={349.99}
              category="office"
              image="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1970&auto=format&fit=crop"
            />
            <ProductCard
              id="22"
              name="Filing Cabinet"
              price={199.99}
              category="office"
              image="https://images.unsplash.com/photo-1551645120-d70bfe84c826?q=80&w=1974&auto=format&fit=crop"
            />
            <ProductCard
              id="23"
              name="Desk Lamp"
              price={79.99}
              category="office"
              image="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1974&auto=format&fit=crop"
            />
            <ProductCard
              id="24"
              name="Office Storage"
              price={249.99}
              category="office"
              image="https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?q=80&w=2036&auto=format&fit=crop"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

