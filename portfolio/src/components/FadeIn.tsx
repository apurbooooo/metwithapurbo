import { motion, useReducedMotion } from 'framer-motion';
import type { ElementType, HTMLAttributes, ReactNode } from 'react';

type FadeInProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
} & Pick<HTMLAttributes<HTMLElement>, 'aria-label' | 'id'>;

type MotionTag = typeof motion.div;
const motionCache = new Map<ElementType, MotionTag>();

const getMotionComponent = (tag: ElementType) => {
  const cached = motionCache.get(tag);
  if (cached) return cached;
  // motion.create keeps the tag's runtime element; typed as div for shared props.
  const created = motion.create(tag as 'div') as MotionTag;
  motionCache.set(tag, created);
  return created;
};

export const FadeIn = ({
  children,
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  ...rest
}: FadeInProps) => {
  const reduceMotion = useReducedMotion();
  const Component = getMotionComponent(as);

  return (
    <Component
      {...rest}
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Component>
  );
};
