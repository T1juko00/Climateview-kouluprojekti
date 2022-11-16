import React from "react"
import { Link } from "react-router-dom"

export default function Home(props) {
    return (
        <div>
            Welcome
            <div>
                User login Status: { props.userLoggedIn ? "is logged in" : "not logged in"}
            </div>
            <div>
                { props.userLoggedIn ?
                    <>
                    <Link to="Visualize">See graphs</Link><br /> 
                    </>
                    :
                    <>
                    <Link to="signup">Sign up</Link><br />
                    <Link to="login">Log in</Link><br />
                    </>
                }
            </div>
        </div>
    )
}