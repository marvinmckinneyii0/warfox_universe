# The Warfox Sequence — World Archive

**Hard biopunk. Corporate espionage. Class warfare at the cellular level.**

An interactive world-building archive for *The Warfox Sequence* hard science fiction series — a classified-document-style reference covering augmentation technology, factions, characters, regions, and canonical terminology for the 22nd-century setting.

---

## Tech Stack

### Archive Page (`warfox-sequence.html`)

| Technology | Role |
|---|---|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Single-file archive structure |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Custom design system with CSS variables |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Scroll animations, IntersectionObserver, distribution module rendering |
| ![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=google&logoColor=white) | IBM Plex Mono · Syne · Lora |

### Comparator Module (`warfox_comparator/`)

| Technology | Role |
|---|---|
| ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) | UI framework for the HXL Augmentation Matrix |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | Build tooling |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | Utility-first styling |
| ![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=flat-square&logo=radix-ui&logoColor=white) | Accessible component primitives (Slider, Collapsible, Tooltip) |
| ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=flat-square&logo=shadcnui&logoColor=white) | Component system built above Radix |
| ![Lucide](https://img.shields.io/badge/Lucide-F56565?style=flat-square&logo=lucide&logoColor=white) | Icon library |
| ![Recharts](https://img.shields.io/badge/Recharts-22B5BF?style=flat-square&logo=recharts&logoColor=white) | Radar chart for projected performance output |
| ![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=reactquery&logoColor=white) | Data management |
| ![Wouter](https://img.shields.io/badge/Wouter-000000?style=flat-square&logo=react-router&logoColor=white) | Lightweight client-side routing |

### Tooling

| Tool | Role |
|---|---|
| ![Perplexity](https://img.shields.io/badge/Perplexity_AI-20808D?style=flat-square&logo=perplexity&logoColor=white) | Comparator module generated via Perplexity Computer |
| ![Claude](https://img.shields.io/badge/Anthropic_Claude-D97706?style=flat-square&logo=anthropic&logoColor=white) | Archive architecture, worldbuilding system, iterative development |

---

## File Structure

```
warfox-sequence.html          # Main archive — fully self-contained single file
warfox_comparator/
  index.html                  # Comparator standalone entry (reference only)
  assets/
    index-*.js                # React bundle
    index-*.css               # Tailwind output
README.md
```

> **Deployment note:** `warfox-sequence.html` embeds the comparator CSS and JS inline. It is a single self-contained file requiring no server or build step — open directly in any modern browser.

---

## Sections

| Section | Contents |
|---|---|
| World Foundation | XIS discovery, HXL Mesh mechanics, platform dependency, resistance |
| HXL Mesh | Architecture, XIS variants, integration process, metabolic costs, nanite taxonomy, symbionts, lifespan framework |
| Augmentation Classification | Light / Heavy / Hybrid / Titan / Omega tiers with full spec table |
| Comparator | Interactive HXL Augmentation Matrix — parameter sliders, radar output, canonical bounds validation |
| Exocort Architecture | Five-stage cognitive extension taxonomy |
| Timeline | Augmentation era from xenobiotic impact (~150,000 BP) to 2148 |
| Characters | 31 active records across ParkerGen, Zero Division, AlphaGuard, Federal, and unclassified affiliations |
| Factions | ParkerGen, SteelCore, AlphaGuard, WarFox, FBI CZJT Force, ExoCort |
| Lore & Stories | Field reports and side narratives |
| Regions | Earth surface profiles + off-world settlements with augmentation distribution matrices |
| Glossary | 94 entries across 13 domains: augmentation classes, biological substrate, platform infrastructure, operational terminology, XIS variants, nanite taxonomy, symbiotic organisms, lifespan and social limits |

---

## Canon Reference

Archive version: **v3.2.0**  
Operational period: **2070–2230 CE**  
Narrative present: **2148**  
Classification: **Active Archive**

---

*Some information in this archive has been withheld, redacted, or structured to protect active operational security. The archive does not represent a complete record. It never does.*
