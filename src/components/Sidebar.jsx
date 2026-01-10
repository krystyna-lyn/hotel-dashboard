import {
    FiHome,
    FiCalendar,
    FiUsers,
    FiKey,
    FiSettings,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";


const Sidebar = () => {

    const menuItems = [
        { name: 'Dashboard', path: '/', icon: <FiHome /> },
        { name: 'Rooms', path: '/rooms', icon: <FiKey /> },
        { name: 'Guests', path: '/guests', icon: <FiCalendar /> },
        { name: 'Bookings', path: '/bookings', icon: <FiCalendar /> },
        { name: 'Settings', path: '/settings', icon: <FiSettings /> },

    ]
    return (
        <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-17 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
            <h1 className="text-2xl mb-4 hidden mt-4 text-center italic md:block">Hotel Admin</h1>

            <ul className='flex flex-col mt-5 text-xl'>

                {menuItems.map((items) =>
                    <NavLink key={items.name} to={items.path}
                        className={({ isActive }) =>
                            `flex items-center py-3 px-2 space-x-4 dark:text-white ${isActive
                                ? "bg-gray-700 text-white rounded"
                                : "text-gray-900 hover:bg-gray-700 hover:text-white hover:rounded"
                            }`
                        }
                    >
                        <span className="text-2xl">{items.icon}</span>
                        <span className='hidden md:inline'>{items.name}</span>
                    </NavLink>
                )

                }

            </ul>

        </div>
    )
}

export default Sidebar