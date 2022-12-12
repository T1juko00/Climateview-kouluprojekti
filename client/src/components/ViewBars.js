import React from "react";
import V1_V7Graphs from "./V1-V7Graphs";
import V8_V9Graphs from "./V8-V9Graphs";
import {Routes, Route, useNavigate} from 'react-router-dom'
import { useEffect } from "react";
import styled from 'styled-components';

export default function ViewBars(){
  const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 17px;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
  const navigate = useNavigate();
  const NavigateToV1_V7 = () => {
    navigate('/V1_V7Graphs');
  };

  const NavigateToV8_V9 = () => {
    navigate('/V8_V9Graphs');
  };

return(
 <> 

 <h2>GRAPHS</h2>
  <div>
  <Button id="button" onClick={NavigateToV1_V7}>V1-V7&V10 Graphs</Button>
  <br></br>
  <Button id="button" onClick={NavigateToV8_V9}>V8 & V9 Graphs</Button>
  </div>

  </>
)
}