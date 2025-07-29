"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * Contact section component with social links and call-to-action
 * Features animated contact cards and easy ways to get in touch
 */
export function ContactSection() {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "Get in touch for project collaborations",
      value: "hello@geocruiser.dev",
      href: "mailto:hello@geocruiser.dev",
      color: "text-blue-500"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      description: "Check out my latest projects and contributions",
      value: "github.com/geocruiser",
      href: "https://github.com/geocruiser",
      color: "text-gray-500"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      description: "Connect with me professionally",
      value: "linkedin.com/in/geocruiser",
      href: "https://linkedin.com/in/geocruiser",
      color: "text-blue-600"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating on AI projects or discussing innovative solutions? 
            I'd love to hear from you. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto p-3 rounded-full bg-primary/10 w-fit mb-3 ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <a
                    href={method.href}
                    className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {method.value}
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center bg-card rounded-lg p-8 border"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start a Project?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether you need AI consultation, want to build an intelligent system, or have 
              an innovative idea you'd like to explore, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                <MessageCircle className="h-5 w-5 mr-2" />
                Start a Conversation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                View My Resume
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 