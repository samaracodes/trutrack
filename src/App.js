import './App.css';
import { React, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Customers from './components/customers/Customers'
import CustomerItem from './components/customers/CustomerItem'
import CustomerForm from './components/customers/CustomerForm';
import RepairOrders from './components/repairorders/RepairOrders';
import RepairOrderId from './components/repairorders/RepairOrderId';
import RepairOrderForm from './components/repairorders/RepairOrderForm';
import RepairOrderEditForm from './components/repairorders/RepairOrderEditForm';


function App() {
  const [customers, setCustomers] = useState([])
  const [repairOrders, setRepairOrders] = useState([])

  useEffect(() => {
<<<<<<< HEAD
    fetch("https://trutrack-backend.onrender.com/car-inventory")
=======
    fetch("http://localhost:3001/customers")
>>>>>>> main
    .then((response) => response.json())
    .then((customer) => {
      setCustomers(customer)
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

        <Route path="/customers" element={<Customers customers={customers}/>} />
        <Route path="/customers/:id" element={<CustomerItem />} />
        
        <Route path="/repair-orders" element={<RepairOrders repairOrders={repairOrders} />} />
        <Route path="/repair-orders/:id" element={<RepairOrderId onDeleteRO={onDeleteRO} />} />
        <Route path="/repair-orders/new" element={<RepairOrderForm  onAddRO={onAddRO} />} />
        <Route path="/repair-orders/:id/edit" element={<RepairOrderEditForm onUpdateRO={onUpdateRO} />} />

        
      </Routes>
    </div>
  );
}

export default App;
