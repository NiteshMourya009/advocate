import React from 'react'
import { cn } from '../../lib/utils'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false
}) {
  const alignClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end'
  }

  return (
    <div className={cn('flex flex-col max-w-3xl mb-12 sm:mb-16', alignClasses[align], align === 'center' && 'mx-auto', className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#132238]/90 border border-[#C5A059]/30 text-[11px] font-semibold tracking-widest uppercase text-[#D4AF37] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          <span>{eyebrow}</span>
        </div>
      )}
      
      {title && (
        <h2 className={cn(
          'text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight',
          light ? 'text-slate-900' : 'text-slate-100'
        )}>
          {title}
        </h2>
      )}

      {/* Decorative hairline */}
      <div className={cn(
        'w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-4',
        align === 'left' && 'from-[#D4AF37] to-transparent ml-0'
      )} />

      {subtitle && (
        <p className={cn(
          'text-sm sm:text-base lg:text-lg leading-relaxed',
          light ? 'text-slate-600' : 'text-slate-400'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
