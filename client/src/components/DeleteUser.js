import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function DeleteUser() {

    const navigate = useNavigate()
    const [deleteUser, setDeleteUser] = useState();
    let user = localStorage.getItem('uname');

    function logOut() {

        localStorage.clear();
        localStorage.removeItem("token")
        navigate('/')
        window.location.reload(false)
    }

    const DeleteAccount = (event) => {
        event.preventDefault();


        if (window.confirm("Are you sure you want to delete user?")) {
            axios.delete(`http://localhost:8080/delete/user/${user}`, deleteUser)
                .then(response => {
                    console.log("user deleted", response.data);
                    logOut();
                })
                .catch(error => {
                    console.log("something went wrong", error);
                })
        }
    }

    return (
        <div>
            <h3>Delete user</h3>
            <form onSubmit={DeleteAccount}>
                <div>
                    <br/>
                    <button type="submit" onClick={(e) => setDeleteUser(e.target.value)}>Delete</button>
                    < br />
                    < br />
                    <Link to="/home">Go back</Link>
                </div>
            </form>
        </div>
    )
}