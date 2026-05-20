import { useState, useEffect } from "react";
import heroImg from "@/assets/images/hero.png";
import dubaiImg from "@/assets/images/dubai-office.png";
import miningImg from "@/assets/images/mining.png";
import steelImg from "@/assets/images/steel-pipes.png";

const PF = "'Playfair Display', Georgia, serif";
const IN = "'Inter', -apple-system, sans-serif";
const AMBER = "#f59e0b";
const NAVY = "#0a0f1e";
const NAVY2 = "#0f172a";
const SLATE = "#1e293b";

const products = [
  { icon: "⚙️", title: "Automotive & Heavy Equipment", desc: "Mining & construction machines, engines, tyres, spare parts" },
  { icon: "🛢️", title: "Lubricants & Compounds", desc: "Industrial greases, lubricants, and specialty compounds" },
  { icon: "⚡", title: "Welding & Consumables", desc: "MIG, TIG, Stick welding machines, electrodes, cutting torches, PPE" },
  { icon: "💻", title: "IT Equipment & Cables", desc: "Laptops, printers, Ethernet cables, UPS systems, mining cables" },
  { icon: "🔌", title: "Electrical Products", desc: "Contactors, overload relays, automation, lighting & accessories" },
  { icon: "🦺", title: "Safety Solutions", desc: "Mining safety gear, geological equipment, workwear" },
  { icon: "🔧", title: "Hand & Power Tools", desc: "Precision tools, power tools & accessories, garden tools" },
  { icon: "🔩", title: "Pipes & Fittings", desc: "GI pipes, PPRC pipes, elbows, tees, reducers, couplings" },
  { icon: "🏗️", title: "Steel & Metal", desc: "Mild steel (HR/CR), stainless, galvanized, structural sections, wear plates" },
  { icon: "🧪", title: "Industrial & Lab Chemicals", desc: "Water treatment chemicals, lab chemicals, solvents & adhesives" },
];

const markets = [
  { num: "01", name: "Construction" },
  { num: "02", name: "Mining" },
  { num: "03", name: "Oil & Gas" },
  { num: "04", name: "Healthcare & Pharma" },
  { num: "05", name: "Government" },
  { num: "06", name: "Agriculture" },
];

const catHighlights = [
  { cat: "Stationery & Labelling", items: "Flagging tapes, Alutags, Rite in the Rain field books, paint markers" },
  { cat: "Sample Storage", items: "Calico bags, geochem envelopes, forensic bags, zipper bags" },
  { cat: "Core & More", desc: "Core splitters, steel & plastic trays, Estwing picks, sieves, XRF spectrometers" },
  { cat: "Exploration & Navigation", items: "Garmin GPS, Brunton compasses & transits, Jacob's staff, Maglite torches" },
  { cat: "Gold Mining Accessories", items: "Gold shaker tables, furnaces, metal detectors, sluice boxes, panning kits" },
];

const inputCls: React.CSSProperties = {
  width: "100%", padding: "12px 16px", background: NAVY,
  border: "1px solid #334155", color: "#fff", fontSize: 15,
  fontFamily: IN, outline: "none", boxSizing: "border-box",
};
const labelCls: React.CSSProperties = {
  display: "block", color: "#94a3b8", fontSize: 12, fontWeight: 600,
  marginBottom: 8, textTransform: "uppercase", letterSpacing: 1.2,
};

export default function Home() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

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
    const body = [`Name: ${form.name}`, form.company ? `Company: ${form.company}` : "", `Email: ${form.email}`, form.phone ? `Phone: ${form.phone}` : "", "", "Message:", form.message].filter(Boolean).join("\n");
    window.location.href = `mailto:sales@biazointernational.com?subject=${encodeURIComponent(form.subject || `Inquiry from ${form.name}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div style={{ fontFamily: IN, color: NAVY2, background: "#fff" }}>

      {/* TOP BAR */}
      <div style={{ background: NAVY, borderBottom: "1px solid #1e293b", padding: "8px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#475569", fontSize: 12, letterSpacing: 0.5 }}>
            🌍 UAE — Uganda &nbsp;|&nbsp; RAKEZ Business Zone, Ras Al Khaimah
          </span>
          <div style={{ display: "flex", gap: 24, fontSize: 12 }}>
            <a href="tel:+971524860664" className="bz-nav-link" style={{ color: "#94a3b8", textDecoration: "none" }}>+971 52 486 0664</a>
            <a href="mailto:sales@biazointernational.com" className="bz-nav-link" style={{ color: "#94a3b8", textDecoration: "none" }}>sales@biazointernational.com</a>
          </div>
        </div>
      </div>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontFamily: PF, fontSize: 21, fontWeight: 700, letterSpacing: "-0.3px", lineHeight: 1 }}>
            BIAZO <span style={{ color: AMBER }}>INTL.</span>
          </div>
          <div style={{ display: "flex", gap: 32, fontSize: 13, fontWeight: 500, letterSpacing: 0.3 }}>
            {[["#about","About"],["#markets","Markets"],["#products","Products"],["/catalogue","Catalogue"],["#contact","Contact"]].map(([href, label]) => (
              <a key={label} href={href} className="bz-nav-link" style={{ color: NAVY2, textDecoration: "none", padding: "4px 0" }}>{label}</a>
            ))}
          </div>
          <a href="mailto:sales@biazointernational.com" className="bz-btn" style={{ background: AMBER, color: NAVY2, fontWeight: 700, fontSize: 13, padding: "10px 22px", textDecoration: "none", letterSpacing: 0.5 }}>
            Get a Quote
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", height: "90vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(10,15,30,0.88) 40%, rgba(10,15,30,0.5) 100%)", zIndex: 1 }} />
          <img src={heroImg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
        </div>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <div style={{ maxWidth: 720 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
              <div style={{ width: 32, height: 1, background: AMBER }} />
              <span style={{ color: AMBER, fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Global Trading Powerhouse</span>
            </div>
            <h1 style={{ fontFamily: PF, fontSize: "clamp(44px, 6.5vw, 82px)", fontWeight: 700, color: "#fff", lineHeight: 1.08, marginBottom: 28, letterSpacing: "-1px" }}>
              Precision<br />Meets <span style={{ color: AMBER, fontStyle: "italic" }}>Power.</span>
            </h1>
            <p style={{ fontSize: 18, color: "#94a3b8", marginBottom: 48, maxWidth: 520, lineHeight: 1.75, fontWeight: 300, letterSpacing: 0.2 }}>
              Certified UAE-based procurement and supply chain leaders delivering industrial, construction, and geological equipment across East Africa.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              <a href="#products" className="bz-btn" style={{ background: AMBER, color: NAVY2, fontWeight: 700, fontSize: 14, padding: "15px 34px", textDecoration: "none", letterSpacing: 0.5 }}>
                Explore Solutions →
              </a>
              <a href="/catalogue" className="bz-btn-outline" style={{ background: "transparent", color: "#fff", fontWeight: 600, fontSize: 14, padding: "15px 34px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.25)", letterSpacing: 0.5 }}>
                View Catalogue
              </a>
            </div>
          </div>
        </div>
        {/* Hero bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to top, #fff, transparent)", zIndex: 3 }} />
      </section>

      {/* STATS */}
      <div style={{ background: "#fff", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {[
              { num: "16+", label: "Years in Business", sub: "Est. Uganda, 2008" },
              { num: "100+", label: "Catalogue Products", sub: "Geological equipment" },
              { num: "6", label: "Key Markets", sub: "Construction to pharma" },
              { num: "2", label: "Country Hubs", sub: "UAE & Uganda" },
            ].map((s, i) => (
              <div key={i} className="bz-card" style={{ padding: "40px 32px", textAlign: "center", borderRight: i < 3 ? "1px solid #f1f5f9" : "none", cursor: "default" }}>
                <div style={{ fontFamily: PF, fontSize: 52, fontWeight: 700, color: AMBER, lineHeight: 1 }}>{s.num}</div>
                <div style={{ color: NAVY2, fontWeight: 600, fontSize: 14, marginTop: 10, letterSpacing: 0.3 }}>{s.label}</div>
                <div style={{ color: "#94a3b8", fontSize: 12, marginTop: 4 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ padding: "112px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 40, height: 2, background: AMBER }} />
              <span style={{ color: AMBER, fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>About Us</span>
            </div>
            <h2 style={{ fontFamily: PF, fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, marginBottom: 24, lineHeight: 1.18, letterSpacing: "-0.5px" }}>
              Bridging worlds with rugged expertise & professional procurement.
            </h2>
            <p style={{ color: "#475569", fontSize: 16, marginBottom: 18, lineHeight: 1.8 }}>
              Established in September 2022 as a sister company to Biazo International Company Limited in Uganda (founded 2008), we provide professional representation services for companies in the UAE and neighboring countries.
            </p>
            <p style={{ color: "#475569", fontSize: 16, marginBottom: 48, lineHeight: 1.8 }}>
              With over a decade of consistent value delivery through procurement and supply chain management across East Africa, we operate dual hubs in the UAE and Uganda.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
              <div style={{ padding: "24px 24px 24px 0", borderTop: `2px solid ${AMBER}` }}>
                <div style={{ fontFamily: PF, fontWeight: 700, fontSize: 17, marginBottom: 10 }}>Our Mission</div>
                <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.7 }}>To serve, support, and collaborate with our clients to deliver timely services with commitment, integrity, and professionalism.</p>
              </div>
              <div style={{ padding: "24px 0 24px 24px", borderTop: `2px solid #e2e8f0`, borderLeft: "1px solid #e2e8f0" }}>
                <div style={{ fontFamily: PF, fontWeight: 700, fontSize: 17, marginBottom: 10 }}>Our Vision</div>
                <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.7 }}>To be a leading, trusted partner that delivers outstanding, timely services and creates significant value for all stakeholders.</p>
              </div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img src={dubaiImg} alt="Dubai Operations" style={{ width: "100%", height: 580, objectFit: "cover", objectPosition: "center", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,15,30,0.7) 0%, transparent 50%)" }} />
            </div>
            <div style={{ position: "absolute", bottom: 0, left: -32, right: 32, background: NAVY2, padding: "28px 32px", display: "flex", alignItems: "center", gap: 24 }}>
              <div>
                <div style={{ fontFamily: PF, fontSize: 48, fontWeight: 700, color: AMBER, lineHeight: 1 }}>2008</div>
                <div style={{ color: "#94a3b8", fontSize: 12, marginTop: 4 }}>Year Founded</div>
              </div>
              <div style={{ width: 1, height: 56, background: "#334155" }} />
              <div>
                <div style={{ color: "#fff", fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Roots in Uganda</div>
                <div style={{ color: "#64748b", fontSize: 13, lineHeight: 1.5 }}>Expanding from East Africa<br />to the UAE and beyond.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKETS */}
      <section id="markets" style={{ padding: "112px 24px", background: NAVY2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 96, alignItems: "start" }}>
            <div style={{ position: "sticky", top: 100 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ width: 40, height: 2, background: AMBER }} />
                <span style={{ color: AMBER, fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Markets</span>
              </div>
              <h2 style={{ fontFamily: PF, fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 24, letterSpacing: "-0.5px" }}>
                Key Industries We Serve
              </h2>
              <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.75 }}>
                We supply essential equipment and materials across diverse sectors, driving progress and efficiency from construction sites to pharmaceutical labs.
              </p>
            </div>
            <div>
              {markets.map((m, i) => (
                <div key={i} className="bz-market-item" style={{ display: "flex", alignItems: "center", gap: 28, padding: "28px 32px", borderBottom: "1px solid #1e293b", cursor: "default" }}>
                  <span style={{ fontFamily: PF, fontSize: 13, color: "#334155", fontWeight: 600, letterSpacing: 1, minWidth: 28 }}>{m.num}</span>
                  <div style={{ width: 1, height: 32, background: "#334155" }} />
                  <span style={{ fontFamily: PF, fontSize: 26, fontWeight: 600, color: "#fff", letterSpacing: "-0.3px" }}>{m.name}</span>
                  <span style={{ marginLeft: "auto", color: "#334155", fontSize: 18 }}>→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" style={{ padding: "112px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 72 }}>
            <div style={{ maxWidth: 560 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ width: 40, height: 2, background: AMBER }} />
                <span style={{ color: AMBER, fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Product Range</span>
              </div>
              <h2 style={{ fontFamily: PF, fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, lineHeight: 1.18, letterSpacing: "-0.5px" }}>
                Comprehensive Solutions for Every Industry.
              </h2>
            </div>
            <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.7, maxWidth: 340, textAlign: "right" }}>
              From heavy mining equipment to precision laboratory chemicals — our global procurement network delivers.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#f1f5f9", border: "1px solid #f1f5f9" }}>
            {products.map((p, i) => (
              <div key={i} className="bz-product-card" style={{ background: "#fff", padding: "36px 32px", border: "1px solid transparent", cursor: "default" }}>
                <div style={{ fontSize: 32, marginBottom: 20 }}>{p.icon}</div>
                <div style={{ fontFamily: PF, fontWeight: 700, fontSize: 16, marginBottom: 10, lineHeight: 1.3 }}>{p.title}</div>
                <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOGUE CTA */}
      <section style={{ padding: "112px 24px", background: NAVY, overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", opacity: 0.04, pointerEvents: "none" }}>
          <img src={steelImg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 40, height: 2, background: AMBER }} />
              <span style={{ color: AMBER, fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Geological Catalogue 2026/27</span>
            </div>
            <h2 style={{ fontFamily: PF, fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, color: "#fff", lineHeight: 1.18, marginBottom: 24, letterSpacing: "-0.5px" }}>
              Explore Our Full Range of Geological Equipment
            </h2>
            <p style={{ color: "#64748b", fontSize: 16, marginBottom: 48, lineHeight: 1.8 }}>
              Browse over 102 specialist products across five categories — from Brunton compasses and Garmin GPS units to gold shaker tables, core splitters, and Rite in the Rain field books.
            </p>
            <a href="/catalogue" className="bz-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: AMBER, color: NAVY2, fontWeight: 700, fontSize: 14, padding: "16px 34px", textDecoration: "none", letterSpacing: 0.5 }}>
              Browse the Full Catalogue →
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {catHighlights.map((c, i) => (
              <div key={i} className="bz-card-dark" style={{ background: "#0f172a", padding: "22px 28px", borderLeft: `3px solid ${i === 0 ? AMBER : "#1e293b"}`, cursor: "default" }}>
                <div style={{ color: AMBER, fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>{c.cat}</div>
                <div style={{ color: "#64748b", fontSize: 13, lineHeight: 1.6 }}>{c.items || c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section style={{ height: "52vh", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,15,30,0.55)", zIndex: 1 }} />
        <img src={miningImg} alt="Mining operations" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <div style={{ width: 48, height: 2, background: AMBER, marginBottom: 32 }} />
          <h2 style={{ fontFamily: PF, fontSize: "clamp(32px, 5vw, 68px)", fontWeight: 700, color: "#fff", letterSpacing: "-1px", marginBottom: 16, lineHeight: 1.1 }}>
            Uncompromising <span style={{ fontStyle: "italic", color: AMBER }}>Quality.</span>
          </h2>
          <p style={{ fontSize: 18, color: "#94a3b8", fontWeight: 300, maxWidth: 480 }}>Global leader in innovative and comprehensive supply chain solutions.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "112px 24px", background: NAVY2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "5fr 7fr", gap: 96 }}>
          {/* Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 40, height: 2, background: AMBER }} />
              <span style={{ color: AMBER, fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Contact</span>
            </div>
            <h2 style={{ fontFamily: PF, fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 700, color: "#fff", marginBottom: 16, lineHeight: 1.2, letterSpacing: "-0.5px" }}>
              Let's Build the Future Together.
            </h2>
            <p style={{ color: "#475569", fontSize: 15, marginBottom: 56, lineHeight: 1.8 }}>
              Fill the form and your email client will open with everything pre-filled — ready to send in one click.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {[
                { icon: "✉", label: "Email", lines: [<a key="e" href="mailto:sales@biazointernational.com" className="bz-nav-link" style={{ color: "#e2e8f0", textDecoration: "none", fontSize: 15 }}>sales@biazointernational.com</a>] },
                { icon: "📞", label: "Phone", lines: [<a key="p1" href="tel:+971524860664" className="bz-nav-link" style={{ color: "#e2e8f0", textDecoration: "none", fontSize: 15, display: "block" }}>+971 52 486 0664</a>, <a key="p2" href="tel:+971568878801" className="bz-nav-link" style={{ color: "#64748b", textDecoration: "none", fontSize: 14, display: "block", marginTop: 4 }}>+971 56 887 8801</a>] },
                { icon: "📍", label: "Ras Al Khaimah, UAE", lines: [<span key="r" style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7 }}>RAKEZ Business Zone-FZ B4209b10<br />Business Center 04</span>] },
                { icon: "📍", label: "Dubai, UAE", lines: [<span key="d" style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7 }}>Abraj Shopping Center, 903<br />Sabka Rd, Deira</span>] },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <div style={{ width: 40, height: 40, background: SLATE, border: "1px solid #334155", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ color: AMBER, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>{item.label}</div>
                    {item.lines}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid #1e293b" }}>
              <a href="http://www.biazointernational.com" target="_blank" rel="noopener noreferrer" style={{ color: "#475569", fontSize: 13, textDecoration: "none" }}>🌐 www.biazointernational.com</a>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: SLATE, padding: 48, border: "1px solid #334155" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <div style={{ width: 64, height: 64, background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, margin: "0 auto 24px" }}>✅</div>
                <h3 style={{ fontFamily: PF, color: "#fff", fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Email client opened!</h3>
                <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.7, marginBottom: 32, maxWidth: 300, margin: "0 auto 32px" }}>Your message is pre-filled and ready to send. Just hit Send in your email app.</p>
                <button onClick={() => { setSent(false); setForm({ name: "", company: "", email: "", phone: "", subject: "", message: "" }); }} className="bz-btn" style={{ background: AMBER, color: NAVY2, fontWeight: 700, fontSize: 14, padding: "12px 28px", border: "none", cursor: "pointer", fontFamily: IN }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 style={{ fontFamily: PF, fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Send an Inquiry</h3>
                <p style={{ color: "#475569", fontSize: 13, marginBottom: 32 }}>We'll get back to you within 24 hours.</p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={labelCls}>Full Name *</label>
                    <input type="text" placeholder="John Smith" value={form.name} onChange={e => set("name", e.target.value)} style={{ ...inputCls, borderColor: errors.name ? "#ef4444" : "#334155" }} />
                    {errors.name && <div style={{ color: "#ef4444", fontSize: 11, marginTop: 4 }}>{errors.name}</div>}
                  </div>
                  <div>
                    <label style={labelCls}>Company</label>
                    <input type="text" placeholder="Acme Corp" value={form.company} onChange={e => set("company", e.target.value)} style={inputCls} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={labelCls}>Email *</label>
                    <input type="email" placeholder="you@company.com" value={form.email} onChange={e => set("email", e.target.value)} style={{ ...inputCls, borderColor: errors.email ? "#ef4444" : "#334155" }} />
                    {errors.email && <div style={{ color: "#ef4444", fontSize: 11, marginTop: 4 }}>{errors.email}</div>}
                  </div>
                  <div>
                    <label style={labelCls}>Phone</label>
                    <input type="tel" placeholder="+1 234 567 8900" value={form.phone} onChange={e => set("phone", e.target.value)} style={inputCls} />
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={labelCls}>Subject</label>
                  <input type="text" placeholder="Quote request for mining equipment" value={form.subject} onChange={e => set("subject", e.target.value)} style={inputCls} />
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={labelCls}>Message *</label>
                  <textarea rows={5} placeholder="Describe what you're looking for — products, quantities, delivery location, timeline…" value={form.message} onChange={e => set("message", e.target.value)} style={{ ...inputCls, resize: "vertical", borderColor: errors.message ? "#ef4444" : "#334155" }} />
                  {errors.message && <div style={{ color: "#ef4444", fontSize: 11, marginTop: 4 }}>{errors.message}</div>}
                </div>

                <button type="submit" className="bz-btn" style={{ width: "100%", background: AMBER, color: NAVY2, fontWeight: 700, fontSize: 15, padding: "17px 0", border: "none", cursor: "pointer", fontFamily: IN, letterSpacing: 0.5 }}>
                  Send Inquiry →
                </button>
                <p style={{ color: "#334155", fontSize: 11, marginTop: 12, textAlign: "center" }}>Submitting opens your email client with this message pre-filled.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#020617", padding: "48px 24px", borderTop: "1px solid #0f172a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ fontFamily: PF, fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 16 }}>BIAZO <span style={{ color: AMBER }}>INTL.</span></div>
              <p style={{ color: "#334155", fontSize: 13, lineHeight: 1.7, maxWidth: 280 }}>UAE-based procurement and supply chain leaders. Delivering industrial, construction, and geological equipment across East Africa since 2008.</p>
            </div>
            <div>
              <div style={{ color: AMBER, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Navigate</div>
              {[["#about","About"],["#markets","Markets"],["#products","Products"],["/catalogue","Catalogue"],["#contact","Contact"]].map(([href, label]) => (
                <a key={label} href={href} className="bz-nav-link" style={{ display: "block", color: "#334155", fontSize: 13, textDecoration: "none", marginBottom: 10 }}>{label}</a>
              ))}
            </div>
            <div>
              <div style={{ color: AMBER, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Contact</div>
              <a href="mailto:sales@biazointernational.com" style={{ display: "block", color: "#334155", fontSize: 12, textDecoration: "none", marginBottom: 10, lineHeight: 1.5 }}>sales@biazointernational.com</a>
              <a href="tel:+971524860664" style={{ display: "block", color: "#334155", fontSize: 12, textDecoration: "none", marginBottom: 6 }}>+971 52 486 0664</a>
              <a href="tel:+971568878801" style={{ display: "block", color: "#334155", fontSize: 12, textDecoration: "none" }}>+971 56 887 8801</a>
            </div>
            <div>
              <div style={{ color: AMBER, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Locations</div>
              <p style={{ color: "#334155", fontSize: 12, lineHeight: 1.7, marginBottom: 16 }}>RAKEZ Business Zone-FZ<br />Ras Al Khaimah, UAE</p>
              <p style={{ color: "#334155", fontSize: 12, lineHeight: 1.7 }}>Abraj Shopping Center, 903<br />Deira, Dubai, UAE</p>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #0f172a", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ color: "#1e293b", fontSize: 12 }}>© {new Date().getFullYear()} Biazo International General Trading FZ-LLC. All rights reserved.</p>
            <a href="http://www.biazointernational.com" style={{ color: "#1e293b", fontSize: 12, textDecoration: "none" }}>www.biazointernational.com</a>
          </div>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a href="https://wa.me/971524860664?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20services." target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" className="bz-wa-btn"
        style={{ position: "fixed", bottom: 32, right: 32, zIndex: 200, width: 58, height: 58, background: "#25D366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(37,211,102,0.45)", textDecoration: "none" }}>
        <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff"><path d="M16 2C8.268 2 2 8.268 2 16c0 2.492.664 4.83 1.82 6.852L2 30l7.352-1.793A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 01-5.83-1.594l-.418-.248-4.36 1.063 1.094-4.24-.273-.435A11.462 11.462 0 014.5 16C4.5 9.596 9.596 4.5 16 4.5S27.5 9.596 27.5 16 22.404 27.5 16 27.5zm6.29-8.512c-.344-.172-2.035-1.004-2.35-1.117-.316-.113-.547-.172-.777.172-.23.344-.892 1.117-1.094 1.348-.2.23-.402.258-.746.086-.344-.172-1.453-.536-2.766-1.707-1.023-.914-1.714-2.043-1.914-2.387-.2-.344-.021-.531.15-.703.155-.154.344-.402.516-.602.172-.2.23-.344.344-.574.115-.23.058-.43-.029-.602-.086-.172-.777-1.875-1.066-2.566-.28-.672-.564-.58-.777-.59-.2-.01-.43-.012-.66-.012s-.602.086-.918.43c-.316.344-1.207 1.18-1.207 2.875s1.236 3.334 1.408 3.564c.172.23 2.434 3.717 5.896 5.211.824.355 1.467.568 1.969.727.827.263 1.58.226 2.175.137.664-.1 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.085-.143-.314-.23-.658-.402z"/></svg>
      </a>

      {/* BACK TO TOP */}
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} title="Back to top" className="bz-btn"
          style={{ position: "fixed", bottom: 104, right: 32, zIndex: 200, width: 44, height: 44, background: NAVY2, border: "1px solid #334155", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff", fontSize: 18, boxShadow: "0 4px 16px rgba(0,0,0,0.4)" }}>
          ↑
        </button>
      )}

    </div>
  );
}
