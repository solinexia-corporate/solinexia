import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Award, Lightbulb, MapPin, ArrowUpRight } from 'lucide-react';
import { Badge } from '../../../shared/components/ui/Badge';
import { fadeSlideLeft, fadeSlideRight } from '../../../shared/lib/motion';
import { SOCIAL_LINKS } from '../../../shared/constants/social';
import { COMPANY } from '../../../shared/constants/company';
import { Images } from '../../../assets/images';

const PILLARS = [
  { icon: Zap, label: 'Rapidité', value: '< 2h', color: 'text-violet-500 dark:text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20' },
  { icon: Award, label: 'Qualité', value: '4K Ultra', color: 'text-sky-500 dark:text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20' },
  { icon: Lightbulb, label: 'Innovation', value: 'Expert', color: 'text-amber-500 dark:text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#080d14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            variants={fadeSlideLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/50 dark:border-slate-800/50">
              <img
                src={Images.heroProduct}
                alt="Équipe Solinexia Dakar"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between flex-wrap gap-2">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-white text-sm font-medium">{COMPANY.location}</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3">
                  <span className="text-white text-sm">🌍 Pour les marques africaines</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeSlideRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2"
          >
            <Badge variant="primary" className="mb-4">— À propos</Badge>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white leading-tight mb-5">
              L'expertise tech au service<br />de votre <span className="text-gradient">visibilité.</span>
            </h2>
            <div className="space-y-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
              <p>
                Solinexia est née d'une conviction : chaque marque africaine mérite des visuels de classe mondiale et des solutions digitales de pointe. Notre expertise démocratise l'accès aux outils de production de qualité studio.
              </p>
              <p>
                Basés à Dakar, nous comprenons les codes visuels du marché local tout en maîtrisant les standards globaux — une combinaison unique qui fait notre force.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-3 gap-3 mb-10">
              {PILLARS.map((p) => (
                <div key={p.label} className={`rounded-2xl border ${p.bg} p-4 text-center`}>
                  <p.icon className={`w-5 h-5 ${p.color} mx-auto mb-2`} />
                  <p className="text-slate-900 dark:text-white font-bold text-sm">{p.value}</p>
                  <p className="text-slate-500 text-xs">{p.label}</p>
                </div>
              ))}
            </div>

            {/* Social links – reusing SOCIAL_LINKS */}
            <div className="flex flex-wrap gap-2 mb-8">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:border-primary/30 transition-all"
                >
                  <s.icon className="w-4 h-4" />
                  {s.label}
                </a>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
            >
              Travailler avec nous
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
