import React from "react";
import { Link } from "react-router-dom";

const Cars = ({ carInventory }) => {

    return (
        <div>
            <h1>Car Inventory</h1>
            
            <div class="card">
                {/* <ol class="list-group"> */}
                    {carInventory.map((car) => 
                    <ul class="list-group list-group-horizontal">
                    <li class="list-group-item flex-fill">
                            <div class="d-flex w-100 justify-content-between">
                                

                                <img class="row g-0" src="./f80m3.webp" alt="..." height="100" />
                                
                            </div>
                        
                    </li>
                    <li class="list-group-item flex-fill">

                            <p class="mb-1">{car.customerName}</p>
                    </li>
                    <li class="list-group-item flex-fill">
                            <p class="mb-1">{car.year} {car.make} {car.model}</p>
                    </li>
                    <li class="list-group-item flex-fill">
                            <small class="text-body-secondary">VIN: {car.vin}</small>
                        {/* </Link> */}
                        </li>
                        </ul>
                    )}
                {/* </ol> */}
            </div>
        </div>
    )
}

export default Cars