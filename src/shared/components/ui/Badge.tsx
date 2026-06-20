import React from 'react';
import { cn } from '../../lib/cn';

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'glass';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  pulse?: boolean;
}

export function Badge({ className, variant = 'default', pulse, children, ...props }: BadgeProps) {
  const variants = {
    default: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700',
    primary: 'bg-primary/10 text-primary border border-primary/20',
    success: 'bg-success/10 text-success border border-success/20',
    warning: 'bg-accent/10 text-accent border border-accent/20',
    glass: 'bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 text-slate-800 dark:text-white',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-mono font-medium',
        variants[variant],
        className
      )}
      {...props}
    >
      {pulse && (
        <span className={cn(
          'w-1.5 h-1.5 rounded-full animate-pulse',
          variant === 'primary' && 'bg-primary',
          variant === 'success' && 'bg-success',
          variant === 'warning' && 'bg-accent',
          (variant === 'default' || variant === 'glass') && 'bg-current'
        )} />
      )}
      {children}
    </div>
  );
}
