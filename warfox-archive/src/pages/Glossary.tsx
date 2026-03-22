export default function Glossary() {
  return (
    <div className="page-content">
      <section id="glossary">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Canon Reference v3.2.0+</div>
            <h2 className="section-title">Glossary of Terms</h2>
            <p className="section-sub">All unique terminology, classification systems, and technical designations. Organized by domain. Cross-references noted where relevant.</p>
          </div>
          <div className="glossary-grid">

            <div className="glossary-block">
              <div className="glossary-block-hdr">I / Augmentation Classes</div>
              <div className="glossary-entry">
                <div className="glossary-term">Light-Class</div>
                <div className="glossary-subterm">L1 to L5</div>
                <div className="glossary-def">Cognitive and perceptual augmentation. Neural interfaces, gene editing, pharmacological enhancement, sensory processing, emotional regulation, and mental speed. Five tiers. Foundation: BCI lineage, CRISPR variants, nootropic delivery systems. The dominant augmentation class for corporate, scientific, and intelligence professionals. Elite Light-Class augmentation is invisible by design; the whisper aesthetic. Working-class Light-Class augmentation is visually apparent. Power reads as absence at the upper tiers.</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Heavy-Class</div>
                <div className="glossary-subterm">H1 to H5</div>
                <div className="glossary-def">Physical augmentation and biomechanical enhancement. Superhuman strength, endurance, structural durability, and kinetic output. Five tiers. Foundation: advanced prosthetics, exoskeletal integration, nanomedical structural reinforcement. Hemocore-S required at H3 and above. Tri-Loop Coolant Grid required at H2 and above. Heavy-Class augmentation is visually identifiable at most tiers; the inverse of the whisper aesthetic. The visible augmentation of labor, enforcement, and working-class utility.</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Hybrid-Class</div>
                <div className="glossary-subterm">Hyb-1 to Hyb-5</div>
                <div className="glossary-def">Integrated cognitive-biomechanical systems requiring active neural coordination between Light and Heavy components via the NBFL. Not a simple combination; the coupling tax is the constant biological overhead cost of running both systems simultaneously. Five tiers. Naming convention is cognitive-forward: dominant system leads, subordinate tier follows as a letter designator A through E. Identity is rooted in the dominant augmentation type. Forbidden configurations exist. Hyb-(L5+H5) is biologically impossible.</div>
                <div className="glossary-xref">See also: NBFL, Hybrid Coupling Tax, Hybrid Classification Designators</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Titan-Class</div>
                <div className="glossary-subterm">Titan-1 to Titan-3</div>
                <div className="glossary-def">Post-human synthesis. Self-assembling nanite integration, quantum cognition, bio-synthetic organ replacement, near-indefinite lifespan extension. Three tiers. A qualitative departure from Hybrid-Class rather than a quantitative extension of it. A Titan-1 operative reads externally as an exceptional Hyb-5 to observers without direct diagnostic access. Titan status is not publicly disclosed by most holders. Sub-designation: Titan-1/A denotes precision-biased post-human scaling.</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Omega-Tier</div>
                <div className="glossary-subterm">Theoretical</div>
                <div className="glossary-def">The theoretical ceiling of augmentation architecture. Cognitive singularity and biological computation at a scale that transcends current systems entirely. Quantum neural matrices, distributed consciousness, reality modulation. No confirmed holders. May be unattainable. Exists in the literature as a research horizon rather than an operational classification.</div>
              </div>
            </div>

            <div className="glossary-block">
              <div className="glossary-block-hdr">II / Hybrid Classification Designators</div>
              <div className="glossary-entry">
                <div className="glossary-term">A Designator</div>
                <div className="glossary-subterm">Subordinate Heavy-1</div>
                <div className="glossary-def">Light dominant, minimal heavy integration. Example: Hyb-3A = L3 / H1. The lightest coupling tax threshold.</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">B Designator</div>
                <div className="glossary-subterm">Subordinate Heavy-2</div>
                <div className="glossary-def">Light dominant, moderate physical support. Example: Hyb-5B = L5 / H2. Standard upper-tier command hybrid profile.</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">C Designator</div>
                <div className="glossary-subterm">Subordinate Heavy-3</div>
                <div className="glossary-def">Balanced coupling, elevated tax threshold. Example: Hyb-4C = L4 / H3. Standard field-operative hybrid profile.</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">D Designator</div>
                <div className="glossary-subterm">Subordinate Heavy-4</div>
                <div className="glossary-def">Approaches forbidden configuration threshold. Example: Hyb-5D = L5 / H4. Biologically costly. Rare outside classified programs.</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">E Designator</div>
                <div className="glossary-subterm">Subordinate Heavy-5 / FORBIDDEN at L5</div>
                <div className="glossary-def">Biologically impossible at L5 pairing. No confirmed holders. Documented in ParkerGen restricted clinical literature as the upper forbidden threshold.</div>
              </div>
            </div>

            <div className="glossary-block">
              <div className="glossary-block-hdr">III / Augmentation Pathways</div>
              <div className="glossary-entry">
                <div className="glossary-term">gNexGen</div>
                <div className="glossary-subterm">Gestational NexGen</div>
                <div className="glossary-def">Augmentation architecture designed from conception. The subject's biology is engineered prior to birth to optimize integration potential, cognitive baseline, and physical development trajectory. Available only to those with sufficient wealth or institutional sponsorship at the parental level. Represents the deepest possible platform dependency: the subject never had a baseline biological state independent of ParkerGen's architecture.</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">iNexGen</div>
                <div className="glossary-subterm">Inducted NexGen</div>
                <div className="glossary-def">Augmentation administered post-birth through standard clinical pathways. The majority augmentation pathway across all tiers. Quality, safety, and dependency structure vary dramatically by access level and provider. Black-market iNexGen pathways may produce dependency structures that differ from and may exceed those of legitimate ParkerGen platform systems.</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">C-State</div>
                <div className="glossary-def">The transient heavy-expression surge state. Achieved through custom self-directed genomic conditioning, spinal cognition nest integration, and reinforced support biology. Allows brief approximation of select Heavy-Class 3 output bands without formal reclassification. Metabolically expensive. Mechanically erosive if overused. Not a power upgrade; a last resort with compounding biological cost. Sustained activation causes progressive structural damage.</div>
              </div>
            </div>

            <div className="glossary-block">
              <div className="glossary-block-hdr">IV / Biological Substrate Architecture</div>
              <div className="glossary-entry">
                <div className="glossary-term">XIS</div>
                <div className="glossary-subterm">Xenobiotic Substrate</div>
                <div className="glossary-def">Anomalous xenobiotic substrate originating from the fragmentation of a single extraterrestrial body approximately 150,000 years ago. Interface properties with human mitochondrial architecture enabled the development of HXL Mesh. XIS is the precursor substrate; HXL is what Dr. Theo Kane built using it as the foundation. Four active deposit locations are known: Saharan (Earth baseline, ParkerGen-refined), Belt (radiation-modified, vacuum-adapted), Martian (perchlorate-modified, independent research), and Europan (pressure-adapted, subsurface-ocean-modified, potential biological incorporation from Europa's ocean chemistry; uncharacterized and uncontrolled). The crystallographic and redox properties that define XIS are conserved across all locations. Secondary properties vary by 150,000 years of distinct environmental exposure.</div>
                <div className="glossary-xref">See also: HXL Mesh, S-Locus, XIS Variants</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">S-Locus</div>
                <div className="glossary-def">The endogenous mitochondrial network present in all baseline human biology. The primary biological interface point for HXL Mesh integration. Not itself an augmentation substrate; it is the naturally occurring architecture that XIS interfaces with. Present in all humans regardless of augmentation status. Density and coherence vary by individual and were among the factors the original APM framework was designed to assess.</div>
                <div className="glossary-xref">See also: XIS, HXL Mesh, APM</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">HXL Mesh</div>
                <div className="glossary-subterm">HexaLattice Interface Layer</div>
                <div className="glossary-def">The universal bioengineered augmentation substrate invented by Dr. Theo Kane, derived from XIS and the S-Locus interface architecture. Living tissue grown from the patient's own stem cells; vascular networks in hexagonal tessellation, neural processing nodes at hexagon vertices, graphene-reinforced protein matrices for structural support. Platform dependency is enforced through Exocort update cycles and Reseed Nanite reseeding of the SLL; not pharmaceutical supply chains. The dependency is structural, not chemical. Theo's original HXL architecture was human-centered and platform-independent. ParkerGen's commercialized version inverted both properties.</div>
                <div className="glossary-xref">See also: SLL, Reseed Nanites, Exocort Update Cycle, XIS</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">SLL</div>
                <div className="glossary-subterm">Symbiont Logic Lattice</div>
                <div className="glossary-def">The stable protein scaffold threaded through augmented tissue within which Reseed Nanites operate during Exocort update cycles. Biologically inert without active nanite populations. The SLL is the hardware; Reseed Nanites are the maintenance protocol. SLL coherence degrades without periodic reseeding, producing the dependency mechanism that enforces ParkerGen's platform lock.</div>
                <div className="glossary-xref">See also: Reseed Nanites, Exocort Update Cycle, HXL Mesh</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Reseed Nanites</div>
                <div className="glossary-def">Biological maintenance nanites responsible for reseeding the SLL during Exocort update cycles. The Type A nanite subtype in ParkerGen's formulation. The primary enforcement mechanism of ParkerGen's platform dependency model. Without periodic reseeding, SLL coherence degrades progressively, producing biological dependency that makes unauthorized departure from ParkerGen's clinical infrastructure medically dangerous rather than merely contractually prohibited. Formerly referred to informally as Bodam nanites; that designation is retired.</div>
                <div className="glossary-xref">See also: SLL, Exocort Update Cycle, Nanite Taxonomy</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Hemocore-S</div>
                <div className="glossary-def">Conductive nanofluid suspension that replaces or supplements standard blood plasma in Heavy-Class and Hybrid-Class subjects at H3 and above. Enables rapid electrochemical signal transmission through vascular infrastructure, supports Reseed Nanite transport efficiency, and provides thermal buffering during peak physical output. ParkerGen proprietary formulation keyed to Exocort architecture; third-party substitution triggers substrate rejection cascades. A secondary dependency layer beneath Reseed Nanite reseeding, less discussed publicly but equally binding.</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Aug-starvation</div>
                <div className="glossary-def">Progressive SLL coherence degradation, neurological instability, and systemic failure in augmented individuals whose nutritional and metabolic circumstances cannot support the caloric demands of their augmentation tier. Light-Class requires an additional 1,200 to 2,800 calories daily. Heavy-Class 3,500 to 6,900. Hybrid-Class 7,900 to 13,900. Titan-Class 16,000 to 21,500. The working-class augmentation crisis has two simultaneous drivers; the dependency is both physiological and economic. Addressing one without the other is insufficient to resolve it.</div>
                <div className="glossary-xref">See also: HXL Mesh, Reseed Nanites</div>
              </div>
            </div>

            <div className="glossary-block">
              <div className="glossary-block-hdr">V / Augmentation Systems &amp; Components</div>
              <div className="glossary-entry">
                <div className="glossary-term">BIA</div>
                <div className="glossary-subterm">Biogenic Interface Architecture</div>
                <div className="glossary-def">Dr. Theo Kane's pre-HXL research framework. A working model for translating neural electrochemical signals into machine-readable code without synthetic intermediaries. BIA solved the translation problem theoretically but lacked a viable biological substrate for stable long-term deployment. XIS discovery and S-Locus mapping provided that substrate, allowing BIA principles to be implemented as HXL. Never commercialized. Its existence is a recoverable thread connecting Theo's original intent to what ParkerGen built above it.</div>
                <div className="glossary-xref">See also: XIS, S-Locus, HXL Mesh</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">NBFL</div>
                <div className="glossary-subterm">Neural-Bio Feedback Loop</div>
                <div className="glossary-def">The active integration circuit sustaining Hybrid-Class augmentation. The closed biological loop through which Light-Class cognitive systems and Heavy-Class physical systems exchange load signals in real time. Responsible for the Hybrid coupling tax; neither system can fully suspend awareness of the other, producing continuous metabolic overhead even at rest. NBFL fidelity degrades under extreme duress; the physiological basis for C-state risk in Hyb-5 operatives.</div>
                <div className="glossary-xref">See also: Hybrid Coupling Tax, C-State</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Hybrid Coupling Tax</div>
                <div className="glossary-def">The biological overhead cost of running dual Light-Class and Heavy-Class systems simultaneously in Hybrid-Class augmentation. Produced by the NBFL maintaining continuous load signal exchange between both systems. Present even at rest. Increases under operational stress. Adds metabolic overhead above the sum of both component systems individually.</div>
                <div className="glossary-xref">See also: NBFL</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Tri-Loop Coolant Grid</div>
                <div className="glossary-def">Passive-active thermal regulation circuit embedded in Heavy-Class and Hybrid-Class subjects at H2 and above. Distributed across three anatomical zones: occipital, thoracic, and scapular. Handles burst thermal loads up to approximately 500W. Runs on body heat differential under normal conditions; shifts to active coolant cycling at sustained peak output. Thermal distribution patterns readable by augmentation medical personnel as hardware stress history diagnostics. Elite operators carry thermal suppression overlays as standard countermeasure against thermal imaging detection.</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">CMA</div>
                <div className="glossary-subterm">Cognitive Mirror Architecture</div>
                <div className="glossary-def">SteelCore Dynamics proprietary neural synchronization protocol. Links two augmented subjects via a shared cognitive processing layer, enabling real-time tactical data exchange, mirrored reflex chains, and distributed threat modeling across a bonded pair. Not built on HXL Mesh architecture. Cannot interface with Exocort update infrastructure. Runs on SteelCore's parallel substrate. Associated with the classified Phantom Works Division. Not public knowledge.</div>
                <div className="glossary-xref">See also: Phantom Works Division, Phantom Protocol</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Metabolic Furnace Engine</div>
                <div className="glossary-def">Dr. Malcolm Ross's self-made Titan-Class augmentation architecture. Built for maximum output, then pushed further. Ross treats his own biology as the primary research subject; each threshold crossed becomes the baseline for the next experiment. What looks like disregard for limitation is actually precise documentation of where limits are, followed by deliberate effort to relocate them. The transhumanist absolutism is not nihilism. It is a research program. Capability is the objective. His own body is the data.</div>
              </div>
            </div>

            <div className="glossary-block">
              <div className="glossary-block-hdr">VI / Platform Infrastructure</div>
              <div className="glossary-entry">
                <div className="glossary-term">ExoCort</div>
                <div className="glossary-def">Independent technology corporation and original architect of the exocortex platform; the externalized neural processing layer that became the universal substrate standard for human cognitive augmentation. ExoCort does not manufacture augmentation systems. It builds the foundation that everyone else builds on: the substrate standard, interface protocols, and update architecture that keeps augmented biology stable across decades of operation. Every major faction depends on ExoCort's platform without exception. The brand name has entirely displaced the technical term in common usage; nobody says exocortex anymore. ExoCort's relationship with ParkerGen is structurally cooperative and privately adversarial. ExoCort serves its own interests. It always has.</div>
                <div className="glossary-xref">See also: Exocort Update Cycle, Exocort Architecture, BODAM</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">BODAM</div>
                <div className="glossary-subterm">Body Operations, Device, and Mobility Architecture</div>
                <div className="glossary-def">External embodied interface system governing the body-system loop. Integrates body control, equipment handling, movement logic, and environmental interaction into a unified execution layer. BODAM governs execution; Exocort governs cognition. Civilian variants support rehabilitation and accessibility. Military variants prioritize combat load integration and weapon stabilization. Resistance variants emphasize modularity and independence from corporate dependency infrastructure. Shares no functional relationship with Reseed Nanites beyond coexisting within the augmented body.</div>
                <div className="glossary-xref">See also: ExoCort</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Exocort Update Cycle</div>
                <div className="glossary-def">The scheduled maintenance protocol through which ParkerGen's clinical infrastructure delivers Reseed Nanites to augmented subjects, reseeding the SLL and maintaining HXL Mesh coherence. The enforcement mechanism of platform dependency; subjects who miss cycles experience progressive SLL degradation. The cycle schedule is controlled entirely by ParkerGen's credentialed infrastructure. Independent or black-market systems cannot fully substitute for the proprietary Reseed Nanite formulation without triggering rejection cascades.</div>
                <div className="glossary-xref">See also: Reseed Nanites, SLL, HXL Mesh</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Exocort Architecture</div>
                <div className="glossary-subterm">Five-Stage</div>
                <div className="glossary-def">ParkerGen's branded implementation of the exocortex concept, structured as a five-stage taxonomy governing how HXL Mesh augmentation is deployed, classified, and maintained. Theo Kane used the word exocortex in his original research. ParkerGen commercialized it as Exocort and restructured the developmental framework into a product classification system. The five-stage architecture is the foundation of the class-and-tier hierarchy used across all ParkerGen augmentation programs.</div>
                <div className="glossary-xref">See also: ExoCort, HXL Mesh, APM</div>
              </div>
            </div>

            <div className="glossary-block">
              <div className="glossary-block-hdr">VII / Research Frameworks</div>
              <div className="glossary-entry">
                <div className="glossary-term">APM</div>
                <div className="glossary-subterm">Adaptation Potential Metrics</div>
                <div className="glossary-def">The original diagnostic framework co-developed by Dr. Theo Kane and Dr. Kassandra Adair Kane. A multidimensional clinical instrument assessing safe developmental potential across five axes: identity coherence, cognitive homeostatic range, relational anchoring, motivational coherence, and cultural integration. Output was a narrative profile, not a numerical score. Human-centered and constraint-first; measuring what a person could safely become rather than what category they could be sold into. ParkerGen collapsed the APM into numerical tier placement for productization. Kassandra Kane published a formal objection in 2144. The paper was suppressed by ParkerGen's epistemic consolidation apparatus.</div>
                <div className="glossary-xref">See also: Epistemic Consolidation, HXL Mesh, Exocort Architecture</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Epistemic Consolidation</div>
                <div className="glossary-def">ParkerGen's systematic suppression and reframing of independent augmentation research. The mechanism through which Kassandra Kane's 2144 APM objection paper was buried, through which Theo Kane's original clinical terminology was absorbed into commercial branding, and through which the class-and-tier hierarchy was established as natural and inevitable rather than as a commercial derivative of a human-centered diagnostic framework. Not a single event; an ongoing institutional process operating through regulatory capture, research funding control, credentialing authority, and selective publication access.</div>
                <div className="glossary-xref">See also: APM</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Augmentation Visibility Axis</div>
                <div className="glossary-def">The social and aesthetic principle governing how augmentation reads across class lines. Elite augmentation is invisible; the whisper aesthetic, where power reads as absence and technology appears grown rather than built. Working-class augmentation is visually apparent. Fashion, discrimination, social mobility, and institutional access all flow from this axis. The visibility axis is not accidental. It is a designed feature of the class stratification system.</div>
                <div className="glossary-xref">See also: Whisper Aesthetic</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Whisper Aesthetic</div>
                <div className="glossary-def">The design philosophy governing elite augmentation at Light-Class 4 through 5 and Hybrid-Class upper tiers. Technology that looks grown, not built. Invisible integration. Power that reads as absence. The aesthetic standard of ParkerGen's premium product tier and the visual language of corporate authority in the augmentation era.</div>
                <div className="glossary-xref">See also: Augmentation Visibility Axis</div>
              </div>
            </div>

            <div className="glossary-block">
              <div className="glossary-block-hdr">VIII / Operational Terminology</div>
              <div className="glossary-entry">
                <div className="glossary-term">Zero Division</div>
                <div className="glossary-def">ParkerGen's covert warfare apparatus. The umbrella command structure for all deniable, off-books, and semi-deniable operational units. Sub-unit structure: White Units are on-books institutional security; not part of Zero Division proper. Grey Units handle infiltration, surveillance, corporate espionage, and long-game destabilization; augmentation profile Light-2 to Hybrid-3. Black Units execute surgical violence; assassination, kidnapping, black-site raids, traitor elimination, and counter-resistance action. Crimson Units handle catastrophic containment and destruction; deployed when something must be erased without recoverable evidence; Hyb-4 standard, cognitive-forward, irreversible by design. Built into ParkerGen's founding architecture as a permanent response to anticipated resistance. Current operational status following ParkerGen's institutional collapse: unaccounted for.</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">PROJECT: FAMILIAR</div>
                <div className="glossary-def">SteelCore Dynamics classified program. Developed within the Phantom Works Division. Operational scope and methodology: restricted. Records sealed under federal investigation.</div>
                <div className="glossary-xref">See also: Phantom Protocol, Phantom Works Division</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Phantom Protocol</div>
                <div className="glossary-def">SteelCore Dynamics classified operational framework. The program architecture through which PROJECT: FAMILIAR was developed within the Phantom Works Division.</div>
                <div className="glossary-xref">See also: PROJECT: FAMILIAR, Phantom Works Division</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Phantom Works Division</div>
                <div className="glossary-def">SteelCore Dynamics' classified research and development division. Origin of Phantom Protocol and PROJECT: FAMILIAR. A recruiting destination for displaced Black Unit operators following ParkerGen's institutional collapse.</div>
                <div className="glossary-xref">See also: Phantom Protocol, PROJECT: FAMILIAR</div>
              </div>
            </div>

            <div className="glossary-block">
              <div className="glossary-block-hdr">X / XIS Variants</div>
              <div className="glossary-entry">
                <div className="glossary-term">Saharan XIS</div>
                <div className="glossary-subterm">Earth / Baseline</div>
                <div className="glossary-def">Retrieved by ParkerGen's 2084 geological expedition from the Central Sahara Basin. Refined over decades of commercial augmentation development. All ParkerGen proprietary formulations; HXL Mesh architecture, SLL protein scaffold, Reseed Nanite compatibility; are built above this material. Well-characterized. Stable. The baseline against which every other XIS variant is measured. Earth-based augmentation research has studied nothing else long enough or carefully enough to fully characterize the range of what XIS can become under different conditions.</div>
                <div className="glossary-xref">See also: XIS, HXL Mesh</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Belt XIS</div>
                <div className="glossary-subterm">Radiation-Modified / Vacuum-Adapted</div>
                <div className="glossary-def">Same ancient fragmentation origin as Saharan material. Spent geological time in vacuum, micro-gravity, and sustained radiation exposure. Radiation-induced lattice modifications and vacuum-adapted surface chemistry produce augmentation with enhanced radiation tolerance and different thermal management properties than Earth-standard HXL. Belt factions operating with H3 EVA floor augmentation requirements have worked with this material for decades without Earth institutional oversight. The most accessible off-world source and the most studied outside Earth frameworks.</div>
                <div className="glossary-xref">See also: XIS, Belt / L4-L5 Habitats</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Martian XIS</div>
                <div className="glossary-subterm">Perchlorate-Modified / UV-Adapted</div>
                <div className="glossary-def">Shaped by perchlorate-rich regolith, extreme UV exposure, and a geological history of ancient wet period followed by prolonged desiccation. Martian augmentation research has operated independently of Earth institutional frameworks since the colony's founding; no ParkerGen epistemic consolidation, no suppressed papers, no commercial framework controlling which questions could be asked. Platform dependency characteristics of Martian XIS-based augmentation may differ structurally from ParkerGen's HXL model. Whether this represents freedom from platform dependency or simply a different dependency to a different supplier is a question the research record does not yet answer.</div>
                <div className="glossary-xref">See also: XIS, Mars Colony</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Europan XIS</div>
                <div className="glossary-subterm">Pressure-Adapted / Ocean-Modified / Uncharacterized</div>
                <div className="glossary-def">Spent 150,000 years in Europa's pressurized subsurface ocean of extraordinary chemical complexity. Pressure-adapted crystalline structure. Hydration shell modifications throughout the lattice. Potential biological incorporation from subsurface ocean chemistry; organisms or compounds that integrated with the XIS lattice over geological time and may not be fully separable from the substrate without destroying the properties that make it valuable. Europan XIS properties are not fully characterized. What is known suggests augmentation built above it behaves differently than anything Earth-standard HXL produces; in ways that do not map cleanly onto existing classification frameworks. Nobody controls Europan XIS. That condition will not persist.</div>
                <div className="glossary-xref">See also: XIS, Off-World Regulatory Vacuum</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Off-World Regulatory Vacuum</div>
                <div className="glossary-def">Earth-based augmentation regulation has no meaningful jurisdiction beyond Earth orbit. AlphaGuard's treaty charter covers Earth-Moon space and L4-L5 habitats with diminishing enforcement capacity at range. The consequence is not simply that off-world augmentation is less regulated; it is that off-world augmentation developed without the epistemic consolidation that ParkerGen enforced on Earth. The augmentation landscape off-world asked different questions, followed different answers, and built different architectures. This produces competing biological paradigms incompatible with ParkerGen's platform dependency model; black-market off-world XIS variants reaching Earth that standard diagnostic protocols cannot identify; and the arms-race conditions that converge on Europan XIS as the Book III narrative trigger.</div>
                <div className="glossary-xref">See also: Europan XIS, Epistemic Consolidation, AlphaGuard</div>
              </div>
            </div>

            <div className="glossary-block">
              <div className="glossary-block-hdr">XI / Nanite Taxonomy</div>
              <div className="glossary-entry">
                <div className="glossary-term">Type A: Maintenance Nanites</div>
                <div className="glossary-subterm">Includes Reseed Nanite subtype</div>
                <div className="glossary-def">Repair micro-damage to mesh and surrounding tissues. Clear senescent cells. Extend telomere stability. The Reseed Nanite subtype specifically homes to SLL-tagged compartments, delivering fresh lattice proteins and repair enzymes to maintain SLL coherence through each Exocort update cycle. ParkerGen's Reseed Nanite formulation requires their proprietary stem-cell precursor line; substitution with third-party Type A variants triggers cascade rejection. This is the primary platform dependency mechanism.</div>
                <div className="glossary-xref">See also: Reseed Nanites, SLL, Exocort Update Cycle</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Type B: Signal Boosters</div>
                <div className="glossary-def">Enhance neurotransmitter efficiency. Increase neural transmission speed from 10 to 50 Mbps baseline toward 80 to 400 Mbps augmented range. Cluster at synaptic junctions to reduce signal latency. Most significant at Light-Class tiers where neural enhancement is the primary augmentation function.</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Type C: Thermal Regulators</div>
                <div className="glossary-def">Absorb excess heat from mesh activity. Handle burst thermal loads up to approximately 500W. Prevent heat-induced tissue damage during peak activation. Critical at Heavy-Class and Hybrid-Class tiers where sustained physical output generates heat loads the Tri-Loop Coolant Grid alone cannot fully manage.</div>
                <div className="glossary-xref">See also: Tri-Loop Coolant Grid</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Type D: Metabolic Optimizers</div>
                <div className="glossary-def">Enhance mitochondrial ATP production. Improve energy efficiency by approximately 25%. The difference between theoretical and actual sustained metabolic cost at a given tier is substantially attributable to Type D function.</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Type E: Immune Sentinels</div>
                <div className="glossary-def">Monitor for infection and oncological development. Early detection at approximately 100-cell stage for oncological threats. Prevent augmentation-induced immune dysregulation. The mesh's integration with the body's immune architecture requires ongoing sentinel function to prevent chronic low-grade inflammation.</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Nanite Population Scale</div>
                <div className="glossary-def">Light-Class: 10^8 to 10^9 nanites. Heavy-Class: 10^9 to 10^10. Hybrid-Class: 10^10 to 10^11. Titan-Class: 10^11 and above. Scale reflects both coverage area and the maintenance demands of higher-tier biological transformation.</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Aug-Starvation</div>
                <div className="glossary-def">Progressive SLL coherence degradation, neurological instability, and systemic failure in populations whose bodies carry augmentation tiers their nutritional and metabolic circumstances cannot support. The working-class augmentation crisis has two simultaneous drivers: the dependency is both physiological and economic. Addressing one without the other resolves nothing. Aug-starvation rates are significantly higher in black-market augmented populations due to absence of clinical metabolic management infrastructure.</div>
                <div className="glossary-xref">See also: SLL, Reseed Nanites, Hemocore-S</div>
              </div>
            </div>

            <div className="glossary-block">
              <div className="glossary-block-hdr">XII / Symbiotic Organisms</div>
              <div className="glossary-entry">
                <div className="glossary-term">Neuro-Mycorrhizae</div>
                <div className="glossary-subterm">Earth-Origin</div>
                <div className="glossary-def">Fungal organisms adapted for neural tissue colonization. Form distributed networks along HXL neural pathways, extending cognitive processing capacity through parallel fungal signal propagation. Used primarily at Light-Class upper tiers and Hybrid-Class cognitive-forward configurations.</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Hemolymph Symbionts</div>
                <div className="glossary-subterm">Earth-Origin</div>
                <div className="glossary-def">Microorganisms adapted for circulatory system residency. Enhance oxygen-carrying capacity, support endurance performance, and contribute to longevity through systemic inflammatory regulation. Most significant in Heavy-Class and Hybrid-Class physical-dominant configurations.</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Gut Forge</div>
                <div className="glossary-subterm">Earth-Origin / Engineered</div>
                <div className="glossary-def">Engineered gut microbiome organisms that synthesize specific compounds; amino acids, cofactors, metabolic intermediates; that HXL Mesh requires in quantities standard dietary intake cannot reliably provide. Converts the digestive system into a partial pharmaceutical manufacturing platform, reducing dependency on external supplementation for mesh maintenance.</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Dermal Sentinels</div>
                <div className="glossary-subterm">Earth-Origin</div>
                <div className="glossary-def">Skin-resident organisms providing environmental monitoring and dermal barrier enhancement. Extended sensory function at the skin surface, enhanced UV and chemical threat detection, and support for the mesh's thermal management at the dermal layer.</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Crystalline Lattice Organism</div>
                <div className="glossary-subterm">Belt-Origin Xenosymbiont</div>
                <div className="glossary-def">Silicon-carbon hybrid organisms adapted for high-radiation belt environments. When integrated with HXL bone-reinforcement architecture, produce structural enhancement significantly beyond what graphene-reinforced collagen matrices achieve alone. Bone density and fracture resistance at a level that changes the structural physics of the body. Cannot be cultured in Earth-standard environments without specialized containment.</div>
                <div className="glossary-xref">See also: Belt XIS</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Radiation Buffer Consortium</div>
                <div className="glossary-subterm">Belt-Origin Xenosymbiont</div>
                <div className="glossary-def">A community of belt-adapted extremophile organisms providing radiation absorption and repair capacity far beyond baseline human tolerance. Originally identified in belt-mining operations where personnel with high S-Locus density showed unexpected radiation resistance. Earth-side demand has been quietly increasing as off-world operational requirements expand.</div>
                <div className="glossary-xref">See also: Belt XIS, S-Locus</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Thermal Scavenger</div>
                <div className="glossary-subterm">Belt-Origin Xenosymbiont</div>
                <div className="glossary-def">Heat-metabolizing organisms adapted for extreme thermal environments in belt material processing operations. When integrated with HXL thermal management architecture, convert excess thermal load into metabolic energy rather than releasing it as waste heat; extending the thermal budget of the Tri-Loop Coolant Grid beyond what Type C nanite populations alone can manage.</div>
                <div className="glossary-xref">See also: Belt XIS, Tri-Loop Coolant Grid</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Distributed Neural Consortium</div>
                <div className="glossary-subterm">Belt-Origin Xenosymbiont</div>
                <div className="glossary-def">Belt-adapted organisms with fully distributed nervous system architecture; no central processing node, parallel signal propagation throughout the organism. When integrated with HXL neural architecture at Hybrid-Class and Titan-Class tiers, extend multitasking capacity and parallel processing depth beyond what the mesh's node architecture alone achieves. Among the most cognitively transformative xenosymbionts available. Also the least predictable in long-term integration; psychological effects are significant and not fully characterized. It circulates anyway.</div>
                <div className="glossary-xref">See also: Belt XIS</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Europan and Martian Xenosymbionts</div>
                <div className="glossary-subterm">Classification: Uncharacterized</div>
                <div className="glossary-def">Augmentation research on Mars and at Europa has produced organisms and biological compounds whose properties fall outside the established symbiont taxonomy. The boundary between substrate and symbiont may not exist in Europan material the way it does in Earth-standard augmentation; the two may be inseparable. The augmentation properties of fully Europan-based systems are not characterized. The risks are not characterized. The capabilities are not characterized.</div>
                <div className="glossary-xref">See also: Europan XIS, Martian XIS</div>
              </div>
            </div>

            <div className="glossary-block">
              <div className="glossary-block-hdr">XIII / Lifespan, Longevity &amp; Social Limits</div>
              <div className="glossary-entry">
                <div className="glossary-term">Lifespan Ceiling</div>
                <div className="glossary-subterm">Technology Limit, Not Biological Absolute</div>
                <div className="glossary-def">Current maximum lifespans are constrained by ExoCort AI computational limits, not by fundamental biology. ExoCort cannot yet simultaneously track and maintain every cell across Titan-Class coverage at the required resolution. Unknown failure modes beyond the explored range add additional uncertainty. As technology improves, ceilings rise: projected 500 to 800 years by 2250, 1,000 to 2,000 years by 2300, and biological aging fully arrested by 2400 and beyond. The 280 to 320 year figure in 2199 is not a wall. It is the edge of explored space.</div>
                <div className="glossary-xref">See also: Titan-Class, ExoCort, Nanite Population Scale</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Anhedonia Cascade</div>
                <div className="glossary-def">The progressive psychological deterioration documented in long-lived augmented subjects. Mild anhedonia begins around years 50 to 100 as social connections thin and cultural references become outdated. Severe anhedonia, identity fragmentation, and social isolation characterize years 100 to 150. Years 150 to 200 see personality fragmentation, god complexes, severe depression, and a documented spike in voluntary termination; approximately 60% of those who reach 200 choose to end. Beyond 200 years: extreme dissociation, emotional numbness, existential nihilism. Most describe the state as waiting. The common phrase: I am not alive. I am just not dead.</div>
                <div className="glossary-xref">See also: Voluntary Termination, The Undying</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Voluntary Termination</div>
                <div className="glossary-def">The formal or informal choice to end augmented life. Approximately 40% of Titan-Class subjects choose voluntary termination before 200 years. Legal frameworks in many jurisdictions now require termination agreement clauses at Titan-Class augmentation; at 300 years, mandatory termination is enforced in some jurisdictions and actively contested in others. Black market termination services exist for those who want exit but cannot legally access it. The inverse condition; forced continuation as punishment or control; is an emerging legal and ethical frontier.</div>
                <div className="glossary-xref">See also: Anhedonia Cascade, Termination Agreements, The Undying</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Termination Agreements</div>
                <div className="glossary-def">Legal instruments requiring voluntary termination clauses at Titan-Class augmentation. Many jurisdictions enforce these at specified chronological ages. Enforcement is debated and contested. Workarounds: relocation to unregulated corporate zones. Longevity Taxes represent an economic enforcement parallel; scaling steeply with age to make indefinite continuation economically unsustainable. At 200 years: approximately 10 million credits annually. At 300 years: approximately 50 million credits annually.</div>
                <div className="glossary-xref">See also: Voluntary Termination, Longevity Tax</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Longevity Tax</div>
                <div className="glossary-def">Annual tax scaling with chronological age, applied in jurisdictions with active longevity regulation. Designed to make indefinite biological continuation economically unsustainable for all but the wealthiest augmented subjects. Companion legislation includes Generational Equity Laws mandating wealth redistribution after 150 years. The financial architecture of longevity regulation mirrors the financial architecture of augmentation dependency; cost structures designed to make independence or continuation economically inaccessible without institutional permission.</div>
                <div className="glossary-xref">See also: Termination Agreements, Wealth Concentration</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">Wealth Concentration</div>
                <div className="glossary-def">Compound interest over 300 years produces wealth accumulation at a scale that breaks conventional economic models. Immortal oligarchs do not die. Generational wealth transfer does not occur. Young people are permanently locked out of accumulated power and resources. Gerontocracy becomes literal rather than metaphorical. The augmentation era has produced the formal architecture of a permanent ruling class; not by design, but as the emergent consequence of applying biological continuity to economic systems built on the assumption of mortality.</div>
                <div className="glossary-xref">See also: The Undying, Longevity Tax, Termination Agreements</div>
              </div>
              <div className="glossary-entry">
                <div className="glossary-term">The Undying</div>
                <div className="glossary-def">Informal designation for confirmed long-lived Titan-Class subjects operating beyond 150 chronological years. Three confirmed as of 2199. Common traits: severe personality drift from historical records, social isolation by choice or necessity, reduced emotional range, no close relationships (all outlived), massive resource infrastructure requirements. All three exhibit behavioral patterns consistent with advanced anhedonia cascade; one toward god-complex expression, one toward emotional flatness, one unconfirmed and isolated. They are not enviable. They are a warning that is also an aspiration to the people who will do everything to become them anyway.</div>
                <div className="glossary-xref">See also: Anhedonia Cascade, Titan-Class, Wealth Concentration</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
