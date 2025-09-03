import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  background?: 'primary' | 'secondary' | 'white' | 'dark';
}

export default function Section({ 
  id, 
  children, 
  className = '', 
  background = 'white' 
}: SectionProps) {
  const bgClasses = {
    primary: 'bg-gradient-to-br from-orange-600 to-orange-700 text-white',
    secondary: 'bg-gradient-to-br from-orange-400 to-orange-500 text-white',
    white: 'bg-neutral-50 text-gray-900',
    dark: 'bg-gray-900 text-white'
  };

  return (
    <section 
      id={id}
      className={`min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-32 py-16 ${bgClasses[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
}
