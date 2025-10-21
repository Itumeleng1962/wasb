import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-20 w-20", 
    lg: "h-32 w-32"
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl"
  }

  return (
    <Link href="/" className={`flex items-center group ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} rounded-full bg-[#eeedef] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 pulse-primary overflow-hidden border-4 border-[#2a3571]/20`}>
        <Image 
          src="https://wasbdistributers.co.za/assets/images/logo-icon.png" 
          alt="WASB Gas Distributers Logo" 
          width={size === "sm" ? 48 : size === "md" ? 72 : 120}
          height={size === "sm" ? 48 : size === "md" ? 72 : 120}
          className="object-contain"
        />
      </div>
      
      {/* Company Name */}
      {showText && (
        <div className="ml-4">
          <div className={`font-bold text-[#2a3571] group-hover:text-[#ef1a16] transition-colors ${textSizeClasses[size]}`}>
            WASB Gas Distributers
          </div>
          <div className={`text-[#2a3571]/80 text-sm ${size === "lg" ? "text-base" : ""}`}>
            LPG Gas Supply Gauteng
          </div>
        </div>
      )}
    </Link>
  )
}
