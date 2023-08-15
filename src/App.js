import './App.css';
import { React, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Cars from './components/cars/Cars'
import CarId from './components/cars/CarId'
import RepairOrders from './components/repairorders/RepairOrders';
import RepairOrderId from './components/repairorders/RepairOrderId';



function App() {
  const [cars, setCars] = useState([])
  const [repairOrders, setRepairOrders] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/car-inventory")
    .then((response) => response.json())
    .then((cars) => setCars(cars))
  }, [])

  useEffect(() => {
    fetch("http://localhost:3001/car-inventory")
    .then((response) => response.json())
    .then((rO) => setRepairOrders(rO))
  }, [])

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/cars" element={<Cars carInventory={cars}/>} />
        <Route path="/cars/:id" element={<CarId />} />

        <Route path="/repair-orders" element={<RepairOrders repairOrders={repairOrders}/>} />
        <Route path="/repair-orders/:id" element={<RepairOrderId />} />
        
      </Routes>
    </div>
  );
}

export default App;
