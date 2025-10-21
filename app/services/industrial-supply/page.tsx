import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Factory, Zap, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function IndustrialSupplyPage() {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Reliable propane supply for production facilities, forklifts, and industrial processes.",
    },
    {
      icon: Zap,
      title: "Agriculture",
      description: "Crop drying, heating, and irrigation solutions for farms and agricultural operations.",
    },
    {
      icon: Users,
      title: "Hospitality",
      description: "Commercial kitchens, heating, and hot water for restaurants and hotels.",
    },
    {
      icon: TrendingUp,
      title: "Construction",
      description: "Temporary heating, equipment fuel, and power generation for job sites.",
    },
  ]

  const services = [
    "Bulk propane delivery",
    "On-site storage solutions",
    "Emergency delivery service",
    "Volume-based pricing",
    "Dedicated account manager",
    "Custom delivery schedules",
    "Equipment installation",
    "Technical support",
    "Safety training",
    "Compliance assistance",
    "Usage analytics",
    "Preventive maintenance",
  ]

  const benefits = [
    {
      title: "Priority Service",
      description: "Dedicated support team and priority scheduling for your business operations.",
    },
    {
      title: "Competitive Pricing",
      description: "Volume discounts and flexible pricing structures to optimize your energy costs.",
    },
    {
      title: "Reliable Supply",
      description: "Guaranteed delivery schedules and emergency service to keep your business running.",
    },
    {
      title: "Expert Consultation",
      description: "Technical expertise to optimize your propane usage and reduce operational costs.",
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Industrial Supply"
        description="Comprehensive propane solutions for commercial and industrial operations of any scale."
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Power Your Business with ProGas</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We understand that your business depends on reliable energy. Our industrial supply service provides
                consistent, cost-effective propane solutions tailored to your operational needs.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From small businesses to large industrial facilities, we have the expertise and infrastructure to
                support your operations with dedicated service and competitive pricing.
              </p>
              <Link href="/contact">
                <Button className="gradient-accent text-white">
                  Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="glass-card p-6 rounded-2xl">
                <img
                  src="/industrial-propane-facility.jpg"
                  alt="Industrial propane facility"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>

          {/* Industries Served */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-muted-foreground">Specialized solutions for diverse sectors</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => {
                const Icon = industry.icon
                return (
                  <div key={index} className="glass-card p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-sky flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{industry.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Service Package</h2>
              <p className="text-lg text-muted-foreground">Everything your business needs</p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ProGas Industrial</h2>
            <p className="text-lg text-muted-foreground">Built for business, backed by experience</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Story</h2>
                <p className="text-lg text-muted-foreground">
                  How we helped a manufacturing facility reduce costs by 25%
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">25%</div>
                  <div className="text-sm text-muted-foreground">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Uptime Maintained</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">3 Years</div>
                  <div className="text-sm text-muted-foreground">Partnership</div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-center">
                "ProGas transformed our propane supply chain with their industrial solutions. The dedicated account
                manager and optimized delivery schedule have significantly reduced our operational costs while ensuring
                we never experience supply interruptions."
              </p>
              <p className="text-center mt-4 font-semibold">— Operations Manager, Midwest Manufacturing Co.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 rounded-2xl text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Propane Supply?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can support your business with reliable, cost-effective propane solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-accent text-white">
                  Schedule Consultation
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
