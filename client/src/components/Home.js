import React from "react"
import { Link } from "react-router-dom"

export default function Home(props) {
    return (
        <div>
            Welcome
            <div>
                User login Status: { props.userLoggedIn ? "Is logged in" : "Not logged in"}
            </div>
            <div>
                
            </div>
        </div>
    )
}