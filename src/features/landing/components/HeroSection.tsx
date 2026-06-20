
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../../../shared/components/ui/Button';
import { fadeSlideUp, staggerContainer } from '../../../shared/lib/motion';
import { Images } from '../../../assets/images';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle modern background blur */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Content (55%) */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="w-full lg:w-[55%] text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <motion.div variants={fadeSlideUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Solinexia Corporate
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeSlideUp}
              className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8"
            >
              L'excellence digitale{' '}
              <span className="text-gradient block lg:inline">sans compromis.</span>
            </motion.h1>

            <motion.p 
              variants={fadeSlideUp}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed"
            >
              Nous concevons des solutions numériques fiables et innovantes pour propulser votre entreprise. Du développement web sur-mesure au marketing visuel haute qualité.
            </motion.p>

            <motion.div 
              variants={fadeSlideUp}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Button asChild variant="primary" size="lg" className="w-full sm:w-auto min-w-[200px]">
                <Link to="/contact">Démarrer un projet</Link>
              </Button>
              <Button asChild variant="glass" size="lg" className="w-full sm:w-auto min-w-[200px]">
                <Link to="/services">Découvrir nos services</Link>
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeSlideUp}
              className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 w-full grid grid-cols-3 gap-6 text-center lg:text-left"
            >
              <div>
                <div className="font-heading font-bold text-3xl text-slate-900 dark:text-white mb-1">2h</div>
                <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">Livraison rapide</div>
              </div>
              <div>
                <div className="font-heading font-bold text-3xl text-slate-900 dark:text-white mb-1">100%</div>
                <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">Qualité Studio</div>
              </div>
              <div>
                <div className="font-heading font-bold text-3xl text-slate-900 dark:text-white mb-1">24/7</div>
                <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">Support Dédié</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image (45%) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[45%] rounded-3xl overflow-hidden border border-slate-200/50 dark:border-slate-800/50 shadow-2xl relative mt-12 lg:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10" />
            <img 
              src={Images.heroProduct} 
              alt="Solinexia Excellence" 
              className="w-full h-[500px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
