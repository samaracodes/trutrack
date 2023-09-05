import { React, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";


const RepairOrderId = ({ onDeleteRO }) => {
    const { id } = useParams()
    const [roItem, setRoItem] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const navigate = useNavigate(0)

    useEffect(() => {
        fetch(`http://localhost:3001/repair-orders/${id}`)
        .then((response) => response.json())
        .then((roItem) => {
            setRoItem(roItem);
            setIsLoaded(!isLoaded);
        })
    }, [id])

    if (!isLoaded) return <h1>Please refresh...</h1>


    const handleDeleteClick = () => {
        fetch(`http://localhost:3001/repair-orders/${id}`, {
            method: "DELETE",
        })
            .then((resp) => onDeleteRO(roItem))
            .then(navigate("/repair-orders"))
            .then(window.location.reload())
    }


    return (
        <div class="container mt-3 pb-auto">
              
            <h2 class="mb-3">Vehicle History</h2>
    
            <div class="row gutters-sm">
                       
        {/* // Vehicle Profile Stats // */}
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center">
                            <img src="../f80m3.webp" alt="Admin" width="220"/>
                            <div class="mt-3">
                                <h4 className="border-bottom">{roItem.customerName}</h4>
                                <p class="text-muted mb-1">{roItem.carYear} {roItem.carMake} {roItem.carModel}</p>
                                <p class="text-muted mb-1">VIN: {roItem.carVin}</p>
                                <p class="text-muted mb-1">Miles: {roItem.carMileage}</p>
                                <p class="text-muted mb-1">Plate#: {roItem.carPlateNumber}</p>

                                {/* <Link to={`/repair-orders/${id}/edit`}type="submit" class="btn btn-primary mt-3 me-2" >Edit</Link>

                                <Link type="submit" class="btn btn-outline-danger mt-3" onClick={handleDeleteClick}>Delete</Link> */}

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
                            {roItem.customerName}
                        </div>
                    </div>

                    <hr/>
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Phone</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            {roItem.customerPhone}
                        </div>
                    </div>

                    <hr/>
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            {roItem.customerEmail}
                        </div>
                    </div>

                    <hr/>
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Address</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            {roItem.customerAddress}
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
                        <h5 class="card-title">Repair Orders</h5>
                    </div>

                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">RO#{roItem.id}</h5>
                                <small>Date:{roItem.dateOfService}</small>
                            </div>


                            <div class="d-flex w-100 justify-content-between">
                            <small>Advisor: {roItem.serviceAdvisor} // Tech: {roItem.technician}</small>

                            </div>
                            <p class="col-sm-9 mt-2 mb-1 ps-5">Customer Complaint: {roItem.customerConcern}</p>
                            <hr/>
                            <p class="col-sm-9 mb-1 ps-5">Diagnosis/Progress Updates: {roItem.technicianDiagnosis}</p>
                            <hr/>
                            <p class="col-sm-9 mb-1 ps-5">Parts Ordered: {roItem.partsOrdered}</p>
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default RepairOrderId