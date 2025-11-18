import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Zap, Flame, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function HealthcarePage() {
  const applications = [
    {
      icon: Zap,
      title: "Emergency Generators",
      description: "Reliable backup power to ensure continuous operation of critical medical equipment and systems.",
      benefits: ["Instant power backup", "Life-saving reliability", "Code compliant", "Regular testing"],
    },
    {
      icon: Flame,
      title: "Sterilization Equipment",
      description: "LPG Gas-powered autoclaves and sterilization systems for medical instruments and supplies.",
      benefits: ["Consistent performance", "Cost effective", "Precise temperature", "Reliable operation"],
    },
    {
      icon: Shield,
      title: "Facility Heating",
      description: "Efficient heating systems to maintain comfortable temperatures for patients and staff.",
      benefits: ["Energy efficient", "Reliable comfort", "Lower costs", "Quiet operation"],
    },
    {
      icon: Clock,
      title: "Hot Water Systems",
      description: "Continuous hot water supply for patient care, laundry, and sanitation needs.",
      benefits: ["Unlimited supply", "Fast recovery", "Energy savings", "Dependable service"],
    },
  ]

  const benefits = [
    "Priority emergency service",
    "Priority delivery",
    "Compliance expertise",
    "Regular maintenance",
    "Safety inspections",
    "Backup supply planning",
    "Technical support",
    "Generator testing",
  ]

  const compliance = [
    {
      title: "NFPA Standards",
      description: "Full compliance with National Fire Protection Association codes for healthcare facilities.",
    },
    {
      title: "Joint Commission",
      description: "Meet all Joint Commission requirements for emergency power and life safety systems.",
    },
    {
      title: "CMS Regulations",
      description: "Adherence to Centers for Medicare & Medicaid Services emergency preparedness rules.",
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Healthcare Solutions"
        description="Critical LPG gas services for hospitals, clinics, and healthcare facilities."
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Powering Critical Healthcare Services</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Healthcare facilities require absolute reliability. Our LPG gas solutions ensure your critical systems
                remain operational, from emergency generators to sterilization equipment, supporting patient care when
                it matters most.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We understand the unique requirements of healthcare environments, including strict compliance standards
                and extended operating hours. Our specialized service includes priority response, regular maintenance,
                and expert technical support.
              </p>
              <Link href="/contact">
                <Button className="gradient-accent text-white">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="glass-card p-6 rounded-2xl">
                <img src="/healthcare.png" alt="Healthcare facility" className="rounded-lg w-full" />
              </div>
            </div>
          </div>

          {/* Applications */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Healthcare Applications</h2>
              <p className="text-lg text-muted-foreground">Essential LPG gas solutions for patient care</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Healthcare-Focused Service</h2>
              <p className="text-lg text-muted-foreground">Specialized support for medical facilities</p>
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

      {/* Compliance */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Regulatory Compliance</h2>
              <p className="text-lg text-muted-foreground">Meeting healthcare industry standards</p>
            </div>

            <div className="space-y-6">
              {compliance.map((item, index) => (
                <div key={index} className="glass-card p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Preparedness */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Preparedness</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our comprehensive emergency planning ensures your facility is always prepared
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-muted/30 rounded-lg">
                  <h3 className="font-bold mb-3">Regular Testing</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Scheduled generator testing and maintenance to ensure readiness during emergencies.
                  </p>
                </div>
                <div className="p-6 bg-muted/30 rounded-lg">
                  <h3 className="font-bold mb-3">Backup Supply</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Strategic LPG gas reserves and rapid response protocols for extended outages.
                  </p>
                </div>
                <div className="p-6 bg-muted/30 rounded-lg">
                  <h3 className="font-bold mb-3">Priority Response</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Healthcare facilities receive top priority for emergency deliveries and service.
                  </p>
                </div>
                <div className="p-6 bg-muted/30 rounded-lg">
                  <h3 className="font-bold mb-3">Documentation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Complete records and reports for regulatory compliance and accreditation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 rounded-2xl text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ensure Your Facility's Reliability</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our healthcare specialists to discuss your facility's LPG gas needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-accent text-white">
                  Request Consultation
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
