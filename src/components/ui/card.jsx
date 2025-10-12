import React from 'react'

export function Card({ className = '', ...props }) {
  return (
    <div
      className={`rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg backdrop-blur ${className}`}
      {...props}
    />
  )
}

export function CardHeader({ className = '', ...props }) {
  return <div className={`p-6 pb-2 ${className}`} {...props} />
}

export function CardTitle({ className = '', ...props }) {
  return (
    <h3 className={`text-lg font-semibold text-slate-100 ${className}`} {...props} />
  )
}

export function CardDescription({ className = '', ...props }) {
  return (
    <p className={`text-sm text-slate-400 ${className}`} {...props} />
  )
}

export function CardContent({ className = '', ...props }) {
  return <div className={`p-6 pt-2 text-slate-300 ${className}`} {...props} />
}

export default Card
