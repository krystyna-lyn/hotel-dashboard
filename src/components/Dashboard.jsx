import { FiCalendar, FiKey, FiUsers } from 'react-icons/fi'
import Card from './Card.jsx'
import { Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { bookingsLineData, roomOccupancyBarData } from '../assets/chartData.jsx';

ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement);

const Dashboard = () => {
    return (
        <div className='grow p-8'>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

                <Card icon={<FiCalendar />} title="Bookings" value={140} />
                <Card icon={<FiKey />} title="Rooms" value={120} />
                <Card icon={<FiUsers />} title="Guests" value={110} />

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='bg-white p-4 rounded-lg shadow-md dark:bg-gray-900 dark:text-white'>
                    <h3 className='text-lg font-semibold mb-4'>Bookings per Month</h3>
                    <Line data={bookingsLineData} />
                </div>
                <div className='bg-white p-4 rounded-lg shadow-md dark:bg-gray-900 dark:text-white'>
                    <h3 className='text-lg font-semibold mb-4'>Room Types Occupancy</h3>
                    <Line data={roomOccupancyBarData} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard