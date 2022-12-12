import React from "react";
import { Link } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import axios from 'axios'


export default function Navbar() {

    const navigate = useNavigate()
    let uname = localStorage.getItem("uname")

    function logOut() {


        localStorage.clear();
        localStorage.removeItem("token")
        navigate('/')
        window.location.reload(false)
    }

    return (
        <Nav className="navbar navbar-expand-md navbar-dark bg-dark mg-4">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">ClimateView</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/viewbars">Climate measurements</Link>
                        </li>
                    </ul>

                    {localStorage.getItem("uname") ?
                    <Nav>
                        <NavDropdown title={uname} >
                            <NavDropdown.Item><Link onClick={logOut}>Logout</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="deleteuser">Delete account</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    :
                    <NavDropdown title="Login" >
                    <NavDropdown.Item><Link to="login">Login</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="signup">Signup</Link></NavDropdown.Item>
                            </NavDropdown>

            }
                </div>
            </div>
        </Nav>

    )
}