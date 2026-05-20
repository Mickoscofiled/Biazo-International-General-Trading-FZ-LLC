import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Search, ChevronRight, Tag, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

type Category = "all" | "stationery" | "storage" | "core" | "navigation" | "gold";

interface Product {
  code: string;
  name: string;
  description: string;
  category: Exclude<Category, "all">;
  tags?: string[];
}

const products: Product[] = [
  // ── Stationery & Labelling ──────────────────────────────────────
  {
    code: "PLA-FLAG50",
    name: "PVC Flagging Tapes",
    description: "Bright, highly visible 25mm × 50m PVC tape for flagging, sorting, field grading, and surveying. 12 colours available. Easy to tear and tie, no smudging on matt finish.",
    category: "stationery",
    tags: ["flagging", "marking", "surveying"],
  },
  {
    code: "GEO-FLAG-DISP",
    name: "Flagging Tape Dispenser",
    description: "Heavy-duty 600D Oxford fabric dispenser with PVC liner. Waterproof, holds 2 × 50m rolls with a plastic divider to prevent tangling. Belt loop with snap for hands-free use.",
    category: "stationery",
    tags: ["flagging", "accessory"],
  },
  {
    code: "PLA-FLAG700MM",
    name: "PVC Flags on Wire Stakes",
    description: "Fast, highly visible ground-marking flags for survey stations, sampling positions, and demarcation. Available in 500 mm, 700 mm, and 900 mm lengths. 12 colours, 100 per pack.",
    category: "stationery",
    tags: ["flagging", "marking"],
  },
  {
    code: "PLA-PINTAG-",
    name: "Pin Tags on Wire Stakes",
    description: "Bright plastic pin tags (35 mm × 80 mm head) on wire stakes for easy ground identification. Available in 7 colours, packed per colour in bundles of 100.",
    category: "stationery",
    tags: ["tagging", "marking"],
  },
  {
    code: "PLA-TRI",
    name: "Triangle Markers",
    description: "UV-stabilised plastic triangle trail markers (90 mm × 120 mm) for surveying, ecological marking, trail identification, and pest-control. 5 colours, 200 per pack.",
    category: "stationery",
    tags: ["marking", "surveying"],
  },
  {
    code: "PLA-ALUTAGS",
    name: "Alutags",
    description: "Weatherproof aluminium tags (25 mm × 75 mm, 100 mic) with wire ties for geological sample identification. Can be inscribed or written on with permanent marker. 1 000 per pack.",
    category: "stationery",
    tags: ["tagging", "aluminium", "samples"],
  },
  {
    code: "PLA-ALUEYELET",
    name: "Aluminium Labels with Copper Ties",
    description: "Reliable, weatherproof 20 mm × 100 mm aluminium labels with copper eyelets and copper ties. Details can be inscribed or written on with a permanent marker. 1 000 per pack.",
    category: "stationery",
    tags: ["tagging", "aluminium", "samples"],
  },
  {
    code: "PLA-ALUSTICK",
    name: "Pointed Aluminium Labels with Wire Ties",
    description: "23 mm × 113 mm pointed aluminium labels with wire ties. Push into soil or tie to samples. Weatherproof, 150 mic thick. 1 000 per pack.",
    category: "stationery",
    tags: ["tagging", "aluminium", "samples"],
  },
  {
    code: "PLA-EXPTAGS",
    name: "Core Tray Tags",
    description: "50 mm × 78 mm aluminium ID tags (100 mic) that slot into core tray tag holders. Writeable for depth and recovery data. 1 000 per pack. Also available 45 mm × 80 mm.",
    category: "stationery",
    tags: ["tagging", "core", "samples"],
  },
  {
    code: "LAB-STEELTAG125",
    name: "Steel Tags",
    description: "63 mm × 125 mm steel tags (150 mic) for identification of crates, boxes, and equipment. Write on with permanent marker. Available in silver, orange, and blue. 1 000 per pack.",
    category: "stationery",
    tags: ["tagging", "steel"],
  },
  {
    code: "LAB-PT63X125",
    name: "Plastic Tags with Slots — 250 mic",
    description: "Durable 63 mm × 125 mm plastic tags with two slots. Flood-coated colours. 10 colour options available. 1 000 per pack.",
    category: "stationery",
    tags: ["tagging", "plastic"],
  },
  {
    code: "LAB-PT62X125",
    name: "Plastic Tags — 600 mic",
    description: "Heavy-duty 62 mm × 125 mm plastic tags with 2 round holes. 600 mic thick for extreme durability. Available in red, yellow, white, green, and blue. 200 per pack.",
    category: "stationery",
    tags: ["tagging", "plastic"],
  },
  {
    code: "LAB-BUFF105X50",
    name: "Buff Tags",
    description: "200 gsm board paper labels laminated on one side for tear resistance. One hole for tying. Standard sizes: 50 mm × 105 mm (white) and 40 mm × 70 mm (manila). 1 000 per roll.",
    category: "stationery",
    tags: ["tagging", "paper"],
  },
  {
    code: "NUR-TMARKSTRLRG",
    name: "Large Plastic T-Markers",
    description: "UV-stabilised plastic T-markers for ground identification. Push into soil and mark with indelible ink. Straight bed, angled bed, and straight T-marker styles. 460 mm full length. 100 per pack.",
    category: "stationery",
    tags: ["marking", "ground"],
  },
  {
    code: "LAB-PVC155MM16",
    name: "PVC Self-Tie Labels",
    description: "Weatherproof 16 mm × 155 mm vinyl labels with integrated tie — no extra fasteners needed. 10 colours. Ideal for core trays, sample bags, drill holes, and monitoring points. 1 000 per pack.",
    category: "stationery",
    tags: ["tagging", "labelling"],
  },
  {
    code: "OS240",
    name: "A5 Field Books",
    description: "A5 field notebooks, wet-strength series. Various page templates: OS240, OS241, OS244–OS251. Designed for rugged outdoor use and data recording.",
    category: "stationery",
    tags: ["notebook", "fieldwork"],
  },
  {
    code: "RITR-540F",
    name: "Rite in the Rain Fabrikoid Cover Geological Book",
    description: "All-weather geological field book with 20 geological reference pages, rulers, scales, conversion tables, and a removable rugged 2-sided photo scale.",
    category: "stationery",
    tags: ["notebook", "fieldwork", "rite in the rain"],
  },
  {
    code: "RITR-350F",
    name: "Rite in the Rain Fabrikoid Cover Field Book",
    description: "All-weather field book with imperial and metric rulers, conversion tables, and map scale. Fabrikoid cover for outdoor durability.",
    category: "stationery",
    tags: ["notebook", "fieldwork", "rite in the rain"],
  },
  {
    code: "RITR-295",
    name: "Rite in the Rain Field Desk",
    description: "Lightweight field desk (248 mm × 406 mm × 57 mm, 590 g) with a sturdy writing surface, strong exterior clip, and internal storage for documents and writing essentials.",
    category: "stationery",
    tags: ["fieldwork", "desk", "rite in the rain"],
  },
  {
    code: "RITR-970",
    name: "Rite in the Rain Dirtbag Pen Organizer",
    description: "Rugged TPU organizer with sealed seams (203 mm × 121 mm × 19 mm, 100 g). Exterior pen slots, card pockets, and secured zippered compartment for harsh conditions.",
    category: "stationery",
    tags: ["organizer", "rite in the rain"],
  },
  {
    code: "RITR-OR56",
    name: "Rite in the Rain Lead Holder",
    description: "Industrial gravity-fed lead holder with glove-friendly design. Uses extra-thick 5.6 mm lead that marks wood and rough surfaces. Includes refills.",
    category: "stationery",
    tags: ["writing", "rite in the rain"],
  },
  {
    code: "RITR-OR11",
    name: "Rite in the Rain All-Weather Pen",
    description: "All-weather click pen with triangular file-textured grip. Works in extreme conditions — through water, sweat, grease, and mud. Black ink.",
    category: "stationery",
    tags: ["writing", "rite in the rain"],
  },
  {
    code: "RITR-372",
    name: "Rite in the Rain Loose Leaf Pages",
    description: "Water-resistant, archival-grade 118 mm × 178 mm paper. Withstands water, sweat, grease, and mud. 100 sheets per pack.",
    category: "stationery",
    tags: ["paper", "rite in the rain"],
  },
  {
    code: "GEO-CHINAM",
    name: "Peel-off China Markers",
    description: "Ideal for core/rock markings and photo labelling. Resistant to crumbling and melting on hot or rough surfaces. No sharpening — simply peel back the wrapper. 12 per pack (one colour).",
    category: "stationery",
    tags: ["marking", "writing"],
  },
  {
    code: "GEO-EDD",
    name: "Edding Paint Markers",
    description: "Permanent, waterproof, and UV-tested weatherproof markers with bullet-shaped tips. 10 per pack, one colour per pack.",
    category: "stationery",
    tags: ["marking", "paint"],
  },
  {
    code: "GEO-RBX-WH",
    name: "Rilbex Paint Markers",
    description: "Quick-drying industrial permanent markers for rough, rusty, oily, wet, and smooth surfaces. Weather-resistant, temperature-resistant up to 1 000 °C. 50 ml, 10 per pack. White and yellow available.",
    category: "stationery",
    tags: ["marking", "paint", "industrial"],
  },
  {
    code: "GEO-PROTRACTOR",
    name: "Douglas Protractor & Steel Protractor",
    description: "Douglas protractor for field use plus a steel protractor with hinged arm. Essential tools for angular measurement in geological mapping and surveying.",
    category: "stationery",
    tags: ["measurement", "surveying"],
  },
  {
    code: "GEO-INCLIN",
    name: "SOLA Inclinometer",
    description: "Precision inclinometer for measuring inclination and dip angles in the field. Robust construction for outdoor use.",
    category: "stationery",
    tags: ["measurement", "surveying"],
  },
  {
    code: "GEO-TRISC",
    name: "Triangular Scales",
    description: "Professional triangular scale rulers for map work and technical drawing in the field.",
    category: "stationery",
    tags: ["measurement", "map"],
  },
  {
    code: "GEO-SAMPTICKET",
    name: "Sample Ticket Book",
    description: "Pre-printed sample ticket books for systematic recording of sample data in the field.",
    category: "stationery",
    tags: ["recording", "samples"],
  },
  {
    code: "GEO-SPRAY",
    name: "Dy-Mark Spray Paint",
    description: "Industrial spray paint for marking rocks, ground, and equipment in the field. Highly visible colours.",
    category: "stationery",
    tags: ["marking", "paint"],
  },
  {
    code: "GEO-BARRCONE",
    name: "Mining Barrier Cones",
    description: "High-visibility safety cones for hazard demarcation in mining and field operations.",
    category: "stationery",
    tags: ["safety", "demarcation"],
  },

  // ── Sample Storage ───────────────────────────────────────────────
  {
    code: "GEO-CALICO",
    name: "Calico Sample Bags",
    description: "Durable, breathable calico cotton bags for storing and transporting geological samples. Ideal for rock and soil samples requiring air circulation during storage and transport.",
    category: "storage",
    tags: ["sample bags", "cotton"],
  },
  {
    code: "GEO-BULK",
    name: "Bulk Sample Bags",
    description: "Heavy-duty bulk bags for storing and transporting large quantities of geological material. Various sizes available.",
    category: "storage",
    tags: ["sample bags", "bulk"],
  },
  {
    code: "GEO-GEOCHENV",
    name: "Geochem Envelopes",
    description: "Kraft paper envelopes designed for geochemical sample storage. Pre-printed for data recording in the field.",
    category: "storage",
    tags: ["envelopes", "geochemistry"],
  },
  {
    code: "GEO-FORENS",
    name: "Forensic Sample Bags",
    description: "Tamper-evident forensic-grade bags for secure chain-of-custody sample storage. Suitable for high-value and sensitive mineral samples.",
    category: "storage",
    tags: ["sample bags", "forensic"],
  },
  {
    code: "GEO-ZIPPER",
    name: "Zipper Sample Bags",
    description: "Resealable zipper bags for convenient and secure sample storage. Various sizes available for core chips, soil, and rock samples.",
    category: "storage",
    tags: ["sample bags", "zipper"],
  },
  {
    code: "GEO-SAMPBAG",
    name: "Sample Bags",
    description: "General-purpose field sample bags for geological, soil, and mineral samples. Various sizes and materials available.",
    category: "storage",
    tags: ["sample bags"],
  },

  // ── Core & More ──────────────────────────────────────────────────
  {
    code: "GEO-COREMACH",
    name: "Mobile Core Splitting Machine",
    description: "Mobile core splitter for cross-cutting various rock core samples safely and accurately. Features a core guide and blade covers for maximum safety. Available in 220 V (2.2 kW) and 380 V. Wooden crate packaging also available.",
    category: "core",
    tags: ["core splitting", "machinery"],
  },
  {
    code: "GEO-BLADE300CS30",
    name: "Core Splitting Saw Blades",
    description: "Diamond saw blades optimised for hard and soft stone. Fits all core splitting machines. Available in 300 mm and 350 mm diameters for CS30 (hard stone) and CS50 (soft stone).",
    category: "core",
    tags: ["core splitting", "blades"],
  },
  {
    code: "GEO-CORETRAYST",
    name: "Steel Core Trays",
    description: "High-grade Zincalume steel core trays with deep profile, raised side walls, dual handle system, and 100% residual water drainage. Available welded or prefabricated. Various standard sizes.",
    category: "core",
    tags: ["core trays", "steel", "storage"],
  },
  {
    code: "GEO-CORETRAYPL",
    name: "Plastic Core Trays",
    description: "UV-stabilised polypropylene core trays for harsh exploration drilling environments. Exceptionally durable and long-lasting. Various standard sizes available.",
    category: "core",
    tags: ["core trays", "plastic", "storage"],
  },
  {
    code: "GEO-CTLID-1M-PL",
    name: "Universal Lids for Core Trays",
    description: "Plastic and steel lids for 1 m and 1.5 m core trays. Designed for safety and easy handling during transport and storage.",
    category: "core",
    tags: ["core trays", "lids"],
  },
  {
    code: "GEO-BRNQGUIDE",
    name: "Broken Core Guides",
    description: "Aluminium guides for holding and guiding broken core through a spinning diamond blade. Holds core up to 450 mm long. Available in NQ (46.7 mm) and HQ (63.5 mm) core diameters.",
    category: "core",
    tags: ["core guides", "splitting"],
  },
  {
    code: "GEO-GUIDEHQV",
    name: '"V" Core Guides',
    description: 'V-shaped open-design guides for accurate lengthwise cutting on core cutting machines. Keeps hands safely away from the blade. Available for HQ-BQ (36.4–63.5 mm) and PQ (86 mm) core diameters.',
    category: "core",
    tags: ["core guides", "splitting"],
  },
  {
    code: "GEO-CORELIFTER",
    name: "Core Lifter",
    description: "Zincalume steel tool for extracting tight-fitting core samples from trays. Includes a ruler along one side and has no sharp edges. Used to lift NQ2 from NQ trays, etc.",
    category: "core",
    tags: ["core handling"],
  },
  {
    code: "GEO-ROCKET",
    name: "Core Orientator / Rocket Launcher",
    description: "Non-magnetic portable device for accurate core orientation and dip measurement. Holds BQ to PQ core sizes up to 60 cm. Adjustable dip angle 0°–90°. Heavy-duty lockable hinges rated to 150 kg. 2.7 kg.",
    category: "core",
    tags: ["core orientation", "measurement"],
  },
  {
    code: "GEO-KENH",
    name: "Kenometer Core Orientation Tool",
    description: "Gives Alpha & Beta angle measurements. Anodised aluminium body with laser-etched permanent graduations and ellipses for quick measurements. Available for HQ and NQ 2 core sizes.",
    category: "core",
    tags: ["core orientation", "measurement"],
  },
  {
    code: "GEO-COREBLOCK",
    name: "Plastic Core Blocks",
    description: "Universal yellow/green core blocks with space to indicate depth, loss/gain, and core recovered. 500 per pack.",
    category: "core",
    tags: ["core", "labelling"],
  },
  {
    code: "GEO-GONPLEXI",
    name: "Goniometer (Ezy Logger)",
    description: "Perspex core measurement tool measuring Alpha and Beta angles, used to read bedding, structure, and fractures on core samples. Available in standard BQ/NQ/HQ/PQ sizes; custom sizes on request.",
    category: "core",
    tags: ["core measurement", "goniometer"],
  },
  {
    code: "GEO-CHIPTRAY",
    name: "Rock Chip Trays",
    description: "UV-stabilised clear plastic trays with 10 compartments, interlockable to 20 compartments. Sturdy hinges and clips. 100 per pack.",
    category: "core",
    tags: ["sample trays", "rock chips"],
  },
  {
    code: "GEO-RIFFLER3",
    name: "Riffler Split 3 Tier",
    description: "Mobile riffler on wheels with two bins. Delivers 12.5% (1/8th) sample split straight into a bin or bag in one pass. 16-slot, 32.2 mm. 650 mm × 1000 mm × 650 mm, 44 kg.",
    category: "core",
    tags: ["splitting", "sampling"],
  },
  {
    code: "GEO-SIEVE200MM",
    name: "Sieves",
    description: "200 mm diameter test sieves in steel or brass with 5 mm punched plate. Lids and receivers available. Various mesh apertures and types available on request.",
    category: "core",
    tags: ["sieves", "screening"],
  },
  {
    code: "GEO-FLEXISIEVERI",
    name: "Flexi Sieve Ring & Lid",
    description: "Reusable 200 mm plastic sieve system with lid, receiver, and two clip-together rings. Mesh sold separately.",
    category: "core",
    tags: ["sieves", "screening"],
  },
  {
    code: "GEO-OPTSQUARE",
    name: "Optical Square",
    description: "Surveying tool for setting out right angles and determining offsets. Ideal for rudimentary grids or sampling programs.",
    category: "core",
    tags: ["surveying", "measurement"],
  },
  {
    code: "GEO-ACIDBOTTLE",
    name: "Acid Bottle",
    description: "30 ml plastic acid bottle with removable tip for easy refilling. Used for acid testing of rock samples in the field.",
    category: "core",
    tags: ["lab", "testing"],
  },
  {
    code: "OTH-ALUSCOOP1LT",
    name: "Metal Measuring Scoop",
    description: "1-litre stainless steel measuring scoop for convenient scooping and measuring of quantities in the field or laboratory.",
    category: "core",
    tags: ["lab", "measurement"],
  },
  {
    code: "GEO-MDT410X285",
    name: "Metal Sample Drying Tray",
    description: "Stainless steel tray (410 mm × 285 mm × 75 mm) for drying samples in the lab or field.",
    category: "core",
    tags: ["lab", "drying"],
  },
  {
    code: "GEO-MAGGLASSX40",
    name: "Hand Lens Magnifiers",
    description: "Superior optical quality field magnifiers. Options include 40× plastic illuminated loupe (built-in LEDs), 20× single metal lens, 10× single metal lens, and 10×/20× double metal lens. Chrome-plated frames with leather or lined cases.",
    category: "core",
    tags: ["magnifier", "field tools"],
  },
  {
    code: "GEO-AUG-BT131",
    name: "Motorised Earth Auger (STIHL BT131)",
    description: "Powerful 1.4 kW petrol engine handheld earth auger for digging holes for posts, fences, and field sampling. Lightweight for large-scale work. 90 mm auger bit sold separately.",
    category: "core",
    tags: ["auger", "drilling"],
  },
  {
    code: "PLA-SOILSAM50",
    name: "Soil Sampler",
    description: "Stainless steel 500 mm soil sampler for determining soil composition, pH, and nutrient content. Insert vertically, twist 180°, withdraw sample.",
    category: "core",
    tags: ["soil", "sampling"],
  },
  {
    code: "GEO-PINCH-1.5",
    name: "Aluminium Pinch Bars",
    description: "Lightweight aluminium pinch bars for underground barring with ribbed hexagonal tube for secure grip. Available in 1.2 m, 1.5 m, 1.8 m, and 2.4 m lengths. Includes hand guards.",
    category: "core",
    tags: ["underground", "safety"],
  },
  {
    code: "GEO-STEM-90",
    name: "Stemming Plugs",
    description: "Plastic stemming plugs for retaining explosive energy in blast holes. 90 mm (red) and 120 mm (grey) sizes. Redirects energy into hole walls for enhanced containment.",
    category: "core",
    tags: ["blasting", "mining"],
  },
  {
    code: "GEO-HOSE20X30",
    name: "Anti-Static Loading Hose",
    description: "30 m roll of anti-static PVC hose for loading explosives in mine blasting. Complies with BS2050/1978 resistance requirements (3×10³ to 1×10⁶ Ω).",
    category: "core",
    tags: ["blasting", "hose"],
  },
  {
    code: "GEO-MEASUREWHL",
    name: "Rotosure Measuring Wheel",
    description: "Measuring wheel with 1 m circumference for distances up to 10 000 m. Ideal alternative to long tape measures for open field and mining use.",
    category: "core",
    tags: ["measurement", "surveying"],
  },
  {
    code: "GEO-MEASURE50M",
    name: "Measuring Tapes 50 m",
    description: "50 m fibreglass and steel measuring tapes in durable plastic frames with sturdy handle for easy winding. Both fibreglass and steel options available.",
    category: "core",
    tags: ["measurement", "tape"],
  },
  {
    code: "E30",
    name: "Estwing Rock Picks & Crack Hammers",
    description: "USA-forged one-piece steel rock picks and crack hammers. Models include leather-grip (E30), vinyl shock-reduction grip (E3-22P), long vinyl handle (E3-23LP), and 4lb crack hammer (B3-4LB). Popular with prospectors and contractors.",
    category: "core",
    tags: ["rock picks", "hammers", "estwing"],
  },
  {
    code: "GEO-NITON",
    name: "Niton X-Ray Fluorescence Spectrometers",
    description: "Portable XRF spectrometers for rapid in-field elemental analysis of rock and soil samples. Contact us for current models and pricing.",
    category: "core",
    tags: ["XRF", "analysis", "spectrometer"],
  },
  {
    code: "GEO-WORKWEAR",
    name: "Bisley Workwear",
    description: "Professional field workwear including sleeveless field vests, Miner's belts, and vehicle first aid kits. Designed for comfort and safety in mining and geological field operations.",
    category: "core",
    tags: ["workwear", "safety", "PPE"],
  },

  // ── Exploration & Navigation ─────────────────────────────────────
  {
    code: "GEO-GARMETSE",
    name: "Garmin eTrex GPS Units",
    description: "Handheld GPS units from the Garmin eTrex range. Models include eTrex SE, eTrex 22x, and eTrex 32x for reliable navigation and waypoint marking in the field.",
    category: "navigation",
    tags: ["GPS", "navigation", "garmin"],
  },
  {
    code: "GEO-GARMAPS65S",
    name: "Garmin GPS Map 65s",
    description: "Advanced handheld GPS unit with multi-band GNSS support and large colour display. Ideal for detailed mapping and navigation in complex geological terrain.",
    category: "navigation",
    tags: ["GPS", "navigation", "garmin"],
  },
  {
    code: "GEO-BRUNTONTA3",
    name: "Brunton TruArc Compasses",
    description: "Brunton TruArc compass range: TruArc 3 (tool-free adjustable declination), TruArc 10 (Ever-North magnet, Romer scales, GPS confidence circles), TruArc 15 (sighting mirror, clinometer, level, engineer's ruler).",
    category: "navigation",
    tags: ["compass", "brunton", "navigation"],
  },
  {
    code: "GEO-BRUNTON5010",
    name: "Brunton Pocket Transit Compasses",
    description: "Professional geology transits: 5008 ComPro (polyfibre, Strike & Dip), 5020 Standard (aluminium), 5010 Geo (hinge 220°, Strike & Dip, Trend & Plunge), 5012 Axis (full 360°, simultaneous Strike & Dip, Dip Direction, Trend & Plunge, Bearing & Angle).",
    category: "navigation",
    tags: ["compass", "transit", "brunton"],
  },
  {
    code: "GEO-BRUNT-OM-SL",
    name: "Brunton Omnislope & Omnisight",
    description: "Brunton OMNISLOPE sighting inclinometer for Slope, Forestry Chain, and Percentage measurements. OMNISIGHT sighting compass with MILS, Quadrant, Reciprocal Azimuth, and Azimuth.",
    category: "navigation",
    tags: ["inclinometer", "sighting", "brunton"],
  },
  {
    code: "GEO-BRUNTON3051",
    name: "Brunton Non-Magnetic Tripod",
    description: "Aluminium and brass non-magnetic tripod for zero compass interference. Adjustable legs, brass cap with standard threads for Brunton instrument compatibility. 3040 Ball & Socket Mount required for Pocket Transit.",
    category: "navigation",
    tags: ["tripod", "brunton", "surveying"],
  },
  {
    code: "GEO-BRUNTON3040",
    name: "Brunton Ball & Socket Mount",
    description: "Non-magnetic aluminium and brass ball and socket mount. Rotates 360° vertically and horizontally, lockable. Connects Brunton Pocket Transit to monopods or tripods.",
    category: "navigation",
    tags: ["mount", "brunton", "tripod"],
  },
  {
    code: "GEO-BRUNTONWRC",
    name: "Brunton Weather-Resistant Transit Case",
    description: "Water-resistant case for Brunton 5008 & 5020 transits. Built-in belt loop (up to 50.8 mm wide), optional removable ALICE clip, snap closure. Better than leather in moist environments.",
    category: "navigation",
    tags: ["case", "brunton", "accessory"],
  },
  {
    code: "GEO-BRUNTON4090",
    name: "Brunton 4090 Collapsible Jacob's Staff",
    description: "Lightweight 3-section aluminium Jacob's Staff for measuring rock layers. Folds to fit in a backpack, extends as trekking pole. 250 mm markings for 1.5 m extension. Standard 1/4-20 UNC thread. EVA handle and padded wrist strap.",
    category: "navigation",
    tags: ["jacob's staff", "surveying", "brunton"],
  },
  {
    code: "GEO-BRUNTON3060",
    name: "Brunton 3060 Thimble Adaptor",
    description: "Jacob's Staff thimble adaptor (38 × 24 mm, 22.7 g). Press or glue onto any staff with tapered end. Standard 1/4-20 UNC thread for attaching Brunton instruments.",
    category: "navigation",
    tags: ["jacob's staff", "brunton", "accessory"],
  },
  {
    code: "GEO-BRUNTONGS",
    name: "Brunton Grain Size Card",
    description: "Transparent card stock with printed negative and positive sides for visual classification of sediments by size and shape in the field.",
    category: "navigation",
    tags: ["grain size", "sediment", "brunton"],
  },
  {
    code: "GEO-BRUNTONMMT",
    name: "Brunton Map Multi-Tool Card",
    description: "Combines inch/cm rulers, map scales, UTM grid Romer scales, and a 360° protractor with strike & dip crosshairs. Unique cut-outs for easy map plotting.",
    category: "navigation",
    tags: ["map tools", "brunton"],
  },
  {
    code: "GEO-BRUNTONQR",
    name: "Brunton Quick Reference Cards",
    description: "8-page reference card set for navigation with any map and compass. Calculate distance, determine location on topographic maps, and access field tips for outdoor exploration.",
    category: "navigation",
    tags: ["reference cards", "navigation", "brunton"],
  },
  {
    code: "GEO-MAGLITE",
    name: "Maglite Torches",
    description: "Extensive range of Maglite quality torches for field use. Spare parts also available. Contact us for specific models and pricing.",
    category: "navigation",
    tags: ["torch", "lighting"],
  },

  // ── Gold Mining Accessories ───────────────────────────────────────
  {
    code: "GEO-GLDSH-145",
    name: "Gold Shaker Table — Gemini Type",
    description: "Fine gold concentrate cleanup and sand separation shaker tables. 145 kg/h model (1.1 kW) and 350 kg/h model (3.0 kW with variable speed drive). Adjustable spray bars, water pump, inline filtration. Optional recirculation bin. Available 220 V AC or 3-phase.",
    category: "gold",
    tags: ["shaker table", "gold recovery", "processing"],
  },
  {
    code: "GEO-GLDSH-450",
    name: "Gold Shaker Table — Rougher Type",
    description: "Heavy-duty material separation shaker table processing 500–750 kg/h. 2.2 kW 380 VAC motor. Riffles, horizontal shaking motion, adjustable spray bar, valve bank, variable speed drive, and fully adjustable deck.",
    category: "gold",
    tags: ["shaker table", "gold recovery", "processing"],
  },
  {
    code: "GEO-FURN-01",
    name: "Tiny Tim Furnace",
    description: "Compact LP gas furnace for melting aluminium, gold, silver, brass, and copper. Includes blower, burner, and LP gas regulator. Max crucible diameter 110 mm (up to A3). Bundle option includes A3 graphite crucible and crucible tongs.",
    category: "gold",
    tags: ["furnace", "smelting", "gold"],
  },
  {
    code: "GEO-FURN-03",
    name: "Large Gold Melting Furnace",
    description: "LP gas furnace reaching 1 350 °C. Melts gold, silver, copper, brass, aluminium, and bronze. Works with standard 9–48 kg LP cylinders. Suitable for A6, A8, A10 crucible sizes. Includes foundry chamber, lid, spacer block, HP LPG regulator, burner, and hose.",
    category: "gold",
    tags: ["furnace", "smelting", "gold"],
  },
  {
    code: "GEO-SNUFBOT-01",
    name: "Snuffer Bottle Kits",
    description: "Gold collection and transfer kits. Kit 1: 150 ml snuffer bottle, 3 ml pipette, finds bottle. Kit 2 adds a 30× loupe. Essential for collecting gold flakes, fine dust, and small nuggets from Miller Tables, sluices, and gold pans.",
    category: "gold",
    tags: ["gold collection", "snuffer"],
  },
  {
    code: "GEO-DETECT-01",
    name: "Bounty Hunter Pinpointer",
    description: "Compact adjustable-sensitivity pinpointer for locating gold, coins, and small finds while metal detecting. Audio and vibration indicators. Single-knob sensitivity control. 9 V battery required.",
    category: "gold",
    tags: ["metal detector", "pinpointer"],
  },
  {
    code: "GEO-FPULSE",
    name: "Fisher F-Pulse Pinpointer",
    description: "Fully waterproof pinpointer (submersible to 6 feet). Pulse induction, beep/vibrate/both modes, lost mode alarm, 3 sensitivity levels, single button operation. Works in saltwater and freshwater.",
    category: "gold",
    tags: ["metal detector", "pinpointer", "waterproof"],
  },
  {
    code: "GEO-DIAMSEL",
    name: "Diamond Selector 2",
    description: "Electronic diamond tester for identifying genuine diamonds vs moissanite and other stones. Fast, reliable results in the field.",
    category: "gold",
    tags: ["diamond", "tester", "gems"],
  },
  {
    code: "GEO-TEKEUROPRO",
    name: "Teknetics EuroTek Pro Metal Detector",
    description: "Advanced all-terrain metal detector with iron audio and depth indicator. Excellent performance for gold prospecting and relic hunting.",
    category: "gold",
    tags: ["metal detector", "teknetics"],
  },
  {
    code: "GEO-TEKEURO",
    name: "Teknetics EuroTek Metal Detector",
    description: "Versatile entry-level metal detector for coin shooting and prospecting. Lightweight design with ground balance capability.",
    category: "gold",
    tags: ["metal detector", "teknetics"],
  },
  {
    code: "GEO-FISHERBUG",
    name: "Fisher Gold Bug Gold Detectors",
    description: "Dedicated gold detector with high operating frequency for detection of small gold nuggets and flakes. Manual and automatic ground balance.",
    category: "gold",
    tags: ["metal detector", "gold detector", "fisher"],
  },
  {
    code: "GEO-PANN-03",
    name: "Trekker Gold River Sluice",
    description: "High-performance river sluice box with riffles and miner's moss. Combos available: Panning Combo (includes 15″ Premium Gold Pan, 10″ Gold Pan, Snuffer Bottle Kit) and Sluice Combo (14″ Gold Pan, Gold Pocket Scale).",
    category: "gold",
    tags: ["sluice", "prospecting"],
  },
  {
    code: "GEO-SLC-RIV-01",
    name: "Mini Pocket Gold River Sluices",
    description: "Lightweight <500 g 3D-printed PLA sluice for alluvial gold prospecting. Fits in a small backpack. Integrated mini flare and riffles. Mini Pocket and Mini Vortex (enhanced vortex riffles) versions available.",
    category: "gold",
    tags: ["sluice", "portable", "prospecting"],
  },
  {
    code: "GEO-PANN-05",
    name: "Gold Panning Kits",
    description: "Complete panning kits including 10″ and 15″ Premium gold pans and 14″ classifier pan. Snuffer bottle kits and Prospectors Gold Pan Bundle (includes pocket sluice) also available.",
    category: "gold",
    tags: ["panning", "gold", "kit"],
  },
  {
    code: "GEO-SLC-SGL-01",
    name: "High Banker Sluices",
    description: "1000 mm × 300 mm sluice boxes processing 750–1200 kg/h. Single and double models available, with or without 20 000 L petrol pump and fittings. Miner's moss or fine gold matting included.",
    category: "gold",
    tags: ["sluice", "highbanker", "processing"],
  },
  {
    code: "GEO-CLN-01",
    name: "Gold Prospecting Cleanup Systems",
    description: "Complete cleanup solutions: Sluice Box (pump + vortex/fine gold matting, 650×150 mm), Adventure Kit (tote, 10 L bucket, 12 V battery, charger), Fine Gold Miller Table (650×450 mm), and Blue Bowl System (210 mm dia.). All compact and portable.",
    category: "gold",
    tags: ["cleanup", "gold recovery"],
  },
  {
    code: "GEO-MAT-01",
    name: "Gold Sluice Box Matting",
    description: "High-quality sluice matting for efficient gold trapping. Options: Fine Gold (yellow, 300×1000 mm), Miner's Moss (8 mm thick), Fine-Ribbed (ultra-fine gold/black sand), Vortex Rubber (300×150 mm), and V-Ribbed (150×150 mm).",
    category: "gold",
    tags: ["matting", "sluice", "gold recovery"],
  },
  {
    code: "GEO-CH-MILLCR",
    name: "Sample Chain Mill Crusher",
    description: "Portable chain mill crusher attached to a baby grinder (cordless or corded, not included). Crushes rock up to 40 mm diameter and mills to ~300 microns for gold ore sampling. Adjustable torque arms, spare parts available.",
    category: "gold",
    tags: ["crusher", "milling", "sampling"],
  },
  {
    code: "GEO-VBCL-SCRN",
    name: "Vibrating Classifier Screen",
    description: "4-stage vibrating classifier screen with mesh sizes 1 mm, 500 micron, 150 micron, and 75 micron. Single-phase vibrating mechanism. Ensures equal particle sizes before shaker tables for optimised gold recovery.",
    category: "gold",
    tags: ["classifier", "screening", "gold recovery"],
  },
];

const categories: { id: Category; label: string; count: number }[] = [
  { id: "all", label: "All Products", count: products.length },
  { id: "stationery", label: "Stationery & Labelling", count: products.filter(p => p.category === "stationery").length },
  { id: "storage", label: "Sample Storage", count: products.filter(p => p.category === "storage").length },
  { id: "core", label: "Core & More", count: products.filter(p => p.category === "core").length },
  { id: "navigation", label: "Exploration & Navigation", count: products.filter(p => p.category === "navigation").length },
  { id: "gold", label: "Gold Mining Accessories", count: products.filter(p => p.category === "gold").length },
];

const categoryColors: Record<Exclude<Category, "all">, string> = {
  stationery: "bg-blue-50 text-blue-700 border-blue-200",
  storage: "bg-emerald-50 text-emerald-700 border-emerald-200",
  core: "bg-orange-50 text-orange-700 border-orange-200",
  navigation: "bg-purple-50 text-purple-700 border-purple-200",
  gold: "bg-amber-50 text-amber-700 border-amber-200",
};

const categoryLabels: Record<Exclude<Category, "all">, string> = {
  stationery: "Stationery & Labelling",
  storage: "Sample Storage",
  core: "Core & More",
  navigation: "Exploration & Navigation",
  gold: "Gold Mining Accessories",
};

export default function Catalogue() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [search, setSearch] = useState("");

  const filtered = products.filter(p => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.code.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.tags ?? []).some(t => t.includes(q));
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-white min-h-[100dvh] flex flex-col text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-slate-900 hover:opacity-80 transition-opacity">
            BIAZO <span className="text-amber-500">INTL.</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <Link href="/#about" className="hover:text-amber-500 transition-colors">About</Link>
            <Link href="/#markets" className="hover:text-amber-500 transition-colors">Markets</Link>
            <Link href="/#products" className="hover:text-amber-500 transition-colors">Products</Link>
            <Link href="/catalogue" className="text-amber-500 font-bold">Catalogue</Link>
            <Link href="/#contact" className="hover:text-amber-500 transition-colors">Contact</Link>
          </div>
          <a href="mailto:sales@biazointernational.com">
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-none px-6">
              Get a Quote
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="pt-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-500 text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6 uppercase tracking-widest">
              <Tag className="w-4 h-4" /> Geological Catalogue 2026/27
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Geological <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Equipment</span> Catalogue
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mb-4">
              Professional geological, mining, and exploration equipment — from stationery and sample storage to core handling, navigation, and gold mining accessories.
            </p>
            <p className="text-slate-500 text-sm italic">
              Note: Goods supplied may vary in detail to those depicted. We do our best to portray products accurately, but suppliers may make changes after publication or provide products based on availability.
            </p>
          </motion.div>

          {/* Stats bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-px bg-slate-800 border-t border-slate-800">
            {categories.slice(1).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`bg-slate-900 px-4 py-6 text-center hover:bg-slate-800 transition-colors ${activeCategory === cat.id ? "border-b-2 border-amber-500" : ""}`}
              >
                <div className="text-2xl font-serif font-bold text-amber-500">{cat.count}</div>
                <div className="text-xs text-slate-400 mt-1">{cat.label}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-20 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-sm font-medium transition-all border ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                }`}
              >
                {cat.label}
                <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${activeCategory === cat.id ? "bg-amber-500 text-slate-900" : "bg-slate-100 text-slate-500"}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search products or codes…"
              className="w-full pl-9 pr-4 py-2 border border-slate-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="flex-1 py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-slate-400">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-40" />
              <p className="text-lg">No products match your search.</p>
            </div>
          ) : (
            <>
              <p className="text-slate-500 text-sm mb-8">
                Showing <strong className="text-slate-900">{filtered.length}</strong> product{filtered.length !== 1 ? "s" : ""}
                {activeCategory !== "all" ? ` in ${categoryLabels[activeCategory as Exclude<Category, "all">]}` : ""}
                {search ? ` matching "${search}"` : ""}
              </p>
              <motion.div
                layout
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((product, idx) => (
                  <motion.div
                    key={product.code}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.3) }}
                    className="bg-white border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col group"
                  >
                    <div className="p-6 flex-1">
                      {/* Category badge */}
                      <span className={`inline-block text-xs font-medium px-2 py-0.5 border mb-4 ${categoryColors[product.category]}`}>
                        {categoryLabels[product.category]}
                      </span>

                      {/* Product name */}
                      <h3 className="font-serif font-bold text-lg text-slate-900 mb-2 leading-snug group-hover:text-amber-600 transition-colors">
                        {product.name}
                      </h3>

                      {/* Code */}
                      <p className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider">
                        Code: {product.code}
                      </p>

                      {/* Description */}
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {product.description}
                      </p>

                      {/* Tags */}
                      {product.tags && product.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {product.tags.map(tag => (
                            <button
                              key={tag}
                              onClick={() => setSearch(tag)}
                              className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 hover:bg-amber-100 hover:text-amber-700 transition-colors"
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="border-t border-slate-100 px-6 py-4">
                      <a
                        href={`mailto:sales@biazointernational.com?subject=Quote Request: ${encodeURIComponent(product.name)} (${product.code})&body=Hello,%0D%0A%0D%0AI would like to request a quote for:%0D%0A%0D%0AProduct: ${encodeURIComponent(product.name)}%0D%0ACode: ${product.code}%0D%0A%0D%0APlease send pricing and availability.%0D%0A%0D%0AThank you.`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors group/link"
                      >
                        Request a Quote <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-2">Need a custom quote?</h2>
            <p className="text-slate-400">Our team is ready to help with pricing, availability, and bulk orders.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:sales@biazointernational.com">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-none h-14 px-8">
                Email Us
              </Button>
            </a>
            <a href="tel:+971524860664">
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 rounded-none h-14 px-8 bg-transparent">
                +971 52 486 0664
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-serif text-xl font-bold text-white">
            BIAZO <span className="text-amber-500">INTL.</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Biazo International General Trading FZ-LLC. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <a href="http://www.biazointernational.com" className="hover:text-amber-500 transition-colors text-sm">www.biazointernational.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
