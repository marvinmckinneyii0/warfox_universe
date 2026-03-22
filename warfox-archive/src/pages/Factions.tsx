export default function Factions() {
  return (
    <div className="page-content">
      <section id="factions">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Institutional Record</div>
            <h2 className="section-title">Active Factions</h2>
            <p className="section-sub">The institutional actors shaping the augmentation landscape. Each operates according to its own logic. None of them are entirely wrong about what they see.</p>
          </div>
          <div className="faction-cards" style={{marginBottom:'2px'}}>
            <div className="faction-card">
              <div className="faction-stripe stripe-parkergen-f"></div>
              <div className="faction-label">Primary Antagonist: Book I</div>
              <div className="faction-name">ParkerGen Industries</div>
              <div className="faction-tagline">"Capability is legitimacy. The capable earn the right to define the future."</div>
              <p className="faction-body">The dominant force in augmentation technology and the XIS symbiote supply chain. ParkerGen does not think of itself as a monopoly; it thinks of itself as a meritocracy operating at civilizational scale. The platform lock that underlies every augmentation they sell is not incidental to the business. It is the business. Corporate zone law, developed in part by their own legal architecture, grants ParkerGen quasi-governmental sovereignty in the territories where they operate.</p>
              <div className="faction-detail">CEO: <span>Raymond Parker</span>  ·  CFO: <span>Mei Chen-Parker</span>  ·  Legal: <span>Emily Chen-Parker</span>  ·  Ops Security: <span>Alexander Chen-Parker</span></div>
            </div>
            <div className="faction-card">
              <div className="faction-stripe stripe-steelcore-f"></div>
              <div className="faction-label">Primary Antagonist: Book II</div>
              <div className="faction-name">SteelCore Dynamics</div>
              <div className="faction-tagline">"Power is infrastructure. Infrastructure is permanent."</div>
              <p className="faction-body">Industrial-military conglomerate. Where ParkerGen controls biology, SteelCore controls logistics, weapons systems, and the physical infrastructure of augmentation deployment. Leadership is a triumvirate: ATLAS (an AI system with legal personhood), Marcus Steele (tactical), and Miranda Steele (legal and public relations). PROJECT: FAMILIAR; involuntary civilian recruitment as sleeper operatives via nanite substrate; represents the most direct assault on civilian bodily autonomy yet documented.</p>
              <div className="faction-detail">Leadership: <span>ATLAS (AI) / Marcus Steele / Miranda Steele</span>  ·  Project: <span>FAMILIAR: Active</span></div>
            </div>
            <div className="faction-card">
              <div className="faction-stripe stripe-alphaguard-f"></div>
              <div className="faction-label">UN-Backed Peacekeeping Force</div>
              <div className="faction-name">AlphaGuard</div>
              <div className="faction-tagline">"Democratic oversight of augmented power. Nothing less."</div>
              <p className="faction-body">Founded 2120 by Ellison Jones under the Lagos Charter. AlphaGuard is the only existing institutional force with a mandate to counter both corporate militarization and rogue augmented threats at the international level. Democratic oversight is structural, not rhetorical. The tension within AlphaGuard is not between good people and bad; it is between what the institution was designed to do and what the people inside it decide they must do to defend it.</p>
              <div className="faction-detail">Director: <span>Ellison Jones</span>  ·  Intelligence: <span>Dr. Rashid Ahmed Al-Farsi</span>  ·  Founded: <span>2120: Lagos Charter</span></div>
            </div>
          </div>
          <div className="faction-cards" style={{marginBottom:'2px'}}>
            <div className="faction-card">
              <div className="faction-stripe stripe-warfox-f"></div>
              <div className="faction-label">Resistance Network: Covert</div>
              <div className="faction-name">WarFox</div>
              <div className="faction-tagline">"We don't build movements. We build instruments."</div>
              <p className="faction-body">WarFox is not an organization in the conventional sense. No headquarters, no formal command structure, no public identity. It is a distributed architecture of cells, assets, and operatives unified by a single objective: dismantling the corporate monopoly on human biological enhancement and returning genomic sovereignty to individuals. Operatives move through legitimate institutions with cover identities, building access and designing instruments of systemic collapse.</p>
              <div className="faction-detail">Operational philosophy: <span>Shape trajectories, not recruitment</span>  ·  Known cells: <span>Classification Active</span></div>
            </div>
            <div className="faction-card">
              <div className="faction-stripe stripe-fbi-f"></div>
              <div className="faction-label">Federal Law Enforcement</div>
              <div className="faction-name">FBI Corporate Zone Crimes Joint Task Force</div>
              <div className="faction-tagline">"The law is the only leverage baseline humans have left."</div>
              <p className="faction-body">Federal law enforcement layer focused on augmentation-related crimes: black market installations, augmentation fraud, corporate violations of enhancement regulations, and debt-indenture schemes. The ACTF operates in the most structurally difficult position of any institutional actor; enforcing laws that corporate lobbying wrote, with agents whose own augmentation debt creates institutional dependencies that limit independent judgment.</p>
              <div className="faction-detail">Key operative: <span>Veronica Valdez: Corporate Zone Crimes Specialist</span></div>
            </div>
            <div className="faction-card" style={{borderColor:'var(--excort-dim)'}}>
              <div className="faction-stripe stripe-excort-f"></div>
              <div className="faction-label">Infrastructure Sovereign / Platform Neutral</div>
              <div className="faction-name">ExoCort</div>
              <div className="faction-tagline">"We don't take sides. We are the ground everyone stands on."</div>
              <p className="faction-body">ExoCort is the original architect of the exocortex platform; the externalized neural processing layer that became the universal substrate standard for human cognitive augmentation. It builds and maintains the foundation that everyone else builds on: the substrate standard, the interface protocols, the update architecture that keeps augmented biology stable across decades of operation. Every major augmentation system across every faction runs on ExoCort's platform. AlphaGuard. ParkerGen. SteelCore. Independent contractors, black market operators, military programs, civilian clinics. All of them, without exception. This is not market dominance in the conventional sense. It is something closer to gravity. ExoCort does not compete with the factions that depend on it. It operates beneath them. In a landscape where every power center announces its allegiances, that structural neutrality is its own kind of dominance.</p>
              <div className="faction-detail">Classification: <span>Infrastructure Sovereign</span>  ·  Dependency scope: <span>Universal</span>  ·  Allegiance: <span>Self-interest only</span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
