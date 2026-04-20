import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GradientMeshProps {
  className?: string;
}

export const GradientMesh: React.FC<GradientMeshProps> = ({ className }) => {
  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

interface GласsmorphicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const GlassmorphicCard = React.forwardRef<
  HTMLDivElement,
  GласsmorphicCardProps
>(({ children, className, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn(
      'relative backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 rounded-xl overflow-hidden',
      'shadow-lg hover:shadow-2xl hover:shadow-primary/20',
      'transition-all duration-300',
      className
    )}
    whileHover={{ scale: 1.02, y: -5 }}
    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    {...props}
  >
    {/* Animated border */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 pointer-events-none"
      animate={{
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
    />
    {/* Content */}
    <div className="relative z-10">{children}</div>
  </motion.div>
));

GlassmorphicCard.displayName = 'GlassmorphicCard';
