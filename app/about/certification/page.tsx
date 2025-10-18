import { PageHeader } from "@/components/page-header"
import { Shield, Award, CheckCircle, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CertificationPage() {
  const certifications = [
    {
      icon: Shield,
      title: "NPGA Certified",
      description: "National Propane Gas Association certification for safety and operational excellence.",
      year: "Since 1990",
    },
    {
      icon: Award,
      title: "ISO 9001:2015",
      description: "International standard for quality management systems and continuous improvement.",
      year: "Certified 2018",
    },
    {
      icon: FileCheck,
      title: "OSHA Compliant",
      description: "Full compliance with Occupational Safety and Health Administration standards.",
      year: "Ongoing",
    },
    {
      icon: CheckCircle,
      title: "DOT Certified",
      description: "Department of Transportation certification for safe propane transportation.",
      year: "Since 1985",
    },
  ]

  const safetyStats = [
    { value: "Zero", label: "Major Incidents (5 Years)" },
    { value: "100%", label: "Safety Training Completion" },
    { value: "24/7", label: "Emergency Response" },
    { value: "500+", label: "Safety Inspections/Year" },
  ]

  const commitments = [
    "Regular safety training for all employees",
    "State-of-the-art equipment maintenance",
    "Comprehensive emergency response protocols",
    "Continuous compliance monitoring",
    "Customer safety education programs",
    "Environmental protection initiatives",
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Certification & Safety"
        description="Our unwavering commitment to safety, compliance, and industry-leading standards."
      />

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Certifications</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We maintain the highest industry certifications and continuously exceed regulatory requirements to ensure
              your safety and peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <div key={index} className="glass-card p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-sky flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{cert.description}</p>
                  <span className="text-xs font-semibold text-accent">{cert.year}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Safety Stats */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Safety by the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Commitments */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Safety Commitments</h2>
              <p className="text-lg text-muted-foreground">Safety isn't just a priority—it's our foundation.</p>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <div className="grid md:grid-cols-2 gap-6">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{commitment}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions About Our Safety Standards?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our safety team is here to answer any questions about our certifications and procedures.
            </p>
            <Button size="lg" className="gradient-accent text-white">
              Contact Safety Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
