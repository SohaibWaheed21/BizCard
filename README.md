# BizCard — Business Profile Generator

A free tool that lets local businesses generate a professional profile page instantly. Built as a portfolio project targeting Lahore-based businesses without websites.

## Features
- Live preview that updates as you type
- 4 themes: Minimal, Dark, Warm, Slate
- Shareable link (encodes profile as URL parameter)
- WhatsApp CTA button on the preview card
- "Get a Real Website" CTA linking to your email
- Fully responsive

## Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build
```

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import your repo
3. Vercel auto-detects Next.js — just click Deploy
4. Done. Your site is live.

## Customization

- Update the email in `app/page.tsx` (the "Get a Real Website" button)
- Update the footer LinkedIn link and name in `app/page.tsx`
- Change the accent color in `app/globals.css` (--accent variable)

## Project Structure

```
app/
  page.tsx          # Main generator page
  preview/page.tsx  # Shared profile viewer
  globals.css       # Themes + global styles
  layout.tsx        # Root layout

components/
  BusinessForm.tsx  # Left panel — input form
  BusinessPreview.tsx # Right panel — live preview card
  types.ts          # TypeScript types
```
