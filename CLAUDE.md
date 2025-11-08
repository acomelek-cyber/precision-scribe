# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Precision Scribe is a Next.js application that converts tutoring session recordings into comprehensive study notes using AI. The app targets ACT/SAT, LSAT, and MCAT test prep sessions with specialized note formats including accessibility-optimized options for dyslexia and neurodivergent learners.

## Development Commands

```bash
# Development
npm run dev          # Start development server on port 3000

# Build & Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint (note: currently configured to ignore errors during builds)
```

## Architecture

### Core User Flow
1. **Landing Page** (`app/page.tsx`) - Marketing site with sections for different test prep markets
2. **Upload Page** (`app/upload/page.tsx`) - File upload or Google Drive link submission
3. **Processing Page** (`app/processing/page.tsx`) - Status page shown while AI generates notes
4. **Email Delivery** - Notes sent to user's email (handled by external n8n workflow)

### API Routes
- **POST `/api/upload`** (`app/api/upload/route.ts`) - Uploads files to Vercel Blob storage
- **POST `/api/submit`** (`app/api/submit/route.ts`) - Triggers n8n workflow with recording metadata

The submit endpoint requires `N8N_WEBHOOK_URL` environment variable to forward requests to the external processing workflow.

### External Dependencies
- **Vercel Blob**: File storage for uploaded recordings
- **n8n Webhook**: External workflow automation that handles AI processing and email delivery
- **Vercel Analytics**: Built-in analytics tracking

### Component Organization
- `components/` - Landing page sections (hero, pricing, test-specific sections, etc.)
- `components/ui/` - shadcn/ui components (Radix UI primitives)
- Uses **New York** style variant from shadcn/ui

### State Management
- Client-side state uses React hooks (useState, useEffect)
- No global state management library
- Form handling with react-hook-form and zod validation

### Styling
- **Tailwind CSS v4** with PostCSS
- Path alias: `@/*` maps to project root
- Uses `cn()` utility from `lib/utils.ts` for conditional class merging

### Type Safety
- TypeScript with strict mode enabled
- Build errors currently ignored in production (see `next.config.mjs`)
- Path aliases configured in `tsconfig.json`

## Key Implementation Details

### File Upload Flow
1. User selects file via drag-and-drop (react-dropzone) or enters Google Drive link
2. If file upload: POST to `/api/upload` → Vercel Blob returns URL
3. POST to `/api/submit` with file URL, email, test type, and note format
4. Redirect to `/processing` page with email in query params

### Test Types & Note Formats
- **Test Types**: `act-sat`, `lsat`, `mcat`
- **Note Formats** (ACT/SAT only):
  - `standard` - Standard notes
  - `nd-enhanced` - Optimized for ADHD/autism
  - `dyslexia` - Dyslexia-optimized format
- LSAT and MCAT always use standard format

### Sample Pages
Three sample note pages demonstrate different formats:
- `/samples/generic-notes` - Standard format
- `/samples/nd-notes` - ND-enhanced format
- `/samples/dyslexia-notes` - Dyslexia-optimized format

## Environment Variables

Required in `.env.local`:
- `N8N_WEBHOOK_URL` - Webhook endpoint for processing workflow
- Vercel Blob credentials (automatically provided by Vercel)

## Development Notes

- Images are unoptimized (see `next.config.mjs`)
- Next.js App Router (not Pages Router)
- React 19 and Next.js 16 (latest stable)
- ESLint and TypeScript errors ignored during builds for rapid iteration
