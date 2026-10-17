import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products.json';

export default function HomePage() {
  return (
    <>
      <section className="relative pt-20 pb-24 px-4 md:pt-32 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-charcoal/5" />
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-crown-light text-crown-dark text-xs font-semibold tracking-wider uppercase mb-4">
            New drop available
          </span>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-charcoal mb-6 leading-tight">
            Dress like the day already went your way.
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto mb-10">
            Premium polos, shirts, jeans, shorts and signature slides. Street
            luxury with beach comfort, made for men who notice details.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link href="#shop" className="btn-whatsapp">
              Shop the latest drop
            </Link>
            <Link href="#order" className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 bg-white text-charcoal px-6 py-3 font-medium hover:bg-charcoal/5">
              Ask what is in stock
            </Link>
          </div>
          <div className="mt-16 flex justify-center gap-6 text-sm text-charcoal/50 border-t border-charcoal/10 pt-8">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-charcoal/10 flex items-center justify-center text-xs">🇳🇬</span>
              <span>Nationwide delivery in Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-charcoal/10 flex items-center justify-center text-xs">✓</span>
              <span>Quality checked before dispatch</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-charcoal/10 flex items-center justify-center text-xs">💬</span>
              <span>Order directly on WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">The latest drop</h2>
            <p className="text-charcoal/60 max-w-xl mx-auto">
              Pick your size, tap order, and your message is ready to send.
              Limited pieces per drop.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="py-24 px-4 bg-charcoal/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">The OSF standard</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-charcoal/10 flex items-center justify-center mx-auto mb-6 text-xl">
                📏
              </div>
              <h3 className="text-xl font-serif mb-3 text-charcoal">Cut to sit right</h3>
              <p className="text-charcoal/60 leading-relaxed">
                Every piece is shaped to fall clean on the shoulders and move
                with you, from the office to the beach.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-charcoal/10 flex items-center justify-center mx-auto mb-6 text-xl">
                🧵
              </div>
              <h3 className="text-xl font-serif mb-3 text-charcoal">Fabric you can feel</h3>
              <p className="text-charcoal/60 leading-relaxed">
                Heavy, breathable materials that keep their shape wash after
                wash.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-charcoal/10 flex items-center justify-center mx-auto mb-6 text-xl">
                👑
              </div>
              <h3 className="text-xl font-serif mb-3 text-charcoal">Detail with a crown</h3>
              <p className="text-charcoal/60 leading-relaxed">
                Gold-toned finishing and the OSF mark on the pieces that matter,
                so you stand out quietly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="order" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-serif tracking-tight text-charcoal mb-6">
                Order in four steps
              </h2>
              <p className="text-charcoal/60 leading-relaxed mb-8">
                No account, no checkout form. Just a conversation.
              </p>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-crown text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">Choose your piece</h4>
                    <p className="text-charcoal/60 text-sm">
                      Browse the drop and pick your size.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-crown text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">Tap order</h4>
                    <p className="text-charcoal/60 text-sm">
                      Your WhatsApp message fills in automatically.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-crown text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">Confirm and pay</h4>
                    <p className="text-charcoal/60 text-sm">
                      We confirm stock, delivery fee and payment details.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-crown text-white flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">Receive it</h4>
                    <p className="text-charcoal/60 text-sm">
                      Delivered to your door anywhere in Nigeria.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="bg-charcoal p-8 rounded-3xl text-white">
              <h3 className="text-2xl font-serif mb-6 text-white">Your next favourite outfit is one message away.</h3>
              <p className="text-charcoal/40 text-sm mb-8">
                Stock moves fast every drop. Message us now before your size is
                gone.
              </p>
              <a
                href="https://wa.me/2348000000000?text=Hi%20OSF%20Wears%2C%20I%20would%20like%20to%20place%20an%20order"
                className="btn-whatsapp bg-white text-charcoal hover:bg-crown-light"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
