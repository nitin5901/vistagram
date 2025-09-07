"use client"

import { useState } from "react"

interface UseAiCaptionResult {
  generateCaption: (imageFile: File) => Promise<string>
  loading: boolean
  error: string | null
}

export function useAiCaption(): UseAiCaptionResult {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const generateCaption = async (imageFile: File): Promise<string> => {
    setLoading(true)
    setError(null)

    try {
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.readAsDataURL(imageFile)
      })

      const captions = [
        "Beautiful moment captured in time ✨",
        "Living my best life! 🌟",
        "Another day, another adventure 🌍",
        "Grateful for moments like these 🙏",
        "Making memories that last forever 📸",
        "Sunshine and good vibes only ☀️",
        "Life is beautiful when you look around 🌸",
        "Capturing the magic of everyday life ✨",
        "Simple pleasures, big smiles 😊",
        "Every picture tells a story 📖",
        "Finding beauty in the ordinary 🌿",
        "Moments like these make life special 💫",
        "Life is a journey, enjoy the ride 🚗",
        "The best moments are the ones that take us by surprise 🤩",
        "Life is a beautiful journey, enjoy the ride 🚗",
        "The best moments are the ones that take us by surprise 🤩",
      ]

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const randomCaption = captions[Math.floor(Math.random() * captions.length)]
      return randomCaption
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to generate caption"
      setError(errorMessage)
      throw new Error(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return { generateCaption, loading, error }
}
