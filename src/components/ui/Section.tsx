import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export const Section = ({ children, className = '', id }: SectionProps) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="max-w-container mx-auto px-6">
        {children}
      </div>
    </section>
  )
}
