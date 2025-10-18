import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Award, Shield, Target } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "We prioritize safety in every aspect of our operations, ensuring the highest standards for our customers and team.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to delivering exceptional service and maintaining the highest quality standards in the industry.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Your satisfaction is our priority. We build lasting relationships through reliable service and support.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously improving our services and adopting new technologies to serve you better.",
    },
  ]

  const stats = [
    { value: "35+", label: "Years of Experience" },
    { value: "50K+", label: "Happy Customers" },
    { value: "200+", label: "Team Members" },
    { value: "15", label: "States Served" },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="About ProGas Energy"
        description="Leading the propane industry with reliable service, innovative solutions, and unwavering commitment to safety since 1985."
      />

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Trusted Energy Partner</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                For over three decades, ProGas Energy has been at the forefront of propane delivery and energy
                solutions. We've built our reputation on reliability, safety, and exceptional customer service.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From residential homes to large industrial facilities, we provide comprehensive propane solutions
                tailored to meet your unique needs. Our commitment to innovation and sustainability drives us to
                continuously improve our services and exceed customer expectations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about/our-story">
                  <Button className="gradient-accent text-white">
                    Our Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about/leadership">
                  <Button variant="outline">Meet Our Team</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card p-8 rounded-2xl">
                <img
                  src="/modern-propane-facility-with-trucks.jpg"
                  alt="ProGas Energy facility"
                  className="rounded-lg w-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-sky/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="glass-card p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-sky flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the ProGas Difference?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of satisfied customers who trust us for their propane needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gradient-accent text-white">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/about/certification">
                <Button size="lg" variant="outline">
                  View Certifications
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
