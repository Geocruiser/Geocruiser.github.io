# Geocruiser - AI-First Engineer Portfolio

A modern, responsive portfolio website showcasing AI-first engineering projects and expertise. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **AI-First Focus**: Specifically designed to showcase AI/ML projects and expertise
- **GitHub Pages Ready**: Automated deployment to GitHub Pages

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions

## 🏃‍♂️ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/geocruiser/Geocruiser.github.io.git
   cd Geocruiser.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Projects
Edit the projects array in `components/projects-section.tsx` to showcase your own projects:

```typescript
const projects: Project[] = [
  {
    id: "your-project",
    title: "Your Project Name",
    description: "Brief description",
    longDescription: "Detailed description",
    technologies: ["Tech1", "Tech2"],
    icon: <YourIcon className="h-6 w-6" />,
    demoUrl: "https://your-demo.com",
    githubUrl: "https://github.com/you/project",
    featured: true
  }
]
```

### Personal Information
- Update contact details in `components/contact-section.tsx`
- Modify the hero section in `components/hero-section.tsx`
- Customize skills and about information in `components/about-section.tsx`

### Styling
- Theme colors can be adjusted in `app/globals.css`
- Component styles use Tailwind CSS classes
- Additional animations can be added using Framer Motion

## 🚀 Deployment

The site automatically deploys to GitHub Pages when you push to the main branch. Make sure to:

1. Enable GitHub Pages in your repository settings
2. Set the source to "GitHub Actions"
3. The workflow in `.github/workflows/deploy.yml` handles the rest

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── navigation.tsx    # Navigation bar
│   ├── hero-section.tsx  # Hero/landing section
│   ├── about-section.tsx # About section
│   ├── projects-section.tsx # Projects showcase
│   └── contact-section.tsx # Contact section
├── lib/                  # Utility functions
│   └── utils.ts         # Helper functions
└── public/              # Static assets
```

## 🎨 Design Philosophy

This portfolio follows modern design principles:
- **Minimalist**: Clean, uncluttered interface
- **Professional**: Suitable for business and technical audiences
- **Accessible**: High contrast ratios and semantic HTML
- **Performance**: Optimized images and efficient code
- **AI-Focused**: Specifically tailored for AI/ML professionals

## 🤝 Contributing

Feel free to submit issues and enhancement requests! This template is designed to be easily customizable and extensible.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Geocruiser | Powered by Next.js and GitHub Pages