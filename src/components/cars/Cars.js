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
                        
                        <h1 className="h2">Car Inventory</h1>

                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {carInventory.map((carItem) => 
                                <Link to ={`/cars/${carItem.id}`} key={carItem.id}>
                                    <div key={carItem.id} className="card h-100">
                                        <img src="./f80m3.webp" className="card-img-top" alt="..."/>
                                        
                                        <div className="card-body text-start">
                                            <p className="card-title">{carItem.customerName}
                                            </p>
                                            <p className="card-text">{carItem.year} {carItem.make} {carItem.model}</p>
                                            <p className="card-text text-muted">
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