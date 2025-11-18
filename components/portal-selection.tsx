"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, ArrowRight, Bell, CreditCard, Calendar } from "lucide-react"

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
            Customer Portal
          </h2>
          <p className="text-xl text-muted-foreground slide-in-up">
            Access your dedicated portal for seamless LPG Gas deliveries, billing and account management.
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 max-w-5xl mx-auto items-center stagger-animation">
          {/* Customer Portal copy */}
          <Card className="glass-card p-10 rounded-3xl border-0 premium-hover group relative overflow-hidden luxury-border">
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl pulse-primary">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6">Customer Portal</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Manage your LPG Gas deliveries, view account history, schedule services, and track your orders from
                anywhere.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-base">Real-time delivery status and refill requests</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-base">Secure online payments and statement downloads</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-base">SMS / email alerts when your tank is running low</span>
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

          {/* Mobile preview */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-[460px] rounded-[2.5rem] border border-border/60 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 shadow-2xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-black/60 rounded-full" />

              {/* Screen */}
              <div className="absolute inset-4 rounded-3xl bg-background/95 flex flex-col">
                {/* Header */}
                <div className="px-4 pt-4 pb-3 flex items-center justify-between border-b border-border/60">
                  <div>
                    <p className="text-xs text-muted-foreground">Hi, Lerato</p>
                    <p className="text-sm font-semibold">Your LPG Gas account</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center">
                      <Bell className="h-3.5 w-3.5 text-accent" />
                    </div>
                  </div>
                </div>

                {/* Balance / tank card */}
                <div className="px-4 pt-4 space-y-3">
                  <div className="rounded-2xl bg-gradient-to-r from-accent to-sky text-white p-4 shadow-lg">
                    <p className="text-xs uppercase tracking-wide opacity-90">Next LPG delivery</p>
                    <p className="text-lg font-bold mt-1">Friday, 12 July</p>
                    <div className="mt-3 flex items-center justify-between text-xs">
                      <span className="opacity-90">Zandspruit, Honeydew</span>
                      <span className="bg-white/15 px-2 py-0.5 rounded-full">Order #2451</span>
                    </div>
                  </div>

                  {/* Tank level bar */}
                  <div className="rounded-2xl border border-border/60 p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium">Tank level</span>
                      <span className="text-xs text-accent font-semibold">35% · Refill soon</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full w-1/3 bg-gradient-to-r from-accent to-sky" />
                    </div>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="px-4 pt-2 pb-3 grid grid-cols-2 gap-2 mt-auto">
                  <button className="rounded-xl border border-border/70 bg-background hover:bg-muted/60 transition flex flex-col items-start px-3 py-2">
                    <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center mb-1.5">
                      <Calendar className="h-3.5 w-3.5 text-accent" />
                    </div>
                    <span className="text-xs font-semibold">Schedule delivery</span>
                    <span className="text-[10px] text-muted-foreground">Choose day & time</span>
                  </button>
                  <button className="rounded-xl border border-border/70 bg-background hover:bg-muted/60 transition flex flex-col items-start px-3 py-2">
                    <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center mb-1.5">
                      <CreditCard className="h-3.5 w-3.5 text-accent" />
                    </div>
                    <span className="text-xs font-semibold">Pay account</span>
                    <span className="text-[10px] text-muted-foreground">Secure EFT / card</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
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
