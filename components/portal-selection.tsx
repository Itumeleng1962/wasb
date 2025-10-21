"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Store, ArrowRight } from "lucide-react"

export function PortalSelection() {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl floating-animation" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl floating-animation" style={{animationDelay: '3s'}} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6 slide-in-up">
            Choose Your Portal
          </h2>
          <p className="text-xl text-muted-foreground slide-in-up">
            Access your dedicated portal for seamless propane services and management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto stagger-animation">
          {/* Customer Portal */}
          <Card className="glass-card p-10 rounded-3xl border-0 premium-hover group relative overflow-hidden luxury-border">
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl pulse-primary">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6">Customer Portal</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Manage your propane deliveries, view account history, schedule services, and track your orders.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-base">Track deliveries in real-time</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-base">Schedule refills and maintenance</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-base">View billing and payment history</span>
                </div>
              </div>
              <Link href="/portal/customer" className="block">
                <Button className="w-full bg-accent text-white hover:opacity-90 transition-all duration-300 text-lg py-6 premium-hover">
                  Access Customer Portal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </Card>

          {/* Dealer Portal */}
          <Card className="glass-card p-10 rounded-3xl border-0 premium-hover group relative overflow-hidden luxury-border">
            <div className="absolute inset-0 bg-accent/5"></div>
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl pulse-primary">
                <Store className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-accent mb-6">Dealer Portal</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Manage your dealership operations, inventory, customer accounts, and access exclusive dealer resources.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <span className="text-base">Manage inventory and orders</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <span className="text-base">Access dealer pricing and promotions</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <span className="text-base">View sales reports and analytics</span>
                </div>
              </div>
              <Link href="/portal/dealer" className="block">
                <Button className="w-full bg-accent text-white hover:opacity-90 transition-all duration-300 text-lg py-6 premium-hover">
                  Access Dealer Portal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center slide-in-up">
          <p className="text-muted-foreground mb-6 text-lg">
            Need help accessing your portal? Contact our support team.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="luxury-border bg-transparent text-primary hover:bg-primary hover:text-white premium-hover"
            onClick={() => {
              // Scroll to contact form or redirect to contact page
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              } else {
                window.location.href = '/contact'
              }
            }}
          >
            Get Support
          </Button>
        </div>
      </div>
    </section>
  )
}
