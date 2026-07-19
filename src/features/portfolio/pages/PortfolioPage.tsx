import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { cn } from "../../../shared/lib/cn";
import {
  PORTFOLIO_TABS,
  TEMPLATES_ITEMS,
  DASHBOARDS_ITEMS,
  WEBSITES_ITEMS,
  PORTFOLIO_ITEMS,
} from "../data/portfolio.data";
import { PortfolioVisuals } from "../components/PortfolioVisuals";
import { PortfolioGrid } from "../components/PortfolioGrid";

export default function PortfolioPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam) {
      const index = PORTFOLIO_TABS.findIndex((t) => t.id === tabParam);
      if (index !== -1) setActiveTab(index);
    } else {
      setActiveTab(0);
    }
  }, [searchParams]);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setSearchParams({ tab: PORTFOLIO_TABS[index].id });
  };

  const tab = PORTFOLIO_TABS[activeTab] || PORTFOLIO_TABS[0];

  // State for PortfolioVisuals
  const [activeVisualIndex, setActiveVisualIndex] = useState(0);
  const [isVisualPaused, setIsVisualPaused] = useState(false);

  const handleNextVisual = () => {
    setActiveVisualIndex((prev) => (prev + 1) % PORTFOLIO_ITEMS.length);
  };
  const handlePrevVisual = () => {
    setActiveVisualIndex((prev) => (prev - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#04080f] pt-20 sm:pt-24 pb-6 sm:pb-10 relative overflow-hidden flex flex-col transition-colors duration-300">
      {/* Background glowing orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col relative z-10">
        {/* Header & Tabs */}
        <div className="mb-6 lg:mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 border-b border-slate-200 dark:border-slate-800 pb-4 lg:pb-0">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors group mb-3 sm:mb-6"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Retour à l'accueil
            </Link>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-1 sm:mb-2 tracking-tight">
              Nos <span className="text-gradient">Réalisations</span>.
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-lg">
              {tab.tagline}
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row lg:items-end justify-between lg:justify-end gap-4 lg:gap-6 w-full lg:w-auto">
            {/* Controls (Only show for Visuels tab) */}
            {activeTab === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-2 sm:gap-3 order-1 sm:order-2 lg:order-1 lg:mb-2"
              >
                <button
                  onClick={handlePrevVisual}
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 flex items-center justify-center text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 cursor-pointer transition-all duration-300 shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextVisual}
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 flex items-center justify-center text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 cursor-pointer transition-all duration-300 shadow-sm"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex justify-start gap-2 sm:gap-3 overflow-x-auto pb-2 lg:pb-0 snap-x scrollbar-hide order-2 sm:order-1 lg:order-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {PORTFOLIO_TABS.map((t, index) => (
                <button
                  key={t.id}
                  onClick={() => handleTabChange(index)}
                  className={cn(
                    "inline-flex items-center gap-2 px-3 sm:px-4 py-2 lg:py-4 text-sm font-medium cursor-pointer transition-all duration-300 whitespace-nowrap shrink-0 snap-start lg:border-b-2 lg:-mb-[2px]",
                    activeTab === index
                      ? "text-primary lg:border-primary bg-primary/5 lg:bg-transparent rounded-lg lg:rounded-none"
                      : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 border-transparent hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-100 lg:hover:bg-transparent dark:hover:bg-slate-800 lg:dark:hover:bg-transparent rounded-lg lg:rounded-none"
                  )}
                >
                  <t.icon className="w-4 h-4" />
                  {t.label}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Tab content */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {activeTab === 0 && (
                <PortfolioVisuals
                  activeIndex={activeVisualIndex}
                  setActiveIndex={setActiveVisualIndex}
                  isPaused={isVisualPaused}
                  setIsPaused={setIsVisualPaused}
                  onNext={handleNextVisual}
                  onPrev={handlePrevVisual}
                />
              )}
              {activeTab === 1 && <PortfolioGrid items={TEMPLATES_ITEMS} />}
              {activeTab === 2 && <PortfolioGrid items={DASHBOARDS_ITEMS} />}
              {activeTab === 3 && <PortfolioGrid items={WEBSITES_ITEMS} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
