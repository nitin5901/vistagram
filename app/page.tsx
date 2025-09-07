"use client"

import { useState, useEffect } from "react"
import { UploadForm } from "@/components/upload-form"
import { PostCard } from "@/components/post-card"
import { Camera } from "lucide-react"
import { seedPosts } from "@/data/seed-posts"

interface Post {
  id: string
  image: string
  caption: string
  poi: string | null
  timestamp: Date
  username?: string
}

export default function InstagramClone() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const convertedSeedPosts: Post[] = seedPosts
      .map((seedPost) => ({
        id: seedPost.id,
        image: seedPost.image,
        caption: seedPost.caption,
        poi: seedPost.poi,
        timestamp: seedPost.timestamp,
        username: seedPost.username,
      }))
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())

    setPosts(convertedSeedPosts)
  }, [])

  const handleNewPost = (image: string, caption: string, poi: string | null) => {
    const newPost: Post = {
      id: Date.now().toString(),
      image,
      caption,
      poi,
      timestamp: new Date(),
    }
    setPosts((prevPosts) => [newPost, ...prevPosts])
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-2">
            <Camera className="w-6 h-6" />
            <h1 className="text-xl font-bold">Vistagram</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Upload Form */}
        <UploadForm onPost={handleNewPost} />

        {/* Timeline */}
        <div className="space-y-6">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <Camera className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-lg font-semibold mb-2">No posts yet</h2>
              <p className="text-muted-foreground">Share your first moment to get started!</p>
            </div>
          ) : (
            posts.map((post) => <PostCard key={post.id} post={post} />)
          )}
        </div>
      </main>
    </div>
  )
}
