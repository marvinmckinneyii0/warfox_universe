export default function Exocort() {
  return (
    <div className="page-content">
      <section id="exocort">
        <div className="container">
          <div className="section-header">
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
        </div>
      </section>
    </div>
  );
}
