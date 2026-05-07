import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import s from './Landing.module.css';

// ─── TYPES ──────────────────────────────────────────────────────────────────

interface Theme {
  index: string;
  heading: string;
  body: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error' | 'duplicate';

// ─── CONSTANTS ──────────────────────────────────────────────────────────────

const THEMES: Theme[] = [
  {
    index: '01',
    heading: 'Biological Sovereignty',
    body: 'When the human body becomes licensed infrastructure, ownership of the self is no longer a philosophical question. It is a legal one — and the answer belongs to someone else.',
  },
  {
    index: '02',
    heading: 'Institutional Complicity',
    body: "The apparatus that enforces the law was built by the same hands that write it. The question is not whether the institution can be corrupted. It is whether it ever wasn't.",
  },
  {
    index: '03',
    heading: 'The Visibility of Class',
    body: 'Elite augmentation is invisible by design. Working-class augmentation announces itself. Power reads as absence. Disadvantage is worn on the skin, permanent, and precisely calibrated.',
  },
  {
    index: '04',
    heading: 'The Cost of Liberation',
    body: 'Freedom from the platform requires surviving without it. The question is not whether independence is possible. It is whether the people who need it most can afford to survive the attempt.',
  },
];

// ─── HOOKS ──────────────────────────────────────────────────────────────────

function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function useScrolled(offset = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > offset);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [offset]);
  return scrolled;
}

// ─── SUB-COMPONENTS ─────────────────────────────────────────────────────────

function FadeSection({
  children,
  className,
  delay,
  as: Tag = 'div',
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
  [key: string]: unknown;
}) {
  const { ref, visible } = useFadeIn();
  const classes = [s.fadeIn, visible ? s.visible : '', className].filter(Boolean).join(' ');
  return (
    <Tag ref={ref} className={classes} data-delay={delay} {...rest}>
      {children}
    </Tag>
  );
}

function ThemeCard({ theme, delay }: { theme: Theme; delay: number }) {
  const { ref, visible } = useFadeIn();
  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={[s.themeCard, s.fadeIn, visible ? s.visible : ''].join(' ')}
      data-delay={delay}
      aria-labelledby={`theme-heading-${theme.index}`}
    >
      <div className={s.themeCardAccent} aria-hidden="true" />
      <div className={s.themeIndex} aria-hidden="true">{theme.index}</div>
      <h3 id={`theme-heading-${theme.index}`} className={s.themeHeading}>{theme.heading}</h3>
      <p className={s.themeBody}>{theme.body}</p>
    </article>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
      const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? import.meta.env.VITE_SUPABASE_SUPABASE_ANON_KEY as string;
      const res = await fetch(`${supabaseUrl}/rest/v1/newsletter_subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': anonKey,
          'Authorization': `Bearer ${anonKey}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({ email: trimmed, source: 'landing' }),
      });
      if (res.status === 201 || res.status === 200) {
        setStatus('success');
        setEmail('');
      } else if (res.status === 409) {
        setStatus('duplicate');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }, [email]);

  const statusMessage: Record<Exclude<SubmitStatus, 'idle' | 'loading'>, string> = {
    success: 'Transmission received. Record created.',
    error: 'Signal failure. Verify address and retry.',
    duplicate: 'Address already registered.',
  };

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Newsletter signup">
      <div className={s.newsletterForm}>
        <label htmlFor="nl-email" className="sr-only">Email address</label>
        <input
          id="nl-email"
          className={s.newsletterInput}
          type="email"
          value={email}
          onChange={e => { setEmail(e.target.value); setStatus('idle'); }}
          placeholder="Email Address"
          autoComplete="email"
          required
          aria-describedby={status !== 'idle' && status !== 'loading' ? 'nl-status' : undefined}
        />
        <button
          className={s.newsletterBtn}
          type="submit"
          disabled={status === 'loading'}
          aria-busy={status === 'loading'}
        >
          {status === 'loading' ? 'Transmitting' : 'Register'}
        </button>
      </div>
      {status !== 'idle' && status !== 'loading' && (
        <p
          id="nl-status"
          role="status"
          aria-live="polite"
          className={`${s.newsletterStatus} ${status === 'success' || status === 'duplicate' ? s.success : s.error}`}
        >
          {statusMessage[status]}
        </p>
      )}
      <p className={s.newsletterDisclaimer}>
        No commercial correspondence. Transmission frequency: intermittent.
      </p>
    </form>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function Landing() {
  const scrolled = useScrolled();

  return (
    <div className={s.root}>
      {/* Hex pattern background */}
      <div className={s.hexBg} aria-hidden="true" />

      {/* ── HEADER ── */}
      <header className={[s.header, scrolled ? s.scrolled : ''].join(' ')}>
        <a href="#hero" className={s.headerLogo} aria-label="The Warfox Sequence — return to top">
          WFX / Sequence
        </a>
        <nav aria-label="Landing page navigation">
          <ul className={s.headerNav}>
            <li><a href="#world">World</a></li>
            <li><a href="#themes">Themes</a></li>
            <li><a href="#register">Register</a></li>
            <li>
              <Link to="/" className={s.archiveLink} aria-label="Open the World Archive">
                Archive →
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section id="hero" className={s.hero} aria-labelledby="hero-title">
        <div className={s.container}>
          <FadeSection>
            <p className={s.heroEyebrow} aria-label="Series classification">
              Hard Science Fiction · Book Series
            </p>
          </FadeSection>

          <FadeSection delay={1}>
            <h1 id="hero-title" className={s.heroTitle}>
              The Warfox
              <span className={s.heroTitleBold}>Sequence.</span>
            </h1>
          </FadeSection>

          <FadeSection delay={2}>
            <div className={s.heroDivider} aria-hidden="true" />
          </FadeSection>

          <FadeSection delay={3}>
            <p className={s.heroTagline}>
              In 2148, the human body is licensed infrastructure.
              Your biology is not yours. Your mind belongs to the platform.
              The most dangerous thing you can own is yourself.
            </p>
          </FadeSection>

          <FadeSection delay={4}>
            <div className={s.heroMeta} role="list" aria-label="Series details">
              <div className={s.heroMetaItem} role="listitem">
                <span className={s.heroMetaLabel}>Year</span>
                <span className={s.heroMetaValue}>2148</span>
              </div>
              <div className={s.heroMetaItem} role="listitem">
                <span className={s.heroMetaLabel}>Setting</span>
                <span className={s.heroMetaValue}>Earth &amp; Near-Space</span>
              </div>
              <div className={s.heroMetaItem} role="listitem">
                <span className={s.heroMetaLabel}>Genre</span>
                <span className={s.heroMetaValue}>Hard Biopunk</span>
              </div>
              <div className={s.heroMetaItem} role="listitem">
                <span className={s.heroMetaLabel}>Status</span>
                <span className={s.heroMetaValue}>In Development</span>
              </div>
            </div>
          </FadeSection>

          <p className={s.heroClassification} aria-hidden="true">
            Classification: Active Archive · WFX/SEQ/2148
          </p>
        </div>
      </section>

      <hr className={s.divider} />

      {/* ── WORLD ── */}
      <section id="world" className={`${s.section} ${s.worldSection}`} aria-labelledby="world-title">
        <div className={s.container}>
          <FadeSection>
            <p className={s.sectionEyebrow}>Universe / Setting</p>
            <h2 id="world-title" className={s.sectionTitle}>
              The Architecture<br />of Control
            </h2>
          </FadeSection>

          <div className={s.worldGrid} role="list">
            <FadeSection as="div" className={s.worldPanel} delay={1} role="listitem">
              <p className={s.worldPanelLabel}>The Discovery</p>
              <p className={s.worldPanelHeading}>What Changed Everything</p>
              <p className={s.worldPanelBody}>
                In 2041, a non-terrestrial xenobiotic substrate — dormant beneath the Sahara for
                a hundred and fifty thousand years — was found to interface with human neural tissue
                without triggering rejection. The technology built above it was called HXL Mesh.
                The company that controlled it called itself ParkerGen Industries. The world it
                created was not the world its inventors intended.
              </p>
            </FadeSection>

            <FadeSection as="div" className={s.worldPanel} delay={2} role="listitem">
              <p className={s.worldPanelLabel}>The Mechanism</p>
              <p className={s.worldPanelHeading}>Enhancement as Infrastructure</p>
              <p className={s.worldPanelBody}>
                HXL Mesh grows from the patient's own cells. It is living tissue, woven into the
                body's vascular and neural architecture. The dependency is structural, not chemical.
                Miss a calibration cycle and capability degrades. The body ParkerGen builds for you
                is licensed. The platform dependency was not incidental. It was engineered into the
                original architecture as a permanent feature, not an oversight.
              </p>
            </FadeSection>
          </div>

          <FadeSection delay={3}>
            <blockquote className={s.worldStatement}>
              <p className={s.worldStatementText}>
                The Warfox Sequence is not a story about technology. It is a story about who owns
                the future of the human body — what they do with that ownership, and what it costs
                the people who cannot afford to opt out. It asks what liberation means when the
                thing you need to be free is built into your biology and belongs to someone else.
              </p>
            </blockquote>
          </FadeSection>
        </div>
      </section>

      <hr className={s.divider} />

      {/* ── THEMES ── */}
      <section id="themes" className={s.section} aria-labelledby="themes-title">
        <div className={s.container}>
          <FadeSection>
            <p className={s.sectionEyebrow}>Thematic Architecture</p>
            <h2 id="themes-title" className={s.sectionTitle}>
              What the Series<br />Is About
            </h2>
          </FadeSection>

          <div className={s.themeGrid} role="list" aria-label="Core themes">
            {THEMES.map((theme, i) => (
              <ThemeCard key={theme.index} theme={theme} delay={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <hr className={s.divider} />

      {/* ── NEWSLETTER ── */}
      <section id="register" className={`${s.section} ${s.newsletterSection}`} aria-labelledby="register-title">
        <div className={s.container}>
          <FadeSection>
            <p className={s.sectionEyebrow}>Intelligence Register</p>
            <h2 id="register-title" className={s.sectionTitle}>
              Request Transmission<br />Access
            </h2>
            <p className={s.newsletterSub}>
              Register to receive series updates, release intelligence, and archive dispatches.
              No commercial correspondence. Frequency: intermittent.
            </p>
          </FadeSection>

          <FadeSection delay={2}>
            <NewsletterForm />
          </FadeSection>

          <FadeSection delay={3}>
            <div className={s.newsletterStats} role="list" aria-label="Archive statistics">
              <div className={s.newsletterStat} role="listitem">
                <span className={s.newsletterStatLabel}>Archive Version</span>
                <span className={s.newsletterStatValue}>3.2.0</span>
              </div>
              <div className={s.newsletterStat} role="listitem">
                <span className={s.newsletterStatLabel}>Operational Period</span>
                <span className={s.newsletterStatValue}>2070–2230 CE</span>
              </div>
              <div className={s.newsletterStat} role="listitem">
                <span className={s.newsletterStatLabel}>Classification</span>
                <span className={s.newsletterStatValue}>Active Archive</span>
              </div>
              <div className={s.newsletterStat} role="listitem">
                <span className={s.newsletterStatLabel}>Status</span>
                <span className={s.newsletterStatValue}>Record Active</span>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={s.footer} role="contentinfo">
        <div className={s.container}>
          <div className={s.footerInner}>
            <div>
              <p className={s.footerLogo}>The Warfox Sequence</p>
              <p className={s.footerMeta}>
                Hard Science Fiction · Book Series<br />
                Operational Period: 2070–2230 CE<br />
                Classification Protocols: Active
              </p>
            </div>

            <nav aria-label="Footer navigation">
              <ul className={s.footerLinks}>
                <li>
                  <Link to="/" aria-label="World Archive — full lore database">
                    World Archive
                  </Link>
                </li>
                <li>
                  <Link to="/tech">Technology</Link>
                </li>
                <li>
                  <Link to="/people">Characters</Link>
                </li>
                <li>
                  <Link to="/timeline">Timeline</Link>
                </li>
                <li>
                  <a href="#register">Register</a>
                </li>
              </ul>
            </nav>
          </div>

          <p className={s.footerDisclaimer}>
            Some information in this archive has been withheld, redacted, or structured to protect
            active operational security. The archive does not represent a complete record.
            It never does.
          </p>
        </div>
      </footer>
    </div>
  );
}
