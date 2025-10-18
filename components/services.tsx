import { Card } from "@/components/ui/card"
import { Home, Building2, Truck, Wrench, Gauge, Droplets } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Propane",
    description: "Reliable propane delivery for your home heating, cooking, and hot water needs.",
    features: ["Automatic Delivery", "Budget Plans", "Tank Installation"],
  },
  {
    icon: Building2,
    title: "Commercial Solutions",
    description: "Comprehensive energy solutions for businesses of all sizes.",
    features: ["Bulk Delivery", "Fleet Services", "Custom Contracts"],
  },
  {
    icon: Truck,
    title: "Propane Delivery",
    description: "Fast, safe, and convenient propane delivery on your schedule.",
    features: ["Same-Day Service", "Scheduled Refills", "Emergency Delivery"],
  },
  {
    icon: Wrench,
    title: "Installation & Repair",
    description: "Expert installation and maintenance services by certified technicians.",
    features: ["Tank Installation", "System Repairs", "Safety Inspections"],
  },
  {
    icon: Gauge,
    title: "Tank Monitoring",
    description: "Smart tank monitoring technology for worry-free propane management.",
    features: ["Real-Time Levels", "Auto-Ordering", "Mobile App"],
  },
  {
    icon: Droplets,
    title: "Propane Appliances",
    description: "Wide selection of propane-powered appliances and equipment.",
    features: ["Water Heaters", "Generators", "Outdoor Living"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4 text-balance">Complete Energy Solutions</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            From residential heating to commercial operations, we provide comprehensive propane services tailored to
            your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border-0"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF8C32]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
