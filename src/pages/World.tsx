import { useState } from 'react';

type WorldTab = 'foundation' | 'regions';

const GlobeIcon = () => (
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="8"/>
    <path d="M10 2 Q14 6 14 10 Q14 14 10 18"/>
    <path d="M10 2 Q6 6 6 10 Q6 14 10 18"/>
    <path d="M2 10 Q6 8 10 8 Q14 8 18 10"/>
  </svg>
);

const PlanetIcon = () => (
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="4"/>
    <ellipse cx="10" cy="10" rx="9" ry="4" transform="rotate(-20 10 10)"/>
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3 A7 7 0 1 0 10 17 A5 5 0 1 1 10 3Z"/>
  </svg>
);

const MarsIcon = () => (
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="7"/>
    <path d="M4 10 Q7 8 10 10 Q13 12 16 10"/>
  </svg>
);

const OrbitalIcon = () => (
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="10" cy="10" rx="8" ry="3.5"/>
    <line x1="10" y1="6.5" x2="10" y2="13.5"/>
  </svg>
);

const BeltIcon = () => (
  <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="10" r="2.5"/>
    <circle cx="13" cy="8" r="1.8"/>
    <circle cx="13.5" cy="13" r="1.2"/>
  </svg>
);

interface DistRow { name: string; pct: string; cls: string; }

function DistModule({ icon, rows, note }: { icon: React.ReactNode; rows: DistRow[]; note: string }) {
  return (
    <div className="dist-module">
      <div className="dist-icon">{icon}</div>
      <div className="dist-label">Population Distribution</div>
      <div className="dist-chart">
        {rows.map(r => (
          <div className="dist-row" key={r.name}>
            <span className="dist-name">{r.name}</span>
            <div className="dist-bar-track"><div className={`dist-bar ${r.cls}`} style={{width:r.pct}}></div></div>
            <span className="dist-value">{r.pct}</span>
          </div>
        ))}
      </div>
      <div className="dist-note">{note}</div>
    </div>
  );
}

function FoundationPanel() {
  return (
    <>
      <div className="section-header" style={{paddingTop:'3rem'}}>
        <div className="section-tag">Lore / Foundation</div>
        <h2 className="section-title">World Foundation</h2>
        <p className="section-sub">The mechanisms behind human augmentation: where it came from, who controls it, and what it costs those who depend on it.</p>
      </div>
      <div className="lore-grid">
        <div className="lore-block"><div className="lore-block-label">Origin</div><h3>The Saharan Discovery</h3><p>In 2041, a xenobiological substrate was recovered from deep Saharan excavation sites: ancient, non-terrestrial, and functionally dormant. What made it significant was not its origin but its behavior: it interfaced with human neural tissue without triggering immunological rejection. Designated the Xenobiotic Integration Substrate (XIS), the find rewrote the trajectory of human augmentation research within a decade.</p></div>
        <div className="lore-block"><div className="lore-block-label">Mechanism</div><h3>The Symbiote Framework</h3><p>XIS proteins act as biological translators between synthetic augmentation systems and organic tissue, enabling deep integration without rejection cascades. The symbiote does not replace tissue. It becomes part of it. Early XIS systems required ongoing pharmaceutical support to remain stable; a dependency that ParkerGen inherited, preserved, and quietly engineered into second-generation HXL architecture as a control mechanism rather than a technical necessity. The claim that all augmentation requires lifelong pharmaceutical maintenance is not a biological truth. It is a business model.</p></div>
        <div className="lore-block"><div className="lore-block-label">Control</div><h3>The Platform Lock</h3><p>ParkerGen's dependency model does not rely primarily on pharmaceuticals. It relies on infrastructure. Two vectors sustain the leash: Exocort update cycles; cognitive management layers require periodic calibration, security patches, and software pushes through ParkerGen-controlled systems; and Bodam nanite reseeding; maintenance nanite populations degrade over time and require restocking through licensed supply chains. Miss a cycle and capability degrades. The platform lock is not daily pills. It is measured in months. But it is still a leash, and ParkerGen designed it that way. Augmentation debt is not metaphorical. It is architectural indenture.</p></div>
        <div className="lore-block"><div className="lore-block-label">Access</div><h3>The Enhancement Divide</h3><p>Augmentation class is the clearest indicator of economic and social position in the 22nd century. Elite-tier enhancements are invisible: no scarring, no thermal signatures, no visible hardware. Working-class augmentations are obvious: hexagonal biosynthetic patterns on skin, visible heat dissipation systems, altered proportions. The enhancement divide is not just stratification. It is stratification made permanently visible on the body.</p></div>
        <div className="lore-block"><div className="lore-block-label">Biology</div><h3>The Bio-First Doctrine</h3><p>HXL Mesh is living tissue; grown from the patient's own cells, metabolically supported, biologically integrated. Enhancement through biology, not replacement with machinery. The augmented human remains recognizably human until capability is needed, when vascular patterns emerge like war paint written in living tissue. The operator phrase for full integration: <em>the mesh is me now.</em> It is meant as reassurance. It is not always received that way.</p></div>
        <div className="lore-block"><div className="lore-block-label">Resistance</div><h3>The WarFox Network</h3><p>WarFox is not an organization in the conventional sense. It is a distributed architecture: cells, assets, and operatives who share a common objective: breaking the corporate monopoly on human biological enhancement. The primary technical mission: open-sourcing independent exocort architecture and Bodam workarounds that sever platform dependency without destabilizing the underlying augmentation. The blueprint for this exists. It was built by Dr. Theo Kane. ParkerGen seized it. WarFox intends to recover and distribute it. The work is slow. The stakes are the body itself.</p></div>
      </div>
    </>
  );
}

function RegionsPanel() {
  return (
    <>
      <div className="section-header" style={{paddingTop:'3rem'}}>
        <div className="section-tag">Geographic / Regional Records</div>
        <h2 className="section-title">Regional Profiles</h2>
        <p className="section-sub">The augmentation landscape varies significantly by region; on Earth and beyond it. Climate, economics, governance, and culture shape not just access, but what augmentation means in each place. Off-world settlements introduce entirely new constraint frameworks.</p>
      </div>

      <div style={{marginBottom:'1.5rem'}}>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.5rem',color:'var(--teal)',letterSpacing:'0.3em',textTransform:'uppercase',padding:'0.6rem 0',borderBottom:'1px solid var(--teal-faint)',marginBottom:'2px'}}>Surface / Earth</div>
      </div>
      <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderLeft:'3px solid var(--teal-dim)',padding:'2rem 2.5rem',marginBottom:'2px'}}>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.45rem',color:'var(--teal-dim)',letterSpacing:'0.25em',textTransform:'uppercase',marginBottom:'0.5rem'}}>Earth (Surface)</div>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.42rem',color:'var(--text-faint)',letterSpacing:'0.15em',marginBottom:'0.85rem'}}>Densest Population / Politically Contested</div>
        <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8,maxWidth:'90ch'}}>The most regulated environment in the solar system. Corporate and state hybrid zones create a patchwork of augmentation law with no unified standard. Environmental recovery uneven across regions. The political sensitivity of augmentation is highest here; four billion baseline humans means baseline human votes still matter, which makes Earth the only place where democratic pressure on corporate augmentation monopolies has produced any legal friction at all.</p>
      </div>
      <div className="dist-overall-block" style={{borderLeftColor:'var(--teal-dim)'}}>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.42rem',color:'var(--teal-dim)',letterSpacing:'0.25em',textTransform:'uppercase',marginBottom:'0.3rem'}}>Earth (Surface)</div>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.4rem',color:'var(--text-faint)',letterSpacing:'0.1em',marginBottom:'1.4rem'}}>Aggregate distribution across all surface regions</div>
        <div className="dist-icon" style={{marginBottom:'0.8rem'}}><GlobeIcon /></div>
        <div className="dist-label">Population Distribution Matrix</div>
        <div className="dist-chart">
          <div className="dist-row"><span className="dist-name">Baseline</span><div className="dist-bar-track"><div className="dist-bar dist-bar--baseline" style={{width:'72%'}}></div></div><span className="dist-value">72%</span></div>
          <div className="dist-row"><span className="dist-name">Light</span><div className="dist-bar-track"><div className="dist-bar dist-bar--light" style={{width:'20%'}}></div></div><span className="dist-value">20%</span></div>
          <div className="dist-row"><span className="dist-name">Heavy</span><div className="dist-bar-track"><div className="dist-bar dist-bar--heavy" style={{width:'6%'}}></div></div><span className="dist-value">6%</span></div>
          <div className="dist-row"><span className="dist-name">Hybrid</span><div className="dist-bar-track"><div className="dist-bar dist-bar--hybrid" style={{width:'1.8%'}}></div></div><span className="dist-value">1.8%</span></div>
          <div className="dist-row"><span className="dist-name">Titan+</span><div className="dist-bar-track"><div className="dist-bar dist-bar--titan" style={{width:'0.2%'}}></div></div><span className="dist-value">0.2%</span></div>
        </div>
        <div className="dist-note">Baseline-majority, Light-dominant augmentation</div>
      </div>

      <div className="region-grid" style={{marginBottom:'4rem'}}>
        <div className="region-card" data-region="north-america">
          <div className="region-name">North America</div>
          <div className="region-tag">Corporate Dominance Zone</div>
          <p className="region-body">Corporate monopolization at its most mature. Extreme wealth concentration at the augmentation tier ceiling. High-tier military augmentation programs classified and well-funded. The enhancement divide is widest here; and most culturally normalized, which makes it most insidious. Augmentation debt is generational.</p>
          <hr className="dist-divider"/>
          <DistModule icon={<GlobeIcon />} rows={[
            {name:'Baseline',pct:'58%',cls:'dist-bar--baseline'},
            {name:'Light',pct:'24%',cls:'dist-bar--light'},
            {name:'Heavy',pct:'12%',cls:'dist-bar--heavy'},
            {name:'Hybrid',pct:'5%',cls:'dist-bar--hybrid'},
            {name:'Titan+',pct:'1%',cls:'dist-bar--titan'},
          ]} note="Corporate high-augmentation zone" />
        </div>
        <div className="region-card" data-region="europe">
          <div className="region-name">Europe</div>
          <div className="region-tag">Regulated / Contested</div>
          <p className="region-body">Most developed regulatory framework for augmentation access. Social safety nets provide basic Light-Class access in several nations. Philosophical and bioethical debates are most active here. Corporate zone law has made the least inroads. Resistance movements operate more openly than elsewhere.</p>
          <hr className="dist-divider"/>
          <DistModule icon={<GlobeIcon />} rows={[
            {name:'Baseline',pct:'76%',cls:'dist-bar--baseline'},
            {name:'Light',pct:'18%',cls:'dist-bar--light'},
            {name:'Heavy',pct:'4%',cls:'dist-bar--heavy'},
            {name:'Hybrid',pct:'1.7%',cls:'dist-bar--hybrid'},
            {name:'Titan+',pct:'0.3%',cls:'dist-bar--titan'},
          ]} note="Regulated baseline-majority system" />
        </div>
        <div className="region-card" data-region="east-asia">
          <div className="region-name">East Asia</div>
          <div className="region-tag">State-Directed Programs</div>
          <p className="region-body">State-controlled enhancement programs provide collective augmentation access at the cost of individual sovereignty over enhancement choices. Collective vs. individual tension is the defining cultural conflict. Some state programs have achieved Heavy-Class deployment at population scale; unprecedented.</p>
          <hr className="dist-divider"/>
          <DistModule icon={<GlobeIcon />} rows={[
            {name:'Baseline',pct:'52%',cls:'dist-bar--baseline'},
            {name:'Light',pct:'28%',cls:'dist-bar--light'},
            {name:'Heavy',pct:'14%',cls:'dist-bar--heavy'},
            {name:'Hybrid',pct:'5%',cls:'dist-bar--hybrid'},
            {name:'Titan+',pct:'1%',cls:'dist-bar--titan'},
          ]} note="State-scaled enhancement penetration" />
        </div>
        <div className="region-card" data-region="south-asia">
          <div className="region-name">South Asia</div>
          <div className="region-tag">Inequality / Black Market</div>
          <p className="region-body">Massive economic stratification. Thriving and sophisticated black market augmentation infrastructure. Grassroots resistance and mutual aid networks. Some of the most innovative augmentation engineering happens here; constraint-driven problem solving with non-corporate supply chains. High risk, high ingenuity.</p>
          <hr className="dist-divider"/>
          <DistModule icon={<GlobeIcon />} rows={[
            {name:'Baseline',pct:'78%',cls:'dist-bar--baseline'},
            {name:'Light',pct:'11%',cls:'dist-bar--light'},
            {name:'Heavy',pct:'7%',cls:'dist-bar--heavy'},
            {name:'Hybrid',pct:'3%',cls:'dist-bar--hybrid'},
            {name:'Titan+',pct:'1%',cls:'dist-bar--titan'},
          ]} note="Baseline-majority, black-market augmentation depth" />
        </div>
        <div className="region-card" data-region="africa">
          <div className="region-name">Africa</div>
          <div className="region-tag">Innovation Leadership</div>
          <p className="region-body">Climate adaptation augmentation is the primary development driver; not luxury. The continent leads in constraint-driven augmentation innovation and has produced multiple independent XIS cultivation programs. Resource extraction conflicts shape augmentation access patterns significantly by region. Not a monolith. Northern, East, West, and Southern Africa present substantially different landscapes.</p>
          <hr className="dist-divider"/>
          <DistModule icon={<GlobeIcon />} rows={[
            {name:'Baseline',pct:'71%',cls:'dist-bar--baseline'},
            {name:'Light',pct:'14%',cls:'dist-bar--light'},
            {name:'Heavy',pct:'9%',cls:'dist-bar--heavy'},
            {name:'Hybrid',pct:'5%',cls:'dist-bar--hybrid'},
            {name:'Titan+',pct:'1%',cls:'dist-bar--titan'},
          ]} note="Adaptive innovation, uneven access" />
        </div>
        <div className="region-card" data-region="latin-america">
          <div className="region-name">Latin America</div>
          <div className="region-tag">Mixed Systems</div>
          <p className="region-body">Mixed institutional landscape. Cartel control of augmentation black markets in some regions; populist state programs in others. Some of the most politically active resistance movements operate here. The pharmaceutical supply chain is actively contested, with multiple competing black market cultivation networks.</p>
          <hr className="dist-divider"/>
          <DistModule icon={<GlobeIcon />} rows={[
            {name:'Baseline',pct:'71%',cls:'dist-bar--baseline'},
            {name:'Light',pct:'14%',cls:'dist-bar--light'},
            {name:'Heavy',pct:'8%',cls:'dist-bar--heavy'},
            {name:'Hybrid',pct:'6%',cls:'dist-bar--hybrid'},
            {name:'Titan+',pct:'1%',cls:'dist-bar--titan'},
          ]} note="Mixed systems, elevated hybrid conflict layer" />
        </div>
        <div className="region-card" data-region="middle-east">
          <div className="region-name">Middle East</div>
          <div className="region-tag">Religious Variation / Elite Access</div>
          <p className="region-body">Religious variation in augmentation acceptance creates significant intra-regional divergence. Oil wealth concentrated in certain states enables elite-tier access for small populations. Climate-driven migration and water scarcity are reshaping which augmentations are considered essential vs. luxury.</p>
          <hr className="dist-divider"/>
          <DistModule icon={<GlobeIcon />} rows={[
            {name:'Baseline',pct:'75%',cls:'dist-bar--baseline'},
            {name:'Light',pct:'13%',cls:'dist-bar--light'},
            {name:'Heavy',pct:'6%',cls:'dist-bar--heavy'},
            {name:'Hybrid',pct:'5%',cls:'dist-bar--hybrid'},
            {name:'Titan+',pct:'1%',cls:'dist-bar--titan'},
          ]} note="Baseline-majority, elite augmentation concentration" />
        </div>
        <div className="region-card" data-region="oceania">
          <div className="region-name">Oceania</div>
          <div className="region-tag">Refugee Influx / Experimental</div>
          <p className="region-body">Significant climate refugee influx reshaping demographic and institutional composition. Isolated experimental augmentation communities; some state-sanctioned, some not. Low population density enables some experimental programs that would face stronger institutional resistance elsewhere. The Pacific island displacement crisis has created both demand and urgency for climate-adaptive augmentation.</p>
          <hr className="dist-divider"/>
          <DistModule icon={<GlobeIcon />} rows={[
            {name:'Baseline',pct:'67%',cls:'dist-bar--baseline'},
            {name:'Light',pct:'17%',cls:'dist-bar--light'},
            {name:'Heavy',pct:'8%',cls:'dist-bar--heavy'},
            {name:'Hybrid',pct:'7%',cls:'dist-bar--hybrid'},
            {name:'Titan+',pct:'1%',cls:'dist-bar--titan'},
          ]} note="Experimental adaptation zone" />
        </div>
      </div>

      <div style={{marginBottom:'1.5rem'}}>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.5rem',color:'var(--steelcore)',letterSpacing:'0.3em',textTransform:'uppercase',padding:'0.6rem 0',borderBottom:'1px solid var(--steelcore-faint)',marginBottom:'2px'}}>Off-World / Beyond Earth Jurisdiction</div>
      </div>
      <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderLeft:'3px solid var(--steelcore-dim)',padding:'2rem 2.5rem',marginBottom:'2px'}}>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.45rem',color:'var(--steelcore-dim)',letterSpacing:'0.25em',textTransform:'uppercase',marginBottom:'0.5rem'}}>Off-World Settlements</div>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.42rem',color:'var(--text-faint)',letterSpacing:'0.15em',marginBottom:'0.85rem'}}>Corporate Sovereignty / Survival Infrastructure / Regulatory Vacuum</div>
        <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8,maxWidth:'90ch'}}>Beyond Earth's atmosphere, no unified augmentation law applies. Corporate zone law reaches its most absolute expression here; and in some locations, there is no law at all beyond the contract. Augmentation is not a social question off-world. It is an engineering constraint. The body that cannot survive the environment is a liability, and liability has a price. What Earth debates in legislatures and bioethics committees, the Belt resolves in actuarial tables.</p>
      </div>
      <div className="dist-overall-block" style={{borderLeftColor:'var(--steelcore-dim)'}}>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.42rem',color:'var(--steelcore-dim)',letterSpacing:'0.25em',textTransform:'uppercase',marginBottom:'0.3rem'}}>Off-World Settlements</div>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.4rem',color:'var(--text-faint)',letterSpacing:'0.1em',marginBottom:'1.4rem'}}>Aggregate distribution across all off-world installations</div>
        <div className="dist-icon" style={{marginBottom:'0.8rem'}}><PlanetIcon /></div>
        <div className="dist-label">Population Distribution Matrix</div>
        <div className="dist-chart">
          <div className="dist-row"><span className="dist-name">Baseline</span><div className="dist-bar-track"><div className="dist-bar dist-bar--baseline" style={{width:'15%'}}></div></div><span className="dist-value">15%</span></div>
          <div className="dist-row"><span className="dist-name">Light</span><div className="dist-bar-track"><div className="dist-bar dist-bar--light" style={{width:'17%'}}></div></div><span className="dist-value">17%</span></div>
          <div className="dist-row"><span className="dist-name">Heavy</span><div className="dist-bar-track"><div className="dist-bar dist-bar--heavy" style={{width:'48%'}}></div></div><span className="dist-value">48%</span></div>
          <div className="dist-row"><span className="dist-name">Hybrid</span><div className="dist-bar-track"><div className="dist-bar dist-bar--hybrid" style={{width:'18%'}}></div></div><span className="dist-value">18%</span></div>
          <div className="dist-row"><span className="dist-name">Titan+</span><div className="dist-bar-track"><div className="dist-bar dist-bar--titan" style={{width:'2%'}}></div></div><span className="dist-value">2%</span></div>
        </div>
        <div className="dist-note">Augmentation as survival infrastructure</div>
      </div>

      <div className="region-grid">
        <div className="region-card" data-region="luna">
          <div className="region-name">Luna (Industrial Arcologies)</div>
          <div className="region-tag">Helium-3 / Orbital Launch Infrastructure</div>
          <p className="region-body">Corporate sovereignty zones at their most complete expression. Helium-3 processing and orbital mass-launch infrastructure demand physical augmentation that Earth regulations would never permit at the speed corporate contracts require. The minimum viable augmentation tier for standard lunar industrial work is H2; the radiation environment, gravity differential, and EVA exposure make anything below it a liability. Workers arrive on debt-indenture packages and leave, if they leave, seasoned in a way Earth operators rarely achieve.</p>
          <hr className="dist-divider"/>
          <DistModule icon={<MoonIcon />} rows={[
            {name:'Baseline',pct:'8%',cls:'dist-bar--baseline'},
            {name:'Light',pct:'10%',cls:'dist-bar--light'},
            {name:'Heavy',pct:'60%',cls:'dist-bar--heavy'},
            {name:'Hybrid',pct:'20%',cls:'dist-bar--hybrid'},
            {name:'Titan+',pct:'2%',cls:'dist-bar--titan'},
          ]} note="Heavy-Class industrial majority" />
        </div>
        <div className="region-card" data-region="mars">
          <div className="region-name">Mars (Subsurface + Domed)</div>
          <div className="region-tag">Long-Term Low-Gravity Adaptation / Self-Reliance Culture</div>
          <p className="region-body">Mars skews Heavy-Class in a way no Earth region does. Frontier culture, structural habitat demands, and the psychological weight of knowing resupply is months away; not hours; produce an augmented population that prioritizes physical capability and self-sufficiency over cognitive refinement. Independent XIS cultivation is the most aggressively developed here, driven by the pharmaceutical supply chain's months-long latency from Earth. Success rates are contested. The will to attempt it regardless is not.</p>
          <hr className="dist-divider"/>
          <DistModule icon={<MarsIcon />} rows={[
            {name:'Baseline',pct:'17%',cls:'dist-bar--baseline'},
            {name:'Light',pct:'13%',cls:'dist-bar--light'},
            {name:'Heavy',pct:'50%',cls:'dist-bar--heavy'},
            {name:'Hybrid',pct:'18%',cls:'dist-bar--hybrid'},
            {name:'Titan+',pct:'2%',cls:'dist-bar--titan'},
          ]} note="Frontier heavy-adaptation society" />
        </div>
        <div className="region-card" data-region="orbital">
          <div className="region-name">Orbital Infrastructure</div>
          <div className="region-tag">Transit &amp; Industrial / Rotating Population</div>
          <p className="region-body">Orbital stations, L-point habitats, and transit platforms represent the most transient augmented population in the solar system; workers cycling through on six-to-eighteen-month contracts under corporate jurisdiction with no Earth labor law applicability. Heavy-Class augmentation is standard for EVA and industrial roles. The psychological cost of long-duration orbital rotation on augmented nervous systems; coupling with altered gravity, radiation exposure, and social isolation; is a documented but underreported crisis.</p>
          <hr className="dist-divider"/>
          <DistModule icon={<OrbitalIcon />} rows={[
            {name:'Baseline',pct:'14%',cls:'dist-bar--baseline'},
            {name:'Light',pct:'15%',cls:'dist-bar--light'},
            {name:'Heavy',pct:'54%',cls:'dist-bar--heavy'},
            {name:'Hybrid',pct:'15%',cls:'dist-bar--hybrid'},
            {name:'Titan+',pct:'2%',cls:'dist-bar--titan'},
          ]} note="Rotational labor, Heavy-Class operational dominance" />
        </div>
        <div className="region-card" data-region="belt">
          <div className="region-name">Belt / L4-L5 Habitats</div>
          <div className="region-tag">High Industrial Hazard / Extreme EVA Exposure</div>
          <p className="region-body">The furthest reach of the corporate augmentation model; and its most unambiguous expression. Injury in the Belt equals death. That is not a workplace safety statistic. It is a resource allocation framework that corporate contractors have built their insurance models around. H4–H5 is common here not because workers sought it but because structural tolerance at high EVA exposure became the actuarial minimum. The psychological cost of long-duration isolation on augmented nervous systems is documented and ignored with equal consistency by every institutional actor involved.</p>
          <hr className="dist-divider"/>
          <DistModule icon={<BeltIcon />} rows={[
            {name:'Baseline',pct:'5%',cls:'dist-bar--baseline'},
            {name:'Light',pct:'7%',cls:'dist-bar--light'},
            {name:'Heavy',pct:'64%',cls:'dist-bar--heavy'},
            {name:'Hybrid',pct:'21%',cls:'dist-bar--hybrid'},
            {name:'Titan+',pct:'3%',cls:'dist-bar--titan'},
          ]} note="Most post-baseline labor environment in the system" />
        </div>
      </div>
    </>
  );
}

export default function World() {
  const [active, setActive] = useState<WorldTab>('foundation');

  const tabs: { id: WorldTab; label: string }[] = [
    { id: 'foundation', label: 'World Foundation' },
    { id: 'regions', label: 'Regions' },
  ];

  return (
    <div className="page-content">
      <section id="world">
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

          {active === 'foundation' && <FoundationPanel />}
          {active === 'regions' && <RegionsPanel />}
        </div>
      </section>
    </div>
  );
}
