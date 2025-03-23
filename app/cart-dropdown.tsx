"use client"

import { useState, useEffect } from "react"
import { useCart } from "@/context/CartContext"
import Link from "next/link"

const CartDropdown = () => {
  const { cart, removeFromCart } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const closeDropdown = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        event.target instanceof Node &&
        !document.getElementById("cart-dropdown")?.contains(event.target) &&
        !document.getElementById("cart-button")?.contains(event.target)
      ) {
        closeDropdown()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const subtotal = calculateSubtotal()

  return (
    <div className="relative">
      <button
        id="cart-button"
        onClick={toggleDropdown}
        className="text-gray-700 hover:text-gray-900 focus:outline-none"
      >
        Cart ({cart.length})
      </button>

      {isOpen && (
        <div
          id="cart-dropdown"
          className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10"
        >
          <div className="py-2">
            {cart.length === 0 ? (
              <div className="px-4 py-2 text-gray-600">Your cart is empty.</div>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between px-4 py-2 hover:bg-gray-100">
                    <div>
                      <Link href={`/products/${item.id}`}>
                        <p className="text-sm font-medium text-gray-800 hover:underline">{item.name}</p>
                      </Link>
                      <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-sm text-gray-700">€{(item.price * item.quantity).toFixed(2)}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
                <div className="px-4 py-2 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-800">Subtotal:</p>
                    <p className="text-sm text-gray-800">€{subtotal.toFixed(2)}</p>
                  </div>
                  <Link href="/cart">
                    <button
                      onClick={closeDropdown}
                      className="mt-2 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      View Cart
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default CartDropdown

