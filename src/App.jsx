import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ThemeContextProvider from "./context/ThemeContextProvider";
import Dashboard from "./components/pages/Dashboard";
import Bookings from "./components/pages/Bookings";
import Rooms from "./components/pages/Rooms";
import Guests from "./components/pages/Guests";
function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/bookings' element={<Bookings />} />
            <Route path='/rooms' element={<Rooms />} />
            <Route path='/guests' element={<Guests />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </ThemeContextProvider>
  )
}

export default App;