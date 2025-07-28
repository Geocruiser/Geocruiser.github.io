'use client'

import { ArrowDown, Download, Github, Linkedin } from 'lucide-react'

/**
 * Hero section component with animated introduction and call-to-action buttons
 * Features gradient text, floating animation, and responsive design
 */
export default function HeroSection() {
  /**
   * Handles smooth scrolling to about section
   */
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-max-width section-padding">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="mx-auto w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center animate-float">
            <span className="text-4xl font-bold text-white">YN</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 animate-slide-up">
              Hi, I'm{' '}
              <span className="gradient-text">Your Name</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 animate-slide-up">
              Full Stack Developer & Tech Enthusiast
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed animate-slide-up">
            I create beautiful, performant web applications using modern technologies. 
            Passionate about clean code, user experience, and solving complex problems 
            with elegant solutions.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 
                       transition-colors duration-300 font-medium shadow-lg hover:shadow-xl
                       flex items-center gap-2"
            >
              Learn More
              <ArrowDown size={18} />
            </button>
            
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg 
                       hover:bg-primary-600 hover:text-white transition-colors duration-300 
                       font-medium flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-slide-up">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-600 hover:text-primary-600 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-600 hover:text-primary-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 