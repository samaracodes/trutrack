import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"


const RepairOrderEditForm = ({ onUpdateRO }) => {
    const { id } = useParams()
    const navigate = useNavigate()


    const [formData, setFormData] = useState({
<<<<<<< HEAD
<<<<<<< HEAD
        year: "", 
        make: "", 
        model: "", 
        mileage: "", 
        vin: "", 
        customerName: "", 
        customerPhone: "",
        customerEmail: "", 
        roNumber: "", 
        roDescription: "", 
        plateNumber: "",
=======
=======
>>>>>>> main
        dateOfService: "",
        customerConcern: "",
        technicianDiagnosis: "",
        partsOrdered: "",
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> main
        serviceAdvisor: "",
        technician: "",
        carYear: "", 
        carMake: "", 
        carModel: "", 
        carMileage: "", 
        carVin: "", 
        carPlateNumber: "",
        customerName: "", 
        customerPhone: "",
        customerEmail: "",
        customerAddress: ""
    })

<<<<<<< HEAD
<<<<<<< HEAD
    const { year, make, model, mileage, vin, customerName, customerPhone, customerEmail, roDescription, plateNumber, serviceAdvisor, technician } = formData

    const navigate = useNavigate()
=======
=======
>>>>>>> main
    const { 
        dateOfService, customerConcern, technicianDiagnosis, partsOrdered, serviceAdvisor, technician, carYear, carMake, 
        carModel, carMileage, carVin, carPlateNumber, customerName, customerPhone, customerEmail, customerAddress
    } = formData
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> main


    useEffect(() => {
        fetch(`https://trutrack-backend.onrender.com/repair-orders/${id}`)
            .then((res) => res.json())
            .then((roItem) => setFormData(roItem))
    }, [])


    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
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
<<<<<<< HEAD
<<<<<<< HEAD
                            <label class="form-label">Customer Name</label>
                            <input type="text" class="form-control"  name="customerName" value={customerName} onChange={handleOnChange} />
                        </div>

                        <div class="w-25 mb-3 col">
                            <label class="form-label">Customer Phone</label>
                            <input type="text" class="form-control" name="customerPhone" value={customerPhone} onChange={handleOnChange} />
                        </div>

                        <div class="w-25 mb-3 col">
                            <label class="form-label">Customer Email</label>
                            <input type="text" class="form-control" name="customerEmail" value={customerEmail} onChange={handleOnChange} />
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
=======
                            <label for="name" class="form-label">Customer Name</label>
                            <input type="text" class="form-control" id="customerName" name="customerName" value={customerName} onChange={handleOnChange} />
                        </div>

                        <div class="w-25 mb-3 col">
                            <label for="phone" class="form-label">Phone</label>
                            <input type="text" class="form-control" id="inputPhone" name="customerPhone" value={customerPhone} onChange={handleOnChange} />
                        </div>

                        <div class="row">

                            <div class="w-25 mb-3 col">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" class="form-control" id="inputEmail" name="customerEmail" value={customerEmail} onChange={handleOnChange} />
                            </div>

                            <div class="w-25 mb-3 col">
                                <label for="address" class="form-label">Address</label>
                                <input type="text" class="form-control" id="inputAddress" name="customerAddress" value={customerAddress} onChange={handleOnChange} />
                            </div>
                        </div>
                    </div>
                    <hr/>

                <div class="row">
                    <div class="w-25 mb-3 col">
=======
                            <label for="name" class="form-label">Customer Name</label>
                            <input type="text" class="form-control" id="customerName" name="customerName" value={customerName} onChange={handleOnChange} />
                        </div>

                        <div class="w-25 mb-3 col">
                            <label for="phone" class="form-label">Phone</label>
                            <input type="text" class="form-control" id="inputPhone" name="customerPhone" value={customerPhone} onChange={handleOnChange} />
                        </div>

                        <div class="row">

                            <div class="w-25 mb-3 col">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" class="form-control" id="inputEmail" name="customerEmail" value={customerEmail} onChange={handleOnChange} />
                            </div>

                            <div class="w-25 mb-3 col">
                                <label for="address" class="form-label">Address</label>
                                <input type="text" class="form-control" id="inputAddress" name="customerAddress" value={customerAddress} onChange={handleOnChange} />
                            </div>
                        </div>
                    </div>
                    <hr/>

                <div class="row">
                    <div class="w-25 mb-3 col">
>>>>>>> main
                        <label for="inputYear" class="form-label">Vehicle Year</label>
                        <input type="text" class="form-control" id="inputYear" name="carYear" value={carYear} onChange={handleOnChange} />
                    </div>

                    <div class="w-25 mb-3 col">
                        <label for="inputVehicleMake" class="form-label">Vehicle Make</label>
                        <input type="text" class="form-control" id="inputVehicleMake" name="carMake" value={carMake} onChange={handleOnChange} />
                    </div>

                    <div class="w-25 mb-3 col ">
                        <label for="inputVehicleModel" class="form-label">Vehicle Model</label>
                        <input type="text" class="form-control" id="inputVehicleModel" name="carModel" value={carModel} onChange={handleOnChange} />
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> main
                    </div>
                    </div>

                    <div class="row">
<<<<<<< HEAD
<<<<<<< HEAD
                    <div class="w-25 mb-3 col">
                        <label class="form-label">Vehicle Mileage</label>
                        <input type="text" class="form-control"  name="mileage" value={mileage} onChange={handleOnChange} />
                    </div>
                    

                    <div class="w-25 mb-3 col">
                        <label class="form-label">VIN#</label>
                        <input type="text" class="form-control" name="vin" value={vin} onChange={handleOnChange} />
                    </div>

                    <div class="w-25 mb-3 col">
                        <label class="form-label">Vehicle Plate #</label>
                        <input type="text" class="form-control" name="plateNumber" value={plateNumber} onChange={handleOnChange} />
                    </div>
                    </div>

                    <div class="mb-3">
                        <label for="inputServiceAdvisor" class="form-label">Service Advisor</label>
                        <input type="text" class="form-control" name="serviceAdvisor" value={serviceAdvisor} onChange={handleOnChange} />
                    </div>

                    <div class="mb-3">
                        <label for="inputTechnician" class="form-label">Technician </label>
                        <input type="text" class="form-control" name="technician" value={technician} onChange={handleOnChange} />
                    </div>

                    <div class=" mb-3">
                        <label class="form-label">Vehicle Concerns </label>
                        <textarea type="text" class="form-control"  name="roDescription" value={roDescription} onChange={handleOnChange} rows="4"/>
=======
                        <div class="w-25 mb-3 col">
                            <label for="inputVehicleMileage" class="form-label">Vehicle Mileage</label>
                            <input type="text" class="form-control" id="inputVehicleMileage" name="carMileage" value={carMileage} onChange={handleOnChange} />
                        </div>
                        

                        <div class="w-25 mb-3 col">
                            <label for="inputVehicleVIN" class="form-label">VIN#</label>
                            <input type="text" class="form-control" id="inputVehicleVIN" name="carVin" value={carVin} onChange={handleOnChange} />
                        </div>

                        <div class="w-25 mb-3 col">
                            <label for="inputVehiclePlate" class="form-label">Vehicle Plate #</label>
                            <input type="text" class="form-control" id="inputVehiclePlate" name="carPlateNumber" value={carPlateNumber} onChange={handleOnChange} />
                        </div>
                    </div>

                    <div class="row">

                        <div class="w-25 mb-3 col">
                            <label for="inputServiceAdvisor" class="form-label">Service Advisor</label>
                            <input type="text" class="form-control" id="inputServiceAdvisor" name="serviceAdvisor" value={serviceAdvisor} onChange={handleOnChange} />
                        </div>

                        <div class="w-25 mb-3 col">
                            <label for="inputTechnician" class="form-label">Technician </label>
                            <input type="text" class="form-control" id="inputTechnician" name="technician" value={technician} onChange={handleOnChange} />
                        </div>
                    </div>

                    <div class="row">

                        <div class=" mb-3">
                            <label for="inputCustomerConcern" class="form-label">Customer Concerns </label>
                            <textarea type="text" class="form-control" id="inputCustomerConcern" name="customerConcern" value={customerConcern} onChange={handleOnChange} rows="4"/>
                        </div>

=======
                        <div class="w-25 mb-3 col">
                            <label for="inputVehicleMileage" class="form-label">Vehicle Mileage</label>
                            <input type="text" class="form-control" id="inputVehicleMileage" name="carMileage" value={carMileage} onChange={handleOnChange} />
                        </div>
                        

                        <div class="w-25 mb-3 col">
                            <label for="inputVehicleVIN" class="form-label">VIN#</label>
                            <input type="text" class="form-control" id="inputVehicleVIN" name="carVin" value={carVin} onChange={handleOnChange} />
                        </div>

                        <div class="w-25 mb-3 col">
                            <label for="inputVehiclePlate" class="form-label">Vehicle Plate #</label>
                            <input type="text" class="form-control" id="inputVehiclePlate" name="carPlateNumber" value={carPlateNumber} onChange={handleOnChange} />
                        </div>
                    </div>

                    <div class="row">

                        <div class="w-25 mb-3 col">
                            <label for="inputServiceAdvisor" class="form-label">Service Advisor</label>
                            <input type="text" class="form-control" id="inputServiceAdvisor" name="serviceAdvisor" value={serviceAdvisor} onChange={handleOnChange} />
                        </div>

                        <div class="w-25 mb-3 col">
                            <label for="inputTechnician" class="form-label">Technician </label>
                            <input type="text" class="form-control" id="inputTechnician" name="technician" value={technician} onChange={handleOnChange} />
                        </div>
                    </div>

                    <div class="row">

                        <div class=" mb-3">
                            <label for="inputCustomerConcern" class="form-label">Customer Concerns </label>
                            <textarea type="text" class="form-control" id="inputCustomerConcern" name="customerConcern" value={customerConcern} onChange={handleOnChange} rows="4"/>
                        </div>

>>>>>>> main
                        <div class=" mb-3">
                            <label for="inputTechnicianDiagnosis" class="form-label">Technician Diagnosis </label>
                            <textarea type="text" class="form-control" id="inputTechnicianDiagnosis" name="technicianDiagnosis" value={technicianDiagnosis} onChange={handleOnChange} rows="4"/>
                        </div>

                        <div class=" mb-3">
                            <label for="inputPartsOrdered" class="form-label">Parts Ordered</label>
                            <textarea type="text" class="form-control" id="inputPartsOrdered" name="partsOrdered" value={partsOrdered} onChange={handleOnChange} rows="4"/>
                        </div>
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> main
                    </div>

                    <button type="submit" class="btn btn-success">Submit New Changes</button>
                </form>
            </div>
        </div>
    )
}

export default RepairOrderEditForm
