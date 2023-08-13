import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import RepairOrders from './components/repairorders/RepairOrders';
import RepairOrderId from './components/repairorders/RepairOrderId';
import Cars from './components/cars/Cars'
import CarId from './components/cars/CarId'



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />

        <Route path='/cars' element={<Cars />} >
          <Route path=':carId' element={<CarId />} />
        </Route>

        <Route path='/repair-orders' element={<RepairOrders />} >
          <Route path=':repairOrderId' element={<RepairOrderId />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
