import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Home from './Home'
import App from '../App'
//import Constants from './Constants.json'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [uname, setUname] = useState('');
  const [pw, setPw] = useState('');

  const navigate = useNavigate();
  
  function CredentialsAsRequestParams(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('uname', uname);
    formData.append('pw', pw);

    //Save response token in localstorage
    try {
       axios.post('http://localhost:8080/login', formData)
      .then(response => localStorage.setItem("token", response.data))
      .catch(e=>console.log(e.message))
      navigate('/', { replace: true });

    } 
    catch (error) {
      console.error(error)
    }
    
  }
    return (
        <div>
           <h2>Log in</h2>
      <form onSubmit = { CredentialsAsRequestParams }>
        <div>
          Username <br />
          <input type="text" onChange={(e) => {setUname(e.target.value);}} />
        </div>
        <div>
          Password <br />
          <input type="password" onChange={(e) => {setPw(e.target.value);}} />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
            
        </div>
    )
    }