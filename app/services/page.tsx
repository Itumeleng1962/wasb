import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, Factory, TestTube, Clock, Shield, Banknote } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Truck,
      title: "Home Delivery",
      description: "Reliable propane delivery for residential customers with automatic scheduling and monitoring.",
      features: ["Automatic delivery", "Tank monitoring", "Flexible scheduling", "Budget billing"],
      href: "/services/home-delivery",
      image: "/propane-delivery-truck-residential.jpg",
    },
    {
      icon: Factory,
      title: "Industrial Supply",
      description: "Comprehensive propane solutions for commercial and industrial operations of any size.",
      features: ["Bulk supply", "Priority service", "Custom solutions", "Dedicated support"],
      href: "/services/industrial-supply",
      image: "/industrial-propane-facility.jpg",
    },
    {
      icon: TestTube,
      title: "Cylinder Testing & Maintenance",
      description: "Professional inspection, testing, and maintenance services to ensure safety and compliance.",
      features: ["DOT compliance", "Certified technicians", "Quick turnaround", "Detailed reports"],
      href: "/services/cylinder-testing",
      image: "/propane-cylinder-testing.jpg",
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock emergency service and support whenever you need us.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "All services performed by certified professionals following strict safety protocols.",
    },
    {
      icon: Banknote,
      title: "Competitive Pricing",
      description: "Transparent pricing with no hidden fees and flexible payment options.",
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Services"
        description="Comprehensive propane services designed to meet your residential, commercial, and industrial needs."
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Propane Solutions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From delivery to maintenance, we provide end-to-end propane services backed by decades of experience and
              unwavering commitment to customer satisfaction.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}
                >
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-sky flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={service.href}>
                      <Button className="gradient-accent text-white" asChild>
                        <span>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </Button>
                    </Link>
                  </div>

                  <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                    <div className="relative glass-card p-4 rounded-2xl">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="rounded-lg w-full h-80 object-cover"
                      />
                      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose WASB Gas Distributers Services</h2>
            <p className="text-lg text-muted-foreground">Excellence in every aspect of service delivery</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="glass-card p-6 rounded-xl text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-sky flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 rounded-2xl text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to learn more about our services and get a customized quote.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-accent text-white">
                  Contact Us
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
