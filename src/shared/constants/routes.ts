export const ROUTES = {
  home: '/',
  services: '/services',
  pricing: '/pricing',
  contact: '/contact',
} as const;

export const NAV_LINKS = [
  { label: 'Accueil', href: ROUTES.home },
  { label: 'Services', href: ROUTES.services },
  { label: 'Tarifs', href: ROUTES.pricing },
  { label: 'Contact', href: ROUTES.contact },
] as const;
