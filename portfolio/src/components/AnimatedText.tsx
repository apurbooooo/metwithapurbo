import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';

type CharProps = {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
};

const Char = ({ char, progress, range }: CharProps) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
};

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
};

export const AnimatedText = ({ text, className, style }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  if (reduceMotion) {
    return <p ref={ref} className={className} style={style}>{text}</p>;
  }
  const words = text.split(' ');
  const totalChars = text.length;
  let charIndex = 0;

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, wordIndex) => {
        const wordStart = charIndex;
        charIndex += word.length + 1;
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap" aria-hidden="true">
            {word.split('').map((char, i) => {
              const start = (wordStart + i) / totalChars;
              const end = start + 1 / totalChars;
              return <Char key={i} char={char} progress={scrollYProgress} range={[start, end]} />;
            })}
            {wordIndex < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
    </p>
  );
};
