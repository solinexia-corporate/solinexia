import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Badge } from '../../../shared/components/ui/Badge';
import { Button } from '../../../shared/components/ui/Button';
import { SERVICES, ACCENT_COLORS } from '../../landing/data/services.data';
import { fadeSlideUp, staggerContainer } from '../../../shared/lib/motion';
import { cn } from '../../../shared/lib/cn';
import { Images } from '../../../assets/images';

// Map each service index to a specific solinexia image
const SERVICE_IMAGES: string[] = [
  Images.solinexia[5],  // Marketing Visuel Premium → solinexia6
  Images.solinexia[2],  // Développement Web → solinexia3
  Images.solinexia[4],  // Direction Artistique → solinexia5
  Images.solinexia[8],  // Applications Mobiles → solinexia9
  Images.solinexia[9],  // Solutions Sur-mesure → solinexia10
];

export default function ServicesPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="relative pt-28 pb-24">
      {/* Background glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Retour à l'accueil
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-20"
        >
          <Badge variant="primary" className="mb-4">— Services</Badge>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white leading-tight mb-4">
            Tout ce que nous faisons pour <span className="text-gradient">vous.</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
            Des solutions digitales concrètes pour les entreprises africaines qui veulent se démarquer.
          </p>
        </motion.div>

        {/* Services list */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-12 lg:space-y-20"
        >
          {SERVICES.map((service, i) => {
            const colors = ACCENT_COLORS[service.accent];
            const isReversed = i % 2 !== 0;
            const serviceImage = SERVICE_IMAGES[i];

            return (
              <motion.div
                id={service.id}
                key={service.title}
                variants={fadeSlideUp}
                className={cn(
                  'group relative bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden',
                  'hover:border-primary/20 dark:hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500',
                  !service.available && 'opacity-70'
                )}
              >
                <div className={cn(
                  'grid lg:grid-cols-5 gap-0',
                  isReversed && 'direction-rtl'
                )}>
                  {/* Image — takes 2 columns */}
                  <div className={cn(
                    'relative h-64 sm:h-72 lg:h-auto lg:min-h-[420px] overflow-hidden flex items-center justify-center bg-slate-50 dark:bg-slate-900',
                    isReversed ? 'lg:col-start-4 lg:col-span-2 lg:order-2' : 'lg:col-span-2 lg:order-1'
                  )}>
                    <img
                      src={serviceImage}
                      alt={service.title}
                      className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-contain rounded-2xl group-hover:scale-105 transition-transform duration-700 shadow-sm"
                    />
                  </div>

                  {/* Content — takes 3 columns */}
                  <div className={cn(
                    'p-8 lg:p-10 xl:p-12 flex flex-col justify-center',
                    isReversed ? 'lg:col-start-1 lg:col-span-3 lg:order-1' : 'lg:col-span-3 lg:order-2'
                  )}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className={cn('w-11 h-11 rounded-xl border flex items-center justify-center', colors.bg, colors.border)}>
                        <service.icon className={cn('w-5 h-5', colors.text)} />
                      </div>
                      <Badge variant={service.tag.includes('Phare') ? 'warning' : service.available ? 'success' : 'default'} pulse={service.available}>
                        {service.tag}
                      </Badge>
                    </div>

                    <h2 className="font-heading font-bold text-2xl lg:text-3xl text-slate-900 dark:text-white mb-3">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm lg:text-base mb-8 max-w-lg">
                      {service.desc}
                    </p>

                    {service.available && (
                      <div className="mb-8">
                        <Button asChild variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                          <Link to="/contact">Demander un devis</Link>
                        </Button>
                      </div>
                    )}

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm">
                          <Check className={cn('w-4 h-4 mt-0.5 shrink-0', colors.text)} />
                          <span className="text-slate-600 dark:text-slate-400">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-3xl p-12 lg:p-16 border border-primary/10 dark:border-primary/20"
        >
          <h3 className="font-heading font-bold text-2xl lg:text-3xl text-slate-900 dark:text-white mb-3">Un projet en tête ?</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">Parlons-en. Notre équipe répond sous 2 heures.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
              <Link to="/contact">Faire une demande</Link>
            </Button>
            <Button asChild variant="outline" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              <Link to="/">Retour à l'accueil</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
