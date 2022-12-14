import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Login() {
  const [uname, setUname] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (event) => {

    event.preventDefault()
    axios.post('http://localhost:8080/login', {},
      {
        params: {
          uname,
          pw
        }
      }).then(response => {
        const token = response.data
        localStorage.setItem("token", response.data)
        localStorage.setItem("uname", uname, response.data)
        console.log(token)
        navigate('/')
        window.location.reload(false);
      }).catch(error => {
        alert("User doesn't exists, wrong username or password! Try again.")
        console.log(error)
        window.location.reload(false);
      })
  }
  return (

    <div>
      <h3>Login</h3>
        <form onSubmit = { handleSubmit }>
          <div>
            Username <br />
            <input type="text" onChange={(e) => {setUname(e.target.value);}}/>
            </div>
            <div>
            Password <br />
            <input type="password" onChange={(e) => {setPw(e.target.value);}}/>
            </div>
            <div>
          <button block="true" type="submit">Login</button>
          </div>
        </form>
      </div>
            
      )
  }