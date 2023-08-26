import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"


const RepairOrderEditForm = ({ onUpdateRO }) => {
    const { id } = useParams()

    const [formData, setFormData] = useState({
        year: "", 
        make: "", 
        model: "", 
        mileage: "", 
        vin: "", 
        customerName: "", 
        customerContact: "", 
        roNumber: "", 
        roDescription: "", 
        plateNumber: "",
        serviceAdvisor: "",
        technician: ""
    })

    const { year, make, model, mileage, vin, customerName, customerContact, roDescription, plateNumber } = formData

    const navigate = useNavigate()


    useEffect(() => {
        fetch(`http://localhost:3001/repair-orders/${id}`)
            .then((res) => res.json())
            .then((roItem) => setFormData(roItem))
    }, [])


    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

        console.log(`📥 Form Input via ${e.target.id}:  ${e.target.value}`);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const configObj = {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(formData),
        }

        fetch(`http://localhost:3001/repair-orders/${id}`, configObj)
          .then((resp) => resp.json())
          .then((updatedRO) => {

                onUpdateRO(updatedRO);
                console.log(`🎉 RO# ${id}: Successfully updated`);
                navigate("/repair-orders")
        });
    };


    return (
        <div class="container">
            <h1 class="mt-4">Edit RO</h1>
            <hr/>
            <div class="px-1 py-5">
                <form onSubmit={handleSubmit} class="">
                    <div class="row">
                        <div class="w-25 mb-3 col">
                            <label for="customerName" class="form-label">Customer Name</label>
                            <input type="text" class="form-control" id="inputCustomerName" name="customerName" value={customerName} onChange={handleOnChange} />
                        </div>

                        <div class="w-25 mb-3 col">
                            <label for="customerContact" class="form-label">Customer Contact</label>
                            <input type="text" class="form-control" id="inputCustomerContact" name="customerContact" value={customerContact} onChange={handleOnChange} />
                        </div>
                    </div>

                <div class="row">
                    <div class="w-25 mb-3 col">
                        <label for="inputVehicleYear" class="form-label">Vehicle Year</label>
                        <input type="text" class="form-control" id="inputVehicleYear" name="year" value={year} onChange={handleOnChange} />
                    </div>

                    <div class="w-25 mb-3 col">
                        <label for="inputVehicleMake" class="form-label">Vehicle Make</label>
                        <input type="text" class="form-control" id="inputVehicleMake" name="make" value={make} onChange={handleOnChange} />
                    </div>

                    <div class="w-25 mb-3 col ">
                        <label for="inputVehicleModel" class="form-label">Vehicle Model</label>
                        <input type="text" class="form-control" id="inputVehicleModel" name="model" value={model} onChange={handleOnChange} />
                    </div>
                    </div>

                    <div class="row">
                    <div class="w-25 mb-3 col">
                        <label for="inputVehicleMileage" class="form-label">Vehicle Mileage</label>
                        <input type="text" class="form-control" id="inputVehicleMileage" name="mileage" value={mileage} onChange={handleOnChange} />
                    </div>
                    

                    <div class="w-25 mb-3 col">
                        <label for="inputVehicleVIN" class="form-label">VIN#</label>
                        <input type="text" class="form-control" id="inputVehicleVIN" name="vin" value={vin} onChange={handleOnChange} />
                    </div>

                    <div class="w-25 mb-3 col">
                        <label for="inputVehiclePlate" class="form-label">Vehicle Plate #</label>
                        <input type="text" class="form-control" id="inputVehiclePlate" name="plateNumber" value={plateNumber} onChange={handleOnChange} />
                    </div>
                    </div>

                    {/* <div class="mb-3">
                        <label for="inputServiceAdvisor" class="form-label">Service Advisor</label>
                        <input type="text" class="form-control" id="inputServiceAdvisor" name="serviceAdvisor" value={serviceAdvisor} onChange={handleOnChange} />
                    </div>

                    <div class="mb-3">
                        <label for="inputTechnician" class="form-label">Technician </label>
                        <input type="text" class="form-control" id="inputTechnician" name="technician" value={technician} onChange={handleOnChange} />
                    </div> */}

                    <div class=" mb-3">
                        <label for="inputRODescription" class="form-label">Vehicle Concerns </label>
                        <textarea type="text" class="form-control" id="inputRODescription" name="roDescription" value={roDescription} onChange={handleOnChange} rows="4"/>
                    </div>

                    <button type="submit" class="btn btn-success">Submit New Changes</button>
                </form>
            </div>
        </div>
    )
}

export default RepairOrderEditForm
