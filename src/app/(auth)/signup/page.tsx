"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Activity } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="flex justify-center items-center space-x-2 mb-8">
            <Activity className="h-6 w-6 text-primary" />
            <span className="font-bold text-2xl">EchoLive</span>
          </Link>
          <h2 className="text-2xl font-bold">Create your account</h2>
          <p className="text-muted-foreground mt-2">Start tracking your website visitors</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <div className="space-y-4 rounded-md">
            <div>
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                placeholder="Password"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Create account"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:text-primary/90">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}