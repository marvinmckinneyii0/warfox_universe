import { useState } from 'react';

type PeopleTab = 'characters' | 'factions';

function CharactersPanel() {
  return (
    <>
      <div className="section-header" style={{paddingTop:'3rem'}}>
        <div className="section-tag">Personnel</div>
        <h2 className="section-title">Character Archive</h2>
        <p className="section-sub">Active records. Classification status varies. Some information has been withheld or structured to protect ongoing operational security.</p>
      </div>

      <div style={{marginBottom:'1rem'}}>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.5rem',color:'var(--parkergen)',letterSpacing:'0.25em',textTransform:'uppercase',padding:'0.6rem 0',borderBottom:'1px solid var(--parkergen-dim)',marginBottom:'2px'}}>ParkerGen Industries</div>
      </div>
      <div className="char-grid" style={{marginBottom:'4rem'}}>
        <div className="character-card">
          <div className="char-faction-stripe stripe-parkergen"></div>
          <div className="char-faction-tag tag-parkergen">ParkerGen</div>
          <div className="char-name">Raymond Parker</div>
          <div className="char-alias">Founder-Chair / Corporate Sovereignty Architect: b. 2087 | d. n/a (Alive)</div>
          <div className="char-aug">HYBRID-CLASS 3A: Hyb-3A</div>
          <p className="char-bio">Raymond Parker is the governing intelligence behind ParkerGen's transformation from biotechnology enterprise into a system of managed human hierarchy. Refined, controlled, and institutionally unreadable at first glance, he represents executive power at its most polished and least accountable. His authority is not loud; it is infrastructural, legal, financial, and biological at once. He does not merely run a corporation; he defines the terms under which enhancement, legitimacy, and human value are distributed.</p>
          <div className="char-traits"><div className="char-trait">gNexGen / Executive Line</div><div className="char-trait">Hyb-3A</div><div className="char-trait">Threat: Extreme</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-parkergen"></div>
          <div className="char-faction-tag tag-parkergen">ParkerGen</div>
          <div className="char-name">Mei Chen-Parker</div>
          <div className="char-alias">Executive Strategist / Governance &amp; Continuity Node: b. 2090 | d. n/a (Alive)</div>
          <div className="char-aug">LIGHT-CLASS 3: Executive Line</div>
          <p className="char-bio">Mei Chen-Parker is the cold administrative spine of ParkerGen's legitimacy architecture: finance, continuity, governance, and strategic containment made person. She should not be read as a field operator, but as someone who keeps institutions coherent enough to survive scandal, exposure, and succession conflict. Her intelligence is not noisy. It is durable, exact, and aligned with the long preservation of power.</p>
          <div className="char-traits"><div className="char-trait">Executive Line</div><div className="char-trait">Governance Architecture</div><div className="char-trait">Threat: High</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-parkergen"></div>
          <div className="char-faction-tag tag-parkergen">ParkerGen</div>
          <div className="char-name">Emily Chen-Parker</div>
          <div className="char-alias">General Counsel / Legal Node: b. 2121 | d. n/a (Alive)</div>
          <div className="char-aug">HYBRID-CLASS 3A: L3 + H1A</div>
          <p className="char-bio">Emily Chen-Parker is conscience trapped inside dynastic power: socially composed, ethically strained, and built for precision rather than overt force. Her hybrid profile gives her quiet physical advantage under a polished legal-executive exterior, but her real strength lies in interpretation, boundaries, and controlled judgment. She is not naive. She is someone trying not to become complicit while living inside the machinery that rewards complicity most.</p>
          <div className="char-traits"><div className="char-trait">gNexGen</div><div className="char-trait">Hyb-3A</div><div className="char-trait">Threat: Moderate</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-parkergen"></div>
          <div className="char-faction-tag tag-parkergen">ParkerGen</div>
          <div className="char-name">Alexander Chen-Parker</div>
          <div className="char-alias">Executive Predator / Internal Power Broker: b. 2111 | d. n/a (Alive)</div>
          <div className="char-aug">HYBRID-CLASS 3B: L3 + H2B</div>
          <p className="char-bio">Alexander Chen-Parker is polished coercion: charming, strategic, manipulative, and violent beneath executive composure. He is the kind of man who can pass as modern, rational, and institutionally necessary while operating as a private center of fear inside ParkerGen. His hybrid balance makes him socially fluid and physically credible, but what truly defines him is controlled predation under the cover of legitimacy. Few challenge him until someone arrives who understands him well enough to stop being impressed.</p>
          <div className="char-traits"><div className="char-trait">Hybrid</div><div className="char-trait">Hyb-3B</div><div className="char-trait">Threat: Extreme</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-parkergen"></div>
          <div className="char-faction-tag tag-parkergen">ParkerGen</div>
          <div className="char-name">Talon Hendrix Osei</div>
          <div className="char-alias">Corporate Strategy &amp; Strategic Investments: b. 2120 | d. n/a (Alive)</div>
          <div className="char-aug">LIGHT-CLASS 4: Light-4B</div>
          <p className="char-bio">A precision instrument in expensive clothes. Osei has built a reputation at ParkerGen for the kind of quiet that precedes disruption. He asks fewer questions than his peers and understands more. His specialisms: game theory, augmentation economics, corporate vulnerability analysis, and institutional leverage; map precisely onto the places ParkerGen is most exposed. What he knows, he should not. He is trusted by many, but known by few.</p>
          <div className="char-traits"><div className="char-trait">iNexGen</div><div className="char-trait">Light-4B</div><div className="char-trait">Threat: Neutral</div></div>
        </div>
      </div>

      <div style={{marginBottom:'1rem'}}>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.5rem',color:'var(--parkergen)',letterSpacing:'0.25em',textTransform:'uppercase',padding:'0.6rem 0',borderBottom:'1px solid var(--parkergen-dim)',marginBottom:'2px'}}>ParkerGen: Divisions (Science / R&amp;D / Security)</div>
      </div>
      <div className="char-grid" style={{marginBottom:'4rem'}}>
        <div className="character-card">
          <div className="char-faction-stripe stripe-parkergen"></div>
          <div className="char-faction-tag tag-parkergen">ParkerGen / Science Division</div>
          <div className="char-name">Ilhicamina "Cam" Ochoa</div>
          <div className="char-alias">Bio-Energy Specialist / Systems Optimization Scientist: b. 2119 | d. n/a (Alive)</div>
          <div className="char-aug">LIGHT-CLASS 4: Light-4A</div>
          <p className="char-bio">Cam Ochoa is a cognition-first energy systems specialist working in ParkerGen's advanced bio-energy and optimization programs. His expertise lies in metabolic efficiency, power architecture, and the performance economics of augmented bodies. He is not a field-facing figure, but his work affects what advanced augmentation can sustain, how efficiently it operates, and how far future bodies can be pushed. His influence is technical, quiet, and deeply infrastructural.</p>
          <div className="char-traits"><div className="char-trait">Science Division</div><div className="char-trait">Light-4A</div><div className="char-trait">Threat: High</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-parkergen"></div>
          <div className="char-faction-tag tag-parkergen">ParkerGen / Science Division</div>
          <div className="char-name">Rachel Yassin</div>
          <div className="char-alias">Field Biologist / Xenobiology Analyst: b. 2113 | d. n/a (Alive)</div>
          <div className="char-aug">LIGHT-CLASS 4A: Bio-Neural Symbiosis Variant</div>
          <p className="char-bio">Rachel Yassin is a ParkerGen field biologist and xenobiology analyst whose work centers on living systems, environmental patterning, and nonhuman biological intelligence. She operates in the space between research, field interpretation, and ecological application, bringing scientific sensitivity to environments most institutions only know how to exploit. Her strength lies in biological reading rather than force, command, or spectacle. She is one of the company's more quietly valuable scientific minds.</p>
          <div className="char-traits"><div className="char-trait">Science Division</div><div className="char-trait">Light-4A</div><div className="char-trait">Threat: Moderate</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-parkergen"></div>
          <div className="char-faction-tag tag-parkergen">ParkerGen / Science Division</div>
          <div className="char-name">Zakia Amara Williams</div>
          <div className="char-alias">Cognitive Architecture Specialist: b. 2122 | d. n/a (Alive)</div>
          <div className="char-aug">LIGHT-CLASS 4: Light-4A</div>
          <p className="char-bio">Zakia Williams is a high-order cognition specialist working inside ParkerGen's cognitive architecture and Light-class refinement ecosystem. Her focus includes sensory filtering, overload suppression, cognitive-load optimization, and the refinement of enhanced interpretive frameworks. She is not a public face of the corporation, but one of the minds helping shape how advanced cognition is structured, stabilized, and scaled. Her work touches the architecture of thought itself.</p>
          <div className="char-traits"><div className="char-trait">Science Division</div><div className="char-trait">Light-4A</div><div className="char-trait">Threat: High</div></div>
        </div>
      </div>

      <div style={{marginBottom:'1rem'}}>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.5rem',color:'var(--zerodiv)',letterSpacing:'0.25em',textTransform:'uppercase',padding:'0.6rem 0',borderBottom:'1px solid var(--zerodiv-dim)',marginBottom:'2px'}}>ParkerGen: Zero Division</div>
      </div>
      <div style={{background:'var(--surface)',border:'1px solid var(--zerodiv-dim)',borderLeft:'3px solid var(--zerodiv-dim)',padding:'2rem 2.5rem',marginBottom:'2px'}}>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.42rem',color:'var(--zerodiv)',letterSpacing:'0.25em',textTransform:'uppercase',marginBottom:'0.5rem'}}>Zero Division</div>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.4rem',color:'var(--text-faint)',letterSpacing:'0.12em',marginBottom:'1rem'}}>Faction: ParkerGen Industries &nbsp;·&nbsp; Classification: Covert Operational Architecture &nbsp;·&nbsp; Status: Unconfirmed; Under Federal Investigation</div>
        <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8,maxWidth:'90ch',marginBottom:'1rem'}}>Zero Division is ParkerGen's covert operational architecture; the institutional answer to problems that standard corporate security cannot solve and public-facing legal structures cannot acknowledge. Its existence is not officially confirmed by ParkerGen. Its operational history is not documented in any accessible record. What is known, or reasonably inferred by those who study the pattern of ParkerGen's sustained dominance across five decades of augmentation-era corporate conflict, is that the corporation's survival through regulatory challenges, whistleblower events, competitive disruptions, and resistance activity has required capabilities that press releases do not explain.</p>
        <p style={{fontSize:'0.78rem',color:'var(--text-dim)',lineHeight:1.8,maxWidth:'90ch',marginBottom:'1rem'}}>Structured as an umbrella command architecture for ParkerGen's deniable operational units, it spans a spectrum from subtle to absolute. At the subtle end: infiltration, surveillance, long-game destabilization, corporate espionage, and the quiet management of information environments. At the absolute end: operations where ParkerGen's strategic continuity required outcomes that left no institutional record and no recoverable evidence.</p>
        <p style={{fontFamily:'var(--mono)',fontSize:'0.72rem',color:'var(--zerodiv)',letterSpacing:'0.06em',marginTop:'1.5rem'}}>Its current operational status following ParkerGen's institutional collapse is unknown. Its personnel are unaccounted for. The assets do not simply disappear because the institution did.</p>
      </div>
      <div className="char-grid" style={{marginBottom:'4rem'}}>
        <div className="character-card">
          <div className="char-faction-stripe stripe-zerodiv"></div>
          <div className="char-faction-tag tag-zerodiv">ParkerGen / Zero Division</div>
          <div className="char-name">Victor Thorn</div>
          <div className="char-alias">Black Unit Commander / Zero Division Command Authority: b. 2100 | d. n/a (Alive)</div>
          <div className="char-aug">HEAVY-CLASS 3: Heavy-3</div>
          <p className="char-bio">Victor Thorn is ParkerGen's answer to ambiguity: a black-program command asset built to turn institutional decisions into force. He is not elegant, subtle, or socially adaptive in the way higher cognition bodies are. He is physically authoritative, emotionally controlled, and terrifying precisely because he does not need to perform menace. His job is containment, recovery, and the clean enforcement of ugly corporate realities.</p>
          <div className="char-traits"><div className="char-trait">Heavy</div><div className="char-trait">Heavy-3</div><div className="char-trait">Zero Division Command</div><div className="char-trait">Threat: Extreme</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-zerodiv"></div>
          <div className="char-faction-tag tag-zerodiv">ParkerGen / Zero Division</div>
          <div className="char-name">Maria Rodriguez</div>
          <div className="char-alias">Black Unit Operative / Field Medicine &amp; Bio-Weapons Specialist: b. 2112 | d. n/a (Alive)</div>
          <div className="char-aug">HYBRID-CLASS 3: C-Family</div>
          <p className="char-bio">Maria Rodriguez is compact, surgical coercion: a covert hybrid whose expertise lies in body-state control, trauma intervention, biochemical disruption, and quiet termination. She can stabilize, transport, sedate, infect, preserve, or end a target depending on mission need. Her medicine is operational, not humanitarian. What makes her frightening is not brutality, but competence stripped of sentiment.</p>
          <div className="char-traits"><div className="char-trait">Hybrid</div><div className="char-trait">Hyb-3 / C-family</div><div className="char-trait">Zero Division</div><div className="char-trait">Threat: High</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-zerodiv"></div>
          <div className="char-faction-tag tag-zerodiv">ParkerGen / Zero Division</div>
          <div className="char-name">Leon Walker</div>
          <div className="char-alias">Black Unit Operative / Explosives &amp; Chemical Systems Specialist: b. 2110 | d. n/a (Alive)</div>
          <div className="char-aug">HYBRID-CLASS 3: B/C-Edge</div>
          <p className="char-bio">Leon Walker turns environments into accomplices. He understands structures, compounds, flows, weaknesses, and failure states in a way that makes sabotage feel inevitable rather than dramatic. His hybrid build supports technical reasoning under field pressure, letting him move, breach, contaminate, or collapse with disciplined intent. He is dangerous because he sees infrastructure the way other people see weapons.</p>
          <div className="char-traits"><div className="char-trait">Hybrid</div><div className="char-trait">Hyb-3 / B-C edge</div><div className="char-trait">Zero Division</div><div className="char-trait">Threat: High</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-zerodiv"></div>
          <div className="char-faction-tag tag-zerodiv">ParkerGen / Zero Division</div>
          <div className="char-name">Ethan Hayes</div>
          <div className="char-alias">Black Unit Precision Operative / Sniper &amp; Analytical Kill Specialist: b. 2115 | d. n/a (Alive)</div>
          <div className="char-aug">HYBRID-CLASS 3: High Cognition-Weighted</div>
          <p className="char-bio">Ethan Hayes is patient violence given a clean silhouette. A cognition-heavy precision operative, he excels in predictive target-state interpretation, recoil recovery control, stillness tolerance, and low-signature terminal action. He does not dominate through presence; he dominates by deciding first, waiting longer, and collapsing the target's options before impact arrives. The shot is usually only the final visible part of a much earlier conclusion.</p>
          <div className="char-traits"><div className="char-trait">Hybrid</div><div className="char-trait">Hyb-3 / L4 + H2A-B edge</div><div className="char-trait">Zero Division</div><div className="char-trait">Threat: Extreme</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-zerodiv"></div>
          <div className="char-faction-tag tag-zerodiv">ParkerGen / Zero Division</div>
          <div className="char-name">Marcus Delgado</div>
          <div className="char-alias">Black Unit Strike Asset / Force-Biased Entry Specialist: b. 2112 | d. n/a (Alive)</div>
          <div className="char-aug">HYBRID-CLASS 3C: L3 + H3C</div>
          <p className="char-bio">Marcus Delgado is a force-first black-unit striker built for violent entry, intimidation through embodiment, and direct solution under pressure. He is less elegant than balanced hybrids and less conceptually refined than cognition-heavy operators, but that is not a flaw in his intended lane. He is there to hit hard, stay standing, and end resistance quickly. Precision costs him more than impact does, but impact is what he is for.</p>
          <div className="char-traits"><div className="char-trait">Hybrid</div><div className="char-trait">Hyb-3C</div><div className="char-trait">Zero Division</div><div className="char-trait">Threat: High</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-zerodiv"></div>
          <div className="char-faction-tag tag-zerodiv">ParkerGen / Zero Division - Grey Unit</div>
          <div className="char-name">Cara Vo</div>
          <div className="char-alias">Grey Unit Cybersecurity Operative / Systems Intrusion Specialist: b. 2111 | d. n/a (Alive)</div>
          <div className="char-aug">LIGHT-CLASS 3/4: A-B Edge</div>
          <p className="char-bio">Cara Vo is a ParkerGen intelligence operative working within the corporation's internal security infrastructure, specializing in cybersecurity and employee surveillance. Precise, methodical, and operationally invisible by design, she operates at the intersection of technical systems and human intelligence; monitoring the digital signatures of potential threats before they become institutional liabilities. Her augmentation profile supports sustained cognitive engagement across complex technical environments, enabling the kind of extended pattern recognition and system penetration that corporate counterintelligence demands. She is not a presence you notice. She is the reason certain problems never escalate.</p>
          <div className="char-traits"><div className="char-trait">Light</div><div className="char-trait">Light-3/4 A-B Edge</div><div className="char-trait">Zero Division / Grey Unit</div><div className="char-trait">Threat: High</div></div>
        </div>
      </div>

      <div style={{marginBottom:'1rem'}}>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.5rem',color:'var(--alphaguard)',letterSpacing:'0.25em',textTransform:'uppercase',padding:'0.6rem 0',borderBottom:'1px solid var(--alphaguard-dim)',marginBottom:'2px'}}>AlphaGuard: Treaty-Grade Command</div>
      </div>
      <div className="char-grid" style={{marginBottom:'4rem'}}>
        <div className="character-card">
          <div className="char-faction-stripe stripe-alphaguard"></div>
          <div className="char-faction-tag tag-alphaguard">AlphaGuard</div>
          <div className="char-name">Ellison Jones</div>
          <div className="char-alias">Founder / Treaty-Grade Command Authority: b. 2085 | d. n/a (Alive)</div>
          <div className="char-aug">HYBRID-CLASS 5B: L5 + H2B</div>
          <p className="char-bio">Ellison Jones is one of the lawful apex bodies of the setting: a disciplined, treaty-grade expression of cognition, force, and institutional legitimacy. As founder of AlphaGuard, he represents the idealized argument that force can still be bound to law, procedure, and stabilization rather than sovereignty-by-corporation. His augmentation profile is balanced, not theatrical; he reads as command, not dominance performance. In him, the class system approaches its most defensible institutional form.</p>
          <div className="char-traits"><div className="char-trait">Hybrid</div><div className="char-trait">Hyb-5B</div><div className="char-trait">Founder: Lagos Charter 2120</div><div className="char-trait">Threat: Extreme</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-alphaguard"></div>
          <div className="char-faction-tag tag-alphaguard">AlphaGuard</div>
          <div className="char-name">Hugo Lopez</div>
          <div className="char-alias">Terminal Intervention Asset / Catastrophe-Response Authority: b. 2087 | d. n/a (Alive)</div>
          <div className="char-aug">HYBRID-CLASS 5C: L5 + H3C</div>
          <p className="char-bio">Hugo Lopez represents the catastrophic-force endpoint of lawful intervention: the body brought in when treaty legitimacy must survive contact with overwhelming violence. He is heavier, harsher, and more terminal than Ellison Jones, but still structured by lawful mandate rather than private sovereignty. His presence reads as the last step before open annihilation. He is what happens when AlphaGuard decides the situation is no longer recoverable through ordinary force.</p>
          <div className="char-traits"><div className="char-trait">Hybrid</div><div className="char-trait">Hyb-5C</div><div className="char-trait">Threat: Extreme</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-alphaguard"></div>
          <div className="char-faction-tag tag-alphaguard">AlphaGuard</div>
          <div className="char-name">Dr. Rashid Ahmed Al-Farsi</div>
          <div className="char-alias">Psychiatric Intelligence Officer: b. 2095 | d. n/a (Alive)</div>
          <div className="char-aug">LIGHT-CLASS 4: Empathic Interface Variant</div>
          <p className="char-bio">Former psychiatrist. Underwent augmentation after failing to prevent a patient's death; a decision that rewrote his understanding of what the nervous system could perceive. His Light-4 Empathic Interface augmentation creates the single greatest threat to any operative running deep cover inside ParkerGen. He reads deception not as behavioral analysis but as a biologically integrated perceptual capacity. He does not look for lies. He feels them.</p>
          <div className="char-traits"><div className="char-trait">Former Psychiatrist</div><div className="char-trait">Empathic Interface</div><div className="char-trait">Deception Detection</div><div className="char-trait">Threat: High</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-alphaguard"></div>
          <div className="char-faction-tag tag-alphaguard">AlphaGuard</div>
          <div className="char-name">Sonia Lopez</div>
          <div className="char-alias">Legacy Witness / Intelligence Asset: b. 2129 | d. n/a (Alive)</div>
          <div className="char-aug">CLASSIFICATION: Not Yet Locked</div>
          <p className="char-bio">Sonia Lopez is shaped by aftermath, secrecy, and inherited violence. Present as a child during the Lopez Incident, she grows up inside the unresolved consequences of other people's decisions. Her function is not yet fully operationally locked, but she already matters as a truth-seeking line of continuity: the child who survived the event and may someday demand a fuller accounting of it.</p>
          <div className="char-traits"><div className="char-trait">Unresolved</div><div className="char-trait">Future-line character</div><div className="char-trait">Threat: Unknown</div></div>
        </div>
      </div>

      <div style={{marginBottom:'1rem'}}>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.5rem',color:'var(--fbi)',letterSpacing:'0.25em',textTransform:'uppercase',padding:'0.6rem 0',borderBottom:'1px solid var(--fbi-dim)',marginBottom:'2px'}}>Government / Federal</div>
      </div>
      <div className="char-grid" style={{marginBottom:'4rem'}}>
        <div className="character-card">
          <div className="char-faction-stripe stripe-fbi"></div>
          <div className="char-faction-tag tag-fbi">FBI / CZJT Force</div>
          <div className="char-name">Veronica Valdez</div>
          <div className="char-alias">Federal Investigator / Lawful Intervention Asset: b. 2112 | d. n/a (Alive)</div>
          <div className="char-aug">HYBRID-CLASS 3B: L3 + H2B</div>
          <p className="char-bio">Veronica Valdez is a lawful-until-it-kills-people operator: an investigator shaped by institutions, procedure, and evidence, but increasingly forced to confront how those frameworks fail under corporate impunity. Her hybrid architecture gives her stable force, disciplined situational judgment, and enough cognition to parse danger without surrendering accountability. She is not a vigilante and not a corporate enforcer; she is the kind of woman who keeps asking the question after everyone else has agreed to stop. Her story begins with Dr. Angela Lamb's death and grows into a confrontation with the machinery that made such deaths normal.</p>
          <div className="char-traits"><div className="char-trait">Hybrid</div><div className="char-trait">Hyb-3B</div><div className="char-trait">Puerto Rican Heritage</div><div className="char-trait">Augmentation Debt</div><div className="char-trait">Threat: High</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-unknown"></div>
          <div className="char-faction-tag tag-unknown">Institutional / Rogue-Adjacent</div>
          <div className="char-name">Damien Shaw</div>
          <div className="char-alias">Counter-Intelligence Specialist / Anti-Augmentation Hunter: b. 2107 | d. n/a (Alive)</div>
          <div className="char-aug">HYBRID-CLASS 3: Subtype Not Locked</div>
          <p className="char-bio">Damien Shaw is a counter-augmentation specialist feared for dismantling enhanced strike teams with surgical-grade disruption tools and disciplined fieldcraft. A former FBI partner to Veronica Valdez, he operates at the intersection of law, rogue capability, and anti-augmentation warfare. He is not built around spectacle; he is built around negation; turning other people's expensive bodies into liabilities. Red-zone work, asset extraction, and biomechanical disruption are his real language.</p>
          <div className="char-traits"><div className="char-trait">Hybrid-3</div><div className="char-trait">Counter-augmentation Lane</div><div className="char-trait">Former FBI</div><div className="char-trait">Threat: High</div></div>
        </div>
      </div>

      <div style={{marginBottom:'1rem'}}>
        <div style={{fontFamily:'var(--mono)',fontSize:'0.5rem',color:'var(--unknown)',letterSpacing:'0.25em',textTransform:'uppercase',padding:'0.6rem 0',borderBottom:'1px solid var(--unknown-dim)',marginBottom:'2px'}}>Unknown / Unclassified Affiliation</div>
      </div>
      <div className="char-grid" style={{marginBottom:'4rem'}}>
        <div className="character-card">
          <div className="char-faction-stripe stripe-unknown"></div>
          <div className="char-faction-tag tag-unknown">Independent (Former ParkerGen / Red Unit)</div>
          <div className="char-name">Rayvn Hunter</div>
          <div className="char-alias">Field Intelligence &amp; Human-Terrain Penetration Specialist: b. 2126 | d. n/a (Alive)</div>
          <div className="char-aug">HYBRID-CLASS 4C: L4 + H3C</div>
          <p className="char-bio">Rayvn Hunter is an independent contractor (Former ParkerGen Red Unit) operating at the margins of the augmentation economy; taking work that established security firms will not document and solving problems that corporate legal structures cannot formally acknowledge. Her reputation is built on precision, discretion, and a completion rate that speaks for itself. Clients do not ask how. They ask when. Beneath the operational profile is something less easily classified. Hunter is known in certain circles for redistributing significant portions of her earnings into informal protection networks for augmentation-displaced communities; a pattern that sits in deliberate tension with the nature of the work that funds it. Whether this represents conscience, calculation, or something she has not named yet is not a question she invites.</p>
          <div className="char-traits"><div className="char-trait">Hybrid</div><div className="char-trait">Hyb-4C / L4 + H3C</div><div className="char-trait">Independent</div><div className="char-trait">Former: Red Unit</div><div className="char-trait">Threat: Extreme</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-unknown"></div>
          <div className="char-faction-tag tag-unknown">Affiliation: Unconfirmed</div>
          <div className="char-name" style={{fontFamily:'var(--mono)',fontSize:'0.7rem',letterSpacing:'0.18em',color:'var(--text-faint)',textTransform:'uppercase',background:'var(--surface2)',padding:'3px 8px',display:'inline-block',border:'1px solid var(--border)',fontWeight:400}}>█████ ██████ ████</div>
          <div className="char-alias" style={{background:'var(--surface2)',padding:'2px 6px',border:'1px dashed var(--border)',color:'var(--text-faint)',letterSpacing:'0.12em'}}>██████████ ██████████ ██████</div>
          <div className="char-aug">HYBRID-CLASS 5B: Self-Directed Installation</div>
          <p className="char-bio">Augmentation classification is anomalous: Hyb-5B installed outside corporate supply chains, with documented transient capacity approximating select Heavy-Class 3 output bands under extreme conditions. This is the only known record of a fully self-directed augmentation installation.</p>
          <div className="char-traits"><div className="char-trait">Hyb-5B: Self-Installed</div><div className="char-trait">Loyalty: Undetermined</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-warfox"></div>
          <div className="char-faction-tag tag-warfox">Designation Only</div>
          <div className="char-name">Shepherd</div>
          <div className="char-alias">RECORD INCOMPLETE: Affiliation Unverified</div>
          <div className="char-aug" style={{color:'var(--unknown)',borderColor:'var(--unknown-dim)'}}>AUGMENTATION CLASS: UNKNOWN</div>
          <p className="char-bio">Insufficient verified data to establish a complete record. Designation active. Affiliation, augmentation classification, and operational role are unconfirmed. Archive note: record flagged for review. No classification assigned pending verified information.</p>
          <div className="char-traits"><div className="char-trait">Record: Incomplete</div><div className="char-trait">Class: Unverified</div><div className="char-trait">Status: Flagged</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-unknown"></div>
          <div className="char-faction-tag tag-unknown">Affiliation: Unconfirmed</div>
          <div className="char-name" style={{fontFamily:'var(--mono)',fontSize:'0.7rem',letterSpacing:'0.18em',color:'var(--text-faint)',textTransform:'uppercase',background:'var(--surface2)',padding:'3px 8px',display:'inline-block',border:'1px solid var(--border)',fontWeight:400}}>██████ ████</div>
          <div className="char-alias" style={{background:'var(--surface2)',padding:'2px 6px',border:'1px dashed var(--border)',color:'var(--text-faint)',letterSpacing:'0.12em'}}>██████████ / ██████ █████████</div>
          <div className="char-aug">HYBRID-CLASS 3C: L3 + H3C</div>
          <p className="char-bio">Personnel record partially sealed. Force-biased hybrid profile. Family-line augmentation origin. Institutional affiliation and current operational status unverified. Record flagged for compartmented review.</p>
          <div className="char-traits"><div className="char-trait">Hyb-3C</div><div className="char-trait">Loyalty: Unverified</div><div className="char-trait">Status: Flagged</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-unknown"></div>
          <div className="char-faction-tag tag-unknown">Foundational Research Lineage</div>
          <div className="char-name">Kassandra Kane</div>
          <div className="char-alias">Psychiatrist &amp; Neurocognitive Adaptation Specialist: b. 2093 | d. n/a (Alive)</div>
          <div className="char-aug">LIGHT-CLASS 1: Light-1</div>
          <p className="char-bio">Kassandra Kane helped define the human side of augmentation before ParkerGen weaponized that knowledge into caste logic. A psychiatrist and neurocognitive adaptation specialist, she co-developed the original compatibility framework meant to assess identity stability, sensory tolerance, embodiment risk, and psychological survivability under early HXL integration. She raised her children across North America, Europe, and Africa to make them resilient, culturally fluent, and difficult to provincialize. She remains one of the last living witnesses to what augmentation assessment was meant to be before it became class, tier, labor, and prestige.</p>
          <div className="char-traits"><div className="char-trait">Light-1</div><div className="char-trait">Clinical Origin Line</div><div className="char-trait">Foundational Research</div><div className="char-trait">Threat: High</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-unknown"></div>
          <div className="char-faction-tag tag-unknown">Foundational Research Lineage</div>
          <div className="char-name">Dr. Theo Kane</div>
          <div className="char-alias">HXL Inventor / Biological Interface Architect: b. 2090 | d. 2138</div>
          <div className="char-aug">UNAUGMENTED: Incomplete Late-Stage iNexGen Pathway</div>
          <p className="char-bio">Theo Kane developed the first-generation HexaLattice Interface Layer using XIS-derived interface chemistry as the basis for stable biological integration. He did not invent social hierarchy; he invented a substrate that others later industrialized, monopolized, and militarized. Before his murder; officially disguised as a laboratory accident; he had gathered proof that ParkerGen had embedded dependency and suppression into later systems while burying the possibility of independent augmentation. He is one of the setting's deepest buried origin points: the inventor whose work made the future possible and whose murder made that future corporate.</p>
          <div className="char-traits"><div className="char-trait">Source Lineage</div><div className="char-trait">HXL Origin</div><div className="char-trait">Murdered 2138</div><div className="char-trait">Threat: Neutral</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-unknown"></div>
          <div className="char-faction-tag tag-unknown">Whistleblower</div>
          <div className="char-name">Dr. Angela Lamb</div>
          <div className="char-alias">Senior Director, Clinical Trials &amp; Compliance / Buried-Truth Catalyst: b. 2112 | d. 2148</div>
          <div className="char-aug">LIGHT-CLASS 3: Light-3</div>
          <p className="char-bio">Dr. Angela Lamb was a former FDA scientist and ParkerGen-adjacent compliance executive who uncovered evidence of illegal human experimentation. She prepared a dead-man's-switch file drop after internal escalation failed, and was assassinated under the guise of cerebral hemorrhage. Her death becomes the inciting moral fracture for Veronica Valdez and one of the clearest proofs that ParkerGen kills not only dissidents, but procedural truth itself. She remains present in the story as archive, wound, and warning.</p>
          <div className="char-traits"><div className="char-trait">Light-3</div><div className="char-trait">Compliance Truth Line</div><div className="char-trait">Murdered 2148</div><div className="char-trait">Threat: Neutral</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-unknown"></div>
          <div className="char-faction-tag tag-unknown">Lopez Line</div>
          <div className="char-name">Maria Lopez</div>
          <div className="char-alias">Family Anchor / Moral Fracture Point: b. 2097 | d. 2143</div>
          <div className="char-aug">CLASSIFICATION: Not Locked</div>
          <p className="char-bio">Maria Lopez is less a systems figure than a human one: a mother whose death in the Lopez Incident becomes one of the defining fractures in her family's history. She anchors the emotional and moral stakes of that line, especially for Sonia. Her role is not about capability but consequence. Through her, the story remembers that all strategic violence lands in ordinary lives first.</p>
          <div className="char-traits"><div className="char-trait">N/A</div><div className="char-trait">Family Anchor</div><div className="char-trait">Deceased 2143</div><div className="char-trait">Threat: Neutral</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-unknown"></div>
          <div className="char-faction-tag tag-unknown">Independent / Ross Network</div>
          <div className="char-name">Alaia Verin Dekker</div>
          <div className="char-alias">Operative Designation: AVD-14 "VERIN"</div>
          <div className="char-aug">LIGHT-CLASS 4 / HYBRID-CLASS 1: Cognitive Tactical</div>
          <p className="char-bio">Intelligence, infiltration, and executive-level analysis specialist. Neural lamellar mesh with temporal-phase processing. Operates as internal counterweight to Dr. Malcolm Ross; the stable judgment he trusts more than any other operative's. Paired operationally with Nadja Morozova: Alaia handles infiltration and intelligence; Nadja handles execution and extraction.</p>
          <div className="char-traits"><div className="char-trait">Predictive Modeling</div><div className="char-trait">Micro-Expression Tracking</div><div className="char-trait">Ross Network</div><div className="char-trait">AVD-14</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-unknown"></div>
          <div className="char-faction-tag tag-unknown">Independent / Ross Network</div>
          <div className="char-name">Nadja Morozova</div>
          <div className="char-alias">Precision Combat Operative</div>
          <div className="char-aug">HEAVY-CLASS 4: Precision Combat Variant</div>
          <p className="char-bio">Surgical force, elimination, and extraction specialist. Paired with Alaia Verin Dekker in joint operations as the execution component to Alaia's intelligence layer. Respects precision and reliability above all else. Does not perform loyalty; she delivers results or she does not.</p>
          <div className="char-traits"><div className="char-trait">Precision Elimination</div><div className="char-trait">Extraction Specialist</div><div className="char-trait">Ross Network</div><div className="char-trait">Joint Ops: AVD-14</div></div>
        </div>
        <div className="character-card">
          <div className="char-faction-stripe stripe-unknown"></div>
          <div className="char-faction-tag tag-unknown">Independent / Post-Human Radical</div>
          <div className="char-name">Dr. Malcolm Ross</div>
          <div className="char-alias">Hybrid-Class Scientist / Ideologue</div>
          <div className="char-aug">HYBRID-CLASS: Post-Human Synthesis Research</div>
          <p className="char-bio">Post-human radical and hybrid-class scientist. His ideology is not corporate; it is transcendent in the most unsettling sense: he believes the enhancement ceiling should be removed, not redistributed. Relies on Alaia Verin Dekker as the stable ethical anchor in his network; a counterweight to his own extremes.</p>
          <div className="char-traits"><div className="char-trait">Post-Human Ideology</div><div className="char-trait">Hybrid-Class Research</div><div className="char-trait">Radical Augmentation</div><div className="char-trait">AVD-14: Ethical Anchor</div></div>
        </div>
      </div>
    </>
  );
}

function FactionsPanel() {
  return (
    <>
      <div className="section-header" style={{paddingTop:'3rem'}}>
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
    </>
  );
}

export default function People() {
  const [active, setActive] = useState<PeopleTab>('characters');

  const tabs: { id: PeopleTab; label: string }[] = [
    { id: 'characters', label: 'Characters' },
    { id: 'factions', label: 'Factions' },
  ];

  return (
    <div className="page-content">
      <section id="people">
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

          {active === 'characters' && <CharactersPanel />}
          {active === 'factions' && <FactionsPanel />}
        </div>
      </section>
    </div>
  );
}
