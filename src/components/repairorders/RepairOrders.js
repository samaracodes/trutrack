import React from "react";
import { Link } from "react-router-dom";
import './ro.css'

const RepairOrders = ({ repairOrders }) => {

    return (
        <div>            
            <div class="container mt-4">
                {/* // Heading // */}
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <h2 class="card-title text-start">Open Repair Orders <span class="text-muted fw-normal ms-2">({repairOrders.length})</span></h2>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
                            <div>
                                <ul class="nav nav-pills">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Grid" aria-label="Grid"><i class="bx bx-grid-alt"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <Link to="/repair-orders/new">
                                    <button type="button" class="btn btn-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill me-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>
                                        </svg>
                                        New RO
                                    </button>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* // List Group // */}
                <div class="row">
                    <div class="col-lg-12 mt-4">
                        <div class="">
                            <div class="table-responsive">
                                <table class="table project-list-table table-nowrap align-middle table-borderless text-start">
                                    <thead>
                                        <tr>
                                            <th scope="col">RO#</th>
                                            <th scope="col">Customer Name</th>
                                            <th scope="col">Vehicle</th>
                                            <th scope="col">Service Advisor</th>
                                            <th scope="col">Technician</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    
                {/* // List of RO's // */}
                                    {repairOrders.map((ro) => 
                                        <tbody key={ro.id}>         
                                            <tr>
                                                <td><p class="mb-0">{ro.id}</p></td>
                                                <td><p class="mb-0">{ro.customerName}</p></td>
                                                <td><p class="mb-0">{ro.year} {ro.make} {ro.model}</p></td>
                                                <td><p class="mb-0">{ro.serviceAdvisor}</p></td>
                                                <td><p class="mb-0">{ro.technician}</p></td>
                                                <td>
                                                    <ul class="list-inline mb-0">

                                                    <Link to={`/repair-orders/${ro.id}`}>
                                                        <button type="button" class="btn btn-outline-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                                                        </svg>
                                                        <span class="visually-hidden">View Button</span>
                                                        </button>
                                                    </Link>

                                                    {/* <Link to={`/repair-orders/${ro.id}/edit`}>
                                                        <button type="button" class="btn btn-outline-primary ms-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path>
                                                            </svg>
                                                            <span class="visually-hidden">Edit Button</span>
                                                        </button>
                                                    </Link> */}

            
                                                    
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    )}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row g-0 align-items-center pb-4">
                    <div class="col-sm-6 text-start">
                        <div><p class="mb-sm-0">Showing 1 to {repairOrders.length} entries</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RepairOrders