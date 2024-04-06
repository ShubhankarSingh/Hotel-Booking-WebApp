import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';


import AddRoom from './components/room/AddRoom'
import ExistingRooms from './components/room/ExistingRooms';
import Home from './components/home/Home';
import EditRoom from './components/room/EditRoom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Room from './components/room/Room';
import RoomListing from './components/room/RoomListing';
import Admin from './components/admin/Admin';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <main>
      <BrowserRouter>
      <Navbar/>
      
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/edit-room/:roomId" element={<EditRoom/>}/>
            <Route path="/existing-rooms" element={<ExistingRooms/>}/>
            <Route path="/add-room" element={<AddRoom/>}/>
            <Route path="/browse-all-rooms" element={<RoomListing/>}/>
            <Route path="/admin" element={<Admin/>}/>
          </Routes>
      
      </BrowserRouter>
      <Footer/>
      </main>
    
  )
}

export default App
