import { React, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Sidebar from "../Sidebar";


const RepairOrderId = ({ onDeleteRO }) => {
    const { id } = useParams()
    const [roItem, setRoItem] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const navigate = useNavigate(0)

    useEffect(() => {
        fetch(`https://trutrack-backend.onrender.com/repair-orders/${id}`)
        .then((response) => response.json())
        .then((roItem => {
            setRoItem(roItem)
            setIsLoaded(!isLoaded)
        }))
    }, [id])

    const { year, make, model, mileage, vin, customerName, customerPhone, customerEmail, customerAddress, roDescription, plateNumber, dateOfService, serviceAdvisor, technician, roProgressUpdates, partsOrdered } = roItem

    const handleDeleteClick = () => {
        fetch(`https://trutrack-backend.onrender.com/repair-orders/${id}`, {
            method: "DELETE",
        })
            .then((resp) => onDeleteRO(roItem))
            .then(navigate("/repair-orders"))
            .then(window.location.reload())
    }

    return (
        
        <div class="container mt-3 pb-auto">
              
            <h3 class="mb-3">RO#{id} Summary</h3>
            <hr/>
    
            <div class="row gutters-sm">
                       
        {/* // Vehicle Profile Stats // */}
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center">
                            <img src="../f80m3.webp" alt="Admin" width="220"/>
                            <div class="mt-3">
                                <h4 className="border-bottom">{customerName}</h4>
                                <p class="text-muted mb-1">{year} {make} {model}</p>
                                <p class="text-muted mb-1">VIN: {vin}</p>
                                <p class="text-muted mb-1">Miles: {mileage}</p>
                                <p class="text-muted mb-1">Plate#: {plateNumber}</p>

                                {/* <Link to={`/repair-orders/${id}/edit`}type="submit" class="btn btn-primary mt-3 me-2" >Edit</Link>

                                <Link type="submit" class="btn btn-outline-danger mt-3" onClick={handleDeleteClick}>Delete</Link> */}

                            </div>
                        </div>
                    </div>
                </div>
            
            {/* // Social box links // */}
                
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
                            {customerName}
                        </div>
                    </div>

                    <hr/>
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Phone</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            {customerPhone}
                        </div>
                    </div>

                    <hr/>
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            {customerEmail}
                        </div>
                    </div>

                    <hr/>
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Address</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            {customerAddress}
                        </div>
                    </div>
                </div>
                
                <hr/>
                
                <div class="row">
                    <div class="col-lg-12 text-center mb-3">
                        <Link to={`/repair-orders/${id}/edit`} type="submit" class="col-sm-3 btn btn-sm btn-outline-primary me-2">Edit</Link>
                        
                        <Link type="submit" class="col-sm-3 btn btn-sm btn-danger" onClick={handleDeleteClick}>Delete</Link>
                    </div>
                </div>

               
        
                </div>
                </div>
            </div>

        {/* // Vehicle RO History // */}
            
        
                <div class="card text-start">
                    <div class="card-header">
                        <h4 class="card-title text-white">Repair Orders</h4>
                    </div>

                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                            <div class="heading d-flex w-100 justify-content-between">
                                <h5 class="mb-1">RO#{id}</h5>
                                <small>Date:{dateOfService}</small>
                            </div>


                            <div class="heading d-flex w-100 justify-content-between">
                            <small>Advisor: {serviceAdvisor} // Tech: {technician}</small>

                            </div>
                            <p class="col-sm-9 mt-2 mb-1 ps-5">Customer Complaint: {roDescription}</p>
                            <hr/>
                            <p class="col-sm-9 mb-1 ps-5">Diagnosis/Progress Updates: {roProgressUpdates}</p>
                            <hr/>
                            <p class="col-sm-9 mb-1 ps-5">Parts Ordered: {partsOrdered}</p>
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default RepairOrderId