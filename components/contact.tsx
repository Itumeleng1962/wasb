"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MessageSquare, Clock } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4 text-balance">Get in Touch</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Have questions? Need a quote? Our team is here to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-card p-8 rounded-2xl border-0">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us how we can help you..."
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full gradient-accent text-white hover:opacity-90 transition-opacity"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="glass-card p-8 rounded-2xl border-0 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Call Us</h4>
                  <p className="text-muted-foreground mb-2">Available 24/7 for emergencies</p>
                  <a
                    href="tel:0782618059"
                    className="text-xl font-bold text-[#009FFD] hover:text-[#0A1D56] transition-colors"
                  >
                    0782618059
                  </a>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-8 rounded-2xl border-0 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Email Us</h4>
                  <p className="text-muted-foreground mb-2">We'll respond within 24 hours</p>
                  <a
                    href="mailto:support@progasenergy.com"
                    className="text-lg font-semibold text-[#009FFD] hover:text-[#0A1D56] transition-colors"
                  >
                    support@progasenergy.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-8 rounded-2xl border-0 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Live Chat</h4>
                  <p className="text-muted-foreground mb-2">Chat with our support team</p>
                  <Button
                    variant="link"
                    className="text-lg font-semibold text-[#009FFD] hover:text-[#0A1D56] p-0 h-auto"
                  >
                    Start Chat →
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-8 rounded-2xl border-0 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Business Hours</h4>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                    <p>Saturday: 8:00 AM - 5:00 PM</p>
                    <p>Sunday: 9:00 AM - 3:00 PM</p>
                    <p className="text-[#FF8C32] font-semibold mt-2">Emergency Service: 24/7</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
