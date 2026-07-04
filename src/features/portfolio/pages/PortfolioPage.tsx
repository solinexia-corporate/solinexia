import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Clock,
  Sparkles,
  Star,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BeforeAfterSlider } from "../../../shared/components/ui/molecules/BeforeAfterSlider";
import { cn } from "../../../shared/lib/cn";
import { fadeSlideUp } from "../../../shared/lib/motion";
import { PORTFOLIO_ITEMS } from "../data/portfolio.data";

export default function PortfolioPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeItem = PORTFOLIO_ITEMS[activeIndex];
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % PORTFOLIO_ITEMS.length);
  const handlePrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length,
    );

  // Auto-scroll every 3 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PORTFOLIO_ITEMS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (!carouselRef.current) return;
    const activeThumbnail = carouselRef.current.children[
      activeIndex
    ] as HTMLElement;
    if (activeThumbnail) {
      const containerLeft = carouselRef.current.scrollLeft;
      const containerRight = containerLeft + carouselRef.current.clientWidth;
      const itemLeft = activeThumbnail.offsetLeft;
      const itemRight = itemLeft + activeThumbnail.clientWidth;

      if (itemLeft < containerLeft || itemRight > containerRight) {
        carouselRef.current.scrollTo({
          left:
            itemLeft -
            carouselRef.current.clientWidth / 2 +
            activeThumbnail.clientWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#04080f] pt-20 sm:pt-24 pb-6 sm:pb-10 relative overflow-hidden flex flex-col transition-colors duration-300">
      {/* Background glowing orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 sm:mb-6 lg:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6"
        >
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors group mb-3 sm:mb-6"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Retour à l'accueil
            </Link>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-slate-900 dark:text-white mb-1 sm:mb-2 tracking-tight">
              Nos <span className="text-gradient">Réalisations</span>.
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-lg">
              La magie de la retouche et de la direction artistique.
            </p>
          </div>

          {/* Controls */}
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 flex items-center justify-center text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 cursor-pointer transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 flex items-center justify-center text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 cursor-pointer transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </motion.div>

        {/* ──── MOBILE / TABLET LAYOUT (< lg) ──── */}
        <div
          className="flex flex-col lg:hidden gap-4 mb-4"
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Mobile Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-900/50 transition-colors"
          >
            <div className="absolute inset-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <BeforeAfterSlider
                    beforeImage={activeItem.before}
                    afterImage={activeItem.after}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Mobile Metadata Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 rounded-2xl shadow-lg transition-colors">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-2 py-0.5 bg-primary/10 dark:bg-primary/20 text-primary text-xs font-mono rounded-full border border-primary/20 dark:border-primary/30 uppercase tracking-wider">
                      {activeItem.category}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "w-3.5 h-3.5",
                            i < activeItem.rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-300 dark:text-slate-600",
                          )}
                        />
                      ))}
                    </div>
                  </div>
                  <h2 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-1 transition-colors">
                    {activeItem.client}
                  </h2>
                  <p className="text-primary font-medium text-xs sm:text-sm mb-3">
                    {activeItem.desc}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-2">
                    {activeItem.details}
                  </p>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    Réalisé en{" "}
                    <span className="font-bold text-slate-900 dark:text-white">
                      {activeItem.time}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* ──── DESKTOP LAYOUT (>= lg) ──── */}
        <div
          className="hidden lg:flex flex-row gap-8 mb-6 lg:mb-8 h-[400px] xl:h-[420px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Metadata Card (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-[380px] xl:w-[440px] shrink-0"
          >
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 lg:p-8 rounded-2xl shadow-xl h-full flex flex-col justify-center transition-colors">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary text-xs font-mono rounded-full border border-primary/20 dark:border-primary/30 uppercase tracking-wider">
                      {activeItem.category}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "w-4 h-4",
                            i < activeItem.rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-300 dark:text-slate-600",
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <h2 className="font-heading font-bold text-2xl lg:text-3xl text-slate-900 dark:text-white mb-2 leading-tight transition-colors">
                    {activeItem.client}
                  </h2>
                  <p className="text-primary font-medium text-sm mb-5">
                    {activeItem.desc}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 transition-colors">
                        <Sparkles className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed transition-colors">
                        {activeItem.details}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 transition-colors">
                        <Clock className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm transition-colors">
                        Réalisé en{" "}
                        <span className="font-bold text-slate-900 dark:text-white">
                          {activeItem.time}
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Main Slider (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 relative h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-900/50 transition-colors"
          >
            <div className="absolute inset-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <BeforeAfterSlider
                    beforeImage={activeItem.before}
                    afterImage={activeItem.after}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Thumbnails Carousel */}
        <motion.div
          variants={fadeSlideUp}
          initial="initial"
          animate="animate"
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Fading edges */}
          <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-slate-50 dark:from-[#04080f] to-transparent z-10 pointer-events-none transition-colors duration-300" />
          <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-slate-50 dark:from-[#04080f] to-transparent z-10 pointer-events-none transition-colors duration-300" />

          <div
            ref={carouselRef}
            className="flex gap-3 sm:gap-4 overflow-x-auto pt-3 sm:pt-4 pb-4 sm:pb-6 scrollbar-hide px-3 sm:px-4 snap-x snap-mandatory items-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PORTFOLIO_ITEMS.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "relative shrink-0 w-[80px] h-[55px] sm:w-[110px] sm:h-[75px] lg:w-[140px] lg:h-[95px] rounded-lg sm:rounded-xl overflow-hidden cursor-pointer transition-all duration-300 snap-center",
                    isActive
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-slate-50 dark:ring-offset-[#04080f] scale-100 opacity-100"
                      : "opacity-75 hover:opacity-100 scale-95 hover:scale-100 border border-slate-200 dark:border-slate-800",
                  )}
                >
                  <img
                    src={item.after}
                    alt={item.client}
                    className="w-full h-full object-cover"
                  />
                  {!isActive && (
                    <div className="absolute inset-0 bg-white/20 dark:bg-black/20 hover:bg-transparent transition-colors" />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
