import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card group">
      <Link href={`/products/${product.slug}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={500}
          className="w-full h-64 object-cover"
        />
      </Link>
      <div className="p-6">
        <Link href={`/products/${product.slug}`} className="block">
          <h3 className="text-xl font-serif font-bold text-charcoal mb-1">{product.name}</h3>
          <span className="text-crown-dark text-sm font-semibold">₦{product.price.toLocaleString()}</span>
        </Link>
        <p className="text-charcoal/50 text-sm mt-2">{product.sizes.join(' • ')}</p>
      </div>
    </article>
  );
}
