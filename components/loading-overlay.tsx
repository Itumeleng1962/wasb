"use client"

import { Spinner } from "@/components/ui/spinner"

export function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 p-6 rounded-xl glass-card">
        <Spinner size={56} label="Loading content…" />
      </div>
    </div>
  )
}


