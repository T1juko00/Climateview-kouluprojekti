import React from "react"
import { Nav, div } from 'react-bootstrap'

export default function Home() {

    let uname = localStorage.getItem("uname")

return (
            <Nav>
                {localStorage.getItem("uname") ?
                <Nav>
                <h4>Welcome, {uname}!</h4>
                </Nav>
                :
                <div>Please sign up or log in</div>
        }
        </Nav>
    )
}