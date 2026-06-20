import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Badge } from '../../../shared/components/ui/Badge';
import { Button } from '../../../shared/components/ui/Button';
import { SERVICES, ACCENT_COLORS } from '../../landing/data/services.data';
import { fadeSlideUp, staggerContainer } from '../../../shared/lib/motion';
import { cn } from '../../../shared/lib/cn';

export default function ServicesPage() {
  return (
    <div className="relative pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className="mb-16"
        >
          <Badge variant="primary" className="mb-4">— Services</Badge>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white leading-tight mb-4">
            Tout ce que nous<br />faisons pour vous.
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Des solutions digitales concrètes pour les entreprises africaines qui veulent se démarquer.
          </p>
        </motion.div>

        {/* Services list */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-6"
        >
          {SERVICES.map((service) => {
            const colors = ACCENT_COLORS[service.accent];
            return (
              <motion.div
                key={service.title}
                variants={fadeSlideUp}
                className={cn(
                  'bg-white dark:bg-slate-900/50 rounded-2xl p-8 lg:p-10 border border-slate-200 dark:border-slate-800',
                  !service.available && 'opacity-60'
                )}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={cn('w-11 h-11 rounded-xl border flex items-center justify-center', colors.bg, colors.border)}>
                        <service.icon className={cn('w-5 h-5', colors.text)} />
                      </div>
                      <Badge variant={service.available ? 'success' : 'default'} pulse={service.available}>
                        {service.tag}
                      </Badge>
                    </div>
                    <h2 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-3">{service.title}</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{service.desc}</p>
                    {service.available && (
                      <Button asChild variant="primary" size="sm" className="mt-6" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                        <Link to="/contact">Demander un devis</Link>
                      </Button>
                    )}
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check className={cn('w-4 h-4 mt-0.5 shrink-0', colors.text)} />
                        <span className="text-slate-600 dark:text-slate-400">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center bg-white dark:bg-slate-900/50 rounded-2xl p-10 border border-slate-200 dark:border-slate-800"
        >
          <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-3">Un projet en tête ?</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">Parlons-en. Notre équipe répond sous 2 heures.</p>
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
