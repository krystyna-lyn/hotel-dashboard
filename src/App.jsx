import './App.css'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 p-6'>
        <h2 className='text-3xl font-semibold mb-4'>Welcome to the Hotel Management System</h2>
        <p className='text-lg'>Select an option from the sidebar to get started.</p>
      </div>
    </div>

  )
}

export default App
