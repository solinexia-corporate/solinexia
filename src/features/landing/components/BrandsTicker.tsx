import { motion } from "framer-motion";
import {
  Camera,
  Clock,
  Globe,
  Lock,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Zap,
  type LucideIcon,
} from "lucide-react";

interface TickerItem {
  label: string;
  icon: LucideIcon;
}

const ITEMS: TickerItem[] = [
  { label: "Livraison 2 heures", icon: Zap },
  { label: "Précision pixel-perfect", icon: Target },
  { label: "Qualité Studio", icon: Sparkles },
  { label: "Formats réseaux inclus", icon: Smartphone },
  { label: "Développement Sur-mesure", icon: Lock },
  { label: "Solutions Locales", icon: Globe },
  { label: "Fiabilité & Sécurité", icon: ShieldCheck },
  { label: "Applications Web & Mobiles", icon: Rocket },
  { label: "Délais garantis", icon: Clock },
  { label: "Direction Artistique", icon: Camera },
];

const ALL_ITEMS = [...ITEMS, ...ITEMS, ...ITEMS];

export function BrandsTicker() {
  return (
    <div className="relative py-6 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 overflow-hidden flex items-center">
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-slate-50 dark:from-[#080d14] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-slate-50 dark:from-[#080d14] to-transparent pointer-events-none" />

      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 35,
        }}
        className="flex items-center whitespace-nowrap"
      >
        {ALL_ITEMS.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 mx-6 text-sm font-medium text-slate-500 dark:text-slate-400 shrink-0"
          >
            <item.icon className="w-4 h-4 text-primary" />
            {item.label}
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 ml-2" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
