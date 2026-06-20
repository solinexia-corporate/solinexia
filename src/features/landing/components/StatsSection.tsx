
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { STATS } from '../data/landing.data';
import { fadeSlideUp, staggerContainer } from '../../../shared/lib/motion';

function AnimatedCounter({ value }: { value: number | string }) {
  const num = typeof value === 'string' ? parseInt(value.replace(/[^0-9]/g, '')) || 0 : value;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (inView) {
      spring.set(num);
    }
  }, [inView, spring, num]);

  const display = useTransform(spring, (current) => Math.floor(current));

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function StatsSection() {
  return (
    <section className="py-20 bg-primary/5 dark:bg-primary/10 border-y border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center"
        >
          {STATS.map((stat, i) => (
            <motion.div key={i} variants={fadeSlideUp} className="flex flex-col items-center">
              <div className="flex items-baseline mb-2">
                <span className="font-heading font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
                  <AnimatedCounter value={stat.value} />
                </span>
                <span className="font-heading font-bold text-2xl text-primary ml-1">
                  {stat.suffix}
                </span>
              </div>
              <span className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
