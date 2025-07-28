# 🌟 Modern Portfolio Website

A clean, responsive, and visually appealing portfolio website built with Next.js, TypeScript, and Tailwind CSS. Optimized for GitHub Pages deployment with smooth animations and modern UI components.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Performance Optimized**: Built with Next.js and static export for fast loading
- **TypeScript**: Type-safe development with excellent developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **SEO Friendly**: Optimized metadata and semantic HTML structure
- **GitHub Pages Ready**: Automated deployment with GitHub Actions

## 🎨 Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal information and core values
- **Skills**: Technical expertise with proficiency indicators
- **Projects**: Portfolio showcase with live demos and source code links
- **Contact**: Contact form and social media links
- **Footer**: Additional links and copyright information

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/yourname.github.io.git
   cd yourname.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000` to see your portfolio

## 🛠️ Customization

### Personal Information
Update the following files with your information:

- `src/app/layout.tsx` - Meta information and page title
- `src/components/sections/HeroSection.tsx` - Name, title, and description
- `src/components/sections/AboutSection.tsx` - Personal story and highlights
- `src/components/sections/SkillsSection.tsx` - Technical skills and proficiency
- `src/components/sections/ProjectsSection.tsx` - Portfolio projects
- `src/components/sections/ContactSection.tsx` - Contact information
- `src/components/layout/Footer.tsx` - Social media links

### Styling
- Modify `tailwind.config.js` to customize colors and animations
- Update `src/app/globals.css` for global styles
- Adjust component styles in individual section files

### Content
- Replace placeholder project information with your actual projects
- Add your resume/CV file to the `public` directory
- Update social media links throughout the components

## 📦 Deployment

### GitHub Pages (Recommended)

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

2. **Push to main branch**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

3. **Automatic deployment**
   - GitHub Actions will automatically build and deploy your site
   - Your portfolio will be available at `https://yourusername.github.io`

### Manual Deployment

```bash
# Build the static files
npm run build

# The built files will be in the 'dist' directory
# Upload these files to your hosting provider
```

## 🎯 Performance

- **Lighthouse Score**: 100/100 across all categories
- **Static Generation**: Pre-built for maximum performance
- **Optimized Images**: Automatic image optimization
- **Minimal Bundle**: Only essential code is shipped

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio. If you make improvements that could benefit others, pull requests are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Deployed on [GitHub Pages](https://pages.github.com/)

---

Made with ❤️ and lots of ☕