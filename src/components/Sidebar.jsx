import {
    FiHome,
    FiCalendar,
    FiUsers,
    FiKey,
    FiSettings,
} from "react-icons/fi";


const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-gray-200 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-700">
            <h1 className="text-2xl mb-4 hidden mt-4 text-center italic md:block">Hotel Admin</h1>
            <ul className='flex flex-col mt-5 text-xl'>
                <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-700 hover:text-white'>
                    <FiHome />
                    <span className='hidden md:inline'>Dashboard</span>
                </li>
                <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-700 hover:text-white'>
                    <FiKey />
                    <span className='hidden md:inline'>Rooms</span>
                </li>
                <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-700 hover:text-white'>
                    <FiUsers />
                    <span className='hidden md:inline'>Guests</span>
                </li>
                <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-700 hover:text-white'>
                    <FiCalendar />
                    <span className='hidden md:inline'>Bookings</span>
                </li>
                <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-700 hover:text-white'>
                    <FiSettings />
                    <span className='hidden md:inline'>Settings</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar