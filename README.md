# Personal Portfolio - Suman Paudel

A modern, professional, and visually engaging personal portfolio website showcasing skills, projects, and experience as a Software Engineer, Website Administrator, and Data Analyst.

## Features

- 🎨 **Modern Design**: Clean, minimal, and tech-focused UI with smooth animations
- 🌓 **Dark/Light Mode**: Toggle between dark and light themes
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Next.js 14 for optimal performance
- 🎯 **Smooth Animations**: Scroll-based animations using Framer Motion
- ♿ **Accessible**: Proper semantic HTML and ARIA labels

## Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About Me**: Professional background and values
3. **Skills**: Technical skills with progress indicators
4. **Projects**: Featured projects with descriptions and links
5. **Experience**: Professional work history
6. **Education**: Academic qualifications
7. **Contact**: Contact form and social links
8. **Footer**: Additional links and information

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Ready for Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Personal-Portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Hero Section**: Edit `components/sections/Hero.tsx`
2. **About Section**: Edit `components/sections/About.tsx`
3. **Skills**: Edit the `skills` array in `components/sections/Skills.tsx`
4. **Projects**: Edit the `projects` array in `components/sections/Projects.tsx`
5. **Experience**: Edit the `experiences` array in `components/sections/Experience.tsx`
6. **Education**: Edit the `education` array in `components/sections/Education.tsx`
7. **Contact**: Update email and social links in `components/sections/Contact.tsx` and `components/Footer.tsx`

### Add Your CV

1. Place your CV file in the `public` folder as `cv.pdf`
2. The download button in the Hero section will automatically link to it

### Update Social Links

Update the URLs in:
- `components/sections/Hero.tsx`
- `components/sections/Contact.tsx`
- `components/Footer.tsx`

### Customize Colors

Edit the color scheme in `tailwind.config.js` under the `colors` section.

## Build for Production

```bash
npm run build
npm start
```

