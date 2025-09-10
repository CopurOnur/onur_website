"use client"

import { useEffect, useState } from "react"

export function BlinkingCursor({ className = "" }: { className?: string }) {
  return <span className={`inline-block w-2 h-5 bg-primary animate-pulse ${className}`}>|</span>
}

export function TwinklingStars() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
      }))
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-accent rounded-full animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: "2s",
          }}
        />
      ))}
    </div>
  )
}

export function PixelLoadingBar({ progress = 0 }: { progress?: number }) {
  return (
    <div className="w-full bg-muted border-2 border-border rounded h-6 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out flex items-center justify-end pr-2"
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      >
        {progress > 10 && (
          <span className="text-xs font-mono text-primary-foreground font-bold">{Math.round(progress)}%</span>
        )}
      </div>
    </div>
  )
}

export function FloatingPixels() {
  const [pixels, setPixels] = useState<Array<{ id: number; x: number; y: number; size: number; color: string }>>([])

  useEffect(() => {
    const generatePixels = () => {
      const colors = ["bg-primary", "bg-accent", "bg-secondary"]
      const newPixels = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
      }))
      setPixels(newPixels)
    }

    generatePixels()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {pixels.map((pixel) => (
        <div
          key={pixel.id}
          className={`absolute ${pixel.color} rounded-sm animate-bounce`}
          style={{
            left: `${pixel.x}%`,
            top: `${pixel.y}%`,
            width: `${pixel.size}px`,
            height: `${pixel.size}px`,
            animationDelay: `${pixel.id * 0.2}s`,
            animationDuration: "3s",
          }}
        />
      ))}
    </div>
  )
}
