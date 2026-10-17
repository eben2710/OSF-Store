# OSF Wears — Storefront

A vibe-coded men's wear storefront inspired by [Oluwaseyifunmi Wears](https://oluwaseyifunmi-wears.vercel.app/). Premium polos, shirts, jeans, shorts, and signature slides with WhatsApp ordering and nationwide delivery across Nigeria.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)

## Get started

```bash
cd project/osf-store
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## How it works

- Browse the latest drop on the home page.
- Click a piece to see its detail page, pick a size and color, then tap **Order on WhatsApp**.
- The order button opens WhatsApp with a pre-filled message (item, price, placeholders for size/color). The merchant confirms stock, delivery fee, and payment before you pay.
- No accounts, no checkout form, no payments on the site — orders live entirely on WhatsApp, matching the reference store.

## Project structure

```
app/
  layout.tsx        # Root layout with Navbar + Footer
  page.tsx          # Home: hero, product grid, OSF standard, order steps
  products/[slug]/page.tsx  # Product detail with size/color + WhatsApp order
components/
  Navbar.tsx
  Footer.tsx
  ProductCard.tsx
  OrderButton.tsx   # WhatsApp deep-link button
lib/
  products.ts       # Product type + WhatsApp URL builder
  whatsapp.ts       # (inlined into products.ts)
data/
  products.json     # Static product catalog (no database)
public/             # Static assets
```

## Customizing

- **Products:** edit `data/products.json` to add, remove, or change pieces.
- **WhatsApp number:** update the `phone` constant in `lib/products.ts`.
- **Colors:** the `crown` gold accent is defined in `tailwind.config.js`; swap it for your brand color.

## Deploy

Push to GitHub and connect the repo to Vercel — zero-config deployment.
