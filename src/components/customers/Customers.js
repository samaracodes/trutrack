import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";

const Customers = ({ customers }) => {

    return (
        <div>
         
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-5">
                    <div className="d-flex justify-content-between flex-wrap align-items-center pt-3 pb-2 mb-3">
                        
                        <h2 className="h2 mb-3">Customer Inventory</h2>



                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {customers.map((item) => 

                                <Link to ={`/customers/${item.id}`} key={item.id}>
                                    <div key={item.id} className="card h-100 p-3">
                                        <img src="./f80m3.webp" className="card-img-top mx-auto img-thumbnail" alt="car image" />
                                        
                                        <div className="card-body text-start mt-2">
                                            <p className="card-title mb-0">{item.customerInfo.name}
                                            </p>
                                            <p className="card-text mb-0">{item.vehicleInfo.year} {item.vehicleInfo.make} {item.vehicleInfo.model}</p>
                                            <p className="card-text text-muted ">
                                                VIN:{item.vehicleInfo.vin}</p>
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

export default Customers