import { Code2, Coffee, Heart, Lightbulb } from 'lucide-react'

/**
 * About section component showcasing personal information and core values
 * Features animated cards and responsive grid layout
 */
export default function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Finding creative solutions to complex technical challenges'
    },
    {
      icon: Heart,
      title: 'User Experience',
      description: 'Crafting intuitive interfaces that users love to interact with'
    },
    {
      icon: Coffee,
      title: 'Continuous Learning',
      description: 'Staying current with latest technologies and best practices'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full" />
            </div>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                I'm a passionate full stack developer with over{' '}
                <span className="font-semibold text-primary-600">3+ years</span>{' '}
                of experience creating web applications that make a difference. 
                My journey started with curiosity about how websites work, and 
                has evolved into a deep love for crafting digital experiences.
              </p>

              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with 
                the developer community. I believe in writing code that not only 
                works but is also readable, maintainable, and scalable.
              </p>

              <p className="text-lg leading-relaxed">
                Currently focused on modern web technologies including React, 
                TypeScript, Node.js, and cloud platforms. Always eager to learn 
                and take on new challenges that push the boundaries of what's possible.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <div
                  key={highlight.title}
                  className="p-6 bg-gray-50 rounded-xl card-shadow hover:scale-105 transition-transform duration-300"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <IconComponent size={24} className="text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 