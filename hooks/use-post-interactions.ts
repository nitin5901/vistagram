"use client"

import { useState, useEffect } from "react"

interface PostInteractions {
  likes: number
  shares: number
  isLiked: boolean
}

export function usePostInteractions(postId: string) {
  const [interactions, setInteractions] = useState<PostInteractions>({
    likes: 0,
    shares: 0,
    isLiked: false,
  })

  useEffect(() => {
    const stored = localStorage.getItem(`post-interactions-${postId}`)
    if (stored) {
      setInteractions(JSON.parse(stored))
    }
  }, [postId])

  const saveInteractions = (newInteractions: PostInteractions) => {
    setInteractions(newInteractions)
    localStorage.setItem(`post-interactions-${postId}`, JSON.stringify(newInteractions))
  }

  const toggleLike = () => {
    const newInteractions = {
      ...interactions,
      isLiked: !interactions.isLiked,
      likes: interactions.isLiked ? interactions.likes - 1 : interactions.likes + 1,
    }
    saveInteractions(newInteractions)
  }

  const incrementShare = () => {
    const newInteractions = {
      ...interactions,
      shares: interactions.shares + 1,
    }
    saveInteractions(newInteractions)
  }

  const sharePost = async () => {
    const shareUrl = `${window.location.origin}?post=${postId}`

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this post!",
          url: shareUrl,
        })
        incrementShare()
      } catch (error) {
        console.error("Failed to share:", error)
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl)
        incrementShare()
      } catch (error) {
        console.error("Failed to copy link:", error)
      }
    }
  }

  return {
    ...interactions,
    toggleLike,
    sharePost,
  }
}
