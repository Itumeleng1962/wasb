import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Shield, FileCheck, Clock, Award } from "lucide-react"
import Link from "next/link"

export default function CylinderTestingPage() {
  const services = [
    {
      icon: FileCheck,
      title: "DOT Compliance Testing",
      description: "Mandatory testing to meet Department of Transportation regulations and safety standards.",
      interval: "Every 5 years",
    },
    {
      icon: Shield,
      title: "Visual Inspection",
      description: "Thorough examination for dents, corrosion, damage, and general condition assessment.",
      interval: "Annual",
    },
    {
      icon: Award,
      title: "Valve Inspection & Repair",
      description: "Testing and replacement of valves, seals, and connections to ensure proper operation.",
      interval: "As needed",
    },
    {
      icon: Clock,
      title: "Recertification",
      description: "Complete cylinder recertification including hydrostatic testing and documentation.",
      interval: "Every 5 years",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Drop Off or Schedule Pickup",
      description: "Bring cylinders to our facility or schedule convenient pickup service.",
    },
    {
      step: "2",
      title: "Inspection & Testing",
      description: "Our certified technicians perform comprehensive testing and inspection.",
    },
    {
      step: "3",
      title: "Repairs if Needed",
      description: "We handle any necessary repairs or valve replacements with your approval.",
    },
    {
      step: "4",
      title: "Certification & Return",
      description: "Receive detailed reports and certified cylinders ready for use.",
    },
  ]

  const benefits = [
    "DOT certified technicians",
    "Fast turnaround time",
    "Detailed inspection reports",
    "Competitive pricing",
    "Pickup and delivery available",
    "All cylinder sizes",
    "Valve replacement service",
    "Compliance documentation",
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Cylinder Testing & Maintenance"
        description="Professional inspection, testing, and maintenance services to ensure safety and regulatory compliance."
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Safety Through Certified Testing</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Regular cylinder testing and maintenance is not just a legal requirement—it's essential for safety. Our
                DOT-certified technicians ensure your LPG gas cylinders meet all safety standards and regulations.
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
                  Schedule Testing <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="glass-card p-6 rounded-2xl">
                <img src="/cylinder.png" alt="Cylinder testing" className="rounded-lg w-full" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Testing & Maintenance Services</h2>
              <p className="text-lg text-muted-foreground">Comprehensive cylinder care and certification</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div key={index} className="glass-card p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-sky flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-bold">{service.title}</h3>
                          <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                            {service.interval}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Testing Process</h2>
            <p className="text-lg text-muted-foreground">Simple, efficient, and thorough</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
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

      {/* Compliance Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Compliance Requirements</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Understanding when your cylinders need testing
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="font-bold text-lg mb-2">5-Year Recertification</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All LPG gas cylinders must undergo hydrostatic testing every 5 years from the date of manufacture
                    or last recertification. This is a DOT requirement for continued legal use.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="font-bold text-lg mb-2">Visual Inspection</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Annual visual inspections are recommended to identify damage, corrosion, or wear that could
                    compromise safety. We can perform these inspections during regular refills.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="font-bold text-lg mb-2">Valve Maintenance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Valves should be inspected regularly and replaced if showing signs of wear, damage, or leakage. We
                    stock all common valve types for immediate replacement.
                  </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Cylinder Testing?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule your cylinder inspection and testing today to ensure safety and compliance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-accent text-white">
                  Schedule Service
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
