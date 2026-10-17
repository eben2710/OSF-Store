import type { Product } from '@/lib/products';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function OrderButton({ product }: { product: Product }) {
  const message = `Hi OSF Wears, I would like to order:\n- Item: ${product.name}\n- Price: ₦${product.price.toLocaleString()}\n- Size: [Please select]\n- Color: [Please select]\nPlease confirm stock and delivery details. Thank you!`;
  const url = buildWhatsAppUrl(message);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full md:w-auto">
      <span>💬</span> Order on WhatsApp
    </a>
  );
}
