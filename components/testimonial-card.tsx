import Image from "next/image"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  image: string
  quote: string
}

export function TestimonialCard({ name, role, image, quote }: TestimonialCardProps) {
  return (
    <div className="rounded-lg border bg-white p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <div className="relative">
        <Quote className="absolute -top-2 -left-2 h-6 w-6 text-gray-200" />
        <p className="pl-4 text-gray-600">{quote}</p>
      </div>
    </div>
  )
}

export default TestimonialCard

