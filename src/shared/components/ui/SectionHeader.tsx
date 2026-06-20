import React from 'react';
import { motion } from 'framer-motion';
import { fadeSlideUp } from '../../lib/motion';
import { cn } from '../../lib/cn';
import { Badge } from './Badge';

interface SectionHeaderProps {
  tag?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ tag, title, description, align = 'center', className }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeSlideUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        'mb-16',
        align === 'center' ? 'text-center mx-auto items-center flex flex-col' : 'text-left items-start flex flex-col',
        className
      )}
    >
      {tag && (
        <Badge variant="primary" className="mb-4">
          — {tag}
        </Badge>
      )}
      <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
