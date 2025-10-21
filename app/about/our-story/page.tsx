import { PageHeader } from "@/components/page-header"
import { Calendar, MapPin, TrendingUp, Award } from "lucide-react"

export default function OurStoryPage() {
  const timeline = [
    {
      year: "1985",
      title: "The Beginning",
      description:
        "WASB Gas Distributers was founded with a simple mission: provide reliable propane service to local communities.",
      icon: MapPin,
    },
    {
      year: "1995",
      title: "Regional Expansion",
      description: "Expanded operations to serve five states, establishing ourselves as a trusted regional provider.",
      icon: TrendingUp,
    },
    {
      year: "2005",
      title: "Innovation Leader",
      description: "Introduced automated tank monitoring and online customer portal, revolutionizing service delivery.",
      icon: Award,
    },
    {
      year: "2015",
      title: "Sustainability Focus",
      description: "Launched green initiatives and invested in eco-friendly fleet and renewable propane programs.",
      icon: Award,
    },
    {
      year: "2025",
      title: "Industry Leader",
      description: "Serving 50,000+ customers across 15 states with cutting-edge technology and unmatched service.",
      icon: Award,
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Story"
        description="Four decades of dedication, innovation, and service excellence in the propane industry."
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Building Trust Since 1985</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What started as a small family business has grown into one of the most trusted names in propane energy.
              Our journey is marked by continuous innovation, unwavering commitment to safety, and dedication to serving
              our communities.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent via-sky to-primary hidden lg:block" />

            <div className="space-y-16">
              {timeline.map((item, index) => {
                const Icon = item.icon
                const isEven = index % 2 === 0

                return (
                  <div key={index} className="relative">
                    <div
                      className={`flex flex-col lg:flex-row gap-8 items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                    >
                      {/* Content */}
                      <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                        <div className="glass-card p-6 rounded-xl">
                          <div className="flex items-center gap-3 mb-3 justify-start lg:justify-end">
                            <Calendar className="h-5 w-5 text-accent" />
                            <span className="text-2xl font-bold text-accent">{item.year}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>

                      {/* Center icon */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-sky flex items-center justify-center shadow-lg">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>

                      {/* Spacer for alignment */}
                      <div className="flex-1 hidden lg:block" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide safe, reliable, and sustainable propane energy solutions while building lasting relationships
                with our customers through exceptional service and innovative technology.
              </p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and innovative propane energy provider, leading the industry in sustainability,
                safety, and customer satisfaction while empowering communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
