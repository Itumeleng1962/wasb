import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { ArrowRight, Package, Truck, Wrench } from "lucide-react"
import Link from "next/link"

export default function ProductsPage() {
  const productCategories = [
    {
      icon: Package,
      title: "Cylinders",
      description: "Portable propane cylinders for residential, commercial, and recreational use.",
      features: ["Multiple sizes available", "Exchange programs", "Safety certified", "Nationwide availability"],
      href: "/products/cylinders",
      image: "/propane-cylinders-various-sizes.jpg",
    },
    {
      icon: Truck,
      title: "Bulk Gas",
      description: "Large-scale propane solutions for homes, businesses, and industrial facilities.",
      features: ["Custom tank sizing", "Automatic delivery", "Competitive pricing", "24/7 monitoring"],
      href: "/products/bulk-gas",
      image: "/bulk-propane-tank-installation.jpg",
    },
    {
      icon: Wrench,
      title: "Regulators & Accessories",
      description: "High-quality equipment and accessories for safe propane system operation.",
      features: ["Premium quality", "Expert installation", "Maintenance support", "Warranty included"],
      href: "/products/regulators",
      image: "/propane-regulators-and-accessories.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Products"
        description="Comprehensive propane solutions designed to meet your residential, commercial, and industrial needs."
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quality Products for Every Need</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From portable cylinders to large-scale bulk installations, we offer a complete range of propane products
              backed by expert service and support.
            </p>
          </div>

          {/* Product Categories */}
          <div className="space-y-16">
            {productCategories.map((category, index) => {
              const Icon = category.icon
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
                      <h3 className="text-2xl md:text-3xl font-bold">{category.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{category.description}</p>

                    <div className="space-y-3 mb-8">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={category.href}>
                      <Button className="gradient-accent text-white">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                    <div className="relative glass-card p-4 rounded-2xl">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        className="rounded-lg w-full h-80 object-cover"
                      />
                      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 rounded-2xl text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our product specialists are here to help you find the perfect propane solution for your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-accent text-white">
                  Contact Us
                </Button>
              </Link>
              <a href="tel:0782618059">
                <Button size="lg" variant="outline">
                  Call 0782618059
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
