import React, { useState } from 'react'
import axios from 'axios'
//import Constants from "./Constants.json"
import { useNavigate } from 'react-router-dom'

export default function Signup() {

  const [signupProcessState, setSignupProcessState ] = useState("idle")

  const navigate = useNavigate();

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    setSignupProcessState("Processing");


    //Send a post request

    /*try {
      const result = await axios.post(Constants.API_ADDRESS + '/registerbasic', 
      {
        username: event.target.username.value,
        email: event.target.value,
        password: event.target.password.value
      });
    console.log(result);

   setSignupProcessState("signupSuccess");

   //timeout before navigating to login view
   setTimeout(() =>{
      navigate('/login', { replace: true });
   }, 1500)



    } catch (error) {
    console.error(error);
    setSignupProcessState("singupFailure")
    }*/

  }
  
  // Handles signup button
  let signupUIControls = null;
  switch(signupProcessState){

    case "idle":
      signupUIControls = <button type="submit">Signup</button>
      break;

    case "processing":
      signupUIControls = <span>Processing...</span>
      break;

    case "signupSuccess":
      signupUIControls = <span style = {{ color: "green" }}>Signup success</span>
      break;
    
    case "signupFailure":
      signupUIControls= <span style={{ color: "red" }}>Error</span>
      break;
  }

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={ handleSignupSubmit }>
        <div>
          Username <br />
          <input type="text" name= "username" />
        </div>
        <div>
          Email <br />
          <input type="text" name= "email" />
        </div>
        <div>
          Password <br />
          <input type="text" name= "password" />
        </div>
        <div>
          { signupUIControls }
        </div>
      </form>

    </div>
  )
}
