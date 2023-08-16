import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";

const Cars = ({ carInventory }) => {

    return (
        <div>            
            <div class="container-fluid">
                <div class="row">
                    <Sidebar />

                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-5">
                    <div class="d-flex justify-content-between flex-wrap align-items-center pt-3 pb-2 mb-3">
                        
                        <h1 class="h2">Car Inventory</h1>

                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            {carInventory.map((carItem) => 
                                <Link to ={`/cars/${carItem.id}`}>
                                    <div class="card h-100">
                                        <img src="./f80m3.webp" class="card-img-top" alt="..."/>
                                        
                                        <div class="card-body text-start">
                                            <p class="card-title">{carItem.customerName}
                                            </p>
                                            <p class="card-text">{carItem.year} {carItem.make} {carItem.model}</p>
                                            <p class="card-text text-muted">
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