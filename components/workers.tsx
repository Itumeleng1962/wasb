"use client"

import { Card } from "@/components/ui/card"
import { Users, Award, Shield } from "lucide-react"
import { useState, useEffect } from "react"

const workerPhotos = [
  {
    src: "/workers1.jpeg",
    alt: "WASB Gas Distributers team members at gas storage facility",
    description: "Our dedicated team at the gas storage facility",
  },
  {
    src: "/workers2.jpeg",
    alt: "WASB Gas Distributers workers with delivery truck",
    description: "Our delivery team ready to serve you",
  },
]

const teamHighlights = [
  {
    icon: Users,
    title: "200+ Team Members",
    description: "A diverse and skilled workforce committed to excellence",
  },
  {
    icon: Shield,
    title: "Safety Certified",
    description: "All team members trained in safety protocols and best practices",
  },
  {
    icon: Award,
    title: "Professional Excellence",
    description: "Continuous training ensures the highest service standards",
  },
]

export function Workers() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section id="workers" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1D56]/5 to-[#009FFD]/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4 text-balance">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Our dedicated workers are the heart of WASB Gas Distributers. They ensure safe, reliable
            service every day, from our facilities to your doorstep.
          </p>
        </div>

        {/* Team Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {teamHighlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <Card
                key={index}
                className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 border-0 text-center"
              >
                <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Worker Photos Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {workerPhotos.map((photo, index) => (
            <Card
              key={index}
              className="glass-card p-4 rounded-2xl hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(photo.src)}
            >
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{photo.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Add More Photos Section */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Want to see more of our team in action? Check out our{" "}
            <a href="/about" className="text-accent hover:underline font-medium">
              About page
            </a>{" "}
            for more stories.
          </p>
        </div>
      </div>

      {/* Image Modal */}
      {isMounted && selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <button
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <img
                src={selectedImage}
                alt="Worker photo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

