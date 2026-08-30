import React from 'react'
import { cn } from '../../lib/utils'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  target,
  rel,
  icon: Icon,
  iconPosition = 'left',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C5A059] disabled:opacity-50 disabled:cursor-not-allowed text-center select-none cursor-pointer tracking-wide'

  const variants = {
    primary: 'bg-gradient-to-r from-[#D4AF37] via-[#B08A45] to-[#9A7733] text-[#060B14] font-semibold hover:shadow-lg hover:shadow-[#D4AF37]/20 hover:brightness-110 active:scale-[0.98]',
    secondary: 'bg-[#132238] text-slate-100 border border-[#C5A059]/30 hover:border-[#C5A059] hover:bg-[#1A2E4C] active:scale-[0.98]',
    outline: 'border border-slate-700 hover:border-[#C5A059] text-slate-300 hover:text-white bg-transparent active:scale-[0.98]',
    whatsapp: 'bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md shadow-[#25D366]/20 active:scale-[0.98]',
    ghost: 'text-slate-300 hover:text-[#D4AF37] hover:bg-slate-800/40',
    goldGhost: 'text-[#D4AF37] hover:bg-[#D4AF37]/10 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
  }

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-medium'
  }

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  )
}
