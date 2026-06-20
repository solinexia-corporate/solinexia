import { motion } from 'framer-motion';

const ITEMS = [
  '⚡ Livraison 2 heures',
  '🎯 Précision pixel-perfect',
  '✨ Qualité Studio',
  '📱 Formats réseaux inclus',
  '🔒 Développement Sur-mesure',
  '🌍 Solutions Locales',
  '💎 Fiabilité & Sécurité',
  '🚀 Applications Web & Mobiles',
  '⏱ Délais garantis',
  '📸 Direction Artistique',
];

const ALL_ITEMS = [...ITEMS, ...ITEMS, ...ITEMS]; // Tripled for infinite seamless loop

export function BrandsTicker() {
  return (
    <div className="relative py-6 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 overflow-hidden flex items-center">
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-slate-50 dark:from-[#080d14] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-slate-50 dark:from-[#080d14] to-transparent pointer-events-none" />

      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 35,
        }}
        className="flex items-center whitespace-nowrap"
      >
        {ALL_ITEMS.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 mx-6 text-sm font-medium text-slate-500 dark:text-slate-400 shrink-0"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
