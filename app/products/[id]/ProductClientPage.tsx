"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Heart, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductCard from "@/components/product-card"

export default function ProductClientPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm mb-6">
            <Link href="/" className="text-gray-500 hover:text-gray-900">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-1 text-gray-500" />
            <Link href="/shop" className="text-gray-500 hover:text-gray-900">
              Shop
            </Link>
            <ChevronRight className="h-4 w-4 mx-1 text-gray-500" />
            <span className="font-medium">Modern Sofa {params.id}</span>
          </div>

          {/* Product Details */}
          <ProductDetails productId={params.id} />

          {/* Product Tabs */}
          <Tabs defaultValue="description" className="mb-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews (24)</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="p-6 border rounded-b-lg">
              <div className="space-y-4">
                <p>
                  This modern sofa is the perfect centerpiece for any contemporary living space. Designed with both
                  style and comfort in mind, it features clean lines, premium upholstery, and expert craftsmanship.
                </p>
                <p>
                  The high-density foam cushions provide exceptional comfort and support, while the sturdy hardwood
                  frame ensures lasting durability. The fabric upholstery is both soft to the touch and easy to clean,
                  making it ideal for everyday use.
                </p>
                <p>
                  Available in a range of colors to complement any interior design scheme, this sofa is versatile enough
                  to work in both formal and casual settings. Its thoughtful proportions make it suitable for spaces of
                  various sizes.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="p-6 border rounded-b-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Dimensions</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Width:</span> 220 cm
                    </li>
                    <li>
                      <span className="font-medium">Depth:</span> 95 cm
                    </li>
                    <li>
                      <span className="font-medium">Height:</span> 85 cm
                    </li>
                    <li>
                      <span className="font-medium">Seat Height:</span> 45 cm
                    </li>
                    <li>
                      <span className="font-medium">Weight:</span> 45 kg
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Materials</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <span className="font-medium">Frame:</span> Solid hardwood
                    </li>
                    <li>
                      <span className="font-medium">Upholstery:</span> 100% polyester fabric
                    </li>
                    <li>
                      <span className="font-medium">Cushions:</span> High-density foam
                    </li>
                    <li>
                      <span className="font-medium">Legs:</span> Solid oak wood
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="p-6 border rounded-b-lg">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Customer Reviews</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">Based on 24 reviews</span>
                    </div>
                  </div>
                  <Button>Write a Review</Button>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      name: "John Doe",
                      date: "January 15, 2023",
                      rating: 5,
                      comment:
                        "This sofa exceeded my expectations! It's comfortable, stylish, and the quality is excellent. The delivery was prompt and the assembly was straightforward. Highly recommend!",
                      image:
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
                    },
                    {
                      name: "Sarah Smith",
                      date: "December 10, 2022",
                      rating: 4,
                      comment:
                        "Beautiful sofa that fits perfectly in my living room. The fabric is durable and easy to clean. The only reason I'm giving 4 stars instead of 5 is that it took longer than expected to arrive.",
                      image:
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
                    },
                    {
                      name: "Michael Johnson",
                      date: "November 22, 2022",
                      rating: 5,
                      comment:
                        "Absolutely love this sofa! It's the perfect combination of style and comfort. The color is exactly as shown in the photos, and it's held up well with daily use.",
                      image:
                        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
                    },
                  ].map((review, i) => (
                    <div key={i} className="border-b pb-4">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="relative h-8 w-8 overflow-hidden rounded-full">
                            <Image
                              src={review.image || "/placeholder.svg"}
                              alt={review.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{review.name}</div>
                            <div className="text-sm text-gray-500">{review.date}</div>
                          </div>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  id: 1,
                  name: "Modern Armchair",
                  price: 399.99,
                  image:
                    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop",
                  category: "Chair",
                },
                {
                  id: 2,
                  name: "Coffee Table",
                  price: 249.99,
                  image:
                    "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1969&auto=format&fit=crop",
                  category: "Table",
                },
                {
                  id: 3,
                  name: "Floor Lamp",
                  price: 129.99,
                  image:
                    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1974&auto=format&fit=crop",
                  category: "Lighting",
                },
                {
                  id: 4,
                  name: "Decorative Cushion",
                  price: 49.99,
                  image:
                    "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1974&auto=format&fit=crop",
                  category: "Accessories",
                },
              ].map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// Product Details Component with client-side functionality
function ProductDetails({ productId }: { productId: string }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("teal")
  const [inWishlist, setInWishlist] = useState(false)

  // Product data based on ID
  const productImages = {
    "1": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    "2": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop",
    "3": "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1969&auto=format&fit=crop",
    "4": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1974&auto=format&fit=crop",
    default: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
  }

  const productData = {
    id: Number.parseInt(productId),
    name: `Modern Sofa ${productId}`,
    price: 499.99,
    image: productImages[productId] || productImages.default,
    category: "Sofas",
  }

  const handleToggleWishlist = () => {
    setInWishlist(!inWishlist)
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {/* Product Images */}
      <div className="space-y-4">
        <div className="overflow-hidden rounded-lg border">
          <Image
            src={productData.image || "/placeholder.svg"}
            alt="Product Image"
            width={600}
            height={600}
            className="w-full object-cover"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="overflow-hidden rounded-lg border cursor-pointer">
              <Image
                src={`https://images.unsplash.com/photo-${
                  i === 1
                    ? "1555041469-a586c61ea9bc"
                    : i === 2
                      ? "1598300042247-d088f8ab3a91"
                      : i === 3
                        ? "1493663284031-b7e3aefcae8e"
                        : "1586023492125-27b2c045efd7"
                }?q=80&w=1974&auto=format&fit=crop`}
                alt={`Product Image ${i}`}
                width={150}
                height={150}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{productData.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className={`h-5 w-5 ${i <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
              ))}
            </div>
            <span className="text-sm text-gray-500">(24 reviews)</span>
          </div>
        </div>

        <div className="text-3xl font-bold">€{productData.price.toFixed(2)}</div>

        <p className="text-gray-600">
          This modern sofa combines style and comfort with its sleek design and premium materials. Perfect for
          contemporary living spaces, it features high-density foam cushions and a sturdy hardwood frame for lasting
          durability.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Color</h3>
            <div className="flex gap-2">
              <div
                className={`w-8 h-8 rounded-full bg-teal-600 cursor-pointer ${selectedColor === "teal" ? "ring-2 ring-offset-2 ring-teal-600" : ""}`}
                onClick={() => setSelectedColor("teal")}
              />
              <div
                className={`w-8 h-8 rounded-full bg-blue-600 cursor-pointer ${selectedColor === "blue" ? "ring-2 ring-offset-2 ring-blue-600" : ""}`}
                onClick={() => setSelectedColor("blue")}
              />
              <div
                className={`w-8 h-8 rounded-full bg-gray-800 cursor-pointer ${selectedColor === "gray" ? "ring-2 ring-offset-2 ring-gray-800" : ""}`}
                onClick={() => setSelectedColor("gray")}
              />
              <div
                className={`w-8 h-8 rounded-full bg-amber-700 cursor-pointer ${selectedColor === "amber" ? "ring-2 ring-offset-2 ring-amber-700" : ""}`}
                onClick={() => setSelectedColor("amber")}
              />
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Quantity</h3>
            <div className="flex items-center">
              <Button variant="outline" size="icon" className="h-10 w-10 rounded-r-none" onClick={decreaseQuantity}>
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="h-10 w-12 flex items-center justify-center border-y">{quantity}</div>
              <Button variant="outline" size="icon" className="h-10 w-10 rounded-l-none" onClick={increaseQuantity}>
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-teal-600 hover:bg-teal-700" size="lg">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleToggleWishlist}
            className={inWishlist ? "border-red-300 text-red-500" : ""}
          >
            <Heart className={`mr-2 h-5 w-5 ${inWishlist ? "fill-red-500 text-red-500" : ""}`} />
            {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <Share2 className="h-5 w-5" />
            <span className="sr-only">Share</span>
          </Button>
        </div>

        <div className="border-t pt-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">SKU:</span> FRN-{productId}001
            </div>
            <div>
              <span className="font-medium">Category:</span> Sofas
            </div>
            <div>
              <span className="font-medium">Material:</span> Fabric, Wood
            </div>
            <div>
              <span className="font-medium">Dimensions:</span> 220 x 95 x 85 cm
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

