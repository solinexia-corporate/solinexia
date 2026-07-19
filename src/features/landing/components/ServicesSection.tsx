import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../../../shared/components/ui/SectionHeader';
import { Badge } from '../../../shared/components/ui/Badge';
import { SERVICES, ACCENT_COLORS } from '../data/services.data';
import { fadeSlideUp, staggerContainer } from '../../../shared/lib/motion';
import { Images } from '../../../assets/images';
import { cn } from '../../../shared/lib/cn';

export function ServicesSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#080d14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Services"
          title={<>Des solutions qui font la <span className="text-gradient">différence.</span></>}
          description="De la stratégie visuelle au développement sur-mesure, nous accompagnons votre croissance numérique avec rigueur et créativité."
        />

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4"
        >
          {SERVICES.map((item, i) => {
            const colors = ACCENT_COLORS[item.accent];
            const isBig = i === 0 || i === 1;

            let colClasses = '';
            if (i === 0) colClasses = 'md:col-span-2 lg:col-span-3 lg:row-span-2';
            else if (i === 1) colClasses = 'md:col-span-2 lg:col-span-3 lg:row-span-2';
            else if (i === 2) colClasses = 'md:col-span-1 lg:col-span-2';
            else if (i === 3 || i === 4) colClasses = 'md:col-span-1 lg:col-span-2';

            return (
              <motion.div
                key={item.title}
                variants={fadeSlideUp}
                whileHover={{ y: -5 }}
                className={cn(
                  'relative group rounded-2xl border overflow-hidden',
                  colClasses,
                  'bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800',
                  'hover:shadow-xl hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-500',
                  !item.available && 'opacity-70'
                )}
              >
                {/* Gradient overlay */}
                <div className={cn('absolute inset-0 bg-gradient-to-br opacity-50', `from-${item.accent}-500/10 to-transparent`)} />

                {/* Shimmer on hover */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out skew-x-12" />
                </div>

                <div className={cn('relative h-full flex flex-col md:flex-row', !isBig && 'flex-col')}>
                  <div className={cn('flex flex-col justify-between p-5 flex-1', isBig && 'lg:p-7', isBig && 'md:w-1/2')}>
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <div className={cn('w-8 h-8 rounded-lg border flex items-center justify-center transition-colors', colors.bg, colors.border, 'group-hover:border-primary/30')}>
                          <item.icon className={cn('w-4 h-4', colors.text)} />
                        </div>
                        <Badge
                          variant={item.tag.includes('Phare') ? 'warning' : 'success'}
                          pulse={item.available}
                          className="text-[10px] px-2 py-0.5"
                        >
                          {item.tag}
                        </Badge>
                      </div>
                      <h3 className={cn('font-heading font-bold text-slate-900 dark:text-white mb-2', isBig ? 'text-xl lg:text-2xl' : 'text-base')}>
                        {item.title}
                      </h3>
                      <p className={cn('text-slate-600 dark:text-slate-400 leading-relaxed mt-2', isBig ? 'text-sm max-w-sm' : 'text-sm')}>
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex items-end justify-between mt-auto pt-4">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <Link
                          to={`/portfolio?tab=${item.portfolioTab}`}
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-[11px] font-semibold rounded-lg transition-colors"
                        >
                          Nos réalisations
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                      {!isBig && (
                        <div className="flex items-center shrink-0">
                          <Link 
                            to={`/services#${item.id}`}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-primary/10 hover:border-primary/20 transition-all shadow-sm"
                            title="Voir le service"
                          >
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Image + arrow icon pour les grands services */}
                  {isBig && (
                    <div className="hidden md:flex w-1/2 relative overflow-hidden border-l border-slate-200 dark:border-slate-800 items-center justify-center p-6 lg:p-8">
                      <img 
                        src={i === 0 ? Images.solinexia[5] : Images.solinexia[2]} 
                        alt={item.title} 
                        className="w-full max-h-[160px] lg:max-h-[200px] object-cover rounded-2xl shadow-sm"
                      />
                      <Link 
                        to={`/services#${item.id}`}
                        className="absolute bottom-3 right-3 lg:bottom-5 lg:right-5 w-8 h-8 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-primary/10 hover:border-primary/20 transition-all shadow-md z-10"
                        title="Voir le service"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
