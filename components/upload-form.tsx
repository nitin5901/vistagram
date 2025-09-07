"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, MapPin, Loader2, Camera, Sparkles } from "lucide-react"
import { usePoiDetection } from "@/hooks/use-poi-detection"
import { useAiCaption } from "@/hooks/use-ai-caption"

interface UploadFormProps {
  onPost: (image: string, caption: string, poi: string | null) => void
}

export function UploadForm({ onPost }: UploadFormProps) {
  const [image, setImage] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [caption, setCaption] = useState("")
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [gettingLocation, setGettingLocation] = useState(false)
  const [isCapturing, setIsCapturing] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const { poi, loading: poiLoading } = usePoiDetection(location?.lat || null, location?.lng || null)
  const { generateCaption, loading: captionLoading } = useAiCaption()

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const startCamera = async () => {
    try {
      setIsCapturing(true)
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    } catch (error) {
      console.error("Error accessing camera:", error)
      alert("Unable to access camera. Please check permissions.")
      setIsCapturing(false)
    }
  }

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current
      const video = videoRef.current
      const context = canvas.getContext("2d")

      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      if (context) {
        context.drawImage(video, 0, 0)
        const imageDataUrl = canvas.toDataURL("image/jpeg")
        setImage(imageDataUrl)
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], "camera-capture.jpg", { type: "image/jpeg" })
            setImageFile(file)
          }
        }, "image/jpeg")
      }
    }
    stopCamera()
  }

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
    setIsCapturing(false)
  }

  const handleGenerateCaption = async () => {
    if (!imageFile) return

    try {
      const aiCaption = await generateCaption(imageFile)
      setCaption(aiCaption)
    } catch (error) {
      console.error("Error generating caption:", error)
    }
  }

  const getCurrentLocation = () => {
    setGettingLocation(true)

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by this browser.")
      setGettingLocation(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
        setGettingLocation(false)
      },
      (error) => {
        console.error("Error getting location:", error)
        alert("Unable to get your location. Please try again.")
        setGettingLocation(false)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000, // 5 minutes
      },
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (image && caption.trim()) {
      onPost(image, caption.trim(), poi)
      // Reset form
      setImage(null)
      setImageFile(null)
      setCaption("")
      setLocation(null)
      // Reset file input
      const fileInput = document.getElementById("image-upload") as HTMLInputElement
      if (fileInput) fileInput.value = ""
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto mb-8">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Share a moment</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Camera Capture */}
          {isCapturing && (
            <div className="space-y-2">
              <video ref={videoRef} autoPlay playsInline className="w-full aspect-square object-cover rounded-lg" />
              <div className="flex gap-2">
                <Button type="button" onClick={capturePhoto} className="flex-1">
                  <Camera className="w-4 h-4 mr-2" />
                  Capture
                </Button>
                <Button type="button" variant="outline" onClick={stopCamera}>
                  Cancel
                </Button>
              </div>
              <canvas ref={canvasRef} className="hidden" />
            </div>
          )}

          {/* Image Upload/Camera Controls */}
          {!isCapturing && (
            <div className="space-y-2">
              <div className="flex gap-2">
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="cursor-pointer flex-1"
                />
                <Button type="button" variant="outline" onClick={startCamera}>
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
              {image && (
                <div className="aspect-square relative overflow-hidden rounded-lg border">
                  <img src={image || "/placeholder.svg"} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          )}

          {/* Caption with AI Generation */}
          <div className="space-y-2">
            <div className="flex gap-2">
              <Textarea
                placeholder="Write a caption..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="min-h-20 resize-none flex-1"
              />
              {imageFile && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleGenerateCaption}
                  disabled={captionLoading}
                  className="self-start bg-transparent"
                >
                  {captionLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                </Button>
              )}
            </div>
            {captionLoading && <p className="text-xs text-muted-foreground">Generating AI caption...</p>}
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={getCurrentLocation}
              disabled={gettingLocation}
              className="w-full bg-transparent"
            >
              {gettingLocation ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <MapPin className="w-4 h-4 mr-2" />
              )}
              {gettingLocation ? "Getting location..." : "Add location"}
            </Button>

            {location && (
              <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
                {poiLoading ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    <span>Detecting location...</span>
                  </div>
                ) : poi ? (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    <span>{poi}</span>
                  </div>
                ) : (
                  <span>Location detected</span>
                )}
              </div>
            )}
          </div>

          {/* Submit */}
          <Button type="submit" disabled={!image || !caption.trim()} className="w-full">
            <Upload className="w-4 h-4 mr-2" />
            Share Post
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
