# CRUSH.md - Portfolio Art Histoire

This document provides essential information for AI agents working with this React portfolio project.

## Project Overview

This is a **React portfolio website** with an art history theme, built with:
- **React 18** + Vite
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- Deployed on **Vercel**

## Essential Commands

```bash
# Development server (port 3000)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Linting
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx              # Header with profile photo & contact
│   ├── Experience.jsx        # Professional experience
│   ├── Education.jsx         # Education history
│   ├── Projects.jsx          # Personal projects
│   └── FloatingPaintings.jsx # Animated background paintings
├── App.jsx                   # Main app component
├── main.jsx                  # React entry point
└── index.css                 # Global styles & Tailwind imports

public/
├── Images/                   # All painting images
├── Photo_identite.jpg        # Profile photo
└── Logo/                     # Company logos
```

## Code Patterns & Conventions

### Component Structure
- Each component uses **functional components** with React hooks
- **Framer Motion** for animations (`motion.div`, `motion.section`, etc.)
- **Tailwind CSS** classes for styling
- Data is stored in `portfolioData` objects within each component

### Example Component Pattern
```jsx
import React from 'react'
import { motion } from 'framer-motion'

const Component = () => {
  const portfolioData = {
    // Data structure here
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Content with Tailwind classes */}
    </motion.section>
  )
}
```

### Styling Conventions
- **Glassmorphism effect**: `backdrop-blur-md bg-white/80`
- **Color palette** (defined in `tailwind.config.js`):
  - `off-white` (#f9f7f1) - Background
  - `charcoal` (#333333) - Main text
  - `gold` (#b8860b) - Accents & borders
  - `terracotta` (#a0522d) - Secondary text
- **Fonts**: Playfair Display (titles), Lato (body text)

### Image Handling
- All images are stored in `public/` directory
- Profile photo: `public/Photo_identite.jpg`
- Paintings: `public/Images/`
- Logos: `public/Logo/`
- Reference images with absolute paths: `/image-name.jpg`

## Data Management

Each component manages its own data in a `portfolioData` object:

- **Hero.jsx**: Personal info, contact details, bio
- **Experience.jsx**: Professional experience array
- **Education.jsx**: Education history array  
- **Projects.jsx**: Personal projects array
- **FloatingPaintings.jsx**: Painting configuration array

## Animation Patterns

### Framer Motion Usage
- **Page transitions**: `initial`, `animate`, `transition` props
- **Hover effects**: `whileHover` with scale transforms
- **Floating animations**: Infinite `y` and `rotate` animations
- **Staggered delays**: Using index-based delays in arrays

### Floating Paintings Animation
```jsx
animate={{
  y: [0, -20, 0],
  rotate: [rotation, rotation + 1, rotation]
}}
transition={{
  duration: 4,
  delay: painting.delay,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut"
}}
```

## Development Workflow

1. **Modify content**: Update `portfolioData` objects in relevant components
2. **Add images**: Place in `public/` and reference with absolute paths
3. **Test locally**: `npm run dev` (runs on port 3000)
4. **Build for production**: `npm run build`
5. **Preview build**: `npm run preview`

## Important Gotchas

- **Image paths**: Always use absolute paths starting with `/`
- **Responsive design**: Components have mobile-optimized versions
- **Animation performance**: Floating paintings are hidden on mobile (`sm:hidden`)
- **Glassmorphism**: Uses backdrop blur which may not work in all browsers

## Deployment

- **Platform**: Vercel
- **Configuration**: `vercel.json` with SPA routing
- **Build output**: `dist/` directory
- **Base path**: `/` (configured in `vite.config.js`)

## Testing & Quality

- **Linting**: ESLint with React plugins
- **No tests**: No test framework configured
- **Manual testing**: Check responsive behavior and animations

## File Organization

- **Source code**: `src/` directory
- **Static assets**: `public/` directory
- **Build output**: `dist/` (generated)
- **Configuration**: Root level config files

## Key Files for Modification

- `src/components/Hero.jsx` - Personal information
- `src/components/Experience.jsx` - Work experience
- `src/components/Education.jsx` - Education history
- `src/components/Projects.jsx` - Personal projects
- `src/components/FloatingPaintings.jsx` - Background animations
- `tailwind.config.js` - Color palette and design tokens