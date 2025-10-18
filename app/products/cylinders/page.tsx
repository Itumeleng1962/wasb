import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CylindersPage() {
  const cylinderSizes = [
    {
      name: "20 lb Cylinder",
      capacity: "20 lbs / 4.7 gallons",
      uses: ["Grills", "Patio heaters", "Small appliances"],
      price: "From $49.99",
      popular: true,
    },
    {
      name: "30 lb Cylinder",
      capacity: "30 lbs / 7 gallons",
      uses: ["RVs", "Forklifts", "Commercial cooking"],
      price: "From $79.99",
      popular: false,
    },
    {
      name: "40 lb Cylinder",
      capacity: "40 lbs / 9.4 gallons",
      uses: ["Industrial equipment", "Large appliances", "Construction"],
      price: "From $99.99",
      popular: false,
    },
    {
      name: "100 lb Cylinder",
      capacity: "100 lbs / 23.6 gallons",
      uses: ["Commercial operations", "Temporary heating", "Events"],
      price: "From $199.99",
      popular: false,
    },
  ]

  const features = [
    "DOT certified for safety",
    "Regular inspection and maintenance",
    "Convenient exchange program",
    "Delivery available",
    "Competitive pricing",
    "Expert installation support",
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Propane Cylinders"
        description="Portable propane solutions for residential, commercial, and recreational applications."
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Reliable Portable Propane</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our propane cylinders are perfect for grilling, heating, and powering various appliances. Available in
                multiple sizes to meet your specific needs.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <Button className="gradient-accent text-white">
                  Order Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="glass-card p-6 rounded-2xl">
                <img src="/propane-gas-cylinders-in-various-sizes.jpg" alt="Propane cylinders" className="rounded-lg w-full" />
              </div>
            </div>
          </div>

          {/* Cylinder Sizes */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Sizes</h2>
              <p className="text-lg text-muted-foreground">Choose the perfect size for your application</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cylinderSizes.map((cylinder, index) => (
                <div
                  key={index}
                  className={`glass-card p-6 rounded-xl hover:shadow-xl transition-shadow relative ${
                    cylinder.popular ? "ring-2 ring-accent" : ""
                  }`}
                >
                  {cylinder.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-accent to-sky text-white text-xs font-bold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{cylinder.name}</h3>
                  <p className="text-accent font-semibold mb-4">{cylinder.capacity}</p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-semibold text-muted-foreground">Ideal for:</p>
                    {cylinder.uses.map((use, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-sm text-muted-foreground">{use}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-2xl font-bold mb-4">{cylinder.price}</p>
                  <Link href={`/products/cylinders/${cylinder.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button variant="outline" className="w-full bg-transparent">
                      View Details
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exchange Program */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Cylinder Exchange Program</h2>
              <p className="text-lg text-muted-foreground text-center mb-8 leading-relaxed">
                Save time and hassle with our convenient cylinder exchange program. Simply bring your empty cylinder to
                any of our locations and exchange it for a full one.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-sky flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="font-bold mb-2">Bring Empty Cylinder</h3>
                  <p className="text-sm text-muted-foreground">Visit any ProGas location</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-sky flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="font-bold mb-2">Quick Exchange</h3>
                  <p className="text-sm text-muted-foreground">Get a full cylinder instantly</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-sky flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="font-bold mb-2">Pay & Go</h3>
                  <p className="text-sm text-muted-foreground">Simple pricing, no waiting</p>
                </div>
              </div>
              <div className="text-center">
                <Link href="/contact">
                  <Button size="lg" className="gradient-accent text-white">
                    Find Nearest Location
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
