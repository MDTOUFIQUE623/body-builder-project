import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp } from '../../utils/animations';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id={id} className={`py-20 ${className}`} ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}