import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

export default function Nav() {
  useEffect(() => {
    const nav = document.querySelector('nav') as HTMLElement;
    const handler = () => {
      nav.style.boxShadow = window.scrollY > 40 ? '0 4px 40px rgba(0,0,0,0.6)' : 'none';
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav>
      <NavLink to="/" className="nav-logo">WFX / ARCHIVE v3.2.0</NavLink>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/world">World</NavLink></li>
        <li><NavLink to="/tech">Tech</NavLink></li>
        <li><NavLink to="/timeline">Timeline</NavLink></li>
        <li><NavLink to="/people">Characters &amp; Factions</NavLink></li>
        <li><NavLink to="/stories">Lore &amp; Stories</NavLink></li>
        <li><NavLink to="/glossary">Glossary</NavLink></li>
      </ul>
    </nav>
  );
}
