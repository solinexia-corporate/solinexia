import { Globe, LayoutDashboard, LayoutTemplate, Wand2, type LucideIcon } from 'lucide-react';
import { Images } from '../../../assets/images';

export interface PortfolioItem {
  id: string;
  client: string;
  category: string;
  desc: string;
  details: string;
  time: string;
  rating: number;
  before: string;
  after: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    client: 'Marketing Produit',
    category: 'Photographie',
    desc: 'Mise en valeur des détails',
    details: 'Nettoyage des imperfections, ajustement de la colorimétrie pour faire ressortir le produit, ajout de reflets subtils.',
    time: '2 heures',
    rating: 5,
    before: Images.portfolio[0].before,
    after: Images.portfolio[0].after,
  },
  {
    id: '2',
    client: 'Cosmétique Premium',
    category: 'Direction Artistique',
    desc: 'Retouche avancée',
    details: 'Lissage de la peau tout en conservant la texture naturelle, dodge & burn pour sculpter la lumière.',
    time: '3.5 heures',
    rating: 5,
    before: Images.portfolio[1].before,
    after: Images.portfolio[1].after,
  },
  {
    id: '3',
    client: 'E-commerce',
    category: 'Retouche',
    desc: 'Correction colorimétrique',
    details: 'Détourage parfait à la plume, harmonisation des couleurs selon la charte graphique de la marque.',
    time: '1.5 heures',
    rating: 5,
    before: Images.portfolio[2].before,
    after: Images.portfolio[2].after,
  },
  {
    id: '4',
    client: 'Mode Vêtements',
    category: 'Éditorial',
    desc: 'Traitement lumière et texture',
    details: 'Repassage numérique des plis indésirables, augmentation du contraste local pour la texture du tissu.',
    time: '2.5 heures',
    rating: 5,
    before: Images.portfolio[0].before,
    after: Images.portfolio[0].after,
  },
  {
    id: '5',
    client: 'Architecture',
    category: 'Immobilier',
    desc: 'Redressement et colorimétrie',
    details: 'Redressement des perspectives (lignes de fuite), remplacement du ciel, ajout de chaleur globale.',
    time: '4 heures',
    rating: 5,
    before: Images.portfolio[1].before,
    after: Images.portfolio[1].after,
  },
  {
    id: '6',
    client: 'Bijouterie',
    category: 'Macro',
    desc: 'Éclat et pureté',
    details: 'Nettoyage des micro-poussières, accentuation de la brillance des diamants et création de reflets métalliques.',
    time: '5 heures',
    rating: 5,
    before: Images.portfolio[2].before,
    after: Images.portfolio[2].after,
  },
  {
    id: '7',
    client: 'Boisson Énergisante',
    category: 'Packshot',
    desc: 'Création d\'ambiance',
    details: 'Ajout de gouttelettes de condensation réalistes, effet de fraîcheur atmosphérique, étalonnage vibrant.',
    time: '3 heures',
    rating: 5,
    before: Images.portfolio[0].before,
    after: Images.portfolio[0].after,
  },
  {
    id: '8',
    client: 'Portrait Corporate',
    category: 'Corporate',
    desc: 'Lissage naturel',
    details: 'Suppression des cernes, harmonisation du teint, éclaircissement du regard (catchlights).',
    time: '1 heure',
    rating: 4,
    before: Images.portfolio[1].before,
    after: Images.portfolio[1].after,
  },
  {
    id: '9',
    client: 'Voiture de Luxe',
    category: 'Automobile',
    desc: 'Peinture éclatante',
    details: 'Création d\'une courbe de contraste dynamique, nettoyage des reflets du studio sur la carrosserie.',
    time: '6 heures',
    rating: 5,
    before: Images.portfolio[2].before,
    after: Images.portfolio[2].after,
  },
  {
    id: '10',
    client: 'Parfum',
    category: 'Beauté',
    desc: 'Atmosphère de luxe',
    details: 'Composition d\'arrière-plan, gestion de la transparence du verre, particules de lumière.',
    time: '4.5 heures',
    rating: 5,
    before: Images.portfolio[0].before,
    after: Images.portfolio[0].after,
  },
  {
    id: '11',
    client: 'Gastronomie',
    category: 'Culinaire',
    desc: 'Couleurs appétissantes',
    details: 'Rééquilibrage des blancs, accentuation des textures (brillance de la sauce, vapeur chaude ajoutée).',
    time: '2 heures',
    rating: 5,
    before: Images.portfolio[1].before,
    after: Images.portfolio[1].after,
  },
  {
    id: '12',
    client: 'Application Mobile',
    category: 'Design UI',
    desc: 'Mockups réalistes',
    details: 'Intégration parfaite des écrans UI dans des mains avec gestion des ombres et lumières de l\'écran.',
    time: '2.5 heures',
    rating: 5,
    before: Images.portfolio[2].before,
    after: Images.portfolio[2].after,
  },
  {
    id: '13',
    client: 'Immobilier de luxe',
    category: 'Intérieur',
    desc: 'Lumière naturelle',
    details: 'Fusion HDR ("Flambient"), récupération des détails extérieurs par la fenêtre, suppression des câbles.',
    time: '3 heures',
    rating: 5,
    before: Images.portfolio[0].before,
    after: Images.portfolio[0].after,
  },
  {
    id: '14',
    client: 'Mode Été',
    category: 'Lookbook',
    desc: 'Vibes estivales',
    details: 'Color grading chaud type "Golden Hour", allongement des jambes, nettoyage de l\'arrière-plan.',
    time: '1.5 heures',
    rating: 4,
    before: Images.portfolio[1].before,
    after: Images.portfolio[1].after,
  },
  {
    id: '15',
    client: 'High-Tech',
    category: 'Produit',
    desc: 'Rendu 3D photo-réaliste',
    details: 'Correction des reflets complexes sur écran noir, mise en valeur des matériaux (aluminium brossé).',
    time: '4 heures',
    rating: 5,
    before: Images.portfolio[2].before,
    after: Images.portfolio[2].after,
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  image: string;
  link: string;
}

export interface PortfolioTab {
  id: string;
  label: string;
  icon: LucideIcon;
  tagline: string;
}

export const PORTFOLIO_TABS: PortfolioTab[] = [
  {
    id: "visuels",
    label: "Visuels",
    icon: Wand2,
    tagline: "La magie de la retouche et de la direction artistique.",
  },
  {
    id: "templates",
    label: "Templates",
    icon: LayoutTemplate,
    tagline: "Des modèles prêts à l'emploi pour démarrer rapidement.",
  },
  {
    id: "dashboards",
    label: "Dashboards",
    icon: LayoutDashboard,
    tagline: "Des tableaux de bord interactifs et performants.",
  },
  {
    id: "sites",
    label: "Sites Vitrines",
    icon: Globe,
    tagline: "Des vitrines digitales élégantes pour votre marque.",
  },
];

export const TEMPLATES_ITEMS: ProjectItem[] = [
  {
    id: "t1",
    title: "E-commerce Minimalist",
    category: "Mode & Beauté",
    desc: "Un template épuré optimisé pour les conversions.",
    image: Images.vitrines[0],
    link: "/",
  },
  {
    id: "t2",
    title: "SaaS Landing Page",
    category: "Technologie",
    desc: "Page d'atterrissage complète avec tarification.",
    image: Images.vitrines[1],
    link: "/",
  },
  {
    id: "t3",
    title: "Portfolio Créatif",
    category: "Agence",
    desc: "Mettez en valeur vos réalisations avec style.",
    image: Images.vitrines[2],
    link: "/",
  },
  {
    id: "t4",
    title: "Restaurant & Delivery",
    category: "Gastronomie",
    desc: "Template avec système de commande intégré.",
    image: Images.vitrines[3],
    link: "/",
  },
];

export const DASHBOARDS_ITEMS: ProjectItem[] = [
  {
    id: "d1",
    title: "Analytics Pro",
    category: "SaaS",
    desc: "Tableau de bord de suivi des performances marketing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    link: "/",
  },
  {
    id: "d2",
    title: "Admin E-commerce",
    category: "Gestion",
    desc: "Interface de gestion de commandes et de stocks.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    link: "/",
  },
  {
    id: "d3",
    title: "CRM Immobilier",
    category: "Immobilier",
    desc: "Suivi des prospects et gestion des biens.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
    link: "/",
  },
  {
    id: "d4",
    title: "Finance & Crypto",
    category: "Fintech",
    desc: "Tableau de bord de suivi de portefeuilles financiers.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    link: "/",
  },
];

export const WEBSITES_ITEMS: ProjectItem[] = [
  {
    id: "w1",
    title: "Cabinet d'Avocats",
    category: "Corporate",
    desc: "Site institutionnel inspirant confiance et expertise.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop",
    link: "/",
  },
  {
    id: "w2",
    title: "Clinique Dentaire",
    category: "Santé",
    desc: "Site vitrine avec prise de rendez-vous intégrée.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
    link: "/",
  },
  {
    id: "w3",
    title: "Studio de Yoga",
    category: "Bien-être",
    desc: "Design relaxant et planning des cours interactif.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop",
    link: "/",
  },
  {
    id: "w4",
    title: "Agence de Voyage",
    category: "Tourisme",
    desc: "Présentation de destinations et formulaires de devis.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=800&auto=format&fit=crop",
    link: "/",
  },
];
