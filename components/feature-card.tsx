import { Truck, RefreshCcw, Shield, CreditCard } from "lucide-react"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "truck":
        return <Truck className="h-6 w-6 text-teal-600" />
      case "refresh-ccw":
        return <RefreshCcw className="h-6 w-6 text-teal-600" />
      case "shield":
        return <Shield className="h-6 w-6 text-teal-600" />
      case "credit-card":
        return <CreditCard className="h-6 w-6 text-teal-600" />
      default:
        return <Truck className="h-6 w-6 text-teal-600" />
    }
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex-shrink-0">{getIcon(icon)}</div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}

