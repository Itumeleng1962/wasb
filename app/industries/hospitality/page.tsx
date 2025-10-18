import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Flame, Droplets, Waves, Zap } from "lucide-react"
import Link from "next/link"

export default function HospitalityPage() {
  const applications = [
    {
      icon: Flame,
      title: "Commercial Kitchens",
      description: "Power ranges, ovens, grills, and fryers with reliable, cost-effective propane.",
      benefits: ["Precise temperature control", "Lower operating costs", "Faster cooking times", "Chef preferred"],
    },
    {
      icon: Droplets,
      title: "Water Heating",
      description: "Efficient hot water systems for guest rooms, laundry, and kitchen operations.",
      benefits: ["Continuous hot water", "Energy efficient", "Lower utility bills", "Quick recovery"],
    },
    {
      icon: Waves,
      title: "Pool & Spa Heating",
      description: "Maintain perfect water temperatures for guest comfort year-round.",
      benefits: ["Consistent heating", "Cost effective", "Reliable operation", "Extended season"],
    },
    {
      icon: Zap,
      title: "Backup Power",
      description: "Emergency generators to keep operations running during power outages.",
      benefits: ["Uninterrupted service", "Guest safety", "Protect revenue", "Peace of mind"],
    },
  ]

  const benefits = [
    "Priority delivery scheduling",
    "Volume-based pricing",
    "24/7 emergency service",
    "Dedicated account manager",
    "Equipment installation",
    "Preventive maintenance",
    "Compliance support",
    "Usage optimization",
  ]

  const testimonial = {
    quote:
      "ProGas has been our propane partner for over 10 years. Their reliable service and competitive pricing have been crucial to our restaurant's success. The dedicated account manager understands our needs and ensures we never run out during peak seasons.",
    author: "Maria Rodriguez",
    position: "Owner, Bella Vista Restaurant",
  }

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Hospitality Solutions"
        description="Reliable propane services for restaurants, hotels, and food service operations."
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Powering Exceptional Guest Experiences</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                In the hospitality industry, reliability is everything. Our propane solutions ensure your operations run
                smoothly, from commercial kitchens to guest amenities, so you can focus on delivering outstanding
                service.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We understand the unique demands of restaurants, hotels, and resorts. Our specialized service includes
                priority scheduling, emergency support, and competitive pricing to help your business thrive.
              </p>
              <Link href="/contact">
                <Button className="gradient-accent text-white">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="glass-card p-6 rounded-2xl">
                <img
                  src="/restaurant-commercial-kitchen-propane.jpg"
                  alt="Commercial kitchen"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>

          {/* Applications */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Hospitality Applications</h2>
              <p className="text-lg text-muted-foreground">Comprehensive propane solutions for your facility</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((app, index) => {
                const Icon = app.icon
                return (
                  <div key={index} className="glass-card p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-sky flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{app.description}</p>
                    <div className="space-y-2">
                      {app.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
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

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Benefits</h2>
              <p className="text-lg text-muted-foreground">Everything you need for seamless operations</p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              </div>
              <blockquote className="text-lg text-muted-foreground leading-relaxed text-center mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-center">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.position}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 rounded-2xl text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enhance Your Operations?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our hospitality solutions can benefit your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-accent text-white">
                  Request Consultation
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
