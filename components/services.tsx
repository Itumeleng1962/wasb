import { Card } from "@/components/ui/card"
import { Home, Building2, Truck, Wrench, Gauge, Droplets } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Gas for Home",
    description: "WASB Gas Distributers has the perfect solution for all your LPG heating, hot water systems and cooking needs and is servicing customers Gauteng wide.",
    features: ["LPG Heating", "Hot Water Systems", "Cooking Solutions"],
  },
  {
    icon: Building2,
    title: "Gas for Business",
    description: "WASB Gas Distributers has a large range of gas products and services along with offering Free Next Day delivery to most areas of Gauteng.",
    features: ["Large Range Products", "Free Next Day Delivery", "Gauteng Wide Service"],
  },
  {
    icon: Truck,
    title: "LPG Gas Delivery",
    description: "Get local, safe & reliable supply of LPG gas bottles in the Gauteng area with professional delivery service.",
    features: ["Same-Day Service", "Safe Delivery", "Gauteng Coverage"],
  },
  {
    icon: Wrench,
    title: "Gas Products & Services",
    description: "Comprehensive range of gas products and professional services for all your LPG needs.",
    features: ["Gas Bottles", "Professional Service", "Quality Products"],
  },
  {
    icon: Gauge,
    title: "Reliable Supply",
    description: "Consistent and reliable LPG gas supply ensuring you never run out when you need it most.",
    features: ["Consistent Supply", "Reliable Service", "Customer Focus"],
  },
  {
    icon: Droplets,
    title: "LPG Solutions",
    description: "Complete LPG solutions for residential and commercial applications across Gauteng.",
    features: ["Residential Solutions", "Commercial Applications", "Complete Service"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4 text-balance">WASB Gas Distributers</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            We're gas distributers, bringing the benefits of bottled gas to your home and business, no matter where you live in Gauteng.
          </p>
        </div>

        {/* Company Fleet Showcase */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="/Trucks.png" 
                  alt="WASB Gas Distributers fleet with company logo" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="/Truck.png" 
                  alt="WASB Gas Distributers delivery truck with company logo" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Our professional fleet delivers reliable LPG gas service across Gauteng
            </p>
          </div>
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
