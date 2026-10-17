export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-charcoal text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-xl font-bold tracking-tight flex items-center gap-2">
            OSF<span className="text-crown">WEARS</span>
          </div>
          <p className="text-charcoal/40 text-sm">
            Menswear and slides. Style meets comfort.
          </p>
          <div className="text-charcoal/40 text-sm">
            Nationwide delivery in Nigeria<br />
            &copy; 2026 Oluwaseyifunmi Wears
          </div>
        </div>
      </div>
    </footer>
  );
}
