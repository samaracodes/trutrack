import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#/trutrack">
                        <img src="public/brand-logo-trnsp.png" alt="truTrack brand logo" className="brand-logo d-inline-block align-text-top"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#/trutrack">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/customers">Customers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/repair-orders" >Repair Orders</a>
                    </li>
                    </ul>
                    <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar