import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContextProvider';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="h-14 sm:h-16 border-b border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-stone-900/80 backdrop-blur flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-sm">
      <h2 className="text-sm sm:text-base md:text-lg font-semibold text-stone-800 dark:text-stone-50 tracking-tight">
        Welcome to the dashboard
      </h2>
      <button
        type="button"
        onClick={toggleTheme}
        className="
          inline-flex items-center justify-center
          w-9 h-9 rounded-full
          border border-stone-200 dark:border-stone-700
          bg-white dark:bg-stone-800
          text-stone-500 dark:text-stone-300
          hover:text-accent-500 hover:border-accent-500 hover:bg-accent-50
          dark:hover:text-accent-300 dark:hover:border-accent-400 dark:hover:bg-accent-700/20
          transition-all duration-150
          shadow-sm
        "
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <FaMoon size={14} /> : <FaSun size={14} />}
      </button>
    </header>
  )
}

export default Navbar