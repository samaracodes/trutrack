import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const RepairOrderForm = ({ onAddRO }) => {
    const initialState = {
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
    }
    
    const navigate = useNavigate()

    const [formData, setFormData] = useState(initialState)

    const { year, make, model, mileage, vin, customerName, customerContact, roDescription, plateNumber, serviceAdvisor, technician } = formData


    const handleOnChange = (e) => {
        const { name, value } = e.target
        
        console.log(`📥 Form Input via ${e.target.id}:  ${e.target.value}`);

        setFormData((formData) => ({ ...formData, [name]: value }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        // Optomistic Rendering
        //Update "allROs" state with newest project
        onAddRO(formData)

        const configObj = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json",
          },
          body: JSON.stringify(formData),
        };
    

        //Add POST fetch request
        fetch("https://trutrack-backend.onrender.com/repair-orders", configObj)
          .then((res) => res.json())
          .then((newRO) => {
            if (newRO) {
                console.log(`🎉 New RO Successfully Submitted`)

                // merge newest listing into "allROs"
                onAddRO(newRO);

                //clear out form 
                setFormData(initialState);

                //redirect to homepage to see new RO
                navigate("/repair-orders")
            } else {
                console.error('Error', newRO)
            }

        });
    };
    
    return (
        <div class="container">
            <h1 class="mt-4">Create a New RO</h1>
            <hr/>

            <div class="px-1 py-5">
                <form onSubmit={handleSubmit} class="">
                    <div class="row">
                        <div class="w-25 mb-3 col">
                            <label class="form-label">Customer Name</label>
                            <input type="text" class="form-control"  name="customerName" value={customerName} onChange={handleOnChange} />
                        </div>

                        <div class="w-25 mb-3 col">
                            <label class="form-label">Customer Contact</label>
                            <input type="text" class="form-control" name="customerContact" value={customerContact} onChange={handleOnChange} />
                        </div>
                    </div>

                <div class="row">
                    <div class="w-25 mb-3 col">
                        <label class="form-label">Vehicle Year</label>
                        <input type="text" class="form-control"  name="year" value={year} onChange={handleOnChange} />
                    </div>

                    <div class="w-25 mb-3 col">
                        <label class="form-label">Vehicle Make</label>
                        <input type="text" class="form-control"  name="make" value={make} onChange={handleOnChange} />
                    </div>

                    <div class="w-25 mb-3 col ">
                        <label class="form-label">Vehicle Model</label>
                        <input type="text" class="form-control"  name="model" value={model} onChange={handleOnChange} />
                    </div>
                    </div>

                    <div class="row">
                    <div class="w-25 mb-3 col">
                        <label class="form-label">Vehicle Mileage</label>
                        <input type="text" class="form-control"  name="mileage" value={mileage} onChange={handleOnChange} />
                    </div>
                    

                    <div class="w-25 mb-3 col">
                        <label class="form-label">VIN#</label>
                        <input type="text" class="form-control"  name="vin" value={vin} onChange={handleOnChange} />
                    </div>

                    <div class="w-25 mb-3 col">
                        <label class="form-label">Vehicle Plate #</label>
                        <input type="text" class="form-control"  name="plateNumber" value={plateNumber} onChange={handleOnChange} />
                    </div>
                    </div>

                    <div class="mb-3">
                        <label for="inputServiceAdvisor" class="form-label">Service Advisor</label>
                        <input type="text" class="form-control"  name="serviceAdvisor" value={serviceAdvisor} onChange={handleOnChange} />
                    </div>

                    <div class="mb-3">
                        <label for="inputTechnician" class="form-label">Technician </label>
                        <input type="text" class="form-control"  name="technician" value={technician} onChange={handleOnChange} />
                    </div>

                    <div class=" mb-3">
                        <label class="form-label">Vehicle Concerns </label>
                        <textarea type="text" class="form-control"  name="roDescription" value={roDescription} onChange={handleOnChange} rows="4"/>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default RepairOrderForm