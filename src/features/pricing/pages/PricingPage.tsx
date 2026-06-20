import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, Zap } from 'lucide-react';
import { Badge } from '../../../shared/components/ui/Badge';
import { Button } from '../../../shared/components/ui/Button';
import { PLANS } from '../../landing/data/pricing.data';
import { fadeSlideUp, staggerContainer } from '../../../shared/lib/motion';
import { cn } from '../../../shared/lib/cn';

export default function PricingPage() {
  return (
    <div className="relative pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" className="mb-4">— Tarifs</Badge>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white leading-tight mb-4">
            Transparent & <span className="text-gradient">accessible.</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg">
            Paiement uniquement après livraison. Aucun abonnement. Aucune surprise.
          </p>
        </motion.div>

        {/* Plans */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeSlideUp}
              whileHover={{ y: -5 }}
              className={cn(
                'relative rounded-2xl border p-7 flex flex-col transition-all duration-300',
                'bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800',
                plan.popular && 'border-primary/40 dark:border-primary/40 shadow-lg shadow-primary/10'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-primary to-primary/80 rounded-full text-white text-xs font-semibold">
                  <Star className="w-3 h-3 fill-white" />
                  Le plus populaire
                </div>
              )}

              <div className="mb-8">
                <p className="text-xs text-slate-500 mb-2 font-mono uppercase tracking-wider">{plan.name}</p>
                <div className="flex items-end gap-2 mb-1">
                  <span className="font-heading font-bold text-3xl text-slate-900 dark:text-white">{plan.price}</span>
                  {plan.unit && <span className="text-primary font-medium mb-0.5 text-sm">{plan.unit}</span>}
                </div>
                <p className="text-xs text-slate-500 font-mono">{plan.per}</p>
                <p className="text-slate-600 dark:text-slate-400 text-xs mt-2 leading-relaxed">{plan.desc}</p>
              </div>

              <ul className="space-y-2.5 mb-7 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400">{feat}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.popular ? 'primary' : 'outline'}
                size="lg"
                className="w-full"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                <Link to="/contact">{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-slate-500 text-sm flex items-center justify-center gap-2"
        >
          <Zap className="w-4 h-4 text-primary" />
          Paiement après livraison · Garantie remboursement · Aucun engagement
        </motion.p>
      </div>
    </div>
  );
}
