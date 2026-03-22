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
            <div className="section-tag">Quick Navigation</div>
            <h2 className="section-title">Archive Sections</h2>
            <p className="section-sub">Navigate to any section of the World Archive.</p>
          </div>
          <div className="lore-grid">
            <div className="lore-block">
              <div className="lore-block-label">Foundation</div>
              <h3><Link to="/world" style={{color:'inherit',textDecoration:'none'}}>World Foundation</Link></h3>
              <p>The mechanisms behind human augmentation: where it came from, who controls it, and what it costs those who depend on it.</p>
            </div>
            <div className="lore-block">
              <div className="lore-block-label">Technology</div>
              <h3><Link to="/hxl" style={{color:'inherit',textDecoration:'none'}}>HXL Mesh Technology</Link></h3>
              <p>The Hexalattice Interface Layer: living tissue grown from the patient's own cells, threaded through augmented tissue using the body's own developmental processes.</p>
            </div>
            <div className="lore-block">
              <div className="lore-block-label">Classification</div>
              <h3><Link to="/augmentation" style={{color:'inherit',textDecoration:'none'}}>Augmentation Classes</Link></h3>
              <p>The global standard for classifying human biological enhancement. Class determines capability ceiling, metabolic cost, legal status, and social position.</p>
            </div>
            <div className="lore-block">
              <div className="lore-block-label">Interactive</div>
              <h3><Link to="/comparator" style={{color:'inherit',textDecoration:'none'}}>Augmentation Comparator</Link></h3>
              <p>Adjust bioengineering parameters across augmentation classes and observe projected performance output in real time.</p>
            </div>
            <div className="lore-block">
              <div className="lore-block-label">Cognitive Extension</div>
              <h3><Link to="/exocort" style={{color:'inherit',textDecoration:'none'}}>Exocort Architecture</Link></h3>
              <p>A cognitive-extension architecture that evolves with class, tier, and operational demand.</p>
            </div>
            <div className="lore-block">
              <div className="lore-block-label">Historical Record</div>
              <h3><Link to="/timeline" style={{color:'inherit',textDecoration:'none'}}>Timeline</Link></h3>
              <p>A sequential record of the events, discoveries, and institutional developments that produced the augmentation order.</p>
            </div>
            <div className="lore-block">
              <div className="lore-block-label">Personnel</div>
              <h3><Link to="/characters" style={{color:'inherit',textDecoration:'none'}}>Character Archive</Link></h3>
              <p>Active records. Classification status varies. Some information has been withheld or structured to protect ongoing operational security.</p>
            </div>
            <div className="lore-block">
              <div className="lore-block-label">Institutional Record</div>
              <h3><Link to="/factions" style={{color:'inherit',textDecoration:'none'}}>Active Factions</Link></h3>
              <p>The institutional actors shaping the augmentation landscape. Each operates according to its own logic.</p>
            </div>
            <div className="lore-block">
              <div className="lore-block-label">Lore</div>
              <h3><Link to="/stories" style={{color:'inherit',textDecoration:'none'}}>Field Records &amp; Stories</Link></h3>
              <p>Primary sources, field reports, and side narratives that exist alongside the main sequence.</p>
            </div>
            <div className="lore-block">
              <div className="lore-block-label">Geographic</div>
              <h3><Link to="/regions" style={{color:'inherit',textDecoration:'none'}}>Regional Profiles</Link></h3>
              <p>The augmentation landscape varies significantly by region — on Earth and beyond it.</p>
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
