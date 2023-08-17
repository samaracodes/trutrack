import React from 'react'
import { Link, NavLink } from 'react-router-dom'
 
const Sidebar = () => {
    return (
      <nav id="sidebarMenu" className="min-vh-100 col-md-3 col-lg-2 d-md-block sidebar collapse bg-light">
        <div className="position-sticky pt-3">
            <ul className="nav flex-column text-start">
                <li className="sbni nav-item">
                    <NavLink to="/" className="nav-link" style={{ textDecoration: 'none' }} aria-current="page" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home me-2" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    Dashboard
                    </NavLink>
                </li>
                <hr/>

                <li className="sbni nav-item">
                    <NavLink to="/cars" className="nav-link" style={{ textDecoration: 'none' }}  href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users me-2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    Inventory
                    </NavLink>
                </li>
                <hr/>

                <li className="sbni nav-item">
                    <NavLink to="/repair-orders" className="nav-link" style={{ textDecoration: 'none' }}  href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart-2 me-2" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                    Repair Orders
                    </NavLink>
                </li>
                <hr/>
            </ul>
        </div>
      </nav>
        
    )
}

export default Sidebar