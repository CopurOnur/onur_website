"use client"

import { useEffect, useState } from "react"
import { useToast } from "@/hooks/use-toast"

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
]

export function KonamiCode() {
  const [sequence, setSequence] = useState<string[]>([])
  const [funMode, setFunMode] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      setSequence((prev) => {
        const newSequence = [...prev, event.code].slice(-KONAMI_CODE.length)

        if (
          newSequence.length === KONAMI_CODE.length &&
          newSequence.every((key, index) => key === KONAMI_CODE[index])
        ) {
          setFunMode(!funMode)
          toast({
            title: funMode ? "Fun Mode Disabled" : "Fun Mode Activated!",
            description: funMode ? "Back to normal mode" : "You found the secret! Enjoy the pixel party!",
          })
          return []
        }

        return newSequence
      })
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [funMode, toast])

  useEffect(() => {
    if (funMode) {
      document.body.classList.add("fun-mode")
    } else {
      document.body.classList.remove("fun-mode")
    }
  }, [funMode])

  return null
}
