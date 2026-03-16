
const Card = ({ icon, title, value }) => {
  return (
    <div className="bg-white dark:bg-stone-900 rounded-xl shadow-card px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3 sm:gap-4 border border-stone-100 dark:border-stone-800">
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-stone-50 dark:bg-stone-800 flex items-center justify-center text-accent-500">
        <span className="text-xl">{icon}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-medium uppercase tracking-wide text-stone-500 dark:text-stone-400">
          {title}
        </span>
        <span className="mt-0.5 text-lg sm:text-xl font-semibold text-stone-900 dark:text-stone-50">
          {value}
        </span>
      </div>
    </div>
  )
}

export default Card