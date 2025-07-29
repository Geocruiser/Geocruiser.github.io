"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Brain, Zap, Database, Bot, Cpu } from "lucide-react"
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
  featured: boolean
}

/**
 * Projects showcase section displaying featured AI/ML projects
 * Each project card includes technology stack, links, and hover animations
 */
export function ProjectsSection() {
  // Sample projects - easily customizable
  const projects: Project[] = [
    {
      id: "neural-network-visualizer",
      title: "Neural Network Visualizer",
      description: "Interactive deep learning model visualization and training platform",
      longDescription: "A comprehensive platform for visualizing neural network architectures, training processes, and performance metrics in real-time. Built with modern web technologies and TensorFlow.js for client-side model execution.",
      technologies: ["TypeScript", "React", "TensorFlow.js", "D3.js", "WebGL"],
      icon: <Brain className="h-6 w-6" />,
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: "ai-content-generator",
      title: "AI Content Generator",
      description: "Multi-modal AI system for generating text, images, and code",
      longDescription: "An intelligent content generation platform that leverages multiple AI models to create diverse content types. Features custom fine-tuned models and an intuitive interface for content creation workflows.",
      technologies: ["Python", "FastAPI", "OpenAI GPT", "Stable Diffusion", "Docker"],
      icon: <Zap className="h-6 w-6" />,
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: "ml-data-pipeline",
      title: "ML Data Pipeline",
      description: "Scalable machine learning data processing and model deployment system",
      longDescription: "A robust MLOps pipeline for handling large-scale data processing, model training, and automated deployment. Includes monitoring, versioning, and automated retraining capabilities.",
      technologies: ["Python", "Apache Airflow", "Kubernetes", "MLflow", "PostgreSQL"],
      icon: <Database className="h-6 w-6" />,
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: "conversational-ai",
      title: "Conversational AI Assistant",
      description: "Context-aware chatbot with knowledge base integration",
      longDescription: "An advanced conversational AI system with natural language understanding, context preservation, and integration with external knowledge bases. Features custom training on domain-specific data.",
      technologies: ["Python", "Transformers", "Langchain", "ChromaDB", "Streamlit"],
      icon: <Bot className="h-6 w-6" />,
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: "biomedical-ai",
      title: "BioMedical AI Platform",
      description: "AI-powered medical image analysis and drug discovery assistant",
      longDescription: "A comprehensive platform combining computer vision and NLP for medical image analysis, protein structure prediction, and drug discovery acceleration. Integrates biological databases with modern AI models for research applications.",
      technologies: ["Python", "PyTorch", "OpenCV", "BioPython", "FastAPI"],
      icon: <Cpu className="h-6 w-6" />,
      demoUrl: "#",
      githubUrl: "#",
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
                  {project.demoUrl && (
                    <Button variant="default" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="flex-1">
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