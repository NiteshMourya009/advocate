import React from 'react'
import { cn } from '../../lib/utils'

export default function GoldBadge({ children, className = '', variant = 'default' }) {
  const variants = {
    default: 'bg-[#C5A059]/10 text-[#E0C17E] border-[#C5A059]/30',
    solid: 'bg-[#C5A059] text-[#060B14] font-bold border-transparent',
    subtle: 'bg-slate-800/80 text-slate-300 border-slate-700/60'
  }

  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-medium tracking-wide uppercase border',
      variants[variant],
      className
    )}>
      {children}
    </span>
  )
}
