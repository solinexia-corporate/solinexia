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

export const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: '15 000',
    unit: 'FCFA',
    per: '/ 5 visuels',
    desc: 'Idéal pour tester la qualité Solinexia.',
    features: [
      '5 visuels studio premium',
      'Détourage automatique',
      'Fond neutre ou coloré',
      'Format JPG/PNG HD',
      'Livraison 2 heures',
    ],
    cta: 'Commencer',
    popular: false,
  },
  {
    name: 'Pro',
    price: '45 000',
    unit: 'FCFA',
    per: '/ 20 visuels',
    desc: 'Le pack préféré de nos e-commerçants.',
    features: [
      '20 visuels studio premium',
      'Décors premium personnalisés',
      'Correction colorimétrique',
      'Formats multi-réseaux',
      'Livraison prioritaire',
      'Révisions incluses',
    ],
    cta: 'Choisir Pro',
    popular: true,
  },
  {
    name: 'Business',
    price: 'Sur devis',
    unit: '',
    per: 'Volume illimité',
    desc: 'Pour les marques à fort volume mensuel.',
    features: [
      'Visuels illimités',
      'Direction artistique dédiée',
      'Charte graphique complète',
      'Tous formats (web + print)',
      'Manager dédié',
      'SLA garanti',
    ],
    cta: 'Nous contacter',
    popular: false,
  },
];
