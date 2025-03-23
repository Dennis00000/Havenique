import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Truck, Package, Clock, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Shipping Information - Havenique",
  description: "Learn about our shipping policies, delivery times, and shipping costs.",
}

export default function ShippingPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop"
            alt="Furniture delivery"
            fill
            className="object-cover"
          />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Shipping Information</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Everything you need to know about our shipping policies, delivery times, and costs.
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Overview */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg border">
              <div className="p-2 bg-primary/10 rounded-full">
                <Truck className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold">Free Shipping</h3>
              <p className="text-muted-foreground">
                Free standard shipping on all orders over $100 within the continental US.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg border">
              <div className="p-2 bg-primary/10 rounded-full">
                <Package className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold">Secure Packaging</h3>
              <p className="text-muted-foreground">
                All items are carefully packaged to ensure they arrive in perfect condition.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg border">
              <div className="p-2 bg-primary/10 rounded-full">
                <Clock className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold">Fast Delivery</h3>
              <p className="text-muted-foreground">Most in-stock items ship within 1-3 business days of ordering.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg border">
              <div className="p-2 bg-primary/10 rounded-full">
                <Globe className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold">International Shipping</h3>
              <p className="text-muted-foreground">
                We ship to select international destinations. Contact us for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Rates */}
      <section className="py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Shipping Rates</h2>
            <p className="max-w-[700px] text-muted-foreground">
              Our shipping rates vary based on the order value, destination, and shipping method.
            </p>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order Value</TableHead>
                  <TableHead>Standard Shipping</TableHead>
                  <TableHead>Express Shipping</TableHead>
                  <TableHead>Delivery Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Under €50</TableCell>
                  <TableCell>€9.99</TableCell>
                  <TableCell>€19.99</TableCell>
                  <TableCell>5-7 business days</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>€50 - €100</TableCell>
                  <TableCell>€5.99</TableCell>
                  <TableCell>€15.99</TableCell>
                  <TableCell>5-7 business days</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Over €100</TableCell>
                  <TableCell>FREE</TableCell>
                  <TableCell>€12.99</TableCell>
                  <TableCell>5-7 business days</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Large Furniture</TableCell>
                  <TableCell>Calculated at checkout</TableCell>
                  <TableCell>Calculated at checkout</TableCell>
                  <TableCell>7-14 business days</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="mt-6 text-sm text-muted-foreground">
            <p>* Shipping rates and delivery times are for the continental US only.</p>
            <p>* Alaska, Hawaii, and international shipping rates are calculated at checkout.</p>
            <p>* Express shipping is not available for large furniture items.</p>
          </div>
        </div>
      </section>

      {/* Delivery Information */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Delivery Information</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Delivery Times</h3>
                  <p className="text-muted-foreground">
                    Most in-stock items ship within 1-3 business days. Once shipped, standard delivery takes 5-7
                    business days, while express delivery takes 2-3 business days. Large furniture items may take 7-14
                    business days for delivery.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Tracking Your Order</h3>
                  <p className="text-muted-foreground">
                    Once your order ships, you'll receive a confirmation email with tracking information. You can also
                    track your order by logging into your account and viewing your order history.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Delivery Notifications</h3>
                  <p className="text-muted-foreground">
                    For large furniture items, our delivery partner will contact you to schedule a delivery date and
                    time window. Someone must be present to accept the delivery.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2070&auto=format&fit=crop"
                alt="Furniture packaging"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* International Shipping */}
      <section className="py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden h-[400px] order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2080&auto=format&fit=crop"
                alt="International furniture shipping"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex flex-col items-start space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">International Shipping</h2>
                <p className="text-muted-foreground">
                  We ship to select international destinations. Please note that international orders may be subject to
                  import duties and taxes.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-1">
                <div className="flex flex-col space-y-2 p-6 bg-background rounded-lg border">
                  <h3 className="text-xl font-bold">Shipping Destinations</h3>
                  <p className="text-muted-foreground">
                    We currently ship to Canada, the UK, Australia, and select European countries. Contact our customer
                    service team for availability to other destinations.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 p-6 bg-background rounded-lg border">
                  <h3 className="text-xl font-bold">Customs & Duties</h3>
                  <p className="text-muted-foreground">
                    International orders may be subject to import duties and taxes, which are the responsibility of the
                    recipient. These charges are not included in the shipping cost.
                  </p>
                </div>
                <div className="flex flex-col space-y-2 p-6 bg-background rounded-lg border">
                  <h3 className="text-xl font-bold">Delivery Times</h3>
                  <p className="text-muted-foreground">
                    International delivery times vary by destination. Generally, you can expect delivery within 10-20
                    business days after shipping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
            <p className="max-w-[700px] text-muted-foreground">
              Find answers to common questions about shipping and delivery.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How can I track my order?</h3>
              <p className="text-muted-foreground">
                Once your order ships, you'll receive a confirmation email with tracking information. You can also track
                your order by logging into your account and viewing your order history.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What if I'm not home for delivery?</h3>
              <p className="text-muted-foreground">
                For small items, the carrier may leave the package at your door or attempt delivery again. For large
                furniture items, you'll need to reschedule the delivery with our delivery partner.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you ship to PO boxes?</h3>
              <p className="text-muted-foreground">
                We cannot ship to PO boxes for most items. We require a physical address for delivery.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I change my shipping address after ordering?</h3>
              <p className="text-muted-foreground">
                You can request an address change within 24 hours of placing your order. Please contact our customer
                service team as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Need More Information?</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Our customer service team is here to help with any questions about shipping and delivery.
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

