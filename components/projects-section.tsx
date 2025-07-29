"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Brain, Zap, Database, Bot, Cpu, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  icon: React.ReactNode
  demoUrl?: string
  githubUrl?: string
  videoUrl?: string
  featured: boolean
}

/**
 * Video embed component that handles different video platforms
 * Supports YouTube, Vimeo, Loom, direct video files, and raw iframe embeds
 */
function VideoEmbed({ url, title }: { url: string; title: string }) {
  const [isPlaying, setIsPlaying] = React.useState(false)

  // Check if this is a raw iframe embed code
  const isRawIframe = url.trim().startsWith('<iframe') || url.trim().startsWith('<div')

  // Extract video ID and platform
  const getVideoEmbedUrl = (url: string) => {
    // Loom
    if (url.includes('loom.com/embed/') || url.includes('loom.com/share/')) {
      // Handle both direct embed URLs and share URLs
      if (url.includes('loom.com/embed/')) {
        return url // Already an embed URL
      } else if (url.includes('loom.com/share/')) {
        // Convert share URL to embed URL
        const videoId = url.split('loom.com/share/')[1]?.split('?')[0]
        return `https://www.loom.com/embed/${videoId}`
      }
    }
    
    // YouTube
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('youtu.be') 
        ? url.split('youtu.be/')[1]?.split('?')[0]
        : url.split('v=')[1]?.split('&')[0]
      return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`
    }
    
    // Vimeo
    if (url.includes('vimeo.com')) {
      const videoId = url.split('vimeo.com/')[1]?.split('?')[0]
      return `https://player.vimeo.com/video/${videoId}`
    }
    
    // Direct video file or other embed URL
    return url
  }

  // Handle raw iframe embed codes
  if (isRawIframe) {
    return (
      <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
        {!isPlaying ? (
          <div 
            className="relative w-full h-full cursor-pointer group bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
            onClick={() => setIsPlaying(true)}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
            <div className="relative z-10 flex flex-col items-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/30 transition-colors">
                <Play className="h-8 w-8 ml-1" />
              </div>
              <p className="text-sm font-medium">Play Demo Video</p>
            </div>
          </div>
        ) : (
          <div 
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: url }}
          />
        )}
      </div>
    )
  }

  const embedUrl = getVideoEmbedUrl(url)
  const isDirectVideo = url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov')
  const isLoom = url.includes('loom.com')

  if (isDirectVideo) {
    return (
      <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
        <video 
          controls 
          className="w-full h-full object-cover"
          poster="" // You can add poster images later
        >
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }

  // For Loom and other platforms, always show the iframe (no click-to-play for better UX)
  if (isLoom) {
    return (
      <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full rounded-lg"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    )
  }

  // YouTube/Vimeo with click-to-play
  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
      {!isPlaying ? (
        <div 
          className="relative w-full h-full cursor-pointer group bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
          onClick={() => setIsPlaying(true)}
        >
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
          <div className="relative z-10 flex flex-col items-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-white/30 transition-colors">
              <Play className="h-8 w-8 ml-1" />
            </div>
            <p className="text-sm font-medium">Play Demo Video</p>
          </div>
        </div>
      ) : (
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  )
}

/**
 * Projects showcase section displaying featured AI/ML projects
 * Each project card includes technology stack, links, hover animations, and embedded videos
 */
export function ProjectsSection() {
  // Sample projects - easily customizable
  const projects: Project[] = [
    {
      id: "grammarclone-ai-writing-assistant",
      title: "Grammarclone - AI Writing Assistant",
      description: "Comprehensive AI-powered writing platform with real-time suggestions and analytics",
      longDescription: "A sophisticated writing assistant designed for students featuring real-time AI suggestions, document management, version history, and progress analytics. Integrates OpenAI GPT-3.5-turbo with intelligent fallback systems and supports multiple user types from ESL learners to graduate students.",
      technologies: ["TypeScript", "React 18", "OpenAI GPT-3.5", "Zustand", "Tailwind CSS", "Vite"],
      icon: <Brain className="h-6 w-6" />,
      videoUrl: "https://www.loom.com/embed/4bd034f70c38435d843ca33c3298ebb2?sid=58b5541b-c1ae-4ad4-9dc0-8cb3402bc39d",
      featured: true
    },
    {
      id: "book-club-mobile-app",
      title: "Book Club - AI-Powered Social Reading Platform",
      description: "React Native mobile app with RAG AI recommendations and real-time video sharing",
      longDescription: "A production-ready mobile platform combining social video sharing with advanced AI recommendations. Features custom RAG pipeline, vector embeddings for semantic search, real-time social interactions, and comprehensive performance optimizations. Built for book enthusiasts to share and discover content through intelligent AI-driven recommendations.",
      technologies: ["React Native", "TypeScript", "OpenAI GPT-4", "Supabase", "RAG Pipeline", "Vector Embeddings"],
      icon: <Zap className="h-6 w-6" />,
      demoUrl: "#",
      videoUrl: "https://www.loom.com/embed/141b8b3b114646fc942e5586fd033612?sid=22e5081e-0a83-4b18-bc04-f8eb2757169d", // Placeholder - replace with actual video
      featured: true
    },
    {
      id: "ludumpulse-desktop-app",
      title: "Ludumpulse - Cross-Platform Desktop Application",
      description: "Electron-based desktop application with modern React frontend and database integration",
      longDescription: "A sophisticated cross-platform desktop application built with Electron, featuring a modern React frontend, TypeScript for type safety, and Prisma ORM for database management. Combines the power of web technologies with native desktop capabilities for a seamless user experience across Windows, macOS, and Linux.",
      technologies: ["Electron", "React", "TypeScript", "Prisma ORM", "Vite", "Tailwind CSS"],
      icon: <Database className="h-6 w-6" />,
      demoUrl: "#",
      videoUrl: "https://www.loom.com/embed/c6387e47cb9846868e81aec3ac15fdac?sid=f1ddc963-5a4f-445b-8a22-e5f3214a3f6f", // Placeholder - replace with actual video
      featured: true
    },
    {
      id: "travelagentic-ai-platform",
      title: "TravelAgentic - AI Travel Planning Platform",
      description: "Enterprise-grade travel platform with AI orchestration and comprehensive fallback systems",
      longDescription: "A sophisticated AI-powered travel planning platform featuring Langflow orchestration, multi-API integration with Amadeus and OpenAI, comprehensive fallback systems, and browser automation. Built with Next.js 15, featuring monorepo architecture, mock API development system, and production-ready containerized deployment with comprehensive testing and CI/CD.",
      technologies: ["Next.js 15", "TypeScript", "Langflow", "OpenAI", "Amadeus API", "Docker"],
      icon: <Bot className="h-6 w-6" />,
      demoUrl: "#",
      githubUrl: "https://github.com/Gauntlet-AI/TravelAgentic",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder - replace with actual video
      featured: false
    },
    {
      id: "plantesite-game-engine",
      title: "Plantesite - Advanced Godot Game Development",
      description: "Sophisticated game project with hybrid pathfinding algorithms and multiplayer systems",
      longDescription: "A complex game development project built with Godot Engine featuring advanced hybrid pathfinding implementation, comprehensive multiplayer architecture, and phased development approach. Includes custom AI algorithms, tileset systems, and sound integration with detailed technical documentation and modular scene management.",
      technologies: ["Godot Engine", "GDScript", "AI Pathfinding", "Multiplayer", "Game Design", "Sound Systems"],
      icon: <Cpu className="h-6 w-6" />,
      demoUrl: "#",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder - replace with actual video
      featured: true
    }
  ]

  return (
    <section id="projects" className="py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-muted">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  {/* Video Embed */}
                  {project.videoUrl && (
                    <div className="mb-4">
                      <VideoEmbed url={project.videoUrl} title={project.title} />
                    </div>
                  )}

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2 pt-4">
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 