import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

/**
 * Footer component with social media links and copyright information
 * Features hover animations and external link handling
 */
export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/yourusername',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/yourusername',
      label: 'Twitter',
    },
    {
      icon: Mail,
      href: 'mailto:your.email@example.com',
      label: 'Email',
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max-width px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-primary-600 transition-colors duration-300 group"
                  aria-label={link.label}
                >
                  <IconComponent 
                    size={20} 
                    className="text-gray-300 group-hover:text-white transition-colors" 
                  />
                </a>
              )
            })}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-700" />

          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p className="text-sm">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <p className="text-xs mt-2">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 