import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { OrderButton } from '@/components/OrderButton';
import products from '@/data/products.json';
import type { Product } from '@/lib/products';

export function generateStaticParams() {
  return (products as Product[]).map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = (products as Product[]).find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link href="/#shop" className="inline-flex items-center gap-1 text-sm text-charcoal/60 hover:text-charcoal mb-8">
        &#8592; Back to shop
      </Link>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-charcoal/10 shadow-lg shadow-charcoal/5 bg-charcoal/5">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-2 gap-3">
              {product.images.slice(1).map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-xl border border-charcoal/10 bg-charcoal/5">
                  <Image
                    src={img}
                    alt={`${product.name} view ${i + 2}`}
                    fill
                    sizes="25vw"
                    className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-serif font-bold text-charcoal">&#8358;{product.price.toLocaleString()}</span>
            <span className="text-sm text-charcoal/50 font-medium">NGN</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-charcoal">
            {product.name}
          </h1>
          <p className="text-charcoal/60 leading-relaxed">{product.description}</p>

          <div className="space-y-4 pt-2">
            <div>
              <p className="text-sm font-semibold text-charcoal mb-2 uppercase tracking-wider">Select size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center text-sm font-medium text-charcoal hover:border-crown hover:bg-crown hover:text-white transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-charcoal mb-2 uppercase tracking-wider">Select color</p>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    aria-label={color}
                    className="w-10 h-10 rounded-full border-2 border-charcoal/20 shadow-sm transition-all hover:border-crown"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4">
            <OrderButton product={product} />
            <p className="text-sm text-charcoal/50 mt-3">
              We confirm stock, delivery fee and payment details before you pay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
