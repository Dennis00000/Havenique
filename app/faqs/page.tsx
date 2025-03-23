import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQs - Havenique",
  description: "Frequently asked questions about our products, shipping, returns, and more.",
}

export default function FAQsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"
            alt="Furniture FAQs background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Find answers to common questions about our products, shipping, returns, and more.
            </p>
            <div className="w-full max-w-sm space-y-2">
              <div className="relative">
                <Input type="search" placeholder="Search questions..." className="pr-10" />
                <Button className="absolute right-0 top-0 h-full rounded-l-none bg-teal-600 hover:bg-teal-700">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <Button variant="outline" className="h-auto py-6 justify-center">
              Products
            </Button>
            <Button variant="outline" className="h-auto py-6 justify-center">
              Shipping & Delivery
            </Button>
            <Button variant="outline" className="h-auto py-6 justify-center">
              Returns & Refunds
            </Button>
            <Button variant="outline" className="h-auto py-6 justify-center">
              Orders & Payment
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Accordions with Images */}
      <section className="py-12 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold">Products</h2>
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
                    alt="Furniture products"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I know if a product is in stock?</AccordionTrigger>
                  <AccordionContent>
                    All products on our website show real-time availability. If an item is in stock, you'll see an "Add
                    to Cart" button. If it's out of stock, you'll see an "Out of Stock" or "Notify Me" button instead.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Do you offer customization options?</AccordionTrigger>
                  <AccordionContent>
                    Yes, many of our furniture pieces can be customized with different fabrics, colors, and finishes.
                    Look for the "Customize" option on product pages or contact our customer service team for more
                    information.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What materials do you use in your furniture?</AccordionTrigger>
                  <AccordionContent>
                    We use a variety of high-quality materials including solid hardwoods, engineered wood, premium
                    fabrics, genuine leather, and metal. Each product page lists the specific materials used in that
                    item.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I care for my furniture?</AccordionTrigger>
                  <AccordionContent>
                    Care instructions vary depending on the materials. We include care instructions with each purchase,
                    and you can also find detailed care guides on our website under the Support section.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold">Shipping & Delivery</h2>
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop"
                    alt="Furniture shipping"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How much does shipping cost?</AccordionTrigger>
                  <AccordionContent>
                    Shipping costs vary based on the product size, weight, and your location. We offer free shipping on
                    orders over $100. You can see the exact shipping cost at checkout before completing your purchase.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How long will it take to receive my order?</AccordionTrigger>
                  <AccordionContent>
                    Delivery times vary depending on the product and your location. In-stock items typically ship within
                    1-3 business days. Custom orders may take 4-8 weeks. You'll receive an estimated delivery date at
                    checkout.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we ship to select international destinations. International shipping costs and delivery times
                    vary by location. Please contact our customer service team for more information about shipping to
                    your country.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you offer assembly services?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer professional assembly services for an additional fee in select areas. You can add this
                    service at checkout if it's available in your location.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold">Returns & Refunds</h2>
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop"
                    alt="Furniture returns"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is your return policy?</AccordionTrigger>
                  <AccordionContent>
                    We offer a 30-day return policy for most items. The product must be in its original condition and
                    packaging. Custom orders are non-returnable unless there's a manufacturing defect.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I initiate a return?</AccordionTrigger>
                  <AccordionContent>
                    To initiate a return, log into your account and go to the "Order History" section. Find the order
                    you want to return and click "Return Items." Follow the instructions to complete the return process.
                    You can also contact our customer service team for assistance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How long does it take to process a refund?</AccordionTrigger>
                  <AccordionContent>
                    Once we receive your returned item, we'll inspect it and process your refund within 3-5 business
                    days. It may take an additional 5-10 business days for the refund to appear in your account,
                    depending on your payment method and financial institution.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do I have to pay for return shipping?</AccordionTrigger>
                  <AccordionContent>
                    Yes, customers are responsible for return shipping costs unless the return is due to a manufacturing
                    defect or if we sent the wrong item. We recommend keeping the original packaging for safe return
                    shipping.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold">Orders & Payment</h2>
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
                    alt="Furniture payment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple
                    Pay. For orders over $1,000, we also offer financing options through Affirm.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Can I modify or cancel my order?</AccordionTrigger>
                  <AccordionContent>
                    You can modify or cancel your order within 24 hours of placing it. After that, please contact our
                    customer service team as soon as possible, and we'll do our best to accommodate your request. Custom
                    orders cannot be modified or canceled once production has begun.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do you offer discounts or promotions?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we regularly offer seasonal sales and promotions. Sign up for our newsletter to stay informed
                    about upcoming sales. We also offer a 10% discount on your first order when you subscribe to our
                    newsletter.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Is my payment information secure?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we use industry-standard encryption and security measures to protect your payment information.
                    We are PCI compliant and never store your full credit card details on our servers.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Support Image Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=2065&auto=format&fit=crop"
                alt="Furniture customer support"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Still Have Questions?</h2>
              <p className="text-muted-foreground">
                Our customer service team is here to help you with any questions you may have. We're available Monday
                through Friday, 9am to 6pm EST.
              </p>
              <div className="space-y-2">
                <p className="font-medium">Contact us via:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Email: support@havenique.com</li>
                  <li>Phone: (800) 123-4567</li>
                  <li>Live Chat: Available on our website during business hours</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row pt-4">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline">
                  <Link href="/shipping">Shipping Information</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

