import { create } from "zustand"
import { persist } from "zustand/middleware"

// Define types
type Product = {
  id: number
  name: string
  price: number
  image?: string
  category?: string
  description?: string
  colors?: string[]
  inStock?: boolean
}

type CartItem = Product & {
  quantity: number
  color?: string
}

type StoreState = {
  cart: CartItem[]
  wishlist: Product[]
  searchQuery: string
  searchResults: Product[]
  isSearching: boolean

  // Cart actions
  addToCart: (product: Product, quantity?: number, color?: string) => void
  removeFromCart: (productId: number) => void
  updateCartItemQuantity: (productId: number, quantity: number) => void
  clearCart: () => void

  // Wishlist actions
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: number) => void
  isInWishlist: (productId: number) => boolean

  // Search actions
  setSearchQuery: (query: string) => void
  setSearchResults: (results: Product[]) => void
  setIsSearching: (isSearching: boolean) => void
}

// Create store with persistence
export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Initial state
      cart: [],
      wishlist: [],
      searchQuery: "",
      searchResults: [],
      isSearching: false,

      // Cart actions
      addToCart: (product, quantity = 1, color) => {
        const { cart } = get()
        const existingItem = cart.find((item) => item.id === product.id && (!color || item.color === color))

        if (existingItem) {
          set({
            cart: cart.map((item) =>
              item.id === product.id && (!color || item.color === color)
                ? { ...item, quantity: item.quantity + quantity }
                : item,
            ),
          })
        } else {
          set({
            cart: [...cart, { ...product, quantity, color }],
          })
        }
      },

      removeFromCart: (productId) => {
        const { cart } = get()
        set({
          cart: cart.filter((item) => item.id !== productId),
        })
      },

      updateCartItemQuantity: (productId, quantity) => {
        const { cart } = get()
        set({
          cart: cart.map((item) => (item.id === productId ? { ...item, quantity } : item)),
        })
      },

      clearCart: () => {
        set({ cart: [] })
      },

      // Wishlist actions
      addToWishlist: (product) => {
        const { wishlist } = get()
        const isInWishlist = wishlist.some((item) => item.id === product.id)

        if (isInWishlist) {
          set({
            wishlist: wishlist.filter((item) => item.id !== product.id),
          })
        } else {
          set({
            wishlist: [...wishlist, product],
          })
        }
      },

      removeFromWishlist: (productId) => {
        const { wishlist } = get()
        set({
          wishlist: wishlist.filter((item) => item.id !== productId),
        })
      },

      isInWishlist: (productId) => {
        const { wishlist } = get()
        return wishlist.some((item) => item.id === productId)
      },

      // Search actions
      setSearchQuery: (query) => {
        set({ searchQuery: query })
      },

      setSearchResults: (results) => {
        set({ searchResults: results })
      },

      setIsSearching: (isSearching) => {
        set({ isSearching })
      },
    }),
    {
      name: "havenique-store", // name for localStorage
    },
  ),
)

