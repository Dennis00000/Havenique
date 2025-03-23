import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us - Havenique",
  description: "Learn about our story, mission, and the team behind Havenique.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
              alt="Modern furniture workshop"
              fill
              className="object-cover"
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Havenique</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Creating beautiful spaces with quality furniture since 2010.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
                <p className="text-muted-foreground">
                  Havenique was founded in 2010 with a simple mission: to create beautiful, functional furniture that
                  transforms houses into homes. What started as a small workshop has grown into a beloved brand known
                  for quality craftsmanship and timeless design.
                </p>
                <p className="text-muted-foreground">
                  Our founder, Jane Smith, began with a passion for woodworking and an eye for design. After years in
                  the corporate furniture industry, she decided to create pieces that combined modern aesthetics with
                  traditional craftsmanship.
                </p>
                <p className="text-muted-foreground">
                  Today, we work with skilled artisans and designers from around the world to create furniture that's
                  not just beautiful, but built to last for generations.
                </p>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=2065&auto=format&fit=crop"
                  alt="Our workshop"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
              <p className="max-w-[700px] text-muted-foreground">
                The principles that guide everything we do at Furnish.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg">
                <div className="p-2 bg-primary/10 rounded-full">
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
                    className="h-6 w-6 text-teal-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Quality</h3>
                <p className="text-muted-foreground">
                  We never compromise on materials or craftsmanship. Every piece is built to last.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg">
                <div className="p-2 bg-primary/10 rounded-full">
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
                    className="h-6 w-6 text-teal-600"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Design</h3>
                <p className="text-muted-foreground">
                  We believe in timeless design that balances form and function beautifully.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg">
                <div className="p-2 bg-primary/10 rounded-full">
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
                    className="h-6 w-6 text-teal-600"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to responsible sourcing and minimizing our environmental impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Meet Our Team</h2>
              <p className="max-w-[700px] text-muted-foreground">
                The talented people behind Furnish who make it all possible.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Dennis Opoola",
                  role: "Founder & CEO",
                  image:
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
                },
                {
                  name: "Michael Chen",
                  role: "Head of Design",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
                },
                {
                  name: "Sarah Johnson",
                  role: "Production Manager",
                  image:
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
                },
                {
                  name: "David Kim",
                  role: "Customer Experience",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
                },
              ].map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-2">
                  <div className="relative w-32 h-32 overflow-hidden rounded-full">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Workshop */}
        <section className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Our Workshop</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Where craftsmanship meets innovation to create beautiful furniture.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=2065&auto=format&fit=crop"
                  alt="Woodworking workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
                  alt="Furniture design studio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop"
                  alt="Finished furniture showcase"
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
              <h2 className="text-3xl font-bold tracking-tighter">Join Our Journey</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                We're always looking for talented people to join our team.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  <Link href="/careers">View Careers</Link>
                </Button>
                <Button variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

