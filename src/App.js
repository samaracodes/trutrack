import './App.css';
import { React, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Cars from './components/cars/Cars'
import CarItem from './components/cars/CarItem'
import CarForm from './components/cars/CarForm';
import RepairOrders from './components/repairorders/RepairOrders';
import RepairOrderId from './components/repairorders/RepairOrderId';
import RepairOrderForm from './components/repairorders/RepairOrderForm';


function App() {
  const [cars, setCars] = useState([])
  const [repairOrders, setRepairOrders] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/car-inventory")
    .then((response) => response.json())
    .then((info) => {
      setCars(info)
    })
  }, [])

  useEffect(() => {
    fetch("http://localhost:3001/repair-orders")
    .then((response) => response.json())
    .then((info) => {
      setRepairOrders(info)
    })
  }, [])

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/cars" element={<Cars carInventory={cars}/>} />
        <Route path="/cars/:id" element={<CarItem />} />
        <Route path="/cars/new" element={<CarForm />} />
        
        <Route path="/repair-orders" element={<RepairOrders repairOrders={repairOrders}/>} />
        <Route path="/repair-orders/:id" element={<RepairOrderId />} />
        <Route path="/repair-orders/new" element={<RepairOrderForm />} />

        
      </Routes>
    </div>
  );
}

export default App;
