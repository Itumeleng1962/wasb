"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  Fuel, 
  Truck, 
  Users, 
  CreditCard,
  ChevronDown,
  MapPin,
  Calendar,
  Clock
} from "lucide-react"

interface Tank {
  id: number
  address: string
  capacity: string
  fuelLevel: number
  deliveryStatus: string
  estimatedDelivery: string
  lastDelivery: string
}

const mockTanks: Tank[] = [
  {
    id: 1,
    address: "123 Main St",
    capacity: "325G",
    fuelLevel: 76,
    deliveryStatus: "Automatic",
    estimatedDelivery: "1/10",
    lastDelivery: "10/22"
  },
  {
    id: 2,
    address: "456 Oak Ave",
    capacity: "120G",
    fuelLevel: 25,
    deliveryStatus: "Automatic",
    estimatedDelivery: "1/10",
    lastDelivery: "10/22"
  },
  {
    id: 3,
    address: "789 Pine Rd",
    capacity: "200G",
    fuelLevel: 55,
    deliveryStatus: "Automatic",
    estimatedDelivery: "1/10",
    lastDelivery: "10/22"
  }
]

type PortalView = 'fuel-levels' | 'schedule-deliveries' | 'manage-account' | 'make-payments'

export function CustomerPortal() {
  const [activeView, setActiveView] = useState<PortalView>('fuel-levels')

  const getFuelLevelColor = (level: number) => {
    if (level > 50) return "bg-gradient-to-r from-green-500 to-green-600"
    if (level > 25) return "bg-gradient-to-r from-yellow-500 to-orange-500"
    return "bg-gradient-to-r from-red-500 to-red-600"
  }

  const renderFuelLevels = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Account Overview</h2>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          How to tell if you need a delivery?
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Select Your Tank</h3>
        {mockTanks.map((tank) => (
          <Card key={tank.id} className="p-6 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 border-red-100 dark:border-red-800 bg-gradient-to-r from-white to-red-50/20 dark:from-gray-800 dark:to-red-950/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-12 bg-gradient-to-br from-red-100 to-red-200 border-2 border-red-300 rounded-lg flex items-center justify-center">
                  <Fuel className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-foreground">{tank.id}.</span>
                    <span className="text-foreground">{tank.address}</span>
                    <span className="text-sm text-muted-foreground">({tank.capacity})</span>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${getFuelLevelColor(tank.fuelLevel)} transition-all duration-300`}
                          style={{ width: `${tank.fuelLevel}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-foreground">{tank.fuelLevel}%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{tank.deliveryStatus}</p>
                  </div>
                </div>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <p>Estimated Next Delivery: {tank.estimatedDelivery}</p>
                <p>Last Delivery: {tank.lastDelivery}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderScheduleDeliveries = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Schedule Deliveries</h2>
      <div className="grid gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Upcoming Deliveries</h3>
          <div className="space-y-4">
            {mockTanks.map((tank) => (
              <div key={tank.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{tank.address}</p>
                    <p className="text-sm text-muted-foreground">{tank.capacity} tank</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Scheduled: {tank.estimatedDelivery}</p>
                  <Button size="sm" variant="outline">Reschedule</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Request New Delivery</h3>
          <div className="space-y-4">
            <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg shadow-red-500/25" size="lg">
              <Truck className="mr-2 h-5 w-5" />
              Request Emergency Delivery
            </Button>
            <Button variant="outline" className="w-full border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400" size="lg">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Future Delivery
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )

  const renderManageAccount = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Manage Your Account</h2>
      <div className="grid gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Account Information</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Customer Name</label>
                <p className="text-foreground">John Smith</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Account Number</label>
                <p className="text-foreground">WASB-12345</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Phone</label>
                <p className="text-foreground">+27 11 123 4567</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <p className="text-foreground">john@example.com</p>
              </div>
            </div>
            <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400">Edit Account Details</Button>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Service Locations</h3>
          <div className="space-y-3">
            {mockTanks.map((tank) => (
              <div key={tank.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{tank.address}</span>
                </div>
                <Button size="sm" variant="ghost">Edit</Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )

  const renderMakePayments = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Make Payments</h2>
      <div className="grid gap-6">
        <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100/50 dark:from-red-950/20 dark:to-red-900/10 border-red-200 dark:border-red-800">
          <h3 className="text-lg font-semibold mb-4">Current Balance</h3>
          <div className="text-center py-8">
            <p className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-2">R 1,250.00</p>
            <p className="text-muted-foreground">Due Date: January 15, 2024</p>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
          <div className="space-y-4">
            <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg shadow-red-500/25" size="lg">
              <CreditCard className="mr-2 h-5 w-5" />
              Pay with Credit Card
            </Button>
            <Button variant="outline" className="w-full border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400" size="lg">
              <CreditCard className="mr-2 h-5 w-5" />
              Pay with Debit Card
            </Button>
            <Button variant="outline" className="w-full border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400" size="lg">
              Bank Transfer
            </Button>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Payment History</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gradient-to-r from-red-50 to-red-100/50 dark:from-red-950/20 dark:to-red-900/10 rounded-lg border border-red-200 dark:border-red-800">
              <div>
                <p className="font-medium">December 2023</p>
                <p className="text-sm text-muted-foreground">R 1,180.00</p>
              </div>
              <span className="text-sm text-green-600 font-semibold">Paid</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gradient-to-r from-red-50 to-red-100/50 dark:from-red-950/20 dark:to-red-900/10 rounded-lg border border-red-200 dark:border-red-800">
              <div>
                <p className="font-medium">November 2023</p>
                <p className="text-sm text-muted-foreground">R 1,220.00</p>
              </div>
              <span className="text-sm text-green-600 font-semibold">Paid</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeView) {
      case 'fuel-levels':
        return renderFuelLevels()
      case 'schedule-deliveries':
        return renderScheduleDeliveries()
      case 'manage-account':
        return renderManageAccount()
      case 'make-payments':
        return renderMakePayments()
      default:
        return renderFuelLevels()
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-red-100/50 to-red-50 dark:from-red-950/20 dark:via-red-900/10 dark:to-red-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/logo-icon.png" 
              alt="WASB Gas Logo" 
              className="h-16 w-16 mr-4"
            />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              Choose Your Portal
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Manage your gas deliveries, payments, and account information all in one place
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <Card className="p-8 min-h-[600px] border-red-200 dark:border-red-800 bg-gradient-to-br from-white to-red-50/30 dark:from-gray-900 dark:to-red-950/20">
                {renderContent()}
              </Card>
            </div>

            {/* Action Menu */}
            <div className="space-y-4">
              <Button
                onClick={() => setActiveView('fuel-levels')}
                className={`w-full justify-start h-16 text-left transition-all duration-300 ${
                  activeView === 'fuel-levels' 
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/25' 
                    : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 hover:from-red-50 hover:to-red-100 hover:text-red-700 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:hover:from-red-950/30 dark:hover:to-red-900/30'
                }`}
              >
                <Fuel className="mr-3 h-6 w-6" />
                <div>
                  <div className="font-semibold">VIEW FUEL LEVELS</div>
                </div>
              </Button>

              <Button
                onClick={() => setActiveView('schedule-deliveries')}
                className={`w-full justify-start h-16 text-left transition-all duration-300 ${
                  activeView === 'schedule-deliveries' 
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/25' 
                    : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 hover:from-red-50 hover:to-red-100 hover:text-red-700 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:hover:from-red-950/30 dark:hover:to-red-900/30'
                }`}
              >
                <Truck className="mr-3 h-6 w-6" />
                <div>
                  <div className="font-semibold">SCHEDULE DELIVERIES</div>
                </div>
              </Button>

              <Button
                onClick={() => setActiveView('manage-account')}
                className={`w-full justify-start h-16 text-left transition-all duration-300 ${
                  activeView === 'manage-account' 
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/25' 
                    : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 hover:from-red-50 hover:to-red-100 hover:text-red-700 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:hover:from-red-950/30 dark:hover:to-red-900/30'
                }`}
              >
                <Users className="mr-3 h-6 w-6" />
                <div>
                  <div className="font-semibold">MANAGE YOUR ACCOUNT</div>
                </div>
              </Button>

              <Button
                onClick={() => setActiveView('make-payments')}
                className={`w-full justify-start h-16 text-left transition-all duration-300 ${
                  activeView === 'make-payments' 
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/25' 
                    : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 hover:from-red-50 hover:to-red-100 hover:text-red-700 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300 dark:hover:from-red-950/30 dark:hover:to-red-900/30'
                }`}
              >
                <CreditCard className="mr-3 h-6 w-6" />
                <div>
                  <div className="font-semibold">MAKE PAYMENTS</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
