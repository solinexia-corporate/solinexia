import {
  Globe,
  LayoutDashboard,
  ShoppingCart,
  Wand2,
  type LucideIcon,
} from "lucide-react";

export interface Plan {
  name: string;
  price: string;
  unit: string;
  per: string;
  desc: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export interface PricingTier {
  name: string;
  priceRange: string;
  unit: string;
  timeline: string;
  description: string;
  features: string[];
  popular: boolean;
}

export interface PricingTab {
  id: string;
  label: string;
  icon: LucideIcon;
  tagline: string;
  tiers: PricingTier[];
  note: string;
}

export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "15 000",
    unit: "FCFA",
    per: "/ 5 visuels",
    desc: "Idéal pour tester la qualité Solinexia.",
    features: [
      "5 visuels studio premium",
      "Détourage automatique",
      "Fond neutre ou coloré",
      "Format JPG/PNG HD",
      "Livraison 2 heures",
    ],
    cta: "Commencer",
    popular: false,
  },
  {
    name: "Pro",
    price: "45 000",
    unit: "FCFA",
    per: "/ 20 visuels",
    desc: "Le pack préféré de nos e-commerçants.",
    features: [
      "20 visuels studio premium",
      "Décors premium personnalisés",
      "Correction colorimétrique",
      "Formats multi-réseaux",
      "Livraison prioritaire",
      "Révisions incluses",
    ],
    cta: "Choisir Pro",
    popular: true,
  },
  {
    name: "Business",
    price: "Sur devis",
    unit: "",
    per: "Volume illimité",
    desc: "Pour les marques à fort volume mensuel.",
    features: [
      "Visuels illimités",
      "Direction artistique dédiée",
      "Charte graphique complète",
      "Tous formats (web + print)",
      "Manager dédié",
      "SLA garanti",
    ],
    cta: "Nous contacter",
    popular: false,
  },
];

export const PRICING_TABS: PricingTab[] = [
  {
    id: "visual-ai",
    label: "Visuels IA",
    icon: Wand2,
    tagline: "Photographie produit par Intelligence Artificielle",
    note: "Livraison express en moins de 2h. Paiement après réception des visuels.",
    tiers: [
      {
        name: "Essentiel",
        priceRange: "15 000 – 35 000",
        unit: "FCFA",
        timeline: "2 heures",
        description:
          "Parfait pour démarrer et tester la qualité de nos rendus.",
        features: [
          "5 à 15 visuels studio",
          "Détourage de précision",
          "Fond neutre ou coloré",
          "Format HD (JPG/PNG)",
        ],
        popular: false,
      },
      {
        name: "Premium",
        priceRange: "45 000 – 120 000",
        unit: "FCFA",
        timeline: "2 à 4 heures",
        description:
          "Le choix privilégié des e-commerçants pour un rendu professionnel.",
        features: [
          "20 à 60 visuels premium",
          "Décors personnalisés (marbre, studio, nature)",
          "Correction colorimétrique avancée",
          "Formats multi-réseaux (IG, TikTok, Web)",
          "Révisions illimitées incluses",
        ],
        popular: true,
      },
      {
        name: "Entreprise",
        priceRange: "Sur devis",
        unit: "",
        timeline: "Selon volume",
        description: "Pour les marques avec des besoins mensuels récurrents.",
        features: [
          "Volume illimité",
          "Direction artistique dédiée",
          "Charte visuelle complète",
          "Tous formats (web + print)",
          "Manager de compte dédié",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "landing-page",
    label: "Landing Page",
    icon: Globe,
    tagline: "Pages d'atterrissage haute conversion",
    note: "Moins d'un mois de développement. Idéal pour campagnes marketing et lancements de produit.",
    tiers: [
      {
        name: "Landing Simple",
        priceRange: "150 000 – 400 000",
        unit: "FCFA",
        timeline: "1 à 2 semaines",
        description:
          "Une page unique, impactante, conçue pour convertir vos visiteurs.",
        features: [
          "Design sur-mesure responsive",
          "1 page optimisée conversion",
          "Animations Framer Motion",
          "Formulaire de contact intégré",
          "SEO de base + meta tags",
          "Déploiement inclus",
        ],
        popular: true,
      },
      {
        name: "Landing Avancée",
        priceRange: "400 000 – 900 000",
        unit: "FCFA",
        timeline: "2 à 3 semaines",
        description:
          "Pour les pages avec sections multiples, A/B testing et intégrations.",
        features: [
          "Design premium sur-mesure",
          "Sections multiples (hero, features, témoignages, FAQ)",
          "Animations avancées & parallax",
          "Intégration analytics & tracking",
          "Optimisation Lighthouse > 90",
          "A/B testing setup",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "site-vitrine",
    label: "Site Vitrine",
    icon: Globe,
    tagline: "Sites institutionnels et portfolios professionnels",
    note: "Livraison en moins d'un mois. Un site vitrine renforce votre crédibilité et votre présence en ligne.",
    tiers: [
      {
        name: "Vitrine Essentiel",
        priceRange: "300 000 – 600 000",
        unit: "FCFA",
        timeline: "2 à 3 semaines",
        description:
          "Présence en ligne professionnelle avec les pages essentielles.",
        features: [
          "3 à 5 pages (Accueil, Services, À propos, Contact)",
          "Design responsive moderne",
          "SEO optimisé",
          "Formulaire de contact",
          "Intégration réseaux sociaux",
          "Formation à la gestion de contenu",
        ],
        popular: true,
      },
      {
        name: "Vitrine Premium",
        priceRange: "600 000 – 1 500 000",
        unit: "FCFA",
        timeline: "3 à 4 semaines",
        description:
          "Site complet avec blog, espace client et fonctionnalités avancées.",
        features: [
          "5 à 10 pages personnalisées",
          "Blog / actualités intégré",
          "Espace client (login/register)",
          "Tableau de bord admin",
          "Multi-langue (FR/EN)",
          "Performance optimisée (Core Web Vitals)",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "e-commerce",
    label: "E-Commerce",
    icon: ShoppingCart,
    tagline: "Boutiques en ligne complètes et scalables",
    note: "Délai variable selon la complexité. De 3 semaines à 3 mois. Devis précis après évaluation du projet.",
    tiers: [
      {
        name: "Boutique Standard",
        priceRange: "500 000 – 1 500 000",
        unit: "FCFA",
        timeline: "3 à 6 semaines",
        description:
          "Boutique en ligne fonctionnelle avec gestion de produits et paiements.",
        features: [
          "Catalogue produits (jusqu'à 100)",
          "Paiement mobile money & carte",
          "Gestion des commandes",
          "Notifications email/WhatsApp",
          "Design responsive",
          "Formation complète incluse",
        ],
        popular: true,
      },
      {
        name: "Boutique Avancée",
        priceRange: "1 500 000 – 3 000 000",
        unit: "FCFA",
        timeline: "6 à 10 semaines",
        description:
          "E-commerce avec stock, logistique, multi-boutique et intégrations API.",
        features: [
          "Catalogue illimité",
          "Gestion stock & logistique",
          "Multi-boutique / multi-devise",
          "Intégrations API (CRM, ERP, livraison)",
          "Tableau de bord analytics",
          "Application mobile companion",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "dashboard",
    label: "Dashboard & SaaS",
    icon: LayoutDashboard,
    tagline: "Tableaux de bord et plateformes SaaS sur-mesure",
    note: "Projet évalué au cas par cas. Délai typique : 1 à 3 mois selon la complexité.",
    tiers: [
      {
        name: "Dashboard Standard",
        priceRange: "800 000 – 2 000 000",
        unit: "FCFA",
        timeline: "4 à 8 semaines",
        description:
          "Tableau de bord avec visualisation de données et gestion utilisateurs.",
        features: [
          "Authentification sécurisée (JWT)",
          "Visualisation de données (charts, KPIs)",
          "Gestion des rôles & permissions",
          "API REST personnalisée",
          "Export de données (PDF, Excel)",
          "Design responsive",
        ],
        popular: true,
      },
      {
        name: "Plateforme SaaS",
        priceRange: "2 000 000 – 5 000 000+",
        unit: "FCFA",
        timeline: "2 à 3 mois",
        description:
          "Plateforme complète multi-tenant avec abonnements et automatisations.",
        features: [
          "Architecture multi-tenant",
          "Système d'abonnements & facturation",
          "Automatisations workflows",
          "Intégrations API tierces",
          "Infrastructure cloud scalable",
          "Support & maintenance 6 mois inclus",
        ],
        popular: false,
      },
    ],
  },
];
