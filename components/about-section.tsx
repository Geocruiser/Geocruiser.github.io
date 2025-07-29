"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Code, Cpu, Database, Lightbulb } from "lucide-react"

/**
 * About section component showcasing AI-first engineering expertise
 * Features skill highlights and professional focus areas
 */
export function AboutSection() {
  const skills = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Machine Learning",
      description: "Deep expertise in neural networks, transformers, and modern ML architectures",
      technologies: ["PyTorch", "TensorFlow", "Hugging Face", "Scikit-learn"]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "AI Engineering",
      description: "Building scalable AI systems with production-ready code and MLOps practices",
      technologies: ["Python", "TypeScript", "Docker", "Kubernetes"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Systems",
      description: "Designing efficient data pipelines and storage solutions for AI applications",
      technologies: ["PostgreSQL", "Redis", "Apache Kafka", "Vector DBs"]
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "Staying at the forefront of AI research and implementing cutting-edge solutions",
      technologies: ["Research", "Prototyping", "R&D", "AI Strategy"]
    }
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm an AI-first engineer passionate about creating intelligent systems that solve real-world problems. 
            With a focus on practical applications of artificial intelligence, I build solutions that are both 
            innovative and production-ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border bg-card hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                  {skill.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy/Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center bg-secondary/50 rounded-lg p-8"
        >
          <h3 className="text-2xl font-semibold mb-4">My Approach</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I believe in the power of AI to augment human capabilities rather than replace them. 
            My focus is on building systems that are transparent, ethical, and designed with the 
            end user in mind. Every project starts with understanding the problem deeply and 
            ends with a solution that creates real value.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 