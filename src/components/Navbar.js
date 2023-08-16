import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-light bg-light">
                <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="./brand-logo-trnsp.png" alt="truTrack brand logo" class="brand-logo d-inline-block align-text-top"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/cars">Car Inventory</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/repair-orders" >Repair Orders</a>
                    </li>
                    </ul>
                    <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar