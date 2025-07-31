# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multilingual job matching portal built with Next.js 15, designed specifically for migrants and workers seeking employment opportunities in Germany. The application supports German, English, and Chinese languages.

## Development Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality checks

## Architecture & Structure

### Internationalization (i18n)
- Uses `next-intl` for internationalization with locale-based routing
- Supported locales: `de` (German), `en` (English), `zh` (Chinese)
- Translation files located in `dictionaries/` directory
- Locale routing configured via `src/app/[locale]/` structure
- i18n configuration in `src/i18n/request.ts`
- Middleware temporarily disabled for testing (`middleware.ts`)

### UI Framework
- Built with shadcn/ui components (configured in `components.json`)
- Uses Tailwind CSS v4 with New York style variants
- Lucide React for icons
- Components use class-variance-authority for variant handling

### Component Structure
- **Header Component**: Main navigation with search functionality, language switcher, and user avatar
- **UI Components**: Located in `src/components/ui/` (button, input, card, avatar, badge)
- **Forms**: Located in `src/components/forms/` (QuickMatchForm)
- **Utility Components**: LanguageSwitcher, ProfileCompletionBanner

### Key Features in Development
Based on the PRD document, this is planned as an AI-powered job matching platform with:
- Job crawling and data collection
- LLM-based semantic job classification
- Intelligent matching engine
- Multi-language support for migrants
- User profiles and job applications

### File Path Aliases
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`

### Styling Guidelines
- Uses Geist and Geist Mono fonts from Google Fonts
- Gradient backgrounds with blue/cyan color scheme
- Responsive design with mobile-first approach
- Component-based styling with Tailwind utilities

## Important Notes

- Root path `/` redirects to `/de` (default German locale) via src/app/page.tsx
- Middleware is enabled and handles internationalization routing
- Translation files are properly loaded using next-intl's getMessages()
- Project uses pnpm as package manager (not npm)
- TypeScript configuration supports absolute imports with `@/*` paths
- All pages follow the `[locale]` routing pattern for internationalization