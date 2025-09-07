export interface SeedPost {
  id: string
  username: string
  image: string
  caption: string
  timestamp: Date
  poi: string | null
}

export const seedPosts: SeedPost[] = [
  {
    id: "seed-1",
    username: "raj_mountain_lover",
    image: "/mountain-sunset.png",
    caption: "Chasing sunsets and finding peace in the mountains 🏔️ Nothing beats this golden hour magic!",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    poi: "Himalayan Range, Himachal Pradesh, India",
  },
  {
    id: "seed-2",
    username: "priya_coffee_queen",
    image: "/latte-art-coffee-cup.jpg",
    caption: "Perfect latte art to start my Monday ☕ This barista is an artist! #MondayMotivation",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    poi: "Blue Tokai Coffee, Mumbai, Maharashtra, India",
  },
  {
    id: "seed-3",
    username: "arjun_street_artist",
    image: "/city-street-art-mural.jpg",
    caption: "Found this incredible street art during my morning walk 🎨 The city is full of hidden gems!",
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
    poi: "Lodhi Art District, New Delhi, India",
  },
  {
    id: "seed-4",
    username: "kavya_foodie",
    image: "/colorful-fresh-salad-bowl.jpg",
    caption: "Healthy lunch goals achieved! 🥗 This rainbow bowl is almost too pretty to eat... almost 😋",
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    poi: "Greenr Cafe, Bangalore, Karnataka, India",
  },
  {
    id: "seed-5",
    username: "vikram_beach_boy",
    image: "/ocean-waves-on-sandy-beach.jpg",
    caption: "Ocean therapy session complete 🌊 The sound of waves is the best meditation",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    poi: "Goa Beach, Goa, India",
  },
  {
    id: "seed-6",
    username: "ananya_bookworm",
    image: "/open-book-with-coffee-and-plants.jpg",
    caption: "Sunday reading corner vibes 📚 Getting lost in a good story with my favorite brew",
    timestamp: new Date(Date.now() - 36 * 60 * 60 * 1000), // 1.5 days ago
    poi: "Kitab Khana, Mumbai, Maharashtra, India",
  },
]
