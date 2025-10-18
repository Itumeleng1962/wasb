import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"

export function Footer() {
  const footerLinks = {
    services: [
      { name: "Home Delivery", href: "/services/home-delivery" },
      { name: "Industrial Supply", href: "/services/industrial-supply" },
      { name: "Cylinder Testing", href: "/services/cylinder-testing" },
      { name: "All Services", href: "/services" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/about/our-story" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "Careers", href: "/careers" },
      { name: "News & Insights", href: "/news" },
    ],
    products: [
      { name: "Cylinders", href: "/products/cylinders" },
      { name: "Bulk Gas", href: "/products/bulk-gas" },
      { name: "Regulators & Accessories", href: "/products/regulators" },
      { name: "All Products", href: "/products" },
    ],
    support: [
      { name: "Customer Portal", href: "/portal/customer" },
      { name: "Dealer Portal", href: "/portal/dealer" },
      { name: "Safety & Compliance", href: "/safety" },
      { name: "Contact Us", href: "/contact" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/90 to-primary text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/20 rounded-full filter blur-2xl floating-animation" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full filter blur-2xl floating-animation" style={{animationDelay: '2s'}} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 stagger-animation">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo size="lg" />
            </div>
            <p className="text-white/80 mb-8 text-pretty leading-relaxed">
              Your trusted partner for reliable propane delivery and energy services since 1985.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full bg-white/20 hover:bg-white hover:text-primary flex items-center justify-center transition-all duration-300 premium-hover"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Products</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/60 text-base">© {new Date().getFullYear()} All rights reserved.</p>
            <div className="flex items-center gap-6 text-base text-white/60">
              <span className="flex items-center gap-2">
                Made with <span className="text-accent pulse-primary">❤️</span> for our customers
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
