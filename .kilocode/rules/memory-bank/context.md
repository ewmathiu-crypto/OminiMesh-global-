# Active Context: OminiMesh Website

## Current State

**Project Status**: ✅ Production-ready frontend foundation

The OminiMesh marketing site and product pages are built on Next.js 16 + Tailwind CSS 4. Core pages, components, APIs, and SEO/resilience foundations are complete. Current focus is polish, content accuracy, and hardening.

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
- [x] `/sitemap.xml` and `/robots.txt` for SEO
- [x] PWA manifest (`/manifest.webmanifest`) and favicon
- [x] Global 404 page (`/not-found.tsx`)
- [x] Security headers in `next.config.ts` (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy)
- [x] API rate limiting and validation for `/api/waitlist`, `/api/contact`, and new `/api/newsletter`
- [x] Cookie consent banner client component
- [x] Newsletter capture component and API
- [x] Contact form skeleton/loading state component
- [x] Fixed blank preview issue caused by stale `StructuredData` import in root layout

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/app/page.tsx` | Home page | ✅ Ready |
| `src/app/layout.tsx` | Root layout | ✅ Ready |
| `src/app/globals.css` | Global styles | ✅ Ready |
| `public/omnimesh-logo.svg` | OminiMesh wordmark logo | ✅ Ready |
| `public/omnimesh-mark.svg` | OminiMesh app/fav icon mark | ✅ Ready |
| `src/components/Logo.tsx` | Reusable OminiMesh logo component | ✅ Ready |
| `src/components/FeatureCard.tsx` | Landing page feature card | ✅ Ready |
| `src/components/PricingCard.tsx` | Pricing card | ✅ Ready |
| `src/components/WaitlistForm.tsx` | Waitlist form | ✅ Ready |
| `src/components/CookieConsent.tsx` | Cookie consent | ✅ Ready |
| `src/components/NewsletterForm.tsx` | Newsletter capture | ✅ Ready |
| `src/components/ContactFormSkeleton.tsx` | Contact skeleton/loading | ✅ Ready |
| `src/app/api/waitlist/route.ts` | Waitlist API | ✅ Ready |
| `src/app/api/contact/route.ts` | Contact API | ✅ Ready |
| `src/app/api/newsletter/route.ts` | Newsletter API | ✅ Ready |

## Current Focus

1. Validate user-facing content accuracy, tone, and claims
2. Harden security and performance
3. Prepare for data persistence and real integrations

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

## Session History

| Date | Changes |
|------|---------|
| Initial | Template created with base setup |
| 2026-06-12 | Built OminiMesh marketing site, product pages, waitlist/contact/newsletter APIs, SEO, security hardening, and fixed blank preview regression |
