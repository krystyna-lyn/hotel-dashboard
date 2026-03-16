const Select = ({ className = '', label, error, children, ...props }) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-xs font-medium text-stone-600 uppercase tracking-wide">
          {label}
        </label>
      )}
      <select
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
          transition-all duration-150
          cursor-pointer
          appearance-none
          focus:outline-none
          focus:ring-2 focus:ring-accent-500/30
          focus:border-accent-500
          focus:bg-white
          hover:border-stone-300
          dark:bg-stone-800/60
          dark:text-stone-100
          dark:border-stone-700
          dark:focus:border-accent-400
          dark:focus:bg-stone-800
          ${error ? 'border-red-400 focus:ring-red-400/30 focus:border-red-400' : ''}
          ${className}
        `}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='none' stroke='%236B6760' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' d='M2 4l4 4 4-4'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 12px center',
          paddingRight: '36px',
        }}
      >
        {children}
      </select>
      {error && (
        <p className="text-xs text-red-500 font-normal">{error}</p>
      )}
    </div>
  )
}

export default Select
