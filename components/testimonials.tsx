"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Andrew",
    location: "Gauteng",
    rating: 5,
    text: "Fantastic service from speaking with the sales representative, speaking with the office staff. Delivery driver called before delivery as requested and was pleasant to deal with. Will be recommending to others.",
    image: "/professional-black-man-smiling-headshot.jpg",
  },
  {
    name: "Jessica",
    location: "Gauteng",
    rating: 5,
    text: "Great service. We were stuck needing an LPG gas delivery. Our regular supplier was unable to provide the service. These guys arrived on the same day and assisted us after one phone call. They really went out of their way. Highly recommended!!!",
    image: "/professional-black-woman-testimonial-smiling.jpg",
  },
  {
    name: "Michael",
    location: "Johannesburg",
    rating: 5,
    text: "WASB Gas Distributers has been our go-to supplier for LPG gas bottles. Their delivery service is reliable and their staff is always professional and helpful.",
    image: "/satisfied-black-male-customer-smiling.jpg",
  },
  {
    name: "Sarah",
    location: "Pretoria",
    rating: 5,
    text: "Excellent service! They deliver on time and the quality of their LPG gas is always consistent. Highly recommend for both home and business use.",
    image: "/happy-black-woman-customer-smiling.jpg",
  },
  {
    name: "David",
    location: "Centurion",
    rating: 5,
    text: "The team at WASB Gas Distributers really understands customer service. They go above and beyond to ensure we have reliable gas supply for our business operations.",
    image: "/happy-black-man-review-smiling.jpg",
  },
  {
    name: "Lisa",
    location: "Sandton",
    rating: 5,
    text: "Professional, reliable, and affordable. WASB Gas Distributers has been supplying our home with LPG gas for years and we've never had any issues.",
    image: "/professional-black-woman-smiling-headshot.jpg",
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
