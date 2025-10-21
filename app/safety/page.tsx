import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Shield, AlertTriangle, Phone, FileText, CheckCircle, Flame } from "lucide-react"
import Link from "next/link"

export default function SafetyPage() {
  const safetyTips = [
    {
      icon: Flame,
      title: "Proper Storage",
      description: "Store propane cylinders upright in well-ventilated outdoor areas away from heat sources.",
    },
    {
      icon: AlertTriangle,
      title: "Leak Detection",
      description: "If you smell gas (rotten egg odor), evacuate immediately and call emergency services.",
    },
    {
      icon: CheckCircle,
      title: "Regular Inspections",
      description: "Have your propane system inspected annually by certified professionals.",
    },
    {
      icon: Shield,
      title: "Equipment Maintenance",
      description: "Keep appliances and equipment properly maintained and serviced regularly.",
    },
  ]

  const emergencySteps = [
    {
      step: "1",
      title: "Evacuate Immediately",
      description: "Get everyone out of the building and move to a safe distance.",
    },
    {
      step: "2",
      title: "Don't Use Electronics",
      description: "Avoid using phones, light switches, or anything that could create a spark.",
    },
    {
      step: "3",
      title: "Call for Help",
      description: "Once at a safe distance, call 911 and your propane supplier.",
    },
    {
      step: "4",
      title: "Don't Return",
      description: "Stay away until emergency responders declare it safe to return.",
    },
  ]

  const resources = [
    {
      title: "Safety Manual",
      description: "Comprehensive guide to propane safety and best practices",
      link: "#",
    },
    {
      title: "Installation Guidelines",
      description: "Proper installation procedures for propane systems",
      link: "#",
    },
    {
      title: "Maintenance Checklist",
      description: "Regular maintenance tasks to ensure safe operation",
      link: "#",
    },
    {
      title: "Emergency Procedures",
      description: "Step-by-step emergency response protocols",
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Safety & Compliance"
        description="Your safety is our top priority. Learn about propane safety, emergency procedures, and compliance standards."
      />

      {/* Emergency Contact */}
      <section className="py-12 bg-gradient-to-br from-red-600 to-red-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="flex items-center gap-4">
              <Phone className="h-12 w-12" />
              <div>
                <h3 className="text-2xl font-bold">24/7 Emergency Service</h3>
                <p className="text-white/90">If you smell gas, evacuate and call immediately</p>
              </div>
            </div>
            <a href="tel:0782618059" className="flex-shrink-0">
              <Button size="lg" variant="outline" className="bg-white text-red-600 hover:bg-white/90 border-0">
                Call 0782618059
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Essential Safety Tips</h2>
            <p className="text-lg text-muted-foreground">Follow these guidelines to ensure safe propane use</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyTips.map((tip, index) => {
              const Icon = tip.icon
              return (
                <div key={index} className="glass-card p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-sky flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Emergency Procedures */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Procedures</h2>
            <p className="text-lg text-muted-foreground">What to do if you suspect a gas leak</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {emergencySteps.map((item, index) => (
              <div key={index} className="glass-card p-6 rounded-xl text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Compliance & Certifications</h2>
              <p className="text-lg text-muted-foreground">We meet and exceed all industry safety standards</p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Our Certifications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">NPGA Certified Operations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">DOT Compliance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">OSHA Safety Standards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">ISO 9001:2015 Quality Management</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Safety Commitment</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Regular employee training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Equipment inspections</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Customer safety education</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">24/7 emergency response</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Safety Resources</h2>
            <p className="text-lg text-muted-foreground">Download guides and educational materials</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="glass-card p-6 rounded-xl hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-bold mb-1 group-hover:text-accent transition-colors">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 rounded-2xl text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions About Safety?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our safety team is here to answer your questions and provide guidance.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gradient-accent text-white">
                Contact Safety Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
