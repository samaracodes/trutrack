import React from "react";
import { Link } from "react-router-dom";

const RepairOrders = ({ repairOrders }) => {
    
    return (
        <div>
            <h1>Repair Orders</h1>
            
            <div class="card">
                <ul class="list-group">
                    {repairOrders.map((repairOrder) => 
                        <Link to={`/repair-orders/${repairOrder.id}`} class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">RO#{repairOrder.roNumber}</h5>
                                <small class="text-body-secondary">Status: OPEN</small>
                            </div>

                            <img src="https://mysterio.yahoo.com/mysterio/api/B859A8A68C69CD56542617906C43B0B8126C44DBE6B723294FE8126CC983DC08/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/CAC50BMC111A021001.jpg" alt="..." height="100" />

                            <p class="mb-1">{repairOrder.customerName}</p>
                            <p class="mb-1">{repairOrder.year} {repairOrder.make} {repairOrder.model}</p>
                            <small class="text-body-secondary">VIN: {repairOrder.vin}</small>
                        </Link>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default RepairOrders