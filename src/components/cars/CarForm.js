import React from "react";

const CarForm = () => {
    return (

        <body class="container bg-light">
            <div class="text-center pt-5">
                <img src="../vectorart1.png" alt="network-logo" width="300" />
                <h2>Add New Vehicle</h2>
                <p>
                Below is an example form built entirely with Bootstrap's form controls.
                </p>
            </div>
            
            <div class="card">
                <div class="card-body">
                <form id="bookingForm" action="#" method="" class="needs-validation">

                    <div class="form-group mb-3">
                    <label for="inputName">Name</label>
                    <input type="text" class="form-control" id="inputName" name="name" placeholder="Enter name..." required />
                    </div>
                
                    <div class="form-group mb-3">
                    <label for="inputAddress">Address</label>
                    <input type="address" class="form-control" id="inputAddress" name="address" placeholder="Enter address..." />
                    </div>
                
                    <div class="form-group mb-3">
                    <label for="inputPhone">Phone</label>
                    <input type="tel" class="form-control" id="inputPhone" name="phone" placeholder="099xxxxxxx" pattern="\d{3}\d{3}\d{4}" required />
                    <small class="form-text text-muted">We'll never share your phone number with anyone else.</small>
                    </div>

                    <div class="form-group mb-3">
                    <label for="inputEmail">Email</label>
                    <input type="email" class="form-control" id="inputEmail" name="email" placeholder="Enter email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                    </div>

                    <div class="form-group mb-3">
                    <label for="inputYear">Vehicle Year</label>
                    <input type="text" class="form-control" id="inputYear" name="year" placeholder="Enter Year..." />
                    </div>

                    <div class="form-group mb-3">
                    <label for="inputMake">Vehicle Make</label>
                    <input type="text" class="form-control" id="inputMake" name="make" placeholder="Enter Make..." />
                    </div>

                    <div class="form-group mb-3">
                    <label for="inputModel">Vehicle Model</label>
                    <input type="text" class="form-control" id="inputModel" name="model" placeholder="Enter Model..." />
                    </div>

                    <div class="form-group mb-3">
                    <label for="inputVIN">VIN#</label>
                    <input type="vin" class="form-control" id="inputVin" name="vin" placeholder="Enter VIN..." />
                    </div>
                    
                    <div class="form-row mb-4">
                    <div class="form-group col-md-4">
                        <label for="inputDate">Date</label>
                        <input type="date" class="form-control" id="inputDate" name="date" required />
                        <small class="form-text text-muted">Please choose date and time for meeting.</small>
                    </div>
                    
                    
                    </div>

                    <div class="form-group mb-3">
                    <legend class="col-form-label pt-0">Choose a Room</legend>
                    <div class="form-check form-check-inline">
                        <input type="radio" class="form-check-input" id="inlineRadioType1" name="roomType" value="type1" required />
                        <label class="form-check-label" for="inlineRadioType1">Room 1 (10 People)</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" class="form-check-input" id="inlineRadioType2" name="roomType" value="type2" required />
                        <label class="form-check-label" for="inlineRadioType2">Room 2 (20 People)</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" class="form-check-input" id="inlineRadioType3" name="roomType" value="type3" required />
                        <label class="form-check-label" for="inlineRadioType3">Room 3 (30 People)</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" class="form-check-input" id="inlineRadioType4" name="roomType" value="type4" required />
                        <label class="form-check-label" for="inlineRadioType4">Room 4 (40 People)</label>
                    </div>
                    </div>

                    <hr />

                    <div class="form-group">
                    <label for="textAreaRemark">Notes</label>
                    <textarea class="form-control" name="remark" id="textAreaRemark" rows="2" placeholder="Tell us you want more..."></textarea>
                    </div>

                    <button class="btn btn-primary btn-block col-lg-2 mt-3 mb-2" type="submit">Submit</button>
                </form>
                </div>
            </div>
        </body>
    )
}

export default CarForm