import Link from 'next/link';

const NAV_LINKS = [
  { href: '/', label: 'Shop' },
  { href: '#why', label: 'The OSF standard' },
  { href: '#order', label: 'How to order' },
];

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur border-b border-charcoal/10 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold text-charcoal tracking-tight flex items-center gap-2">
          OSF<span className="text-crown">WEARS</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-charcoal/60 hover:text-charcoal transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#order"
            className="text-crown-dark font-bold hover:text-crown transition-colors"
          >
            Order on WhatsApp
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-charcoal/60 hover:text-charcoal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
