export function buildWhatsAppUrl(message: string): string {
  const phone = '2348000000000';
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}
