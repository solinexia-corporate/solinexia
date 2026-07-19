import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { Badge } from "../../../shared/components/ui/Badge";
import { fadeSlideUp } from "../../../shared/lib/motion";
import type { ProjectItem } from "../data/portfolio.data";


interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasPreview = project.link && project.link !== "/";

  return (
    <motion.div
      variants={fadeSlideUp}
      className="group relative flex flex-col bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image container with hover effect */}
      <div className="relative h-64 sm:h-72 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-800/50">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        {hasPreview && (
          <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[2px]">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/90 text-slate-900 px-4 py-2 rounded-full font-medium text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Eye className="w-4 h-4" />
              Voir la démo
            </a>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Badge
            variant="default"
            className="bg-white/90 text-slate-900 hover:bg-white border-0 shadow-sm backdrop-blur-md"
          >
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white transition-colors group-hover:text-primary dark:group-hover:text-primary">
            {project.title}
          </h3>
          {hasPreview && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors shrink-0"
              aria-label="Voir le projet"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
          {project.desc}
        </p>
      </div>
    </motion.div>
  );
}
