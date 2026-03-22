export default function Comparator() {
  return (
    <div className="page-content">
      <section id="comparator">
        <div className="container">
          <div className="section-header">
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
        </div>
      </section>
    </div>
  );
}
