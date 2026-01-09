import {
    FiHome,
    FiCalendar,
    FiUsers,
    FiKey,
    FiSettings,
} from "react-icons/fi";


const Sidebar = () => {
    return (
        <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-17 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
            <h1 className="text-2xl mb-4 hidden mt-4 text-center italic md:block">Hotel Admin</h1>
            <ul className='flex flex-col mt-5 text-xl'>
                <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-700 hover:text-white'>
                    <FiHome className="shrink-0" />
                    <span className='hidden md:inline'>Dashboard</span>
                </li>
                <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-700 hover:text-white'>
                    <FiKey className="shrink-0" />
                    <span className='hidden md:inline'>Rooms</span>
                </li>
                <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-700 hover:text-white'>
                    <FiUsers className="shrink-0" />
                    <span className='hidden md:inline'>Guests</span>
                </li>
                <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-700 hover:text-white'>
                    <FiCalendar className="shrink-0" />
                    <span className='hidden md:inline'>Bookings</span>
                </li>
                <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-700 hover:text-white'>
                    <FiSettings className="shrink-0" />
                    <span className='hidden md:inline'>Settings</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar