import React from 'react'
import { FaTachometerAlt } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-gray-200 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-700">
            <h1 className="text-2xl font-bold mb-4 hidden md:block">Hotel Dashboard</h1>
            <ul className='flex flex-col mt-5 text-xl'>
                <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-700 hover:text-white'>
                    <FaTachometerAlt />
                    <span className='hidden md:inline'>Dashboard</span>
                </li>
                <li>Home</li>
                <li>Bookings</li>
                <li>Rooms</li>
                <li>Customers</li>
                <li>Reports</li>
            </ul>


        </div>
    )
}

export default Sidebar