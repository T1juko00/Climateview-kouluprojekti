import React from "react";
import V2 from './charts/V2'
import V3 from './charts/V3'
import V5 from './charts/V5'
import V6 from './charts/V6'
import V1_V7Graphs from "./V1-V7Graphs";
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

return(
 <> 

 <h2>GRAPHS</h2>
  <div>
  <Button id="button" onClick={NavigateToV1_V7}>V1-V7&V10 graphs</Button>
  <br></br>
  <Button id="button">V8 Graph</Button>
  </div>

  </>
)
}