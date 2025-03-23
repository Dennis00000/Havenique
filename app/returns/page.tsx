import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { RefreshCcw, Package, CheckCircle, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Returns & Refunds - Havenique",
  description: "Learn about our return policy, refund process, and how to initiate a return.",
}

export default function ReturnsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
            alt="Furniture returns"
            fill
            className="object-cover"
          />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Returns & Refunds</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              We want you to be completely satisfied with your purchase. Learn about our return policy and refund
              process.
            </p>
          </div>
        </div>
      </section>

      {/* Return Policy Overview */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg border">
              <div className="p-2 bg-primary/10 rounded-full">
                <RefreshCcw className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold">30-Day Returns</h3>
              <p className="text-muted-foreground">Return most items within 30 days of delivery for a full refund.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg border">
              <div className="p-2 bg-primary/10 rounded-full">
                <Package className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold">Original Packaging</h3>
              <p className="text-muted-foreground">
                Items must be returned in their original packaging to be eligible for a refund.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg border">
              <div className="p-2 bg-primary/10 rounded-full">
                <CheckCircle className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold">Easy Process</h3>
              <p className="text-muted-foreground">
                Initiate returns online through your account or by contacting customer service.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg border">
              <div className="p-2 bg-primary/10 rounded-full">
                <AlertCircle className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold">Exceptions</h3>
              <p className="text-muted-foreground">
                Some items, such as custom orders, may not be eligible for return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Return Policy Details */}
      <section className="py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="flex flex-col items-start space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Return Policy Details</h2>
                <p className="text-muted-foreground">Our comprehensive return policy to ensure your satisfaction.</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Eligible Items</h3>
                  <p className="text-muted-foreground">
                    Most items can be returned within 30 days of delivery. The item must be in its original condition,
                    unused, and in its original packaging with all tags and labels attached.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Non-Returnable Items</h3>
                  <p className="text-muted-foreground">The following items cannot be returned:</p>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Custom or personalized orders</li>
                    <li>Items marked as final sale or clearance</li>
                    <li>Items that have been used, assembled, or show signs of wear</li>
                    <li>Gift cards</li>
                    <li>Items missing original packaging, tags, or accessories</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop"
                alt="Furniture return policy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Refund Process */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden h-[400px] order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
                alt="Furniture refund process"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex flex-col items-start space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Refund Process</h2>
                <p className="text-muted-foreground">How we process refunds and what to expect.</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-1">
                <div className="flex flex-col space-y-2 p-6 bg-background rounded-lg border">
                  <h3 className="text-xl font-bold">Processing Time</h3>
                  <p className="text-muted-foreground">
                    Once we receive your return, we'll inspect the item and process your refund within 3-5 business
                    days. You'll receive an email notification when your refund is processed.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 p-6 bg-background rounded-lg border">
                  <h3 className="text-xl font-bold">Refund Method</h3>
                  <p className="text-muted-foreground">
                    Refunds will be issued to the original payment method used for the purchase. If you paid by credit
                    card, it may take an additional 5-10 business days for the refund to appear on your statement.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 p-6 bg-background rounded-lg border">
                  <h3 className="text-xl font-bold">Partial Refunds</h3>
                  <p className="text-muted-foreground">
                    We may issue partial refunds if items are returned in a condition that shows signs of use, are
                    damaged, or have missing parts. Return shipping costs may also be deducted from your refund.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Return */}
      <section className="py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">How to Return an Item</h2>
            <p className="max-w-[700px] text-muted-foreground">Follow these simple steps to return your item.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg border">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-600 text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-bold">Initiate Return</h3>
              <p className="text-muted-foreground">
                Log into your account, find the order, and click "Return Items." Alternatively, contact our customer
                service team.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg border">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-600 text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-bold">Print Label</h3>
              <p className="text-muted-foreground">
                Print the return shipping label provided (if applicable) or use your preferred shipping method.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg border">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-600 text-white font-bold">
                3
              </div>
              <h3 className="text-xl font-bold">Package Item</h3>
              <p className="text-muted-foreground">
                Securely package the item in its original packaging with all tags, labels, and accessories.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg border">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-600 text-white font-bold">
                4
              </div>
              <h3 className="text-xl font-bold">Ship Return</h3>
              <p className="text-muted-foreground">
                Drop off the package at the designated shipping carrier or schedule a pickup for large items.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Service */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="flex flex-col items-start space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">Find answers to common questions about returns and refunds.</p>
              </div>
              <div className="grid gap-6 md:grid-cols-1">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Can I return a gift?</h3>
                  <p className="text-muted-foreground">
                    Yes, gifts can be returned for store credit or exchange. You'll need the order number or gift
                    receipt.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">What if I received the wrong item?</h3>
                  <p className="text-muted-foreground">
                    If you received the wrong item, please contact our customer service team immediately. We'll arrange
                    for a return and send you the correct item at no additional cost.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Can I return an item after 30 days?</h3>
                  <p className="text-muted-foreground">
                    Returns after 30 days are evaluated on a case-by-case basis. Please contact our customer service
                    team for assistance.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=2065&auto=format&fit=crop"
                alt="Furniture customer service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Need Help with a Return?</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Our customer service team is here to assist you with any questions about returns or refunds.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-teal-600 hover:bg-teal-700">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline">
                <Link href="/faqs">View FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

