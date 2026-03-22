import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-content">
      <section className="hero">
        <div className="container">
          <div className="hero-tag">CLASSIFICATION: ACTIVE ARCHIVE / WARFOX SEQUENCE WORLD RECORD</div>
          <h1 className="hero-title">The Warfox<br/>Sequence</h1>
          <p className="hero-sub">In 2148, you can live like a god. For a price.</p>
          <p className="hero-sub">Corporations don't just sell augmentation; they license it. The HXL Mesh they grow from your own cells belongs to them. Your mind, body, and quality of life: all subject to terms of service. This would matter less if corporations were still just companies.</p>
          <p className="hero-tagline">Hard biopunk. Corporate espionage. Class warfare at the cellular level.</p>
          <div className="hero-meta">
            <div className="hero-stat">YEAR <span>2148</span></div>
            <div className="hero-stat">SETTING <span>Earth &amp; Near-Space Settlements</span></div>
            <div className="hero-stat">GENRE <span>Hard Biopunk / Corporate Espionage</span></div>
            <div className="hero-stat">STATUS <span>Archive Active</span></div>
          </div>
        </div>
      </section>

      <hr className="divider"/>

      <section>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Story / Overview</div>
            <h2 className="section-title">The World of the Warfox Sequence</h2>
            <p className="section-sub">A world where biology is the new currency, and the most dangerous thing you can own is your own body.</p>
          </div>

          <div className="hxl-grid" style={{marginBottom:'2px'}}>
            <div className="hxl-block">
              <div className="lore-block-label">The Discovery</div>
              <h3 style={{fontFamily:'var(--sans)',fontSize:'1rem',fontWeight:700,color:'var(--text-bright)',marginBottom:'1rem'}}>What Changed Everything</h3>
              <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8}}>In 2041, a xenobiological substrate was pulled from deep Saharan excavation sites. Ancient. Non-terrestrial. Dormant for a hundred and fifty thousand years. The researchers who found it had no framework for what it was. What they discovered, slowly, over the next decade, was that it could interface with human neural tissue without triggering rejection. That discovery rewrote the future of the human body. It was called the Xenobiotic Integration Substrate — XIS. The technology built above it was called HXL Mesh. The company that controlled it called itself ParkerGen Industries. And the world it created was not the world its inventors intended.</p>
            </div>
            <div className="hxl-block">
              <div className="lore-block-label">The Architecture of Control</div>
              <h3 style={{fontFamily:'var(--sans)',fontSize:'1rem',fontWeight:700,color:'var(--text-bright)',marginBottom:'1rem'}}>Enhancement as Infrastructure</h3>
              <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8}}>HXL Mesh grows from the patient's own cells. It is not a device. It does not look like machinery. It is living tissue, woven into the body's vascular and neural architecture, and under stress it reveals itself as glowing hexagonal patterns beneath the skin. Enhancement through biology, not replacement with hardware. That is the sales language. The reality is that the mesh is theirs. Miss a calibration cycle and capability degrades. Fall behind on maintenance payments and the platform that keeps you stable begins to withdraw. The body ParkerGen builds for you is licensed. The dependency is not incidental. It was engineered.</p>
            </div>
          </div>

          <div className="hxl-grid" style={{marginBottom:'2px'}}>
            <div className="hxl-block">
              <div className="lore-block-label">The Divide</div>
              <h3 style={{fontFamily:'var(--sans)',fontSize:'1rem',fontWeight:700,color:'var(--text-bright)',marginBottom:'1rem'}}>Class Written on the Body</h3>
              <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8}}>By 2148, augmentation class has replaced wealth as the most legible marker of social position, because augmentation class is social position made visible. Elite enhancements are invisible at rest; the kind that make you faster, sharper, more capable without ever announcing themselves. Working-class augmentations are not. The hexagonal vascular patterns that appear under physical stress at lower tiers are impossible to conceal. The thermal signatures, the altered proportions, the visible maintenance hardware: all of it legible, all of it permanent. The enhancement divide is not just stratification. It is stratification written on the body and worn every day.</p>
            </div>
            <div className="hxl-block">
              <div className="lore-block-label">The Stakes</div>
              <h3 style={{fontFamily:'var(--sans)',fontSize:'1rem',fontWeight:700,color:'var(--text-bright)',marginBottom:'1rem'}}>What the Story Is About</h3>
              <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8}}>A federal investigator is assigned to a death that the official record calls natural causes. A resistance network operates inside legitimate institutions under cover identities, building toward something most of its members don't fully understand. A corporation faces the first serious threat to fifty years of biological monopoly. And somewhere in all of it, a dead scientist's research still exists; the blueprint for augmentation that belongs to no one, that cannot be leased or revoked, that ParkerGen buried before it could reach the public record. The Warfox Sequence is the story of what happens when that research starts moving again.</p>
            </div>
          </div>

          <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderLeft:'3px solid var(--teal-dim)',padding:'2rem 2.5rem',marginBottom:'4rem'}}>
            <div style={{fontFamily:'var(--mono)',fontSize:'0.42rem',color:'var(--teal-dim)',letterSpacing:'0.25em',textTransform:'uppercase',marginBottom:'0.5rem'}}>Thematic Core</div>
            <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8,maxWidth:'90ch'}}>The Warfox Sequence is not a story about technology. It is a story about who owns the future of the human body, what they do with that ownership, and what it costs the people who cannot afford to opt out. It asks what liberation means when the thing you need to be free is built into your biology and belongs to someone else. It asks whether institutions built to enforce the law can survive contact with power that wrote the law. And it asks what kind of people choose to fight a system that has made itself indispensable.</p>
          </div>
        </div>
      </section>

      <hr className="divider"/>

      <section>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Quick Navigation</div>
            <h2 className="section-title">Archive Sections</h2>
            <p className="section-sub">Navigate to any section of the World Archive.</p>
          </div>
          <div className="lore-grid">
            <div className="lore-block">
              <div className="lore-block-label">Foundation &amp; Geography</div>
              <h3><Link to="/world" style={{color:'inherit',textDecoration:'none'}}>World</Link></h3>
              <p>The mechanisms of the augmentation order: where it came from, who controls it, what it costs, and the regional landscape across Earth and off-world settlements.</p>
            </div>
            <div className="lore-block">
              <div className="lore-block-label">Technology</div>
              <h3><Link to="/tech" style={{color:'inherit',textDecoration:'none'}}>Tech Reference</Link></h3>
              <p>HXL Mesh architecture, augmentation classification, the interactive comparator, and exocort stages — all in one place.</p>
            </div>
            <div className="lore-block">
              <div className="lore-block-label">Historical Record</div>
              <h3><Link to="/timeline" style={{color:'inherit',textDecoration:'none'}}>Timeline</Link></h3>
              <p>A sequential record of the events, discoveries, and institutional developments that produced the augmentation order.</p>
            </div>
            <div className="lore-block">
              <div className="lore-block-label">Personnel &amp; Institutions</div>
              <h3><Link to="/people" style={{color:'inherit',textDecoration:'none'}}>Characters &amp; Factions</Link></h3>
              <p>Active records for key personnel and institutional actors. Classification status varies. Some information has been withheld.</p>
            </div>
            <div className="lore-block">
              <div className="lore-block-label">Lore</div>
              <h3><Link to="/stories" style={{color:'inherit',textDecoration:'none'}}>Field Records &amp; Stories</Link></h3>
              <p>Primary sources, field reports, and side narratives that exist alongside the main sequence.</p>
            </div>
            <div className="lore-block">
              <div className="lore-block-label">Reference</div>
              <h3><Link to="/glossary" style={{color:'inherit',textDecoration:'none'}}>Glossary of Terms</Link></h3>
              <p>All unique terminology, classification systems, and technical designations. Organized by domain.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
