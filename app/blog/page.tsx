import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Blog - Havenique",
  description: "Read our latest articles about furniture design, home decor, and interior design trends.",
}

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop"
              alt="Modern living room"
              fill
              className="object-cover"
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Blog</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Insights, tips, and trends in furniture design and home decor.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <div className="relative">
                  <Input type="search" placeholder="Search articles..." className="pr-10" />
                  <Button className="absolute right-0 top-0 h-full rounded-l-none bg-teal-600 hover:bg-teal-700">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
                  alt="Featured article image"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured</div>
                <h2 className="text-3xl font-bold tracking-tighter">
                  How to Choose the Perfect Sofa for Your Living Room
                </h2>
                <p className="text-muted-foreground">
                  A sofa is more than just a piece of furniture—it's the centerpiece of your living room and a
                  significant investment. In this guide, we'll walk you through everything you need to consider when
                  choosing the perfect sofa for your space.
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
                      alt="Author"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">May 15, 2023 • 8 min read</p>
                  </div>
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700">Read More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Latest Articles</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Stay up to date with the latest trends and tips in furniture and interior design.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "10 Small Space Furniture Solutions",
                  excerpt:
                    "Maximize your small living space with these clever furniture solutions that don't compromise on style.",
                  image:
                    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
                  author: "Michael Chen",
                  date: "April 28, 2023",
                  readTime: "6 min read",
                  category: "Small Spaces",
                },
                {
                  title: "The Art of Mixing Wood Tones in Your Home",
                  excerpt:
                    "Learn how to confidently mix different wood tones to create a cohesive and stylish interior design.",
                  image:
                    "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1974&auto=format&fit=crop",
                  author: "Emma Wilson",
                  date: "April 15, 2023",
                  readTime: "5 min read",
                  category: "Design Tips",
                },
                {
                  title: "Sustainable Furniture: What to Look For",
                  excerpt:
                    "A guide to identifying truly sustainable furniture and making eco-friendly choices for your home.",
                  image:
                    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop",
                  author: "David Kim",
                  date: "April 3, 2023",
                  readTime: "7 min read",
                  category: "Sustainability",
                },
                {
                  title: "Color Psychology in Interior Design",
                  excerpt:
                    "How different colors affect mood and atmosphere, and how to use this knowledge in your home.",
                  image:
                    "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2069&auto=format&fit=crop",
                  author: "Lisa Patel",
                  date: "March 22, 2023",
                  readTime: "6 min read",
                  category: "Color Theory",
                },
                {
                  title: "The Return of Vintage Furniture Styles",
                  excerpt: "Explore how classic furniture designs are making a comeback in contemporary homes.",
                  image:
                    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop",
                  author: "James Wilson",
                  date: "March 10, 2023",
                  readTime: "5 min read",
                  category: "Trends",
                },
                {
                  title: "How to Care for Different Furniture Materials",
                  excerpt:
                    "Maintenance tips to keep your wood, leather, fabric, and metal furniture looking its best for years.",
                  image:
                    "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=2065&auto=format&fit=crop",
                  author: "Sarah Johnson",
                  date: "February 28, 2023",
                  readTime: "8 min read",
                  category: "Maintenance",
                },
              ].map((article, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={500}
                      height={300}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                    <div className="absolute top-2 left-2">
                      <div className="inline-block rounded-lg bg-background px-3 py-1 text-xs font-medium">
                        {article.category}
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{article.title}</CardTitle>
                    <CardDescription>{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="relative h-8 w-8 overflow-hidden rounded-full">
                        <Image
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                          alt={article.author}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{article.author}</p>
                        <p className="text-xs text-muted-foreground">
                          {article.date} • {article.readTime}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Read Article
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline">Load More Articles</Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Subscribe to Our Newsletter</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Get the latest articles, design tips, and furniture inspiration delivered to your inbox.
              </p>
              <div className="w-full max-w-md space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input type="email" placeholder="Enter your email" className="flex-1" />
                  <Button className="bg-teal-600 hover:bg-teal-700">Subscribe</Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

