import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { ContactInfo } from '../components/ContactInfo';
import { fadeSlideRight, fadeSlideLeft } from '../../../shared/lib/motion';
export default function ContactPage() {
  return (
    <div className="relative pt-28 pb-24">
      {/* Subtle bg accent */}
      <div
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05] dark:opacity-[0.08] blur-[100px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-4"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Retour à l'accueil
          </Link>
        </motion.div>

        

        {/* Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            variants={fadeSlideRight}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <ContactInfo />
          </motion.div>
          <motion.div
            variants={fadeSlideLeft}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
