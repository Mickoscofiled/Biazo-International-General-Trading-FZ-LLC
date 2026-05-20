import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Globe, Shield, Anchor, Zap, Droplet, Box, Layers, Hammer, Activity, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/images/hero.png";
import dubaiImg from "@/assets/images/dubai-office.png";
import miningImg from "@/assets/images/mining.png";
import steelImg from "@/assets/images/steel-pipes.png";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const markets = [
  "Construction", "Mining", "Oil & Gas", "Healthcare & Pharma", "Government", "Agriculture"
];

const productCategories = [
  { icon: Anchor, title: "Automotive & Heavy Equipment", desc: "Heavy mining equipment, construction machines, engines, tyres, spare parts" },
  { icon: Droplet, title: "Lubricants & Compounds", desc: "Grease, lubricants, compounds" },
  { icon: Zap, title: "Welding Machines & Consumables", desc: "MIG, TIG, Stick, Flux-cored welding machines, PPRC pipes, electrodes, filler wire, shielding gas, cutting torches, PPE" },
  { icon: Activity, title: "IT Equipment & Cables", desc: "Laptops & accessories, printers & cartridges, Ethernet cables, UPS systems, resin joint kits, electric & mining cables" },
  { icon: Zap, title: "Electrical Products", desc: "Contactors, overload relays, switches & automation, plugs & sockets, lighting & accessories" },
  { icon: Shield, title: "Safety Solutions", desc: "Mining safety gear, geological equipment, workwear" },
  { icon: Hammer, title: "Hand & Power Tools", desc: "Hand tools, precision tools, power tools & accessories, garden tools" },
  { icon: Layers, title: "Pipes & Fittings", desc: "GI pipes, PPRC pipes, elbows, tees, reducers, couplings, unions, caps, plugs, nipples, bushings, adapters, flanges" },
  { icon: Box, title: "Steel & Metal", desc: "Mild steel plates (HR/CR), stainless steel, galvanized steel, chequered plates, RHS, metal bar, structural sections, wear plates, scaffolding" },
  { icon: Droplet, title: "Industrial & Lab Chemicals", desc: "Water treatment chemicals, scale inhibitors, antidotes, buffer solutions, lab chemicals, solvents & adhesives, oxidizers & reducing agents" },
];

export default function Home() {
  return (
    <div className="bg-white min-h-[100dvh] flex flex-col text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold tracking-tight text-slate-900">
            BIAZO <span className="text-amber-500">INTL.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
            <a href="#markets" className="hover:text-amber-500 transition-colors">Markets</a>
            <a href="#products" className="hover:text-amber-500 transition-colors">Products</a>
            <Link href="/catalogue" className="hover:text-amber-500 transition-colors">Catalogue</Link>
            <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
          </div>
          <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-none px-6">
            Get a Quote
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 h-[90vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/60 z-10" />
          <img src={heroImg} alt="Industrial port" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6 uppercase tracking-widest">
              <Globe className="w-4 h-4" /> Global Trading Powerhouse
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
              Precision Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Power.</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 max-w-2xl font-light">
              Certified UAE-based procurement and supply chain leaders delivering industrial, construction, and healthcare equipment across East Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-none text-lg px-8 h-14">
                Explore Our Solutions <ArrowRight className="ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision & Story */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif font-bold mb-8">
                Bridging worlds with rugged field operations & professional procurement.
              </motion.h2>
              <motion.p variants={fadeIn} className="text-slate-600 mb-6 text-lg">
                Established in September 2022 as a sister company to Biazo International Company Limited in Uganda (founded 2008), we provide professional representation services for companies in the UAE and neighboring countries.
              </motion.p>
              <motion.p variants={fadeIn} className="text-slate-600 text-lg mb-8">
                With over a decade of consistent value delivery through procurement and supply chain management across East Africa, we operate dual hubs in the UAE and Uganda.
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-8">
                <motion.div variants={fadeIn} className="border-l-2 border-amber-500 pl-4">
                  <h3 className="font-serif font-bold text-xl mb-2">Our Mission</h3>
                  <p className="text-slate-600 text-sm">To serve, support, and collaborate with our clients to deliver timely services with commitment, integrity, and professionalism.</p>
                </motion.div>
                <motion.div variants={fadeIn} className="border-l-2 border-slate-900 pl-4">
                  <h3 className="font-serif font-bold text-xl mb-2">Our Vision</h3>
                  <p className="text-slate-600 text-sm">To be a leading, trusted partner that delivers outstanding, timely services and creates significant value.</p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px]"
            >
              <img src={dubaiImg} alt="Dubai Operations" className="absolute inset-0 w-full h-full object-cover object-center shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-8 max-w-sm">
                <div className="text-amber-500 font-serif text-5xl font-bold mb-2">2008</div>
                <div className="font-medium text-lg uppercase tracking-wide">Roots in Uganda</div>
                <div className="text-slate-400 mt-2">Expanding global footprint from the UAE to East Africa.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Markets Served */}
      <section id="markets" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Key Markets Served</h2>
            <p className="text-slate-400 text-lg">We supply a wide range of essential products to diverse sectors, driving progress and efficiency across continents.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-slate-800 border border-slate-800">
            {markets.map((market, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900 p-8 md:p-12 flex items-center justify-center text-center group hover:bg-slate-800 transition-colors"
              >
                <span className="font-serif text-xl md:text-2xl font-medium group-hover:text-amber-500 transition-colors">{market}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <img src={steelImg} alt="Texture" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-16 md:w-2/3"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Comprehensive Solutions.</h2>
            <p className="text-slate-600 text-lg">From heavy mining equipment to precision laboratory chemicals, our vast procurement network ensures you get exactly what you need, when you need it.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="group border border-slate-200 p-8 hover:border-amber-500 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 bg-slate-100 text-slate-900 group-hover:bg-amber-500 group-hover:text-white flex items-center justify-center mb-6 transition-colors">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-3 text-slate-900">{category.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{category.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Geological Catalogue CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img src={miningImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6 uppercase tracking-widest">
                <BookOpen className="w-4 h-4" /> Geological Catalogue 2026/27
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                Explore Our Full Range of Geological Equipment
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Browse over 80 specialist products across five categories — from Brunton compasses and Garmin GPS units to gold shaker tables, core splitters, and Rite in the Rain field books.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { label: "Stationery & Labelling", count: "32 products" },
                  { label: "Sample Storage", count: "6 products" },
                  { label: "Core & More", count: "26 products" },
                  { label: "Exploration & Navigation", count: "14 products" },
                  { label: "Gold Mining Accessories", count: "18 products" },
                ].map((cat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">{cat.label}</div>
                      <div className="text-slate-400 text-xs">{cat.count}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/catalogue">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-none h-14 px-8 text-base">
                  Browse the Catalogue <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { title: "Core Splitting Machines", sub: "220 V & 380 V models" },
                { title: "Brunton Compasses", sub: "TruArc, ComPro, Geo, Axis" },
                { title: "Garmin GPS Units", sub: "eTrex SE, 22x, 32x, Map 65s" },
                { title: "Gold Shaker Tables", sub: "145–750 kg/h capacity" },
                { title: "Steel & Plastic Core Trays", sub: "Multiple standard sizes" },
                { title: "Estwing Rock Picks", sub: "Leather & vinyl handle" },
              ].map((item, i) => (
                <Link key={i} href="/catalogue" className="block bg-slate-800 border border-slate-700 hover:border-amber-500/50 p-5 transition-all duration-300 group">
                  <div className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-2 group-hover:text-amber-400">Featured</div>
                  <div className="font-serif font-bold text-white text-sm mb-1">{item.title}</div>
                  <div className="text-slate-400 text-xs">{item.sub}</div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image Break */}
      <section className="h-[60vh] relative">
        <div className="absolute inset-0 bg-slate-900/40 z-10" />
        <img src={miningImg} alt="Heavy Equipment" className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">Uncompromising Quality.</h2>
            <p className="text-xl font-light text-slate-200 max-w-2xl mx-auto">Global leader in providing innovative and comprehensive solutions.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's Build the Future Together.</h2>
              <p className="text-slate-400 text-lg mb-10">Reach out to our team in the UAE to discuss your procurement and supply chain needs.</p>
              
              <div className="space-y-6">
                <div>
                  <div className="text-amber-500 text-sm font-bold uppercase tracking-wider mb-2">Ras Al Khaimah, UAE</div>
                  <p className="text-slate-300">RAKEZ Business Zone-FZ B4209b10<br />Business Center 04</p>
                </div>
                <div>
                  <div className="text-amber-500 text-sm font-bold uppercase tracking-wider mb-2">Dubai, UAE</div>
                  <p className="text-slate-300">Abraj Shopping Center, 903<br />Sabka Rd, Deira</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800 p-8 md:p-12 border border-slate-700">
              <h3 className="font-serif text-2xl font-bold mb-6">Contact Us</h3>
              <div className="space-y-6">
                <div className="flex flex-col border-b border-slate-700 pb-4">
                  <span className="text-slate-400 text-sm mb-1">Email</span>
                  <a href="mailto:sales@biazointernational.com" className="text-xl hover:text-amber-500 transition-colors">sales@biazointernational.com</a>
                </div>
                <div className="flex flex-col border-b border-slate-700 pb-4">
                  <span className="text-slate-400 text-sm mb-1">Phone (Primary)</span>
                  <a href="tel:+971524860664" className="text-xl hover:text-amber-500 transition-colors">+971 52 486 0664</a>
                </div>
                <div className="flex flex-col pb-4">
                  <span className="text-slate-400 text-sm mb-1">Phone (Secondary)</span>
                  <a href="tel:+971568878801" className="text-xl hover:text-amber-500 transition-colors">+971 56 887 8801</a>
                </div>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-none h-14 text-lg mt-4">
                  Send Inquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-10 text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-serif text-xl font-bold text-white">
            BIAZO <span className="text-amber-500">INTL.</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Biazo International General Trading FZ-LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="http://www.biazointernational.com" className="hover:text-amber-500 transition-colors">www.biazointernational.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
