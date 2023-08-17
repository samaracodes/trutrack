import React from "react";
import { Link } from "react-router-dom";
import './ro.css'

const RepairOrders = ({ repairOrders }) => {

    console.log("All Repair Orders:")
    console.table(repairOrders)

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
                                <a href="#" data-bs-toggle="modal" data-bs-target=".add-new" class="btn btn-primary"><i class="bx bx-plus me-1"></i> Add New</a>
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
                                                <td><p class="mb-0">{ro.roNumber}</p></td>
                                                <td><p class="mb-0">{ro.customerName}</p></td>
                                                <td><p class="mb-0">{ro.year} {ro.make} {ro.model}</p></td>
                                                <td><p class="mb-0">{ro.serviceAdvisor}</p></td>
                                                <td><p class="mb-0">{ro.technician}</p></td>
                                                <td>
                                                    <ul class="list-inline mb-0">
                                                        <li class="list-inline-item">
                                                            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" class="px-2 text-primary"><i class="bx bx-pencil font-size-18"></i></a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a  data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" class="px-2 text-danger"><i class="bx bx-trash-alt font-size-18"></i></a>
                                                        </li>

                                                        <button type="button" class="btn btn-outline-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path>
                                                            </svg>
                                                            <span class="visually-hidden">Button</span>
                                                        </button>

                                                        <button type="button" class="btn btn-outline-danger ms-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path>
                                                            </svg>
                                                            <span class="visually-hidden">Button</span>
                                                        </button>
                                                        
                                                        <li class="list-inline-item dropdown">
                                                            <a class="text-muted dropdown-toggle font-size-18 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i class="bx bx-dots-vertical-rounded"></i></a>
                                                            <div class="dropdown-menu dropdown-menu-end">
                                                                <a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a>
                                                            </div>
                                                        </li>
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