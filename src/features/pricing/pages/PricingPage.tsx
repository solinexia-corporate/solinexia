import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Clock, Info, Star, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../../../shared/components/ui/Badge";
import { Button } from "../../../shared/components/ui/Button";
import { cn } from "../../../shared/lib/cn";
import { fadeSlideUp, staggerContainer } from "../../../shared/lib/motion";
import { PRICING_TABS } from "../../landing/data/pricing.data";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = PRICING_TABS[activeTab];

  return (
    <div className="relative pt-28 pb-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 dark:bg-primary/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge variant="primary" className="mb-4">
            — Tarifs
          </Badge>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white leading-tight mb-4">
            Des prix <span className="text-gradient">transparents.</span>
            <br className="hidden sm:block" /> Adaptés à votre projet.
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Des estimations claires pour chaque type de projet. Le tarif final
            est défini après évaluation de vos besoins spécifiques.
          </p>
        </motion.div>

        {/* Tabs — horizontal scroll on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-start sm:justify-center gap-2 sm:gap-3 mb-10 overflow-x-auto pb-2 snap-x scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PRICING_TABS.map((t, index) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(index)}
              className={cn(
                "inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-all duration-300 whitespace-nowrap shrink-0 snap-start",
                activeTab === index
                  ? "bg-gradient-to-r from-primary to-primary/85 text-white dark:from-primary dark:to-primary/80"
                  : "bg-white dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-[#25D366] dark:hover:text-[#25D366] hover:border-[#25D366]/40 dark:hover:border-[#25D366]/40",
              )}
            >
              <t.icon className="w-4 h-4" />
              {t.label}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {/* Tagline */}
            <div className="text-center mb-8">
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-medium">
                {tab.tagline}
              </p>
            </div>

            {/* Tier cards */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className={cn(
                "grid gap-6 mb-8",
                tab.tiers.length === 3
                  ? "md:grid-cols-3"
                  : "md:grid-cols-2 max-w-3xl mx-auto",
              )}
            >
              {tab.tiers.map((tier) => (
                <motion.div
                  key={tier.name}
                  variants={fadeSlideUp}
                  whileHover={{ y: -5 }}
                  className={cn(
                    "relative rounded-2xl border p-6 sm:p-7 flex flex-col transition-all duration-300",
                    "bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800",
                    tier.popular &&
                      "border-primary/40 dark:border-primary/40 md:scale-[1.03]",
                  )}
                >
                  {tier.popular && (
                    <Badge
                      variant="primary"
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 !bg-gradient-to-r !from-primary !to-primary/80 !text-white !border-0 whitespace-nowrap !font-sans !font-semibold"
                    >
                      <Star className="w-3 h-3 fill-white" />
                      Le plus choisi
                    </Badge>
                  )}

                  {/* Tier name */}
                  <p className="text-xs text-slate-500 mb-3 font-mono uppercase tracking-wider">
                    {tier.name}
                  </p>

                  {/* Price range */}
                  <div className="mb-4">
                    <div className="flex items-end gap-2 mb-1 flex-wrap">
                      <span className="font-heading font-bold text-lg sm:text-xl lg:text-2xl text-slate-900 dark:text-white leading-tight">
                        {tier.priceRange}
                      </span>
                      {tier.unit && (
                        <span className="text-primary font-medium mb-0.5 text-xs sm:text-sm">
                          {tier.unit}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Timeline badge */}
                  <Badge variant="default" className="mb-6 !rounded-lg gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span>
                      Livraison :{" "}
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {tier.timeline}
                      </span>
                    </span>
                  </Badge>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-7 flex-1">
                    {tier.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    variant={tier.popular ? "primary" : "outline"}
                    size="sm"
                    className="w-full"
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    <Link to="/contact">Demander un devis</Link>
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-2.5 max-w-2xl mx-auto p-4 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl"
            >
              <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {tab.note} Les fourchettes de prix sont indicatives et peuvent
                varier selon la complexité, les fonctionnalités supplémentaires
                et les intégrations requises. Un devis précis vous sera remis
                après évaluation de votre projet.
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom reassurance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-slate-500"
        >
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            Paiement après livraison
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-success" />
            Garantie remboursement
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-secondary" />
            Réponse sous 2h
          </span>
        </motion.div>
      </div>
    </div>
  );
}
