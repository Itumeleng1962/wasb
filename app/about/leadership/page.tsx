import { PageHeader } from "@/components/page-header"
import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LeadershipPage() {
  const leaders = [
    {
      name: "Courage",
      role: "Chief Executive Officer",
      bio: "Courage leads WASB Gas Distributers with a focus on reliability, safety, and innovation since 2022.",
      image: "/placeholder.svg",
    },
    {
      name: "Noah",
      role: "Chief Operating Officer",
      bio: "Noah oversees daily operations and service excellence, ensuring seamless delivery for our customers.",
      image: "/placeholder.svg",
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Leadership Team"
        description="Meet the experienced professionals guiding WASB Gas Distributers toward a sustainable and innovative future."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experienced Leadership</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our leadership team brings focused expertise in energy, operations, technology, and customer service to
              deliver excellence every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="glass-card rounded-xl overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-accent font-semibold mb-3">{leader.role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">{leader.bio}</p>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
