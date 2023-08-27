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
import RepairOrderEditForm from './components/repairorders/RepairOrderEditForm';


function App() {
  const [cars, setCars] = useState([])
  const [repairOrders, setRepairOrders] = useState([])

  useEffect(() => {
    fetch("https://trutrack-backend.onrender.com/car-inventory")
    .then((response) => response.json())
    .then((info) => {
      setCars(info)
    })
  }, [])

  useEffect(() => {
    fetch("https://trutrack-backend.onrender.com/repair-orders")
    .then((response) => response.json())
    .then((info) => {
      setRepairOrders(info)
    })
  }, [])

  const onAddRO = (newRO) => {
    setRepairOrders([...repairOrders, newRO])
  }

  const onUpdateRO = (updatedRO) => {
    const updatedROs = repairOrders.map((originalRO) => {
      if (updatedRO.id === originalRO.id) {
        return updatedRO
      } else {
        return originalRO
      }
    })
    setRepairOrders(updatedROs)
  }

  const onDeleteRO = (deletedRO) => {
    const updatedROs = repairOrders.filter(
      (ro) => ro.id !== deletedRO.id
    );
    setRepairOrders(updatedROs);
  };

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/cars" element={<Cars carInventory={cars}/>} />
        <Route path="/cars/:id" element={<CarItem />} />
        <Route path="/cars/new" element={<CarForm />} />
        
        <Route path="/repair-orders" element={<RepairOrders repairOrders={repairOrders} />} />
        <Route path="/repair-orders/:id" element={<RepairOrderId onDeleteRO={onDeleteRO} />} />
        <Route path="/repair-orders/new" element={<RepairOrderForm  onAddRO={onAddRO} />} />
        <Route path="/repair-orders/:id/edit" element={<RepairOrderEditForm onUpdateRO={onUpdateRO} />} />

        
      </Routes>
    </div>
  );
}

export default App;
