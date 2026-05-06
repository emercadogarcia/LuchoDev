import React from 'react'

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}

export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const baseStyles = 'inline-block px-7 py-3 rounded-full font-semibold transition-all duration-150'
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-container hover:scale-[1.02]',
    secondary: 'bg-white text-primary border border-slate-200 hover:border-primary',
  }

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export const ButtonLink = ({ variant = 'primary', children, className = '', ...props }: ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const baseStyles = 'inline-block px-7 py-3 rounded-full font-semibold transition-all duration-150 no-underline'
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-container hover:scale-[1.02]',
    secondary: 'bg-white text-primary border border-slate-200 hover:border-primary',
  }

  return (
    <a className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
