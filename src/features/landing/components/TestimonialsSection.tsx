import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../../../shared/components/ui/SectionHeader';
import { TESTIMONIALS } from '../data/testimonials.data';



export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#080d14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Témoignages"
          title={<>Ils nous font <span className="text-gradient">confiance.</span></>}
        />

        {/* Star rating summary */}
        <div className="flex items-center justify-center gap-2 -mt-10 mb-16">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
          <span className="text-sm font-semibold text-slate-900 dark:text-white ml-1">4.9/5</span>
          <span className="text-sm text-slate-500">· 47 avis vérifiés</span>
        </div>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden flex pb-4">
        {/* Fading Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white dark:from-[#080d14] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white dark:from-[#080d14] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex w-max gap-6 px-6"
        >
          {/* Doubled array for seamless looping */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
            <div
              key={i}
              className="w-[350px] sm:w-[420px] shrink-0 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex gap-0.5 mb-5">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-900 dark:text-white text-lg leading-relaxed mb-8 font-medium">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-inner"
                  style={{ background: testimonial.bg }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-xs text-slate-500">{testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
