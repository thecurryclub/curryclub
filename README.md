# The Curry Club – Next.js Site (v5.1)

- Restored **hero banner** and expanded **catalog**.
- Home layout: **Hero → Stats → Why Us → Product highlight strip → Testimonials → CTAs**.
- Products: spice bars, diet badges, "More info" modal, detail pages.
- FAQ: redesigned with left anchor menu + right two-column accordions.
- How it works: video slot at `/public/the-curry-club.mp4` (not included).
- Case Studies: index + detail pages.

## Run
```bash
npm install
npm run dev
# http://localhost:3000
```

## Edit hotspots
- `/sections/*` – homepage blocks
- `/lib/products.ts` – add/change products
- `/app/faqs/page.tsx` – FAQ sections and items
- `/app/products/products-client.tsx` – list & modal logic
- `/app/products/[slug]/page.tsx` – product detail template
- `/components/Navbar.tsx` & `/components/Footer.tsx` – nav/footer
