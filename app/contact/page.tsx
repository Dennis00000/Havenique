import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
              <p className="text-gray-600">
                Have questions or need assistance? We're here to help. Reach out to our team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Contact Form */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Send Us a Message</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Enter subject" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Enter your message" rows={5} />
                  </div>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Send Message</Button>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-teal-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Our Location</h3>
                      <p className="text-gray-600">Gedimino pr. 35, Vilnius 01109, Lithuania</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-teal-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Phone Number</h3>
                      <p className="text-gray-600">+370 0 000 0000</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-teal-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Email Address</h3>
                      <p className="text-gray-600">dennisopoola@gmail.com</p>
                    </div>
                  </div>
                </div>

                {/* Showroom Image */}
                <div className="mt-6 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
                    alt="Our furniture showroom"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Business Hours */}
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Our Showrooms */}
            <div className="border-t pt-12 mb-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Our Showrooms</h2>
                <p className="text-gray-600">Visit us in person to experience our furniture collections.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-lg border overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
                      alt="Vilnius Showroom"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">Vilnius Flagship Store</h3>
                    <p className="text-sm text-gray-600 mb-2">Gedimino pr. 35, Vilnius 01109, Lithuania</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Get Directions
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg border overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
                      alt="Kaunas Showroom"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">Kaunas Design Center</h3>
                    <p className="text-sm text-gray-600 mb-2">Laisvės al. 45, Kaunas 44309, Lithuania</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Get Directions
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg border overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"
                      alt="Klaipėda Showroom"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">Klaipėda Outlet</h3>
                    <p className="text-sm text-gray-600 mb-2">H. Manto g. 22, Klaipėda 92131, Lithuania</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="border-t pt-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
                <p className="text-gray-600">Find answers to common questions about our products and services.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    question: "What is your delivery timeframe?",
                    answer:
                      "Standard delivery typically takes 3-5 business days within the city and 5-7 business days for other areas. Express delivery options are available at checkout.",
                  },
                  {
                    question: "Do you offer assembly services?",
                    answer:
                      "Yes, we offer professional assembly services for an additional fee. You can add this service during checkout or contact our customer service team to arrange it after purchase.",
                  },
                  {
                    question: "What is your return policy?",
                    answer:
                      "We offer a 30-day return policy for most items in their original condition. Custom orders may have different return terms. Please refer to our Returns page for detailed information.",
                  },
                  {
                    question: "Do you ship internationally?",
                    answer:
                      "Currently, we ship within Lithuania and to select European countries. Please contact our customer service team for specific information about international shipping options and rates.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <h3 className="font-medium mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">Still have questions?</p>
                <Button asChild className="bg-teal-600 hover:bg-teal-700">
                  <Link href="/faqs">View All FAQs</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

