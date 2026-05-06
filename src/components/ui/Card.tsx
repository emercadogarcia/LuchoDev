import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white rounded-xl border border-slate-200 p-8 ${className}`}>
      {children}
    </div>
  )
}
