"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Logo } from "@/components/logo"
import { ChevronDown, Plus, Gauge, Truck, User, CreditCard, Calendar, DollarSign } from "lucide-react"

interface Tank {
  frame: string
  type: "horizontal" | "vertical"
  address: string
  size: string
  fullAddress: string
  tankType: string
  fillLevel: number
  deliveryType: string
  nextDelivery: string
  lastDelivery: string
}

export default function AccountOverview() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [activeMenuItem, setActiveMenuItem] = useState<string>("fuel-levels")

  const tanks: Tank[] = [
    {
      frame: "Frame 4",
      type: "horizontal",
      address: "1123 Main St.",
      size: "325G",
      fullAddress: "1123 Main St.",
      tankType: "325G Propane Fuel Tank",
      fillLevel: 76,
      deliveryType: "Automatic",
      nextDelivery: "1/10",
      lastDelivery: "10/22",
    },
    {
      frame: "Frame 5",
      type: "vertical",
      address: "1123 Main St.",
      size: "120G",
      fullAddress: "1123 Main St.",
      tankType: "120G Propane Fuel Tank",
      fillLevel: 25,
      deliveryType: "Automatic",
      nextDelivery: "1/10",
      lastDelivery: "10/22",
    },
    {
      frame: "Frame 6",
      type: "vertical",
      address: "1123 Main St.",
      size: "120G",
      fullAddress: "1123 Main St.",
      tankType: "120G Propane Fuel Tank",
      fillLevel: 55,
      deliveryType: "Automatic",
      nextDelivery: "1/10",
      lastDelivery: "10/22",
    },
  ]

  const getFillColor = (level: number) => {
    if (level >= 50) return "bg-green-500"
    if (level >= 30) return "bg-orange-500"
    return "bg-red-500"
  }

  const handleMenuClick = (menuItem: string) => {
    setActiveMenuItem(menuItem)
  }

  const renderMainContent = () => {
    switch (activeMenuItem) {
      case "fuel-levels":
        return (
          <>
            <h1 className="text-2xl font-semibold mb-6">Account Overview</h1>

            {/* Expandable Section */}
            <Card className="mb-6 p-4">
              <button
                onClick={() => setExpandedSection(expandedSection === "delivery" ? null : "delivery")}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-red-600 font-medium">How to tell you need a delivery?</span>
                <Plus className="h-6 w-6 text-red-600" />
              </button>
              {expandedSection === "delivery" && (
                <div className="mt-4 text-gray-600">
                  <p>
                    Check your tank gauge regularly. When the level drops below 30%, it's time to schedule a delivery.
                  </p>
                </div>
              )}
            </Card>

            {/* Tank Selection */}
            <div>
              <h2 className="text-xl font-medium mb-4">Select Your Gas Tank</h2>
              <div className="grid grid-cols-4 gap-4 text-sm text-gray-400 mb-4">
                <div>Frame</div>
                <div>Frame 4</div>
                <div>Frame 7</div>
                <div>Frame 10</div>
              </div>

              {/* Tank Cards */}
              <div className="space-y-6">
                {tanks.map((tank, index) => (
                  <Card key={index} className="p-6 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
                    <div className="grid grid-cols-4 gap-4 text-sm text-gray-400 mb-4">
                      <div>{index === 0 ? "Frame 2" : index === 1 ? "Frame 3" : "Frame 3"}</div>
                      <div>{tank.frame}</div>
                      <div>Frame {7 + index}</div>
                      <div>Frame {10 + index}</div>
                    </div>

                    <div className="grid grid-cols-4 gap-8 items-center">
                      {/* Tank Image */}
                      <div className="flex items-center justify-center">
                        {tank.type === "horizontal" ? (
                          <div className="w-24 h-16 border-4 border-gray-800 rounded-full relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-8 bg-gray-800"></div>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gray-800 rounded-sm"></div>
                            <div className="absolute inset-2 flex items-center justify-center text-xs font-bold text-blue-900">
                              LOGO
                            </div>
                          </div>
                        ) : (
                          <div className="w-16 h-24 border-4 border-gray-800 rounded-t-full rounded-b-lg relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-8 h-4 border-4 border-gray-800 border-b-0 rounded-t-lg"></div>
                            <div className="absolute inset-4 flex items-center justify-center text-xs font-bold text-blue-900">
                              LOGO
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Tank Info */}
                      <div>
                        <h3 className="font-semibold text-lg">{tank.address}</h3>
                        <p className="font-semibold text-lg">{tank.size}</p>
                        <p className="text-sm text-gray-600">{tank.fullAddress}</p>
                        <p className="text-sm text-gray-600">{tank.tankType}</p>
                      </div>

                      {/* Fill Level */}
                      <div>
                        <div className="mb-2">
                          <div className="w-full bg-gray-200 rounded-md h-8 overflow-hidden">
                            <div
                              className={`h-full flex items-center justify-center text-white font-semibold text-sm ${getFillColor(tank.fillLevel)}`}
                              style={{ width: `${tanks[index].fillLevel}%` }}
                            >
                              {tank.fillLevel}%
                            </div>
                          </div>
                        </div>
                        <p className="text-sm">{tank.deliveryType}</p>
                        <p className="text-sm">Estimated Next Delivery: {tank.nextDelivery}</p>
                      </div>

                      {/* Last Delivery */}
                      <div>
                        <p className="font-semibold">Last Delivery:</p>
                        <p className="text-lg">{tank.lastDelivery}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </>
        )

      case "schedule-deliveries":
        return (
          <>
            <h1 className="text-2xl font-semibold mb-6">Schedule Deliveries</h1>
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Select Tank for Delivery</h3>
                  <div className="space-y-3">
                    {tanks.map((tank, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        <input type="radio" name="tank" id={`tank-${index}`} className="w-4 h-4" />
                        <label htmlFor={`tank-${index}`} className="flex-1 cursor-pointer">
                          <p className="font-medium">
                            {tank.address} - {tank.size}
                          </p>
                          <p className="text-sm text-gray-600">Current Level: {tank.fillLevel}%</p>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Delivery Date</label>
                  <div className="flex gap-2">
                    <input type="date" className="flex-1 px-4 py-2 border rounded-lg" />
                    <Button className="bg-blue-900 hover:bg-blue-800">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule
                    </Button>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Delivery Information</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Deliveries are made Monday - Friday, 8am - 5pm</li>
                    <li>• Please ensure clear access to your tank</li>
                    <li>• You will receive a confirmation call 24 hours before delivery</li>
                  </ul>
                </div>
              </div>
            </Card>
          </>
        )

      case "manage-account":
        return (
          <>
            <h1 className="text-2xl font-semibold mb-6">Manage Your Account</h1>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Account Information</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input type="text" placeholder="John" className="w-full px-4 py-2 border rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input type="text" placeholder="Doe" className="w-full px-4 py-2 border rounded-lg" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="john.doe@example.com"
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input type="tel" placeholder="(555) 123-4567" className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                  <Button className="bg-blue-900 hover:bg-blue-800">Save Changes</Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Delivery Preferences</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="auto-delivery" className="w-4 h-4" defaultChecked />
                    <label htmlFor="auto-delivery">Enable automatic delivery</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="email-notifications" className="w-4 h-4" defaultChecked />
                    <label htmlFor="email-notifications">Receive email notifications</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="sms-notifications" className="w-4 h-4" />
                    <label htmlFor="sms-notifications">Receive SMS notifications</label>
                  </div>
                </div>
              </Card>
            </div>
          </>
        )

      case "make-payments":
        return (
          <>
            <h1 className="text-2xl font-semibold mb-6">Make Payments</h1>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Current Balance</h3>
                <div className="bg-blue-900 text-white p-6 rounded-lg mb-6">
                  <p className="text-sm mb-2">Amount Due</p>
                  <p className="text-4xl font-bold">R342.50</p>
                  <p className="text-sm mt-2">Due Date: 12/15/2024</p>
                </div>

                <h4 className="font-semibold mb-4">Payment Method</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Expiry Date</label>
                      <input type="text" placeholder="MM/YY" className="w-full px-4 py-2 border rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">CVV</label>
                      <input type="text" placeholder="123" className="w-full px-4 py-2 border rounded-lg" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Payment Amount</label>
                    <input type="text" placeholder="R342.50" className="w-full px-4 py-2 border rounded-lg" />
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Pay Now
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Payment History</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <p className="font-medium">Payment</p>
                      <p className="text-sm text-gray-600">11/15/2024</p>
                    </div>
                    <p className="font-semibold">R298.75</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <p className="font-medium">Payment</p>
                      <p className="text-sm text-gray-600">10/15/2024</p>
                    </div>
                    <p className="font-semibold">R315.20</p>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <div>
                      <p className="font-medium">Payment</p>
                      <p className="text-sm text-gray-600">09/15/2024</p>
                    </div>
                    <p className="font-semibold">R289.50</p>
                  </div>
                </div>
              </Card>
            </div>
          </>
        )

      default:
        return null
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-red-100/30 to-red-50 dark:from-red-950/20 dark:via-red-900/10 dark:to-red-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Portal Header + Nav to match reference */}
        <div className="bg-white rounded-t-xl border border-gray-200 overflow-hidden mb-8">
          {/* Header row with logo */}
          <div className="px-4 sm:px-6 py-3 border-b border-gray-200">
            <div className="flex items-center">
              <div className="h-16 flex items-center">
                <Logo showText={false} size="md" />
              </div>
            </div>
          </div>
          {/* Dark blue nav bar */}
          <div className="bg-blue-900 text-white">
            <div className="flex">
              <button className="px-6 py-4 bg-red-600 hover:bg-red-700 font-medium flex items-center gap-2" onClick={() => handleMenuClick("manage-account")}>
                Accounts
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="px-6 py-4 hover:bg-blue-800 font-medium flex items-center gap-2" onClick={() => handleMenuClick("make-payments")}>
                Make A Payment
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="px-6 py-4 hover:bg-blue-800 font-medium flex items-center gap-2" onClick={() => handleMenuClick("schedule-deliveries")}>
                Request A Delivery
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
       

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Left content */}
          <div className="lg:col-span-3">
            <Card className="p-8 border-red-100 dark:border-red-900/60 bg-white/90 dark:bg-gray-900/80">
              {renderMainContent()}
            </Card>
          </div>

          {/* Right Sidebar Menu */}
          <div>
            <div className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-none">
              <nav className="p-0">
                <button
                  onClick={() => handleMenuClick("fuel-levels")}
                  className={`w-full flex items-center gap-3 px-4 py-4 text-left font-medium transition-colors rounded-none ${
                    activeMenuItem === "fuel-levels" ? "bg-blue-900 text-white" : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  <Gauge className="h-5 w-5" />
                  VIEW FUEL LEVELS
                </button>

                <button
                  onClick={() => handleMenuClick("schedule-deliveries")}
                  className={`w-full flex items-center gap-3 px-4 py-4 text-left font-medium transition-colors rounded-none ${
                    activeMenuItem === "schedule-deliveries" ? "bg-blue-900 text-white" : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  <Truck className="h-5 w-5" />
                  SCHEDULE DELIVERIES
                </button>

                <button
                  onClick={() => handleMenuClick("manage-account")}
                  className={`w-full flex items-center gap-3 px-4 py-4 text-left font-medium transition-colors rounded-none ${
                    activeMenuItem === "manage-account" ? "bg-blue-900 text-white" : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  <User className="h-5 w-5" />
                  MANAGE YOUR ACCOUNT
                </button>

                <button
                  onClick={() => handleMenuClick("make-payments")}
                  className={`w-full flex items-center gap-3 px-4 py-4 text-left font-medium rounded-none bg-red-600 text-white hover:bg-red-700 transition-colors`}
                >
                  <CreditCard className="h-5 w-5" />
                  MAKE PAYMENTS
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


