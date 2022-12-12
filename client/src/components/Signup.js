import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Signup(props) {

  const [signupProcessState, setSignupProcessState ] = useState("idle")
  const [uname, setUname] = useState('');
  const [pw, setPw] = useState('');
  const [email, setEmail] = useState('')
  const navigate = useNavigate();

  const HandleSignupSubmit = async (event) => {
    event.preventDefault();
    setSignupProcessState("Processing");
    const formData = new FormData();
    formData.append('uname', uname);
    formData.append('pw', pw);
    formData.append('email',email);

    //Send a post request
   try {
    const result = await axios.post("http://localhost:8080/register",formData) 
    setSignupProcessState("signupSuccess");
    console.log(result);

   //Timeout before navigating to login view
   setTimeout(() =>{
      navigate('/login', { replace: true });
   }, 1500)

   } catch (error) {

    console.error(error);
    setSignupProcessState("SignUpFailure")

   }
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

  // propsissa on arvo {props.testi}, value={props.konsta}
  return (
    <div>
      <h2>Sign up</h2>
  
      <form onSubmit={ HandleSignupSubmit }>
        <div>
          Username <br />
          <input type="text" onChange={(e) => setUname(e.target.value)}  />
        </div>
        <div>
          Email <br />
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          Password <br />
          <input type="password" onChange={(e) => setPw(e.target.value)} />
        </div>
        <div>
          { signupUIControls }
        </div>
      </form>

    </div>
  )
}



