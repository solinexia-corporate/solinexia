import { motion } from "framer-motion";
import { staggerContainer } from "../../../shared/lib/motion";
import type { ProjectItem } from "../data/portfolio.data";
import { ProjectCard } from "./ProjectCard";

interface PortfolioGridProps {
  items: ProjectItem[];
}

export function PortfolioGrid({ items }: PortfolioGridProps) {
  if (!items || items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-500 dark:text-slate-400">
        <p>Bientôt disponible...</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto"
    >
      {items.map((item) => (
        <ProjectCard key={item.id} project={item} />
      ))}
    </motion.div>
  );
}
