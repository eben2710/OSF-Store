export function buildWhatsAppUrl(message: string): string {
  const phone = '447988581545';
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}
