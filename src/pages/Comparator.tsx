import { useState } from 'react';
import {
  FACTIONS, CHARACTERS, GENERIC_OPERATORS, ALL_OPERATORS,
  GENERIC_GROUPS, SCENARIOS, ENVIRONMENTS, computeCombat,
  type Character, type Scenario, type Environment,
  type CharCount, type CombatResult,
} from '../data/combatEngine';

const ALPHA_COLOR = '#3b82f6';
const BRAVO_COLOR = '#ec4899';

const FACTION_ORDER = ['AlphaGuard','ZeroDivision','ParkerGen','WarFox','RossNetwork','SteelCore','FBI'];

function genericClassColor(c: Character): string {
  if (!c.isGeneric) return '#6b7b96';
  return ({ Light:'#10b981', Heavy:'#ef4444', Hybrid:'#00d4ff', Titan:'#a855f7', Baseline:'#6b7b96' } as Record<string,string>)[c.genericClass||''] || '#6b7b96';
}

function factionColor(c: Character): string {
  return c.isGeneric ? genericClassColor(c) : (FACTIONS[c.faction]?.color || '#6b7b96');
}

function hpColor(pct: number): string {
  return pct > 0.6 ? '#10b981' : pct > 0.3 ? '#f59e0b' : '#ef4444';
}

function TierBadge({ c }: { c: Character }) {
  if (c.tier >= 6) return <span style={{ fontFamily:'var(--mono)', fontSize:'0.5rem', padding:'1px 5px', borderRadius:3, background:'rgba(168,85,247,0.15)', border:'1px solid rgba(168,85,247,0.4)', color:'#a855f7', letterSpacing:'0.05em' }}>TITAN</span>;
  if (c.tier >= 5) return <span style={{ fontFamily:'var(--mono)', fontSize:'0.5rem', padding:'1px 5px', borderRadius:3, background:'rgba(0,212,255,0.1)', border:'1px solid rgba(0,212,255,0.35)', color:'#00d4ff', letterSpacing:'0.05em' }}>TIER {c.tier}</span>;
  if (c.tier >= 4) return <span style={{ fontFamily:'var(--mono)', fontSize:'0.5rem', padding:'1px 5px', borderRadius:3, background:'rgba(16,185,129,0.1)', border:'1px solid rgba(16,185,129,0.3)', color:'#10b981', letterSpacing:'0.05em' }}>TIER {c.tier}</span>;
  return <span style={{ fontFamily:'var(--mono)', fontSize:'0.5rem', padding:'1px 5px', borderRadius:3, background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.12)', color:'#6b7b96', letterSpacing:'0.05em' }}>TIER {c.tier}</span>;
}

function AbilityTag({ type, label, desc }: { type: string; label: string; desc: string }) {
  const styles: Record<string, { background: string; border: string; color: string }> = {
    cyan:   { background:'rgba(0,212,255,0.08)',    border:'1px solid rgba(0,212,255,0.3)',    color:'#00d4ff' },
    blue:   { background:'rgba(59,130,246,0.12)',   border:'1px solid rgba(59,130,246,0.3)',   color:'#3b82f6' },
    green:  { background:'rgba(16,185,129,0.12)',   border:'1px solid rgba(16,185,129,0.3)',   color:'#10b981' },
    purple: { background:'rgba(168,85,247,0.12)',   border:'1px solid rgba(168,85,247,0.35)',  color:'#a855f7' },
    amber:  { background:'rgba(245,158,11,0.12)',   border:'1px solid rgba(245,158,11,0.3)',   color:'#f59e0b' },
    red:    { background:'rgba(239,68,68,0.12)',    border:'1px solid rgba(239,68,68,0.3)',    color:'#ef4444' },
  };
  const s = styles[type] || styles.blue;
  return (
    <span title={desc} style={{ ...s, fontFamily:'var(--mono)', fontSize:'0.52rem', padding:'2px 7px', borderRadius:4, letterSpacing:'0.04em', whiteSpace:'nowrap' }}>{label}</span>
  );
}

interface SideState {
  char: Character;
  count: number;
  tab: 'canon' | 'generic';
}

interface OrgState {
  faction: string;
  roster: { id: string; count: number }[];
}

function CharButton({ c, side, selectedId, otherSelectedId, onSelect }: {
  c: Character; side: 'alpha'|'bravo'; selectedId?: string; otherSelectedId?: string; onSelect: (id:string) => void;
}) {
  const isSelected = selectedId === c.id;
  const isOther = otherSelectedId === c.id;
  const fc = factionColor(c);
  const sideColor = side === 'alpha' ? ALPHA_COLOR : BRAVO_COLOR;
  const otherColor = side === 'alpha' ? BRAVO_COLOR : ALPHA_COLOR;
  return (
    <button
      onClick={() => onSelect(c.id)}
      style={{
        padding:'8px 10px', borderRadius:7, cursor:'pointer', textAlign:'left',
        display:'flex', alignItems:'center', gap:10, width:'100%',
        border: isSelected ? `1px solid ${sideColor}` : '1px solid #1e2530',
        background: isSelected ? `${sideColor}18` : '#141820',
        color: isSelected ? '#e8edf5' : '#6a7a8e',
        transition:'all 0.15s',
      }}
    >
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ fontSize:'0.78rem', fontWeight:600, color: isSelected ? '#e8edf5' : '#a8b4c4', lineHeight:1.2, marginBottom:1 }}>
          {c.name}
          {c.callsign && <span style={{ color:'#6a7a8e', fontWeight:400, fontSize:'0.68rem' }}> · {c.callsign}</span>}
          {c.born && <span style={{ color:'#3a4a5a', fontWeight:400, fontSize:'0.6rem' }}> b.{c.born}</span>}
        </div>
        <div style={{ fontFamily:'var(--mono)', fontSize:'0.58rem', color:'#6a7a8e', letterSpacing:'0.04em', marginBottom:3 }}>
          {c.classLabel} <span style={{ color: fc, fontSize:'0.55rem' }}>· {FACTIONS[c.faction]?.label || c.faction}</span>
        </div>
        <div style={{ display:'flex', gap:4, flexWrap:'wrap' }}>
          <TierBadge c={c} />
          {c.status === 'classified' && <span style={{ fontFamily:'var(--mono)', fontSize:'0.5rem', padding:'1px 5px', borderRadius:3, background:'rgba(239,68,68,0.1)', border:'1px solid rgba(239,68,68,0.3)', color:'#ef4444' }}>CLASSIFIED</span>}
          {c.abilities.length > 0 && <span style={{ fontFamily:'var(--mono)', fontSize:'0.5rem', padding:'1px 5px', borderRadius:3, background:'rgba(0,212,255,0.08)', border:'1px solid rgba(0,212,255,0.25)', color:'#00d4ff' }}>{c.abilities[0].label}</span>}
        </div>
      </div>
      {isOther && <div style={{ fontSize:'0.58rem', color: otherColor, fontFamily:'var(--mono)', flexShrink:0 }}>{side === 'alpha' ? 'BRAVO' : 'ALPHA'}</div>}
    </button>
  );
}

function Sidebar({
  mode, scenario, setScenario, env, setEnv,
  alpha, setAlpha, bravo, setBravo,
  orgAlpha, setOrgAlpha, orgBravo, setOrgBravo,
  onRun,
}: {
  mode: string;
  scenario: Scenario; setScenario: (s:Scenario)=>void;
  env: Environment; setEnv: (e:Environment)=>void;
  alpha: SideState; setAlpha: (s:SideState)=>void;
  bravo: SideState; setBravo: (s:SideState)=>void;
  orgAlpha: OrgState; setOrgAlpha: (o:OrgState)=>void;
  orgBravo: OrgState; setOrgBravo: (o:OrgState)=>void;
  onRun: ()=>void;
}) {
  const sectionLabel: React.CSSProperties = { fontFamily:'var(--mono)', fontSize:'0.6rem', letterSpacing:'0.14em', color:'#3a4a5a', textTransform:'uppercase', marginBottom:6, display:'flex', alignItems:'center', gap:8 };

  function renderCharList(side: 'alpha'|'bravo', st: SideState, setSt: (s:SideState)=>void) {
    const otherId = side === 'alpha' ? bravo.char?.id : alpha.char?.id;
    if (st.tab === 'canon') {
      return (
        <div>
          <div style={{ display:'flex', gap:3, background:'#0f1217', border:'1px solid #1e2530', borderRadius:8, padding:3, marginBottom:10 }}>
            <button onClick={() => setSt({...st, tab:'canon'})} style={{ flex:1, padding:'5px', borderRadius:5, border:'none', cursor:'pointer', background:'#141820', color:'#a8b4c4', fontFamily:'var(--mono)', fontSize:'0.58rem', letterSpacing:'0.07em' }}>CANON CHARS</button>
            <button onClick={() => setSt({...st, tab:'generic'})} style={{ flex:1, padding:'5px', borderRadius:5, border:'none', cursor:'pointer', background:'transparent', color:'#3a4a5a', fontFamily:'var(--mono)', fontSize:'0.58rem', letterSpacing:'0.07em' }}>GENERIC OPS</button>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:10, maxHeight:380, overflowY:'auto' }}>
            {FACTION_ORDER.map(fKey => {
              const chars = CHARACTERS.filter(c => c.faction === fKey);
              if (!chars.length) return null;
              const f = FACTIONS[fKey];
              return (
                <div key={fKey}>
                  <div style={{ fontFamily:'var(--mono)', fontSize:'0.54rem', letterSpacing:'0.1em', color:f.color, marginBottom:4, display:'flex', alignItems:'center', gap:5 }}>
                    <span style={{ display:'inline-block', width:5, height:5, borderRadius:'50%', background:f.color }} />
                    {f.label.toUpperCase()}
                  </div>
                  <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
                    {chars.map(c => (
                      <CharButton key={c.id} c={c} side={side} selectedId={st.char?.id} otherSelectedId={otherId} onSelect={id => { const ch = ALL_OPERATORS.find(x=>x.id===id)!; setSt({...st, char:ch}); }} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    return (
      <div>
        <div style={{ display:'flex', gap:3, background:'#0f1217', border:'1px solid #1e2530', borderRadius:8, padding:3, marginBottom:10 }}>
          <button onClick={() => setSt({...st, tab:'canon'})} style={{ flex:1, padding:'5px', borderRadius:5, border:'none', cursor:'pointer', background:'transparent', color:'#3a4a5a', fontFamily:'var(--mono)', fontSize:'0.58rem', letterSpacing:'0.07em' }}>CANON CHARS</button>
          <button onClick={() => setSt({...st, tab:'generic'})} style={{ flex:1, padding:'5px', borderRadius:5, border:'none', cursor:'pointer', background:'#141820', color:'#a8b4c4', fontFamily:'var(--mono)', fontSize:'0.58rem', letterSpacing:'0.07em' }}>GENERIC OPS</button>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:12, maxHeight:380, overflowY:'auto' }}>
          {GENERIC_GROUPS.map(grp => {
            const ops = GENERIC_OPERATORS.filter(o => grp.ids.includes(o.id));
            return (
              <div key={grp.key}>
                <div style={{ fontFamily:'var(--mono)', fontSize:'0.56rem', letterSpacing:'0.1em', color:grp.color, marginBottom:5, display:'flex', alignItems:'center', gap:6 }}>
                  <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background:grp.color }} />
                  {grp.label.toUpperCase()}
                  <span style={{ color:'#3a4a5a', fontSize:'0.53rem' }}>{grp.desc}</span>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
                  {ops.map(c => (
                    <CharButton key={c.id} c={c} side={side} selectedId={st.char?.id} otherSelectedId={otherId} onSelect={id => { const ch = ALL_OPERATORS.find(x=>x.id===id)!; setSt({...st, char:ch}); }} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  function OrgRoster({ side, org, setOrg }: { side:'alpha'|'bravo'; org:OrgState; setOrg:(o:OrgState)=>void }) {
    const sideColor = side === 'alpha' ? ALPHA_COLOR : BRAVO_COLOR;
    const isGeneric = org.faction === 'Generic';
    const factionChars = isGeneric ? GENERIC_OPERATORS : ALL_OPERATORS.filter(c => c.faction === org.faction && !c.isGeneric);
    const rosterIds = org.roster.map(r => r.id);

    const toggle = (id: string) => {
      if (rosterIds.includes(id)) setOrg({...org, roster: org.roster.filter(r => r.id !== id)});
      else setOrg({...org, roster: [...org.roster, { id, count:1 }]});
    };
    const changeCount = (id: string, delta: number) => {
      setOrg({...org, roster: org.roster.map(r => r.id===id ? {...r, count:Math.max(1,Math.min(20,r.count+delta))} : r)});
    };

    return (
      <div>
        <div style={{ fontFamily:'var(--mono)', fontSize:'0.56rem', color:'#3a4a5a', letterSpacing:'0.1em', marginBottom:6, marginTop:8 }}>SELECT COMBATANTS</div>
        {isGeneric ? (
          <div style={{ display:'flex', flexDirection:'column', gap:8, maxHeight:200, overflowY:'auto' }}>
            {GENERIC_GROUPS.map(grp => {
              const ops = GENERIC_OPERATORS.filter(o => grp.ids.includes(o.id));
              return (
                <div key={grp.key}>
                  <div style={{ fontFamily:'var(--mono)', fontSize:'0.54rem', color:grp.color, marginBottom:3 }}>{grp.label.toUpperCase()}</div>
                  <div style={{ display:'flex', flexDirection:'column', gap:3 }}>
                    {ops.map(c => {
                      const isIn = rosterIds.includes(c.id);
                      return (
                        <button key={c.id} onClick={() => toggle(c.id)} style={{ padding:'6px 8px', borderRadius:6, border: isIn ? `1px solid ${sideColor}` : '1px solid #1e2530', background: isIn ? `${sideColor}15` : '#141820', color: isIn ? '#e8edf5' : '#6a7a8e', cursor:'pointer', textAlign:'left', display:'flex', alignItems:'center', gap:8 }}>
                          <div style={{ flex:1 }}>
                            <div style={{ fontSize:'0.72rem', fontWeight:600 }}>{c.name}</div>
                            <div style={{ fontFamily:'var(--mono)', fontSize:'0.56rem' }}>{c.classLabel}</div>
                          </div>
                          {isIn && <span style={{ color:sideColor, fontSize:'0.75rem' }}>✓</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ display:'flex', flexDirection:'column', gap:3, maxHeight:200, overflowY:'auto' }}>
            {factionChars.map(c => {
              const isIn = rosterIds.includes(c.id);
              return (
                <button key={c.id} onClick={() => toggle(c.id)} style={{ padding:'6px 8px', borderRadius:6, border: isIn ? `1px solid ${sideColor}` : '1px solid #1e2530', background: isIn ? `${sideColor}15` : '#141820', color: isIn ? '#e8edf5' : '#6a7a8e', cursor:'pointer', textAlign:'left', display:'flex', alignItems:'center', gap:8 }}>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:'0.72rem', fontWeight:600 }}>{c.name}</div>
                    <div style={{ fontFamily:'var(--mono)', fontSize:'0.56rem' }}>{c.classLabel}</div>
                  </div>
                  {isIn && <span style={{ color:sideColor, fontSize:'0.75rem' }}>✓</span>}
                </button>
              );
            })}
          </div>
        )}
        {org.roster.length > 0 && (
          <div style={{ marginTop:10 }}>
            <div style={{ fontFamily:'var(--mono)', fontSize:'0.56rem', color:'#3a4a5a', letterSpacing:'0.1em', marginBottom:6 }}>ACTIVE ROSTER ({org.roster.length})</div>
            <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
              {org.roster.map(r => {
                const c = ALL_OPERATORS.find(x => x.id === r.id)!;
                return (
                  <div key={r.id} style={{ display:'flex', alignItems:'center', gap:8, padding:'7px 9px', borderRadius:7, border:'1px solid #1e2530', background:'#141820' }}>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ fontSize:'0.7rem', fontWeight:600, color:'#a8b4c4' }}>{c.name}</div>
                      <div style={{ fontFamily:'var(--mono)', fontSize:'0.56rem', color:'#6a7a8e' }}>{c.classLabel}</div>
                    </div>
                    <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                      <button onClick={() => changeCount(r.id,-1)} style={{ width:18, height:18, borderRadius:3, border:'1px solid #1e2530', background:'#141820', color:'#a8b4c4', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.7rem' }}>−</button>
                      <span style={{ fontFamily:'var(--mono)', fontSize:'0.72rem', minWidth:14, textAlign:'center', color:'#a8b4c4' }}>{r.count}</span>
                      <button onClick={() => changeCount(r.id,1)} style={{ width:18, height:18, borderRadius:3, border:'1px solid #1e2530', background:'#141820', color:'#a8b4c4', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.7rem' }}>+</button>
                    </div>
                    <button onClick={() => setOrg({...org, roster:org.roster.filter(x=>x.id!==r.id)})} style={{ width:18, height:18, borderRadius:3, border:'1px solid #1e2530', background:'transparent', color:'#3a4a5a', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.65rem' }}>×</button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ width:340, flexShrink:0, borderRight:'1px solid #1e2530', padding:16, display:'flex', flexDirection:'column', gap:14, overflowY:'auto', maxHeight:'calc(100vh - 120px)' }}>
      <div>
        <div style={sectionLabel}>Combat Scenario<span style={{ flex:1, height:1, background:'#1e2530' }} /></div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:5 }}>
          {SCENARIOS.map(s => (
            <button key={s.id} onClick={() => setScenario(s)} style={{ padding:'7px 8px', borderRadius:7, border: scenario.id===s.id ? '1px solid #00d4ff' : '1px solid #1e2530', background: scenario.id===s.id ? 'rgba(0,212,255,0.08)' : '#141820', color: scenario.id===s.id ? '#00d4ff' : '#6a7a8e', cursor:'pointer', textAlign:'left', transition:'all 0.15s' }}>
              <div style={{ fontSize:'0.8rem', marginBottom:2 }}>{s.icon}</div>
              <div style={{ fontWeight:600, fontSize:'0.68rem', color: scenario.id===s.id ? '#e8edf5' : '#a8b4c4' }}>{s.label}</div>
              <div style={{ fontFamily:'var(--mono)', fontSize:'0.56rem', color:'#3a4a5a', marginTop:1 }}>{s.sub}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <div style={sectionLabel}>Environment<span style={{ flex:1, height:1, background:'#1e2530' }} /></div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:5 }}>
          {ENVIRONMENTS.map(e => (
            <button key={e.id} onClick={() => setEnv(e)} style={{ padding:'7px 8px', borderRadius:7, border: env.id===e.id ? '1px solid #00d4ff' : '1px solid #1e2530', background: env.id===e.id ? 'rgba(0,212,255,0.08)' : '#141820', color: env.id===e.id ? '#00d4ff' : '#6a7a8e', cursor:'pointer', textAlign:'left', transition:'all 0.15s' }}>
              <div style={{ fontSize:'0.8rem', marginBottom:2 }}>{e.icon}</div>
              <div style={{ fontWeight:600, fontSize:'0.68rem', color: env.id===e.id ? '#e8edf5' : '#a8b4c4' }}>{e.label}</div>
              <div style={{ fontFamily:'var(--mono)', fontSize:'0.56rem', color:'#3a4a5a', marginTop:1 }}>{e.sub}</div>
            </button>
          ))}
        </div>
      </div>

      {mode === '1v1' ? (
        <>
          {(['alpha','bravo'] as const).map(side => {
            const st = side === 'alpha' ? alpha : bravo;
            const setSt = side === 'alpha' ? setAlpha : setBravo;
            const sc = side === 'alpha' ? ALPHA_COLOR : BRAVO_COLOR;
            return (
              <div key={side}>
                <div style={sectionLabel}>{side === 'alpha' ? 'Alpha Combatant' : 'Bravo Combatant'}<span style={{ flex:1, height:1, background:'#1e2530' }} /></div>
                <div style={{ border:'1px solid #1e2530', borderRadius:10, overflow:'hidden' }}>
                  <div style={{ padding:'10px 14px', display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid #1e2530', background: side==='alpha' ? 'rgba(59,130,246,0.08)' : 'rgba(236,72,153,0.08)' }}>
                    <span style={{ fontFamily:'var(--mono)', fontSize:'0.62rem', letterSpacing:'0.12em', fontWeight:600, color:sc }}>{side.toUpperCase()} SIDE</span>
                    <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                      <button onClick={() => setSt({...st, count:Math.max(1,st.count-1)})} style={{ width:20, height:20, borderRadius:4, border:'1px solid #1e2530', background:'#141820', color:'#a8b4c4', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.75rem' }}>−</button>
                      <span style={{ fontFamily:'var(--mono)', fontSize:'0.75rem', minWidth:16, textAlign:'center', color:'#a8b4c4' }}>{st.count}</span>
                      <button onClick={() => setSt({...st, count:Math.min(20,st.count+1)})} style={{ width:20, height:20, borderRadius:4, border:'1px solid #1e2530', background:'#141820', color:'#a8b4c4', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.75rem' }}>+</button>
                    </div>
                  </div>
                  <div style={{ padding:10 }}>
                    {renderCharList(side, st, setSt)}
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          {(['alpha','bravo'] as const).map(side => {
            const org = side === 'alpha' ? orgAlpha : orgBravo;
            const setOrg = side === 'alpha' ? setOrgAlpha : setOrgBravo;
            const canonFactions = Object.entries(FACTIONS).filter(([k]) => k !== 'Generic');
            return (
              <div key={side}>
                <div style={sectionLabel}>{side === 'alpha' ? 'Alpha Organization' : 'Bravo Organization'}<span style={{ flex:1, height:1, background:'#1e2530' }} /></div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:5, marginBottom:6 }}>
                  {canonFactions.map(([key, f]) => (
                    <button key={key} onClick={() => setOrg({faction:key, roster:[]})} style={{ padding:'6px 8px', borderRadius:6, border: org.faction===key ? `1px solid ${f.color}` : '1px solid #1e2530', background: org.faction===key ? `${f.color}15` : '#141820', color: org.faction===key ? f.color : '#6a7a8e', cursor:'pointer', textAlign:'left', display:'flex', alignItems:'center', gap:6, fontSize:'0.6rem', fontFamily:'var(--mono)' }}>
                      <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background:f.color, flexShrink:0 }} />
                      {f.label}
                    </button>
                  ))}
                  <button onClick={() => setOrg({faction:'Generic', roster:[]})} style={{ gridColumn:'1/-1', padding:'6px 8px', borderRadius:6, border: org.faction==='Generic' ? '1px solid #6b7b96' : '1px solid #1e2530', background: org.faction==='Generic' ? 'rgba(107,123,150,0.15)' : '#141820', color: org.faction==='Generic' ? '#9ca3af' : '#6a7a8e', cursor:'pointer', textAlign:'left', display:'flex', alignItems:'center', gap:6, fontSize:'0.6rem', fontFamily:'var(--mono)' }}>
                    <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background:'#6b7b96', flexShrink:0 }} />
                    Generic Operators (All Classes)
                  </button>
                </div>
                <OrgRoster side={side} org={org} setOrg={setOrg} />
                <div style={{ height:1, background:'#1e2530', margin:'10px 0' }} />
              </div>
            );
          })}
        </>
      )}

      <button
        onClick={onRun}
        style={{ width:'100%', padding:13, background:'linear-gradient(135deg,#0099bb,#0077aa)', border:'1px solid rgba(0,212,255,0.4)', borderRadius:8, color:'#fff', fontFamily:'var(--sans)', fontSize:'0.85rem', fontWeight:600, letterSpacing:'0.08em', cursor:'pointer', boxShadow:'0 0 20px rgba(0,120,180,0.25)' }}
      >
        ▶ RUN SIMULATION
      </button>
    </div>
  );
}

function Arena({ result, alphaChars, bravoChars, alphaLabel, bravoLabel, alphaC, bravoC, scenario, env }: {
  result: CombatResult | null;
  alphaChars: CharCount[]; bravoChars: CharCount[];
  alphaLabel: string; bravoLabel: string;
  alphaC: string; bravoC: string;
  scenario: Scenario; env: Environment;
}) {
  if (!result) {
    return (
      <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'60px 20px', color:'#3a4a5a', textAlign:'center', gap:12 }}>
        <div style={{ fontSize:'2.5rem' }}>⚔</div>
        <div style={{ fontFamily:'var(--sans)', fontSize:'1rem', fontWeight:600, color:'#6a7a8e' }}>Select Combatants & Run</div>
        <div style={{ fontSize:'0.72rem', lineHeight:1.5, maxWidth:280, color:'#3a4a5a' }}>Choose characters or organizations, set your scenario and environment, then run the simulation. Results are based on HXL augmentation canon, Lanchester attrition modeling, and ability-weighted modifiers.</div>
      </div>
    );
  }

  const { rounds, edges, winner, alphaFinal, bravoFinal, elapsed } = result;
  const alphaWon = winner === 'alpha', bravoWon = winner === 'bravo', isDraw = winner === 'draw';
  const winnerColor = alphaWon ? alphaC : bravoWon ? bravoC : '#f59e0b';
  const winnerLabel = alphaWon ? alphaLabel : bravoWon ? bravoLabel : 'DRAW';
  const alphaCount = alphaChars.reduce((s,r)=>s+r.count,0);
  const bravoCount = bravoChars.reduce((s,r)=>s+r.count,0);
  const totalFP = result.alphaStats.lethal*alphaCount + result.bravoStats.lethal*bravoCount;
  const aFR = (result.alphaStats.lethal*alphaCount)/totalFP;
  const bFR = (result.bravoStats.lethal*bravoCount)/totalFP;

  const allAbils = (chars: CharCount[]) => {
    const seen: Record<string,boolean> = {};
    const out: typeof chars[0]['char']['abilities'] = [];
    chars.forEach(({char}) => char.abilities.forEach(a => { if (!seen[a.id]) { seen[a.id]=true; out.push(a); } }));
    return out;
  };

  return (
    <div style={{ flex:1, padding:20, overflowY:'auto', maxHeight:'calc(100vh - 120px)' }}>
      <div style={{ display:'flex', alignItems:'stretch', gap:16, marginBottom:20 }}>
        <div style={{ flex:1, borderRadius:12, padding:16, border:`1px solid ${alphaC}55`, background:`linear-gradient(135deg, ${alphaC}0d, transparent)` }}>
          <div style={{ fontFamily:'var(--mono)', fontSize:'0.58rem', color:alphaC, letterSpacing:'0.1em', marginBottom:4 }}>ALPHA</div>
          <div style={{ fontFamily:'var(--sans)', fontSize:'1.1rem', fontWeight:600, color:'#e8edf5', lineHeight:1.2 }}>{alphaLabel}</div>
          {alphaChars.length===1 && alphaChars[0].char.callsign && <div style={{ fontFamily:'var(--mono)', fontSize:'0.6rem', color:'#6a7a8e', letterSpacing:'0.08em', marginTop:2 }}>「 {alphaChars[0].char.callsign} 」</div>}
          <div style={{ fontSize:'0.68rem', color:'#6a7a8e', marginTop:6 }}>{alphaChars.map(r=>`${r.char.classLabel}${r.count>1?` ×${r.count}`:''}`).join(' · ')}</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:4, marginTop:8 }}>{allAbils(alphaChars).map(a=><AbilityTag key={a.id} {...a}/>)}</div>
        </div>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:4 }}>
          <div style={{ fontFamily:'var(--sans)', fontSize:'1.5rem', fontWeight:700, color:'#3a4a5a' }}>VS</div>
          <div style={{ fontFamily:'var(--mono)', fontSize:'0.6rem', color:'#3a4a5a', letterSpacing:'0.06em' }}>{alphaCount}v{bravoCount}</div>
          <div style={{ fontFamily:'var(--mono)', fontSize:'0.56rem', color:'#3a4a5a', marginTop:2 }}>{scenario.icon} {scenario.label}</div>
          <div style={{ fontFamily:'var(--mono)', fontSize:'0.56rem', color:'#3a4a5a' }}>{env.icon} {env.label}</div>
        </div>
        <div style={{ flex:1, borderRadius:12, padding:16, border:`1px solid ${bravoC}55`, background:`linear-gradient(135deg, ${bravoC}0d, transparent)`, textAlign:'right' }}>
          <div style={{ fontFamily:'var(--mono)', fontSize:'0.58rem', color:bravoC, letterSpacing:'0.1em', marginBottom:4 }}>BRAVO</div>
          <div style={{ fontFamily:'var(--sans)', fontSize:'1.1rem', fontWeight:600, color:'#e8edf5', lineHeight:1.2 }}>{bravoLabel}</div>
          {bravoChars.length===1 && bravoChars[0].char.callsign && <div style={{ fontFamily:'var(--mono)', fontSize:'0.6rem', color:'#6a7a8e', letterSpacing:'0.08em', marginTop:2 }}>「 {bravoChars[0].char.callsign} 」</div>}
          <div style={{ fontSize:'0.68rem', color:'#6a7a8e', marginTop:6 }}>{bravoChars.map(r=>`${r.char.classLabel}${r.count>1?` ×${r.count}`:''}`).join(' · ')}</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:4, marginTop:8, justifyContent:'flex-end' }}>{allAbils(bravoChars).map(a=><AbilityTag key={a.id} {...a}/>)}</div>
        </div>
      </div>

      <div style={{ marginBottom:20 }}>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:5 }}>
          <span style={{ fontFamily:'var(--mono)', fontSize:'0.58rem', color:alphaC }}>ALPHA {(aFR*100).toFixed(0)}%</span>
          <span style={{ fontFamily:'var(--mono)', fontSize:'0.58rem', color:'#3a4a5a' }}>LANCHESTER FORCE RATIO</span>
          <span style={{ fontFamily:'var(--mono)', fontSize:'0.58rem', color:bravoC }}>BRAVO {(bFR*100).toFixed(0)}%</span>
        </div>
        <div style={{ height:10, background:'rgba(255,255,255,0.05)', borderRadius:5, overflow:'hidden', display:'flex' }}>
          <div style={{ background:`linear-gradient(90deg, ${alphaC}, ${alphaC}99)`, width:`${aFR*100}%`, transition:'width 0.5s' }} />
          <div style={{ background:`linear-gradient(90deg, ${bravoC}99, ${bravoC})`, marginLeft:'auto', width:`${bFR*100}%`, transition:'width 0.5s' }} />
        </div>
      </div>

      <div style={{ borderRadius:12, padding:20, border:`1px solid ${winnerColor}44`, marginBottom:20, position:'relative', overflow:'hidden', background:'#0f1217' }}>
        <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at 50% -20%, ${winnerColor}18, transparent 70%)`, pointerEvents:'none' }} />
        <div style={{ fontFamily:'var(--mono)', fontSize:'0.6rem', color:'#3a4a5a', letterSpacing:'0.12em', marginBottom:8 }}>SIMULATION VERDICT</div>
        <div style={{ fontFamily:'var(--sans)', fontSize:'1.6rem', fontWeight:700, marginBottom:4, color:winnerColor }}>
          {isDraw ? '⚡ DRAW' : `${alphaWon?'🛡':'⚔'} ${winnerLabel}`}
        </div>
        <div style={{ fontSize:'0.78rem', color:'#6a7a8e', marginBottom:16 }}>
          {isDraw ? 'Neither side achieves decisive advantage.' : `${alphaWon?'Alpha':'Bravo'} achieves operational superiority.`}{' '}
          {alphaWon ? `Alpha: ${(alphaFinal*100).toFixed(0)}% · Bravo: ${(bravoFinal*100).toFixed(0)}%` : bravoWon ? `Bravo: ${(bravoFinal*100).toFixed(0)}% · Alpha: ${(alphaFinal*100).toFixed(0)}%` : `Alpha: ${(alphaFinal*100).toFixed(0)}% · Bravo: ${(bravoFinal*100).toFixed(0)}%`}
          {' '}· Elapsed: {elapsed.toFixed(0)}s
        </div>
      </div>

      <div style={{ fontFamily:'var(--mono)', fontSize:'0.6rem', letterSpacing:'0.14em', color:'#3a4a5a', textTransform:'uppercase', marginBottom:10, display:'flex', alignItems:'center', gap:8 }}>
        Combat Timeline<span style={{ flex:1, height:1, background:'#1e2530' }} />
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:20 }}>
        {rounds.map((r, i) => (
          <div key={r.id} style={{ border:'1px solid #1e2530', borderRadius:10, padding:14, background:'#0f1217', animation:`fadeSlide 0.3s ease ${i*0.05}s both` }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10 }}>
              <div style={{ fontFamily:'var(--mono)', fontSize:'0.62rem', letterSpacing:'0.1em', color:'#6a7a8e' }}>{r.label}</div>
              <div style={{ fontSize:'0.62rem', color:'#3a4a5a', fontFamily:'var(--mono)' }}>{r.dur.toFixed(1)}s</div>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 28px 1fr', gap:8, alignItems:'center', marginBottom:10 }}>
              <div style={{ display:'flex', flexDirection:'column', gap:3 }}>
                <div style={{ fontFamily:'var(--mono)', fontSize:'0.58rem', letterSpacing:'0.06em', color:alphaC }}>{alphaLabel.split(' ')[0].toUpperCase()}</div>
                <div style={{ height:8, background:'rgba(255,255,255,0.06)', borderRadius:4, overflow:'hidden' }}>
                  <div style={{ height:'100%', borderRadius:4, width:`${(r.alphaHP*100).toFixed(0)}%`, background:alphaC, transition:'width 0.5s ease' }} />
                </div>
                <div style={{ fontFamily:'var(--mono)', fontSize:'0.62rem', color:hpColor(r.alphaHP) }}>{(r.alphaHP*100).toFixed(0)}%</div>
              </div>
              <div style={{ fontFamily:'var(--mono)', fontSize:'0.62rem', color:'#3a4a5a', textAlign:'center' }}>↔</div>
              <div style={{ display:'flex', flexDirection:'column', gap:3, textAlign:'right' }}>
                <div style={{ fontFamily:'var(--mono)', fontSize:'0.58rem', letterSpacing:'0.06em', color:bravoC }}>{bravoLabel.split(' ')[0].toUpperCase()}</div>
                <div style={{ height:8, background:'rgba(255,255,255,0.06)', borderRadius:4, overflow:'hidden' }}>
                  <div style={{ height:'100%', borderRadius:4, width:`${(r.bravoHP*100).toFixed(0)}%`, background:bravoC, marginLeft:'auto', transition:'width 0.5s ease' }} />
                </div>
                <div style={{ fontFamily:'var(--mono)', fontSize:'0.62rem', color:hpColor(r.bravoHP) }}>{(r.bravoHP*100).toFixed(0)}%</div>
              </div>
            </div>
            <div style={{ fontSize:'0.72rem', color:'#6a7a8e', lineHeight:1.5 }}>{r.desc}</div>
            {r.abilities.map((a,j) => (
              <div key={j} style={{ marginTop:8, padding:'7px 10px', borderRadius:6, background:'rgba(0,212,255,0.05)', border:'1px solid rgba(0,212,255,0.15)', fontFamily:'var(--mono)', fontSize:'0.62rem', color:'#00d4ff' }}>
                <span style={{ color:'#3a4a5a', marginRight:4 }}>◆ ABILITY:</span>{a.text}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ fontFamily:'var(--mono)', fontSize:'0.6rem', letterSpacing:'0.14em', color:'#3a4a5a', textTransform:'uppercase', marginBottom:10, display:'flex', alignItems:'center', gap:8 }}>
        Edge Analysis<span style={{ flex:1, height:1, background:'#1e2530' }} />
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:20 }}>
        {edges.map((e,i) => (
          <div key={i} style={{ padding:10, borderRadius:8, border:'1px solid #1e2530', background:'#141820' }}>
            <div style={{ fontFamily:'var(--mono)', fontSize:'0.6rem', letterSpacing:'0.08em', color:'#3a4a5a', marginBottom:4 }}>{e.label}</div>
            <div style={{ fontSize:'0.78rem', fontWeight:600, marginBottom:2, color:e.color }}>{e.holder}</div>
            <div style={{ fontFamily:'var(--mono)', fontSize:'0.62rem', color:'#6a7a8e', marginBottom:4 }}>{e.mag}</div>
            <div style={{ fontSize:'0.68rem', color:'#6a7a8e', lineHeight:1.4 }}>{e.exp}</div>
          </div>
        ))}
      </div>

      <div style={{ fontFamily:'var(--mono)', fontSize:'0.6rem', letterSpacing:'0.14em', color:'#3a4a5a', textTransform:'uppercase', marginBottom:10, display:'flex', alignItems:'center', gap:8 }}>
        Operator Dossiers<span style={{ flex:1, height:1, background:'#1e2530' }} />
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:20 }}>
        {[...alphaChars.map(r=>({...r,side:'alpha' as const,color:alphaC})),...bravoChars.map(r=>({...r,side:'bravo' as const,color:bravoC}))].map(({char,count,side,color}) => (
          <div key={char.id+side} style={{ border:`1px solid ${color}33`, borderLeft:`3px solid ${color}`, borderRadius:8, padding:14, background:`${color}06` }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
              <div>
                <div style={{ fontFamily:'var(--sans)', fontSize:'0.95rem', fontWeight:600, color:'#e8edf5' }}>
                  {char.name}
                  {char.callsign && <span style={{ fontSize:'0.7rem', color:'#6a7a8e', fontWeight:400 }}> · {char.callsign}</span>}
                </div>
                <div style={{ fontFamily:'var(--mono)', fontSize:'0.6rem', color, letterSpacing:'0.06em', marginTop:2 }}>
                  {char.classLabel} · {FACTIONS[char.faction]?.label||char.faction}{char.born ? ` · b.${char.born}` : ''}
                </div>
              </div>
              <div style={{ fontFamily:'var(--mono)', fontSize:'0.65rem', color:'#6a7a8e' }}>{side.toUpperCase()}{count>1?` ×${count}`:''}</div>
            </div>
            <div style={{ fontSize:'0.7rem', color:'#6a7a8e', lineHeight:1.5, marginBottom:8 }}>{char.bio}</div>
            <div style={{ fontSize:'0.68rem', color:'#3a4a5a', fontStyle:'italic', marginBottom:8 }}>{char.specialization}</div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:4, marginBottom:10 }}>
              {char.abilities.map(a => <AbilityTag key={a.id} {...a} />)}
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:6 }}>
              {([['STR',char.strength,18],['SPD',char.speed,15],['COG',char.cognition,12],['END',char.endurance,18],['REACT',(1000-char.reactionTime)/10,100],['DUR',char.durability,20]] as [string,number,number][]).map(([label,val,max]) => (
                <div key={label} style={{ display:'flex', alignItems:'center', gap:8, fontSize:'0.68rem' }}>
                  <div style={{ color:'#6a7a8e', width:48, flexShrink:0, fontFamily:'var(--mono)', fontSize:'0.6rem', letterSpacing:'0.04em' }}>{label}</div>
                  <div style={{ flex:1, height:4, background:'rgba(255,255,255,0.06)', borderRadius:2, overflow:'hidden' }}>
                    <div style={{ height:'100%', borderRadius:2, width:`${Math.min(100,(val/max*100)).toFixed(0)}%`, background:`${color}88`, transition:'width 0.4s ease' }} />
                  </div>
                  <div style={{ fontFamily:'var(--mono)', fontSize:'0.62rem', color:'#6a7a8e', width:52, textAlign:'right' }}>{label==='REACT'?`${char.reactionTime}ms`:val.toFixed(1)}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop:20, padding:'12px 14px', borderRadius:8, background:'#0f1217', border:'1px solid #1e2530', borderLeft:'2px solid #3a4a5a' }}>
        <div style={{ fontFamily:'var(--mono)', fontSize:'0.58rem', color:'#3a4a5a', marginBottom:4, letterSpacing:'0.1em' }}>SCIENTIFIC BASIS</div>
        <div style={{ fontSize:'0.68rem', color:'#6a7a8e', lineHeight:1.5, fontStyle:'italic' }}>
          {scenario.cite} {env.cite} Lanchester Square Law (Lanchester, 1916). Thermal collapse at 40°C core (Gonzalez-Alonso et al., 1999). Reaction baseline 250ms (Welchman, 2010).
        </div>
      </div>
      <div style={{ height:40 }} />
    </div>
  );
}

export default function Comparator() {
  const [mode, setModeState] = useState<'1v1'|'org'>('1v1');
  const [scenario, setScenario] = useState(SCENARIOS[0]);
  const [env, setEnv] = useState(ENVIRONMENTS[0]);
  const [alpha, setAlpha] = useState<SideState>({ char: CHARACTERS[0], count:1, tab:'canon' });
  const [bravo, setBravo] = useState<SideState>({ char: CHARACTERS[13], count:1, tab:'canon' });
  const [orgAlpha, setOrgAlpha] = useState<OrgState>({ faction:'AlphaGuard', roster:[] });
  const [orgBravo, setOrgBravo] = useState<OrgState>({ faction:'ParkerGen', roster:[] });
  const [result, setResult] = useState<CombatResult|null>(null);
  const [lastAlpha, setLastAlpha] = useState<CharCount[]>([]);
  const [lastBravo, setLastBravo] = useState<CharCount[]>([]);
  const [lastAlphaLabel, setLastAlphaLabel] = useState('');
  const [lastBravoLabel, setLastBravoLabel] = useState('');
  const [lastAlphaC, setLastAlphaC] = useState(ALPHA_COLOR);
  const [lastBravoC, setLastBravoC] = useState(BRAVO_COLOR);

  function setMode(m: '1v1'|'org') {
    setModeState(m);
    setResult(null);
  }

  function runCombat() {
    let alphaChars: CharCount[], bravoChars: CharCount[], alphaLabel: string, bravoLabel: string, alphaC: string, bravoC: string;
    if (mode === '1v1') {
      if (!alpha.char || !bravo.char) return;
      alphaChars = [{ char:alpha.char, count:alpha.count }];
      bravoChars = [{ char:bravo.char, count:bravo.count }];
      alphaLabel = alpha.char.name + (alpha.count>1?` ×${alpha.count}`:'');
      bravoLabel = bravo.char.name + (bravo.count>1?` ×${bravo.count}`:'');
      alphaC = alpha.char.isGeneric ? genericClassColor(alpha.char) : (FACTIONS[alpha.char.faction]?.color||ALPHA_COLOR);
      bravoC = bravo.char.isGeneric ? genericClassColor(bravo.char) : (FACTIONS[bravo.char.faction]?.color||BRAVO_COLOR);
    } else {
      const ar = orgAlpha.roster, br = orgBravo.roster;
      if (!ar.length || !br.length) { alert('Add combatants to both organizations.'); return; }
      alphaChars = ar.map(r => ({ char: ALL_OPERATORS.find(c=>c.id===r.id)!, count:r.count }));
      bravoChars = br.map(r => ({ char: ALL_OPERATORS.find(c=>c.id===r.id)!, count:r.count }));
      alphaLabel = FACTIONS[orgAlpha.faction]?.label || orgAlpha.faction;
      bravoLabel = FACTIONS[orgBravo.faction]?.label || orgBravo.faction;
      alphaC = orgAlpha.faction==='Generic' ? '#6b7b96' : (FACTIONS[orgAlpha.faction]?.color||ALPHA_COLOR);
      bravoC = orgBravo.faction==='Generic' ? '#a855f7' : (FACTIONS[orgBravo.faction]?.color||BRAVO_COLOR);
    }
    const res = computeCombat(alphaChars, bravoChars, scenario, env);
    setResult(res);
    setLastAlpha(alphaChars); setLastBravo(bravoChars);
    setLastAlphaLabel(alphaLabel); setLastBravoLabel(bravoLabel);
    setLastAlphaC(alphaC); setLastBravoC(bravoC);
  }

  return (
    <div className="page-content">
      <style>{`
        @keyframes fadeSlide { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        .ce-scrollbar::-webkit-scrollbar { width:4px; }
        .ce-scrollbar::-webkit-scrollbar-track { background:transparent; }
        .ce-scrollbar::-webkit-scrollbar-thumb { background:#1e2530; border-radius:2px; }
      `}</style>
      <section id="comparator" style={{ paddingTop:'6rem', paddingBottom:'4rem' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Interactive / HXL Combat Engine</div>
            <h2 className="section-title">Combat Scenario Engine</h2>
            <p className="section-sub">Select combatants, set scenario and environment, then run the simulation. Results are based on HXL augmentation canon, Lanchester attrition modeling, and ability-weighted modifiers.</p>
          </div>

          <div style={{ border:'1px solid #1e2530', borderRadius:12, overflow:'hidden', background:'#0a0c0f' }}>
            <div style={{ borderBottom:'1px solid #1e2530', padding:'12px 16px', display:'flex', alignItems:'center', justifyContent:'space-between', background:'rgba(10,12,15,0.95)', backdropFilter:'blur(12px)' }}>
              <div>
                <div style={{ fontFamily:'var(--mono)', fontSize:'0.6rem', fontWeight:600, color:'var(--teal)', letterSpacing:'0.15em' }}>WARFOX</div>
                <div style={{ fontFamily:'var(--mono)', fontSize:'0.56rem', color:'#6a7a8e', letterSpacing:'0.08em' }}>COMBAT SCENARIO ENGINE · HXL AUGMENTATION FRAMEWORK · v4.0</div>
              </div>
              <div style={{ display:'flex', gap:4, background:'#0f1217', border:'1px solid #1e2530', borderRadius:8, padding:3 }}>
                <button onClick={() => setMode('1v1')} style={{ fontFamily:'var(--mono)', fontSize:'0.63rem', letterSpacing:'0.08em', padding:'5px 12px', borderRadius:5, border:'none', cursor:'pointer', background: mode==='1v1' ? '#141820' : 'transparent', color: mode==='1v1' ? '#00d4ff' : '#6a7a8e', boxShadow: mode==='1v1' ? '0 0 8px rgba(0,212,255,0.15)' : 'none', transition:'all 0.15s' }}>1V1 DUEL</button>
                <button onClick={() => setMode('org')} style={{ fontFamily:'var(--mono)', fontSize:'0.63rem', letterSpacing:'0.08em', padding:'5px 12px', borderRadius:5, border:'none', cursor:'pointer', background: mode==='org' ? '#141820' : 'transparent', color: mode==='org' ? '#00d4ff' : '#6a7a8e', boxShadow: mode==='org' ? '0 0 8px rgba(0,212,255,0.15)' : 'none', transition:'all 0.15s' }}>ORG VS ORG</button>
              </div>
            </div>

            <div style={{ display:'flex', minHeight:600 }}>
              <Sidebar
                mode={mode}
                scenario={scenario} setScenario={s => { setScenario(s); setResult(null); }}
                env={env} setEnv={e => { setEnv(e); setResult(null); }}
                alpha={alpha} setAlpha={s => { setAlpha(s); setResult(null); }}
                bravo={bravo} setBravo={s => { setBravo(s); setResult(null); }}
                orgAlpha={orgAlpha} setOrgAlpha={o => { setOrgAlpha(o); setResult(null); }}
                orgBravo={orgBravo} setOrgBravo={o => { setOrgBravo(o); setResult(null); }}
                onRun={runCombat}
              />
              <Arena
                result={result}
                alphaChars={lastAlpha} bravoChars={lastBravo}
                alphaLabel={lastAlphaLabel} bravoLabel={lastBravoLabel}
                alphaC={lastAlphaC} bravoC={lastBravoC}
                scenario={scenario} env={env}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
