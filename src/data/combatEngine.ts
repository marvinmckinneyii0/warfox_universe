export const FACTIONS: Record<string, { color: string; label: string }> = {
  AlphaGuard:   { color: '#3b82f6',  label: 'AlphaGuard' },
  ParkerGen:    { color: '#ec4899',  label: 'ParkerGen' },
  ZeroDivision: { color: '#f43f5e', label: 'Zero Division' },
  WarFox:       { color: '#10b981',  label: 'WarFox' },
  RossNetwork:  { color: '#e879f9',  label: 'Ross Network' },
  SteelCore:    { color: '#eab308',  label: 'SteelCore' },
  FBI:          { color: '#8b5cf6',  label: 'FBI / ACTF' },
  Siberian:     { color: '#64748b',  label: 'Siberian Fed' },
  Generic:      { color: '#6b7b96',  label: 'Generic Ops' },
};

export interface Ability {
  id: string;
  label: string;
  type: string;
  desc: string;
}

export interface Character {
  id: string;
  name: string;
  callsign: string;
  faction: string;
  classLabel: string;
  tier: number;
  born: number | null;
  bio: string;
  specialization: string;
  strength: number;
  speed: number;
  endurance: number;
  cognition: number;
  reactionTime: number;
  thermalCeiling: number;
  durability: number;
  lethality: number;
  abilities: Ability[];
  modifiers: Record<string, number | boolean>;
  status: string;
  isGeneric?: boolean;
  genericClass?: string;
}

export const CHARACTERS: Character[] = [
  {
    id: 'lucas_kane',
    name: 'Lucas Adisa Kane',
    callsign: 'Shepherd / Talon Osei',
    faction: 'AlphaGuard',
    classLabel: 'Hybrid-5B',
    tier: 5,
    born: 2121,
    bio: "Hyb-5B: L5 dominant / H2 subordinate. C-state capable — brief H3 approximation, transient and metabolically costly. Self-engineered on Theo Kane's pre-commercialization research. Zero ParkerGen dependency. WarFox biological AI co-pilot integrated into cognition as parallel processing layer.",
    specialization: 'Apex SOF. ExoCort sovereign. Cognitive supremacy, intelligent force allocation. Prediction and integration speed over brutality.',
    strength: 9.5, speed: 11.2, endurance: 9.8, cognition: 10.0,
    reactionTime: 110, thermalCeiling: 48, durability: 8.8, lethality: 10.2,
    abilities: [
      { id: 'c_state',   label: 'C-State Burst',      type: 'cyan',   desc: 'Brief H3-approximate output. ~40s max. Metabolically expensive, mechanically erosive if overused. Last resort.' },
      { id: 'warfox_ai', label: 'WarFox AI Co-Pilot', type: 'purple', desc: "Biological AI grown from Theo's research. Mimics Lucas's cognition. Parallel processing layer — threat mapping, OODA compression, prediction at network scale." },
      { id: 'exocort',   label: 'ExoCort Sovereign',  type: 'blue',   desc: 'Zero platform dependency. Self-replicating biological nanites. Immune to HXL suppression attacks.' },
      { id: 'l5_cog',    label: 'L5 Cognition',       type: 'green',  desc: 'Near-Titan cognitive processing. Multi-target concurrent tracking. OODA loop approaching machine speed.' },
    ],
    modifiers: { cState: 1.35, cogEdge: 1.25, platformImmune: true },
    status: 'active',
  },
  {
    id: 'sonia_lopez',
    name: 'Sonia Lopez',
    callsign: '',
    faction: 'AlphaGuard',
    classLabel: 'Hybrid-5A',
    tier: 5,
    born: 2126,
    bio: "Hyb-5A — canon-locked. AlphaGuard-sponsored. Witnessed the Lopez Incident (2143) as a child. Has compiled evidence on PROJECT: FAMILIAR but awaits trustworthy insiders. INTJ-A. Hugo Lopez's daughter.",
    specialization: 'Apex AlphaGuard operator. Strategic intelligence carrier. Evidence network.',
    strength: 9.2, speed: 11.0, endurance: 9.5, cognition: 9.5,
    reactionTime: 115, thermalCeiling: 46, durability: 8.5, lethality: 9.8,
    abilities: [
      { id: 'hyb5a',      label: 'Hybrid-5A',        type: 'cyan',  desc: 'Tier 5 AlphaGuard-sponsored platform. Full institutional augmentation support.' },
      { id: 'apex_sof',   label: 'Apex SOF',          type: 'blue',  desc: 'AlphaGuard special operations training. All-terrain, all-condition qualified.' },
      { id: 'dead_switch',label: 'Evidence Carrier',  type: 'amber', desc: 'Compiled PROJECT: FAMILIAR evidence. Value as living archive creates tactical deterrence.' },
    ],
    modifiers: { cogEdge: 1.18 },
    status: 'active',
  },
  {
    id: 'ellison_jones',
    name: 'Ellison Maren Jones',
    callsign: '',
    faction: 'AlphaGuard',
    classLabel: 'Titan-1/A',
    tier: 6,
    born: 2085,
    bio: "Titan-1/A — precision-biased, hidden. Appeared to hold Hyb-5B until Lucas Kane built AlphaGuard's augmentation R&D (2142–2145) using Theo's pre-commercialization research. Titan upgrade is downstream consequence of that architecture. Status not public. Longevity augmentation active. ESTJ.",
    specialization: 'Strategic command. Precision Titan ops. Institutional architecture control.',
    strength: 13.5, speed: 10.0, endurance: 14.0, cognition: 8.5,
    reactionTime: 95, thermalCeiling: 70, durability: 13.0, lethality: 14.5,
    abilities: [
      { id: 'titan_1a',   label: 'Titan-1/A',              type: 'purple', desc: 'Platform-scale augmentation. Structural density and force output beyond all HXL tiers. Hidden status.' },
      { id: 'precision',  label: 'Precision Bias',          type: 'cyan',   desc: 'Titan variant optimized for targeted force application over area dominance.' },
      { id: 'longevity',  label: 'Longevity Aug',           type: 'green',  desc: 'Biological age regression. Reduced cellular degradation. Appears decades younger than birth year.' },
      { id: 'plausible_d',label: 'Plausible Deniability',   type: 'amber',  desc: 'Deliberately avoids knowing WarFox operational specifics. Institutional clean hands.' },
    ],
    modifiers: { titanScale: 1.8, platformScale: true },
    status: 'classified',
  },
  {
    id: 'jin_soo_park',
    name: 'Jin Soo-Park',
    callsign: '',
    faction: 'AlphaGuard',
    classLabel: 'Light-3',
    tier: 3,
    born: 2096,
    bio: "L3 — Cross-cultural intelligence specialist. AlphaGuard sponsored. INFJ-A. Secondary detection risk for Lucas's cover: behavioral mapping, not combat. Born Busan.",
    specialization: 'Cross-cultural intelligence. Behavioral pattern analysis. Cover detection.',
    strength: 3.5, speed: 10.5, endurance: 5.0, cognition: 6.5,
    reactionTime: 195, thermalCeiling: 32, durability: 3.5, lethality: 5.0,
    abilities: [
      { id: 'behavioral',  label: 'Behavioral Mapping', type: 'blue',   desc: 'Predictive behavioral modeling at L3 processing speed. +15% cognition modifier in close-proximity engagement.' },
      { id: 'cover_detect',label: 'Cover Detection',    type: 'purple', desc: "Can detect cover identity inconsistencies. Primary threat to Shepherd/Talon operational security." },
    ],
    modifiers: { cogEdge: 1.15 },
    status: 'active',
  },
  {
    id: 'rashid_al_farsi',
    name: 'Dr. Rashid Al-Farsi',
    callsign: '',
    faction: 'AlphaGuard',
    classLabel: 'Light-4',
    tier: 4,
    born: 2095,
    bio: "L4 — Empathic Interface Variant. AlphaGuard psychiatric officer. ESTJ. Born Riyadh. Greatest threat to Lucas's cover via psychological residue detection.",
    specialization: 'Psychiatric assessment. Empathic interface. Psychological architecture.',
    strength: 4.0, speed: 10.5, endurance: 5.5, cognition: 8.5,
    reactionTime: 140, thermalCeiling: 36, durability: 4.0, lethality: 5.0,
    abilities: [
      { id: 'empathic',   label: 'Empathic Interface',  type: 'purple', desc: 'Neural empathy overlay. Reads emotional state, stress signatures, psychological residue.' },
      { id: 'psych_arch', label: 'Psych Architecture',  type: 'blue',   desc: 'Targets cognitive decision points. Detects behavioral signature anomalies consistent with AI-to-human transition.' },
    ],
    modifiers: { oppCogPenalty: 0.10 },
    status: 'active',
  },
  {
    id: 'raymond_parker',
    name: 'Raymond Parker',
    callsign: '',
    faction: 'ParkerGen',
    classLabel: 'Light-3',
    tier: 3,
    born: 2087,
    bio: "L3. ParkerGen CEO. ENTJ-A. Boston Brahmin heritage. Primary systemic antagonist. Killed by Rayvn Hunter at end of Book I — she knew he was her father beforehand.",
    specialization: 'Corporate command. Systemic force projection through institutional power.',
    strength: 3.5, speed: 10.0, endurance: 5.0, cognition: 6.5,
    reactionTime: 198, thermalCeiling: 32, durability: 3.5, lethality: 5.0,
    abilities: [
      { id: 'ceo_auth', label: 'CEO Authority', type: 'red', desc: 'Institutional command authority. Zero Division at call. Force projection through corporate state power.' },
    ],
    modifiers: { cogEdge: 1.1 },
    status: 'active',
  },
  {
    id: 'mei_chen_parker',
    name: 'Mei Chen-Parker',
    callsign: '',
    faction: 'ParkerGen',
    classLabel: 'Light-3',
    tier: 3,
    born: 2090,
    bio: "L3. ParkerGen CFO. INTJ-A. Shanghai origin. Built the financial control systems. Eventually provides testimony implicating her own chain of command in the Lamb murder.",
    specialization: 'Financial architecture. Control systems. Systemic dependency enforcement.',
    strength: 3.5, speed: 10.0, endurance: 5.0, cognition: 6.5,
    reactionTime: 195, thermalCeiling: 32, durability: 3.5, lethality: 4.5,
    abilities: [
      { id: 'systems_arch', label: 'Systems Architecture', type: 'cyan', desc: 'Financial control systems architect. Knowledge of dependency enforcement mechanisms — exploitable by insiders.' },
    ],
    modifiers: { cogEdge: 1.1 },
    status: 'active',
  },
  {
    id: 'alexander_chen_parker',
    name: 'Alexander Chen-Parker',
    callsign: '',
    faction: 'ZeroDivision',
    classLabel: 'Hybrid-3C',
    tier: 3,
    born: 2111,
    bio: "Hyb-3C — canon-locked. Zero Division architect and CSO. ESTP-A. Authorized Dr. Theo Kane's murder (2138) and Dr. Angela Lamb assassination (2148). Son of Raymond and Mei. Emily's older brother.",
    specialization: 'Zero Division command. Corporate security doctrine. Institutional violence architecture.',
    strength: 6.0, speed: 8.0, endurance: 7.0, cognition: 7.5,
    reactionTime: 175, thermalCeiling: 36, durability: 6.5, lethality: 7.5,
    abilities: [
      { id: 'dark_triad', label: 'High Machiavellianism',  type: 'red',   desc: 'Strategic manipulation as force multiplier. Authorized murder of Dr. Theo Kane and Dr. Angela Lamb.' },
      { id: 'zero_cmd',   label: 'Zero Division Command', type: 'amber', desc: 'Architect and CSO of Zero Division. Institutional authority over Grey/Black/Crimson units.' },
    ],
    modifiers: { cogEdge: 1.1, platformDep: true },
    status: 'active',
  },
  {
    id: 'ethan_hayes',
    name: 'Ethan Hayes',
    callsign: '',
    faction: 'ZeroDivision',
    classLabel: 'Hybrid-4A',
    tier: 4,
    born: 2115,
    bio: "Hyb-4A: L4 dominant / H2 subordinate / cognitive forward. Zero Division Black Unit. Executed Dr. Angela Lamb assassination (March 14, 2148) via focused ultrasound neural disruption device staged as cerebrovascular event.",
    specialization: 'Black Unit operations. Cognitive warfare. Precision asset elimination.',
    strength: 7.0, speed: 10.0, endurance: 7.5, cognition: 8.0,
    reactionTime: 138, thermalCeiling: 42, durability: 7.0, lethality: 8.8,
    abilities: [
      { id: 'cog_forward', label: 'Cognitive Forward',    type: 'cyan',  desc: 'L4-dominant Hybrid. Cognitive processing as primary weapon — tactical prediction, disruption.' },
      { id: 'black_unit',  label: 'Black Unit Protocol',  type: 'red',   desc: 'Zero Division doctrine enforcement. Executed Lamb assassination via ultrasound neural disruption.' },
      { id: 'predator',    label: 'Predator Architecture',type: 'amber', desc: 'Hunting pattern overlay. Psychological weak-point identification. Unrelenting pressure mode.' },
    ],
    modifiers: { cogEdge: 1.2, lethalityBonus: 1.15, platformDep: true },
    status: 'active',
  },
  {
    id: 'marcus_delgado',
    name: 'Marcus Delgado',
    callsign: '',
    faction: 'ZeroDivision',
    classLabel: 'Heavy-3',
    tier: 3,
    born: 2112,
    bio: 'H3. Zero Division CQC specialist. ESTP-A. Filipino. Heavy-3 close-quarters combat doctrine. Army Ranger background before Zero Division recruitment.',
    specialization: 'CQC. Zero Division enforcement. Physical dominance in close environments.',
    strength: 7.5, speed: 6.8, endurance: 9.0, cognition: 3.5,
    reactionTime: 210, thermalCeiling: 38, durability: 8.0, lethality: 8.5,
    abilities: [
      { id: 'h3_cqc', label: 'H3 CQC', type: 'red', desc: '2.5× sustained strength. Zero Division CQC doctrine. Lethal in sub-10m engagements.' },
    ],
    modifiers: { enduranceBonus: 1.2, platformDep: true },
    status: 'active',
  },
  {
    id: 'leon_walker',
    name: 'Leon Walker',
    callsign: '',
    faction: 'ZeroDivision',
    classLabel: 'Hybrid-3A',
    tier: 3,
    born: 2110,
    bio: 'Hyb-3A: L3 dominant / H1 subordinate. Zero Division operative. ISTJ. Detroit origin. Army Rangers before Zero Division. Methodical, procedure-oriented.',
    specialization: 'Zero Division field operations. Institutional doctrine enforcement.',
    strength: 5.5, speed: 8.5, endurance: 7.0, cognition: 6.5,
    reactionTime: 182, thermalCeiling: 35, durability: 6.0, lethality: 6.5,
    abilities: [
      { id: 'ranger_tac', label: 'Ranger Tactics', type: 'blue', desc: 'Army Ranger baseline discipline. Systematic engagement protocol. Suppression-and-advance doctrine.' },
    ],
    modifiers: { cogEdge: 1.05, platformDep: true },
    status: 'active',
  },
  {
    id: 'victor_thorn',
    name: 'Victor Thorn',
    callsign: 'Thorn',
    faction: 'ParkerGen',
    classLabel: 'Heavy-3',
    tier: 3,
    born: 2100,
    bio: 'H3 — Strategic Enforcement Variant. 2.5× sustained strength, 3× endurance. L1 tactical overlay. Platform dependent — ParkerGen HXL. Enforcement architecture anchor.',
    specialization: 'Strategic enforcement. Physical dominance. Command routing.',
    strength: 7.5, speed: 7.0, endurance: 9.0, cognition: 3.5,
    reactionTime: 195, thermalCeiling: 38, durability: 8.0, lethality: 8.5,
    abilities: [
      { id: 'h3_enforce',  label: 'H3 Enforcement',     type: 'red', desc: '2.5× sustained strength. Heavy structural frame built for prolonged force engagement.' },
      { id: 'platform_dep',label: 'Platform Dependent', type: 'red', desc: 'ParkerGen HXL dependency. Suppressor exposure causes augmentation degradation.' },
    ],
    modifiers: { enduranceBonus: 1.3, platformDep: true },
    status: 'active',
  },
  {
    id: 'emily_chen_parker',
    name: 'Emily Chen-Parker',
    callsign: 'Phantom',
    faction: 'ParkerGen',
    classLabel: 'Hybrid-3A',
    tier: 3,
    born: 2121,
    bio: "Hyb-3A: L3 dominant / H1 subordinate. gNexGen ParkerGen dynasty. VP Legal Affairs. Building independent evidentiary record as Phantom. INFJ. Must not read as Lucas's asset. Younger sister of Alexander.",
    specialization: 'Corporate intelligence. Evidence collection. Covert resistance architecture.',
    strength: 5.0, speed: 9.5, endurance: 6.0, cognition: 7.0,
    reactionTime: 170, thermalCeiling: 34, durability: 5.5, lethality: 6.0,
    abilities: [
      { id: 'phantom',    label: 'Phantom (Operative)', type: 'purple', desc: 'Covert identity. Independent evidentiary record of ParkerGen crimes. Not a WarFox asset.' },
      { id: 'corp_intel', label: 'Dynasty Intelligence', type: 'blue',  desc: 'Insider access to ParkerGen evidence. Pattern recognition and institutional architecture knowledge.' },
      { id: 'gnexgen',    label: 'gNexGen Heritage',    type: 'green', desc: 'Gestational NexGen — designed from conception. Peak hybrid integration efficiency for tier.' },
    ],
    modifiers: { evasionBonus: 1.2 },
    status: 'active',
  },
  {
    id: 'maria_rodriguez',
    name: 'Maria Rodriguez',
    callsign: '',
    faction: 'ParkerGen',
    classLabel: 'Hybrid-3A',
    tier: 3,
    born: 2112,
    bio: 'Hyb-3A: L3 dominant / H3 subordinate. Biochemical specialist and medic. ~2–2.5× strength, ~2.5–3× endurance. Platform dependent. Combat medic function.',
    specialization: 'Biochemical warfare. Field medicine. Augmentation-aware toxicology.',
    strength: 6.2, speed: 7.5, endurance: 8.5, cognition: 6.5,
    reactionTime: 185, thermalCeiling: 38, durability: 7.0, lethality: 7.0,
    abilities: [
      { id: 'biochem',   label: 'Biochemical Warfare', type: 'amber', desc: 'Platform-specific disruption compounds. Augmentation-aware toxicology synthesis.' },
      { id: 'field_med', label: 'Combat Medic',        type: 'green', desc: 'Field augmentation repair. Extends operational window for self and allies mid-engagement.' },
    ],
    modifiers: { enduranceBonus: 1.15, selfRepair: true, platformDep: true },
    status: 'active',
  },
  {
    id: 'cara_vo',
    name: 'Cara Vo',
    callsign: '',
    faction: 'ZeroDivision',
    classLabel: 'Hybrid-3A',
    tier: 3,
    born: 2111,
    bio: 'Hyb-3A: L3 dominant / H1 subordinate. Zero Division Grey Unit, cybersecurity. ENTJ. Vietnamese. Turned by Lucas. WarFox affiliation non-public.',
    specialization: 'Cybersecurity. Grey Unit operations. Double agent network architecture.',
    strength: 5.0, speed: 9.0, endurance: 6.0, cognition: 8.0,
    reactionTime: 165, thermalCeiling: 34, durability: 5.5, lethality: 6.0,
    abilities: [
      { id: 'grey_unit',    label: 'Grey Unit Cyber', type: 'cyan',   desc: 'ParkerGen network topology specialist. Zero Division cybersecurity architecture.' },
      { id: 'double_agent', label: 'Double Agent',    type: 'purple', desc: 'Dual allegiance. ParkerGen system access reporting to WarFox network.' },
    ],
    modifiers: { cogEdge: 1.15, platformDep: true },
    status: 'active',
  },
  {
    id: 'rayvn_hunter',
    name: 'Rayvn Hunter',
    callsign: '',
    faction: 'ZeroDivision',
    classLabel: 'Hybrid-4C',
    tier: 4,
    born: 2126,
    bio: "Hyb-4C: L4 forward / H3 subordinate. Former Zero Division Crimson Unit. ISTP-A. Reaction time ~170ms — fastest non-Titan in cast. No platform dependency. Killed Raymond at end of Book I.",
    specialization: 'Crimson Unit strike. Fastest sub-Titan reflexes. Robin Hood redistribution op.',
    strength: 8.5, speed: 11.5, endurance: 8.0, cognition: 7.5,
    reactionTime: 170, thermalCeiling: 44, durability: 7.5, lethality: 10.5,
    abilities: [
      { id: 'fastest_sub', label: 'Fastest Sub-Titan',    type: 'cyan',  desc: '~170ms reaction time — fastest non-Titan in the Warfox cast. Consistent initiative supremacy.' },
      { id: 'plat_immune', label: 'Platform Independent', type: 'green', desc: 'No HXL dependency. Cannot be suppressed or degraded via platform attacks.' },
      { id: 'crimson',     label: 'Crimson Unit',         type: 'red',   desc: 'Zero Division elite strike. High-intensity short-engagement doctrine. Killed Raymond Parker.' },
    ],
    modifiers: { reactionBonus: 0.85, platformImmune: true },
    status: 'active',
  },
  {
    id: 'damien_shaw',
    name: 'Damien Shaw',
    callsign: '',
    faction: 'ZeroDivision',
    classLabel: 'Hybrid-3B',
    tier: 3,
    born: 2107,
    bio: 'Hyb-3B: L2 dominant / H3 subordinate. Zero Division enforcer. Physical-forward hybrid profile at tier 3. Corporate enforcement operations.',
    specialization: 'Corporate enforcement. Physical suppression. Hybrid physical-forward doctrine.',
    strength: 6.5, speed: 7.5, endurance: 7.5, cognition: 5.5,
    reactionTime: 200, thermalCeiling: 37, durability: 7.0, lethality: 7.5,
    abilities: [
      { id: 'physical_fwd', label: 'Physical Forward', type: 'amber', desc: 'H-dominant Hybrid at tier 3. Physical output exceeds cognitive utility — suppression role.' },
    ],
    modifiers: { enduranceBonus: 1.1, platformDep: true },
    status: 'active',
  },
  {
    id: 'zakia_williams',
    name: 'Zakia Amara Williams',
    callsign: '',
    faction: 'WarFox',
    classLabel: 'Light-4',
    tier: 4,
    born: 2122,
    bio: 'L4 cognitive systems architect. INTP. WarFox affiliation non-public — public cover is HR director. Cognitive infrastructure and augmentation architecture specialist.',
    specialization: 'Cognitive systems architecture. Augmentation platform analysis. Network operations.',
    strength: 4.0, speed: 10.5, endurance: 5.5, cognition: 8.5,
    reactionTime: 135, thermalCeiling: 36, durability: 4.2, lethality: 5.5,
    abilities: [
      { id: 'cog_arch', label: 'Cognitive Architecture', type: 'cyan',  desc: 'Systems-level augmentation design. Can exploit architecture flaws in other HXL platforms.' },
      { id: 'wf_net',   label: 'WarFox Network',         type: 'green', desc: 'Embedded in WarFox intelligence grid. Covert positional advantage in cyber environments.' },
    ],
    modifiers: { cogEdge: 1.2, oppPlatformPenalty: 0.08 },
    status: 'active',
  },
  {
    id: 'cam_ochoa',
    name: 'Ilhicamina "Cam" Ochoa',
    callsign: 'Cam',
    faction: 'WarFox',
    classLabel: 'Light-3',
    tier: 3,
    born: 2117,
    bio: "L3 bio-energy specialist. ENTP. WarFox affiliation non-public — public cover is ParkerGen Operations Division, Systems & Logistics.",
    specialization: 'Bio-energy systems. Operational logistics. WarFox field support.',
    strength: 3.5, speed: 10.5, endurance: 5.0, cognition: 6.5,
    reactionTime: 195, thermalCeiling: 32, durability: 3.5, lethality: 5.0,
    abilities: [
      { id: 'bio_energy', label: 'Bio-Energy Specialist', type: 'green', desc: 'Augmentation energy systems expert. Can optimize or degrade bio-energy output in field conditions.' },
      { id: 'logistics',  label: 'Logistics Cover',       type: 'blue',  desc: 'ParkerGen Operations Division access. Supply chain intelligence for WarFox.' },
    ],
    modifiers: { cogEdge: 1.1 },
    status: 'active',
  },
  {
    id: 'rachel_yassin',
    name: 'Rachel Yassin',
    callsign: '',
    faction: 'WarFox',
    classLabel: 'Light-4A',
    tier: 4,
    born: 2113,
    bio: "L4A — Bio-Neural Symbiosis variant. INFP-T. ParkerGen defector. Weaponized ecosystem research for the 2145 Tigris Basin collapse. Enhanced sensory processing for biological signals. Zero combat capability.",
    specialization: 'Ecosystem pattern recognition. Biological intelligence. Non-combat WarFox asset.',
    strength: 2.5, speed: 9.0, endurance: 4.5, cognition: 8.5,
    reactionTime: 145, thermalCeiling: 32, durability: 2.5, lethality: 2.0,
    abilities: [
      { id: 'bio_neural',   label: 'Bio-Neural Symbiosis',       type: 'green', desc: 'Empathic resonance with biological systems. Ecosystem pattern recognition.' },
      { id: 'sensory_proc', label: 'Enhanced Sensory Processing', type: 'cyan',  desc: 'Biological signal processing into intuitive tactical understanding. Effective in natural environments only.' },
      { id: 'emp_overload', label: 'Empathic Overload Risk',     type: 'red',   desc: 'Zero combat capability. Urban/industrial environments overwhelm sensory stack.' },
    ],
    modifiers: { cogEdge: 1.2 },
    status: 'active',
  },
  {
    id: 'kassandra_kane',
    name: 'Kassandra Aminata Kane',
    callsign: '',
    faction: 'WarFox',
    classLabel: 'Light-1',
    tier: 1,
    born: 2093,
    bio: "L1 augmentation. INFJ psychiatrist. Co-developed the APM framework with Dr. Theo Kane — confirmed as his unnamed collaborating psychiatrist. Married Theo 2117. Morally flexible vs. Theo's ISTJ rigidity. Raised both sons transnationally.",
    specialization: 'Psychological evaluation. APM framework co-author. Institutional knowledge of pre-commercialization research.',
    strength: 1.5, speed: 7.0, endurance: 2.0, cognition: 2.5,
    reactionTime: 278, thermalCeiling: 23, durability: 1.5, lethality: 1.5,
    abilities: [
      { id: 'apm_author', label: 'APM Co-Author',          type: 'cyan', desc: 'Co-developed Augmentation Potential Matrix with Theo Kane. Pre-commercialization clinical framework.' },
      { id: 'psych_eval', label: 'Psychiatric Evaluation', type: 'blue', desc: 'Trained psychiatrist. Psychological assessment and narrative-level threat to institutional concealment.' },
    ],
    modifiers: {},
    status: 'active',
  },
  {
    id: 'malcolm_ross',
    name: 'Dr. Malcolm Ross',
    callsign: '',
    faction: 'RossNetwork',
    classLabel: 'Titan (Self-Made)',
    tier: 6,
    born: 2109,
    bio: 'Self-made Titan-Class. ENTP-A. Former ParkerGen researcher turned transhumanist absolutist. Metabolic Furnace Engine — dangerous mechanism with limited safe uses remaining.',
    specialization: 'Strategic operations. Platform-scale combat. Transhumanist ideological warfare.',
    strength: 14.0, speed: 8.5, endurance: 12.0, cognition: 9.0,
    reactionTime: 105, thermalCeiling: 55, durability: 13.5, lethality: 15.0,
    abilities: [
      { id: 'furnace',    label: 'Metabolic Furnace Engine', type: 'red',    desc: 'Self-made Titan-scale aug. Catastrophic force output — limited remaining safe use cycles before structural failure.' },
      { id: 'body_weapon',label: 'Body as Main Weapon',      type: 'amber',  desc: 'Minimalist hardware. Maximum biological integration. Resistant to electronic suppression.' },
      { id: 'self_titan', label: 'Self-Sovereign Titan',     type: 'purple', desc: 'No institutional platform dependency. Self-made augmentation architecture.' },
    ],
    modifiers: { titanScale: 1.9, furnaceLimitedUse: true, platformImmune: true },
    status: 'active',
  },
  {
    id: 'nadja_morozova',
    name: 'Nadja Morozova',
    callsign: '',
    faction: 'RossNetwork',
    classLabel: 'Heavy-4',
    tier: 4,
    born: 2113,
    bio: 'H4. ISTP. Siberian Federation military origin. Augmentation-Induced Depigmentation Syndrome — naturally white hair, brows, and lashes. Ross Network affiliation.',
    specialization: 'Heavy combat. Shock assault. Industrial-grade sustained force.',
    strength: 9.5, speed: 7.5, endurance: 10.0, cognition: 5.5,
    reactionTime: 180, thermalCeiling: 42, durability: 9.5, lethality: 10.5,
    abilities: [
      { id: 'shock_doc', label: 'Siberian Shock Doctrine', type: 'red',   desc: 'Siberian Federation H4 military doctrine — overwhelming force vector, decisive short-engagement.' },
      { id: 'aids',      label: 'AIDS Physiology',         type: 'amber', desc: 'Augmentation-Induced Depigmentation Syndrome. Visible indicator of extreme platform saturation density.' },
    ],
    modifiers: { enduranceBonus: 1.2, durabilityBonus: 1.15 },
    status: 'active',
  },
  {
    id: 'alaia_dekker',
    name: 'Alaia Verin Dekker',
    callsign: '',
    faction: 'RossNetwork',
    classLabel: 'Hybrid-1',
    tier: 1,
    born: 2116,
    bio: 'L4 architecture, Hybrid-1 integration. INTJ. Rotterdam origin. Cognitive tactical operative working with Dr. Malcolm Ross. Low-visibility intelligence and strategic analysis.',
    specialization: 'Intelligence. Counter-intelligence. Strategic analysis for Ross Network.',
    strength: 4.5, speed: 10.0, endurance: 5.5, cognition: 8.0,
    reactionTime: 145, thermalCeiling: 34, durability: 4.5, lethality: 5.5,
    abilities: [
      { id: 'counterint', label: 'Counter-Intelligence',   type: 'cyan',  desc: 'Ross Network strategic analysis. Adversary modeling at institutional scale.' },
      { id: 'low_vis',    label: 'Low-Visibility Profile', type: 'green', desc: 'Minimal augmentation signature. Difficult to detect or track in surveillance environments.' },
    ],
    modifiers: { cogEdge: 1.15 },
    status: 'active',
  },
  {
    id: 'hugo_lopez',
    name: 'Hugo Lopez',
    callsign: '',
    faction: 'SteelCore',
    classLabel: 'Titan-1/A (Hidden)',
    tier: 6,
    born: 2087,
    bio: "Titan-1/A — hidden. ENTJ. Former AlphaGuard co-founder. SteelCore recruited him believing him to be an exceptional Hyb-5 operative. True Titan capability undisclosed. Sonia Lopez's father.",
    specialization: 'Hidden Titan. Creates threat ceiling above Lucas Kane. Consequence engine.',
    strength: 13.8, speed: 10.5, endurance: 13.5, cognition: 8.0,
    reactionTime: 98, thermalCeiling: 68, durability: 13.5, lethality: 15.5,
    abilities: [
      { id: 'hidden_titan', label: 'Hidden Titan Status', type: 'purple', desc: 'Titan-1/A. SteelCore believes him to be Hybrid-5. True capability constitutes the threat ceiling above Lucas.' },
      { id: 'threat_ceil',  label: 'Threat Ceiling',      type: 'red',    desc: 'Creates credible force ceiling above all Hyb-5 operators. Strategic architecture of Book 2 conflict.' },
      { id: 'institution',  label: 'AlphaGuard Founder',  type: 'blue',   desc: 'Co-founded AlphaGuard. Full institutional knowledge of AlphaGuard architecture and doctrine.' },
    ],
    modifiers: { titanScale: 1.85, platformScale: true },
    status: 'classified',
  },
  {
    id: 'marcus_steele',
    name: 'Marcus Steele',
    callsign: '',
    faction: 'SteelCore',
    classLabel: 'Hybrid-4B',
    tier: 4,
    born: 2100,
    bio: 'Hyb-4B: H4 dominant / L2 subordinate. SteelCore Leadership Triumvirate, tactical director. Physical-forward Hybrid-4 — force application over cognition. PROJECT: FAMILIAR architect alongside ATLAS.',
    specialization: 'Tactical operations. Physical-forward hybrid command. SteelCore force projection.',
    strength: 9.0, speed: 8.5, endurance: 9.5, cognition: 5.5,
    reactionTime: 165, thermalCeiling: 44, durability: 9.0, lethality: 10.5,
    abilities: [
      { id: 'h_fwd_hyb4',  label: 'H-Forward Hybrid-4',  type: 'amber', desc: 'Physical-dominant Hybrid-4. Force application over cognitive processing — SteelCore tactical doctrine.' },
      { id: 'project_fam', label: 'PROJECT: FAMILIAR',   type: 'red',   desc: "SteelCore aerosol neuroparasite program. Turns civilians into sleeper assassins. Stolen from Lucas's therapeutic research." },
    ],
    modifiers: { enduranceBonus: 1.15, platformDep: true },
    status: 'active',
  },
  {
    id: 'miranda_steele',
    name: 'Miranda Steele',
    callsign: '',
    faction: 'SteelCore',
    classLabel: 'Hybrid-3A',
    tier: 3,
    born: 2102,
    bio: "Hyb-3A: L3 dominant / H1 subordinate. SteelCore Leadership Triumvirate, legal and PR director. Cognitive-forward — institutional armor over force projection.",
    specialization: "Legal architecture. Corporate PR. Institutional defense — SteelCore's external face.",
    strength: 5.0, speed: 9.0, endurance: 6.0, cognition: 7.0,
    reactionTime: 178, thermalCeiling: 33, durability: 5.5, lethality: 5.5,
    abilities: [
      { id: 'inst_armor', label: 'Institutional Armor', type: 'cyan', desc: 'Legal and PR architecture. Delays exposure of PROJECT: FAMILIAR. SteelCore outer defensive layer.' },
    ],
    modifiers: { cogEdge: 1.1, platformDep: true },
    status: 'active',
  },
  {
    id: 'veronica_valdez',
    name: 'Veronica Valdez',
    callsign: '',
    faction: 'FBI',
    classLabel: 'Hybrid-3B',
    tier: 3,
    born: 2114,
    bio: "Hyb-3B: L3 dominant / H2 subordinate — canon-locked. FBI ACTF. ISTJ-A. Puerto Rican heritage. Augmentation debt creates economic bondage to FBI. Investigates Angela Lamb's death.",
    specialization: 'Forensic augmentation investigation. ACTF jurisdiction. Institutional justice.',
    strength: 5.5, speed: 8.5, endurance: 7.0, cognition: 7.5,
    reactionTime: 168, thermalCeiling: 35, durability: 6.0, lethality: 6.5,
    abilities: [
      { id: 'forensic_cog', label: 'Forensic Cognition', type: 'cyan', desc: 'Evidence pattern recognition at augmented processing speed. Crime-scene specialization at L3.' },
      { id: 'aug_debt',     label: 'Augmentation Debt', type: 'red',  desc: 'Economic bondage to FBI. Full institutional support, but no independent operation authority.' },
      { id: 'actf_auth',    label: 'ACTF Authority',    type: 'blue', desc: 'Augmentation Crimes Task Force. Access to suppressor assets and platform data. Investigates Lamb murder.' },
    ],
    modifiers: { cogEdge: 1.12 },
    status: 'active',
  },
];

export const GENERIC_OPERATORS: Character[] = [
  { id:'g_L0', name:'Light-1', callsign:'', faction:'Generic', classLabel:'Light-1', tier:1, isGeneric:true, genericClass:'Light', born:null, bio:'L1 — Entry cognitive aug. ~1.1× cognition, basic sensory enhancement. Tactical overlay and IFF. Minimal physical modification.', specialization:'Entry-level augmentation. Tactical overlay.', strength:1.8, speed:7.5, endurance:2.5, cognition:2.5, reactionTime:280, thermalCeiling:25, durability:1.8, lethality:2.2, abilities:[{ id:'l1_tac', label:'L1 Tactical Overlay', type:'blue', desc:'Basic HUD targeting and IFF. Minimal OODA compression.' }], modifiers:{}, status:'active' },
  { id:'g_L2', name:'Light-2', callsign:'', faction:'Generic', classLabel:'Light-2', tier:2, isGeneric:true, genericClass:'Light', born:null, bio:'L2 — Intermediate cognitive aug. ~1.5–2× cognition. Sensory stack. PNS optimization for motor speed.', specialization:'Tactical ISR. Precision engagement. Light SOF support.', strength:2.5, speed:9.0, endurance:3.5, cognition:4.5, reactionTime:235, thermalCeiling:28, durability:2.5, lethality:3.5, abilities:[{ id:'l2_sensory', label:'Sensory Stack', type:'blue', desc:'Enhanced visual/auditory processing.' },{ id:'l2_pns', label:'PNS Optimization', type:'green', desc:'Peripheral nervous system tuning.' }], modifiers:{ cogEdge:1.1 }, status:'active' },
  { id:'g_L3', name:'Light-3', callsign:'', faction:'Generic', classLabel:'Light-3', tier:3, isGeneric:true, genericClass:'Light', born:null, bio:'L3 — Advanced cognitive aug. ~2–3× cognition. Full tactical processing suite.', specialization:'Advanced intelligence. Cognitive warfare support.', strength:3.5, speed:10.5, endurance:5.0, cognition:6.5, reactionTime:195, thermalCeiling:32, durability:3.5, lethality:5.0, abilities:[{ id:'l3_tac', label:'Full Tactical Suite', type:'cyan', desc:'2–3× cognitive throughput.' },{ id:'l3_react', label:'Compressed Reaction', type:'green', desc:'Neural pathway optimization.' }], modifiers:{ cogEdge:1.2 }, status:'active' },
  { id:'g_L4', name:'Light-4', callsign:'', faction:'Generic', classLabel:'Light-4', tier:4, isGeneric:true, genericClass:'Light', born:null, bio:'L4 — Elite cognitive aug. ~3–5× cognition. Near-instantaneous threat mapping.', specialization:'Strategic cognitive ops. Elite SOF support.', strength:4.5, speed:11.0, endurance:6.0, cognition:8.5, reactionTime:145, thermalCeiling:36, durability:4.5, lethality:6.0, abilities:[{ id:'l4_ooda', label:'OODA Compression', type:'cyan', desc:'Observe-Orient-Decide-Act cycle compressed near machine speed.' },{ id:'l4_mob', label:'L4 Mobility', type:'green', desc:'Full light-class speed platform.' }], modifiers:{ cogEdge:1.25 }, status:'active' },
  { id:'g_L5', name:'Light-5', callsign:'', faction:'Generic', classLabel:'Light-5', tier:5, isGeneric:true, genericClass:'Light', born:null, bio:'L5 — Apex cognitive aug. Near-Titan cognitive processing. ~5–8× baseline cognition.', specialization:'Apex cognitive ops. Strategic command overlay.', strength:5.5, speed:12.0, endurance:7.0, cognition:10.0, reactionTime:115, thermalCeiling:40, durability:5.5, lethality:7.0, abilities:[{ id:'l5_apex', label:'Apex Cognition', type:'cyan', desc:'5–8× baseline throughput. Pre-Titan processing ceiling.' },{ id:'l5_spd', label:'L5 Peak Mobility', type:'green', desc:'Maximum L-class speed.' }], modifiers:{ cogEdge:1.3, mobilityBonus:1.1 }, status:'active' },
  { id:'g_H1', name:'Heavy-1', callsign:'', faction:'Generic', classLabel:'Heavy-1', tier:1, isGeneric:true, genericClass:'Heavy', born:null, bio:'H1 — Entry structural aug. ~1.3× strength, ~1.5× endurance. Skeletal reinforcement only.', specialization:'Physical labor augmentation. Force security baseline.', strength:3.0, speed:6.5, endurance:4.5, cognition:1.8, reactionTime:290, thermalCeiling:26, durability:3.5, lethality:3.5, abilities:[{ id:'h1_skel', label:'Skeletal Reinforcement', type:'amber', desc:'Basic skeletal density increase. Impact resistance +30%.' }], modifiers:{}, status:'active' },
  { id:'g_H2', name:'Heavy-2', callsign:'', faction:'Generic', classLabel:'Heavy-2', tier:2, isGeneric:true, genericClass:'Heavy', born:null, bio:'H2 — Intermediate structural aug. ~1.5–2× strength, ~2× endurance.', specialization:'Close-quarters force. Breach and suppress.', strength:5.0, speed:6.5, endurance:6.5, cognition:2.5, reactionTime:260, thermalCeiling:30, durability:5.5, lethality:5.5, abilities:[{ id:'h2_myo', label:'Myofibril Enhancement', type:'amber', desc:'~1.5–2× sustained force.' },{ id:'h2_dep', label:'Platform Dependent', type:'red', desc:'HXL dependency initiates at H2.' }], modifiers:{ platformDep:true }, status:'active' },
  { id:'g_H3', name:'Heavy-3', callsign:'', faction:'Generic', classLabel:'Heavy-3', tier:3, isGeneric:true, genericClass:'Heavy', born:null, bio:'H3 — Advanced structural aug. 2.5× sustained strength, 3× endurance.', specialization:'Heavy assault. Sustained force application.', strength:7.5, speed:6.8, endurance:9.0, cognition:3.5, reactionTime:210, thermalCeiling:38, durability:8.0, lethality:8.5, abilities:[{ id:'h3_force', label:'2.5× Sustained Force', type:'amber', desc:'2.5× sustained output.' },{ id:'h3_end', label:'3× Endurance', type:'red', desc:'3× endurance ceiling.' }], modifiers:{ enduranceBonus:1.2, platformDep:true }, status:'active' },
  { id:'g_H4', name:'Heavy-4', callsign:'', faction:'Generic', classLabel:'Heavy-4', tier:4, isGeneric:true, genericClass:'Heavy', born:null, bio:'H4 — Elite structural aug. ~3.5–4× strength, ~4× endurance.', specialization:'Industrial heavy assault. Anti-vehicle. Siege operations.', strength:9.5, speed:6.5, endurance:10.5, cognition:4.5, reactionTime:185, thermalCeiling:44, durability:10.0, lethality:11.0, abilities:[{ id:'h4_ind', label:'Industrial Force Output', type:'red', desc:'~3.5–4× strength.' },{ id:'h4_therm', label:'Thermal Management', type:'amber', desc:'Integrated cooling architecture.' }], modifiers:{ enduranceBonus:1.25, durabilityBonus:1.2, platformDep:true }, status:'active' },
  { id:'g_H5', name:'Heavy-5', callsign:'', faction:'Generic', classLabel:'Heavy-5', tier:5, isGeneric:true, genericClass:'Heavy', born:null, bio:'H5 — Apex structural aug. ~5× strength, ~5× endurance. Pre-Titan structural density.', specialization:'Pre-Titan heavy assault. Structural demolition.', strength:12.0, speed:6.0, endurance:13.0, cognition:5.0, reactionTime:175, thermalCeiling:52, durability:13.5, lethality:13.5, abilities:[{ id:'h5_pre', label:'Pre-Titan Output', type:'red', desc:'~5× strength. Structural density approaching Titan threshold.' },{ id:'h5_crit', label:'Platform Critical', type:'amber', desc:'Full HXL platform critical dependency.' }], modifiers:{ enduranceBonus:1.35, durabilityBonus:1.3, platformDep:true }, status:'active' },
  { id:'g_Hy1', name:'Hybrid-1', callsign:'', faction:'Generic', classLabel:'Hybrid-1', tier:1, isGeneric:true, genericClass:'Hybrid', born:null, bio:'Hyb-1 — Entry hybrid. ~1.2× strength, ~1.2× cognition. Coupling tax present.', specialization:'General augmentation baseline. Versatility over specialization.', strength:2.5, speed:7.5, endurance:3.0, cognition:3.0, reactionTime:265, thermalCeiling:27, durability:2.8, lethality:3.0, abilities:[{ id:'hy1_broad', label:'Broad-Spectrum Aug', type:'blue', desc:'Entry L/H integration. Coupling tax reduces peak output vs. single-class.' }], modifiers:{ platformDep:true }, status:'active' },
  { id:'g_Hy2', name:'Hybrid-2', callsign:'', faction:'Generic', classLabel:'Hybrid-2', tier:2, isGeneric:true, genericClass:'Hybrid', born:null, bio:'Hyb-2 — Intermediate hybrid. ~1.5× strength, ~1.8× cognition.', specialization:'Versatile SOF. Balanced engagement profile.', strength:4.5, speed:8.5, endurance:5.5, cognition:5.0, reactionTime:240, thermalCeiling:31, durability:4.5, lethality:5.0, abilities:[{ id:'hy2_int', label:'L/H Integration', type:'blue', desc:'Improved coupling management.' }], modifiers:{ cogEdge:1.05, platformDep:true }, status:'active' },
  { id:'g_Hy3', name:'Hybrid-3', callsign:'', faction:'Generic', classLabel:'Hybrid-3', tier:3, isGeneric:true, genericClass:'Hybrid', born:null, bio:'Hyb-3 — Advanced hybrid. ~2–2.5× strength, ~2.5–3× cognition.', specialization:'Standard institutional SOF. Corporate enforcement.', strength:6.0, speed:8.5, endurance:7.0, cognition:7.0, reactionTime:180, thermalCeiling:36, durability:6.5, lethality:7.0, abilities:[{ id:'hy3_bal', label:'Balanced Hybrid', type:'cyan', desc:'2–2.5× strength, 2.5–3× cognition.' },{ id:'hy3_tax', label:'Coupling Tax', type:'red', desc:'L/H coupling creates metabolic overhead.' }], modifiers:{ cogEdge:1.1, platformDep:true }, status:'active' },
  { id:'g_Hy4', name:'Hybrid-4', callsign:'', faction:'Generic', classLabel:'Hybrid-4', tier:4, isGeneric:true, genericClass:'Hybrid', born:null, bio:'Hyb-4 — Elite hybrid. ~3× strength, ~3.5× cognition. Coupling architecture optimized.', specialization:'Elite institutional operator. Black-unit level.', strength:8.0, speed:10.0, endurance:8.5, cognition:8.5, reactionTime:148, thermalCeiling:42, durability:8.0, lethality:9.5, abilities:[{ id:'hy4_opt', label:'Optimized Coupling', type:'cyan', desc:'L/H outputs approach theoretical dual-integration maximum.' },{ id:'hy4_eli', label:'Elite Operator', type:'blue', desc:'Surpasses single-class at equivalent tier in combined scenarios.' }], modifiers:{ cogEdge:1.15, platformDep:true }, status:'active' },
  { id:'g_Hy5', name:'Hybrid-5', callsign:'', faction:'Generic', classLabel:'Hybrid-5', tier:5, isGeneric:true, genericClass:'Hybrid', born:null, bio:'Hyb-5 — Apex hybrid. ~4–5× strength, ~5× cognition. Near-complete L/H integration.', specialization:'Apex institutional operator. Maximum non-Titan augmentation tier.', strength:9.5, speed:11.5, endurance:10.0, cognition:10.0, reactionTime:118, thermalCeiling:47, durability:9.0, lethality:10.5, abilities:[{ id:'hy5_apex', label:'Apex Hybrid', type:'cyan', desc:'Near-complete L/H integration. Coupling tax minimized.' },{ id:'hy5_crit', label:'Platform Critical', type:'red', desc:'Full HXL critical dependency.' }], modifiers:{ cogEdge:1.2, platformDep:true }, status:'active' },
  { id:'g_T1', name:'Titan-1', callsign:'', faction:'Generic', classLabel:'Titan-1', tier:6, isGeneric:true, genericClass:'Titan', born:null, bio:'Titan-1 — Entry Titan-class. Beyond HXL tier system. Structural density and force output that overwhelms any Hybrid-5.', specialization:'Platform-scale combat. Institutional apex asset.', strength:13.5, speed:9.5, endurance:13.0, cognition:8.0, reactionTime:100, thermalCeiling:65, durability:13.5, lethality:14.5, abilities:[{ id:'t1_scale', label:'Titan-Scale Output', type:'purple', desc:'Platform-scale force. Structural density beyond Hyb-5 maximum.' },{ id:'t1_class', label:'Classified Status', type:'amber', desc:'Titan designation suppressed in most institutional records.' }], modifiers:{ titanScale:1.75, platformScale:true }, status:'classified' },
  { id:'g_T2', name:'Titan-2', callsign:'', faction:'Generic', classLabel:'Titan-2', tier:6, isGeneric:true, genericClass:'Titan', born:null, bio:'Titan-2 — Hardened Titan. Battle-tested platform with sustained operational history.', specialization:'Veteran Titan asset. Proven in sustained ops.', strength:14.5, speed:9.0, endurance:15.0, cognition:8.5, reactionTime:98, thermalCeiling:72, durability:15.0, lethality:15.5, abilities:[{ id:'t2_hard', label:'Hardened Platform', type:'purple', desc:'Battle-stress structural refinement.' },{ id:'t2_end', label:'Extended Ceiling', type:'amber', desc:'Expanded thermal ceiling from operational conditioning.' }], modifiers:{ titanScale:1.88, platformScale:true }, status:'classified' },
  { id:'g_T3', name:'Titan-3', callsign:'', faction:'Generic', classLabel:'Titan-3', tier:6, isGeneric:true, genericClass:'Titan', born:null, bio:'Titan-3 — Theoretical apex Titan. Maximum documented augmentation density. Very few confirmed T3 operators exist.', specialization:'Apex Titan. Maximum documented augmentation.', strength:16.0, speed:8.5, endurance:17.0, cognition:9.0, reactionTime:92, thermalCeiling:85, durability:17.5, lethality:18.0, abilities:[{ id:'t3_apex', label:'Apex Titan Class', type:'purple', desc:'Maximum documented augmentation density.' },{ id:'t3_lim', label:'Biological Limit', type:'red', desc:'Operates near theoretical ceiling. Structural failure risk at extreme output.' }], modifiers:{ titanScale:2.1, platformScale:true }, status:'classified' },
  { id:'g_BASE', name:'Unaugmented', callsign:'', faction:'Generic', classLabel:'Baseline Human', tier:0, isGeneric:true, genericClass:'Baseline', born:null, bio:'Trained, fit adult. No augmentation. ~50kg force output, 270–300ms reaction time. Reference anchor for all HXL scaling.', specialization:'Baseline combat reference. Unaugmented comparator.', strength:1.0, speed:6.5, endurance:1.0, cognition:1.0, reactionTime:285, thermalCeiling:22, durability:1.0, lethality:1.0, abilities:[], modifiers:{}, status:'active' },
];

export const ALL_OPERATORS: Character[] = [...CHARACTERS, ...GENERIC_OPERATORS];

export const GENERIC_GROUPS = [
  { key: 'Light',    label: 'Light Class',  color: '#10b981', desc: 'Cognitive dominant. L1–L5',  ids: ['g_L0','g_L2','g_L3','g_L4','g_L5'] },
  { key: 'Heavy',    label: 'Heavy Class',  color: '#ef4444', desc: 'Structural dominant. H1–H5', ids: ['g_H1','g_H2','g_H3','g_H4','g_H5'] },
  { key: 'Hybrid',   label: 'Hybrid Class', color: '#00d4ff', desc: 'Balanced L/H. Hy1–Hy5',    ids: ['g_Hy1','g_Hy2','g_Hy3','g_Hy4','g_Hy5'] },
  { key: 'Titan',    label: 'Titan Class',  color: '#a855f7', desc: 'Platform-scale. T1–T3',     ids: ['g_T1','g_T2','g_T3'] },
  { key: 'Baseline', label: 'Baseline',     color: '#6b7b96', desc: 'Unaugmented reference',     ids: ['g_BASE'] },
];

export interface Scenario {
  id: string;
  icon: string;
  label: string;
  sub: string;
  roundDur: number;
  mods: { strength: number; speed: number; cognition: number };
  cite: string;
}

export const SCENARIOS: Scenario[] = [
  { id:'cqb',       icon:'⚔',  label:'CQB',         sub:'0–10m',    roundDur:1.5,  mods:{ strength:1.3, speed:0.7, cognition:1.2 }, cite:'Tueller drill: 21ft in 1.5s; draw-to-fire ~1.43s (Lewinski & Hudson, 2003).' },
  { id:'urban',     icon:'🏙', label:'Urban',        sub:'10–100m',  roundDur:8,    mods:{ strength:1.0, speed:1.0, cognition:1.3 }, cite:'Urban combat ~30–80m (Scales, 2003; US Army MOUT FM 3-06).' },
  { id:'open',      icon:'🏔', label:'Open Field',   sub:'100–500m', roundDur:15,   mods:{ strength:0.8, speed:1.3, cognition:1.1 }, cite:'Avg rifle engagement ~300m (US Army Weapons School).' },
  { id:'ambush',    icon:'🎯', label:'Ambush',       sub:'30m init', roundDur:3,    mods:{ strength:0.9, speed:1.1, cognition:1.5 }, cite:'Action beats reaction by ~250ms baseline (Welchman, 2010).' },
  { id:'attrition', icon:'⏱', label:'Attrition',    sub:'Extended', roundDur:60,   mods:{ strength:0.9, speed:0.9, cognition:1.0 }, cite:'Lanchester linear law; thermal collapse at 40°C core (Gonzalez-Alonso et al., 1999).' },
];

export interface Environment {
  id: string;
  icon: string;
  label: string;
  sub: string;
  thermalMod: number;
  mobilityMod: number;
  cite: string;
}

export const ENVIRONMENTS: Environment[] = [
  { id:'temperate', icon:'🌲', label:'Temperate',     sub:'15–25°C',    thermalMod:1.0, mobilityMod:1.0,  cite:'Baseline ~500W heat rejection at 20°C (Sawka et al., 2011).' },
  { id:'desert',    icon:'☀',  label:'Desert',         sub:'40°C+',       thermalMod:0.5, mobilityMod:0.9,  cite:'Core temp +0.15°C/min heavy exertion at 40°C (Taylor & Tipton, 2014).' },
  { id:'arctic',    icon:'❄',  label:'Arctic',         sub:'−20°C+',      thermalMod:1.8, mobilityMod:0.8,  cite:'Cold exposure increases metabolic demand 2–3× vs temperate (Doubt, 1991).' },
  { id:'urban_int', icon:'🏢', label:'Urban Interior', sub:'Controlled',  thermalMod:1.1, mobilityMod:0.85, cite:'Restricted corridors increase close-engagement frequency (FM 3-06).' },
  { id:'zero_g',    icon:'🌌', label:'Zero-G',         sub:'Space/Orbital',thermalMod:0.6, mobilityMod:0.5, cite:'Muscle force output drops ~20% in microgravity (Fitts et al., 2010).' },
];

interface EffectiveStats {
  str: number; spd: number; cog: number; end: number;
  react: number; lethal: number; dur: number; therm: number;
  cStateMult: number;
}

function getEffectiveStats(c: Character, scenario: Scenario, env: Environment): EffectiveStats {
  const sm = scenario.mods;
  let str    = c.strength   * sm.strength;
  let spd    = c.speed      * sm.speed;
  let cog    = c.cognition  * sm.cognition;
  let end    = c.endurance;
  let react  = c.reactionTime;
  let lethal = c.lethality;
  let dur    = c.durability;
  let therm  = c.thermalCeiling * env.thermalMod;
  const m = c.modifiers || {};
  if (m.cogEdge)         cog    *= (m.cogEdge as number);
  if (m.enduranceBonus)  end    *= (m.enduranceBonus as number);
  if (m.lethalityBonus)  lethal *= (m.lethalityBonus as number);
  if (m.durabilityBonus) dur    *= (m.durabilityBonus as number);
  if (m.mobilityBonus)   spd    *= (m.mobilityBonus as number);
  if (m.reactionBonus)   react  *= (m.reactionBonus as number);
  if (m.titanScale)      { const ts = m.titanScale as number; str *= ts; lethal *= ts; dur *= ts; end *= 1.5; }
  if (env.id === 'zero_g') { const cogRatio = cog / str; if (cogRatio > 1.5) cog *= 1.2; else str *= 0.75; }
  spd *= env.mobilityMod;
  return { str, spd, cog, end, react, lethal, dur, therm, cStateMult: (m.cState as number) || 1.0 };
}

export interface CharCount { char: Character; count: number }

interface AggStats extends EffectiveStats { count: number }

export interface CombatRound {
  id: string; label: string; desc: string;
  alphaHP: number; bravoHP: number; dur: number;
  abilities: { side: string; text: string }[];
}

export interface EdgeItem {
  label: string; holder: string; color: string; mag: string; exp: string;
}

export interface CombatResult {
  rounds: CombatRound[];
  edges: EdgeItem[];
  winner: string;
  alphaFinal: number;
  bravoFinal: number;
  alphaStats: AggStats;
  bravoStats: AggStats;
  elapsed: number;
}

export function computeCombat(alphaChars: CharCount[], bravoChars: CharCount[], scenario: Scenario, env: Environment): CombatResult {
  const agg = (chars: CharCount[]): AggStats => {
    const total = chars.reduce((acc, { char, count }) => {
      const s = getEffectiveStats(char, scenario, env);
      return { str: acc.str + s.str * count, spd: acc.spd + s.spd * count, cog: acc.cog + s.cog * count,
               end: acc.end + s.end * count, react: acc.react + s.react, lethal: acc.lethal + s.lethal * count,
               dur: acc.dur + s.dur * count, therm: acc.therm + s.therm * count, n: acc.n + count,
               cStateMult: Math.max(acc.cStateMult, s.cStateMult) };
    }, { str:0,spd:0,cog:0,end:0,react:0,lethal:0,dur:0,therm:0,n:0,cStateMult:1 });
    const n = total.n;
    return { str:total.str/n, spd:total.spd/n, cog:total.cog/n, end:total.end/n,
             react:total.react/chars.length, lethal:total.lethal/n, dur:total.dur/n,
             therm:total.therm/n, count:n, cStateMult:total.cStateMult };
  };

  const alphaStats = agg(alphaChars);
  const bravoStats = agg(bravoChars);
  const fp = (s: AggStats) => { const cogMod = 1 + (s.cog - 1) * 0.2; const spdMod = Math.min(1, s.spd / 10); return s.lethal * cogMod * spdMod; };
  const alphaFP = fp(alphaStats);
  const bravoFP = fp(bravoStats);
  const k = 0.1;
  let alphaHP = alphaStats.count * 100, bravoHP = bravoStats.count * 100;
  const maxA = alphaHP, maxB = bravoHP;
  const rounds: CombatRound[] = [];
  let elapsed = 0;
  const reactDiff = bravoStats.react - alphaStats.react;
  const initWinner = reactDiff > 0 ? 'alpha' : reactDiff < 0 ? 'bravo' : 'even';
  const initDmg = Math.abs(reactDiff) / 1000 * (initWinner === 'alpha' ? alphaFP : bravoFP) * 60;
  if (initWinner === 'alpha') bravoHP -= initDmg;
  else if (initWinner === 'bravo') alphaHP -= initDmg;
  rounds.push({
    id: 'initiative', label: 'Initiative Phase',
    desc: initWinner === 'even' ? 'Matched reaction speeds — simultaneous first engagement.' :
      `${initWinner === 'alpha' ? alphaChars[0].char.name.split(' ').pop() : bravoChars[0].char.name.split(' ').pop()} reacts ${Math.abs(reactDiff).toFixed(0)}ms faster — first-shot advantage applied.`,
    alphaHP: Math.max(0, alphaHP / maxA), bravoHP: Math.max(0, bravoHP / maxB),
    dur: Math.max(alphaStats.react, bravoStats.react) / 1000, abilities: []
  });
  elapsed += rounds[0].dur;
  let round = 0;
  while (alphaHP > 5 && bravoHP > 5 && round < 25) {
    const dur = scenario.roundDur;
    const aCeil = alphaStats.therm * 60, bCeil = bravoStats.therm * 60;
    const aEff = elapsed < aCeil ? 1 : Math.max(0.25, 1 - (elapsed - aCeil) / aCeil);
    const bEff = elapsed < bCeil ? 1 : Math.max(0.25, 1 - (elapsed - bCeil) / bCeil);
    let aDmgMod = aEff, cStateActive = false;
    if (alphaChars.some(({ char }) => char.modifiers?.cState) && alphaHP / maxA < 0.35 && round < 3) {
      aDmgMod *= alphaChars[0].char.modifiers.cState as number;
      cStateActive = true;
    }
    const bDmg = bravoFP * alphaStats.count * k * dur * bEff;
    const aDmg = alphaFP * bravoStats.count * k * dur * aDmgMod;
    alphaHP = Math.max(0, alphaHP - bDmg);
    bravoHP = Math.max(0, bravoHP - aDmg);
    elapsed += dur; round++;
    const abils: { side: string; text: string }[] = [];
    if (cStateActive) abils.push({ side: 'alpha', text: 'C-State activated — H3 burst output. 35% damage bonus applied. Metabolically costly.' });
    if (aEff < 0.85) abils.push({ side: 'alpha', text: `Alpha thermal degrading (${(aEff * 100).toFixed(0)}% efficiency).` });
    if (bEff < 0.85) abils.push({ side: 'bravo', text: `Bravo thermal degrading (${(bEff * 100).toFixed(0)}% efficiency).` });
    rounds.push({
      id: `r${round}`,
      label: round <= 2 ? `Initial Exchange — Round ${round}` : round <= 6 ? `Sustained Engagement — Round ${round}` : `Attrition Phase — Round ${round}`,
      desc: cStateActive ? `${alphaChars[0].char.name.split(' ').pop()} activates C-state — H3 burst output, transient and metabolically expensive.` :
        round <= 2 ? `Initial fire exchange at ${scenario.label} parameters.` :
        round <= 6 ? `Sustained engagement. ${aEff < 0.9 ? 'Alpha thermal load increasing. ' : ''}${bEff < 0.9 ? 'Bravo thermal degrading.' : 'Endurance differential emerging.'}` :
        `Attrition decisive. ${aEff < bEff ? 'Alpha has thermal edge.' : bEff < aEff ? 'Bravo outlasts thermally.' : 'Matched endurance — grinding engagement.'}`,
      alphaHP: Math.max(0, alphaHP / maxA), bravoHP: Math.max(0, bravoHP / maxB), dur, abilities: abils
    });
  }

  const edges: EdgeItem[] = [];
  const rD = bravoStats.react - alphaStats.react;
  edges.push({ label:'Reaction Time', holder:rD>15?'ALPHA':rD<-15?'BRAVO':'EVEN', color:rD>15?'#3b82f6':rD<-15?'#ec4899':'#6b7b96', mag:`${Math.abs(rD).toFixed(0)}ms gap`, exp:Math.abs(rD)<15?'Near-identical reaction speeds. Initiative effectively neutral.':`${rD>0?'Alpha':'Bravo'} reacts ${Math.abs(rD).toFixed(0)}ms faster. First-shot advantage decisive at short range.` });
  const sR=alphaStats.str/bravoStats.str;
  edges.push({ label:'Structural Lethality', holder:sR>1.2?'ALPHA':sR<0.83?'BRAVO':'EVEN', color:sR>1.2?'#3b82f6':sR<0.83?'#ec4899':'#6b7b96', mag:`${alphaStats.str.toFixed(1)}× vs ${bravoStats.str.toFixed(1)}×`, exp:sR>1.2?`Alpha outputs ${sR.toFixed(1)}× structural force.`:sR<0.83?`Bravo holds ${(1/sR).toFixed(1)}× force advantage.`:'Similar structural force.' });
  const cR=alphaStats.cog/bravoStats.cog;
  edges.push({ label:'Cognition (OODA)', holder:cR>1.2?'ALPHA':cR<0.83?'BRAVO':'EVEN', color:cR>1.2?'#3b82f6':cR<0.83?'#ec4899':'#6b7b96', mag:`${alphaStats.cog.toFixed(1)}× vs ${bravoStats.cog.toFixed(1)}×`, exp:cR>1.2?`Alpha processes threats ${cR.toFixed(1)}× faster.`:cR<0.83?'Bravo holds cognitive edge.':'Comparable processing speed.' });
  const eR=alphaStats.end/bravoStats.end;
  edges.push({ label:'Endurance / Thermal', holder:eR>1.2?'ALPHA':eR<0.83?'BRAVO':'EVEN', color:eR>1.2?'#3b82f6':eR<0.83?'#ec4899':'#6b7b96', mag:`${alphaStats.therm.toFixed(0)}min vs ${bravoStats.therm.toFixed(0)}min`, exp:eR>1.15?'Alpha sustains longer. Bravo degrades first in extended engagements.':eR<0.87?'Bravo has deeper reserves.':'Comparable staying power.' });
  const dR=alphaStats.dur/bravoStats.dur;
  edges.push({ label:'Structural Durability', holder:dR>1.2?'ALPHA':dR<0.83?'BRAVO':'EVEN', color:dR>1.2?'#3b82f6':dR<0.83?'#ec4899':'#6b7b96', mag:`${alphaStats.dur.toFixed(1)}× vs ${bravoStats.dur.toFixed(1)}×`, exp:dR>1.2?`Alpha absorbs ${((dR-1)*100).toFixed(0)}% more punishment.`:dR<0.83?'Bravo is harder to bring down.':'Similar damage absorption.' });
  const aPI=alphaChars.some(({char})=>char.modifiers?.platformImmune), bPI=bravoChars.some(({char})=>char.modifiers?.platformImmune);
  const aPD=alphaChars.some(({char})=>char.modifiers?.platformDep), bPD=bravoChars.some(({char})=>char.modifiers?.platformDep);
  if (aPD||bPD||aPI||bPI) {
    edges.push({ label:'Platform Sovereignty', holder:(aPI&&bPD)?'ALPHA':(bPI&&aPD)?'BRAVO':'EVEN', color:(aPI&&bPD)?'#3b82f6':(bPI&&aPD)?'#ec4899':'#6b7b96', mag:`${aPI?'Independent':'Dependent'} vs ${bPI?'Independent':'Dependent'}`, exp:aPD&&!bPD?'Alpha HXL-dependent. Suppressor exposure degrades augmentation.':bPD&&!aPD?'Bravo platform-dependent. Alpha can exploit suppressor tactics.':aPI&&bPI?'Both sides platform-sovereign. Suppression tactics neutralized.':'Platform dependency matched.' });
  }

  const alphaFinal = alphaHP / maxA, bravoFinal = bravoHP / maxB;
  const winner = alphaFinal > bravoFinal + 0.05 ? 'alpha' : bravoFinal > alphaFinal + 0.05 ? 'bravo' : 'draw';
  return { rounds, edges, winner, alphaFinal, bravoFinal, alphaStats, bravoStats, elapsed };
}
