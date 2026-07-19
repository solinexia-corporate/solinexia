import { Wand2, Globe, Camera, Smartphone, Settings, type LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  tag: string;
  title: string;
  desc: string;
  features: string[];
  accent: 'violet' | 'sky' | 'amber' | 'emerald' | 'rose';
  available: boolean;
  id: string;
  portfolioTab: string;
}

export const SERVICES: Service[] = [
  {
    icon: Wand2,
    tag: '⭐ Service Phare',
    title: 'Marketing Visuel Premium',
    desc: "Transformez vos photos produits en visuels cinématiques de qualité studio. Idéal pour l'e-commerce, les réseaux sociaux, les catalogues et les publicités.",
    features: [
      'Détourage automatique précis',
      'Intégration de décors premium',
      'Harmonisation lumière & couleurs',
      'Upscaling Ultra-HD 4K',
      'Formats multi-réseaux (Instagram, TikTok, e-commerce)',
      'Livraison en moins de 2 heures',
    ],
    accent: 'violet',
    available: true,
    id: 'marketing-visuel',
    portfolioTab: 'visuels',
  },
  {
    icon: Globe,
    tag: 'Disponible',
    title: 'Développement Web',
    desc: "Sites vitrines modernes, applications web sur-mesure et solutions e-commerce complètes. Technologies récentes pour des expériences digitales performantes.",
    features: [
      'Site vitrine responsive',
      'E-commerce (Shopify, WooCommerce)',
      'Application web React / Next.js',
      'Optimisation SEO & performance',
      'CMS intégré pour gestion autonome',
      'Maintenance & support inclus',
    ],
    accent: 'sky',
    available: true,
    id: 'developpement-web',
    portfolioTab: 'sites',
  },
  {
    icon: Camera,
    tag: 'Disponible',
    title: 'Direction Artistique Produit',
    desc: "Séances de shooting produit avec direction artistique complète. Nous vous guidons sur la mise en scène, l'éclairage et le style pour maximiser l'impact visuel.",
    features: [
      'Conseil scénographie',
      'Shooting en studio ou sur site',
      'Post-production & retouche',
      'Charte graphique visuelle',
      'Formats adaptés à chaque canal',
      'Livraison haute résolution',
    ],
    accent: 'amber',
    available: true,
    id: 'direction-artistique',
    portfolioTab: 'visuels',
  },
  {
    icon: Smartphone,
    tag: 'Disponible',
    title: 'Applications Mobiles',
    desc: "Conception et développement d'applications iOS et Android natives ou cross-platform. Des apps fluides et performantes à l'image de votre marque.",
    features: [
      'iOS & Android natif',
      'React Native cross-platform',
      'Design UI/UX sur-mesure',
      'Intégrations API tierces',
      'Publication sur les stores',
      'Support & mises à jour',
    ],
    accent: 'emerald',
    available: true,
    id: 'applications-mobiles',
    portfolioTab: 'dashboards',
  },
  {
    icon: Settings,
    tag: 'Disponible',
    title: 'Solutions Sur-mesure & API',
    desc: "Automatisation de processus, intégrations API complexes et outils digitaux personnalisés pour optimiser votre activité.",
    features: [
      'Automatisation workflows',
      'Intégrations API (WhatsApp, CRM, ERP)',
      'Tableaux de bord analytics',
      'Scripts & bots personnalisés',
      'Architecture cloud',
      'Formation équipe incluse',
    ],
    accent: 'rose',
    available: true,
    id: 'solutions-sur-mesure',
    portfolioTab: 'dashboards',
  },
];

export const ACCENT_COLORS: Record<Service['accent'], { bg: string; border: string; text: string }> = {
  violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-500 dark:text-violet-400' },
  sky: { bg: 'bg-sky-500/10', border: 'border-sky-500/20', text: 'text-sky-500 dark:text-sky-400' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-500 dark:text-amber-400' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-500 dark:text-emerald-400' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-500 dark:text-rose-400' },
};
