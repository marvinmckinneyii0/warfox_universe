import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import World from './pages/World';
import Tech from './pages/Tech';
import Timeline from './pages/Timeline';
import People from './pages/People';
import Stories from './pages/Stories';
import Glossary from './pages/Glossary';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimateOnScroll() {
  const { pathname } = useLocation();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = (Number(el.dataset.delay) || 0) * 80;
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, delay);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.08 });

    const targets = document.querySelectorAll<HTMLElement>(
      '.character-card, .lore-block, .faction-card, .region-card, .story-slot, .story-empty, .timeline-entry, .hxl-block, .hxl-phase, .glossary-entry'
    );
    targets.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(14px)';
      el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
      el.dataset.delay = String(i % 8);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <AnimateOnScroll />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/world" element={<World />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/people" element={<People />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/glossary" element={<Glossary />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
