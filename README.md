# Qaisar Majeed - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS. Featuring smooth animations, glassmorphism effects, and a beautiful gradient color scheme.

![Portfolio Banner](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=400&fit=crop)

## ✨ Features

- 🎨 **Modern Design** - Clean, minimalist design with gradient accents
- 🌗 **Dark/Light Mode** - Full theme support with smooth transitions
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Fast Performance** - Static site generation with Next.js
- 🎭 **Smooth Animations** - Framer Motion animations throughout
- 💎 **Glassmorphism** - Modern glass-effect UI elements
- 🎯 **SEO Optimized** - Comprehensive meta tags and Open Graph support
- ♿ **Accessible** - Built with accessibility in mind using Radix UI primitives

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui + Radix UI
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** GitHub Pages

## 📋 Prerequisites

- Node.js 18 or higher
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/qaisermajeed/qaisermajeed.github.io.git
cd qaisermajeed.github.io
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build & Deployment

Build for production:
\`\`\`bash
npm run build
\`\`\`

The static site will be generated in the \`dist/\` directory.

### GitHub Pages Deployment

The site automatically deploys to GitHub Pages via GitHub Actions when changes are pushed to the \`main\` branch.

## 🎨 Customization

### Colors

Update the color scheme in \`app/globals.css\`:
\`\`\`css
:root {
  --primary: 262 83% 58%;  /* Purple gradient */
  --gradient-1: 262 83% 58%;
  --gradient-2: 280 90% 65%;
}
\`\`\`

### Content

- **Hero Section:** \`components/hero.tsx\`
- **About:** \`components/about.tsx\`
- **Skills:** \`components/skills.tsx\`
- **Projects:** \`components/projects.tsx\`
- **Experience:** \`components/experience.tsx\`
- **Contact:** \`components/contact.tsx\`

## 📁 Project Structure

\`\`\`
qaisermajeed.github.io/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main page composition
│   └── globals.css       # Global styles & animations
├── components/
│   ├── hero.tsx          # Landing section
│   ├── about.tsx         # About me section
│   ├── skills.tsx        # Skills showcase
│   ├── projects.tsx      # Project portfolio
│   ├── experience.tsx    # Work experience timeline
│   ├── contact.tsx       # Contact form
│   ├── header.tsx        # Navigation
│   ├── footer.tsx        # Footer
│   └── ui/               # shadcn/ui components
├── lib/                  # Utilities
├── hooks/                # Custom React hooks
└── public/               # Static assets
\`\`\`

## 🎯 Key Features Implemented

### Modern Hero Section
- Animated gradient backgrounds
- Floating cards with glassmorphism
- Social media links
- Professional statistics
- Smooth scroll indicator

### Enhanced Projects Section
- Filterable project cards
- Hover effects with gradient borders
- Technology badges
- Featured project highlights
- Modern card-hover animations

### Advanced Skills Section
- Categorized skills (Frontend, Backend, Database, Cloud)
- Animated progress bars with gradients
- Tools & software showcase
- Interactive stats

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Qaisar Majeed**
- GitHub: [@qaisermajeed](https://github.com/qaisermajeed)
- LinkedIn: [qaisermajeed](https://linkedin.com/in/qaisermajeed)
- Email: qaiser_majeed@live.com

## 🙏 Acknowledgments

- Design inspiration from [toukoum.fr](https://www.toukoum.fr/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)

---

**Built with ❤️ using Next.js and modern web technologies**
