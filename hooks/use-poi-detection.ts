"use client"

import { useState, useEffect } from "react"

interface POI {
  name: string
  display_name: string
  lat: string
  lon: string
}

interface UsePoiDetectionResult {
  poi: string | null
  loading: boolean
  error: string | null
}

export function usePoiDetection(latitude: number | null, longitude: number | null): UsePoiDetectionResult {
  const [poi, setPoi] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!latitude || !longitude) {
      setPoi(null)
      return
    }

    const fetchPOI = async () => {
      setLoading(true)
      setError(null)

      try {
        // Use OpenStreetMap Nominatim API for reverse geocoding
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
        )

        if (!response.ok) {
          throw new Error("Failed to fetch POI data")
        }

        const data = await response.json()

        // Extract meaningful POI information
        const address = data.address || {}
        const poiName =
          address.tourism ||
          address.amenity ||
          address.shop ||
          address.building ||
          address.neighbourhood ||
          address.suburb ||
          address.city ||
          address.town ||
          address.village ||
          "Unknown Location"

        const city = address.city || address.town || address.village || ""
        const state = address.state || ""
        const country = address.country || ""

        // Format the POI string
        let formattedPoi = poiName
        if (city) formattedPoi += `, ${city}`
        if (state && state !== city) formattedPoi += `, ${state}`
        if (country) formattedPoi += `, ${country}`

        setPoi(formattedPoi)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to detect POI")
        setPoi(null)
      } finally {
        setLoading(false)
      }
    }

    fetchPOI()
  }, [latitude, longitude])

  return { poi, loading, error }
}
