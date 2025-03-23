import type { Metadata } from "next"
import ProductClientPage from "./ProductClientPage"

export const metadata: Metadata = {
  title: "Product Details - Havenique",
  description: "View detailed information about our furniture products.",
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductClientPage params={params} />
}

