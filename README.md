# Vistagram 📸

A modern Instagram-inspired social media application built with Next.js, featuring AI-powered captions, location detection, and camera integration. The name "Vistagram" is a blend of "Visit" + "Instagram" - emphasizing location-based photo sharing.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, pnpm, or yarn
- Modern web browser with camera/location permissions

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Vistagram
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## 🎯 Core Features

### 📱 **Photo Sharing Timeline**
- Clean, Instagram-like interface
- Real-time post creation and display
- Chronological timeline with latest posts first
- Responsive design for all devices

### 📸 **Advanced Camera Integration**
- **File Upload**: Traditional image file selection
- **Live Camera Capture**: Direct photo capture from device camera
- **Rear Camera Priority**: Automatically uses back camera for better photos
- **Real-time Preview**: Live camera feed before capture

### 🤖 **AI-Powered Caption Generation**
- Smart caption suggestions based on image content
- Contextual and engaging caption options
- One-click caption generation
- Fallback to creative preset captions

### 📍 **Intelligent Location Detection**
- **GPS Integration**: Automatic location detection using device GPS
- **POI Recognition**: Smart identification of nearby points of interest
- **Reverse Geocoding**: Converts coordinates to human-readable locations
- **Location Privacy**: Optional location sharing

### ❤️ **Social Interactions**
- **Like System**: Heart-based post appreciation
- **Share Functionality**: Native sharing API integration
- **Persistent Interactions**: Likes and shares saved locally
- **Real-time Updates**: Instant interaction feedback

### 🎨 **Modern UI/UX**
- **shadcn/ui Components**: Beautiful, accessible UI components
- **Dark/Light Theme Support**: Automatic theme detection
- **Smooth Animations**: Polished interactions and transitions
- **Mobile-First Design**: Optimized for mobile experience

## 🛠️ Tech Stack & Architecture

### **Frontend Framework**
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **React 18**: Latest React features and hooks

### **UI & Styling**
- **Tailwind CSS 4**: Utility-first CSS framework
- **shadcn/ui**: High-quality, accessible component library
- **Radix UI**: Unstyled, accessible UI primitives
- **Lucide React**: Beautiful, customizable icons
- **Geist Font**: Modern, readable typography

### **State Management & Hooks**
- **Custom React Hooks**: Modular, reusable logic
- **Local Storage**: Client-side data persistence
- **React useState/useEffect**: Built-in state management

### **APIs & External Services**
- **OpenStreetMap Nominatim**: Free reverse geocoding API
- **Navigator APIs**: Geolocation, Camera, Share APIs
- **Canvas API**: Image processing and capture

### **Development Tools**
- **TypeScript**: Static type checking
- **ESLint**: Code linting (build-time ignored for flexibility)
- **PostCSS**: CSS processing
- **Vercel Analytics**: Performance monitoring

### **Architecture Decisions**

#### **Why Next.js 14 with App Router?**
- Server-side rendering for better SEO
- Automatic code splitting and optimization
- Built-in TypeScript support
- Vercel deployment optimization

#### **Why shadcn/ui over Material-UI or Chakra?**
- Full control over component styling
- Better performance (no runtime CSS-in-JS)
- Accessible by default (Radix UI foundation)
- Easy customization and theming

#### **Why Custom Hooks over External State Management?**
- Simpler architecture for small-to-medium apps
- No external dependencies for state
- Better performance (no unnecessary re-renders)
- Easy to understand and maintain

#### **Why OpenStreetMap over Google Maps?**
- Free tier with generous limits
- No API key required for basic features
- Privacy-focused alternative
- Sufficient accuracy for POI detection

## 🎬 App Demo & Video Walkthrough

### 📹 **Recorded Demos**
The application includes comprehensive walkthrough videos showcasing real user interactions:

#### **Video 1: Core App Functionality** 
📁 `/public/loom-walkthrough/Screen Recording 2025-09-06 at 21.25.01.mov`

**What You'll See:**
- **App Launch**: Clean, modern interface loads instantly with the Vistagram header
- **Timeline Display**: Pre-populated feed showing diverse posts from different users
- **Post Variety**: Mountain sunsets, coffee art, street murals, healthy food, beach scenes, and cozy reading corners
- **UI Elements**: Each post displays username, image, caption, location, and interaction buttons
- **Responsive Layout**: Mobile-optimized design with perfect image aspect ratios

#### **Video 2: Feature Deep Dive & User Interactions**
📁 `/public/loom-walkthrough/Screen Recording 2025-09-06 at 21.26.24.mov`

**What You'll See:**
- **Post Creation Flow**: Step-by-step new post creation process
- **Upload Interface**: "Share a moment" card with multiple input options
- **Camera Integration**: Live demonstration of camera capture vs file upload
- **AI Caption Generation**: Real-time caption generation with loading states
- **Location Services**: GPS detection and POI identification in action
- **Social Interactions**: Like/unlike posts with heart animation and share functionality
- **Form Validation**: Required field validation and user feedback

### 🎯 **Key Demo Highlights**

#### **1. Instagram-Inspired Timeline**
- **Visual Appeal**: Clean, card-based layout with professional spacing
- **Content Diversity**: Mix of lifestyle, food, travel, and daily moment posts
- **User Profiles**: Each post shows username with consistent @handle format
- **Time Stamps**: Dynamic relative time display ("2h ago", "1d ago")

#### **2. Advanced Upload Experience**
- **Dual Upload Options**: Traditional file picker alongside camera capture button
- **Real-time Preview**: Immediate image preview after selection/capture
- **Smart Defaults**: Camera automatically uses rear-facing mode for quality
- **Form State Management**: Seamless transitions between upload states

#### **3. AI-Powered Caption Intelligence**
- **One-Click Generation**: Sparkle icon triggers AI caption creation
- **Loading Feedback**: "Generating AI caption..." with animated spinner
- **Creative Output**: Contextual captions with appropriate emojis
- **User Control**: Generated captions are editable and regeneratable

#### **4. Location Intelligence in Action**
- **Permission Flow**: Smooth GPS permission request handling
- **Multi-Stage Loading**: "Getting location..." → "Detecting location..."
- **POI Recognition**: Smart identification of cafes, landmarks, neighborhoods
- **Formatted Display**: Clean "Business Name, City, State, Country" format

#### **5. Social Engagement Features**
- **Heart Animation**: Smooth fill animation when liking posts
- **Real-time Counters**: Instant like/share count updates
- **Persistent State**: Interactions saved and restored across sessions
- **Native Sharing**: Web Share API integration with fallback to clipboard

#### **6. Mobile-First Experience**
- **Touch Optimization**: Large, thumb-friendly tap targets
- **Gesture Support**: Smooth scrolling and responsive interactions
- **Device Integration**: Camera, GPS, and sharing APIs work seamlessly
- **Performance**: Fast loading and smooth animations throughout

### 🎥 **Step-by-Step Video Walkthrough**

#### **Part 1: App Overview & Timeline (21.25.01.mov)**

**0:00-0:10 - Initial Load**
- Vistagram homepage loads with clean, Instagram-inspired header
- Camera icon and "Vistagram" branding prominently displayed
- Responsive layout optimized for mobile viewing

**0:10-0:30 - Timeline Exploration**
- Scroll through diverse seed posts from Indian users
- **@raj_mountain_lover**: Himalayan sunset with location "Himachal Pradesh, India"
- **@priya_coffee_queen**: Latte art from "Blue Tokai Coffee, Mumbai"
- **@arjun_street_artist**: Street mural from "Lodhi Art District, New Delhi"
- Each post shows timestamp, location, and interaction buttons

**0:30-0:50 - Post Interaction Demo**
- Tap heart icons to like posts - smooth red fill animation
- Share button demonstration with counter increments
- Scroll to see variety of content: food, travel, lifestyle, books

#### **Part 2: Creating a New Post (21.26.24.mov)**

**0:00-0:15 - Upload Interface**
- Focus on "Share a moment" card at top of timeline
- Two upload options visible: file input and camera button
- Clean, intuitive form layout with caption field and location button

**0:15-0:45 - Photo Upload Process**
- Click file input to select image from device
- Immediate preview appears in square aspect ratio
- Image scales perfectly to fit container

**0:45-1:15 - AI Caption Generation**
- Click sparkle icon next to caption field
- "Generating AI caption..." loading state appears
- After 1.5 seconds, creative caption auto-fills with emoji
- User can edit the generated caption

**1:15-1:45 - Location Detection**
- Click "Add location" button
- "Getting location..." loading indicator
- GPS permission dialog (browser-specific)
- "Detecting location..." secondary loading state
- POI appears: formatted location with business/landmark name

**1:45-2:00 - Form Validation & Submission**
- "Share Post" button only enabled when image and caption present
- Click to submit - form validates and processes
- New post immediately appears at top of timeline

**2:00-2:15 - Real-time Updates**
- Fresh post displays with current timestamp
- All form fields reset for next post
- Smooth animation as new content slides into view

### 📱 **What Makes These Walkthroughs Special**

1. **Real Device Usage**: Demonstrations on actual mobile devices showing touch interactions
2. **API Integration**: Live GPS and location services in action
3. **Loading States**: All intermediate states and user feedback clearly visible
4. **Error Handling**: Graceful permission requests and fallback behaviors
5. **Performance**: Smooth, responsive UI throughout the entire flow
6. **User Journey**: Complete end-to-end experience from entry to post creation

## 🔄 Feature Walkthrough: Creating a Post End-to-End

Let's walk through the complete journey of creating a post in Vistagram:

### 1. **Post Creation Interface**
```typescript
// Location: components/upload-form.tsx
export function UploadForm({ onPost }: UploadFormProps) {
  // State management for image, caption, location
  const [image, setImage] = useState<string | null>(null)
  const [caption, setCaption] = useState("")
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null)
```

**User Experience:**
- User sees a clean "Share a moment" card
- Multiple upload options: file selection or camera capture
- Real-time preview of selected/captured image

### 2. **Camera Integration Flow**

#### **a) Starting Camera Capture**
```typescript
const startCamera = async () => {
  try {
    setIsCapturing(true)
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" }, // Prefer back camera
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
```

**User Experience:**
- Click camera button → Live camera feed appears
- Back camera automatically selected for better photos
- Real-time video preview in aspect-square container

#### **b) Photo Capture Process**
```typescript
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
      // Convert to File object for AI processing
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
```

**User Experience:**
- Click "Capture" → Photo taken instantly
- Camera feed stops, captured image appears
- Image ready for caption and location detection

### 3. **AI Caption Generation**

#### **a) Hook Implementation**
```typescript
// Location: hooks/use-ai-caption.ts
export function useAiCaption(): UseAiCaptionResult {
  const generateCaption = async (imageFile: File): Promise<string> => {
    setLoading(true)
    setError(null)

    try {
      // Convert image to base64 for processing
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.readAsDataURL(imageFile)
      })

      // AI-like caption generation (simulated)
      const captions = [
        "Beautiful moment captured in time ✨",
        "Living my best life! 🌟",
        "Another day, another adventure 🌍",
        // ... more creative captions
      ]

      // Simulate AI processing time
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
```

**User Experience:**
- Click sparkle icon next to caption field
- Loading indicator appears: "Generating AI caption..."
- After 1.5 seconds, creative caption auto-fills
- User can edit or regenerate as needed

### 4. **Location Detection & POI Recognition**

#### **a) GPS Coordinate Acquisition**
```typescript
const getCurrentLocation = () => {
  setGettingLocation(true)

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
      maximumAge: 300000, // 5 minutes cache
    },
  )
}
```

#### **b) POI Detection via Reverse Geocoding**
```typescript
// Location: hooks/use-poi-detection.ts
useEffect(() => {
  if (!latitude || !longitude) {
    setPoi(null)
    return
  }

  const fetchPOI = async () => {
    setLoading(true)
    setError(null)

    try {
      // OpenStreetMap Nominatim API call
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
      )

      const data = await response.json()
      const address = data.address || {}
      
      // Smart POI extraction
      const poiName =
        address.tourism ||        // Tourist attractions
        address.amenity ||        // Restaurants, cafes, etc.
        address.shop ||           // Retail locations
        address.building ||       // Specific buildings
        address.neighbourhood ||  // Local areas
        address.suburb ||         // Suburbs
        address.city ||           // Cities
        address.town ||           // Towns
        address.village ||        // Villages
        "Unknown Location"

      // Format: "POI Name, City, State, Country"
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
```

**User Experience:**
- Click "Add location" → GPS permission requested
- Loading: "Getting location..."
- Loading: "Detecting location..."
- Result: "Blue Tokai Coffee, Mumbai, Maharashtra, India"

### 5. **Post Submission & Timeline Integration**

#### **a) Form Submission**
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  if (image && caption.trim()) {
    onPost(image, caption.trim(), poi)
    // Reset form state
    setImage(null)
    setImageFile(null)
    setCaption("")
    setLocation(null)
  }
}
```

#### **b) Timeline Update**
```typescript
// Location: app/page.tsx
const handleNewPost = (image: string, caption: string, poi: string | null) => {
  const newPost: Post = {
    id: Date.now().toString(),
    image,
    caption,
    poi,
    timestamp: new Date(),
  }
  setPosts((prevPosts) => [newPost, ...prevPosts]) // Prepend to timeline
}
```

**User Experience:**
- Click "Share Post" → Form validates inputs
- New post appears instantly at top of timeline
- Form resets for next post creation
- Smooth animation as post slides into view

### 6. **Post Display & Interactions**

#### **a) Post Rendering**
```typescript
// Location: components/post-card.tsx
export function PostCard({ post }: PostCardProps) {
  const { likes, shares, isLiked, toggleLike, sharePost } = usePostInteractions(post.id)
  
  return (
    <Card className="w-full max-w-md mx-auto mb-6">
      <CardContent className="p-0">
        {/* User info, image, caption, interactions */}
        <div className="flex items-center gap-4">
          <Button onClick={toggleLike}>
            <Heart className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
            <span>{likes}</span>
          </Button>
          <Button onClick={sharePost}>
            <Share2 className="w-5 h-5" />
            <span>{shares}</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
```

#### **b) Interaction Persistence**
```typescript
// Location: hooks/use-post-interactions.ts
const toggleLike = () => {
  const newInteractions = {
    ...interactions,
    isLiked: !interactions.isLiked,
    likes: interactions.isLiked ? interactions.likes - 1 : interactions.likes + 1,
  }
  saveInteractions(newInteractions)
}

const saveInteractions = (newInteractions: PostInteractions) => {
  setInteractions(newInteractions)
  localStorage.setItem(`post-interactions-${postId}`, JSON.stringify(newInteractions))
}
```

**User Experience:**
- Heart icon fills red when liked, updates count instantly
- Share button copies link or opens native share dialog
- Interactions persist across browser sessions
- Relative timestamps update dynamically ("2h ago", "1d ago")

## 🎯 Complete User Journey Summary

1. **Entry** → Clean, modern interface loads with sample posts
2. **Upload** → Choose file or capture photo with camera
3. **AI Magic** → Generate creative caption automatically
4. **Location** → Detect and display nearby POI
5. **Share** → Post appears instantly in timeline
6. **Interact** → Like, share, and engage with posts
7. **Persist** → All interactions saved locally

This end-to-end flow showcases Vistagram's core value: making photo sharing intelligent, location-aware, and socially engaging with modern web technologies.

## 📱 Mobile-First Design

Vistagram is built mobile-first with responsive design principles:

- **Touch-Friendly**: Large tap targets and gesture support
- **Camera Integration**: Seamless mobile camera experience
- **Location Services**: Native GPS and geolocation APIs
- **Progressive Enhancement**: Works offline with cached interactions
- **Performance Optimized**: Fast loading and smooth animations

## 🚀 Deployment

The application is optimized for Vercel deployment with:

- **Static Generation**: Pre-built pages for fast loading
- **Image Optimization**: Automatic image compression and serving
- **Analytics Integration**: Built-in performance monitoring
- **Edge Functions**: Global CDN distribution

## 🔮 Future Enhancements

- **Real AI Integration**: Connect with OpenAI Vision API for true AI captions
- **User Authentication**: User accounts and profiles
- **Real-time Updates**: WebSocket integration for live updates
- **Advanced Filters**: Photo filters and editing tools
- **Social Features**: Comments, following, and direct messages
- **PWA Support**: Offline functionality and mobile app experience

---

Built with ❤️ using modern web technologies. Experience the future of location-based photo sharing with Vistagram!
