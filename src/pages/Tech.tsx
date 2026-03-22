import { useState } from 'react';

type Tab = 'hxl' | 'augmentation' | 'comparator' | 'exocort';

const tabs: { id: Tab; label: string }[] = [
  { id: 'hxl', label: 'HXL Mesh' },
  { id: 'augmentation', label: 'Aug. Classes' },
  { id: 'comparator', label: 'Comparator' },
  { id: 'exocort', label: 'Exocort' },
];

function HXLPanel() {
  return (
    <>
      <div className="section-header" style={{paddingTop:'3rem'}}>
        <div className="section-tag">Technology / HXL Mesh</div>
        <h2 className="section-title">Hexalattice Interface Layer</h2>
        <p className="section-sub">HXL Mesh is not a device. It is not an implant. It is biology; a self-organizing protein mesh grown from the patient's own stem cells, threaded through augmented tissue using the body's own developmental processes as its scaffold. Enhancement through biology, not replacement with machinery.</p>
      </div>

      <div className="hxl-grid" style={{marginBottom:'2px'}}>
        <div className="hxl-block">
          <div className="lore-block-label">Architecture</div>
          <h3 style={{fontFamily:'var(--sans)',fontSize:'1rem',fontWeight:700,color:'var(--text-bright)',marginBottom:'1rem'}}>What HXL Mesh Is</h3>
          <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8,marginBottom:'1rem'}}>HXL Mesh is living tissue grown from the patient's own cells. Vascular networks arranged in hexagonal tessellation. Neural processing nodes at hexagon vertices. Graphene-reinforced protein matrices for structural support. Carbon nanotube-reinforced conductive fibers for signal transmission. A complete biological system requiring metabolic support and periodic maintenance to sustain coherence.</p>
          <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8}}>Augmented humans remain recognizably human. Capability reveals itself through biological transformation rather than visible hardware. At rest, whispered. Under stress, spoken clearly.</p>
          <div className="operator-vocab" style={{marginTop:'1.5rem'}}>
            <div className="vocab-tag">RUNNING ON SCAFFOLD</div>
            <div className="vocab-tag">RUNNING HOT</div>
            <div className="vocab-tag">GREEN</div>
            <div className="vocab-tag">SEASONED</div>
          </div>
        </div>
        <div className="hxl-block">
          <div className="lore-block-label">Geometry</div>
          <h3 style={{fontFamily:'var(--sans)',fontSize:'1rem',fontWeight:700,color:'var(--text-bright)',marginBottom:'1rem'}}>The Hexagonal Architecture</h3>
          <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8,marginBottom:'1rem'}}>The hexagonal tessellation is not an aesthetic choice. It is the geometric optimum for the engineering problem the mesh solves. Maximum coverage with minimum material. Stress distributed evenly across the structure. Shortest signal paths between distributed nodes. Efficient thermal load management. Modular; sections can be added, removed, or reconfigured without compromising adjacent structural integrity.</p>
          <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8}}>At the molecular level, the hexagonal structure is compatible with XIS crystallographic properties. This is not coincidental. XIS uses the same geometric optimization at the nanoscale that HXL uses at the tissue scale. Theo Kane recognized this compatibility and built above it.</p>
        </div>
      </div>

      <div className="hxl-grid" style={{marginBottom:'2px'}}>
        <div className="hxl-block">
          <div className="lore-block-label">Platform Dependency</div>
          <h3 style={{fontFamily:'var(--sans)',fontSize:'1rem',fontWeight:700,color:'var(--text-bright)',marginBottom:'1rem'}}>The Control Mechanism</h3>
          <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8,marginBottom:'1rem'}}>ParkerGen's dependency model operates through two engineered vectors. Exocort update cycles; cognitive management layers require periodic calibration through ParkerGen-licensed systems; uncalibrated exocort degrades in coherence over months. Reseed Nanite reseeding; the maintenance nanite population that maintains SLL coherence requires periodic restocking through proprietary supply chains. Neither dependency is a biological necessity. Both were engineered.</p>
          <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8}}>Dr. Theo Kane documented this distinction and built a path around it. ParkerGen classified the research, seized the archive, and ensured it never reached the public record. The platform subscription is the mechanism through which dependency generates ongoing revenue. Installation is a one-time event. Maintenance is perpetual.</p>
        </div>
        <div className="hxl-block">
          <div className="lore-block-label">Visibility</div>
          <h3 style={{fontFamily:'var(--sans)',fontSize:'1rem',fontWeight:700,color:'var(--text-bright)',marginBottom:'1rem'}}>The Visibility Mechanism</h3>
          <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8,marginBottom:'1rem'}}>HXL Mesh visibility is a biological property of the architecture, not an engineered feature. The hexagonal pattern is identical across all tiers. What varies is density, coverage, and the threshold at which the pattern becomes visible under stress. At rest, mesh tissue runs 2 to 3 degrees Celsius cooler than adjacent tissue. Under stress, blood pressure increases, vessels expand, and the hexagonal vascular pattern emerges at the surface. There is no bioluminescence. The pattern that emerges is the mesh's vascular architecture becoming visible through the skin as blood flow increases.</p>
          <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8}}>The whisper aesthetic is the biological default of HXL Mesh at rest. The class hierarchy is most readable precisely when capability is being used; which is precisely when it matters most.</p>
        </div>
      </div>

      <div style={{fontFamily:'var(--mono)',fontSize:'0.45rem',color:'var(--teal-dim)',letterSpacing:'0.3em',textTransform:'uppercase',margin:'3rem 0 1.5rem',paddingBottom:'0.75rem',borderBottom:'1px solid var(--border)'}}>XIS Deposit Variants</div>
      <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderLeft:'3px solid var(--teal-dim)',padding:'2rem 2.5rem',marginBottom:'2px'}}>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.42rem',color:'var(--teal-dim)',letterSpacing:'0.25em',textTransform:'uppercase',marginBottom:'0.5rem'}}>Substrate Origin</div>
        <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8,maxWidth:'90ch'}}>XIS originated from the fragmentation of a single extraterrestrial body approximately 150,000 years ago. The fragmentation event distributed material across the inner solar system. The crystallographic and redox properties that define XIS are conserved across all locations. Secondary properties vary by 150 millennia of distinct environmental exposure. Earth-based augmentation research has studied nothing else long enough or carefully enough to fully characterize the range of what XIS can become under different conditions.</p>
      </div>
      <div className="lore-grid" style={{marginBottom:'2px'}}>
        <div className="lore-block"><div className="lore-block-label">Saharan / Earth</div><h3>Baseline Standard</h3><p>Retrieved from the Central Sahara Basin. Refined over decades of commercial augmentation development. All ParkerGen proprietary formulations; HXL Mesh architecture, SLL protein scaffold, Reseed Nanite compatibility; are built above this material. Well-characterized. Stable. The baseline against which every other XIS variant is measured.</p></div>
        <div className="lore-block"><div className="lore-block-label">Belt</div><h3>Radiation-Modified</h3><p>Same ancient fragmentation origin as Saharan material. Spent geological time in vacuum, micro-gravity, and sustained radiation exposure. Radiation-induced lattice modifications and vacuum-adapted surface chemistry produce augmentation with enhanced radiation tolerance and different thermal management properties than Earth-standard HXL. Belt factions have worked with this material for decades without Earth institutional oversight. What they have developed in that operational time is not fully known to Earth-based institutions.</p></div>
        <div className="lore-block"><div className="lore-block-label">Martian</div><h3>Perchlorate-Modified</h3><p>Shaped by perchlorate-rich regolith, extreme UV exposure, and a geological history of ancient wet period followed by prolonged desiccation. Martian augmentation research has operated independently of Earth institutional frameworks since the colony's founding; no ParkerGen epistemic consolidation, no suppressed papers. Platform dependency characteristics of Martian XIS-based augmentation may differ structurally from ParkerGen's HXL model. Whether this represents freedom from platform dependency or simply a different dependency to a different supplier is a question the research record does not yet answer.</p></div>
        <div className="lore-block"><div className="lore-block-label">Europan</div><h3>Uncharacterized</h3><p>Europan XIS spent 150,000 years in the pressurized liquid water environment of Europa's subsurface ocean. Pressure-adapted crystalline structure. Hydration shell modifications throughout the lattice. Potential biological incorporation from Europa's subsurface ocean chemistry; organisms or compounds that may not be fully separable from the substrate without destroying the properties that make it valuable. Augmentation built above Europan XIS behaves differently than anything Earth-standard HXL produces in ways that do not map onto existing classification frameworks. Nobody controls Europan XIS. That condition will not persist.</p></div>
      </div>

      <div style={{fontFamily:'var(--mono)',fontSize:'0.45rem',color:'var(--teal-dim)',letterSpacing:'0.3em',textTransform:'uppercase',margin:'3rem 0 1.5rem',paddingBottom:'0.75rem',borderBottom:'1px solid var(--border)'}}>Off-World Regulatory Vacuum</div>
      <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderLeft:'3px solid var(--unknown-dim)',padding:'2rem 2.5rem',marginBottom:'2px'}}>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.42rem',color:'var(--unknown)',letterSpacing:'0.25em',textTransform:'uppercase',marginBottom:'0.5rem'}}>Beyond Earth Jurisdiction</div>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.4rem',color:'var(--text-faint)',letterSpacing:'0.12em',marginBottom:'1rem'}}>AlphaGuard treaty charter: Earth-Moon space and L4-L5 habitats. Enforcement capacity: diminishing at range. Legal standing beyond: bilateral agreement only.</div>
        <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8,maxWidth:'90ch',marginBottom:'1rem'}}>The consequence is not simply that off-world augmentation is less regulated. It is that off-world augmentation developed without the epistemic consolidation that ParkerGen enforced on Earth; without the suppressed papers, the controlled research funding, the credentialing systems that determined whose findings counted and whose were buried. Off-world augmentation asked different questions, followed different answers, and built different architectures. This produces augmentation variants exceeding Earth-standard HXL in specific operational domains, competing biological paradigms incompatible with ParkerGen's platform dependency model, and black-market off-world XIS reaching Earth producing augmented individuals whose biology does not respond to standard diagnostic protocols.</p>
        <p style={{fontFamily:'var(--mono)',fontSize:'0.72rem',color:'var(--unknown)',letterSpacing:'0.06em'}}>The arms race condition: when the specific properties of Europan XIS become known to Earth-based factions, every institution with resources and motive will move simultaneously. AlphaGuard for regulatory reasons. ParkerGen successor institutions for commercial reasons. SteelCore for military reasons that require no elaboration. WarFox for philosophical reasons; Europan XIS developed entirely outside ParkerGen's epistemic consolidation represents exactly the kind of augmentation knowledge the resistance exists to liberate. The detonation is a Book III narrative trigger. The fuse is burning in Book II's background intelligence layer.</p>
      </div>

      <div style={{fontFamily:'var(--mono)',fontSize:'0.45rem',color:'var(--teal-dim)',letterSpacing:'0.3em',textTransform:'uppercase',margin:'3rem 0 1.5rem',paddingBottom:'0.75rem',borderBottom:'1px solid var(--border)'}}>Integration Process</div>
      <div className="hxl-phase-grid" style={{marginBottom:'2px'}}>
        <div className="hxl-phase"><div className="phase-number">01</div><div className="phase-label">Months 1 to 3</div><div className="phase-name">Genome Mapping</div><p className="phase-desc">Custom mesh architecture designed by AI systems mapping the individual's specific vascular topology, neural pathway distribution, S-Locus density, and metabolic baseline. No two mesh configurations are identical. Stem cells harvested and gene-edited to produce the mesh components the custom design requires.</p></div>
        <div className="hxl-phase"><div className="phase-number">02</div><div className="phase-label">Months 3 to 9</div><div className="phase-name">Surgical Scaffold</div><p className="phase-desc">Seed sites surgically established. The mesh begins growing from anchor points, guided by tissue scaffolding that directs development without replacing it. Operator vocabulary: <em>running on scaffold.</em> 30 to 45% of final capability available. High failure risk in this window.</p></div>
        <div className="hxl-phase"><div className="phase-number">03</div><div className="phase-label">Months 6 to 12</div><div className="phase-name">Biological Integration</div><p className="phase-desc">Vascular integration as the body's circulatory system grows into and through the mesh architecture. Neural pathway establishment follows. The patient is technically augmented but not yet stable. Operator vocabulary: <em>running hot.</em> Identity integration challenges typically peak here.</p></div>
        <div className="hxl-phase"><div className="phase-number">04</div><div className="phase-label">Months 9 to 18</div><div className="phase-name">Operational Green</div><p className="phase-desc">Full capability access. Metabolic costs stabilized. Training period during which the subject learns to work with augmented biology rather than around it. Operator vocabulary: <em>green.</em> Long-term integration eventually produces the seasoned state; neurologically indistinguishable from native biology. <em>The mesh is me now.</em></p></div>
      </div>

      <div style={{fontFamily:'var(--mono)',fontSize:'0.45rem',color:'var(--teal-dim)',letterSpacing:'0.3em',textTransform:'uppercase',margin:'3rem 0 1.5rem',paddingBottom:'0.75rem',borderBottom:'1px solid var(--border)'}}>Class Specifications</div>
      <div className="hxl-phase-grid" style={{gridTemplateColumns:'repeat(4,1fr)',marginBottom:'2px'}}>
        <div className="hxl-phase">
          <div className="phase-number" style={{fontSize:'1.2rem'}}>L-Class</div>
          <div className="phase-name">Light-Class</div>
          {[['Hexagon size','6 to 12mm'],['Coverage','0.3 to 2.8%'],['Count','20 to 180'],['Caloric cost','+1,200 to +2,800 cal/day'],['Rest visibility','Invisible'],['Stress visibility','Faint tracery at high-neural-density regions'],['Primary nanites','Types B and E']].map(([k,v])=>(
            <div key={k} style={{display:'flex',gap:'1rem',marginBottom:'0.35rem'}}>
              <div style={{fontFamily:'var(--mono)',fontSize:'0.42rem',color:'var(--text-faint)',letterSpacing:'0.08em',width:'10rem',flexShrink:0}}>{k}</div>
              <div style={{fontFamily:'var(--mono)',fontSize:'0.42rem',color:'var(--text-dim)',letterSpacing:'0.06em'}}>{v}</div>
            </div>
          ))}
        </div>
        <div className="hxl-phase">
          <div className="phase-number" style={{fontSize:'1.2rem'}}>H-Class</div>
          <div className="phase-name">Heavy-Class</div>
          {[['Hexagon size','11 to 18mm'],['Coverage','3.2 to 12.6%'],['Count','200 to 780'],['Caloric cost','+3,500 to +6,900 cal/day'],['Rest visibility','Subtle at lower tiers; detectable at upper'],['Stress visibility','Bright vascular patterns at peak output'],['Primary nanites','Types C and D'],['Additional','Hemocore-S at H3+. Tri-Loop at H2+.']].map(([k,v])=>(
            <div key={k} style={{display:'flex',gap:'1rem',marginBottom:'0.35rem'}}>
              <div style={{fontFamily:'var(--mono)',fontSize:'0.42rem',color:'var(--text-faint)',letterSpacing:'0.08em',width:'10rem',flexShrink:0}}>{k}</div>
              <div style={{fontFamily:'var(--mono)',fontSize:'0.42rem',color:'var(--text-dim)',letterSpacing:'0.06em'}}>{v}</div>
            </div>
          ))}
        </div>
        <div className="hxl-phase">
          <div className="phase-number" style={{fontSize:'1.2rem'}}>Hyb</div>
          <div className="phase-name">Hybrid-Class</div>
          {[['Hexagon size','16 to 25mm'],['Coverage','13.2 to 31.6%'],['Count','820 to 1,960'],['Caloric cost','+7,900 to +13,900 cal/day'],['Rest visibility','Subtle integrated pattern at upper tiers'],['Stress visibility','Integrated dual-system patterns under combined load'],['Primary nanites','All five types active'],['Constraint','NBFL coupling tax constant even at rest']].map(([k,v])=>(
            <div key={k} style={{display:'flex',gap:'1rem',marginBottom:'0.35rem'}}>
              <div style={{fontFamily:'var(--mono)',fontSize:'0.42rem',color:'var(--text-faint)',letterSpacing:'0.08em',width:'10rem',flexShrink:0}}>{k}</div>
              <div style={{fontFamily:'var(--mono)',fontSize:'0.42rem',color:'var(--text-dim)',letterSpacing:'0.06em'}}>{v}</div>
            </div>
          ))}
        </div>
        <div className="hxl-phase">
          <div className="phase-number" style={{fontSize:'1.2rem'}}>T-1/3</div>
          <div className="phase-name">Titan-Class</div>
          {[['Hexagon size','25 to 40mm'],['Coverage','34.7 to 57.1%'],['Count','2,150 to 3,340'],['Caloric cost','+16,000 to +21,500 cal/day'],['Rest visibility','Standard rest-state only; invisible casually'],['Stress visibility','Unmistakably post-human at full activation'],['Primary nanites','All five at maximum population density'],['Concealment','Behavioral discipline, not biological invisibility']].map(([k,v])=>(
            <div key={k} style={{display:'flex',gap:'1rem',marginBottom:'0.35rem'}}>
              <div style={{fontFamily:'var(--mono)',fontSize:'0.42rem',color:'var(--text-faint)',letterSpacing:'0.08em',width:'10rem',flexShrink:0}}>{k}</div>
              <div style={{fontFamily:'var(--mono)',fontSize:'0.42rem',color:'var(--text-dim)',letterSpacing:'0.06em'}}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{fontFamily:'var(--mono)',fontSize:'0.45rem',color:'var(--teal-dim)',letterSpacing:'0.3em',textTransform:'uppercase',margin:'3rem 0 1.5rem',paddingBottom:'0.75rem',borderBottom:'1px solid var(--border)'}}>Metabolic Costs</div>
      <div className="hxl-grid" style={{marginBottom:'2px'}}>
        <div className="hxl-block">
          <div className="lore-block-label">Caloric Scaling</div>
          <h3 style={{fontFamily:'var(--sans)',fontSize:'1rem',fontWeight:700,color:'var(--text-bright)',marginBottom:'1rem'}}>Aug-Starvation</h3>
          <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8,marginBottom:'1rem'}}>All augmentation is metabolically expensive. This is not a side effect. It is the foundational constraint of the architecture and the primary reason class mobility is structurally limited rather than merely economically limited. Light-Class requires an additional 1,200 to 2,800 calories daily; manageable within normal dietary adjustment. Heavy-Class requires 3,500 to 6,900 additional calories; active nutritional management required. Hybrid-Class requires 7,900 to 13,900 additional calories; the NBFL coupling tax adds overhead above the component sum. Titan-Class requires 16,000 to 21,500 additional calories; dedicated metabolic infrastructure mandatory.</p>
          <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8}}>Aug-starvation: progressive SLL coherence degradation, neurological instability, and systemic failure in populations whose bodies carry augmentation tiers their nutritional circumstances cannot support. The working-class augmentation crisis has two simultaneous drivers. The dependency is both physiological and economic. Addressing one without the other resolves nothing.</p>
        </div>
        <div className="hxl-block">
          <div className="lore-block-label">Lifespan Extension</div>
          <h3 style={{fontFamily:'var(--sans)',fontSize:'1rem',fontWeight:700,color:'var(--text-bright)',marginBottom:'1rem'}}>Current Technology Ceilings (2199)</h3>
          <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8,marginBottom:'1.25rem'}}>These are technological limits, not biological absolutes. Biological aging can be stopped with sufficient technology. The ceilings below reflect what ExoCort AI can currently manage; nanite coordination complexity, cellular monitoring resolution, and unknown failure modes beyond the explored range. As technology improves, ceilings rise. The 280 to 320 year figure is not a biological wall. It is the edge of explored space.</p>
          <div style={{border:'1px solid var(--border)',overflowX:'auto'}}>
            <table>
              <thead><tr><th>Configuration</th><th>Current Maximum</th><th>Limiting Factor</th></tr></thead>
              <tbody>
                <tr><td style={{color:'var(--text-dim)'}}>Unaugmented</td><td>~110 years</td><td>No maintenance systems</td></tr>
                <tr><td style={{color:'var(--text-dim)'}}>Light-Class</td><td>~140 years</td><td>Senescent clearance only 40 to 50% efficiency</td></tr>
                <tr><td style={{color:'var(--text-dim)'}}>Heavy-Class</td><td>~170 years</td><td>No cognitive preservation; Neuro-Mycorrhizae rare</td></tr>
                <tr><td style={{color:'var(--text-dim)'}}>Hybrid-Class</td><td>~220 years</td><td>ExoCort not sophisticated enough for full epigenetic management</td></tr>
                <tr><td style={{color:'var(--text-dim)'}}>Titan-Class</td><td>280 to 320 years</td><td>ExoCort AI cannot yet manage complexity of perfect cellular maintenance at scale</td></tr>
                <tr><td style={{color:'var(--text-dim)'}}>Titan + full xenosymbionts</td><td>320+ years</td><td>Current record: 180 chronological years. Insufficient data beyond.</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{fontSize:'0.72rem',color:'var(--text-faint)',lineHeight:1.75,marginTop:'1rem',fontStyle:'italic'}}>Projected ceilings: 2250: 500 to 800 years (quantum ExoCort processors, improved nanite coordination). 2300: 1,000 to 2,000 years (seamless ExoCort-nanite integration, automated stem cell cycling). 2400 and beyond: biological aging fully arrested. Death only from accidents, violence, psychological breakdown, or enforced termination.</p>
        </div>
      </div>

      <div style={{fontFamily:'var(--mono)',fontSize:'0.45rem',color:'var(--teal-dim)',letterSpacing:'0.3em',textTransform:'uppercase',margin:'3rem 0 1.5rem',paddingBottom:'0.75rem',borderBottom:'1px solid var(--border)'}}>Psychological and Social Limits</div>
      <div className="hxl-grid" style={{marginBottom:'2px'}}>
        <div className="hxl-block">
          <div className="lore-block-label">Psychological Breakdown Timeline</div>
          <h3 style={{fontFamily:'var(--sans)',fontSize:'1rem',fontWeight:700,color:'var(--text-bright)',marginBottom:'1rem'}}>What the Mind Does with Centuries</h3>
          <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8,marginBottom:'1rem'}}>Years 1 to 50: Novelty maintained. Enhanced capabilities feel empowering. Social connections intact. Years 50 to 100: First wave of friends and family age and die. Cultural references become outdated. Mild anhedonia begins. Years 100 to 150: Severe anhedonia. Identity questions; am I still me after 150 years of cellular replacement? Social isolation. Boredom. Years 150 to 200: Personality fragmentation common. Some develop god complexes. Others develop severe depression. Suicide rate spikes; approximately 60% of those who reach 200 choose termination. Years 200 and beyond: Extreme dissociation. Emotional numbness. Existential nihilism. Most describe existence as waiting. Common phrase: I am not alive. I am just not dead.</p>
          <p style={{fontSize:'0.72rem',color:'var(--text-faint)',lineHeight:1.75,marginTop:'1rem',fontStyle:'italic'}}>Observed pattern: approximately 40% choose voluntary termination before 200 years. Approximately 30% continue in severe psychological distress. Approximately 20% adapt through radical personality rewriting, becoming functionally different people. Approximately 10% genuinely thrive. Whether this reflects sociopathy, atypical neurology, or something else is not yet understood.</p>
        </div>
        <div className="hxl-block">
          <div className="lore-block-label">Social and Legal Frameworks</div>
          <h3 style={{fontFamily:'var(--sans)',fontSize:'1rem',fontWeight:700,color:'var(--text-bright)',marginBottom:'1rem'}}>Why Society Won't Allow Unrestricted Immortality</h3>
          <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8,marginBottom:'1rem'}}>Compound interest over 300 years produces unimaginable wealth concentration. Immortal rulers never relinquish control. Population growth becomes unsustainable when nobody dies. Legal frameworks emerging as of 2199: Termination Agreements requiring voluntary termination clauses at Titan-Class augmentation. Longevity Taxes scaling steeply with age; at 200 years approximately 10 million credits annually, at 300 years approximately 50 million credits annually. Generational Equity Laws mandating wealth redistribution after 150 years. Enforcement is debated and contested. Workaround: relocate to unregulated zones.</p>
          <p style={{fontSize:'0.72rem',color:'var(--text-faint)',lineHeight:1.75,marginTop:'1rem',fontStyle:'italic'}}>This is more dystopian than biological mortality. The immortal oligarch does not die. Power concentration becomes absolute. Revolution is the only path to change. The question the augmentation era cannot resolve through augmentation: can the mind survive centuries? And if it cannot, is survival without a functioning mind survival at all?</p>
        </div>
      </div>

      <div style={{fontFamily:'var(--mono)',fontSize:'0.45rem',color:'var(--teal-dim)',letterSpacing:'0.3em',textTransform:'uppercase',margin:'3rem 0 1.5rem',paddingBottom:'0.75rem',borderBottom:'1px solid var(--border)'}}>Nanite Taxonomy</div>
      <div className="lore-grid" style={{marginBottom:'2px'}}>
        <div className="lore-block"><div className="lore-block-label">Type A</div><h3>Maintenance Nanites</h3><p>Repair micro-damage to mesh and surrounding tissues. Clear senescent cells. Extend telomere stability. The Reseed Nanite subtype specifically homes to SLL-tagged compartments, delivering fresh lattice proteins and repair enzymes to maintain SLL coherence through each Exocort update cycle. ParkerGen's Reseed Nanite formulation requires their proprietary stem-cell precursor line; substitution with third-party Type A variants triggers cascade rejection in the SLL architecture. This is the primary platform dependency mechanism.</p></div>
        <div className="lore-block"><div className="lore-block-label">Type B</div><h3>Signal Boosters</h3><p>Enhance neurotransmitter efficiency. Increase neural transmission speed from 10 to 50 Mbps baseline toward 80 to 400 Mbps augmented range. Cluster at synaptic junctions to reduce signal latency. Most significant at Light-Class tiers where neural enhancement is the primary augmentation function.</p></div>
        <div className="lore-block"><div className="lore-block-label">Type C</div><h3>Thermal Regulators</h3><p>Absorb excess heat from mesh activity. Handle burst thermal loads up to approximately 500W. Prevent heat-induced tissue damage during peak activation. Critical at Heavy-Class and Hybrid-Class tiers where sustained physical output generates heat loads the Tri-Loop Coolant Grid alone cannot fully manage.</p></div>
        <div className="lore-block"><div className="lore-block-label">Type D</div><h3>Metabolic Optimizers</h3><p>Enhance mitochondrial ATP production. Improve energy efficiency by approximately 25%. Reduce caloric cost of augmentation relative to unoptimized baseline. The difference between theoretical and actual sustained metabolic cost at a given tier is substantially attributable to Type D function.</p></div>
        <div className="lore-block"><div className="lore-block-label">Type E</div><h3>Immune Sentinels</h3><p>Monitor for infection and oncological development. Early detection at approximately 100-cell stage for oncological threats. Prevent augmentation-induced immune dysregulation. The mesh's integration with the body's immune architecture requires ongoing sentinel function to prevent chronic low-grade inflammation.</p></div>
        <div className="lore-block"><div className="lore-block-label">Population Scale</div><h3>By Tier</h3><p>Light-Class: 10<sup>8</sup> to 10<sup>9</sup> nanites. Heavy-Class: 10<sup>9</sup> to 10<sup>10</sup> nanites. Hybrid-Class: 10<sup>10</sup> to 10<sup>11</sup> nanites. Titan-Class: 10<sup>11</sup> and above. Scale reflects both coverage area and the maintenance demands of higher-tier biological transformation.</p></div>
      </div>

      <div style={{fontFamily:'var(--mono)',fontSize:'0.45rem',color:'var(--teal-dim)',letterSpacing:'0.3em',textTransform:'uppercase',margin:'3rem 0 1.5rem',paddingBottom:'0.75rem',borderBottom:'1px solid var(--border)'}}>Symbiotic Organisms</div>
      <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderLeft:'3px solid var(--teal-dim)',padding:'2rem 2.5rem',marginBottom:'2px'}}>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.42rem',color:'var(--teal-dim)',letterSpacing:'0.25em',textTransform:'uppercase',marginBottom:'0.5rem'}}>Earth-Origin Symbionts</div>
        <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8,maxWidth:'90ch'}}>At higher augmentation tiers, HXL Mesh provides integration points for symbiotic organisms that extend specific biological functions beyond what the mesh architecture alone achieves. Selected, cultured, and in some cases engineered for functional compatibility with HXL-integrated tissue. Not parasites. Organisms whose biological capabilities complement the mesh architecture in ways that expand what augmentation can produce.</p>
      </div>
      <div className="lore-grid" style={{marginBottom:'2px'}}>
        <div className="lore-block"><div className="lore-block-label">Earth-Origin</div><h3>Neuro-Mycorrhizae</h3><p>Fungal organisms adapted for neural tissue colonization. Form distributed networks along HXL neural pathways, extending cognitive processing capacity through parallel fungal signal propagation. Used primarily at Light-Class upper tiers and Hybrid-Class cognitive-forward configurations.</p></div>
        <div className="lore-block"><div className="lore-block-label">Earth-Origin</div><h3>Hemolymph Symbionts</h3><p>Microorganisms adapted for circulatory system residency. Enhance oxygen-carrying capacity, support endurance performance, and contribute to longevity through systemic inflammatory regulation. Most significant in Heavy-Class and Hybrid-Class physical-dominant configurations.</p></div>
        <div className="lore-block"><div className="lore-block-label">Earth-Origin</div><h3>Gut Forge</h3><p>Engineered gut microbiome organisms that synthesize specific compounds; amino acids, cofactors, metabolic intermediates; that HXL Mesh requires in quantities standard dietary intake cannot reliably provide. Converts the digestive system into a partial pharmaceutical manufacturing platform, reducing dependency on external supplementation for mesh maintenance.</p></div>
        <div className="lore-block"><div className="lore-block-label">Earth-Origin</div><h3>Dermal Sentinels</h3><p>Skin-resident organisms providing environmental monitoring and dermal barrier enhancement. Extended sensory function at the skin surface, enhanced UV and chemical threat detection, and support for the mesh's thermal management at the dermal layer.</p></div>
      </div>
      <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderLeft:'3px solid var(--steelcore-dim)',padding:'2rem 2.5rem',marginBottom:'2px'}}>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.42rem',color:'var(--steelcore-dim)',letterSpacing:'0.25em',textTransform:'uppercase',marginBottom:'0.5rem'}}>Belt-Origin Xenosymbionts</div>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.4rem',color:'var(--text-faint)',letterSpacing:'0.12em',marginBottom:'1rem'}}>Rare. Elite and off-world operational access. Developed in environments with no Earth institutional oversight.</div>
        <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8,maxWidth:'90ch'}}>The asteroid belt hosts extremophile organisms adapted over geological time to vacuum, sustained radiation, micro-gravity, and extreme thermal cycling. When introduced to HXL-integrated tissue, these organisms provide augmentation capabilities that Earth-standard symbiont biology cannot replicate; because the environments that produced them do not exist on Earth and the biological adaptations they carry reflect conditions that Earth biology has never been required to solve.</p>
      </div>
      <div className="lore-grid" style={{marginBottom:'2px'}}>
        <div className="lore-block"><div className="lore-block-label">Belt-Origin</div><h3>Crystalline Lattice Organism</h3><p>Silicon-carbon hybrid organisms adapted for high-radiation belt environments. When integrated with HXL bone-reinforcement architecture, produce structural enhancement significantly beyond what graphene-reinforced collagen matrices achieve alone. Bone density and fracture resistance at a level that changes the structural physics of the body. Cannot be cultured in Earth-standard environments without specialized containment.</p></div>
        <div className="lore-block"><div className="lore-block-label">Belt-Origin</div><h3>Radiation Buffer Consortium</h3><p>A community of belt-adapted extremophile organisms providing radiation absorption and repair capacity far beyond baseline human tolerance. Originally identified in belt-mining operations where personnel with high S-Locus density showed unexpected radiation resistance. Earth-side demand for this consortium has been quietly increasing as off-world operational requirements expand.</p></div>
        <div className="lore-block"><div className="lore-block-label">Belt-Origin</div><h3>Thermal Scavenger</h3><p>Heat-metabolizing organisms adapted for extreme thermal environments in belt material processing operations. When integrated with HXL thermal management architecture, convert excess thermal load into metabolic energy rather than releasing it as waste heat; extending the thermal budget of the Tri-Loop Coolant Grid beyond what Type C nanite populations alone can manage.</p></div>
        <div className="lore-block"><div className="lore-block-label">Belt-Origin</div><h3>Distributed Neural Consortium</h3><p>Belt-adapted organisms with fully distributed nervous system architecture; no central processing node, parallel signal propagation throughout the organism. When integrated with HXL neural architecture at Hybrid-Class and Titan-Class tiers, extend multitasking capacity and parallel processing depth beyond what the mesh's node architecture alone achieves. Among the most cognitively transformative xenosymbionts available. Also the least predictable in long-term integration. Institutional augmentation programs do not officially endorse its use. It circulates anyway.</p></div>
      </div>
      <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderLeft:'3px solid var(--unknown-dim)',padding:'2rem 2.5rem',marginBottom:'2px'}}>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.42rem',color:'var(--unknown)',letterSpacing:'0.25em',textTransform:'uppercase',marginBottom:'0.5rem'}}>Europan and Martian Xenosymbionts</div>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.4rem',color:'var(--text-faint)',letterSpacing:'0.12em',marginBottom:'1rem'}}>Classification: Uncharacterized. Access: Extremely limited. Regulatory status: Outside Earth jurisdictional frameworks.</div>
        <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8,maxWidth:'90ch',marginBottom:'1rem'}}>Augmentation research on Mars and at Europa has produced organisms and biological compounds whose properties fall outside the established symbiont taxonomy. Martian research; operating without ParkerGen's epistemic consolidation for decades; has developed organisms adapted to perchlorate-rich environments and extreme UV exposure whose integration properties are not replicated in Earth-standard systems. Europan xenobiological material is in a category of its own. The potential biological incorporation in Europan XIS; organisms or compounds that integrated with the XIS lattice during 150,000 years of subsurface ocean exposure; means the boundary between substrate and symbiont may not exist in Europan material the way it does in Earth-standard augmentation.</p>
        <p style={{fontFamily:'var(--mono)',fontSize:'0.72rem',color:'var(--unknown)',letterSpacing:'0.06em'}}>The augmentation properties of fully Europan-based systems are not characterized. The risks are not characterized. The capabilities are not characterized. This is why everyone will eventually want it.</p>
      </div>

      <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderLeft:'3px solid var(--teal-dim)',padding:'2rem 2.5rem',marginTop:'2px'}}>
        <div className="exocort-canon-label">Canon Note: Platform Independence</div>
        <p className="exocort-canon-text">Standard exocort systems are tethered to ParkerGen's update and calibration infrastructure. Uncalibrated exocort degrades in coherence over months; without licensed reseed cycles, Bodam nanite populations decline. This dependency is not a biological necessity; it is engineered. Dr. Theo Kane documented the architecture of a fully platform-independent exocort and Bodam configuration before his death. ParkerGen seized and buried that research. WarFox's technical mission is the recovery and open-source distribution of that framework; breaking platform lock as a prerequisite to genuine augmentation sovereignty.</p>
      </div>
    </>
  );
}

function AugmentationPanel() {
  return (
    <>
      <div className="section-header" style={{paddingTop:'3rem'}}>
        <div className="section-tag">Classification / Enhancement Tiers</div>
        <h2 className="section-title">Augmentation Classification</h2>
        <p className="section-sub">The global standard for classifying human biological enhancement. Class determines capability ceiling, metabolic cost, legal status, and social position. Hybrid-Class tier is determined by the highest component tier; not the average.</p>
      </div>
      <div className="aug-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Tier Range</th>
              <th>Domain</th>
              <th>Visibility</th>
              <th>Metabolic Cost</th>
              <th>Access Profile</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className="aug-class">Light-Class</span><br/><span className="aug-badge">L1–L5</span></td>
              <td>1–5</td>
              <td>Cognitive, neural, perceptual</td>
              <td>L1–L3: Invisible<br/>L4–L5: Minimal visible markers, social stigma</td>
              <td>Low to moderate. Neurological overhead. Sleep debt accumulates at high tiers.</td>
              <td>L1–L3: Elite / corporate access<br/>L4–L5: Military, tactical, institutional</td>
              <td>Foundation: neural interfaces, gene editing, pharmacology, sensory processing.</td>
            </tr>
            <tr>
              <td><span className="aug-class">Heavy-Class</span><br/><span className="aug-badge">H1–H5</span></td>
              <td>1–5</td>
              <td>Physical augmentation, structural</td>
              <td>H1–H2: Partial concealment possible<br/>H3–H5: Hexagonal biosynthetic patterns, altered proportions, thermal systems; obvious</td>
              <td>High to massive. Caloric demands escalate exponentially with tier. Thermal management critical.</td>
              <td>H1–H2: Industrial, military<br/>H3–H5: Black ops, corporate enforcement</td>
              <td>Foundation: biomechanics, nanomedicine, carbon composites, structural reinforcement.</td>
            </tr>
            <tr>
              <td><span className="aug-class">Hybrid-Class</span><br/><span className="aug-badge">HYB</span></td>
              <td>Classified by highest component</td>
              <td>Co-optimized cognitive-physical systems</td>
              <td>Varies by component composition. Coupling Tax increases visibility at higher tiers.</td>
              <td>Coupling Tax: biological cost of running dual systems simultaneously. Significant at Hyb-4+.</td>
              <td>Military, intelligence, elite institutional. Rare civilian legal access.</td>
              <td>Forbidden configurations exist. L5+H5 is biologically impossible. Tier determined by highest component, not average.</td>
            </tr>
            <tr>
              <td><span className="aug-class">Titan-Class</span><br/><span className="aug-badge">TITAN 1–3</span></td>
              <td>1–3</td>
              <td>Post-human synthesis</td>
              <td>Fundamental biological reengineering. Concealment largely irrelevant at T3.</td>
              <td>Extreme. Requires significant dietary and pharmaceutical management. Longevity protocols mandatory.</td>
              <td>State-sponsored, top-tier corporate R&amp;D, classified military programs.</td>
              <td>Psychological integration failure is primary dropout cause. Documented existential crisis at century-mark for longevity variants.</td>
            </tr>
            <tr>
              <td><span className="aug-class">Omega-Tier</span><br/><span className="aug-badge">THEORETICAL</span></td>
              <td>Experimental</td>
              <td>Distributed consciousness, cognitive singularity</td>
              <td>N/A; post-biological framework</td>
              <td>Unknown. Biological substrate may not apply.</td>
              <td>Theoretical only. Status: contested.</td>
              <td>May be unattainable. Exists primarily as institutional classification for capability boundaries and research corridors.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

function ComparatorPanel() {
  return (
    <>
      <div className="section-header" style={{paddingTop:'3rem'}}>
        <div className="section-tag">Interactive / HXL Augmentation Matrix</div>
        <h2 className="section-title">Augmentation Comparator</h2>
        <p className="section-sub">Adjust bioengineering parameters across augmentation classes and observe projected performance output in real time. Canonical bounds are validated against the HXL technical framework. Parameters outside the canonical envelope are flagged.</p>
      </div>
      <div id="warfox-comparator-root" style={{width:'100%',minHeight:'700px',background:'var(--surface)',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.55rem',color:'var(--text-faint)',letterSpacing:'0.2em',textAlign:'center',padding:'4rem'}}>
          <div style={{marginBottom:'1rem',fontSize:'0.45rem',letterSpacing:'0.3em',color:'var(--teal-dim)',textTransform:'uppercase'}}>Comparator Module</div>
          <div>Interactive comparator component requires the WARFOX Comparator bundle.</div>
          <div style={{marginTop:'0.5rem',fontSize:'0.42rem',color:'var(--text-faint)'}}>Load the WARFOX Comparator script to activate this section.</div>
        </div>
      </div>
    </>
  );
}

function ExocortPanel() {
  return (
    <>
      <div className="section-header" style={{paddingTop:'3rem'}}>
        <div className="section-tag">Technology / Cognitive Extension</div>
        <h2 className="section-title">Exocort Architecture</h2>
        <p className="section-sub">A cognitive-extension architecture that evolves with class, tier, and operational demand. Exocort exists on a spectrum from fully external tool to distributed cognitive ecosystem. Unlike BODAM, which remains external and supervisory, exocort moves progressively closer to the user's active cognition as performance requirements rise.</p>
      </div>
      <div className="exocort-stage-grid">
        <div className="exocort-stage stage-external"><div className="exocort-stage-num">01</div><div className="exocort-stage-label label-external">Integration: None</div><div className="exocort-stage-name">External</div><div className="exocort-shorthand">A tool. Present when needed, absent when not.</div><p className="exocort-desc">Fully external cognition-support platform with no permanent neural residency. Wearable compute, AR lenses, aural systems, collar nodes, environment-linked command infrastructure. Interface via voice, gesture, ocular tracking, or manual query. Higher latency. More explicit interaction. Broadly available.</p><div className="exocort-users">TYPICAL USERS<br/>Baselines · Analysts · Investigators<br/>Executives · Civilian premium systems<br/>Low-tier tactical personnel</div></div>
        <div className="exocort-stage stage-linked"><div className="exocort-stage-num">02</div><div className="exocort-stage-label label-linked">Integration: Dedicated</div><div className="exocort-stage-name">Linked</div><div className="exocort-shorthand">A partner. Calibrated to one person.</div><p className="exocort-desc">External but no longer generic. Persistent high-trust pairing to the user's biological and augmentation profile. Continuous biometric monitoring, persistent user-model adaptation, low-latency augment telemetry. Still bottlenecked by external interface; but it knows you.</p><div className="exocort-users">TYPICAL USERS<br/>Light-2 to Light-4 · Hybrid operators<br/>Command staff · Field tacticians<br/>Elite investigators</div></div>
        <div className="exocort-stage stage-semi"><div className="exocort-stage-num">03</div><div className="exocort-stage-label label-semi">Integration: Partial</div><div className="exocort-stage-name">Semi-Embedded</div><div className="exocort-shorthand">A second channel. Starts to feel like thought.</div><p className="exocort-desc">Main system remains partly external but dedicated interface elements are built into the user; subdermal relay nodes, cranial interface ports, occipital handshake architecture. Persistent neural synchronization. Near-seamless memory access. Identity bleed risk begins to appear at this tier.</p><div className="exocort-users">TYPICAL USERS<br/>Light-4 / Light-5 cognition specialists<br/>Hybrid-4 cognition-first variants<br/>Elite strategists · Black-unit planners</div></div>
        <div className="exocort-stage stage-embedded"><div className="exocort-stage-num">04</div><div className="exocort-stage-label label-embedded">Integration: Full</div><div className="exocort-stage-name">Embedded</div><div className="exocort-shorthand">A second layer. Part of how the user thinks.</div><p className="exocort-desc">True auxiliary cortical architecture physically integrated into the cognitive stack. Implanted cortical interface lattice, deep memory indexing substrate, persistent predictive frameworks. Continuous pre-verbal access. The user does not reach for it. It is already there.</p><div className="exocort-users">TYPICAL USERS<br/>Top cognitive Hybrids · Titan precursors<br/>Experimental command assets<br/>ParkerGen apex planners</div></div>
        <div className="exocort-stage stage-distributed"><div className="exocort-stage-num">05</div><div className="exocort-stage-label label-distributed">Integration: Distributed</div><div className="exocort-stage-name">Distributed</div><div className="exocort-shorthand">A cognitive ecosystem. Spans body, suit, vehicle, network.</div><p className="exocort-desc">Cognition spread across internal, external, remote, and networked nodes. Embedded core layer, external companion processors, remote memory banks, mission-cloud modeling, autonomous supporting agents. Identity diffusion risk is existential. Security failure is catastrophic.</p><div className="exocort-users">TYPICAL USERS<br/>Titans · Omega-adjacent systems<br/>Distributed command intelligences<br/>Sovereign-grade experimental entities</div></div>
      </div>
      <div className="exocort-class-grid">
        <div className="exocort-class-block">
          <div className="exocort-class-label">Baseline &amp; Light-Class</div>
          <div className="exocort-class-name">Cognitive Access Ladder</div>
          <div className="exocort-class-rows">
            <div className="exocort-class-row"><div className="ecr-tier">Baseline</div><span className="ecr-stage ecr-external">External</span></div>
            <div className="exocort-class-row"><div className="ecr-tier">L1–L2</div><span className="ecr-stage ecr-external">External</span></div>
            <div className="exocort-class-row"><div className="ecr-tier">L3</div><span className="ecr-stage ecr-external">External</span> <span className="ecr-stage ecr-linked">Linked</span></div>
            <div className="exocort-class-row"><div className="ecr-tier">L4</div><span className="ecr-stage ecr-linked">Linked</span> <span className="ecr-stage ecr-semi">Semi-Embedded</span></div>
            <div className="exocort-class-row"><div className="ecr-tier">L5</div><span className="ecr-stage ecr-semi">Semi-Embedded</span> <span className="ecr-stage ecr-embedded">Embedded</span></div>
          </div>
        </div>
        <div className="exocort-class-block">
          <div className="exocort-class-label">Hybrid-Class</div>
          <div className="exocort-class-name">Emphasis-Dependent</div>
          <div className="exocort-class-rows">
            <div className="exocort-class-row"><div className="ecr-tier">Hyb-2/3 (cog)</div><span className="ecr-stage ecr-linked">Linked</span></div>
            <div className="exocort-class-row"><div className="ecr-tier">Hyb-4 (cog)</div><span className="ecr-stage ecr-semi">Semi-Embedded</span></div>
            <div className="exocort-class-row"><div className="ecr-tier">Hyb-5 (cog)</div><span className="ecr-stage ecr-semi">Semi-Embedded</span> <span className="ecr-stage ecr-embedded">Embedded</span></div>
            <div className="exocort-class-row"><div className="ecr-tier">Heavy-first</div><span className="ecr-stage ecr-external">External</span> <span className="ecr-stage ecr-linked">Linked</span></div>
            <div className="exocort-class-row"><div className="ecr-tier">Heavy-Class</div><span className="ecr-stage ecr-external">External</span> <span className="ecr-stage ecr-linked">Linked</span></div>
          </div>
        </div>
        <div className="exocort-class-block">
          <div className="exocort-class-label">Titan-Class &amp; Beyond</div>
          <div className="exocort-class-name">Post-Baseline Architecture</div>
          <div className="exocort-class-rows">
            <div className="exocort-class-row"><div className="ecr-tier">Early Titan</div><span className="ecr-stage ecr-embedded">Embedded</span></div>
            <div className="exocort-class-row"><div className="ecr-tier">Mature Titan</div><span className="ecr-stage ecr-embedded">Embedded</span> <span className="ecr-stage ecr-distributed">Distributed</span></div>
            <div className="exocort-class-row"><div className="ecr-tier">Apex Titan</div><span className="ecr-stage ecr-distributed">Distributed</span></div>
            <div className="exocort-class-row"><div className="ecr-tier">Omega-adjacent</div><span className="ecr-stage ecr-distributed">Distributed</span></div>
          </div>
        </div>
      </div>
      <div className="exocort-canon-block">
        <div className="exocort-canon-label">Canon Note: Platform Independence</div>
        <p className="exocort-canon-text">Standard exocort systems are tethered to ParkerGen's update and calibration infrastructure. Uncalibrated exocort degrades in coherence over months; without licensed reseed cycles, Bodam nanite populations decline. This dependency is not a biological necessity; it is engineered. Dr. Theo Kane documented the architecture of a fully platform-independent exocort and Bodam configuration before his death. ParkerGen seized and buried that research. WarFox's technical mission is the recovery and open-source distribution of that framework; breaking platform lock as a prerequisite to genuine augmentation sovereignty.</p>
      </div>
    </>
  );
}

export default function Tech() {
  const [active, setActive] = useState<Tab>('hxl');

  return (
    <div className="page-content">
      <section id="tech">
        <div className="container">
          <div style={{
            display:'flex',
            gap:'2px',
            borderBottom:'1px solid var(--border)',
            marginBottom:'0',
            paddingTop:'2rem',
            position:'sticky',
            top:'56px',
            background:'var(--bg)',
            zIndex:10,
          }}>
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                style={{
                  fontFamily:'var(--mono)',
                  fontSize:'0.48rem',
                  letterSpacing:'0.2em',
                  textTransform:'uppercase',
                  padding:'0.75rem 1.5rem',
                  background: active === t.id ? 'var(--surface)' : 'transparent',
                  color: active === t.id ? 'var(--teal)' : 'var(--text-faint)',
                  border:'none',
                  borderBottom: active === t.id ? '2px solid var(--teal)' : '2px solid transparent',
                  cursor:'pointer',
                  transition:'color 0.2s, border-color 0.2s',
                  marginBottom:'-1px',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {active === 'hxl' && <HXLPanel />}
          {active === 'augmentation' && <AugmentationPanel />}
          {active === 'comparator' && <ComparatorPanel />}
          {active === 'exocort' && <ExocortPanel />}
        </div>
      </section>
    </div>
  );
}
