import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Forgot Password | Havenique",
  description: "Reset your Havenique account password.",
}

export default function ForgotPasswordPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <div className="container relative flex flex-col items-center justify-center px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto w-full max-w-md space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Forgot Password</h1>
              <p className="text-muted-foreground">
                Enter your email address and we'll send you a link to reset your password
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="hello@example.com" required />
              </div>
              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                Send Reset Link
              </Button>
              <div className="text-center text-sm">
                Remember your password?{" "}
                <Link href="/login" className="text-teal-600 hover:text-teal-700">
                  Back to login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

