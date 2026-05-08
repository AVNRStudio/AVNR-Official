import React from "react";

export default function AVNRWebsite() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-neutral-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-3xl font-black tracking-tight">AVNR</div>
          <nav className="hidden items-center gap-10 text-sm font-semibold text-neutral-300 md:flex">
            <a href="#home" className="text-white">Home</a>
            <a href="#shop" className="hover:text-white">Shop</a>
            <a href="#story" className="hover:text-white">Story</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <button className="rounded-full border border-white/15 p-3 hover:bg-white hover:text-black">
            <span className="text-xl">🛒</span>
          </button>
        </div>
      </header>

     <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.14),_transparent_35%),linear-gradient(to_bottom,_rgba(0,0,0,0.2),_rgba(0,0,0,0.95))]" />
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(120deg,#111_0%,#333_40%,#000_100%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-neutral-300">
              <span>◆</span> Built Fearless
            </div>
            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Streetwear for those who move forward.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
              AVNR is made for adventurers, risk-takers, and people who refuse to stay comfortable. Gear built for movement, ambition, and the road ahead.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#shop" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-black transition hover:scale-105">
                Shop Now <span>→</span>
              </a>
              <a href="#story" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-bold text-white hover:bg-white hover:text-black">
                Our Story
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
              <div className="flex aspect-square flex-col items-center justify-center rounded-[1.5rem] border border-white/10 bg-neutral-900 text-center">
            <img 
    src="/logo.png" 
    alt="AVNR Logo" 
   className="w-full h-full scale-[2.2] object-cover rounded-[1.5rem]"
                />
  
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 text-black">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-black md:text-5xl">Built for the bold</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
            More than apparel. AVNR is a mindset for people who see obstacles as opportunities and comfort zones as starting points.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: "⚡", title: "Courage", text: "For those who step into the unknown and keep moving." },
              { icon: "◆", title: "Durability", text: "Every piece is designed to match your ambition." },
              { icon: "◎", title: "Community", text: "A tribe of people chasing progress, risk, and freedom." },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-neutral-200 p-8 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-neutral-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.4em] text-neutral-500">First drop</p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">The fearless collection</h2>
            </div>
            <button className="w-fit rounded-full border border-white/20 px-6 py-3 font-bold hover:bg-white hover:text-black">View All</button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["AVNR Compass Tee", "$35"],
              ["Built Fearless Hoodie", "$70"],
              ["Adventurers Cap", "$28"],
            ].map(([name, price]) => (
              <div key={name} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <div className="flex aspect-[4/5] items-center justify-center bg-neutral-900 transition group-hover:scale-105">
                  <span className="text-7xl text-neutral-500">▲</span>
                </div>
                <div className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="font-black">{name}</h3>
                    <p className="mt-1 text-neutral-400">{price}</p>
                  </div>
                  <button className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black">Add</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="bg-neutral-900 px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black md:text-5xl">The AVNR story</h2>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              We started with one belief: the best gear is made for people who move. Not just physically, but mentally. People who take risks, embrace change, and refuse to settle.
            </p>
            <p className="mt-5 text-lg leading-8 text-neutral-300">
              Every piece is created with intention — functional, bold, and built fearless.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-neutral-950 p-8">
            <h3 className="text-6xl font-black">AVNR</h3>
            <p className="mt-5 text-xl font-bold text-neutral-300">FORWARD THROUGH FEAR.</p>
            <p className="mt-4 leading-7 text-neutral-400">Adventure-inspired streetwear made for the ones who keep going.</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 pt-10 md:grid-cols-3">
          <div>
            <h2 className="text-3xl font-black">AVNR</h2>
            <p className="mt-4 max-w-xs text-neutral-400">Built fearless for adventurers willing to move forward.</p>
          </div>
          <div>
            <h3 className="font-black uppercase tracking-widest">Quick Links</h3>
            <div className="mt-4 grid gap-2 text-neutral-400">
              <a href="#home">Home</a>
              <a href="#shop">Shop</a>
              <a href="#story">Story</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div>
            <h3 className="font-black uppercase tracking-widest">Connect</h3>
            <div className="mt-4 flex gap-4 text-neutral-400">
              <span className="text-2xl">◎</span>
              <span className="text-2xl">◆</span>
            </div>
            <p className="mt-4 text-neutral-400">Email: hello@avnr.com</p>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-7xl text-sm text-neutral-500">© 2026 AVNR. All rights reserved.</p>
      </footer>
    </div>
  );
}
