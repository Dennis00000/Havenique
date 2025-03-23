import type { Metadata } from "next"
import Image from "next/image"
import { AccountNav } from "@/components/account-nav"

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your account settings and preferences.",
}

export default function SettingsPage() {
  return (
    <main className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] px-4 md:px-6 py-12">
      <aside className="hidden md:block">
        <AccountNav />
      </aside>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences.</p>
        </div>
        <div className="grid gap-8">
          <div className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">Profile</h2>
                  <p className="text-sm text-muted-foreground">
                    Update your personal information and how your profile appears to others.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                        alt="Profile"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Dennis Opoola</div>
                      <div className="text-sm text-muted-foreground">dennisopoola@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">Preferences</h2>
                  <p className="text-sm text-muted-foreground">
                    Customize your shopping experience and notification preferences.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Email Notifications</div>
                      <div className="text-sm text-muted-foreground">Enabled</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Marketing Emails</div>
                      <div className="text-sm text-muted-foreground">Disabled</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Saved Addresses</h2>
              <p className="text-sm text-muted-foreground">
                Manage your shipping and billing addresses for faster checkout.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Home</div>
                    <div className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Default</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>123 Main Street</p>
                    <p>Apt 4B</p>
                    <p>New York, NY 10001</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="space-y-2">
                  <div className="font-medium">Work</div>
                  <div className="text-sm text-muted-foreground">
                    <p>456 Office Plaza</p>
                    <p>Suite 200</p>
                    <p>New York, NY 10002</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Payment Methods</h2>
              <p className="text-sm text-muted-foreground">Manage your payment methods for faster checkout.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Visa ending in 4242</div>
                    <div className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Default</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>Expires 12/2025</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="space-y-2">
                  <div className="font-medium">Mastercard ending in 5555</div>
                  <div className="text-sm text-muted-foreground">
                    <p>Expires 08/2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Recently Viewed</h2>
              <p className="text-sm text-muted-foreground">Products you've recently viewed.</p>
            </div>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
              {[
                {
                  name: "Modern Sofa",
                  price: "€899.99",
                  image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
                },
                {
                  name: "Coffee Table",
                  price: "€249.99",
                  image:
                    "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1969&auto=format&fit=crop",
                },
                {
                  name: "Dining Chair",
                  price: "€129.99",
                  image:
                    "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop",
                },
                {
                  name: "Floor Lamp",
                  price: "€129.99",
                  image:
                    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1974&auto=format&fit=crop",
                },
              ].map((product, index) => (
                <div key={index} className="rounded-lg border overflow-hidden">
                  <div className="relative aspect-square">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-2">
                    <div className="font-medium truncate">{product.name}</div>
                    <div className="text-sm text-muted-foreground">{product.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

