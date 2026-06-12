# Active Context: OminiMesh Website

## Current State

**Project Status**: ✅ Active development

Building the OminiMesh marketing site and product pages on Next.js 16 + Tailwind CSS 4.

## Recently Completed

- [x] Base Next.js 16 setup with App Router
- [x] TypeScript configuration with strict mode
- [x] Tailwind CSS 4 integration
- [x] ESLint configuration
- [x] Memory bank documentation
- [x] Recipe system for common features
- [x] OminiMesh MVP landing page, reusable components, waitlist form, and waitlist API prototype
- [x] Site-wide navigation and footer (`SiteHeader`, `SiteFooter`)
- [x] Dark theme contrast and viewing optimizations
- [x] Free plan added to pricing table (4-column responsive grid)
- [x] Terms of Service page added
- [x] Legal and policy pages
- [x] Brand unified to "OminiMesh" across codebase
- [x] Logo legibility improved for dark theme
- [x] `/partners` page for grant/investor outreach
- [x] `/products` page with branded Mi-Fi and routers including budget options under $30
- [x] `/card` page for Virtual/Physical Visa card
- [x] `/sim` page for Virtual/eSIM and Physical SIM kit
- [x] Full link/button audit: pricing cards, waitlist anchors, and cross-page CTAs

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/app/page.tsx` | Home page | ✅ Ready |
| `src/app/layout.tsx` | Root layout | ✅ Ready |
| `src/app/globals.css` | Global styles | ✅ Ready |
| `public/omnimesh-logo.svg` | OminiMesh Global two-tone wordmark logo | ✅ Added |
| `public/omnimesh-mark.svg` | OminiMesh Global app/fav icon mark | ✅ Added |
| `src/components/Logo.tsx` | Reusable OminiMesh Global logo component | ✅ Added |
| `src/components/FeatureCard.tsx` | Landing page feature card component | ✅ Added |
| `src/components/PricingCard.tsx` | Landing page pricing card component | ✅ Added |
| `src/components/WaitlistForm.tsx` | Client-side waitlist form component | ✅ Added |
| `src/app/api/waitlist/route.ts` | Prototype waitlist API route | ✅ Added |
| `.kilocode/` | AI context & recipes | ✅ Ready |

## Current Focus

The template is ready. Next steps depend on user requirements:

1. What type of application to build
2. What features are needed
3. Design/branding preferences

## Quick Start Guide

### To add a new page:

Create a file at `src/app/[route]/page.tsx`:
```tsx
export default function NewPage() {
  return <div>New page content</div>;
}
```

### To add components:

Create `src/components/` directory and add components:
```tsx
// src/components/ui/Button.tsx
export function Button({ children }: { children: React.ReactNode }) {
  return <button className="px-4 py-2 bg-blue-600 text-white rounded">{children}</button>;
}
```

### To add a database:

Follow `.kilocode/recipes/add-database.md`

### To add API routes:

Create `src/app/api/[route]/route.ts`:
```tsx
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello" });
}
```

## Available Recipes

| Recipe | File | Use Case |
|--------|------|----------|
| Add Database | `.kilocode/recipes/add-database.md` | Data persistence with Drizzle + SQLite |

## Pending Improvements

- [ ] Add more recipes (auth, email, etc.)
- [ ] Add example components
- [ ] Add testing setup recipe
- [ ] Unify brand name to "OminiMesh" across codebase, metadata, pages, API, footer, images, and memory bank docs
- [ ] Improve logo legibility in dark theme by replacing low-contrast MESH text with gradient variant and adding subtle container ring/bg

## Session History

| Date | Changes |
|------|---------|
| Initial | Template created with base setup |
| 2026-06-12 | Built OminiMesh Global MVP landing page with features, pricing, waitlist form, waitlist API prototype, reusable components, and updated metadata |
