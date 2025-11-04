"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Flame, Shield, Clock } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-primary/60" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 floating-animation" />
        <div className="absolute top-40 right-10 w-80 h-80 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 floating-animation" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 floating-animation" style={{animationDelay: '4s'}} />
      </div>

      {/* Company Trucks Showcase */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-1/3 max-w-md opacity-30 hidden lg:block">
          <img 
            src="/Trucks.png" 
            alt="WASB Gas Distributers fleet" 
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-1/4 max-w-xs opacity-25 hidden xl:block">
          <img 
            src="/Truck.png" 
            alt="WASB Gas Distributers delivery truck" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8 slide-in-up luxury-border">
            <Flame className="h-5 w-5 text-accent pulse-primary" />
            <span className="text-sm font-medium text-white">Local, Safe & Reliable LPG Gas Supply</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 slide-in-up text-balance">
            <span className="text-accent">WASB Gas</span> Distributers
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white/90 mb-12 slide-in-up max-w-2xl mx-auto text-pretty">
            Get local, safe & reliable supply of LPG gas bottles in the Gauteng area. We're gas distributers, bringing the benefits of bottled gas to your home, no matter where you live in Gauteng.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 slide-in-up">
            <Button
              size="lg"
              className="bg-accent text-white hover:opacity-90 transition-all duration-300 text-lg px-10 py-6 group premium-hover"
              onClick={() => {
                window.location.href = '/order'
              }}
            >
              ORDER NOW!
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="luxury-border-accent bg-transparent border-accent text-accent hover:bg-accent hover:text-white text-lg px-10 py-6 premium-hover"
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
              Contact Us
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto stagger-animation">
            <div className="glass-card rounded-2xl p-8 text-center premium-hover luxury-border">
              <Shield className="h-10 w-10 text-accent mx-auto mb-4 pulse-primary" />
              <h3 className="font-semibold text-foreground mb-2 text-lg">100% Safe</h3>
              <p className="text-sm text-muted-foreground">Certified & Insured</p>
            </div>
            <div className="glass-card rounded-2xl p-8 text-center premium-hover luxury-border">
              <Clock className="h-10 w-10 text-accent mx-auto mb-4 pulse-primary" />
              <h3 className="font-semibold text-foreground mb-2 text-lg">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Always Available</p>
            </div>
            <div className="glass-card rounded-2xl p-8 text-center premium-hover luxury-border">
              <Flame className="h-10 w-10 text-accent mx-auto mb-4 pulse-primary" />
              <h3 className="font-semibold text-foreground mb-2 text-lg">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">Same-Day Service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#eeedef"
          />
        </svg>
      </div>
    </section>
  )
}
