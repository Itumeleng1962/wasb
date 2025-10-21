"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { Logo } from "@/components/logo"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      submenu: [
        { name: "Our Story", href: "/about/our-story" },
        { name: "Leadership", href: "/about/leadership" },
        { name: "Certification & Safety", href: "/about/certification" },
      ],
    },
    {
      name: "Products",
      href: "/products",
      submenu: [
        { name: "Cylinders", href: "/products/cylinders" },
        { name: "Bulk Gas", href: "/products/bulk-gas" },
        { name: "Regulators & Accessories", href: "/products/regulators" },
      ],
    },
    {
      name: "Services",
      href: "/services",
      submenu: [
        { name: "Home Delivery", href: "/services/home-delivery" },
        { name: "Industrial Supply", href: "/services/industrial-supply" },
        { name: "Cylinder Testing", href: "/services/cylinder-testing" },
      ],
    },
    {
      name: "Industries",
      href: "/industries",
      submenu: [
        { name: "Hospitality", href: "/industries/hospitality" },
        { name: "Manufacturing", href: "/industries/manufacturing" },
        { name: "Healthcare", href: "/industries/healthcare" },
      ],
    },
    { name: "Safety", href: "/safety" },
    { name: "News", href: "/news" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    {
      name: "Portals",
      href: "#",
      submenu: [
        { name: "Customer Portal", href: "/portal/customer" },
        { name: "Dealer Portal", href: "/portal/dealer" },
      ],
    },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "glass-card shadow-2xl primary-glow" 
          : "bg-gradient-to-b from-primary/60 to-transparent backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 mr-8">
            <Logo 
              size="md" 
              showText={false}
              className="transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => {
                  if (link.submenu) {
                    if (hoverTimeout) {
                      clearTimeout(hoverTimeout)
                      setHoverTimeout(null)
                    }
                    setOpenDropdown(link.name)
                  }
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setOpenDropdown(null)
                  }, 150)
                  setHoverTimeout(timeout)
                }}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 transition-all duration-300 font-medium py-2 hover:scale-105 ${
                    isScrolled 
                      ? "text-foreground hover:text-gradient" 
                      : "text-white hover:text-gradient"
                  }`}
                >
                  {link.name}
                  {link.submenu && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown Menu */}
                {link.submenu && openDropdown === link.name && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 glass-card rounded-xl shadow-2xl py-3 slide-in-up luxury-border"
                    onMouseEnter={() => {
                      if (hoverTimeout) {
                        clearTimeout(hoverTimeout)
                        setHoverTimeout(null)
                      }
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => {
                        setOpenDropdown(null)
                      }, 150)
                      setHoverTimeout(timeout)
                    }}
                  >
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block px-4 py-3 text-sm text-foreground hover:text-gradient hover:bg-primary/10 transition-all duration-300 rounded-lg mx-2"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Portals are now integrated into main navigation */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isScrolled ? "text-[#0A1D56]" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 space-y-4 slide-in-up glass-card rounded-2xl mt-3 px-6 luxury-border">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="block py-3 text-foreground hover:text-gradient transition-all duration-300 font-medium hover:scale-105"
                  onClick={() => !link.submenu && setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="pl-4 space-y-1">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-gradient transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Portal buttons are now integrated into main navigation */}
          </div>
        )}
      </div>
    </nav>
  )
}
