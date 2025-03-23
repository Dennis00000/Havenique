"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Loader2, Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useStore } from "@/lib/store"

// Mock product data for search
const mockProducts = [
  {
    id: 1,
    name: "Modern Leather Sofa",
    price: 899.99,
    category: "Living Room",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Accent Coffee Table",
    price: 349.98,
    category: "Living Room",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Minimalist Desk Lamp",
    price: 79.99,
    category: "Lighting",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Decorative Wall Mirror",
    price: 299.99,
    category: "Decor",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Queen Size Platform Bed",
    price: 599.99,
    category: "Bedroom",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    name: "Ergonomic Office Chair",
    price: 249.99,
    category: "Office",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function SearchDialog() {
  const [open, setOpen] = useState(false)
  const { searchQuery, setSearchQuery, searchResults, setSearchResults, isSearching, setIsSearching } = useStore()
  const router = useRouter()

  // Simulate search functionality
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    setIsSearching(true)

    // Simulate API call delay
    const timer = setTimeout(() => {
      const results = mockProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setSearchResults(results)
      setIsSearching(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [searchQuery, setSearchResults, setIsSearching])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setOpen(false)
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleProductClick = () => {
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <div className="space-y-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              className="pl-10 pr-10"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            {searchQuery && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 text-gray-500"
                onClick={() => setSearchQuery("")}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Clear search</span>
              </Button>
            )}
          </form>

          <div className="max-h-[400px] overflow-y-auto">
            {isSearching ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
              </div>
            ) : searchQuery && searchResults.length === 0 ? (
              <div className="py-8 text-center">
                <p className="text-gray-500">No results found for "{searchQuery}"</p>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {searchResults.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="flex items-center gap-4 rounded-lg border p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
                    onClick={handleProductClick}
                  >
                    <div className="relative h-16 w-16 overflow-hidden rounded-md bg-gray-100">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="object-cover"
                        fill
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{product.name}</h4>
                      <p className="text-sm text-gray-500">{product.category}</p>
                      <p className="text-sm font-medium">${product.price.toFixed(2)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {searchResults.length > 0 && (
            <div className="flex justify-center">
              <Button variant="outline" onClick={handleSearch} className="w-full">
                View all results
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

