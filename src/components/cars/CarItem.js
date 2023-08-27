import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './CarItem.css'

const CarItem = () => {
    const { id } = useParams()
    const [carItem, setCarItem] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(`https://trutrack-backend.onrender.com/car-inventory/${id}`)
        .then((response) => response.json())
        .then((carItem => {
            setCarItem(carItem)
            setIsLoaded(!isLoaded)
        }))
    }, [id])

    // if (!isLoaded) return <h1>Please refresh...</h1>

    const { year, make, model, mileage, vin, customerName, customerContact, roNumber, roDescription, plateNumber } = carItem
    
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
                            <img src="../f80m3.webp" alt="Admin" width="220"/>
                            <div class="mt-3">
                                <h4 className="border-bottom">{customerName}</h4>
                                <p class="text-muted mb-1">{year} {make} {model}</p>
                                <p class="text-muted mb-1">VIN: {vin}</p>
                                <p class="text-muted mb-1">Miles: {mileage}</p>
                                <p class="text-muted mb-1">Plate#: {plateNumber}</p>

                                <button class="btn btn-primary mt-3 me-2">Edit</button>
                                <button class="btn btn-outline-danger mt-3">Delete</button>
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
                            {customerContact}
                        </div>
                    </div>

                    <hr/>
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            sam@example.com
                        </div>
                    </div>

                    <hr/>
                    <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Address</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            100 Spring St New York, NY 10001
                        </div>
                    </div>
                </div>
                
                <hr/>
                
                <div class="row">
                <div class="col-lg-12 text-center mb-3">
                    <button type="submit" class="col-sm-3 btn btn-sm btn-primary">Edit</button>
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
                                <h5 class="mb-1">RO#{roNumber}</h5>
                                <small className="text-muted">/ 3 days ago</small>
                            </div>
                            <p class="col-sm-8 ms-5 mb-1 ps-5 text-muted">{roDescription}</p>
                        </a>
                    </div>

                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">RO#{roNumber}</h5>
                                <small className="text-muted">/ 3 days ago</small>
                            </div>
                            <p class="col-sm-8 ms-5 mb-1 ps-5 text-muted">{roDescription}</p>
                        </a>
                    </div>

                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">RO#{roNumber}</h5>
                                <small className="text-muted">/ 3 days ago</small>
                            </div>
                            <p class="col-sm-8 ms-5 mb-1 ps-5 text-muted">{roDescription}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>

   
    )
}

export default CarItem