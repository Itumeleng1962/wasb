"use client"

import type React from "react"

import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Mail, Lock, Eye, EyeOff, Package, TrendingUp, Users, FileText } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function DealerPortalPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    dealerId: "",
    password: "",
    rememberMe: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Dealer login submitted:", formData)
  }

  const features = [
    {
      icon: Package,
      title: "Inventory Management",
      description: "Track product inventory and manage stock levels in real-time",
    },
    {
      icon: TrendingUp,
      title: "Sales Analytics",
      description: "Access detailed sales reports and performance metrics",
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Manage customer accounts and service requests efficiently",
    },
    {
      icon: FileText,
      title: "Order Processing",
      description: "Submit and track orders with streamlined workflows",
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader title="Dealer Portal" description="Access your dealer account and manage your business operations." />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Login Form */}
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Dealer Sign In</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="dealerId" className="block text-sm font-medium mb-2">
                    Dealer ID
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="dealerId"
                      required
                      value={formData.dealerId}
                      onChange={(e) => setFormData({ ...formData, dealerId: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Enter your dealer ID"
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
                <p className="text-center text-sm text-muted-foreground mb-4">Not a dealer yet?</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Apply to Become a Dealer
                </Button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Technical support:{" "}
                  <a href="tel:888-337-7355" className="text-accent hover:underline">
                    888-337-7355
                  </a>
                </p>
              </div>
            </div>

            {/* Features */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Dealer Portal Features</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Streamline your operations with our comprehensive dealer management system. Access powerful tools to
                  grow your business and serve your customers better.
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
                <h3 className="font-bold mb-2">Dealer Benefits</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Competitive wholesale pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Marketing and sales support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Technical training programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Dedicated account management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Dealer CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 rounded-2xl text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Becoming a Dealer?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our network of successful propane dealers and grow your business with WASB Gas Distributers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-accent text-white" asChild>
                  <span>Learn More</span>
                </Button>
              </Link>
              <a href="tel:888-337-7355">
                <Button size="lg" variant="outline">
                  Call 888-337-7355
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
