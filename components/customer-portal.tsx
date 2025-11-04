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
  Clock,
  Gauge
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
  const [showDeliveryTip, setShowDeliveryTip] = useState<boolean>(false)

  const getFuelLevelColor = (level: number) => {
    if (level > 50) return "bg-gradient-to-r from-green-500 to-green-600"
    if (level > 25) return "bg-gradient-to-r from-yellow-500 to-orange-500"
    return "bg-gradient-to-r from-red-500 to-red-600"
  }

  const renderFuelLevels = () => (
    <div className="space-y-6">
      {/* Header + Help Row */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Account Overview</h2>
      </div>

      <Card className="p-4 border border-gray-200 dark:border-gray-800">
        <button
          onClick={() => setShowDeliveryTip(!showDeliveryTip)}
          className="w-full flex items-center justify-between text-left"
        >
          <span className="text-red-600 font-medium">How to tell you need a delivery?</span>
          <ChevronDown className={`h-5 w-5 text-red-600 transition-transform ${showDeliveryTip ? 'rotate-180' : ''}`} />
        </button>
        {showDeliveryTip && (
          <div className="mt-3 text-sm text-muted-foreground">
            Check your tank gauge regularly. When the level drops below 30%, it's time to schedule a delivery.
          </div>
        )}
      </Card>

      {/* Section Title */}
      <h3 className="text-lg font-semibold text-foreground">Select Your Gas Tank</h3>

      {/* Frame Header Row */}
      <div className="grid grid-cols-4 gap-4 text-sm text-muted-foreground">
        <div>Frame</div>
        <div>Frame 4</div>
        <div>Frame 7</div>
        <div>Frame 10</div>
      </div>

      {/* Tank Cards */}
      <div className="space-y-6">
        {mockTanks.map((tank, idx) => (
          <Card key={tank.id} className="p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-none">
            {/* Per-card mini frame row (optional visual aid) */}
            <div className="grid grid-cols-4 gap-4 text-xs text-muted-foreground mb-4">
              <div>{idx === 0 ? 'Frame 2' : idx === 1 ? 'Frame 3' : 'Frame 3'}</div>
              <div>{`Frame ${4 + idx}`}</div>
              <div>{`Frame ${7 + idx}`}</div>
              <div>{`Frame ${10 + idx}`}</div>
            </div>

            <div className="grid grid-cols-4 gap-6 items-center">
              {/* Tank Icon */}
              <div className="flex items-center justify-center">
                <div className="w-16 h-12 border-2 border-gray-400 rounded-md flex items-center justify-center">
                  <Fuel className="h-5 w-5 text-gray-600" />
                </div>
              </div>

              {/* Address + Specs */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">{tank.id}.</span>
                  <span className="font-semibold text-foreground">{tank.address}</span>
                  <span className="font-semibold text-foreground">{tank.capacity}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{tank.address}</p>
                <p className="text-sm text-muted-foreground">{tank.capacity} Propane Fuel Tank</p>
              </div>

              {/* Fill level with thick bar and % inside */}
              <div>
                <div className="w-full bg-gray-200 rounded-md h-8 overflow-hidden">
                  <div
                    className={`h-full flex items-center justify-center text-white font-semibold text-sm ${getFuelLevelColor(tank.fuelLevel)}`}
                    style={{ width: `${tank.fuelLevel}%` }}
                  >
                    {tank.fuelLevel}%
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{tank.deliveryStatus}</p>
                <p className="text-sm text-muted-foreground">Estimated Next Delivery: {tank.estimatedDelivery}</p>
              </div>

              {/* Last Delivery */}
              <div className="text-sm text-foreground">
                <p className="font-semibold">Last Delivery:</p>
                <p className="mt-1">{tank.lastDelivery}</p>
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

            {/* Action Menu - flat, straight like provided design */}
            <div className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <nav className="p-0">
                <button
                  onClick={() => setActiveView('fuel-levels')}
                  className={`w-full flex items-center gap-3 px-4 py-4 text-left font-medium transition-colors rounded-none ${
                    activeView === 'fuel-levels' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  <Gauge className="h-5 w-5" />
                  VIEW FUEL LEVELS
                </button>

                <button
                  onClick={() => setActiveView('schedule-deliveries')}
                  className={`w-full flex items-center gap-3 px-4 py-4 text-left font-medium transition-colors rounded-none ${
                    activeView === 'schedule-deliveries' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  <Truck className="h-5 w-5" />
                  SCHEDULE DELIVERIES
                </button>

                <button
                  onClick={() => setActiveView('manage-account')}
                  className={`w-full flex items-center gap-3 px-4 py-4 text-left font-medium transition-colors rounded-none ${
                    activeView === 'manage-account' ? 'bg-blue-900 text-white' : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  <Users className="h-5 w-5" />
                  MANAGE YOUR ACCOUNT
                </button>

                <button
                  onClick={() => setActiveView('make-payments')}
                  className={`w-full flex items-center gap-3 px-4 py-4 text-left font-medium transition-colors rounded-none ${
                    'bg-red-600 text-white hover:bg-red-700'
                  }`}
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
