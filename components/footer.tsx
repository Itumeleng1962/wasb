import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.11 17.48c-.33-.16-1.95-.96-2.26-1.07-.31-.12-.54-.16-.77.16-.23.31-.89 1.07-1.09 1.29-.2.23-.4.25-.73.09-.33-.16-1.39-.51-2.64-1.63-.98-.87-1.64-1.94-1.83-2.27-.19-.33-.02-.51.14-.67.14-.14.33-.37.49-.56.16-.19.21-.33.31-.56.1-.23.05-.42-.02-.58-.07-.16-.77-1.85-1.06-2.54-.28-.68-.57-.59-.77-.6l-.66-.01c-.23 0-.6.09-.91.42-.31.33-1.2 1.17-1.2 2.86 0 1.69 1.23 3.33 1.41 3.56.18.23 2.42 3.7 5.91 5.19 3.49 1.49 3.49.99 4.12.96.63-.02 2.02-.82 2.31-1.61.28-.79.28-1.47.2-1.61-.09-.14-.3-.23-.63-.39z"/>
      <path d="M27.94 23.85 26 22.98A11.56 11.56 0 0 0 28 16.5C28 9.6 22.4 4 15.5 4S3 9.6 3 16.5 8.6 29 15.5 29c2.03 0 3.93-.52 5.6-1.43l1.99 1.9c.3.29.76.37 1.15.21l3.14-1.29c.27-.11.49-.33.59-.61.1-.28.08-.58-.08-.83zM15.5 26.5C10 26.5 5.5 22 5.5 16.5S10 6.5 15.5 6.5 25.5 11 25.5 16.5 21 26.5 15.5 26.5z"/>
    </svg>
  )
}

function TwitterXIcon(props: React.SVGProps<SVGSVGElement>) {
  // Brand-accurate X mark (Twitter) vector
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.478l-7.6 8.69 8.93 10.81h-6.99l-5.46-6.62-6.23 6.62H1.89l8.16-9.02L1.5 2.25h7.06l4.94 5.76 4.74-5.76z"/>
    </svg>
  )
}

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
    { icon: Facebook, href: "https://www.facebook.com/", label: "Facebook", hoverClasses: "hover:bg-[#1877F2] hover:text-white" },
    { icon: TwitterXIcon, href: "https://twitter.com/", label: "X (Twitter)", hoverClasses: "hover:bg-black hover:text-white" },
    { icon: Instagram, href: "https://www.instagram.com/", label: "Instagram", hoverClasses: "hover:bg-[#E4405F] hover:text-white" },
    { icon: Linkedin, href: "https://www.linkedin.com/", label: "LinkedIn", hoverClasses: "hover:bg-[#0A66C2] hover:text-white" },
    { icon: Youtube, href: "https://www.youtube.com/", label: "YouTube", hoverClasses: "hover:bg-[#FF0000] hover:text-white" },
    { icon: WhatsAppIcon, href: "https://wa.me/27115687912", label: "WhatsApp", hoverClasses: "hover:bg-[#25D366] hover:text-white" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-16 stagger-animation">
          {/* Brand Column */}
          <div className="lg:col-span-1 lg:pr-8">
            <div className="mb-6">
              <Logo size="xl" variant="dark" showText={false} />
            </div>
            <div className="flex gap-4 mt-4 flex-nowrap">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 premium-hover ${social.hoverClasses}`}
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
            <p className="text-white/60 text-base">© 2022 All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
