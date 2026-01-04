import { FiCalendar, FiHome, FiKey, FiUsers } from 'react-icons/fi'
import Card from './Card.jsx'

const Dashboard = () => {
    return (
        <div className='grow p-8'>
            <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

                <Card icon={<FiCalendar />} title="Bookings" value={140} />
                <Card icon={<FiKey />} title="Rooms" value={120} />
                <Card icon={<FiUsers />} title="Guests" value={110} />

            </div>
        </div>
    )
}

export default Dashboard