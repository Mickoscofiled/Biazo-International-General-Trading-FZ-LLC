import { useState, useEffect, useRef } from "react";

const PF = "'Playfair Display', Georgia, serif";
const IN = "'Inter', -apple-system, sans-serif";
const AMBER = "#f59e0b";
const NAVY = "#0a0f1e";
const NAVY2 = "#0f172a";
const SLATE = "#1e293b";

type Cat = "all" | "stationery" | "storage" | "core" | "navigation" | "gold";

interface Product {
  code: string;
  name: string;
  desc: string;
  cat: Exclude<Cat, "all">;
}

const allProducts: Product[] = [
  // Stationery & Labelling
  { code: "PLA-FLAG50", name: "PVC Flagging Tapes", desc: "Bright, highly visible 25mm × 50/75/100m PVC tape. 12 colours. Easy to tear and tie, no smudging on matt finish. Ideal for flagging, sorting, field grading, and surveying.", cat: "stationery" },
  { code: "GEO-FLAG-DISP", name: "Flagging Tape Dispenser", desc: "Heavy-duty 600D Oxford fabric dispenser with PVC liner. Waterproof, holds 2 × 50m rolls. Belt loop with snap for hands-free use.", cat: "stationery" },
  { code: "PLA-FLAG700MM", name: "PVC Flags on Wire Stakes", desc: "Fast, highly visible ground flags for survey stations and demarcation. 500mm, 700mm, 900mm lengths. 12 colours, 100 per pack.", cat: "stationery" },
  { code: "PLA-PINTAG-", name: "Pin Tags on Wire Stakes", desc: "Bright plastic pin tags (35mm × 80mm head) on wire stakes. 7 colours, 100 per pack.", cat: "stationery" },
  { code: "PLA-TRI", name: "Triangle Markers", desc: "UV-stabilised plastic triangle trail markers (90mm × 120mm). 5 colours, 200 per pack.", cat: "stationery" },
  { code: "PLA-ALUTAGS", name: "Alutags", desc: "Weatherproof aluminium tags (25mm × 75mm) with wire ties. Write with permanent marker. 1 000 per pack.", cat: "stationery" },
  { code: "PLA-ALUEYELET", name: "Aluminium Labels with Copper Ties", desc: "Weatherproof 20mm × 100mm aluminium labels with copper eyelets and copper ties. 1 000 per pack.", cat: "stationery" },
  { code: "PLA-ALUSTICK", name: "Pointed Aluminium Labels with Wire Ties", desc: "23mm × 113mm pointed aluminium labels. Push into soil or tie to samples. 1 000 per pack.", cat: "stationery" },
  { code: "PLA-EXPTAGS", name: "Core Tray Tags", desc: "50mm × 78mm aluminium ID tags that slot into core tray tag holders. 1 000 per pack.", cat: "stationery" },
  { code: "LAB-STEELTAG125", name: "Steel Tags", desc: "63mm × 125mm steel tags for crates, boxes, equipment. Available in silver, orange, blue. 1 000 per pack.", cat: "stationery" },
  { code: "LAB-PT63X125", name: "Plastic Tags with Slots — 250 mic", desc: "Durable 63mm × 125mm plastic tags with two slots. 10 colour options. 1 000 per pack.", cat: "stationery" },
  { code: "LAB-PT62X125", name: "Plastic Tags — 600 mic", desc: "Heavy-duty 62mm × 125mm plastic tags with 2 round holes. 5 colours. 200 per pack.", cat: "stationery" },
  { code: "LAB-BUFF105X50", name: "Buff Tags", desc: "200gsm board paper labels laminated for tear resistance. White (50×105mm) and manila (40×70mm). 1 000 per roll.", cat: "stationery" },
  { code: "NUR-TMARKSTRLRG", name: "Large Plastic T-Markers", desc: "UV-stabilised plastic T-markers for ground identification. Push into soil. 460mm length. 100 per pack.", cat: "stationery" },
  { code: "LAB-PVC155MM16", name: "PVC Self-Tie Labels", desc: "Weatherproof 16mm × 155mm vinyl labels with integrated tie. 10 colours. 1 000 per pack.", cat: "stationery" },
  { code: "OS240", name: "A5 Field Books", desc: "A5 field notebooks, wet-strength series. Various page templates: OS240, OS241, OS244–OS251.", cat: "stationery" },
  { code: "RITR-540F", name: "Rite in the Rain Geological Book", desc: "All-weather fabrikoid cover geological field book with 20 reference pages, rulers, scales, conversion tables, and removable photo scale.", cat: "stationery" },
  { code: "RITR-350F", name: "Rite in the Rain Field Book", desc: "All-weather fabrikoid cover field book with imperial & metric rulers, conversion tables, and map scale.", cat: "stationery" },
  { code: "RITR-295", name: "Rite in the Rain Field Desk", desc: "Lightweight field desk (248mm × 406mm × 57mm, 590g) with sturdy writing surface, strong clip, and internal storage.", cat: "stationery" },
  { code: "RITR-970", name: "Rite in the Rain Dirtbag Pen Organizer", desc: "Rugged TPU organiser with sealed seams. Exterior pen slots, card pockets, secured zipper. 203mm × 121mm × 19mm.", cat: "stationery" },
  { code: "RITR-OR56", name: "Rite in the Rain Lead Holder", desc: "Industrial gravity-fed lead holder with 5.6mm lead. Marks wood and rough surfaces. Includes refills.", cat: "stationery" },
  { code: "RITR-OR11", name: "Rite in the Rain All-Weather Pen", desc: "All-weather click pen with triangular grip. Works through water, sweat, grease, and mud. Black ink.", cat: "stationery" },
  { code: "RITR-372", name: "Rite in the Rain Loose Leaf Pages", desc: "Water-resistant archival-grade 118mm × 178mm paper. 100 sheets per pack.", cat: "stationery" },
  { code: "GEO-CHINAM", name: "Peel-off China Markers", desc: "For core/rock markings and photo labelling. Resistant to crumbling on hot surfaces. No sharpening needed. 12 per pack.", cat: "stationery" },
  { code: "GEO-EDD", name: "Edding Paint Markers", desc: "Permanent, waterproof, UV-tested markers with bullet-shaped tips. 10 per pack, one colour per pack.", cat: "stationery" },
  { code: "GEO-RBX-WH", name: "Rilbex Paint Markers", desc: "Quick-drying industrial permanent markers for rough, oily, wet surfaces. Temperature-resistant to 1 000°C. 50ml, 10 per pack.", cat: "stationery" },
  { code: "GEO-PROTRACTOR", name: "Douglas & Steel Protractors", desc: "Douglas protractor and steel protractor with hinged arm for angular measurement in geological mapping.", cat: "stationery" },
  { code: "GEO-INCLIN", name: "SOLA Inclinometer", desc: "Precision inclinometer for measuring inclination and dip angles in the field.", cat: "stationery" },
  { code: "GEO-TRISC", name: "Triangular Scales", desc: "Professional triangular scale rulers for map work and technical drawing in the field.", cat: "stationery" },
  { code: "GEO-SAMPTICKET", name: "Sample Ticket Book", desc: "Pre-printed sample ticket books for systematic field data recording.", cat: "stationery" },
  { code: "GEO-SPRAY", name: "Dy-Mark Spray Paint", desc: "Industrial spray paint for marking rocks, ground, and equipment. Highly visible colours.", cat: "stationery" },
  { code: "GEO-BARRCONE", name: "Mining Barrier Cones", desc: "High-visibility safety cones for hazard demarcation in mining and field operations.", cat: "stationery" },
  // Sample Storage
  { code: "GEO-CALICO", name: "Calico Sample Bags", desc: "Breathable calico cotton bags for storing and transporting geological rock and soil samples.", cat: "storage" },
  { code: "GEO-BULK", name: "Bulk Sample Bags", desc: "Heavy-duty bulk bags for large quantities of geological material. Various sizes available.", cat: "storage" },
  { code: "GEO-GEOCHENV", name: "Geochem Envelopes", desc: "Kraft paper envelopes for geochemical sample storage with pre-printed data fields.", cat: "storage" },
  { code: "GEO-FORENS", name: "Forensic Sample Bags", desc: "Tamper-evident forensic-grade bags for secure chain-of-custody sample storage.", cat: "storage" },
  { code: "GEO-ZIPPER", name: "Zipper Sample Bags", desc: "Resealable zipper bags for convenient sample storage. Various sizes available.", cat: "storage" },
  { code: "GEO-SAMPBAG", name: "Sample Bags", desc: "General-purpose field sample bags for geological, soil, and mineral samples.", cat: "storage" },
  // Core & More
  { code: "GEO-COREMACH", name: "Mobile Core Splitting Machine", desc: "Splits rock core samples safely and accurately. Core guide and blade covers for maximum safety. 220V (2.2kW) and 380V available.", cat: "core" },
  { code: "GEO-BLADE300CS30", name: "Core Splitting Saw Blades", desc: "Diamond blades for hard and soft stone. Fits all core splitters. 300mm and 350mm diameters.", cat: "core" },
  { code: "GEO-CORETRAYST", name: "Steel Core Trays", desc: "Zincalume steel trays with deep profile, raised side walls, dual handle system, 100% water drainage. Welded or prefabricated.", cat: "core" },
  { code: "GEO-CORETRAYPL", name: "Plastic Core Trays", desc: "UV-stabilised polypropylene trays for harsh exploration drilling environments. Various standard sizes.", cat: "core" },
  { code: "GEO-CTLID-1M-PL", name: "Universal Lids for Core Trays", desc: "Plastic and steel lids for 1m and 1.5m core trays. For safety and easy handling during transport.", cat: "core" },
  { code: "GEO-BRNQGUIDE", name: "Broken Core Guides", desc: "Guides broken core through a spinning diamond blade. Holds up to 450mm. NQ (46.7mm) and HQ (63.5mm) sizes.", cat: "core" },
  { code: "GEO-GUIDEHQV", name: '"V" Core Guides', desc: 'V-shaped guides for accurate lengthwise core cutting. HQ-BQ (36.4–63.5mm) and PQ (86mm) sizes.', cat: "core" },
  { code: "GEO-CORELIFTER", name: "Core Lifter", desc: "Zincalume steel tool for extracting tight-fitting core from trays. Includes ruler, no sharp edges.", cat: "core" },
  { code: "GEO-ROCKET", name: "Core Orientator / Rocket Launcher", desc: "Non-magnetic device for core orientation and dip measurement. BQ to PQ sizes, up to 60cm. 0°–90° adjustable dip. 2.7kg.", cat: "core" },
  { code: "GEO-KENH", name: "Kenometer Core Orientation Tool", desc: "Measures Alpha & Beta angles. Anodised aluminium body with laser-etched graduations. HQ and NQ 2 sizes.", cat: "core" },
  { code: "GEO-COREBLOCK", name: "Plastic Core Blocks", desc: "Universal yellow/green core blocks indicating depth, loss/gain, and core recovered. 500 per pack.", cat: "core" },
  { code: "GEO-GONPLEXI", name: "Goniometer (Ezy Logger)", desc: "Perspex core tool measuring Alpha and Beta angles, used to read bedding, structure, and fractures. BQ/NQ/HQ/PQ sizes.", cat: "core" },
  { code: "GEO-CHIPTRAY", name: "Rock Chip Trays", desc: "UV-stabilised clear plastic trays with 10 interlockable compartments. Sturdy hinges and clips. 100 per pack.", cat: "core" },
  { code: "GEO-RIFFLER3", name: "Riffler Split 3 Tier", desc: "Mobile riffler on wheels. 12.5% (1/8th) split in one pass. 16-slot, 32.2mm. 650×1000×650mm, 44kg.", cat: "core" },
  { code: "GEO-SIEVE200MM", name: "Sieves", desc: "200mm diameter test sieves in steel or brass with 5mm punched plate. Lids and receivers available.", cat: "core" },
  { code: "GEO-FLEXISIEVERI", name: "Flexi Sieve Ring & Lid", desc: "Reusable 200mm plastic sieve system with lid, receiver, and two clip-together rings. Mesh sold separately.", cat: "core" },
  { code: "GEO-OPTSQUARE", name: "Optical Square", desc: "Surveying tool for setting out right angles and offsets. For rudimentary grids and sampling programs.", cat: "core" },
  { code: "GEO-ACIDBOTTLE", name: "Acid Bottle", desc: "30ml plastic acid bottle with removable tip for easy refilling. For acid testing of rock samples.", cat: "core" },
  { code: "OTH-ALUSCOOP1LT", name: "Metal Measuring Scoop", desc: "1-litre stainless steel measuring scoop for scooping and measuring quantities.", cat: "core" },
  { code: "GEO-MDT410X285", name: "Metal Sample Drying Tray", desc: "Stainless steel tray (410mm × 285mm × 75mm) for drying samples in lab or field.", cat: "core" },
  { code: "GEO-MAGGLASSX40", name: "Hand Lens Magnifiers", desc: "Superior optical quality field magnifiers. Options: 40× illuminated loupe, 20× single, 10× single, 10×/20× double. Chrome-plated frames.", cat: "core" },
  { code: "GEO-AUG-BT131", name: "Motorised Earth Auger (STIHL BT131)", desc: "1.4kW petrol handheld earth auger. Lightweight for large-scale work. 90mm auger bit sold separately.", cat: "core" },
  { code: "PLA-SOILSAM50", name: "Soil Sampler", desc: "Stainless steel 500mm soil sampler. Insert vertically, twist 180°, withdraw sample.", cat: "core" },
  { code: "GEO-PINCH-1.5", name: "Aluminium Pinch Bars", desc: "Lightweight aluminium pinch bars with handguards for underground barring. 1.2m, 1.5m, 1.8m, 2.4m lengths.", cat: "core" },
  { code: "GEO-STEM-90", name: "Stemming Plugs", desc: "Plastic stemming plugs for retaining explosive energy in blast holes. 90mm (red) and 120mm (grey).", cat: "core" },
  { code: "GEO-HOSE20X30", name: "Anti-Static Loading Hose", desc: "30m anti-static PVC hose for loading explosives. Complies with BS2050/1978 resistance requirements.", cat: "core" },
  { code: "GEO-MEASUREWHL", name: "Rotosure Measuring Wheel", desc: "1m circumference measuring wheel for distances up to 10 000m. Alternative to long tape measures.", cat: "core" },
  { code: "GEO-MEASURE50M", name: "Measuring Tapes 50m", desc: "Fibreglass and steel 50m measuring tapes in durable plastic frames with sturdy handle.", cat: "core" },
  { code: "E30", name: "Estwing Rock Picks & Crack Hammers", desc: "USA-forged one-piece steel picks and hammers. Leather-grip (E30), vinyl (E3-22P), long vinyl (E3-23LP), 4lb crack hammer (B3-4LB).", cat: "core" },
  { code: "GEO-NITON", name: "Niton XRF Spectrometers", desc: "Portable X-Ray Fluorescence spectrometers for rapid in-field elemental analysis of rock and soil.", cat: "core" },
  { code: "GEO-WORKWEAR", name: "Bisley Workwear & Safety", desc: "Field vests, Miner's belts, and vehicle first aid kits for mining and geological fieldwork.", cat: "core" },
  // Navigation
  { code: "GEO-GARMETSE", name: "Garmin eTrex GPS Units", desc: "Handheld GPS units: eTrex SE, eTrex 22x, eTrex 32x for reliable field navigation and waypoint marking.", cat: "navigation" },
  { code: "GEO-GARMAPS65S", name: "Garmin GPS Map 65s", desc: "Advanced handheld GPS with multi-band GNSS and large colour display. For detailed mapping and navigation.", cat: "navigation" },
  { code: "GEO-BRUNTONTA3", name: "Brunton TruArc Compasses", desc: "TruArc 3 (tool-free declination), TruArc 10 (Ever-North magnet, Romer scales), TruArc 15 (mirror, clinometer, level, ruler).", cat: "navigation" },
  { code: "GEO-BRUNTON5010", name: "Brunton Pocket Transit Compasses", desc: "5008 ComPro, 5020 Standard, 5010 Geo, 5012 Axis. Simultaneous Strike & Dip, Dip Direction, Trend & Plunge measurements.", cat: "navigation" },
  { code: "GEO-BRUNT-OM-SL", name: "Brunton Omnislope & Omnisight", desc: "OMNISLOPE sighting inclinometer (Slope, Forestry, Percentage). OMNISIGHT compass (MILS, Azimuth, Reciprocal).", cat: "navigation" },
  { code: "GEO-BRUNTON3051", name: "Brunton Non-Magnetic Tripod", desc: "Aluminium and brass non-magnetic tripod for zero compass interference. Adjustable legs, standard thread cap.", cat: "navigation" },
  { code: "GEO-BRUNTON3040", name: "Brunton Ball & Socket Mount", desc: "Non-magnetic 360° mount for connecting Brunton Pocket Transits to monopods or tripods.", cat: "navigation" },
  { code: "GEO-BRUNTONWRC", name: "Brunton Weather-Resistant Transit Case", desc: "Water-resistant case for Brunton 5008 & 5020. Built-in belt loop (up to 50.8mm), ALICE clip, snap closure.", cat: "navigation" },
  { code: "GEO-BRUNTON4090", name: "Brunton 4090 Collapsible Jacob's Staff", desc: "3-section aluminium Jacob's Staff for measuring rock layers. Folds to fit in backpack, extends as trekking pole.", cat: "navigation" },
  { code: "GEO-BRUNTON3060", name: "Brunton 3060 Thimble Adaptor", desc: "Jacob's Staff thimble adaptor (38×24mm, 22.7g). Standard 1/4-20 UNC thread for Brunton instruments.", cat: "navigation" },
  { code: "GEO-BRUNTONGS", name: "Brunton Grain Size Card", desc: "Transparent card for visual sediment classification by size and shape. Positive and negative sides.", cat: "navigation" },
  { code: "GEO-BRUNTONMMT", name: "Brunton Map Multi-Tool Card", desc: "Combines rulers, map scales, UTM Romer grids, and 360° protractor with strike & dip crosshairs.", cat: "navigation" },
  { code: "GEO-BRUNTONQR", name: "Brunton Quick Reference Cards", desc: "8-page navigation reference set. Calculate distance and location on topographic maps.", cat: "navigation" },
  { code: "GEO-MAGLITE", name: "Maglite Torches", desc: "Extensive range of Maglite quality torches for field use. Spare parts available.", cat: "navigation" },
  // Gold
  { code: "GEO-GLDSH-145", name: "Gold Shaker Table — Gemini Type", desc: "Fine gold cleanup shaker tables. 145kg/h (1.1kW) and 350kg/h (3.0kW, variable speed). Adjustable spray bars, inline filtration. 220V or 3-phase.", cat: "gold" },
  { code: "GEO-GLDSH-450", name: "Gold Shaker Table — Rougher Type", desc: "500–750kg/h processing capacity. 2.2kW 380VAC motor. Riffles, horizontal shaking, adjustable deck and tilt.", cat: "gold" },
  { code: "GEO-FURN-01", name: "Tiny Tim Furnace", desc: "Compact LP gas furnace for melting aluminium, gold, silver, brass, copper. Up to A3 crucible (110mm max dia). Bundle includes crucible and tongs.", cat: "gold" },
  { code: "GEO-FURN-03", name: "Large Gold Melting Furnace", desc: "LP gas furnace up to 1 350°C. Melts gold, silver, copper, brass, aluminium, bronze. Fits A6/A8/A10 crucibles.", cat: "gold" },
  { code: "GEO-SNUFBOT-01", name: "Snuffer Bottle Kits", desc: "Kit 1: 150ml snuffer bottle, 3ml pipette, finds bottle. Kit 2 adds a 30× loupe. For gold flakes, dust, and nuggets.", cat: "gold" },
  { code: "GEO-DETECT-01", name: "Bounty Hunter Pinpointer", desc: "Compact pinpointer with single-knob sensitivity, audio and vibration indicators. 9V battery.", cat: "gold" },
  { code: "GEO-FPULSE", name: "Fisher F-Pulse Pinpointer", desc: "Fully waterproof (6 feet). Pulse induction, beep/vibrate modes, lost mode alarm, 3 sensitivity levels.", cat: "gold" },
  { code: "GEO-DIAMSEL", name: "Diamond Selector 2", desc: "Electronic diamond tester for identifying genuine diamonds vs moissanite and other stones.", cat: "gold" },
  { code: "GEO-TEKEUROPRO", name: "Teknetics EuroTek Pro Detector", desc: "All-terrain metal detector with iron audio and depth indicator for gold prospecting and relic hunting.", cat: "gold" },
  { code: "GEO-TEKEURO", name: "Teknetics EuroTek Detector", desc: "Versatile metal detector for coin shooting and prospecting. Ground balance capability.", cat: "gold" },
  { code: "GEO-FISHERBUG", name: "Fisher Gold Bug Detectors", desc: "High-frequency gold detector for small nuggets and flakes. Manual and automatic ground balance.", cat: "gold" },
  { code: "GEO-PANN-03", name: "Trekker Gold River Sluice", desc: "High-performance river sluice with riffles and miner's moss. Panning Combo and Sluice Combo sets available.", cat: "gold" },
  { code: "GEO-SLC-RIV-01", name: "Mini Pocket Gold River Sluices", desc: "Lightweight <500g 3D-printed PLA sluice for alluvial gold. Mini Pocket and Mini Vortex versions.", cat: "gold" },
  { code: "GEO-PANN-05", name: "Gold Panning Kits", desc: 'Complete kits: 10", 15" gold pans, 14" classifier pan, snuffer bottle. Prospectors Bundle also available.', cat: "gold" },
  { code: "GEO-SLC-SGL-01", name: "High Banker Sluices", desc: "1000×300mm sluice boxes, 750–1200kg/h. Single and double models with or without 20 000L petrol pump.", cat: "gold" },
  { code: "GEO-CLN-01", name: "Gold Prospecting Cleanup Systems", desc: "Sluice Box, Adventure Kit, Fine Gold Miller Table, and Blue Bowl System. Compact, portable, and complete.", cat: "gold" },
  { code: "GEO-MAT-01", name: "Gold Sluice Box Matting", desc: "Fine Gold (yellow), Miner's Moss (8mm thick), Fine-Ribbed, Vortex Rubber, and V-Ribbed matting options.", cat: "gold" },
  { code: "GEO-CH-MILLCR", name: "Sample Chain Mill Crusher", desc: "Attaches to baby grinder. Crushes rock up to 40mm, mills to ~300 microns for gold ore sampling.", cat: "gold" },
  { code: "GEO-VBCL-SCRN", name: "Vibrating Classifier Screen", desc: "4-stage vibrating screen: 1mm, 500 micron, 150 micron, 75 micron mesh sizes. For shaker table prep.", cat: "gold" },
];

const catMeta: { id: Cat; label: string; short: string; color: string; bg: string; accent: string }[] = [
  { id: "all", label: "All Products", short: "All", color: NAVY2, bg: "#f1f5f9", accent: "#e2e8f0" },
  { id: "stationery", label: "Stationery & Labelling", short: "Stationery", color: "#1d4ed8", bg: "#eff6ff", accent: "#bfdbfe" },
  { id: "storage", label: "Sample Storage", short: "Storage", color: "#15803d", bg: "#f0fdf4", accent: "#bbf7d0" },
  { id: "core", label: "Core & More", short: "Core & More", color: "#c2410c", bg: "#fff7ed", accent: "#fed7aa" },
  { id: "navigation", label: "Exploration & Navigation", short: "Navigation", color: "#6d28d9", bg: "#faf5ff", accent: "#ddd6fe" },
  { id: "gold", label: "Gold Mining Accessories", short: "Gold Mining", color: "#b45309", bg: "#fffbeb", accent: "#fde68a" },
];

export default function Catalogue() {
  const [active, setActive] = useState<Cat>("all");
  const [search, setSearch] = useState("");
  const [quoteProduct, setQuoteProduct] = useState<Product | null>(null);
  const [qForm, setQForm] = useState({ name: "", email: "", qty: "", message: "" });
  const [qErrors, setQErrors] = useState<Record<string, string>>({});
  const [qSent, setQSent] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = quoteProduct ? "hidden" : "";
    if (!quoteProduct) { setQForm({ name: "", email: "", qty: "", message: "" }); setQErrors({}); setQSent(false); }
    return () => { document.body.style.overflow = ""; };
  }, [quoteProduct]);

  const filtered = allProducts.filter(p => {
    const matchCat = active === "all" || p.cat === active;
    const q = search.toLowerCase();
    return matchCat && (!q || p.name.toLowerCase().includes(q) || p.code.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  });

  const counts: Record<Cat, number> = {
    all: allProducts.length,
    stationery: allProducts.filter(p => p.cat === "stationery").length,
    storage: allProducts.filter(p => p.cat === "storage").length,
    core: allProducts.filter(p => p.cat === "core").length,
    navigation: allProducts.filter(p => p.cat === "navigation").length,
    gold: allProducts.filter(p => p.cat === "gold").length,
  };

  const setQ = (k: string, v: string) => { setQForm(f => ({ ...f, [k]: v })); setQErrors(e => ({ ...e, [k]: "" })); };
  const openQuote = (p: Product) => setQuoteProduct(p);
  const closeQuote = () => setQuoteProduct(null);

  const submitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!qForm.name.trim()) errs.name = "Required";
    if (!qForm.email.trim()) errs.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(qForm.email)) errs.email = "Invalid email";
    setQErrors(errs);
    if (Object.keys(errs).length > 0) return;
    const body = [`Product: ${quoteProduct!.name}`, `Code: ${quoteProduct!.code}`, ``, `Name: ${qForm.name}`, `Email: ${qForm.email}`, qForm.qty ? `Qty/Specs: ${qForm.qty}` : "", ``, `Message:`, qForm.message || "(none)"].filter(v => v !== undefined).join("\n");
    window.location.href = `mailto:sales@biazointernational.com?subject=${encodeURIComponent(`Quote: ${quoteProduct!.name} (${quoteProduct!.code})`)}&body=${encodeURIComponent(body)}`;
    setQSent(true);
  };

  const activeMeta = catMeta.find(c => c.id === active)!;

  return (
    <div style={{ fontFamily: IN, color: NAVY2, background: "#fff", minHeight: "100vh" }}>

      {/* TOP BAR */}
      <div style={{ background: NAVY, borderBottom: "1px solid #1e293b", padding: "8px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#475569", fontSize: 12 }}>🌍 UAE — Uganda &nbsp;|&nbsp; RAKEZ Business Zone, Ras Al Khaimah</span>
          <div style={{ display: "flex", gap: 24, fontSize: 12 }}>
            <a href="tel:+971524860664" className="bz-nav-link" style={{ color: "#94a3b8", textDecoration: "none" }}>+971 52 486 0664</a>
            <a href="mailto:sales@biazointernational.com" className="bz-nav-link" style={{ color: "#94a3b8", textDecoration: "none" }}>sales@biazointernational.com</a>
          </div>
        </div>
      </div>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ fontFamily: PF, fontSize: 21, fontWeight: 700, letterSpacing: "-0.3px", textDecoration: "none", color: NAVY2 }}>
            BIAZO <span style={{ color: AMBER }}>INTL.</span>
          </a>
          <div style={{ display: "flex", gap: 32, fontSize: 13, fontWeight: 500, letterSpacing: 0.3 }}>
            {[["/",'Home'],["/#about","About"],["/#products","Products"],["/#contact","Contact"]].map(([href, label]) => (
              <a key={label} href={href} className="bz-nav-link" style={{ color: NAVY2, textDecoration: "none", padding: "4px 0" }}>{label}</a>
            ))}
            <span style={{ color: AMBER, fontWeight: 700, padding: "4px 0", borderBottom: `2px solid ${AMBER}` }}>Catalogue</span>
          </div>
          <a href="mailto:sales@biazointernational.com" className="bz-btn" style={{ background: AMBER, color: NAVY2, fontWeight: 700, fontSize: 13, padding: "10px 22px", textDecoration: "none", letterSpacing: 0.5 }}>
            Get a Quote
          </a>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ background: NAVY, color: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 0" }}>
          <a href="/" style={{ color: "#475569", textDecoration: "none", fontSize: 13, display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 36 }}>
            ← Back to Home
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ width: 40, height: 2, background: AMBER }} />
            <span style={{ color: AMBER, fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Geological Catalogue 2026/27</span>
          </div>
          <h1 style={{ fontFamily: PF, fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: 16, letterSpacing: "-1px" }}>
            Geological <span style={{ color: AMBER, fontStyle: "italic" }}>Equipment</span> Catalogue
          </h1>
          <p style={{ color: "#475569", fontSize: 16, maxWidth: 580, lineHeight: 1.8, marginBottom: 10 }}>
            Professional geological, mining, and exploration equipment — stationery, sample storage, core handling, navigation tools, and gold mining accessories.
          </p>
          <p style={{ color: "#334155", fontSize: 12, fontStyle: "italic", marginBottom: 56 }}>
            Note: Goods supplied may vary in detail to those depicted. Products are subject to availability.
          </p>

          {/* Category stat tabs */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", borderTop: "1px solid #1e293b" }}>
            {catMeta.slice(1).map(c => (
              <button key={c.id} onClick={() => setActive(c.id)}
                style={{ padding: "24px 16px", textAlign: "center", cursor: "pointer", background: active === c.id ? "#0f172a" : "transparent", border: "none", borderBottom: active === c.id ? `3px solid ${AMBER}` : "3px solid transparent", color: "#fff", transition: "all 0.15s" }}>
                <div style={{ fontFamily: PF, fontSize: 32, fontWeight: 700, color: active === c.id ? AMBER : "#334155" }}>{counts[c.id]}</div>
                <div style={{ fontSize: 11, color: active === c.id ? "#94a3b8" : "#334155", marginTop: 6, lineHeight: 1.4 }}>{c.short}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FILTERS */}
      <div style={{ position: "sticky", top: 68, zIndex: 50, background: "#fff", borderBottom: "1px solid #e2e8f0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "14px 24px", display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {catMeta.map(c => (
              <button key={c.id} onClick={() => setActive(c.id)} className="bz-filter-btn"
                style={{ padding: "7px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", border: active === c.id ? `1.5px solid ${c.color}` : "1.5px solid #e2e8f0", background: active === c.id ? c.bg : "#fff", color: active === c.id ? c.color : "#94a3b8", letterSpacing: 0.3 }}>
                {c.short} ({counts[c.id]})
              </button>
            ))}
          </div>
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#94a3b8", fontSize: 14 }}>🔍</span>
            <input type="text" placeholder="Search products or codes…" value={search} onChange={e => setSearch(e.target.value)}
              style={{ padding: "9px 16px 9px 38px", fontSize: 13, border: "1.5px solid #e2e8f0", outline: "none", width: 260, fontFamily: IN, color: NAVY2 }} />
          </div>
        </div>
      </div>

      {/* GRID */}
      <div style={{ background: "#f8fafc", minHeight: 500 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px 100px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
            <p style={{ color: "#94a3b8", fontSize: 13 }}>
              Showing <strong style={{ color: NAVY2 }}>{filtered.length}</strong> product{filtered.length !== 1 ? "s" : ""}
              {active !== "all" ? <span> in <span style={{ color: activeMeta.color }}>{activeMeta.label}</span></span> : ""}
              {search ? ` matching "${search}"` : ""}
            </p>
            {search && (
              <button onClick={() => setSearch("")} style={{ background: "none", border: "none", color: "#94a3b8", fontSize: 13, cursor: "pointer", textDecoration: "underline", fontFamily: IN }}>Clear search</button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "96px 24px" }}>
              <div style={{ fontFamily: PF, fontSize: 48, color: "#e2e8f0", marginBottom: 16 }}>⊘</div>
              <p style={{ fontSize: 18, color: "#94a3b8", fontFamily: PF }}>No products match your search.</p>
              <button onClick={() => { setSearch(""); setActive("all"); }} style={{ marginTop: 16, background: "none", border: "none", color: AMBER, fontSize: 14, cursor: "pointer", fontFamily: IN, textDecoration: "underline" }}>
                Clear filters
              </button>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {filtered.map(p => {
                const meta = catMeta.find(c => c.id === p.cat)!;
                return (
                  <div key={p.code} className="bz-card" style={{ background: "#fff", border: "1px solid #e2e8f0", display: "flex", flexDirection: "column", cursor: "default" }}>
                    <div style={{ padding: "24px 24px 16px", flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                        <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, padding: "4px 10px", background: meta.bg, color: meta.color, border: `1px solid ${meta.accent}` }}>
                          {meta.short}
                        </span>
                        <span style={{ fontSize: 11, fontFamily: "monospace", color: "#cbd5e1", letterSpacing: 0.5 }}>{p.code}</span>
                      </div>
                      <div style={{ fontFamily: PF, fontWeight: 700, fontSize: 16, marginBottom: 10, lineHeight: 1.35, color: NAVY2 }}>{p.name}</div>
                      <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.7 }}>{p.desc}</p>
                    </div>
                    <div style={{ borderTop: "1px solid #f1f5f9", padding: "14px 24px", display: "flex", gap: 10, alignItems: "center" }}>
                      <button onClick={() => openQuote(p)} className="bz-quote-btn"
                        style={{ flex: 1, background: NAVY2, color: "#fff", fontSize: 12, fontWeight: 700, padding: "10px 0", border: "none", cursor: "pointer", fontFamily: IN, letterSpacing: 0.5 }}>
                        Request a Quote →
                      </button>
                      <a href={`https://wa.me/971524860664?text=${encodeURIComponent(`Hi, I'd like a quote for: ${p.name} (${p.code})`)}`}
                        target="_blank" rel="noopener noreferrer" title="WhatsApp" className="bz-wa-btn"
                        style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, background: "#25D366", borderRadius: "50%", textDecoration: "none", flexShrink: 0, boxShadow: "0 2px 8px rgba(37,211,102,0.3)" }}>
                        <svg viewBox="0 0 32 32" width="18" height="18" fill="#fff"><path d="M16 2C8.268 2 2 8.268 2 16c0 2.492.664 4.83 1.82 6.852L2 30l7.352-1.793A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.29 19.488c-.344.172-.658.402-1.002.23-.824-.355-1.609-.848-2.32-1.406-.573-.46-1.09-.98-1.55-1.543-.23-.287-.402-.344-.746-.172-.574.287-1.18.516-1.783.746-.344.115-.574.057-.832-.172-.832-.746-1.551-1.607-2.121-2.58-.287-.516-.172-.803.316-1.09.344-.2.66-.43.975-.66.316-.23.258-.516.086-.803-.402-.688-.805-1.377-1.092-2.121-.172-.43-.43-.574-.861-.516-.832.115-1.52.516-2.006 1.205-.43.602-.43 1.262-.172 1.949.602 1.607 1.492 3.012 2.582 4.273 1.262 1.434 2.695 2.668 4.33 3.613.832.488 1.721.861 2.639 1.148.861.258 1.693.172 2.496-.172.66-.287 1.205-.746 1.492-1.434.115-.258.115-.516.057-.803-.057-.172-.258-.258-.488-.43z"/></svg>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* CONTACT CTA */}
      <div style={{ background: NAVY2, padding: "72px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 40 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 32, height: 2, background: AMBER }} />
              <span style={{ color: AMBER, fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Get in Touch</span>
            </div>
            <h2 style={{ fontFamily: PF, fontSize: 32, fontWeight: 700, color: "#fff", marginBottom: 8, letterSpacing: "-0.3px" }}>Need a custom quote?</h2>
            <p style={{ color: "#475569", fontSize: 15 }}>Our team is ready to help with pricing, availability, and bulk orders.</p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="mailto:sales@biazointernational.com" className="bz-btn" style={{ background: AMBER, color: NAVY2, fontWeight: 700, fontSize: 14, padding: "15px 28px", textDecoration: "none", letterSpacing: 0.5 }}>Email Us</a>
            <a href="tel:+971524860664" className="bz-btn-outline" style={{ border: "1px solid #334155", color: "#fff", fontWeight: 600, fontSize: 14, padding: "15px 28px", textDecoration: "none", letterSpacing: 0.5 }}>+971 52 486 0664</a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#020617", padding: "28px 24px", borderTop: "1px solid #0f172a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ fontFamily: PF, fontSize: 18, fontWeight: 700, color: "#fff" }}>BIAZO <span style={{ color: AMBER }}>INTL.</span></div>
          <p style={{ color: "#1e293b", fontSize: 12 }}>© {new Date().getFullYear()} Biazo International General Trading FZ-LLC. All rights reserved.</p>
          <a href="http://www.biazointernational.com" style={{ color: "#1e293b", fontSize: 12, textDecoration: "none" }}>www.biazointernational.com</a>
        </div>
      </footer>

      {/* QUOTE MODAL */}
      {quoteProduct && (
        <div onClick={e => { if (e.target === e.currentTarget) closeQuote(); }}
          style={{ position: "fixed", inset: 0, zIndex: 500, background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, backdropFilter: "blur(4px)" }}>
          <div ref={modalRef} style={{ background: SLATE, border: "1px solid #334155", width: "100%", maxWidth: 540, maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ padding: "24px 28px 20px", borderBottom: "1px solid #334155", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 24, height: 2, background: AMBER }} />
                  <span style={{ color: AMBER, fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>Request a Quote</span>
                </div>
                <div style={{ color: "#fff", fontFamily: PF, fontWeight: 700, fontSize: 20, lineHeight: 1.3 }}>{quoteProduct.name}</div>
                <div style={{ color: "#475569", fontSize: 11, fontFamily: "monospace", textTransform: "uppercase", letterSpacing: 1, marginTop: 4 }}>{quoteProduct.code}</div>
              </div>
              <button onClick={closeQuote} style={{ background: "none", border: "none", color: "#475569", fontSize: 22, cursor: "pointer", padding: 4, lineHeight: 1 }}>✕</button>
            </div>
            <div style={{ padding: 28 }}>
              {qSent ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ width: 56, height: 56, background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, margin: "0 auto 20px" }}>✅</div>
                  <h3 style={{ color: "#fff", fontFamily: PF, fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Email client opened!</h3>
                  <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>Your quote request for <strong style={{ color: "#fff" }}>{quoteProduct.name}</strong> is pre-filled. Just hit Send.</p>
                  <button onClick={closeQuote} className="bz-btn" style={{ background: AMBER, color: NAVY2, fontWeight: 700, fontSize: 14, padding: "11px 28px", border: "none", cursor: "pointer", fontFamily: IN }}>Close</button>
                </div>
              ) : (
                <form onSubmit={submitQuote} noValidate>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                    <div>
                      <label style={{ display: "block", color: "#64748b", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 6 }}>Full Name *</label>
                      <input type="text" placeholder="John Smith" value={qForm.name} onChange={e => setQ("name", e.target.value)} style={{ width: "100%", padding: "10px 14px", background: NAVY2, border: `1px solid ${qErrors.name ? "#ef4444" : "#334155"}`, color: "#fff", fontSize: 13, fontFamily: IN, outline: "none", boxSizing: "border-box" as const }} />
                      {qErrors.name && <div style={{ color: "#ef4444", fontSize: 11, marginTop: 3 }}>{qErrors.name}</div>}
                    </div>
                    <div>
                      <label style={{ display: "block", color: "#64748b", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 6 }}>Email *</label>
                      <input type="email" placeholder="you@company.com" value={qForm.email} onChange={e => setQ("email", e.target.value)} style={{ width: "100%", padding: "10px 14px", background: NAVY2, border: `1px solid ${qErrors.email ? "#ef4444" : "#334155"}`, color: "#fff", fontSize: 13, fontFamily: IN, outline: "none", boxSizing: "border-box" as const }} />
                      {qErrors.email && <div style={{ color: "#ef4444", fontSize: 11, marginTop: 3 }}>{qErrors.email}</div>}
                    </div>
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <label style={{ display: "block", color: "#64748b", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 6 }}>Quantity / Specifications</label>
                    <input type="text" placeholder="e.g. 50 units, HQ size, 220V" value={qForm.qty} onChange={e => setQ("qty", e.target.value)} style={{ width: "100%", padding: "10px 14px", background: NAVY2, border: "1px solid #334155", color: "#fff", fontSize: 13, fontFamily: IN, outline: "none", boxSizing: "border-box" as const }} />
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: "block", color: "#64748b", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 6 }}>Additional Message</label>
                    <textarea rows={3} placeholder="Delivery location, timeline, or any other details…" value={qForm.message} onChange={e => setQ("message", e.target.value)} style={{ width: "100%", padding: "10px 14px", background: NAVY2, border: "1px solid #334155", color: "#fff", fontSize: 13, fontFamily: IN, outline: "none", resize: "vertical", boxSizing: "border-box" as const }} />
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <button type="submit" className="bz-btn" style={{ flex: 1, background: AMBER, color: NAVY2, fontWeight: 700, fontSize: 14, padding: "14px 0", border: "none", cursor: "pointer", fontFamily: IN, letterSpacing: 0.5 }}>
                      Send Quote Request →
                    </button>
                    <a href={`https://wa.me/971524860664?text=${encodeURIComponent(`Hi, I'd like a quote for:\nProduct: ${quoteProduct.name}\nCode: ${quoteProduct.code}`)}`}
                      target="_blank" rel="noopener noreferrer" className="bz-btn"
                      style={{ display: "flex", alignItems: "center", gap: 8, background: "#25D366", color: "#fff", fontWeight: 700, fontSize: 13, padding: "14px 18px", textDecoration: "none", flexShrink: 0 }}>
                      <svg viewBox="0 0 32 32" width="16" height="16" fill="#fff"><path d="M16 2C8.268 2 2 8.268 2 16c0 2.492.664 4.83 1.82 6.852L2 30l7.352-1.793A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.29 19.488c-.344.172-.658.402-1.002.23-.824-.355-1.609-.848-2.32-1.406-.573-.46-1.09-.98-1.55-1.543-.23-.287-.402-.344-.746-.172-.574.287-1.18.516-1.783.746-.344.115-.574.057-.832-.172-.832-.746-1.551-1.607-2.121-2.58-.287-.516-.172-.803.316-1.09.344-.2.66-.43.975-.66.316-.23.258-.516.086-.803-.402-.688-.805-1.377-1.092-2.121-.172-.43-.43-.574-.861-.516-.832.115-1.52.516-2.006 1.205-.43.602-.43 1.262-.172 1.949.602 1.607 1.492 3.012 2.582 4.273 1.262 1.434 2.695 2.668 4.33 3.613.832.488 1.721.861 2.639 1.148.861.258 1.693.172 2.496-.172.66-.287 1.205-.746 1.492-1.434.115-.258.115-.516.057-.803-.057-.172-.258-.258-.488-.43z"/></svg>
                      WhatsApp
                    </a>
                  </div>
                  <p style={{ color: "#334155", fontSize: 11, marginTop: 10, textAlign: "center" }}>Submitting opens your email client with this request pre-filled.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* WHATSAPP */}
      <a href="https://wa.me/971524860664?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20products%20in%20your%20geological%20catalogue." target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp" className="bz-wa-btn"
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
