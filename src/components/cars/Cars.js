import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";

const Cars = ({ carInventory }) => {

    return (
        <div>            
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-5">
                    <div className="d-flex justify-content-between flex-wrap align-items-center pt-3 pb-2 mb-3">
                        
                        <h2 className="h2 mb-3">Customers Inventory</h2>

                        <Link to="/cars/new">
                            <button type="button" class="btn btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill me-1" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>
                                </svg>
                                New Vehicle
                            </button>
                        </Link>

                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {carInventory.map((carItem) => 
                                <Link to ={`/cars/${carItem.id}`} key={carItem.id}>
                                    <div key={carItem.id} className="card h-100 p-3">
                                        <img src="./f80m3.webp" className="card-img-top mx-auto img-thumbnail" alt="car image" />
                                        
                                        <div className="card-body text-start mt-2">
                                            <p className="card-title mb-0">{carItem.customerName}
                                            </p>
                                            <p className="card-text mb-0">{carItem.year} {carItem.make} {carItem.model}</p>
                                            <p className="card-text text-muted ">
                                                VIN:{carItem.vin}</p>
                                        </div>
                                    </div>  
                                </Link>
                            )}
                        </div>
                    </div>

                    
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Cars