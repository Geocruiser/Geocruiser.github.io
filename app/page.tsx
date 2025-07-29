import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"

/**
 * Main portfolio page component
 * Simplified single-page layout with hero and projects
 */
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      
      {/* Footer */}
      <footer className="py-8 border-t bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Morgan Jones. Built with Next.js, TypeScript, and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 