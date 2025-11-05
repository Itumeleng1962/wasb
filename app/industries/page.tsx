import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { ArrowRight, UtensilsCrossed, Factory, Heart } from "lucide-react"
import Link from "next/link"

export default function IndustriesPage() {
  const industries = [
    {
      icon: UtensilsCrossed,
      title: "Hospitality",
      description: "Reliable propane solutions for restaurants, hotels, and food service operations.",
      features: [
        "Commercial kitchen equipment",
        "Water heating systems",
        "Pool and spa heating",
        "Emergency backup power",
      ],
      href: "/industries/hospitality",
      image: "/restaurant-commercial-kitchen-propane.jpg",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Industrial propane for production facilities, forklifts, and manufacturing processes.",
      features: ["Forklift fuel", "Process heating", "Metal treatment", "Material handling equipment"],
      href: "/industries/manufacturing",
      image: "/manufacturing-facility-propane.jpg",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Critical propane services for hospitals, clinics, and healthcare facilities.",
      features: ["Emergency generators", "Sterilization equipment", "Heating systems", "Backup power solutions"],
      href: "/industries/healthcare",
      image: "/healthcare-facility-propane.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Industries We Serve"
        description="Specialized propane solutions tailored to meet the unique needs of your industry."
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry-Specific Expertise</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every industry has unique energy requirements. Our specialized propane solutions are designed to meet the
              specific demands of your sector, backed by expert knowledge and reliable service.
            </p>
          </div>

          {/* Industries */}
          <div className="space-y-16">
            {industries.map((industry, index) => {
              const Icon = industry.icon
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
                      <h3 className="text-2xl md:text-3xl font-bold">{industry.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{industry.description}</p>

                    <div className="space-y-3 mb-8">
                      <p className="font-semibold text-sm text-muted-foreground">Key Applications:</p>
                      {industry.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={industry.href}>
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
                        src={industry.image || "/placeholder.svg"}
                        alt={industry.title}
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

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Industries Choose WASB Gas Distributers</h2>
              <p className="text-lg text-muted-foreground">Trusted by businesses across multiple sectors</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-accent mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Service</div>
              </div>
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Delivery Reliability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 rounded-2xl text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Discuss Your Industry Needs?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our industry specialists are ready to create a customized propane solution for your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-accent text-white">
                  Contact Us
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
