"use client"

import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Shield, Wrench, Gauge } from "lucide-react"
import Link from "next/link"

export default function RegulatorsPage() {
  const products = [
    {
      icon: Gauge,
      name: "Pressure Regulators",
      description: "High-quality regulators for safe and consistent LPG gas pressure control.",
      features: ["Multiple PSI options", "Weather-resistant", "Easy installation", "Long-lasting durability"],
      image: "/regulator.png",
    },
    {
      icon: Wrench,
      name: "Hoses & Connectors",
      description: "Premium hoses and fittings for secure LPG gas connections.",
      features: ["Various lengths", "Flexible design", "Leak-proof", "Industry certified"],
      image: "/hoses.png",
    },
    {
      icon: Shield,
      name: "Safety Equipment",
      description: "Essential safety devices and monitoring equipment for LPG gas systems.",
      features: ["Gas detectors", "Shut-off valves", "Pressure gauges", "Emergency kits"],
      image: "/safety.png",
    },
  ]

  const accessories = [
    "Tank gauges and monitors",
    "Mounting brackets and straps",
    "Protective covers",
    "Valve adapters",
    "Quick-connect fittings",
    "Extension hoses",
    "Leak detection solution",
    "Winterization kits",
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Regulators & Accessories"
        description="Premium equipment and accessories for safe, efficient LPG gas system operation."
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quality Equipment You Can Trust</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer a comprehensive selection of regulators, hoses, fittings, and safety equipment to ensure your
              LPG gas system operates safely and efficiently.
            </p>
          </div>

          {/* Main Products */}
          <div className="space-y-16 mb-20">
            {products.map((product, index) => {
              const Icon = product.icon
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
                      <h3 className="text-2xl md:text-3xl font-bold">{product.name}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

                    <div className="space-y-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className="gradient-accent text-white"
                      onClick={() => {
                        window.location.href = '/order'
                      }}
                    >
                      Order Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                    <div className="relative glass-card p-4 rounded-2xl">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="rounded-lg w-full h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Accessories Grid */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Accessories</h2>
              <p className="text-lg text-muted-foreground">Everything you need for complete LPG gas system setup</p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {accessories.map((accessory, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{accessory}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Installation Available</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our certified technicians can install and configure all equipment to ensure optimal performance and
                  safety.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-sky flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">Certified Experts</h3>
                  <p className="text-sm text-muted-foreground">Licensed and insured technicians</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-sky flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">Quality Guaranteed</h3>
                  <p className="text-sm text-muted-foreground">Warranty on all installations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-sky flex items-center justify-center mx-auto mb-4">
                    <Wrench className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">Ongoing Support</h3>
                  <p className="text-sm text-muted-foreground">Maintenance and repair services</p>
                </div>
              </div>

              <div className="text-center">
                <Link href="/contact">
                  <Button size="lg" className="gradient-accent text-white">
                    Schedule Installation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
