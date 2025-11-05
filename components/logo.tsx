import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "dark" | "light"
}

export function Logo({ className = "", showText = true, size = "md", variant = "dark" }: LogoProps) {
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-20 w-20", 
    lg: "h-32 w-32",
    xl: "h-40 w-40",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
    xl: "text-4xl",
  }

  const isLight = variant === "light"

  return (
    <Link href="/" className={`flex items-center group ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} rounded-full ${isLight ? "bg-white/20 border-white/30" : "bg-[#eeedef] border-[#2a3571]/20"} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 pulse-primary overflow-hidden border-4`}>
        <Image 
          src="/logo-icon.png" 
          alt="WASB Gas Distributers Logo" 
          width={size === "sm" ? 48 : size === "md" ? 72 : size === "lg" ? 120 : 160}
          height={size === "sm" ? 48 : size === "md" ? 72 : size === "lg" ? 120 : 160}
          className={`object-contain ${isLight ? "invert" : ""}`}
        />
      </div>
      
      {/* Company Name */}
      {showText && (
        <div className="ml-4">
          <div className={`font-bold ${isLight ? "text-white group-hover:text-white" : "text-[#2a3571] group-hover:text-[#ef1a16]"} transition-colors ${textSizeClasses[size]}`}>
            WASB Gas Distributers
          </div>
          <div className={`${isLight ? "text-white/80" : "text-[#2a3571]/80"} text-sm ${size === "lg" ? "text-base" : ""}`}>
            LPG Gas Supply Gauteng
          </div>
        </div>
      )}
    </Link>
  )
}
