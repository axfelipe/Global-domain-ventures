import React from 'react'

const variants = {
  default:
    'bg-sky-500 hover:bg-sky-600 text-white',
  outline:
    'border border-slate-700 hover:bg-slate-800/50 text-slate-100',
  ghost:
    'hover:bg-slate-800/50 text-slate-100',
}

const sizes = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
}

export function Button({
  as: Comp = 'button',
  className = '',
  variant = 'default',
  size = 'md',
  ...props
}) {
  const base =
    'inline-flex items-center gap-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400/50 disabled:opacity-50 disabled:pointer-events-none'
  return (
    <Comp
      className={`${base} ${variants[variant] ?? variants.default} ${sizes[size] ?? sizes.md} ${className}`}
      {...props}
    />
  )
}

export default Button
