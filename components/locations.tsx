"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search } from "lucide-react"
import { useState } from "react"

const locations = [
  { province: "Gauteng", cities: "Bothma St & Deysel Rd, Wilgespruit 190-Iq, Roodepoort, 1724" },
]

export function Locations() {
  const [zipCode, setZipCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [zipError, setZipError] = useState<string | null>(null)
  const [searchResult, setSearchResult] = useState<{ city: string; province: string } | null>(null)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setZipError(null)
    setSearchResult(null)

    const zip = zipCode.trim()
    const isFourDigitZip = /^\d{4}$/.test(zip)
    if (!isFourDigitZip) {
      setZipError("Please enter a valid 4-digit postal code.")
      return
    }

    try {
      setIsLoading(true)
      const response = await fetch(`https://api.zippopotam.us/za/${zip}`)
      if (!response.ok) {
        throw new Error("Postal code not found")
      }
      const data = await response.json()
      const place = data.places?.[0]
      if (!place) {
        throw new Error("No location data for this postal code")
      }
      const city = place["place name"] as string
      const province = data["state"] || place["state"]
      setSearchResult({ city, province })
    } catch (err) {
      setZipError("We couldn't find that postal code. Please try another.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="locations" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-primary opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4 text-balance">
            Find WASB Gas Distributers Near You
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            We proudly serve communities across South Africa with local service and national reliability.
          </p>
        </div>

        {/* Location Finder */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="glass-card p-8 rounded-2xl border-0">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter your postal code"
                    value={zipCode}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 4)
                      setZipCode(value)
                    }}
                    className="pl-10 h-12 text-lg"
                    maxLength={4}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="gradient-accent text-white hover:opacity-90 transition-opacity"
                >
                  <Search className="h-5 w-5 mr-2" />
                  {isLoading ? "Searching..." : "Find Location"}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Enter your postal code to find the nearest WASB Gas Distributers location and get instant pricing.
              </p>
            </form>

            {/* Feedback and results */}
            {zipError && (
              <div className="mt-4 text-center text-red-600 text-sm">{zipError}</div>
            )}
            {searchResult && !zipError && (
              <div className="mt-6">
                <div className="glass-card p-4 rounded-xl flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Nearest service area</p>
                    <h4 className="text-lg font-bold text-foreground">{searchResult.city}, {searchResult.province}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Great news! We serve this area. Get instant pricing and schedule delivery.
                    </p>
                    <div className="mt-3 flex gap-3">
                      <Button 
                        className="gradient-accent text-white"
                        onClick={() => {
                          window.location.href = '/order'
                        }}
                      >
                        Get Instant Pricing
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => {
                          // Scroll to contact form or redirect to contact page
                          const contactSection = document.getElementById('contact')
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' })
                          } else {
                            window.location.href = '/contact'
                          }
                        }}
                      >
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Company Delivery Fleet */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Our Delivery Fleet</h3>
          <div className="glass-card p-6 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="/Trucks.png" 
                  alt="WASB Gas Distributers delivery fleet with company logo" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="/Truck.png" 
                  alt="WASB Gas Distributers delivery truck with company logo" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Our branded fleet ensures professional and reliable delivery to your location
            </p>
          </div>
        </div>

        {/* Service Areas */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Our Service Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <Card
                key={index}
                className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border-0"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">{location.province}</h4>
                    <p className="text-sm text-muted-foreground">{location.cities}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Don't see your area listed? We're always expanding!</p>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 bg-transparent"
            onClick={() => {
              // Scroll to contact form or redirect to contact page
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              } else {
                window.location.href = '/contact'
              }
            }}
          >
            Contact Us About Service
          </Button>
        </div>
      </div>
    </section>
  )
}
