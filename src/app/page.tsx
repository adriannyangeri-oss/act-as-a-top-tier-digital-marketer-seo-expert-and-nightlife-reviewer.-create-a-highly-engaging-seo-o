"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Menu", href: "#menu" },
  { label: "Entertainment", href: "#entertainment" },
  { label: "Reviews", href: "#reviews" },
  { label: "Find Us", href: "#location" },
];

const FEATURES = [
  {
    icon: "🎸",
    title: "Live Mugithi Bands",
    desc: "Every Friday & Saturday — live performances that fill the dancefloor and the soul.",
  },
  {
    icon: "🍖",
    title: "Nyama Choma & Grills",
    desc: "Slow-roasted, perfectly seasoned, served hot. The best nyama choma on Kiambu Road.",
  },
  {
    icon: "📺",
    title: "Sports Screening",
    desc: "Premier League, Champions League, AFCON — every match on massive HD screens.",
  },
  {
    icon: "🍺",
    title: "Full Bar Service",
    desc: "Cold Tuskers, premium spirits, cocktails, and everything in between. Always stocked.",
  },
  {
    icon: "🕐",
    title: "Open 24/7",
    desc: "Day or night, rain or shine — Jowac never sleeps. Show up whenever.",
  },
  {
    icon: "🚗",
    title: "Ample Parking",
    desc: "Spacious, safe, stress-free parking right on-site. Come in your numbers.",
  },
  {
    icon: "🛵",
    title: "Dine-In / Takeaway / Delivery",
    desc: "Eat your way — at the table, on the road, or in your living room.",
  },
  {
    icon: "🎉",
    title: "Private Event Hosting",
    desc: "Birthdays, corporate events, celebrations — we set the stage, you make the memories.",
  },
];

const REVIEWS = [
  {
    name: "Wanjiku M.",
    rating: 5,
    text: "Jowac is my go-to spot every weekend. The mugithi band on Friday nights is unmatched. Great food, great vibes — highly recommend!",
    date: "March 2026",
  },
  {
    name: "Brian K.",
    rating: 5,
    text: "Came for a birthday dinner and stayed until the live band wrapped up at midnight. Fantastic place. The nyama choma is the best in Ndenderu, no debate.",
    date: "February 2026",
  },
  {
    name: "Grace N.",
    rating: 5,
    text: "Affordable, lively, and the parking is a huge plus. We come here almost every Sunday for lunch. Always consistent.",
    date: "January 2026",
  },
  {
    name: "James O.",
    rating: 5,
    text: "The atmosphere here is electric on match days. Big screens, cold beer, good crowd. This is my stadium away from the stadium.",
    date: "March 2026",
  },
  {
    name: "Mercy W.",
    rating: 5,
    text: "We hosted my mom's 60th birthday here. The staff was amazing, food was incredible, and the live band made her cry happy tears. 10/10.",
    date: "February 2026",
  },
];

const MENU_HIGHLIGHTS = [
  { category: "Grills & Choma", items: ["Nyama Choma (Beef & Goat)", "Chicken Quarter / Half / Full", "Pork Ribs", "Mishkaki Skewers"] },
  { category: "Mains", items: ["Ugali & Sukuma Wiki", "Pilau & Biryani", "Githeri Special", "Chips Masala"] },
  { category: "Bar Selection", items: ["Tusker, White Cap, Guinness", "Keg & Draught Beer", "Premium Spirits & Whisky", "Cocktails & Mocktails"] },
  { category: "Starters & Sides", items: ["Mukimo", "Sausages & Smokies", "Samosas & Spring Rolls", "Fries & Wedges"] },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-600"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#f5f0e8] overflow-x-hidden">
      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0d0d0d]/95 backdrop-blur-md shadow-lg shadow-black/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full border-2 border-[#c9a84c] flex items-center justify-center animate-pulse-glow">
              <span className="text-[#c9a84c] font-bold text-lg" style={{ fontFamily: "var(--font-playfair)" }}>
                J
              </span>
            </div>
            <div>
              <div
                className="text-white font-bold text-lg leading-none"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                JOWAC
              </div>
              <div className="text-[#c9a84c] text-[10px] tracking-[0.2em] uppercase font-medium">
                Sports Club
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-[#c9a84c] transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#location"
              className="bg-[#c9a84c] hover:bg-[#f0d080] text-black font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
            >
              Visit Us
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#141414]/98 backdrop-blur-md border-t border-[#c9a84c]/20 px-4 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-[#c9a84c] transition-colors py-2 text-base font-medium border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#location"
              onClick={() => setMenuOpen(false)}
              className="bg-[#c9a84c] text-black font-semibold text-center px-5 py-3 rounded-full mt-2"
            >
              Visit Us
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0d0d0d]">
          {/* Gradient overlay simulating nightlife atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-[#0d0d0d] to-yellow-950/20" />
          {/* Bokeh light effect */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#c9a84c]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-amber-600/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a84c]/5 rounded-full blur-3xl" />
        </div>

        {/* Ticker */}
        <div className="absolute top-0 left-0 right-0 mt-[72px] bg-[#c9a84c]/10 border-b border-[#c9a84c]/20 overflow-hidden py-2.5">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(3)].map((_, idx) => (
              <span key={idx} className="flex items-center gap-8 text-[#c9a84c] text-xs font-medium tracking-widest uppercase mr-8">
                <span>⭐ Open 24/7</span>
                <span>✦</span>
                <span>🎸 Live Mugithi Every Fri & Sat</span>
                <span>✦</span>
                <span>🍖 Best Nyama Choma in Ndenderu</span>
                <span>✦</span>
                <span>📺 All Matches Live</span>
                <span>✦</span>
                <span>🚗 Free Ample Parking</span>
                <span>✦</span>
                <span>🛵 Delivery Available</span>
                <span>✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-24">
          <div
            className="inline-block text-[#c9a84c] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-6 border border-[#c9a84c]/40 px-4 py-1.5 rounded-full animate-fade-in"
            style={{ animationFillMode: "both" }}
          >
            Ndenderu&apos;s #1 Hangout Spot
          </div>

          <h1
            className="text-5xl sm:text-7xl lg:text-8xl font-black mb-4 leading-none animate-fade-in-up"
            style={{ fontFamily: "var(--font-playfair)", animationFillMode: "both" }}
          >
            <span className="gold-text">JOWAC</span>
            <br />
            <span className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide">
              SPORTS CLUB
            </span>
          </h1>

          <p
            className="text-xl sm:text-2xl text-gray-300 font-light mt-6 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200"
            style={{ animationFillMode: "both" }}
          >
            Where Ndenderu comes alive — every single night.
            <br />
            <span className="text-[#c9a84c]">Eat. Vibe. Repeat.</span>
          </p>

          {/* Stats row */}
          <div
            className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in-up delay-300"
            style={{ animationFillMode: "both" }}
          >
            {[
              { val: "24/7", label: "Always Open" },
              { val: "5★", label: "Google Rating" },
              { val: "500+", label: "Happy Guests/Night" },
              { val: "Live", label: "Music Fri & Sat" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl sm:text-4xl font-black gold-text"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {stat.val}
                </div>
                <div className="text-gray-400 text-xs uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400"
            style={{ animationFillMode: "both" }}
          >
            <a
              href="#experience"
              className="bg-[#c9a84c] hover:bg-[#f0d080] text-black font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#c9a84c]/30"
            >
              Discover the Vibe
            </a>
            <a
              href="tel:+254700000000"
              className="border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c]/10 font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105"
            >
              Reserve a Table
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#c9a84c] to-transparent" />
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="section-divider mx-auto max-w-7xl" />

      {/* ── EXPERIENCE SECTION ── */}
      <section id="experience" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase font-semibold">The Jowac Experience</span>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mt-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            More Than a Bar.
            <br />
            <span className="gold-text">It&apos;s a Lifestyle.</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Step through the gates and feel the energy shift. String lights, the buzz of good conversation,
            cold drinks sweating on the table — Jowac blends the relaxed charm of a local pub with the
            energy of a full-scale entertainment venue.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              emoji: "🌃",
              title: "The Vibe",
              color: "from-amber-900/30",
              desc: "Warm lighting, great company, and an atmosphere that makes every night feel special. Casual enough for a Tuesday, electric enough for a Friday.",
            },
            {
              emoji: "🎵",
              title: "The Music",
              color: "from-yellow-900/30",
              desc: "Live mugithi takes the stage Friday & Saturday. From classic Kikuyu benga to modern fusion — the music hits your chest and moves your feet whether you like it or not.",
            },
            {
              emoji: "👥",
              title: "The Crowd",
              color: "from-orange-900/30",
              desc: "Young professionals, families, birthday crews, couples, regulars who've claimed their corner. At Jowac, everyone belongs. No dress code drama, just good energy.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`glass-card rounded-2xl p-8 bg-gradient-to-b ${card.color} to-transparent hover:border-[#c9a84c]/40 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-5xl mb-4">{card.emoji}</div>
              <h3
                className="text-2xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {card.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="section-divider mx-auto max-w-7xl" />

      {/* ── ENTERTAINMENT SECTION ── */}
      <section id="entertainment" className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase font-semibold">Live Entertainment</span>
            <h2
              className="text-4xl sm:text-5xl font-black text-white mt-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Friday Nights Hit
              <span className="gold-text"> Different.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Schedule */}
            <div className="space-y-4">
              {[
                { day: "Monday – Thursday", event: "Sports Night", detail: "All Premier League & local matches on HD screens", icon: "📺" },
                { day: "Friday", event: "Live Band Night", detail: "Full live mugithi band from 7PM till midnight", icon: "🎸" },
                { day: "Saturday", event: "Party Night", detail: "Live performances + DJ sets + themed nights", icon: "🎉" },
                { day: "Sunday", event: "Family Day", detail: "Relaxed lunch vibe — families, couples, and friends", icon: "☀️" },
              ].map((schedule) => (
                <div
                  key={schedule.day}
                  className="glass-card rounded-xl p-5 flex items-start gap-4 hover:border-[#c9a84c]/40 transition-all duration-300 group"
                >
                  <div className="text-3xl mt-1">{schedule.icon}</div>
                  <div>
                    <div className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-1">
                      {schedule.day}
                    </div>
                    <div className="text-white font-bold text-lg group-hover:text-[#c9a84c] transition-colors">
                      {schedule.event}
                    </div>
                    <div className="text-gray-400 text-sm mt-1">{schedule.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="glass-card rounded-3xl p-10 text-center bg-gradient-to-br from-amber-900/20 to-yellow-900/10">
                <div className="text-8xl mb-6 animate-float">🎸</div>
                <h3
                  className="text-3xl font-black text-white mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Live Mugithi
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Nairobi&apos;s most authentic mugithi experience. Real bands, real energy, real culture.
                  Every Friday & Saturday night from <span className="text-[#c9a84c] font-semibold">7PM</span>.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Kikuyu Benga", "Modern Fusion", "Taarab", "Rhumba", "Gospel"].map((genre) => (
                    <span
                      key={genre}
                      className="border border-[#c9a84c]/40 text-[#c9a84c] text-xs px-3 py-1.5 rounded-full"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES / KEY OFFERINGS ── */}
      <section id="menu" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase font-semibold">Everything You Need</span>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mt-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Why Jowac is
            <span className="gold-text"> The One.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="glass-card rounded-2xl p-6 hover:border-[#c9a84c]/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#c9a84c] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Menu Highlights */}
        <div className="section-divider mb-16" />
        <div className="text-center mb-12">
          <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase font-semibold">Food & Drinks</span>
          <h2
            className="text-3xl sm:text-4xl font-black text-white mt-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Menu Highlights
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENU_HIGHLIGHTS.map((section) => (
            <div key={section.category} className="glass-card rounded-2xl p-6">
              <h3 className="text-[#c9a84c] font-bold text-sm uppercase tracking-widest mb-4 border-b border-[#c9a84c]/20 pb-3">
                {section.category}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-[#c9a84c] mt-0.5">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase font-semibold">What People Say</span>
            <h2
              className="text-4xl sm:text-5xl font-black text-white mt-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Don&apos;t Just Take
              <span className="gold-text"> Our Word.</span>
            </h2>
            {/* Overall Rating */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <span className="text-white font-bold text-2xl">5.0</span>
              <span className="text-gray-400 text-sm">/ 200+ Google Reviews</span>
            </div>
          </div>

          {/* Featured Review (Auto-rotating) */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="glass-card rounded-3xl p-8 sm:p-10 text-center bg-gradient-to-b from-amber-900/15 to-transparent border-[#c9a84c]/25 transition-all duration-500">
              <div className="text-5xl mb-4">&quot;</div>
              <p className="text-xl text-gray-200 leading-relaxed mb-6 italic">
                {REVIEWS[activeReview].text}
              </p>
              <StarRating rating={REVIEWS[activeReview].rating} />
              <div className="mt-4">
                <div className="text-[#c9a84c] font-semibold">{REVIEWS[activeReview].name}</div>
                <div className="text-gray-500 text-sm">{REVIEWS[activeReview].date} · Google Review</div>
              </div>
              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveReview(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === activeReview ? "bg-[#c9a84c] w-6" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Review Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVIEWS.slice(0, 3).map((review) => (
              <div key={review.name} className="glass-card rounded-2xl p-6 hover:border-[#c9a84c]/40 transition-all duration-300">
                <StarRating rating={review.rating} />
                <p className="text-gray-300 text-sm mt-3 mb-4 leading-relaxed line-clamp-4 italic">
                  &quot;{review.text}&quot;
                </p>
                <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                  <div className="w-8 h-8 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] font-bold text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{review.name}</div>
                    <div className="text-gray-500 text-xs">{review.date}</div>
                  </div>
                  <span className="ml-auto text-xs text-gray-600 border border-gray-700 px-2 py-1 rounded-full">
                    Google
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Review CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Visited us? We&apos;d love to hear about it!</p>
            <a
              href="https://www.google.com/maps/place/Jowac+Sports+Club/@-1.193646,36.7436921,17z/data=!4m18!1m9!3m8!1s0x182f22fade3d9653:0xd5b89ab3d718dd4a!2sJowac+Sports+Club!8m2!3d-1.193646!4d36.7484557!9m1!1b1!16s%2Fg%2F11cny1nb0t!3m7!1s0x182f22fade3d9653:0xd5b89ab3d718dd4a!8m2!3d-1.193646!4d36.7484557!9m1!1b1!16s%2Fg%2F11cny1nb0t?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c]/10 font-semibold px-6 py-3 rounded-full text-sm transition-all duration-300"
            >
              ⭐ Leave a Google Review
            </a>
          </div>
        </div>
      </section>

      {/* ── IDEAL FOR ── */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase font-semibold">Who It&apos;s For</span>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mt-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Jowac is Perfect For
            <span className="gold-text"> Everyone.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { icon: "💑", label: "Date Nights" },
            { icon: "🍻", label: "After-Work Drinks" },
            { icon: "👨‍👩‍👧", label: "Family Sundays" },
            { icon: "⚽", label: "Football Nights" },
            { icon: "🎂", label: "Birthday Parties" },
            { icon: "🎵", label: "Mugithi Lovers" },
          ].map((item) => (
            <div
              key={item.label}
              className="glass-card rounded-2xl p-5 text-center hover:border-[#c9a84c]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="text-gray-300 text-sm font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-gradient-to-r from-amber-900/30 via-yellow-900/20 to-amber-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0d0d0d]/60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#c9a84c]/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-5xl sm:text-6xl mb-6 animate-float">🎸</div>
          <h2
            className="text-4xl sm:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Tonight Is
            <span className="gold-text"> Your Night.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Your table, your cold drink, and a live band that doesn&apos;t take breaks — it&apos;s all waiting for you at Jowac Sports Club.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+254700000000"
              className="bg-[#c9a84c] hover:bg-[#f0d080] text-black font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#c9a84c]/30 animate-pulse-glow"
            >
              Call to Reserve Now
            </a>
            <a
              href="#location"
              className="border-2 border-white/30 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section id="location" className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase font-semibold">Find Us</span>
            <h2
              className="text-4xl sm:text-5xl font-black text-white mt-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              We&apos;re in
              <span className="gold-text"> Ndenderu.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Info Cards */}
            <div className="space-y-5">
              {[
                {
                  icon: "📍",
                  title: "Location",
                  content: "Jowac Sports Club, Ndenderu, Kiambu Road, Nairobi",
                  sub: "Along Kiambu Road — easy to find, easy to reach",
                },
                {
                  icon: "🕐",
                  title: "Opening Hours",
                  content: "Open 24 Hours / 7 Days a Week",
                  sub: "We never close — come whenever you feel like it",
                },
                {
                  icon: "📞",
                  title: "Reservations & Inquiries",
                  content: "+254 712 488 475",
                  sub: "Call or WhatsApp to book your table or event",
                },
                {
                  icon: "🛵",
                  title: "Delivery & Takeaway",
                  content: "Available Daily",
                  sub: "Order via phone or walk in for takeaway",
                },
              ].map((info) => (
                <div
                  key={info.title}
                  className="glass-card rounded-2xl p-6 flex gap-5 hover:border-[#c9a84c]/40 transition-all duration-300"
                >
                  <div className="text-3xl mt-1 flex-shrink-0">{info.icon}</div>
                  <div>
                    <div className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-1">
                      {info.title}
                    </div>
                    <div className="text-white font-semibold text-lg">{info.content}</div>
                    <div className="text-gray-500 text-sm mt-1">{info.sub}</div>
                  </div>
                </div>
              ))}

              {/* Google Maps Button */}
              <a
                href="https://www.google.com/maps/place/Jowac+Sports+Club/@-1.193646,36.7436921,17z/data=!4m16!1m9!3m8!1s0x182f22fade3d9653:0xd5b89ab3d718dd4a!2sJowac+Sports+Club!8m2!3d-1.193646!4d36.7484557!9m1!1b1!16s%2Fg%2F11cny1nb0t!3m5!1s0x182f22fade3d9653:0xd5b89ab3d718dd4a!8m2!3d-1.193646!4d36.7484557!16s%2Fg%2F11cny1nb0t?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#c9a84c] hover:bg-[#f0d080] text-black font-bold px-6 py-4 rounded-2xl text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#c9a84c]/30"
              >
                <span className="text-xl">📍</span>
                Open in Google Maps
              </a>

              {/* Social Links */}
              <div className="glass-card rounded-2xl p-6">
                <div className="text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-4">
                  Follow Us
                </div>
                <div className="flex gap-4">
                  {[
                    { label: "Instagram", handle: "@JowacSportsClub", icon: "📸", href: "https://www.instagram.com/JowacSportsClub" },
                    { label: "Facebook", handle: "Jowac Sports Club", icon: "👍", href: "#" },
                    { label: "WhatsApp", handle: "+254 700 000 000", icon: "💬", href: "https://wa.me/254700000000" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-white/10 hover:border-[#c9a84c]/40 rounded-xl p-3 text-center transition-all duration-300 cursor-pointer group"
                    >
                      <div className="text-2xl mb-1">{social.icon}</div>
                      <div className="text-white text-xs font-semibold group-hover:text-[#c9a84c] transition-colors">
                        {social.label}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="glass-card rounded-3xl overflow-hidden h-[500px] border border-[#c9a84c]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6516946037374!2d36.87000!3d-1.18500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTEnMDYuMCJTIDM2wrA1MicxMi4wIkU!5e0!3m2!1sen!2ske!4v1680000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jowac Sports Club Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0a0a0a] border-t border-[#c9a84c]/15 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full border-2 border-[#c9a84c] flex items-center justify-center">
                  <span className="text-[#c9a84c] font-bold text-lg" style={{ fontFamily: "var(--font-playfair)" }}>
                    J
                  </span>
                </div>
                <div>
                  <div className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-playfair)" }}>
                    JOWAC
                  </div>
                  <div className="text-[#c9a84c] text-[10px] tracking-[0.2em] uppercase">Sports Club</div>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ndenderu&apos;s most loved hangout spot. Where locals unwind, friends reconnect, and every night has something special.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-500 hover:text-[#c9a84c] text-sm transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>Mon – Thu</span>
                  <span className="text-gray-400">Always Open</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Friday</span>
                  <span className="text-[#c9a84c]">Live Band 7PM</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Saturday</span>
                  <span className="text-[#c9a84c]">Party Night 7PM</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Sunday</span>
                  <span className="text-gray-400">Family Day</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="text-[#c9a84c] font-semibold text-xs uppercase tracking-widest">
                    ⏰ Open 24/7 — 365 Days
                  </span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h4>
              <div className="space-y-3 text-sm text-gray-500">
                <div>📍 Ndenderu, Kiambu Road, Nairobi</div>
                <div>
                  <a href="tel:+254700000000" className="hover:text-[#c9a84c] transition-colors">
                    📞 +254 700 000 000
                  </a>
                </div>
                <div>📸 @JowacSportsClub</div>
                <div>💬 WhatsApp Us Anytime</div>
              </div>
            </div>
          </div>

          <div className="section-divider mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <div>© 2026 Jowac Sports Club. All rights reserved.</div>
            <div className="flex gap-2 flex-wrap justify-center">
              {["best bar Ndenderu", "live mugithi Nairobi", "sports bar Kiambu Road"].map((tag) => (
                <span key={tag} className="border border-gray-800 px-3 py-1 rounded-full text-xs hover:border-[#c9a84c]/30 hover:text-gray-400 transition-colors cursor-default">
                  #{tag.replace(/ /g, "")}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
