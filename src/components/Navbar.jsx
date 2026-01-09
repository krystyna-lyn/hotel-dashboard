import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContextProvider';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="bg-gray-100 text-gray-900 border-b border-gray-300 flex items-center justify-between p-4 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
            <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard</h2>
            <button className='text-xl dark:text-white text-gray-900' onClick={toggleTheme}>
                {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
        </div>
    )
}

export default Navbar