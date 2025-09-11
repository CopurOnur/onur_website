# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based personal portfolio website for a deep learning engineer specializing in computer vision. The site features a retro pixel art aesthetic with interactive elements including a Konami code easter egg and terminal component.

## Development Commands

- **Development server**: `npm run dev` - Start Next.js development server
- **Build**: `npm run build` - Build the application for production
- **Lint**: `npm run lint` - Run ESLint to check code quality
- **Start production**: `npm start` - Start production server after build

## Architecture & Structure

### App Router Structure (Next.js 14)
- `/app` - App Router directory containing pages and layouts
  - `layout.tsx` - Root layout with theme provider and analytics
  - `page.tsx` - Homepage with hero, about, and skills sections
  - `globals.css` - Global styles and CSS variables
  - `/projects`, `/papers`, `/contact`, `/cv` - Page directories

### Component System
- Built with **shadcn/ui** components (New York style)
- Custom pixel art themed components in `/components`:
  - `pixel-layout.tsx` - Main layout wrapper with retro styling
  - `konami-code.tsx` - Easter egg component for cheat code detection  
  - `retro-terminal.tsx` - Interactive terminal component
  - `theme-provider.tsx` - Dark/light theme management
- UI components in `/components/ui` following shadcn/ui patterns

### Styling Approach
- **Tailwind CSS** with custom pixel art design system
- CSS variables for theming in `app/globals.css`
- Shadow effects using `shadow-[Xpx_Ypx_0px_0px_theme(colors.border)]` pattern
- Consistent border styling with `border-2 border-border`
- Pixel art elements using small rounded squares (`rounded-sm`)

### Key Libraries & Dependencies
- **Next.js 14** - React framework with App Router
- **Radix UI** - Headless UI components for accessibility
- **Tailwind CSS** - Utility-first CSS framework  
- **Lucide React** - Icon library
- **Geist** - Typography fonts (sans and mono)
- **next-themes** - Theme switching functionality
- **@vercel/analytics** - Analytics integration

### Notable Configuration
- ESLint and TypeScript errors ignored during builds (see `next.config.mjs`)
- Images are unoptimized for static export compatibility
- Path aliases configured: `@/` points to project root

## Development Guidelines

### Component Patterns
- Use TypeScript with strict typing
- Follow shadcn/ui component patterns for consistency  
- Maintain pixel art aesthetic with consistent shadow and border styles
- Components should be responsive with mobile-first approach

### Styling Conventions  
- Use Tailwind utilities over custom CSS
- Maintain consistent spacing using Tailwind's spacing scale
- Use `font-mono` for pixel art text elements
- Apply shadows using the established `shadow-[...]` pattern

### Interactive Features
- The site includes a Konami code easter egg (↑↑↓↓←→←→BA)
- RetroTerminal component provides interactive CLI experience
- Theme switching between light/dark modes

## File Locations
- Components: `/components` and `/components/ui`
- Styles: `/app/globals.css` and `/styles`  
- Utilities: `/lib`
- Custom hooks: `/hooks`
- Static assets: `/public`