
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../../../shared/components/ui/Button';
import { fadeSlideUp } from '../../../shared/lib/motion';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeSlideUp}
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight mb-6">
            Prêt à transformer <br className="hidden sm:block" />
            <span className="text-gradient">votre vision en réalité ?</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Contactez-nous aujourd'hui pour discuter de vos objectifs. Notre équipe est prête à déployer des solutions d'excellence pour votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="primary" size="lg" className="w-full sm:w-auto min-w-[200px]">
              <Link to="/contact">Démarrer un projet</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
