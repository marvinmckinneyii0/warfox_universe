export default function Augmentation() {
  return (
    <div className="page-content">
      <section id="augmentation">
        <div className="container">
          <div className="section-header">
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
        </div>
      </section>
    </div>
  );
}
