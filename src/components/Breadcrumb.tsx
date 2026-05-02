import { Link, useLocation } from 'react-router-dom';

interface Crumb {
  label: string;
  to: string;
}

const ROUTE_LABELS: Record<string, string> = {
  '/': 'Archive Home',
  '/world': 'World',
  '/tech': 'Tech Reference',
  '/timeline': 'Timeline',
  '/people': 'Characters & Factions',
  '/stories': 'Field Records & Stories',
  '/glossary': 'Glossary',
};

export default function Breadcrumb() {
  const { pathname } = useLocation();

  if (pathname === '/') return null;

  const crumbs: Crumb[] = [
    { label: 'Archive Home', to: '/' },
    { label: ROUTE_LABELS[pathname] ?? pathname, to: pathname },
  ];

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol>
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.to}>
              {isLast ? (
                <span aria-current="page">{crumb.label}</span>
              ) : (
                <Link to={crumb.to}>{crumb.label}</Link>
              )}
              {!isLast && <span aria-hidden="true" className="breadcrumb-sep">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
