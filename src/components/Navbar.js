import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">TruTrack</a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/cars">Car Inventory</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/repair-orders">Repair Orders</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar