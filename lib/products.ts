export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  image: string;
  images: string[];
  sizes: string[];
  colors: string[];
};

export function buildWhatsAppUrl(message: string): string {
  const phone = '447988581545';
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}
