import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Home, Building2, Factory } from "lucide-react"
import Link from "next/link"

export default function BulkGasPage() {
  const tankSizes = [
    {
      name: "454 L",
      capacity: "454 liters",
      ideal: "Small homes, cabins",
      dimensions: '54" L x 30" D',
    },
    {
      name: "946 L",
      capacity: "946 liters",
      ideal: "Average homes",
      dimensions: '92" L x 30" D',
    },
    {
      name: "1893 L",
      capacity: "1893 liters",
      ideal: "Large homes, small businesses",
      dimensions: '120" L x 37" D',
    },
    {
      name: "3785 L",
      capacity: "3785 liters",
      ideal: "Commercial, industrial",
      dimensions: '192" L x 41" D',
    },
  ]

  const applications = [
    {
      icon: Home,
      title: "Residential",
      description: "Home heating, water heating, cooking, and more",
      features: ["Automatic delivery", "Budget billing", "Tank monitoring", "24/7 support"],
    },
    {
      icon: Building2,
      title: "Commercial",
      description: "Restaurants, hotels, and business operations",
      features: ["Custom solutions", "Priority service", "Volume discounts", "Dedicated account manager"],
    },
    {
      icon: Factory,
      title: "Industrial",
      description: "Manufacturing, agriculture, and large-scale operations",
      features: ["Bulk pricing", "On-site storage", "Emergency service", "Technical support"],
    },
  ]

  const benefits = [
    "Free tank installation and maintenance",
    "Automatic delivery scheduling",
    "Real-time tank level monitoring",
    "Competitive pricing and volume discounts",
    "24/7 emergency service",
    "Flexible payment options",
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Bulk Propane Gas"
        description="Large-scale propane solutions for residential, commercial, and industrial applications."
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Reliable Bulk Propane Delivery</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our bulk propane service provides a consistent, cost-effective energy solution for homes and businesses
                of all sizes. We handle everything from tank installation to automatic delivery.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <Button className="gradient-accent text-white">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="glass-card p-6 rounded-2xl">
                <img
                  src="/bulk-tank.png"
                  alt="Bulk propane tank"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>

          {/* Tank Sizes */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tank Sizes</h2>
              <p className="text-lg text-muted-foreground">We offer various tank sizes to meet your needs</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tankSizes.map((tank, index) => (
                <div key={index} className="glass-card p-6 rounded-xl hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold mb-2">{tank.name}</h3>
                  <p className="text-accent font-semibold mb-4">{tank.capacity}</p>
                  <div className="space-y-2 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Ideal for:</p>
                      <p className="text-sm">{tank.ideal}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Dimensions:</p>
                      <p className="text-sm">{tank.dimensions}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Applications</h2>
              <p className="text-lg text-muted-foreground">Tailored solutions for every sector</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {applications.map((app, index) => {
                const Icon = app.icon
                return (
                  <div key={index} className="glass-card p-6 rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-sky flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{app.description}</p>
                    <div className="space-y-2">
                      {app.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 rounded-2xl text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Switch to Bulk Propane?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free consultation and quote for your bulk propane needs today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-accent text-white">
                  Request Quote
                </Button>
              </Link>
              <a href="tel:+27115687912">
                <Button size="lg" variant="outline">
                  Call +27 11 568 7912
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
