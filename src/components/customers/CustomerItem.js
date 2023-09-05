import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './CustomerItem.css'

const CustomerItem = () => {
    const { id } = useParams()
    const [customer, setCustomer] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(`https://trutrack-backend.onrender.com/customers/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setCustomer(data);
            setIsLoaded(!isLoaded);
        })
    }, [id])

    if (!isLoaded) return <h1>Please refresh...</h1>
  


    return (
        <div className="carItemPage">
            <div class="container mt-3 pb-auto">
              
            <h2 class="mb-3">Vehicle History</h2>
    
            <div class="row gutters-sm">
                       
        {/* // Vehicle Profile Stats // */}
                <div class="profile-stats col-md-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center">
                            <img src="./f80m3.webp" alt="Admin" width="220"/>
                            <div class="mt-3">
                                <h4 className="border-bottom">{customer.customerInfo.name}</h4>
                                <p class="text-muted mb-1">{customer.vehicleInfo.year} {customer.vehicleInfo.make} {customer.vehicleInfo.model}</p>
                                <p class="text-muted mb-1">VIN: {customer.vehicleInfo.vin}</p>
                                <p class="text-muted mb-1">Miles: {customer.vehicleInfo.mileage}</p>
                                <p class="text-muted mb-1">Plate#: {customer.vehicleInfo.plateNumber}</p>

                            </div>
                        </div>
                    </div>
                </div>
            
                
                </div>


        {/* // Customer Info // */}
                <div class="col-md-8">
                <div class="card mb-3 text-start">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Customer Name</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            {customer.customerInfo.name}
                        </div>
                    </div>

                    <hr/>
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Phone</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            {customer.customerInfo.phone}
                        </div>
                    </div>

                    <hr/>
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            {customer.customerInfo.email}
                        </div>
                    </div>

                    <hr/>
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Address</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            {customer.customerInfo.address}
                        </div>
                    </div>
                </div>
                
                <hr/>


                </div>
                </div>
            </div>

        {/* // Vehicle RO History // */}
            
        
                <div class="card text-start">
                    <div class="card-header">
                        <h5 class="card-title">Repair Orders</h5>
                    </div>

                    <div class="list-group">
{customer.repairOrders.map((item) => 

   
                        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">RO#{item.id}</h5>
                                <small>Date:{item.dateOfService}</small>
                            </div>


                            <div class="d-flex w-100 justify-content-between">
                            <small>Advisor: {item.serviceAdvisor} // Tech: {item.technician}</small>

                            </div>
                            <p class="col-sm-9 mt-2 mb-1 ps-5">Customer Complaint: {item.customerConcern}</p>
                            <hr/>
                            <p class="col-sm-9 mb-1 ps-5">Diagnosis/Progress Updates: {item.technicianDiagnosis}</p>
                            <hr/>
                            <p class="col-sm-9 mb-1 ps-5">Parts Ordered: {item.partsOrdered}</p>
                        </a>
)}
                    </div>

                    

                   
                </div>
            </div>
        </div>

   
    )
}

export default CustomerItem