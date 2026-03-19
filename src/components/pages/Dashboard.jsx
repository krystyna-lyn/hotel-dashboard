import { FiCalendar, FiKey, FiUsers } from 'react-icons/fi'
import Card from '../Card.jsx'
import { Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { bookingsLineData, roomOccupancyBarData } from '../../assets/chartData.jsx';

ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg sm:text-xl font-semibold text-stone-900 dark:text-stone-50 tracking-tight">
          Overview
        </h1>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
          Key metrics for your hotel today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card icon={<FiCalendar />} title="Bookings" value={140} />
        <Card icon={<FiKey />} title="Rooms" value={120} />
        <Card icon={<FiUsers />} title="Guests" value={110} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-100 dark:border-stone-800 shadow-card p-4 sm:p-5">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-50 mb-3">
            Bookings per month
          </h3>
          <Line data={bookingsLineData} />
        </div>
        <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-100 dark:border-stone-800 shadow-card p-4 sm:p-5">
          <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-50 mb-3">
            Room types occupancy
          </h3>
          <Line data={roomOccupancyBarData} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard