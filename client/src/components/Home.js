import React from "react"
import { Nav, div } from 'react-bootstrap'
//import { Link } from "react-router-dom"
//import { Login } from "./Login"

export default function Home(loginForm) {

    let uname = localStorage.getItem("uname")

return (
            <Nav>
                {localStorage.getItem("uname") ?
                <Nav>
                <h4>Welcome, {uname}!</h4>
                <div>
                <br />
                <p>User login Status: {loginForm.userLoggedIn} "Is logged in"</p>
                </div>
                </Nav>
                :
                <div>User login Status: {loginForm.userLoggedOut} "Not logged in"</div>
        }
        </Nav>
    )
}