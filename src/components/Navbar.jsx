import React from 'react'
import { FaMoon } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className="bg-gray-100  text-gray-900 border-b border-gray-300 flex items-center justify-between p-4">
            <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard</h2>
            <button className='text-xl text-' dark>
                <FaMoon className="ml-auto hover:text-gray-600" />
            </button>
        </div>
    )
}

export default Navbar