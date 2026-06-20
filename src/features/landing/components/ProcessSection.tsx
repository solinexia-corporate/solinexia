import { motion } from 'framer-motion';
import { SectionHeader } from '../../../shared/components/ui/SectionHeader';
import { PROCESS_STEPS } from '../data/landing.data';
import { fadeSlideUp, staggerContainer } from '../../../shared/lib/motion';

export function ProcessSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#080d14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          tag="Processus"
          title={<>Simple, Rapide et <span className="text-gradient">Efficace.</span></>}
          description="Notre méthodologie éprouvée pour transformer vos idées en réalité, sans complexité technique pour vous."
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative mt-16"
        >
          {/* Animated Connecting line — from center of icon 01 to center of icon 04 */}
          {/* Grid: 4 cols, gap-8 (2rem). Icon: w-16 (4rem), left-aligned. Center = 2rem from col start. */}
          {/* Col 4 start = 3*(colWidth + gap). Icon 4 center = col4Start + 2rem. right = 100% - that. */}
          <div
            className="hidden lg:block absolute h-[2px] bg-slate-100 dark:bg-slate-800/50 rounded-full overflow-hidden"
            style={{ top: '2rem', left: '2rem', right: 'calc(25% - 3.5rem)' }}
          >
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="w-full h-full bg-gradient-to-r from-primary via-secondary to-primary"
            />
          </div>

          {PROCESS_STEPS.map((step) => (
            <motion.div key={step.id} variants={fadeSlideUp} className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center font-heading font-black text-2xl text-slate-300 dark:text-slate-700 mb-6 shadow-xl mx-auto lg:mx-0 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary">
                  {step.id}
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-3 text-center lg:text-left">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed text-center lg:text-left">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
