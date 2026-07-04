import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { COMPANY } from "../../../shared/constants/company";
import { SOCIAL_LINKS } from "../../../shared/constants/social";
import { cn } from "../../../shared/lib/cn";
import { fadeSlideUp } from "../../../shared/lib/motion";

function AvailabilityBadge() {
  const hour = new Date().getUTCHours();
  const isAvailable = hour >= 8 && hour < 20;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl text-sm font-medium border",
        isAvailable
          ? "bg-success/10 text-success border-success/20"
          : "bg-warning/10 text-warning border-warning/20",
      )}
    >
      <span
        className={cn(
          "w-2 h-2 rounded-full",
          isAvailable ? "bg-success animate-pulse" : "bg-warning",
        )}
      />
      {isAvailable ? "Disponible maintenant" : "Répond sous 2h"}
    </div>
  );
}

const INFO = [
  {
    icon: Mail,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: COMPANY.phone,
    href: `https://wa.me/${COMPANY.whatsapp}`,
  },
  { icon: MapPin, label: "Localisation", value: COMPANY.location },
  { icon: Clock, label: "Horaires", value: COMPANY.hours },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading font-black text-3xl lg:text-4xl text-slate-900 dark:text-white mb-4 leading-tight">
          Parlons de votre projet.
        </h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Que vous ayez besoin de visuels produits ou d'une solution digitale
          complète, notre équipe est là pour transformer votre vision.
        </p>
      </div>

      <AvailabilityBadge />

      <div className="space-y-3">
        {INFO.map((item, i) => (
          <motion.div
            key={item.label}
            variants={fadeSlideUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 + i * 0.08 }}
            className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/20 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <item.icon className="w-4.5 h-4.5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 dark:text-white font-medium hover:text-primary transition-colors text-sm flex items-center gap-1 group-hover:gap-1.5"
                >
                  {item.value}{" "}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              ) : (
                <p className="text-slate-900 dark:text-white font-medium text-sm">
                  {item.value}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <a
        href={`https://wa.me/${COMPANY.whatsapp}?text=Bonjour%20Solinexia%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-0.5 dark:bg-[#25D366] dark:hover:bg-[#1da851]"
      >
        <MessageCircle className="w-5 h-5" />
        Discuter sur WhatsApp
      </a>

      <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
        <span className="text-xs text-slate-500 dark:text-slate-400 w-full mb-3 font-mono block">
          SUIVEZ-NOUS
        </span>
        <div className="flex flex-wrap gap-3">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 w-16 p-2 bg-slate-100 dark:bg-slate-800/50 rounded-xl text-xs text-slate-600 dark:text-slate-400 hover:text-[#25D366] dark:hover:text-[#25D366] hover:border-[#25D366]/40 transition-all border border-slate-200 dark:border-slate-800 cursor-pointer"
            >
              <s.icon className="w-5 h-5" />
              <span className="text-[10px]">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
