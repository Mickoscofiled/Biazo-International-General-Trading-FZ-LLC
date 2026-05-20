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

export default function Home() {
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
          <div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, marginBottom: 16, lineHeight: 1.2 }}>Let's Build the Future Together.</h2>
            <p style={{ color: "#94a3b8", fontSize: 17, marginBottom: 48, lineHeight: 1.6 }}>Reach out to our team in the UAE to discuss your procurement and supply chain needs.</p>
            <div style={{ marginBottom: 32 }}>
              <div style={{ color: "#f59e0b", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 8 }}>Ras Al Khaimah, UAE</div>
              <p style={{ color: "#cbd5e1", lineHeight: 1.6 }}>RAKEZ Business Zone-FZ B4209b10<br />Business Center 04</p>
            </div>
            <div>
              <div style={{ color: "#f59e0b", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 8 }}>Dubai, UAE</div>
              <p style={{ color: "#cbd5e1", lineHeight: 1.6 }}>Abraj Shopping Center, 903<br />Sabka Rd, Deira</p>
            </div>
          </div>
          <div style={{ background: "#1e293b", padding: 48, border: "1px solid #334155" }}>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: 24, fontWeight: 700, marginBottom: 32 }}>Contact Us</h3>
            <div style={{ borderBottom: "1px solid #334155", paddingBottom: 20, marginBottom: 20 }}>
              <div style={{ color: "#64748b", fontSize: 13, marginBottom: 6 }}>Email</div>
              <a href="mailto:sales@biazointernational.com" style={{ color: "#fff", fontSize: 18, textDecoration: "none" }}>sales@biazointernational.com</a>
            </div>
            <div style={{ borderBottom: "1px solid #334155", paddingBottom: 20, marginBottom: 20 }}>
              <div style={{ color: "#64748b", fontSize: 13, marginBottom: 6 }}>Phone (Primary)</div>
              <a href="tel:+971524860664" style={{ color: "#fff", fontSize: 18, textDecoration: "none" }}>+971 52 486 0664</a>
            </div>
            <div style={{ paddingBottom: 20, marginBottom: 32 }}>
              <div style={{ color: "#64748b", fontSize: 13, marginBottom: 6 }}>Phone (Secondary)</div>
              <a href="tel:+971568878801" style={{ color: "#fff", fontSize: 18, textDecoration: "none" }}>+971 56 887 8801</a>
            </div>
            <a href="mailto:sales@biazointernational.com" style={{ display: "block", background: "#f59e0b", color: "#0f172a", fontWeight: 700, fontSize: 17, padding: "18px 0", textDecoration: "none", textAlign: "center" }}>
              Send Inquiry
            </a>
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

    </div>
  );
}
