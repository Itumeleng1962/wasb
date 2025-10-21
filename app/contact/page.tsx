"use client"

import type React from "react"

import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zipCode: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: "+27 11568 7912",
      description: "Call us for immediate assistance",
    },
    {
      icon: Phone,
      title: "Phone (Courage)",
      details: "+27 83 297 6995",
      description: "Contact Courage directly",
    },
    {
      icon: Phone,
      title: "Phone (Noah)",
      details: "+27 61 654 7229",
      description: "Contact Noah directly",
    },
    {
      icon: Mail,
      title: "Email",
      details: "admin@wasbdistributers.co.za",
      description: "Send us an email for inquiries",
    },
  ]

  const locations = [
    {
      city: "Johannesburg",
      address: "Gauteng, South Africa",
      phone: "+27 11568 7912",
      hours: "Service Area: Gauteng Wide",
    },
    {
      city: "Pretoria",
      address: "Gauteng, South Africa",
      phone: "+27 83 297 6995",
      hours: "Contact: Courage",
    },
    {
      city: "Centurion",
      address: "Gauteng, South Africa",
      phone: "+27 61 654 7229",
      hours: "Contact: Noah",
    },
    {
      city: "Sandton",
      address: "Gauteng, South Africa",
      phone: "+27 11568 7912",
      hours: "Service Area: Gauteng Wide",
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Contact Us"
        description="We're here to help! Get in contact with us today."
      />

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <div key={index} className="glass-card p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-sky flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{method.title}</h3>
                  <p className="text-accent font-semibold mb-1">{method.details}</p>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </div>
              )
            })}
          </div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium mb-2">
                    Postal Code *
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    required
                    maxLength={4}
                    pattern="[0-9]{4}"
                    value={formData.zipCode}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 4)
                      setFormData({ ...formData, zipCode: value })
                    }}
                    placeholder="1234"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Enter your 4-digit South African postal code</p>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a subject</option>
                    <option value="new-service">New Service Request</option>
                    <option value="delivery">Delivery Inquiry</option>
                    <option value="billing">Billing Question</option>
                    <option value="technical">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>

                <Button type="submit" className="w-full gradient-accent text-white">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div>
              <div className="glass-card p-8 rounded-2xl mb-6">
                <h3 className="text-xl font-bold mb-4">Emergency Service</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  If you smell gas or have an emergency, evacuate immediately and call our emergency line:
                </p>
                <a href="tel:+27115687912" className="flex items-center gap-3 text-2xl font-bold text-accent">
                  <Phone className="h-6 w-6" />
                  +27 11568 7912
                </a>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Customer Portal</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Existing customers can manage their account, view delivery history, and make payments online.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Access Portal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Locations</h2>
            <p className="text-lg text-muted-foreground">Visit us at any of our branch locations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {locations.map((location, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">{location.city}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    {location.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    {location.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4 flex-shrink-0" />
                    {location.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
