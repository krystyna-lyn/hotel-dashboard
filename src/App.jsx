import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='flex'>
      <Sidebar />
      <div className='grow ml-16 md:ml-64 h-full lg:bg-gray-100 text-gray-900'>
        <Navbar />
        <Dashboard />
      </div>
    </div>

  )
}

export default App
