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
    { name: 'Guests', path: '/guests', icon: <FiUsers /> },
    { name: 'Bookings', path: '/bookings', icon: <FiCalendar /> },
    { name: 'Settings', path: '/settings', icon: <FiSettings /> },
  ]

  return (
    <aside className="fixed inset-y-0 left-0 w-16 md:w-64 border-r border-stone-200 dark:border-stone-800 bg-white/90 dark:bg-stone-950/95 backdrop-blur z-20">
      <div className="h-full px-3 md:px-4 py-3 md:py-5 flex flex-col">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-6 md:mb-8">
          <div className="w-8 h-8 rounded-lg bg-accent-500 text-white flex items-center justify-center text-lg font-semibold shadow-card">
            H
          </div>
          <div className="hidden md:block">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              Hotel
            </p>
            <p className="text-sm font-semibold text-stone-900 dark:text-stone-50">
              Admin
            </p>
          </div>
        </div>

        <nav className="flex-1">
          <ul className="flex flex-col gap-1 text-sm">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `
                      flex items-center gap-3
                      px-3 py-2.5
                      rounded-lg
                      text-xs md:text-sm font-medium
                      transition-all duration-150
                      ${
                        isActive
                          ? 'bg-accent-500 text-white shadow-card'
                          : 'text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-50'
                      }
                    `
                  }
                >
                  <span className="text-lg md:text-base">
                    {item.icon}
                  </span>
                  <span className="hidden md:inline">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar