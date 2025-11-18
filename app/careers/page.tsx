"use client"
import { useState } from "react"
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
      title: "LPG Gas Delivery Driver",
      location: "Gauteng",
      type: "Full-time",
      department: "Operations",
      description: "Deliver LPG gas to residential and commercial customers with excellent customer service.",
    },
    {
      title: "Service Technician",
      location: "Gauteng",
      type: "Full-time",
      department: "Technical Services",
      description: "Install, maintain, and repair LPG gas systems and equipment for customers.",
    },
    {
      title: "Customer Service Representative",
      location: "Remote (Gauteng)",
      type: "Full-time",
      department: "Customer Support",
      description: "Provide exceptional support to customers via phone, email, and chat.",
    },
    {
      title: "Account Manager",
      location: "Gauteng",
      type: "Full-time",
      department: "Sales",
      description: "Manage commercial accounts and develop new business relationships.",
    },
    {
      title: "Safety Coordinator",
      location: "Gauteng",
      type: "Full-time",
      department: "Safety & Compliance",
      description: "Oversee safety programs and ensure compliance with industry regulations.",
    },
    {
      title: "Operations Manager",
      location: "Gauteng",
      type: "Full-time",
      department: "Operations",
      description: "Lead daily operations and manage team performance at regional facility.",
    },
  ]

  const [applyingJob, setApplyingJob] = useState<null | { title: string }>(null)
  const [form, setForm] = useState({ name: "", email: "", phone: "", resume: "", linkedin: "" })
  const [applyMethod, setApplyMethod] = useState<"linkedin" | "upload">("linkedin")
  const handleApply = (title: string) => {
    setApplyingJob({ title })
  }

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
        description="Build your career with a leader in the LPG gas industry. Discover opportunities to grow and make a difference."
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work at WASB Gas Distributers?</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                For over 3 years, WASB Gas Distributers has been more than just an LPG gas company—we're a family. We invest in
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
                <img src="/team.png" alt="WASB Gas Distributers team" className="rounded-lg w-full" />
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
            <p className="text-lg text-muted-foreground">Find your next opportunity with WASB Gas Distributers</p>
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
                  <Button variant="outline" className="bg-transparent flex-shrink-0" onClick={() => handleApply(job.title)}>
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
            <Button size="lg" className="gradient-accent text-white" onClick={() => handleApply("General Application") }>
              Submit General Application
            </Button>
          </div>
        </div>
      </section>

      {/* Apply Form Modal */}
      {applyingJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Apply for {applyingJob.title}</h3>
              <button onClick={() => setApplyingJob(null)} className="text-sm text-muted-foreground hover:underline">Close</button>
            </div>
            <form
              className="space-y-4"
              action="https://api.web3forms.com/submit"
              method="POST"
              encType="multipart/form-data"
            >
              {/* Web3Forms config */}
              <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY"} />
              <input type="hidden" name="subject" value={`New Application: ${applyingJob.title}`} />
              <input type="hidden" name="from_name" value="WASB Careers" />
              <input type="hidden" name="redirect" value="/careers?applied=1" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
              <input type="hidden" name="job_title" value={applyingJob.title} />

              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg bg-background"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg bg-background"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-2 border rounded-lg bg-background"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              {/* Apply method selector */}
              <div className="flex items-center gap-4 pt-2">
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="radio" name="apply_method" value="linkedin" checked={applyMethod === "linkedin"} onChange={() => setApplyMethod("linkedin")} />
                  Apply with LinkedIn
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="radio" name="apply_method" value="upload" checked={applyMethod === "upload"} onChange={() => setApplyMethod("upload")} />
                  Upload a Resume
                </label>
              </div>

              {applyMethod === "linkedin" ? (
                <div>
                  <label className="block text-sm font-medium mb-1">LinkedIn Profile URL</label>
                  <input
                    type="url"
                    name="linkedin"
                    className="w-full px-4 py-2 border rounded-lg bg-background"
                    value={form.linkedin}
                    onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                    placeholder="https://www.linkedin.com/in/your-profile"
                    required
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium mb-1">Resume File (PDF, DOC, DOCX)</label>
                  <input
                    type="file"
                    name="resume_file"
                    className="w-full px-4 py-2 border rounded-lg bg-background"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </div>
              )}
              <div className="flex justify-end gap-3 pt-2">
                <Button variant="outline" className="bg-transparent" type="button" onClick={() => setApplyingJob(null)}>Cancel</Button>
                <Button type="submit" className="gradient-accent text-white">Submit Application</Button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}
