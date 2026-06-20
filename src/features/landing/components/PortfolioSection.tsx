import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../../../shared/components/ui/SectionHeader';
import { fadeSlideUp, staggerContainer } from '../../../shared/lib/motion';
import { Images } from '../../../assets/images';
import { BeforeAfterSlider } from '../../../shared/components/ui/molecules/BeforeAfterSlider';
import { Button } from '../../../shared/components/ui/Button';

const PORTFOLIO = [
  { client: 'Marketing Produit', category: 'Photographie', desc: 'Mise en valeur des détails', before: Images.portfolio[0].before, after: Images.portfolio[0].after },
  { client: 'Cosmétique Premium', category: 'Direction Artistique', desc: 'Retouche avancée', before: Images.portfolio[1].before, after: Images.portfolio[1].after },
  { client: 'E-commerce', category: 'Retouche', desc: 'Correction colorimétrique', before: Images.portfolio[2].before, after: Images.portfolio[2].after },
  { client: 'Mode Vêtements', category: 'Éditorial', desc: 'Traitement lumière et texture', before: Images.portfolio[0].before, after: Images.portfolio[0].after },
  { client: 'Architecture', category: 'Immobilier', desc: 'Redressement et colorimétrie', before: Images.portfolio[1].before, after: Images.portfolio[1].after },
  { client: 'Bijouterie', category: 'Macro', desc: 'Éclat et pureté', before: Images.portfolio[2].before, after: Images.portfolio[2].after },
];

export function PortfolioSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#04080f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Portfolio"
          title={<>L'excellence en <span className="text-gradient">images.</span></>}
          description="Découvrez comment nous mettons en valeur les produits et services de nos clients avec une qualité irréprochable. Glissez le curseur pour voir la magie."
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PORTFOLIO.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeSlideUp}
              className="group relative bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-primary/30 transition-colors"
            >
              {/* Image Container with Slider */}
              <div className="relative aspect-[100/103] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <BeforeAfterSlider 
                  beforeImage={item.before} 
                  afterImage={item.after} 
                />
              </div>

              {/* Content overlay - Visible by default, hidden on hover */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <div className="transform translate-y-0">
                  <span className="inline-block px-2 py-1 mb-2 bg-white/80 backdrop-blur-sm text-primary font-mono text-xs uppercase tracking-wider rounded-md border border-primary/20">{item.category}</span>
                  <h3 className="text-white font-heading font-bold text-xl mb-1">{item.client}</h3>
                  <p className="text-slate-300 text-sm">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <Button asChild variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
            <Link to="/portfolio">Voir plus</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
