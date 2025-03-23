import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { AccountNav } from "@/components/account-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "Help Center",
  description: "Get help with your orders, returns, and account.",
}

export default function HelpPage() {
  return (
    <main className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] px-4 md:px-6 py-12">
      <aside className="hidden md:block">
        <AccountNav />
      </aside>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Help Center</h1>
          <p className="text-muted-foreground">Get help with your orders, returns, and account.</p>
        </div>

        {/* Search */}
        <div className="relative">
          <Input type="search" placeholder="Search for help..." className="pl-10 pr-4 py-2 w-full" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>

        {/* Popular Topics */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Popular Topics</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Orders & Shipping",
                description: "Track your order, shipping information, and delivery status",
                image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "Returns & Refunds",
                description: "How to return items and get refunds for your purchases",
                image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1974&auto=format&fit=crop",
              },
              {
                title: "Product Information",
                description: "Details about our furniture, materials, and care instructions",
                image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "Account & Payments",
                description: "Manage your account settings and payment methods",
                image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=1974&auto=format&fit=crop",
              },
              {
                title: "Assembly & Installation",
                description: "Instructions for assembling and installing your furniture",
                image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=2065&auto=format&fit=crop",
              },
              {
                title: "Contact Customer Service",
                description: "Get in touch with our customer service team",
                image: "https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop",
              },
            ].map((topic, index) => (
              <div key={index} className="rounded-lg border overflow-hidden">
                <div className="relative h-40">
                  <Image src={topic.image || "/placeholder.svg"} alt={topic.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">{topic.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{topic.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Articles
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Your Recent Orders</h2>
          <div className="space-y-4">
            {[
              {
                id: "ORD-12345",
                date: "May 15, 2023",
                status: "Delivered",
                items: [
                  {
                    name: "Modern Sofa",
                    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
                  },
                ],
              },
              {
                id: "ORD-12344",
                date: "April 2, 2023",
                status: "Delivered",
                items: [
                  {
                    name: "Floor Lamp",
                    image:
                      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1974&auto=format&fit=crop",
                  },
                ],
              },
            ].map((order, index) => (
              <div key={index} className="rounded-lg border p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="font-medium">Order #{order.id}</div>
                    <div className="text-sm text-muted-foreground">Placed on {order.date}</div>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Status: </span>
                    <span className={order.status === "Delivered" ? "text-green-600" : "text-amber-600"}>
                      {order.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-md flex-shrink-0">
                    <Image
                      src={order.items[0].image || "/placeholder.svg"}
                      alt={order.items[0].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{order.items[0].name}</div>
                    <div className="text-sm text-muted-foreground">
                      {order.items.length > 1 ? `+ ${order.items.length - 1} more items` : ""}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Get Help
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/orders/${order.id}`}>View Order</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "How do I track my order?",
                answer:
                  "You can track your order by logging into your account and visiting the Orders section. There you'll find tracking information for all your recent purchases.",
              },
              {
                question: "What is your return policy?",
                answer:
                  "We offer a 30-day return policy for most items in their original condition. Custom orders may have different return terms. Please visit our Returns page for detailed information.",
              },
              {
                question: "How do I assemble my furniture?",
                answer:
                  "Each piece of furniture comes with detailed assembly instructions. You can also find assembly videos on our website or contact customer service for assistance.",
              },
              {
                question: "Do you offer assembly services?",
                answer:
                  "Yes, we offer professional assembly services for an additional fee. You can add this service during checkout or contact our customer service team to arrange it after purchase.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg border p-4">
                <h3 className="font-medium mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="rounded-lg border p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/2">
              <h2 className="text-xl font-bold mb-2">Still Need Help?</h2>
              <p className="text-muted-foreground mb-4">
                Our customer service team is available to assist you with any questions or concerns.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-teal-600"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+1 (800) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-teal-600"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>support@havenique.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-teal-600"
                  >
                    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Live Chat (9AM - 6PM EST)</span>
                </div>
              </div>
              <Button className="mt-4 bg-teal-600 hover:bg-teal-700">Contact Us</Button>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-60 w-full overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop"
                  alt="Customer service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

