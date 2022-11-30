import React from "react";
import {Link} from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap'
import axios from 'axios'
//import { useEffect, useState } from 'react'
import Logout from "./Logout";
import Login from "./Login"
//import { uname } from "./Login"

export default function Navbar () {
 /*   const [UserData, setUserData] = useState("")

    const GetUserData = () => {

    
    axios.get("http://localhost:8080/private")
    .then(response => {
        setUserData(response.data);
        console.log(UserData);

    }) .catch(error => {
        alert(error);
    })
    }

        useEffect(() => {
            GetUserData();
        } ,[])
*/

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mg-4">
            <div className="container-fluid">
                <Link  className="navbar-brand" to="/">ClimateView</Link>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                             <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/viewbars">Climate measurements</Link>
                            </li>
                        </ul> 
            <Nav>
                <NavDropdown title="Login" >
                    <NavDropdown.Item><Link to="login">Login</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="signup">Signup</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="logout">Logout</Link></NavDropdown.Item>
                    <NavDropdown.Item>Delete User</NavDropdown.Item>
            </NavDropdown>
        </Nav>
                        
                    </div>
                    
                </div>
            </nav>

    )
}