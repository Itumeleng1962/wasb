"use client"

import type React from "react"

import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Mail, Lock, Eye, EyeOff, CreditCard, FileText, Calendar, Bell } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function CustomerPortalPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login submitted:", formData)
  }

  const features = [
    {
      icon: Calendar,
      title: "Delivery Schedule",
      description: "View and manage your propane delivery schedule",
    },
    {
      icon: CreditCard,
      title: "Make Payments",
      description: "Pay your bill securely online with multiple payment options",
    },
    {
      icon: FileText,
      title: "Account History",
      description: "Access invoices, delivery records, and usage reports",
    },
    {
      icon: Bell,
      title: "Alerts & Notifications",
      description: "Get notified about deliveries, payments, and tank levels",
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader title="Customer Portal" description="Access your account, manage deliveries, and pay bills online." />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Login Form */}
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Sign In to Your Account</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-10 pr-12 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                      className="w-4 h-4 rounded border-border text-accent focus:ring-accent"
                    />
                    <span className="text-sm text-muted-foreground">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-accent hover:underline">
                    Forgot password?
                  </a>
                </div>

                <Button type="submit" className="w-full gradient-accent text-white">
                  Sign In
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-center text-sm text-muted-foreground mb-4">Don't have an account?</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Create New Account
                </Button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Need help?{" "}
                  <Link href="/contact" className="text-accent hover:underline">
                    Contact Support
                  </Link>
                </p>
              </div>
            </div>

            {/* Features */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Portal Features</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Manage your propane account with ease. Our customer portal gives you 24/7 access to your account
                  information and services.
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="glass-card p-4 rounded-xl flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-sky flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="glass-card p-6 rounded-xl mt-6 bg-accent/5 border border-accent/20">
                <h3 className="font-bold mb-2">New to WASB Gas Distributers?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Sign up for service and get instant access to your customer portal.
                </p>
                <Link href="/contact">
                  <Button className="gradient-accent text-white">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
