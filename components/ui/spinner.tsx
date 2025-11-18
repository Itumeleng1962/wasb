"use client"

import * as React from "react"

type SpinnerProps = {
  size?: number
  className?: string
  label?: string
}

export function Spinner({ size = 48, className = "", label = "Loading" }: SpinnerProps) {
  const dimension = `${size}px`
  return (
    <div className={`inline-flex items-center gap-3 ${className}`} role="status" aria-live="polite" aria-busy="true">
      <span
        className="inline-block rounded-full border-4 border-primary/20 border-t-primary animate-spin"
        style={{ width: dimension, height: dimension }}
        aria-hidden="true"
      />
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  )
}


