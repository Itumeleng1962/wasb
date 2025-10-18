"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Springfield, IL",
    rating: 5,
    text: "ProGas Energy has been servicing our home for over 10 years. Their reliability and customer service are unmatched. We never worry about running out of propane!",
    image: "/professional-black-woman-smiling-headshot.jpg",
  },
  {
    name: "Michael Chen",
    location: "Austin, TX",
    rating: 5,
    text: "As a business owner, I need a propane supplier I can trust. ProGas delivers on time, every time. Their commercial services have been a game-changer for our operations.",
    image: "/professional-black-man-smiling-headshot.jpg",
  },
  {
    name: "Emily Rodriguez",
    location: "Denver, CO",
    rating: 5,
    text: "The smart tank monitoring system is incredible! I love getting notifications on my phone and never having to worry about scheduling deliveries. Highly recommend!",
    image: "/happy-black-woman-customer-smiling.jpg",
  },
  {
    name: "David Thompson",
    location: "Portland, OR",
    rating: 5,
    text: "Exceptional service from start to finish. The installation team was professional, and the pricing was transparent. ProGas Energy exceeded all our expectations.",
    image: "/satisfied-black-male-customer-smiling.jpg",
  },
  {
    name: "Lisa Martinez",
    location: "Phoenix, AZ",
    rating: 5,
    text: "Their 24/7 customer support saved us during an emergency. The team responded quickly and professionally. We feel confident knowing they have our back.",
    image: "/professional-black-woman-testimonial-smiling.jpg",
  },
  {
    name: "Robert Williams",
    location: "Nashville, TN",
    rating: 5,
    text: "Switched to ProGas Energy last year and couldn't be happier. Better prices, better service, and they truly care about their customers. Five stars all the way!",
    image: "/happy-black-man-review-smiling.jpg",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4 text-balance">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Don't just take our word for it—hear from thousands of satisfied customers across the country.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#FF8C32] text-[#FF8C32]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/80 mb-6 text-pretty leading-relaxed">"{testimonial.text}"</p>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full">
            <Star className="h-5 w-5 fill-[#FF8C32] text-[#FF8C32]" />
            <span className="font-semibold text-foreground">4.9/5 Average Rating</span>
            <span className="text-muted-foreground">from 10,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
