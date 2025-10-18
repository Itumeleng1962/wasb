import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", showText = false, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-16 w-16", 
    lg: "h-24 w-24"
  }

  return (
    <Link href="/" className={`flex items-center group ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 pulse-primary overflow-hidden`}>
        <Image 
          src="/logo-icon.png" 
          alt="Company Logo" 
          width={size === "sm" ? 40 : size === "md" ? 56 : 80}
          height={size === "sm" ? 40 : size === "md" ? 56 : 80}
          className="object-contain"
        />
      </div>
    </Link>
  )
}
