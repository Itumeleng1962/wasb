import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, TrendingUp, Heart, Award, MapPin, Briefcase } from "lucide-react"

export default function CareersPage() {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision insurance for you and your family.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Professional development programs and clear advancement opportunities.",
    },
    {
      icon: Award,
      title: "Competitive Pay",
      description: "Industry-leading compensation with performance bonuses and incentives.",
    },
    {
      icon: Users,
      title: "Great Culture",
      description: "Supportive team environment focused on collaboration and success.",
    },
  ]

  const openings = [
    {
      title: "Propane Delivery Driver",
      location: "Multiple Locations",
      type: "Full-time",
      department: "Operations",
      description: "Deliver propane to residential and commercial customers with excellent customer service.",
    },
    {
      title: "Service Technician",
      location: "Denver, CO",
      type: "Full-time",
      department: "Technical Services",
      description: "Install, maintain, and repair propane systems and equipment for customers.",
    },
    {
      title: "Customer Service Representative",
      location: "Remote",
      type: "Full-time",
      department: "Customer Support",
      description: "Provide exceptional support to customers via phone, email, and chat.",
    },
    {
      title: "Account Manager",
      location: "Chicago, IL",
      type: "Full-time",
      department: "Sales",
      description: "Manage commercial accounts and develop new business relationships.",
    },
    {
      title: "Safety Coordinator",
      location: "Houston, TX",
      type: "Full-time",
      department: "Safety & Compliance",
      description: "Oversee safety programs and ensure compliance with industry regulations.",
    },
    {
      title: "Operations Manager",
      location: "Phoenix, AZ",
      type: "Full-time",
      department: "Operations",
      description: "Lead daily operations and manage team performance at regional facility.",
    },
  ]

  const values = [
    "Safety is our top priority in everything we do",
    "Customer satisfaction drives our success",
    "Integrity and honesty in all interactions",
    "Continuous improvement and innovation",
    "Respect and support for every team member",
    "Environmental responsibility and sustainability",
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Join Our Team"
        description="Build your career with a leader in the propane industry. Discover opportunities to grow and make a difference."
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work at ProGas?</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                For over 35 years, ProGas Energy has been more than just a propane company—we're a family. We invest in
                our people, provide opportunities for growth, and create an environment where everyone can thrive.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join a team that values safety, excellence, and customer service. Whether you're starting your career or
                looking for your next challenge, we have opportunities across operations, sales, technical services, and
                support roles.
              </p>
              <Button className="gradient-accent text-white">
                View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="glass-card p-6 rounded-2xl">
                <img src="/diverse-team-of-energy-company-employees-smiling.jpg" alt="ProGas team" className="rounded-lg w-full" />
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Employee Benefits</h2>
              <p className="text-lg text-muted-foreground">We take care of our team members</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="glass-card p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-sky flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground">The principles that guide our team</p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground">Find your next opportunity with ProGas</p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {openings.map((job, index) => (
              <div key={index} className="glass-card p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.department}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
                  </div>
                  <Button variant="outline" className="bg-transparent flex-shrink-0">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 rounded-2xl text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't See the Right Position?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future
              opportunities.
            </p>
            <Button size="lg" className="gradient-accent text-white">
              Submit General Application
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
