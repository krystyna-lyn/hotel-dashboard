import React from 'react'

const Input = ({ className = '', label, error, ...props }) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-xs font-medium text-stone-600 uppercase tracking-wide">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`
          w-full
          px-3 py-2.5
          rounded-lg
          bg-stone-50
          text-stone-800
          text-sm
          font-normal
          border border-stone-200
          placeholder:text-stone-400
          transition-all duration-150
          focus:outline-none
          focus:ring-2 focus:ring-accent-500/30
          focus:border-accent-500
          focus:bg-white
          hover:border-stone-300
          dark:bg-stone-800/60
          dark:text-stone-100
          dark:border-stone-700
          dark:placeholder:text-stone-500
          dark:focus:border-accent-400
          dark:focus:bg-stone-800
          ${error ? 'border-red-400 focus:ring-red-400/30 focus:border-red-400' : ''}
          ${className}
        `}
      />
      {error && (
        <p className="text-xs text-red-500 font-normal">{error}</p>
      )}
    </div>
  )
}

export default Input
