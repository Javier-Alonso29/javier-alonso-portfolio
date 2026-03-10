# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Astro, React, and Tailwind CSS. It showcases projects, blog posts, work experiences, and professional information. The site runs on port 4312 during development and is deployed to Netlify.

## Development Commands

### Core Commands
- `pnpm install` - Install dependencies
- `pnpm run dev` - Start development server on http://localhost:4312
- `pnpm run build` - Build the site for production
- `pnpm run preview` - Preview production build locally
- `pnpm run format` - Format code with Prettier

### Package Manager
This project uses **pnpm** (version 8.15.5+) as its package manager. Always use `pnpm` instead of `npm` or `yarn`.

## Architecture

### Tech Stack
- **Astro 4.x** - Static site generator and framework
- **React 18** - Interactive components (islands architecture)
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Styling with custom theme system
- **MDX** - Markdown with JSX support for content

### Content Collections

The project uses Astro's content collections system (src/content/config.ts) with four main collections:

1. **projects** - Portfolio projects with title, startDate, description, image, and tags
2. **experiences** - Work experiences with company, dates, location, and tags
3. **posts** - Blog posts with metadata and optional canonical URLs
4. **books** - Reading list with author and readYear

All collections support MDX format and are stored in `src/content/{collection-name}/`.

### Layout Structure

The site uses a nested layout system:

- **BaseLayout.astro** - Root layout with SEO, Schema.org, Header, Footer, and ViewTransitions
- **MDXLayout.astro** - For content pages (posts, projects, experiences)
- **IndexPageLayout.astro** - For index pages with breadcrumbs
- **TopLayout.astro** / **BottomLayout.astro** - Utility layouts for specific sections

### Component Architecture

Components are organized by type:

- `src/components/` - Astro components (.astro files)
- `src/components/react/` - React components (.tsx files) for interactive features
- `src/components/ui/` - Reusable UI components (shadcn/ui style with Radix UI primitives)
- `src/components/sections/` - Page section components (IntroCard, AboutMe, ExperienceCard, etc.)

**Important**: The homepage (src/pages/index.astro) uses a card-based grid layout with responsive spans defined via Tailwind classes (e.g., `lg:col-span-9`).

### Configuration Files

- **src/content/profileData.ts** - Central configuration for personal information, skills, social links, and site metadata. Update this file when changing profile information.
- **astro.config.ts** - Astro configuration with integrations (React, Tailwind, MDX)
- **tailwind.config.ts** - Custom theme with CSS variables for colors, using `hsl(var(--variable))` pattern
- **tsconfig.json** - TypeScript config with `@/*` path alias pointing to `./src/*`

### Styling System

The project uses a custom design system based on CSS variables:

- Theme colors are defined as HSL variables (--primary, --background, --muted, etc.)
- Dark mode is enabled via the `class` strategy (`darkMode: ["class"]`)
- Uses shadcn/ui component patterns with `tailwind-merge` and `class-variance-authority`
- Custom animations include `appear`, `accordion-down`, and `accordion-up`

### Dynamic Content

- **Design Patterns Page** (src/pages/design-patterns.astro) - Fetches content from GitHub repository using Octokit
- **GitHub Integration** (src/utils/github.ts) - Fetches and parses markdown files from external repositories
- **Sitemap** (src/pages/sitemap.xml.ts) - Dynamically generated sitemap

### SEO and Metadata

The site includes comprehensive SEO support:

- **HeadSEO.astro** - Handles meta tags, Open Graph, and Twitter cards
- **SchemaOrg.astro** - Structured data for search engines
- **Sitemap** - Automatically generated at /sitemap.xml
- View Transitions are enabled for smooth page navigation

## Key Patterns

### Adding New Content

1. **New Project**: Create MDX file in `src/content/projects/` with required frontmatter (title, startDate, description)
2. **New Post**: Create MDX file in `src/content/posts/` with frontmatter including optional `canonical` URL
3. **New Experience**: Create MDX file in `src/content/experiences/` with company, dates, and location

### React Components

React components are used sparingly for interactivity:
- ThemeToggle.tsx - Dark mode toggle with localStorage persistence
- WordCloud.tsx - Interactive tag visualization
- TagsBarChart.tsx - Data visualization
- NowTime.tsx - Real-time clock component

Use Astro components for static content and React only when client-side interactivity is needed.

### Image Handling

- Avatar and profile images are in `/public/`
- Project and post images should be referenced in frontmatter with `image.url` and `image.alt`
- Uses Astro's image optimization with Sharp

## Important Considerations

- **Port**: Development server runs on port **4312** (not the default 4321)
- **Path Aliases**: Use `@/` prefix for imports (e.g., `@/components/ui/button`)
- **TypeScript**: Strict mode is enabled; all new code should be type-safe
- **Git Versioning**: Project uses semantic versioning tracked in package.json
- **License**: Content is CC BY 4.0, code is MIT
- **Deployment**: Site deploys to https://javieralonso.netlify.app/
