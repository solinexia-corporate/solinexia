export interface Testimonial {
  name: string;
  business: string;
  rating: number;
  text: string;
  initials: string;
  bg: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Aminata Diallo',
    business: 'Cosmétiques Amina',
    rating: 5,
    text: "Mes ventes Instagram ont explosé après les visuels Solinexia. Résultat bluffant en moins de 2 heures.",
    initials: 'AD',
    bg: '#7c3aed',
  },
  {
    name: 'Moussa Ndiaye',
    business: 'Restaurant Le Teranga',
    rating: 5,
    text: "En 2 heures, mes plats avaient des photos dignes d'un magazine gastronomique. +40% de commandes en ligne.",
    initials: 'MN',
    bg: '#0891b2',
  },
  {
    name: 'Fatou Sow',
    business: 'Mode Fatou Collection',
    rating: 5,
    text: "Je n'avais pas le budget pour un photographe pro. Solinexia m'a donné la même qualité à une fraction du prix.",
    initials: 'FS',
    bg: '#d97706',
  },
  {
    name: 'Ibrahima Fall',
    business: 'Tech Solutions Dakar',
    rating: 5,
    text: "Expertise technique + créativité. Ils comprennent le marché africain — chaque visuel le prouve.",
    initials: 'IF',
    bg: '#059669',
  },
  {
    name: 'Aïssatou Ba',
    business: 'Bijoux Africains AB',
    rating: 5,
    text: "Mes bijoux artisanaux méritaient mieux que des photos amateur. Solinexia les a sublimés.",
    initials: 'AB',
    bg: '#db2777',
  },
];
