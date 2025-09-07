"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, User, Heart, Share2 } from "lucide-react"
import { usePostInteractions } from "@/hooks/use-post-interactions"

interface Post {
  id: string
  image: string
  caption: string
  poi: string | null
  timestamp: Date
  username?: string
}

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const { likes, shares, isLiked, toggleLike, sharePost } = usePostInteractions(post.id)

  const formatTime = (date: Date) => {
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))

    if (diffInMinutes < 1) return "Just now"
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`
    return `${Math.floor(diffInMinutes / 1440)}d ago`
  }

  return (
    <Card className="w-full max-w-md mx-auto mb-6">
      <CardContent className="p-0">
        {post.username && (
          <div className="p-4 pb-2 border-b">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-muted-foreground" />
              <span className="font-semibold text-sm">{post.username}</span>
            </div>
          </div>
        )}

        {/* Image */}
        <div className="aspect-square relative overflow-hidden">
          <img src={post.image || "/placeholder.svg"} alt={post.caption} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLike}
              className="flex items-center gap-2 p-0 h-auto hover:bg-transparent"
            >
              <Heart className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
              <span className="text-sm font-medium">{likes}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={sharePost}
              className="flex items-center gap-2 p-0 h-auto hover:bg-transparent"
            >
              <Share2 className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium">{shares}</span>
            </Button>
          </div>

          {/* Caption */}
          <p className="text-sm text-foreground leading-relaxed">{post.caption}</p>

          {/* POI and Timestamp */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            {post.poi && (
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span className="truncate max-w-48">{post.poi}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{formatTime(post.timestamp)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
