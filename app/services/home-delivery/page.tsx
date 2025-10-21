import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Calendar, Bell, CreditCard, Smartphone } from "lucide-react"
import Link from "next/link"

export default function HomeDeliveryPage() {
  const features = [
    {
      icon: Calendar,
      title: "Automatic Delivery",
      description: "Never worry about running out. We monitor your usage and schedule deliveries automatically.",
    },
    {
      icon: Bell,
      title: "Tank Monitoring",
      description: "Real-time tank level monitoring with alerts sent directly to your phone or email.",
    },
    {
      icon: CreditCard,
      title: "Budget Billing",
      description: "Spread your costs evenly throughout the year with our flexible budget billing program.",
    },
    {
      icon: Smartphone,
      title: "Online Account",
      description: "Manage your account, view delivery history, and make payments online 24/7.",
    },
  ]

  const howItWorks = [
    {
      step: "1",
      title: "Sign Up",
      description: "Contact us to set up your account and schedule your first delivery.",
    },
    {
      step: "2",
      title: "We Monitor",
      description: "Our system tracks your propane usage and tank levels automatically.",
    },
    {
      step: "3",
      title: "Automatic Delivery",
      description: "We deliver before you run low, ensuring you never run out.",
    },
    {
      step: "4",
      title: "Easy Payment",
      description: "Choose from multiple payment options including auto-pay and budget billing.",
    },
  ]

  const benefits = [
    "No more checking tank levels",
    "Guaranteed supply year-round",
    "Competitive pricing",
    "Flexible payment options",
    "Priority scheduling",
    "24/7 emergency service",
    "Expert customer support",
    "Free tank maintenance",
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Home Delivery Service"
        description="Reliable, automatic propane delivery for your home with convenient monitoring and flexible billing."
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Never Run Out of Propane</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our home delivery service takes the worry out of propane management. With automatic monitoring and
                scheduled deliveries, you can focus on what matters most while we ensure your home stays warm and
                comfortable.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <Button className="gradient-accent text-white">
                  Sign Up Today <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="glass-card p-6 rounded-2xl">
                <img
                  src="/propane-delivery-truck-residential.jpg?key=mngip"
                  alt="Propane delivery truck"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Features</h2>
              <p className="text-lg text-muted-foreground">Everything you need for hassle-free propane delivery</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="glass-card p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-sky flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Simple, automated, and reliable</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div key={index} className="glass-card p-6 rounded-xl text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-sky flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Payment Options</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Choose the payment plan that works best for your budget
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-xl border border-border/50">
                  <h3 className="font-bold text-lg mb-2">Pay Per Delivery</h3>
                  <p className="text-sm text-muted-foreground">Pay only when we deliver</p>
                </div>
                <div className="text-center p-6 rounded-xl border-2 border-accent bg-accent/5">
                  <div className="text-xs font-bold text-accent mb-2">MOST POPULAR</div>
                  <h3 className="font-bold text-lg mb-2">Budget Billing</h3>
                  <p className="text-sm text-muted-foreground">Fixed monthly payments</p>
                </div>
                <div className="text-center p-6 rounded-xl border border-border/50">
                  <h3 className="font-bold text-lg mb-2">Prepay Discount</h3>
                  <p className="text-sm text-muted-foreground">Save with prepayment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 rounded-2xl text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Switch to Automatic Delivery?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of homeowners who trust WASB Gas Distributers for reliable propane delivery.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-accent text-white">
                  Get Started
                </Button>
              </Link>
              <a href="tel:0782618059">
                <Button size="lg" variant="outline">
                  Call 0782618059
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
