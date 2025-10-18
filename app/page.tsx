import { Hero } from "@/components/hero"
import { PortalSelection } from "@/components/portal-selection"
import { Services } from "@/components/services"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { Locations } from "@/components/locations"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PortalSelection />
      <Services />
      <Benefits />
      <Testimonials />
      <Locations />
    </main>
  )
}
