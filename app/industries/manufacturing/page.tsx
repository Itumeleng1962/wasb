import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Truck, Flame, Wrench, Zap } from "lucide-react"
import Link from "next/link"

export default function ManufacturingPage() {
  const applications = [
    {
      icon: Truck,
      title: "Forklift Fuel",
      description: "Clean, efficient LPG gas fuel for material handling equipment and warehouse operations.",
      benefits: ["Lower emissions", "Reduced maintenance", "Indoor/outdoor use", "Cost effective"],
    },
    {
      icon: Flame,
      title: "Process Heating",
      description: "Precise temperature control for manufacturing processes and production lines.",
      benefits: ["Consistent heat", "Energy efficient", "Rapid response", "Reliable operation"],
    },
    {
      icon: Wrench,
      title: "Metal Treatment",
      description: "High-temperature applications for metal cutting, welding, and heat treatment.",
      benefits: ["Precise control", "Clean burning", "High efficiency", "Versatile applications"],
    },
    {
      icon: Zap,
      title: "Backup Power",
      description: "Emergency generators to maintain production during power interruptions.",
      benefits: ["Minimize downtime", "Protect equipment", "Maintain schedules", "Reliable startup"],
    },
  ]

  const benefits = [
    "Bulk delivery and storage",
    "Volume-based pricing",
    "Scheduled deliveries",
    "Emergency service hotline",
    "Technical consultation",
    "Equipment installation",
    "Safety training",
    "Compliance support",
    "Usage monitoring",
    "Preventive maintenance",
    "Dedicated account team",
    "Custom solutions",
  ]

  const caseStudy = {
    title: "Automotive Parts Manufacturer",
    challenge: "High forklift fuel costs and frequent equipment downtime",
    solution: "Converted fleet to LPG gas with optimized delivery schedule",
    results: [
      { metric: "30%", label: "Cost Reduction" },
      { metric: "45%", label: "Less Downtime" },
      { metric: "60%", label: "Lower Emissions" },
    ],
  }

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Manufacturing Solutions"
        description="Industrial LPG gas for production facilities, material handling, and manufacturing processes."
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Fuel Your Manufacturing Excellence</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Manufacturing operations demand reliable, cost-effective energy solutions. Our industrial LPG gas
                services provide the power and efficiency you need to maintain productivity and meet production goals.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From forklift fleets to process heating, we deliver comprehensive LPG gas solutions tailored to your
                manufacturing environment, backed by technical expertise and responsive support.
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
                  src="/manufacture.png"
                  alt="Manufacturing facility"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>

          {/* Applications */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Manufacturing Applications</h2>
              <p className="text-lg text-muted-foreground">LPG Gas solutions for every production need</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Service Package</h2>
              <p className="text-lg text-muted-foreground">Everything your facility needs</p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Case Study */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Story</h2>
                <h3 className="text-xl font-semibold text-accent mb-2">{caseStudy.title}</h3>
                <p className="text-muted-foreground">{caseStudy.challenge}</p>
              </div>

              <div className="mb-8 p-6 bg-muted/30 rounded-lg">
                <h4 className="font-bold mb-2">Solution:</h4>
                <p className="text-muted-foreground">{caseStudy.solution}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">{result.metric}</div>
                    <div className="text-sm text-muted-foreground">{result.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 rounded-2xl text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Optimize Your Manufacturing Operations</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let our manufacturing specialists create a customized LPG gas solution for your facility.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-accent text-white">
                  Schedule Consultation
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
