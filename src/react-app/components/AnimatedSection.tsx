import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight';
  delay?: number;
}

export default function AnimatedSection({ 
  children, 
  className = '',
  animation = 'fadeIn',
  delay = 0
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animationClasses = {
    fadeIn: isVisible 
      ? 'opacity-100 transform translate-y-0' 
      : 'opacity-0 transform translate-y-8',
    slideUp: isVisible 
      ? 'opacity-100 transform translate-y-0' 
      : 'opacity-0 transform translate-y-16',
    slideLeft: isVisible 
      ? 'opacity-100 transform translate-x-0' 
      : 'opacity-0 transform translate-x-16',
    slideRight: isVisible 
      ? 'opacity-100 transform translate-x-0' 
      : 'opacity-0 transform -translate-x-16'
  };

  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ease-out ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  );
}
