"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CartDropdown } from "@/components/cart-dropdown"
import { ProfileDropdown } from "@/components/profile-dropdown"
import { SearchDialog } from "@/components/search-dialog"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-950">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold">Havenique</span>
        </Link>

        <div className="hidden md:flex items-center justify-center flex-1">
          <nav className="flex items-center space-x-8">
            <div className="relative group">
              <Link
                href="/shop"
                className="text-sm font-medium transition-colors hover:text-teal-600 flex items-center"
              >
                Shop
              </Link>
              <div className="absolute left-0 top-full mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link href="/shop" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    All Products
                  </Link>
                  <Link href="/shop/living-room" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Living Room
                  </Link>
                  <Link href="/shop/bedroom" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Bedroom
                  </Link>
                  <Link href="/shop/dining-room" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Dining Room
                  </Link>
                  <Link href="/shop/office" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Office
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/products" className="text-sm font-medium transition-colors hover:text-teal-600">
              Products
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-teal-600">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-teal-600">
              Contact
            </Link>
          </nav>
        </div>

        <div className="ml-auto flex items-center space-x-1">
          <SearchDialog />
          <CartDropdown />
          <ProfileDropdown />
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white pt-16 dark:bg-gray-950 md:hidden">
          <div className="container flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">Havenique</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container flex-1 overflow-auto px-4 py-8">
            <ul className="space-y-6">
              <li>
                <Link href="/shop" className="text-lg font-medium" onClick={toggleMenu}>
                  Shop
                </Link>
              </li>
              <li className="pl-4">
                <Link href="/shop/living-room" className="text-base font-medium" onClick={toggleMenu}>
                  Living Room
                </Link>
              </li>
              <li className="pl-4">
                <Link href="/shop/bedroom" className="text-base font-medium" onClick={toggleMenu}>
                  Bedroom
                </Link>
              </li>
              <li className="pl-4">
                <Link href="/shop/dining-room" className="text-base font-medium" onClick={toggleMenu}>
                  Dining Room
                </Link>
              </li>
              <li className="pl-4">
                <Link href="/shop/office" className="text-base font-medium" onClick={toggleMenu}>
                  Office
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-lg font-medium" onClick={toggleMenu}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-lg font-medium" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-lg font-medium" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
              <li className="pt-6">
                <Link href="/account" className="text-lg font-medium" onClick={toggleMenu}>
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-lg font-medium" onClick={toggleMenu}>
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/orders" className="text-lg font-medium" onClick={toggleMenu}>
                  Orders
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

