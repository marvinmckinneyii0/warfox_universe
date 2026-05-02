import { Link } from 'react-router-dom';

const cx = (to: string, text: string) => <Link to={to} className="cx-link">{text}</Link>;

export default function Stories() {
  return (
    <div className="page-content">
      <section id="stories">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Lore / Side Records</div>
            <h2 className="section-title">Archive: Field Records &amp; Side Stories</h2>
            <p className="section-sub">Primary sources, field reports, and side narratives that exist alongside the main sequence. Stories added here as they are written.</p>
          </div>
          <div className="story-grid">
            <div className="story-slot">
              <div className="story-label">FIELD REPORT / ARCHIVE ENTRY BK-R-01</div>
              <div className="story-title">The Tigris Margin</div>
              <p className="story-excerpt">The data was accurate. That was the problem. {cx('/people','Rachel Yassin')} had spent fourteen months mapping the basin's collapse vectors; soil salinity, aquifer drawdown, species displacement pressure. She had handed {cx('/people','ParkerGen')} a perfect model of how to accelerate it without triggering legal thresholds. She had believed she was documenting damage. She had been building an instruction manual. {cx('/timeline','→ Tigris Basin Collapse: 2145')}</p>
              <div className="story-attribution">SOURCE: R. Yassin: Personal Record / Partial Disclosure  ·  CLASSIFICATION: {cx('/people','WarFox')} Archive</div>
            </div>
            <div className="story-empty"><div className="empty-label">ARCHIVE SLOT: AWAITING RECORD<br/><br/>[ ADD SIDE STORY ]</div></div>
            <div className="story-empty"><div className="empty-label">ARCHIVE SLOT: AWAITING RECORD<br/><br/>[ ADD SIDE STORY ]</div></div>
            <div className="story-empty"><div className="empty-label">ARCHIVE SLOT: AWAITING RECORD<br/><br/>[ ADD SIDE STORY ]</div></div>
            <div className="story-empty"><div className="empty-label">ARCHIVE SLOT: AWAITING RECORD<br/><br/>[ ADD SIDE STORY ]</div></div>
            <div className="story-empty"><div className="empty-label">ARCHIVE SLOT: AWAITING RECORD<br/><br/>[ ADD SIDE STORY ]</div></div>
          </div>
          <div className="related-links" style={{marginTop:'3rem'}}>
            <span className="related-links-label">Related</span>
            <Link to="/people" className="related-link">Characters &amp; Factions</Link>
            <Link to="/timeline" className="related-link">Historical Timeline</Link>
            <Link to="/world" className="related-link">World &amp; Regions</Link>
            <Link to="/glossary" className="related-link">Glossary</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
