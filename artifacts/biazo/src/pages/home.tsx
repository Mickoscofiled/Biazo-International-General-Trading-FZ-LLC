import { useState, useEffect } from "react";
import heroImg from "@/assets/images/hero.png";
import dubaiImg from "@/assets/images/dubai-office.png";
import miningImg from "@/assets/images/mining.png";
import steelImg from "@/assets/images/steel-pipes.png";

const markets = ["Construction", "Mining", "Oil & Gas", "Healthcare & Pharma", "Government", "Agriculture"];

const products = [
  { icon: "🔩", title: "Automotive & Heavy Equipment", desc: "Heavy mining equipment, construction machines, engines, tyres, spare parts" },
  { icon: "🛢️", title: "Lubricants & Compounds", desc: "Grease, lubricants, compounds" },
  { icon: "⚡", title: "Welding Machines & Consumables", desc: "MIG, TIG, Stick, Flux-cored welding machines, electrodes, filler wire, shielding gas, cutting torches, PPE" },
  { icon: "💻", title: "IT Equipment & Cables", desc: "Laptops & accessories, printers & cartridges, Ethernet cables, UPS systems, electric & mining cables" },
  { icon: "🔌", title: "Electrical Products", desc: "Contactors, overload relays, switches & automation, plugs & sockets, lighting & accessories" },
  { icon: "🦺", title: "Safety Solutions", desc: "Mining safety gear, geological equipment, workwear" },
  { icon: "🔨", title: "Hand & Power Tools", desc: "Hand tools, precision tools, power tools & accessories, garden tools" },
  { icon: "🪤", title: "Pipes & Fittings", desc: "GI pipes, PPRC pipes, elbows, tees, reducers, couplings, unions, caps, flanges" },
  { icon: "🏗️", title: "Steel & Metal", desc: "Mild steel plates (HR/CR), stainless steel, galvanized steel, chequered plates, RHS, structural sections, wear plates" },
  { icon: "🧪", title: "Industrial & Lab Chemicals", desc: "Water treatment chemicals, buffer solutions, lab chemicals, solvents & adhesives, oxidizers & reducing agents" },
];

const catalogueHighlights = [
  { cat: "Stationery & Labelling", items: "Flagging tapes, alutags, Rite in the Rain field books, paint markers, inclinometers" },
  { cat: "Sample Storage", items: "Calico bags, bulk bags, geochem envelopes, forensic bags, zipper bags" },
  { cat: "Core & More", items: "Core splitters, steel & plastic trays, Estwing picks, sieves, XRF spectrometers" },
  { cat: "Exploration & Navigation", items: "Garmin GPS units, Brunton compasses & transits, Jacob's staff, Maglite torches" },
  { cat: "Gold Mining Accessories", items: "Gold shaker tables, furnaces, metal detectors, sluice boxes, panning kits, chain mill crushers" },
];

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  background: "#0f172a",
  border: "1px solid #334155",
  color: "#fff",
  fontSize: 15,
  fontFamily: "inherit",
  outline: "none",
  boxSizing: "border-box" as const,
};

const labelStyle = {
  display: "block",
  color: "#94a3b8",
  fontSize: 13,
  fontWeight: 600,
  marginBottom: 8,
  textTransform: "uppercase" as const,
  letterSpacing: 1,
};

export default function Home() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (k: string, v: string) => {
    setForm(f => ({ ...f, [k]: v }));
    setErrors(e => ({ ...e, [k]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const body = [
      `Name: ${form.name}`,
      form.company ? `Company: ${form.company}` : "",
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : "",
      ``,
      `Message:`,
      form.message,
    ].filter(Boolean).join("\n");
    const subject = form.subject || `Inquiry from ${form.name}`;
    window.location.href = `mailto:sales@biazointernational.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#0f172a", background: "#fff" }}>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 22, fontWeight: 700, letterSpacing: "-0.5px" }}>
            BIAZO <span style={{ color: "#f59e0b" }}>INTL.</span>
          </div>
          <div style={{ display: "flex", gap: 32, fontSize: 14, fontWeight: 500 }}>
            <a href="#about" style={{ color: "#0f172a", textDecoration: "none" }}>About</a>
            <a href="#markets" style={{ color: "#0f172a", textDecoration: "none" }}>Markets</a>
            <a href="#products" style={{ color: "#0f172a", textDecoration: "none" }}>Products</a>
            <a href="/catalogue" style={{ color: "#0f172a", textDecoration: "none" }}>Catalogue</a>
            <a href="#contact" style={{ color: "#0f172a", textDecoration: "none" }}>Contact</a>
          </div>
          <a href="mailto:sales@biazointernational.com" style={{ background: "#f59e0b", color: "#0f172a", fontWeight: 700, fontSize: 14, padding: "10px 24px", textDecoration: "none", display: "inline-block" }}>
            Get a Quote
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", height: "92vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(15,23,42,0.65)", zIndex: 1 }} />
          <img src={heroImg} alt="Industrial port" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%", paddingTop: 72 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", border: "1px solid rgba(245,158,11,0.3)", background: "rgba(245,158,11,0.08)", color: "#fbbf24", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 28 }}>
            🌍 Global Trading Powerhouse
          </div>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(42px, 7vw, 80px)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: 24, maxWidth: 800 }}>
            Precision Meets <span style={{ color: "#f59e0b" }}>Power.</span>
          </h1>
          <p style={{ fontSize: 20, color: "#cbd5e1", marginBottom: 40, maxWidth: 580, lineHeight: 1.6, fontWeight: 300 }}>
            Certified UAE-based procurement and supply chain leaders delivering industrial, construction, and healthcare equipment across East Africa.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#products" style={{ background: "#f59e0b", color: "#0f172a", fontWeight: 700, fontSize: 16, padding: "16px 36px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              Explore Our Solutions →
            </a>
            <a href="/catalogue" style={{ background: "transparent", color: "#fff", fontWeight: 600, fontSize: 16, padding: "16px 36px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>
              View Catalogue
            </a>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <div style={{ background: "#0f172a", borderTop: "1px solid #1e293b", borderBottom: "1px solid #1e293b" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {[
              { num: "16+", label: "Years in Business", sub: "Founded in Uganda, 2008" },
              { num: "100+", label: "Products Catalogued", sub: "Geological equipment range" },
              { num: "6", label: "Key Markets", sub: "Construction to healthcare" },
              { num: "2", label: "Countries", sub: "UAE & Uganda hubs" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "36px 32px", textAlign: "center", borderRight: i < 3 ? "1px solid #1e293b" : "none" }}>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 44, fontWeight: 700, color: "#f59e0b", lineHeight: 1 }}>{s.num}</div>
                <div style={{ color: "#fff", fontWeight: 600, fontSize: 15, marginTop: 8 }}>{s.label}</div>
                <div style={{ color: "#475569", fontSize: 12, marginTop: 4 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginBottom: 24, lineHeight: 1.2 }}>
              Bridging worlds with rugged field operations & professional procurement.
            </h2>
            <p style={{ color: "#475569", fontSize: 17, marginBottom: 20, lineHeight: 1.7 }}>
              Established in September 2022 as a sister company to Biazo International Company Limited in Uganda (founded 2008), we provide professional representation services for companies in the UAE and neighboring countries.
            </p>
            <p style={{ color: "#475569", fontSize: 17, marginBottom: 40, lineHeight: 1.7 }}>
              With over a decade of consistent value delivery through procurement and supply chain management across East Africa, we operate dual hubs in the UAE and Uganda.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
              <div style={{ borderLeft: "3px solid #f59e0b", paddingLeft: 16 }}>
                <div style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Our Mission</div>
                <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.6 }}>To serve, support, and collaborate with our clients to deliver timely services with commitment, integrity, and professionalism.</p>
              </div>
              <div style={{ borderLeft: "3px solid #0f172a", paddingLeft: 16 }}>
                <div style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Our Vision</div>
                <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.6 }}>To be a leading, trusted partner that delivers outstanding, timely services and creates significant value.</p>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", height: 560 }}>
            <img src={dubaiImg} alt="Dubai Operations" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
            <div style={{ position: "absolute", bottom: -24, left: -24, background: "#0f172a", color: "#fff", padding: 32 }}>
              <div style={{ color: "#f59e0b", fontFamily: "Georgia, serif", fontSize: 48, fontWeight: 700, lineHeight: 1 }}>2008</div>
              <div style={{ fontWeight: 600, fontSize: 16, textTransform: "uppercase", letterSpacing: 1, marginTop: 8 }}>Roots in Uganda</div>
              <div style={{ color: "#94a3b8", fontSize: 14, marginTop: 8 }}>Expanding global footprint from the UAE to East Africa.</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKETS */}
      <section id="markets" style={{ padding: "100px 24px", background: "#0f172a", color: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 64px" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginBottom: 16 }}>Key Markets Served</h2>
            <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.6 }}>We supply a wide range of essential products to diverse sectors, driving progress and efficiency across continents.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid #1e293b" }}>
            {markets.map((m, i) => (
              <div key={i} style={{ padding: "48px 32px", textAlign: "center", borderRight: i % 3 !== 2 ? "1px solid #1e293b" : "none", borderBottom: i < 3 ? "1px solid #1e293b" : "none", fontSize: 22, fontFamily: "Georgia, serif", fontWeight: 500 }}>
                {m}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" style={{ padding: "100px 24px", background: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "33%", height: "100%", opacity: 0.04, pointerEvents: "none" }}>
          <img src={steelImg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div style={{ marginBottom: 64, maxWidth: 600 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginBottom: 16 }}>Comprehensive Solutions.</h2>
            <p style={{ color: "#475569", fontSize: 17, lineHeight: 1.6 }}>From heavy mining equipment to precision laboratory chemicals, our vast procurement network ensures you get exactly what you need, when you need it.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {products.map((p, i) => (
              <div key={i} style={{ border: "1px solid #e2e8f0", padding: 32, background: "#fff" }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{p.icon}</div>
                <div style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{p.title}</div>
                <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOGUE CTA */}
      <section style={{ padding: "100px 24px", background: "#0f172a", color: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", border: "1px solid rgba(245,158,11,0.3)", background: "rgba(245,158,11,0.08)", color: "#fbbf24", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 28 }}>
                📖 Geological Catalogue 2026/27
              </div>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, marginBottom: 20, lineHeight: 1.2 }}>
                Explore Our Full Range of Geological Equipment
              </h2>
              <p style={{ color: "#94a3b8", fontSize: 17, marginBottom: 40, lineHeight: 1.7 }}>
                Browse over 100 specialist products across five categories — from Brunton compasses and Garmin GPS units to gold shaker tables, core splitters, and Rite in the Rain field books.
              </p>
              <a href="/catalogue" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#f59e0b", color: "#0f172a", fontWeight: 700, fontSize: 16, padding: "16px 36px", textDecoration: "none" }}>
                Browse the Full Catalogue →
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {catalogueHighlights.map((c, i) => (
                <div key={i} style={{ background: "#1e293b", border: "1px solid #334155", padding: "20px 24px" }}>
                  <div style={{ color: "#f59e0b", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>{c.cat}</div>
                  <div style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.5 }}>{c.items}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section style={{ height: "55vh", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,23,42,0.45)", zIndex: 1 }} />
        <img src={miningImg} alt="Mining operations" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", color: "#fff", padding: "0 24px" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 700, marginBottom: 16 }}>Uncompromising Quality.</h2>
            <p style={{ fontSize: 20, color: "#cbd5e1", fontWeight: 300, maxWidth: 560, margin: "0 auto" }}>Global leader in providing innovative and comprehensive solutions.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 24px", background: "#0f172a", color: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>

          {/* Left — info */}
          <div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>
              Let's Build the Future Together.
            </h2>
            <p style={{ color: "#94a3b8", fontSize: 17, marginBottom: 48, lineHeight: 1.6 }}>
              Fill in the form and your email client will open with everything pre-filled — ready to send in one click.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 48 }}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ color: "#f59e0b", fontSize: 22, marginTop: 2 }}>✉</div>
                <div>
                  <div style={{ color: "#f59e0b", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 4 }}>Email</div>
                  <a href="mailto:sales@biazointernational.com" style={{ color: "#e2e8f0", fontSize: 15, textDecoration: "none" }}>sales@biazointernational.com</a>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ color: "#f59e0b", fontSize: 22, marginTop: 2 }}>📞</div>
                <div>
                  <div style={{ color: "#f59e0b", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 4 }}>Phone</div>
                  <a href="tel:+971524860664" style={{ color: "#e2e8f0", fontSize: 15, textDecoration: "none", display: "block" }}>+971 52 486 0664</a>
                  <a href="tel:+971568878801" style={{ color: "#94a3b8", fontSize: 14, textDecoration: "none", display: "block", marginTop: 2 }}>+971 56 887 8801</a>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ color: "#f59e0b", fontSize: 22, marginTop: 2 }}>📍</div>
                <div>
                  <div style={{ color: "#f59e0b", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 4 }}>Ras Al Khaimah, UAE</div>
                  <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.6, margin: 0 }}>RAKEZ Business Zone-FZ B4209b10<br />Business Center 04</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ color: "#f59e0b", fontSize: 22, marginTop: 2 }}>📍</div>
                <div>
                  <div style={{ color: "#f59e0b", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 4 }}>Dubai, UAE</div>
                  <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.6, margin: 0 }}>Abraj Shopping Center, 903<br />Sabka Rd, Deira</p>
                </div>
              </div>
            </div>

            <a href="http://www.biazointernational.com" target="_blank" rel="noopener noreferrer" style={{ color: "#64748b", fontSize: 14, textDecoration: "none" }}>
              🌐 www.biazointernational.com
            </a>
          </div>

          {/* Right — form */}
          <div style={{ background: "#1e293b", padding: 48, border: "1px solid #334155" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Email client opened!</h3>
                <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.6, marginBottom: 32 }}>
                  Your message is pre-filled and ready to send. Just hit Send in your email app.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", company: "", email: "", phone: "", subject: "", message: "" }); }}
                  style={{ background: "#f59e0b", color: "#0f172a", fontWeight: 700, fontSize: 15, padding: "12px 28px", border: "none", cursor: "pointer", fontFamily: "inherit" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Send an Inquiry</h3>

                {/* Row 1: Name + Company */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={e => set("name", e.target.value)}
                      style={{ ...inputStyle, borderColor: errors.name ? "#ef4444" : "#334155" }}
                    />
                    {errors.name && <div style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>{errors.name}</div>}
                  </div>
                  <div>
                    <label style={labelStyle}>Company</label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={form.company}
                      onChange={e => set("company", e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 2: Email + Phone */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={e => set("email", e.target.value)}
                      style={{ ...inputStyle, borderColor: errors.email ? "#ef4444" : "#334155" }}
                    />
                    {errors.email && <div style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>{errors.email}</div>}
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input
                      type="tel"
                      placeholder="+1 234 567 8900"
                      value={form.phone}
                      onChange={e => set("phone", e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div style={{ marginBottom: 20 }}>
                  <label style={labelStyle}>Subject</label>
                  <input
                    type="text"
                    placeholder="Quote request for mining equipment"
                    value={form.subject}
                    onChange={e => set("subject", e.target.value)}
                    style={inputStyle}
                  />
                </div>

                {/* Message */}
                <div style={{ marginBottom: 28 }}>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    rows={5}
                    placeholder="Describe what you're looking for — product names, quantities, delivery location, timeline…"
                    value={form.message}
                    onChange={e => set("message", e.target.value)}
                    style={{ ...inputStyle, resize: "vertical", borderColor: errors.message ? "#ef4444" : "#334155" }}
                  />
                  {errors.message && <div style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>{errors.message}</div>}
                </div>

                <button
                  type="submit"
                  style={{ width: "100%", background: "#f59e0b", color: "#0f172a", fontWeight: 700, fontSize: 17, padding: "18px 0", border: "none", cursor: "pointer", fontFamily: "inherit", letterSpacing: 0.5 }}
                >
                  Send Inquiry →
                </button>
                <p style={{ color: "#475569", fontSize: 12, marginTop: 12, textAlign: "center" }}>
                  Submitting opens your email client with this message pre-filled.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#020617", padding: "32px 24px", borderTop: "1px solid #1e293b" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: "#fff" }}>
            BIAZO <span style={{ color: "#f59e0b" }}>INTL.</span>
          </div>
          <p style={{ color: "#475569", fontSize: 13 }}>© {new Date().getFullYear()} Biazo International General Trading FZ-LLC. All rights reserved.</p>
          <a href="http://www.biazointernational.com" style={{ color: "#475569", fontSize: 13, textDecoration: "none" }}>www.biazointernational.com</a>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/971524860664?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20services."
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        style={{
          position: "fixed", bottom: 32, right: 32, zIndex: 200,
          width: 60, height: 60,
          background: "#25D366", borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
          textDecoration: "none",
          transition: "transform 0.2s",
        }}
      >
        <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.492.664 4.83 1.82 6.852L2 30l7.352-1.793A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 01-5.83-1.594l-.418-.248-4.36 1.063 1.094-4.24-.273-.435A11.462 11.462 0 014.5 16C4.5 9.596 9.596 4.5 16 4.5S27.5 9.596 27.5 16 22.404 27.5 16 27.5zm6.29-8.512c-.344-.172-2.035-1.004-2.35-1.117-.316-.113-.547-.172-.777.172-.23.344-.892 1.117-1.094 1.348-.2.23-.402.258-.746.086-.344-.172-1.453-.536-2.766-1.707-1.023-.914-1.714-2.043-1.914-2.387-.2-.344-.021-.531.15-.703.155-.154.344-.402.516-.602.172-.2.23-.344.344-.574.115-.23.058-.43-.029-.602-.086-.172-.777-1.875-1.066-2.566-.28-.672-.564-.58-.777-.59-.2-.01-.43-.012-.66-.012s-.602.086-.918.43c-.316.344-1.207 1.18-1.207 2.875s1.236 3.334 1.408 3.564c.172.23 2.434 3.717 5.896 5.211.824.355 1.467.568 1.969.727.827.263 1.58.226 2.175.137.664-.1 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.085-.143-.314-.23-.658-.402z"/>
        </svg>
      </a>

      {/* BACK TO TOP */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          title="Back to top"
          style={{
            position: "fixed", bottom: 104, right: 32, zIndex: 200,
            width: 44, height: 44,
            background: "#0f172a", border: "1px solid #334155", borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "#fff", fontSize: 18,
            boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
          }}
        >
          ↑
        </button>
      )}

    </div>
  );
}
