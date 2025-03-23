import Link from "next/link"
import { CardFooter } from "@/components/ui/card"
import { CardContent } from "@/components/ui/card"
import { CardDescription } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
export default function CareersPage() {
  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Team</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Help us create beautiful furniture and transform spaces around the world.
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700">View Open Positions</Button>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Why Join Furnish?</h2>
              <p className="max-w-[700px] text-muted-foreground">
                We're more than just a furniture company. We're a team of passionate individuals dedicated to creating
                beautiful spaces.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg border">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Collaborative Culture</h3>
                <p className="text-muted-foreground">
                  Work with talented designers, craftspeople, and business professionals in a supportive environment.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg border">
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
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Creative Freedom</h3>
                <p className="text-muted-foreground">
                  Express your creativity and contribute to the design and development of beautiful furniture.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-background rounded-lg border">
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
                    <line x1="12" y1="20" x2="12" y2="10" />
                    <line x1="18" y1="20" x2="18" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Growth Opportunities</h3>
                <p className="text-muted-foreground">
                  Develop your skills and advance your career with our training programs and mentorship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Open Positions</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Join our team and help us create beautiful furniture for homes around the world.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Furniture Designer",
                  department: "Design",
                  location: "New York, NY",
                  type: "Full-time",
                  description: "Create innovative furniture designs that balance form and function.",
                },
                {
                  title: "Production Manager",
                  department: "Manufacturing",
                  location: "Chicago, IL",
                  type: "Full-time",
                  description: "Oversee the production process and ensure quality standards are met.",
                },
                {
                  title: "Marketing Specialist",
                  department: "Marketing",
                  location: "Remote",
                  type: "Full-time",
                  description: "Develop and implement marketing strategies to promote our products.",
                },
                {
                  title: "Customer Experience Associate",
                  department: "Customer Service",
                  location: "Miami, FL",
                  type: "Full-time",
                  description: "Provide exceptional service to our customers and handle inquiries.",
                },
              ].map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>
                      {job.department} • {job.location} • {job.type}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{job.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">Apply Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Benefits & Perks</h2>
              <p className="max-w-[700px] text-muted-foreground">
                We take care of our team so they can focus on creating amazing furniture.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Health & Wellness",
                  description: "Comprehensive health insurance, wellness programs, and gym membership.",
                },
                {
                  title: "Work-Life Balance",
                  description: "Flexible working hours, remote work options, and generous PTO.",
                },
                {
                  title: "Professional Development",
                  description: "Training programs, conference attendance, and education reimbursement.",
                },
                {
                  title: "Employee Discounts",
                  description: "Generous discounts on all Furnish products for you and your family.",
                },
                {
                  title: "Retirement Plan",
                  description: "401(k) with company matching to help you save for the future.",
                },
                {
                  title: "Parental Leave",
                  description: "Generous parental leave for new parents, including adoption support.",
                },
                {
                  title: "Team Events",
                  description: "Regular team outings, celebrations, and community service opportunities.",
                },
                {
                  title: "Modern Workspace",
                  description: "Beautiful, ergonomic office spaces designed for collaboration and comfort.",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex flex-col space-y-2 p-6 bg-background rounded-lg border">
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Ready to Join Our Team?</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                We're always looking for talented individuals to help us create beautiful furniture.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-teal-600 hover:bg-teal-700">View Open Positions</Button>
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

