"use client"

import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, ShoppingCart, MapPin, Phone, Mail, User } from "lucide-react"
import { useState } from "react"

export default function OrderPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    city: "",
    province: "",
    message: "",
  })

  const [selectedProducts, setSelectedProducts] = useState<{[key: string]: number}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const products = [
    {
      id: "cylinder-9kg",
      name: "9 kg Cylinder",
      capacity: "9 kg / 17.8 liters",
      price: 49.99,
      description: "Perfect for grills, patio heaters, and small appliances",
      popular: true,
    },
    {
      id: "cylinder-14kg",
      name: "14 kg Cylinder",
      capacity: "14 kg / 26.7 liters",
      price: 79.99,
      description: "Ideal for RVs, forklifts, and commercial cooking",
      popular: false,
    },
    {
      id: "cylinder-19kg",
      name: "19 kg Cylinder",
      capacity: "19 kg / 36.0 liters",
      price: 99.99,
      description: "Great for industrial equipment and large appliances",
      popular: false,
    },
    {
      id: "cylinder-48kg",
      name: "48 kg Cylinder",
      capacity: "48 kg / 95.0 liters",
      price: 199.99,
      description: "Perfect for commercial operations and events",
      popular: false,
    },
    {
      id: "regulator-pressure",
      name: "Pressure Regulator",
      price: 25.99,
      description: "High-quality regulator for safe LPG gas pressure control",
      popular: false,
    },
    {
      id: "hose-connector",
      name: "Hose & Connector Set",
      price: 35.99,
      description: "Premium hoses and fittings for secure connections",
      popular: false,
    },
  ]

  const handleProductChange = (productId: string, quantity: number) => {
    if (quantity === 0) {
      const newSelected = { ...selectedProducts }
      delete newSelected[productId]
      setSelectedProducts(newSelected)
    } else {
      setSelectedProducts({ ...selectedProducts, [productId]: quantity })
    }
  }

  const calculateTotal = () => {
    return Object.entries(selectedProducts).reduce((total, [productId, quantity]) => {
      const product = products.find(p => p.id === productId)
      return total + (product ? product.price * quantity : 0)
    }, 0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const orderDetails = Object.entries(selectedProducts).map(([productId, quantity]) => {
        const product = products.find(p => p.id === productId)
        return {
          name: product?.name || productId,
          quantity,
          price: product?.price || 0,
          total: (product?.price || 0) * quantity
        }
      })

      const orderData = {
        ...formData,
        products: orderDetails,
        total: calculateTotal(),
        timestamp: new Date().toISOString()
      }

      // Simulate email sending (replace with actual email service)
      console.log("Order submitted:", orderData)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus("success")
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        postalCode: "",
        city: "",
        province: "",
        message: "",
      })
      setSelectedProducts({})
      
    } catch (error) {
      console.error("Order submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Place Your Order"
        description="Select your LPG gas products and we'll deliver them to your location."
      />

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 rounded-2xl grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">Need it fast?</p>
              <h2 className="text-3xl font-bold mb-4">Call or WhatsApp Our Depot</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Share this flyer with your team. It highlights our LPG sizes (9kg, 14kg, 19kg and 48kg) and doubles as a
                quick-reference card for store managers.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span>Call or WhatsApp: 078 058 4824 / 067 783 9400</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span>orders: admin@wasbdistributers.co.za</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>Portion 22 Cnr Deysel Street & Bothma Road, Zandspruit</span>
                </li>
              </ul>
            </div>
            <div className="glass-card rounded-2xl overflow-hidden">
              <img src="/pricing.jpeg" alt="WASB order flyer" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Product Selection */}
            <div className="lg:col-span-2">
              <Card className="glass-card p-8 rounded-2xl border-0 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <ShoppingCart className="h-6 w-6 text-accent" />
                  <h2 className="text-2xl font-bold">Select Products</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className={`glass-card p-6 rounded-xl hover:shadow-lg transition-shadow relative ${
                        product.popular ? "ring-2 ring-accent" : ""
                      }`}
                    >
                      {product.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-accent to-sky text-white text-xs font-bold px-3 py-1 rounded-full">
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      {product.capacity && (
                        <p className="text-accent font-semibold mb-2">{product.capacity}</p>
                      )}
                      <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                      <p className="text-2xl font-bold mb-4">R{product.price}</p>
                      
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleProductChange(product.id, Math.max(0, (selectedProducts[product.id] || 0) - 1))}
                          disabled={!selectedProducts[product.id]}
                        >
                          -
                        </Button>
                        <span className="text-lg font-semibold min-w-[2rem] text-center">
                          {selectedProducts[product.id] || 0}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleProductChange(product.id, (selectedProducts[product.id] || 0) + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Order Summary */}
              {Object.keys(selectedProducts).length > 0 && (
                <Card className="glass-card p-6 rounded-2xl border-0">
                  <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                  <div className="space-y-3">
                    {Object.entries(selectedProducts).map(([productId, quantity]) => {
                      const product = products.find(p => p.id === productId)
                      return (
                        <div key={productId} className="flex justify-between items-center">
                          <span className="text-muted-foreground">
                            {product?.name} x{quantity}
                          </span>
                          <span className="font-semibold">
                            R{((product?.price || 0) * quantity).toFixed(2)}
                          </span>
                        </div>
                      )
                    })}
                    <div className="border-t pt-3 flex justify-between items-center text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-accent">R{calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </Card>
              )}
            </div>

            {/* Order Form */}
            <div>
              <Card className="glass-card p-8 rounded-2xl border-0 sticky top-8">
                <div className="flex items-center gap-3 mb-6">
                  <User className="h-6 w-6 text-accent" />
                  <h2 className="text-2xl font-bold">Delivery Information</h2>
                </div>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                    <div className="flex items-center gap-2 text-green-800">
                      <Check className="h-5 w-5" />
                      <span className="font-semibold">Order Submitted Successfully!</span>
                    </div>
                    <p className="text-sm text-green-700 mt-1">
                      We'll contact you within 24 hours to confirm your order and delivery details.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
                    <div className="flex items-center gap-2 text-red-800">
                      <span className="font-semibold">Error submitting order</span>
                    </div>
                    <p className="text-sm text-red-700 mt-1">
                      Please try again or contact us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="h-12"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-12"
                      placeholder="+27 11 123 4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium mb-2">
                      Street Address *
                    </label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="h-12"
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium mb-2">
                        Postal Code *
                      </label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        type="text"
                        required
                        maxLength={4}
                        pattern="[0-9]{4}"
                        value={formData.postalCode}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '').slice(0, 4)
                          setFormData({ ...formData, postalCode: value })
                        }}
                        className="h-12"
                        placeholder="1234"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium mb-2">
                        City *
                      </label>
                      <Input
                        id="city"
                        name="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="h-12"
                        placeholder="Johannesburg"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="province" className="block text-sm font-medium mb-2">
                      Province *
                    </label>
                    <select
                      id="province"
                      name="province"
                      required
                      value={formData.province}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent h-12"
                    >
                      <option value="">Select Province</option>
                      <option value="Gauteng">Gauteng</option>
                      <option value="Western Cape">Western Cape</option>
                      <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                      <option value="Eastern Cape">Eastern Cape</option>
                      <option value="Free State">Free State</option>
                      <option value="Limpopo">Limpopo</option>
                      <option value="Mpumalanga">Mpumalanga</option>
                      <option value="North West">North West</option>
                      <option value="Northern Cape">Northern Cape</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Additional Notes
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Any special delivery instructions or notes..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gradient-accent text-white hover:opacity-90 transition-opacity"
                    disabled={isSubmitting || Object.keys(selectedProducts).length === 0}
                  >
                    {isSubmitting ? "Submitting Order..." : "Place Order"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By placing an order, you agree to our terms and conditions.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
