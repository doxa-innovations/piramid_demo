Project Overview

This project is a frontend-only demo built to showcase:

Luxury brand visual direction

Modern UI presentation

Hero sections with cinematic imagery/video

Smooth micro-interactions and motion transitions

The design intentionally focuses on emotion and storytelling rather than content overload.

🛠 Stack
Tech	Why it was chosen
Next.js (App Router)	SEO-ready structure + image optimization
Tailwind CSS v4 (config-less)	Fast design iteration + custom theming via CSS variables
Framer Motion	Smooth page animations + luxury visual polish
Next/Image	Automatic responsive image optimization

✨ UI / Design Highlights

Modern glass / smoky UI design system

Luxury serif typography (Cormorant Garamond)

Smooth scroll-fade and staggered reveal animations

TikTok-style video section embedded as full-visual moment

Responsive layout optimized for mobile or tablet walkthroughs

Prefixed brand colors from the resort’s logo

📂 Project Structure

src/
├─ app/
│   ├─ layout.tsx        → Global HTML structure / fonts applied here
│   ├─ page.tsx          → Home page sections assembled
│   └─ globals.css       → Tailwind v4 + theme variables + utilities
└─ components/
└─ sections/         → Hero, Rooms, Amenities, Footer etc.

Running the Project

Safe to run. No external services. No backend.

Install dependencies




📦 Deployment

Works anywhere that supports Docker or serverless deployment:

Vercel (recommended)

Netlify

Docker (Nixpacks / Dokploy)

✅ Deliverable Status
Page / Section	Status
Landing Hero	✅ done
Booking (CTA section)	✅ done
TikTok video reveal	✅ done
About + image collage	✅ done
Amenities section	✅ done
Rooms showcase	✅ done
Footer	✅ done