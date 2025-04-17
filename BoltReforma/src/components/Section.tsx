import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function Section({ id, title, children, icon, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          {icon}
          <h2 className="text-3xl font-bold text-[#213147]">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}