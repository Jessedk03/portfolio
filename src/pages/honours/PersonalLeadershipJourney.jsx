import { useEffect, useRef } from 'react';
import './PersonalLeadershipJourney.css';
import { hero, nodes, outro, habitNames } from './journeyData';

/* Kleine inline-SVG iconen (currentColor), per component-type. */
const icons = {
  power: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v9" />
      <path d="M7.5 6.5a7 7 0 1 0 9 0" />
    </svg>
  ),
  chip: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 7V4M14 7V4M10 20v-3M14 20v-3M7 10H4M7 14H4M20 10h-3M20 14h-3" />
    </svg>
  ),
  iron: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20l4-4" />
      <path d="M7 13l4 4" />
      <path d="M11 17l8-8a2 2 0 0 0-3-3l-8 8" />
      <path d="M16 6l2 2" />
    </svg>
  ),
  mug: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 8h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z" />
      <path d="M16 9h2a2 2 0 0 1 0 4h-2" />
      <path d="M8 3c0 1-1 1-1 2M11 3c0 1-1 1-1 2" />
    </svg>
  ),
  terminal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9l3 3-3 3M13 15h4" />
    </svg>
  ),
  ear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9a6 6 0 1 1 12 0c0 2.5-2 3.5-3 4.5s-1.5 2-1.5 3.5a2.5 2.5 0 0 1-5 0" />
      <path d="M9.5 9a2.5 2.5 0 0 1 4 2" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </svg>
  ),
  core: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="10" y="10" width="4" height="4" rx="1" />
      <path d="M9 6V3M15 6V3M9 21v-3M15 21v-3M6 9H3M6 15H3M21 9h-3M21 15h-3" />
    </svg>
  ),
};

export default function PersonalLeadershipJourney() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll('.plj-node'));

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      items.forEach((el) => el.classList.add('is-lit'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-lit');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="plj-root" ref={rootRef}>
      <header className="plj-hero">
        <span className="plj-status">
          <span><span className="plj-led" />{hero.status}</span>
          <span><b>{hero.eyebrow}</b></span>
        </span>
        <h1 className="plj-title">
          {hero.titlePre}
          <span className="plj-spark">{hero.titleSpark}</span>
          {hero.titlePost}
        </h1>
        <p className="plj-subtitle">{hero.subtitle}</p>
        <p className="plj-byline">{hero.byline}</p>
        <p className="plj-intro">{hero.intro}</p>
        <hr className="plj-hero-rule" />
      </header>

      <ol className="plj-timeline">
        {nodes.map((node, i) => (
          <li className="plj-node" key={node.refdes + i}>
            <span className="plj-pad" aria-hidden="true" />
            <article className="plj-card">
              <div className="plj-card-head">
                <span className="plj-icon">{icons[node.icon]}</span>
                <span className="plj-refdes">{node.refdes}</span>
                <span className="plj-tag">{node.tag}</span>
              </div>
              <h2 className="plj-card-title">{node.title}</h2>
              <p className="plj-card-body">{node.body}</p>
              {node.note && <p className="plj-card-note">{node.note}</p>}
              {node.habits && node.habits.length > 0 && (
                <ul className="plj-pins">
                  {node.habits.map((h) => (
                    <li className="plj-pin" key={h}>
                      <b>{h}</b> {habitNames[h]}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </li>
        ))}
      </ol>

      <footer className="plj-outro">
        <span className="plj-boot">
          <span className="plj-ok">[ OK ]</span>
          {outro.boot.replace('[ OK ]', '')}
        </span>
        <h2 className="plj-outro-title">
          {outro.titlePre}
          <span className="plj-spark">{outro.titleSpark}</span>
          {outro.titlePost}
        </h2>
        <p className="plj-thanks">{outro.thanks}</p>
        <p className="plj-sign">{outro.sign}</p>
      </footer>
    </section>
  );
}
