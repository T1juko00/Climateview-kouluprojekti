import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function DeleteUser() {

      const [deleteUser, setDeleteUser] = useState();
      
      let user = localStorage.getItem('uname');

      const DeleteAccount = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.set('uname',deleteUser)
        
        axios.delete("http://localhost:8080/delete/user",formData)
        .then(response => {
          console.log("user deleted",response.data);
        })
        .catch(error => {
          console.log("something went wrong", error);
          console.log(user);
        })
      }

      useEffect(() => {
      }, []);
      
      return (
        <div>
          <h2>Delete user</h2>
          <form onSubmit={DeleteAccount}>
        <div>
          Username <br />
          <input type="text"/>
          <button type="submit" onClick={(e) => setDeleteUser(e.target.value)}>Delete</button>
        </div>
        </form>
        </div>
      )
}