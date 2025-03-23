import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-white dark:bg-gray-950">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Havenique</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Discover your perfect space with our curated collection of stylish and comfortable furniture.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-teal-600 dark:text-gray-400"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-teal-600 dark:text-gray-400"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-teal-600 dark:text-gray-400"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-gray-500 hover:text-teal-600 dark:text-gray-400">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop/living-room" className="text-gray-500 hover:text-teal-600 dark:text-gray-400">
                  Living Room
                </Link>
              </li>
              <li>
                <Link href="/shop/bedroom" className="text-gray-500 hover:text-teal-600 dark:text-gray-400">
                  Bedroom
                </Link>
              </li>
              <li>
                <Link href="/shop/dining-room" className="text-gray-500 hover:text-teal-600 dark:text-gray-400">
                  Dining Room
                </Link>
              </li>
              <li>
                <Link href="/shop/office" className="text-gray-500 hover:text-teal-600 dark:text-gray-400">
                  Office
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-teal-600 dark:text-gray-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-500 hover:text-teal-600 dark:text-gray-400">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-500 hover:text-teal-600 dark:text-gray-400">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-500 hover:text-teal-600 dark:text-gray-400">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-teal-600 dark:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-teal-600 dark:text-gray-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-500 hover:text-teal-600 dark:text-gray-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-500 hover:text-teal-600 dark:text-gray-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Havenique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

