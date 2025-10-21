import { Card } from "@/components/ui/card"
import { Award, Banknote, Leaf, Users, Zap, HeartHandshake } from "lucide-react"

const benefits = [
  {
    icon: Award,
    title: "Industry Leading Expertise",
    description: "Over 35 years of experience delivering exceptional propane services with certified professionals.",
  },
  {
    icon: Banknote,
    title: "Competitive Pricing",
    description: "Transparent pricing with flexible payment plans and budget options to fit your needs.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Energy",
    description: "Propane is a clean-burning, low-carbon alternative that reduces your environmental impact.",
  },
  {
    icon: Users,
    title: "Customer-First Service",
    description: "24/7 support, emergency services, and dedicated account managers for your peace of mind.",
  },
  {
    icon: Zap,
    title: "Reliable & Efficient",
    description: "Consistent delivery schedules and smart monitoring ensure you never run out of propane.",
  },
  {
    icon: HeartHandshake,
    title: "Community Focused",
    description: "Proudly serving local communities with personalized service and community involvement.",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1D56]/5 to-[#009FFD]/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4 text-balance">Why Choose WASB Gas Distributers?</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            We're more than just a propane supplier—we're your trusted energy partner committed to excellence.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="group">
                <Card className="glass-card p-8 rounded-2xl h-full hover:shadow-2xl transition-all duration-300 border-0">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground text-pretty">{benefit.description}</p>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">35+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
