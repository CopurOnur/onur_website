"use client"

import { useState, useEffect } from "react"
import { BlinkingCursor } from "./pixel-animations"

const TERMINAL_MESSAGES = [
  "Importing PyTorch modules...",
  "Warming up coffee-powered CPUs...",
  "Connecting to GPU: NVIDIA RTX A30 [✓]",
  "Feeding data to hungry neural nets...",
  "Welcome to Onur Copur's portfolio!",
]

export function RetroTerminal() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if animation has already been shown in this session
    const hasAnimationPlayed = sessionStorage.getItem('bootAnimationPlayed')
    if (hasAnimationPlayed) {
      setIsComplete(true)
      return
    }

    setHasShown(true)
  }, [])

  useEffect(() => {
    if (!hasShown) return
    if (currentMessage >= TERMINAL_MESSAGES.length) {
      setIsComplete(true)
      // Mark animation as played in session storage
      sessionStorage.setItem('bootAnimationPlayed', 'true')
      return
    }

    const message = TERMINAL_MESSAGES[currentMessage]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex < message.length) {
        setDisplayText(message.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentMessage(currentMessage + 1)
          setDisplayText("")
        }, 500)
      }
    }, 30)

    return () => clearInterval(typeInterval)
  }, [currentMessage, hasShown])

  if (isComplete) return null

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur z-50 flex items-center justify-center">
      <div className="bg-card border-4 border-primary rounded-lg p-8 max-w-md w-full mx-4 shadow-[8px_8px_0px_0px_theme(colors.primary)]">
        <div className="font-mono text-sm space-y-2">
          <div className="text-primary font-bold">SYSTEM BOOT v2.0.1</div>
          <div className="text-muted-foreground">==================</div>
          <div className="h-4">
            <span className="text-foreground">{displayText}</span>
            <BlinkingCursor />
          </div>
        </div>
      </div>
    </div>
  )
}
